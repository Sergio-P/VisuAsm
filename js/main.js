var blocklyController;
var canvasController;
var cpu;
var cpuTimer;

function main(){
	//Initialize
	blocklyController = new BlocklyController();
	blocklyController.initDiv("blockly-container");
	canvasController = new CanvasController("#visualizer");
	cpu = new CPU();
	cpuTimer = new CPUTimer();

	//Callbacks
	$("#restart-btn").click(function(){
		cpu.setInstructions(blocklyController.getCode());
	});

	$("#step-btn").click(function(){
		cpu.performInstruction();
	});

	$("#play-btn").click(function(){
		cpu.setInstructions(blocklyController.getCode());
		cpuTimer.isTiming = true;
		cpuTimer.nextInstruction();
	});

	$("#stop-btn").click(function(){
		cpuTimer.stop();
	});

}

$(document).ready(main);