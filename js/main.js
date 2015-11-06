var blocklyController;

function main(){
	blocklyController = new BlocklyController();
	blocklyController.initDiv("blockly-container");
}

$(document).ready(main);