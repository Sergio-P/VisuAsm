var CanvasController = function(cv){
	this.cv = oCanvas.create({
		canvas: cv,
		fps: 30
	});
	this.cv.width = 500;
	this.cv.height = 500;
	this.initDraw();
};

CanvasController.prototype = {
	initDraw: function(){
		this.cpuRegs = {
			"eax": new CanvasCell(this.cv, 100, 100, "eax", "0xF3", "#06C"),
			"ebx": new CanvasCell(this.cv, 100+70, 100, "ebx", "0xF3", "#06C"),
			"ecx": new CanvasCell(this.cv, 100+140, 100, "ecx", "0xF3", "#06C"),
			"edx": new CanvasCell(this.cv, 100+210, 100, "edx", "0xF3", "#06C"),
			"esp": new CanvasCell(this.cv, 100, 100+50, "esp", "0xF3", "#093"),
			"ebp": new CanvasCell(this.cv, 100+70, 100+50, "ebp", "0xF3", "#093")
		};
	}
};

