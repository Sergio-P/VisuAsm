var CanvasController = function(cv){
	this.cv = oCanvas.create({
		canvas: cv,
		fps: 30
	});
	this.cv.width = 550;
	this.cv.height = 550;
	this.initDraw();
	this.instText = null;
};

CanvasController.prototype = {
	initDraw: function(){
		this.cpuRegs = {
			"eax": new CanvasCell(this.cv, 50, 100, "eax", "0", "#06C"),
			"ebx": new CanvasCell(this.cv, 50+70, 100, "ebx", "0", "#06C"),
			"ecx": new CanvasCell(this.cv, 50+140, 100, "ecx", "0", "#06C"),
			"edx": new CanvasCell(this.cv, 50+210, 100, "edx", "0", "#06C"),
			"esp": new CanvasCell(this.cv, 50, 100+50, "esp", "0", "#093"),
			"ebp": new CanvasCell(this.cv, 50+70, 100+50, "ebp", "0", "#093")
		};
		this.stack = [];
		this.drawText("R-Bank:",50,30);
		this.drawText("Stack:",400,30);
		this.updateInstText("");
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

	updateReg: function(reg,text){
		this.cpuRegs[reg].updateText(text);
	},

	updateAllRegs: function(){
		for(var reg in this.cpuRegs){
			this.cpuRegs[reg].updateText("0");
		}
		while(this.stack.length>0){
			this.stackPop();
		}
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
	},

	updateInstText: function(text){
		console.log(text);
		text = text.replace(/'/g, " ");
		text = text.replace(/\(/g, " ");
		text = text.replace(/\)/g, " ");
		text = text.replace(/;/g, " ");
		console.log(text);
		if(this.instText==null){
			this.instText = this.cv.display.text({
				x: 300,
				y: 520,
				origin: { x: "center", y: "center" },
				align: "center",
				font: "18px monospace",
				text: text,
				fill: "#000"
			});
			this.cv.addChild(this.instText);
		}
		else{
			this.instText.text = text;
			this.instText.redraw();
		}
	}

};

