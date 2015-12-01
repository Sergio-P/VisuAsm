var CPU = function(){
	this.RAM = new RAM(80);
	this.registers = new RegistersBlock();
	this.instructions = [];
	this.labels = {};
	this.pc = -1;
	this.cmp_flag = 0;
	this.stack = new Stack();
};


function get_argument(instruction){
	var index_start = instruction.indexOf('\'', 0) + 1;
	var index_end = instruction.indexOf('\'', index_start);
	return instruction.substring(index_start, index_end);
}

CPU.prototype = {
	cmp: function(reg1, reg2){
		var val1;
		var val2;
		if(this.registers.get(reg2) instanceof Register){
			if(this.registers.get(reg1) instanceof Register){
				val1 = this.registers.get(reg1).value;
				val2 = this.registers.get(reg2).value;
			}else{
				val1 = parseInt(reg1);
				val2 = this.registers.get(reg2).value;
			}
			console.log("val1 = " + val1 + ", val2 = " + val2);
			if(val1 > val2){
				this.cmp_flag = 1;
			}else if(val1 == val2){
				this.cmp_flag = 0;
			}else{
				this.cmp_flag = -1;
			}
		}
	},
	push: function(reg){
		if(this.registers.get(reg) instanceof Register){
			this.stack.push(this.registers.get(reg).value);
			canvasController.stackPush(this.registers.get(reg).value);
		}else{
			this.stack.push(parseInt(reg));
			canvasController.stackPush(reg);
		}
		this.registers.get("esp").value++;
		canvasController.updateReg("esp",this.registers.get("esp").value);
	},
	pop: function(reg1){
		this.registers.get(reg1).value = this.stack.pop();
		this.registers.get("esp").value--;
		canvasController.updateReg("esp",this.registers.get("esp").value);
		canvasController.stackPop();
	},
	mov: function(reg1, reg2){
		if(this.registers.get(reg2) instanceof Register){
			if(this.registers.get(reg1) instanceof Register){
				this.registers.get(reg2).value = this.registers.get(reg1).value;
			}else{
				this.registers.get(reg2).value = parseInt(reg1);
			}
			canvasController.updateReg(reg2,this.registers.get(reg2).value);
		}
	},
	add: function(reg1, reg2){
		if(this.registers.get(reg2) instanceof Register){
			if(this.registers.get(reg1) instanceof Register){
				this.registers.get(reg2).value += this.registers.get(reg1).value;
			}else{
				this.registers.get(reg2).value += parseInt(reg1);
			}
			canvasController.updateReg(reg2,this.registers.get(reg2).value);
		}
	},
	sub: function(reg1, reg2){
		if(this.registers.get(reg2) instanceof Register){
			if(this.registers.get(reg1) instanceof Register){
				this.registers.get(reg2).value -= this.registers.get(reg1).value;
			}else{
				this.registers.get(reg2).value -= parseInt(reg1);
			}
			canvasController.updateReg(reg2,this.registers.get(reg2).value);
		}
	},
	mul: function(reg1){
		var arg;
		if(this.registers.get(reg1) instanceof Register){
			arg = this.registers.get(reg1).value;
		}else{
			arg = parseInt(reg1);
		}
		var result = arg * this.registers.get("eax").value;
		this.registers.get("eax").value = result & 0xffffffff;
		this.registers.get("edx").value = Math.floor(result/Math.pow(2,32));
		canvasController.updateReg("eax",this.registers.get("eax").value);
		canvasController.updateReg("edx",this.registers.get("edx").value);
	},
	div: function(reg1){
		var arg;
		if(this.registers.get(reg1) instanceof Register){
			arg = this.registers.get(reg1).value;
		}else{
			arg = parseInt(reg1);
		}
		this.registers.get("edx").value = this.registers.get("eax").value%arg;
		this.registers.get("eax").value = Math.floor(this.registers.get("eax").value/arg);
		canvasController.updateReg("eax",this.registers.get("eax").value);
		canvasController.updateReg("edx",this.registers.get("edx").value);
	},
	shr: function(reg1){
		if(reg1 instanceof Register && this.registers.get(reg1) != null){
			this.registers.get(reg1).value = this.registers.get(reg1).value >> 1;
			canvasController.updateReg(reg1,this.registers.get(reg1).value);
		}
	},
	shl: function(reg1){
		if(reg1 instanceof Register && this.registers.get(reg1) != null){
			this.registers.get(reg1).value = this.registers.get(reg1).value << 1;
			canvasController.updateReg(reg1,this.registers.get(reg1).value);
		}
	},
	inc: function(reg){
		if(this.registers.get(reg) != null){
			this.registers.get(reg).value++;
			canvasController.updateReg(reg,this.registers.get(reg).value);
		}
	},
	dec: function(reg){
		if(this.registers.get(reg) != null){
			this.registers.get(reg).value--;
			canvasController.updateReg(reg,this.registers.get(reg).value);
		}
	},
	restart: function () {
		this.pc = 0;
		for(var reg in this.registers.array){
			this.registers.get(reg).value = 0;
		}
		canvasController.updateAllRegs();
	},
	label: function(label){
		// do nothing
	},
	setInstructions: function (ins){
		this.labels = {};
		this.instructions = ins;
		for(var i in ins){
			var instruction = ins[i];
			if(instruction.substring(0,5) == "label"){
				var label_name = get_argument(instruction);
				this.labels[label_name] = i;
			}
		}
		this.restart();
	},
	performInstruction: function(){
		var inst;
		if (this.pc < this.instructions.length) {
			this.pc++;
			inst = this.instructions[this.pc - 1];
			inst = inst.replace(/'\(/g, "'");
			inst = inst.replace(/\)'/g, "'");
			console.log("this." + inst);
			canvasController.updateInstText(inst);
			eval("this." + inst);
		}
	},
	jmp: function(label){
		this.pc = this.labels[label];
	},
	je: function(label){
		if(this.cmp_flag == 0){
			this.jmp(label);
		}
	},
	jne: function(label){
		if(this.cmp_flag != 0){
			this.jmp(label);
		}
	},
	jg: function(label){
		if(this.cmp_flag > 0){
			this.jmp(label);
		}
	},
	jge: function(label){
		if(this.cmp_flag >= 0){
			this.jmp(label);
		}
	},
	jl: function(label){
		if(this.cmp_flag < 0){
			this.jmp(label);
		}
	},
	jle: function(label){
	if(this.cmp_flag <= 0){
		this.jmp(label);
	}
}
};