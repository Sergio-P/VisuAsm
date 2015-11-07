var RegistersBlock = function(){
	this.array= {};
	this.array["eax"] = new Register();
	this.array["ebx"] = new Register();
	this.array["ecx"] = new Register();
	this.array["edx"] = new Register();
	
	this.array["esp"] = new Register();
	this.array["ebp"] = new Register();
};

RegistersBlock.prototype = {
	get: function(register_name){
		return this.array[register_name];
	}
};