var CanvasController = function(cv){
	this.cv = oCanvas.create({
		canvas: cv,
		fps: 30
	});
	this.cv.width = 550;
	this.cv.height = 600;
	this.initDraw();
};

CanvasController.prototype = {
	initDraw: function(){
		this.cpuRegs = {
			"eax": new CanvasCell(this.cv, 50, 100, "eax", "0x00", "#06C"),
			"ebx": new CanvasCell(this.cv, 50+70, 100, "ebx", "0x00", "#06C"),
			"ecx": new CanvasCell(this.cv, 50+140, 100, "ecx", "0x00", "#06C"),
			"edx": new CanvasCell(this.cv, 50+210, 100, "edx", "0x00", "#06C"),
			"esp": new CanvasCell(this.cv, 50, 100+50, "esp", "0x00", "#093"),
			"ebp": new CanvasCell(this.cv, 50+70, 100+50, "ebp", "0x00", "#093")
		};
		this.stack = [];
		this.drawText("R-Bank:",50,30);
		this.drawText("Stack:",400,30);
	},

	stackPush: function(text){
		var r = new CanvasCell(this.cv, 400, this.stack.length*30+60,"",text,"#999");
		this.stack.push(r);
	},

	stackPop: function(){
		if(this.stack.length==0) return;
		var r = this.stack.pop();
		r.remove();
	},

	drawText: function(text,x,y){
		var LText = this.cv.display.text({
			x: x,
			y: y,
			origin: { x: "center", y: "center" },
			align: "center",
			font: "20px monospace",
			text: text,
			fill: "#000"
		});
		this.cv.addChild(LText);
	}

};

