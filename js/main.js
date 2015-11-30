var blocklyController;
var canvasController;
var cpu;

function main(){
	//Initialize
	blocklyController = new BlocklyController();
	blocklyController.initDiv("blockly-container");
	canvasController = new CanvasController("#visualizer");
	cpu = new CPU();

	//Callbacks
	$("#restart-btn").click(function(){
		cpu.setInstructions(blocklyController.getCode());
	});

	$("#step-btn").click(function(){
		cpu.performInstruction();
	});

}

$(document).ready(main);