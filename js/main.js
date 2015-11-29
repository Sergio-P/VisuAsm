var blocklyController;
var canvasController;

function main(){
	blocklyController = new BlocklyController();
	blocklyController.initDiv("blockly-container");
	canvasController = new CanvasController("#visualizer");
}

$(document).ready(main);