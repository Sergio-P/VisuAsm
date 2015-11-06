var CPU = function(){
	this.RAM = new RAM(80);
	this.registers = new RegistersBlock();
}

CPU.prototype = {
	mov: function(reg1, reg2){
		if(this.registers[reg1] instanceof Register){
			this.registers[reg2].value = this.registers[reg1].value;
		}else if(this.registers[reg2] != null){
			this.registers[reg2].value = reg1;
		}
	},
	add: function(reg1, reg2){
		if(this.registers[reg1] instanceof Register){
			this.registers[reg2].value += this.registers[reg1].value;
		}else if(this.registers[reg2] != null){
			this.registers[reg2].value += reg1;
		}
	},
	sub: function(reg1, reg2){
		if(this.registers[reg1] instanceof Register){
			this.registers[reg2].value -= this.registers[reg1].value;
		}else if(this.registers[reg2] != null){
			this.registers[reg2].value -= reg1;
		}
	},
	mul: function(reg1){
		var arg;
		if(this.registers[reg1] instanceof Register){
			arg = this.registers[reg1].value;
		}else{
			arg = reg1;
		}
		var result = arg * this.registers["eax"].value;
		this.registers["eax"].value = result && 0xffffffff;
		this.registers["edx"].value = result/pow(2,32);
	}
	shr: function(reg1){
		if(reg1 instanceof Register && this.registers[reg1] != null){
			this.registers[reg1].value = this.registers[reg1].value >> 1;
		}
	},
	shl: function(reg1){
		if(reg1 instanceof Register && this.registers[reg1] != null){
			this.registers[reg1].value = this.registers[reg1].value << 1;
		}
	},
	inc: function(reg){
		if(this.registers[reg] != null){
			this.registers[reg].value++;
		}
	},
	dec: function(reg){
		if(this.registers[reg] != null){
			this.registers[reg].value--;
		}
	},

}