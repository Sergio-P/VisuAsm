var RAM = function(max_size){
	this.array = [];
	this.array[max_size-1] = 0;
	this.max_size = max_size;
	this.stack = new Stack();
};

RAM.prototype = {
	get: function(address){
		if(address >= max_size)return null;
		return this.array[address];
	},
	set: function(address, item){
		if(address >= max_size)return;
		this.array[address] = item;
	}
};