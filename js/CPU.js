var CPU = function(){
	this.RAM = new RAM(80);
	this.registers = new RegistersBlock();
	this.instructions = [];
	this.pc = -1;
};

CPU.prototype = {
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
		this.registers.get("edx").value = result/Math.pow(2,32);
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
		if(this.registers[reg] != null){
			this.registers[reg].value++;
			canvasController.updateReg(reg,this.registers.get(reg).value);
		}
	},
	dec: function(reg){
		if(this.registers[reg] != null){
			this.registers[reg].value--;
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
	setInstructions: function (ins){
		this.instructions = ins;
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
			eval("this." + inst);
		}
	}

};