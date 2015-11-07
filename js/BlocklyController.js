
var BlocklyController = function(){};

BlocklyController.prototype = {
	
	initDiv: function(div){
		this.workspace = Blockly.inject(div, {toolbox: document.getElementById('toolbox')});
	},
	
	getCode: function(){
		var codeArray = Blockly.JavaScript.workspaceToCode(this.workspace).split("#");
		codeArray.pop();
		return codeArray;
	}

};