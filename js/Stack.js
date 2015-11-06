var Stack = function(){
	this.array = [];
	this.currentIndex = -1;
}

Stack.prototype = {
	peek: function(){
		if(this.currentIndex < 0)return null;
		return array[currentIndex];
	},
	pop: function(){
		if(this.currentIndex < 0)return null;
		return array[this.currentIndex--];
	},
	push: function(item){
		this.array[this.currentIndex++] = item;
	},
	size: function(){
		return this.currentIndex + 1;
	},
	is_empty: function(){
		return this.currentIndex < 0;
	}
}

