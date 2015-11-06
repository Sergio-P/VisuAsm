Blockly.Blocks['label'] = {
	init: function() {
		this.appendDummyInput()
			.appendField("Label:")
			.appendField(new Blockly.FieldTextInput("label1"), "NAME");
		this.setInputsInline(false);
		this.setPreviousStatement(true);
		this.setNextStatement(true);
		this.setColour(20);
		this.setTooltip('');
	}
};

Blockly.Blocks['mov'] = {
	init: function() {
		this.appendValueInput("src")
			.appendField("mov");
		this.appendValueInput("dest")
			.appendField(", ");
		this.setInputsInline(true);
		this.setPreviousStatement(true);
		this.setNextStatement(true);
		this.setColour(135);
		this.setTooltip('');
	}
};

Blockly.Blocks['const'] = {
	init: function() {
		this.appendDummyInput()
			.appendField("$")
			.appendField(new Blockly.FieldTextInput("0"), "val");
		this.setInputsInline(true);
		this.setOutput(true, "Number");
		this.setColour(60);
		this.setTooltip('');
	}
};

Blockly.Blocks['ref'] = {
	init: function() {
		this.appendDummyInput()
			.appendField("%")
			.appendField(new Blockly.FieldDropdown([["eax", "eax"], ["ebx", "ebx"], ["ecx", "ecx"], ["edx", "edx"]]), "reg");
		this.setInputsInline(true);
		this.setOutput(true, "String");
		this.setColour(60);
		this.setTooltip('');
	}
};

Blockly.Blocks['arithmetic'] = {
	init: function() {
		this.appendValueInput("src")
			.appendField(new Blockly.FieldDropdown([["add", "add"], ["sub", "sub"], ["mul", "mul"], ["div", "div"], ["shr", "shr"], ["shl", "shl"], ["ror", "ror"], ["rol", "rol"]]), "operator");
		this.appendValueInput("dest")
			.appendField(",");
		this.setInputsInline(true);
		this.setPreviousStatement(true);
		this.setNextStatement(true);
		this.setColour(0);
		this.setTooltip('');
	}
};

Blockly.Blocks['incr'] = {
	init: function() {
		this.appendValueInput("src")
			.appendField(new Blockly.FieldDropdown([["inc", "inc"], ["dec", "dec"]]), "operator");
		this.setInputsInline(true);
		this.setPreviousStatement(true);
		this.setNextStatement(true);
		this.setColour(0);
		this.setTooltip('');
	}
};