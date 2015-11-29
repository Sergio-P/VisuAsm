var CanvasCell = function(cv,x,y,label,text,color){
	this.x = x;
	this.y = y;
	this.label = label;
	this.text = text;
	this.color = color;
	this.cv = cv;
	this.draw();
}

CanvasCell.prototype = {

	draw: function(){
		this.button = this.cv.display.rectangle({
			x: this.x,
			y: this.y,
			origin: { x: "center", y: "center" },
			width: 52,
			height: 22,
			fill: this.color,
			stroke: "4px "+this.color,
			join: "round"
		});
		var buttonText = this.cv.display.text({
			x: 0,
			y: 0,
			origin: { x: "center", y: "center" },
			align: "center",
			font: "18px monospace",
			text: this.text,
			fill: "#fff"
		});
		var labelText = this.cv.display.text({
			x: -16,
			y: -18,
			origin: { x: "center", y: "center" },
			align: "center",
			font: "14px monospace",
			text: this.label,
			fill: "#000"
		});
		this.button.addChild(buttonText);
		this.button.addChild(labelText);
		this.cv.addChild(this.button);
	},

	updateText: function(text){
		this.text = text;
		this.button.children[0].text = text;
		this.button.children[0].opacity = 0;
		this.button.children[0].fadeIn("normal");
	},

	remove: function(){
		this.button.remove();
	}

};