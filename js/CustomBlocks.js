Blockly.Blocks['label'] = {
	init: function() {
		this.appendDummyInput()
			.appendField("Label:")
			.appendField(new Blockly.FieldTextInput("label1"), "label");
		this.setInputsInline(false);
		this.setPreviousStatement(true);
		this.setNextStatement(true);
		this.setColour(20);
		this.setTooltip('');
	}
};

Blockly.JavaScript['label'] = function(block) {
	var value_c2 = block.getFieldValue('label');
	var code = "label('"+value_c2+"');#";
	return [code,Blockly.JavaScript.ORDER_ADDITION];
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

Blockly.JavaScript['mov'] = function(block) {
	var value_c1 = Blockly.JavaScript.valueToCode(block, 'src', Blockly.JavaScript.ORDER_ATOMIC);
	var value_c2 = Blockly.JavaScript.valueToCode(block, 'dest', Blockly.JavaScript.ORDER_ATOMIC);
	var code = "mov('"+value_c1+"','"+value_c2+"');#";
	return [code,Blockly.JavaScript.ORDER_ADDITION];
};

Blockly.Blocks['const'] = {
	init: function() {
		this.appendDummyInput()
			.appendField("$")
			.appendField(new Blockly.FieldTextInput("0"), "val");
		this.setInputsInline(true);
		this.setOutput(true, "String");
		this.setColour(60);
		this.setTooltip('');
	}
};

Blockly.JavaScript['const'] = function(block) {
	var dropdown_type = block.getFieldValue('val');
	var code = dropdown_type;
	return [code,Blockly.JavaScript.ORDER_ADDITION];
};

Blockly.Blocks['ref'] = {
	init: function() {
		this.appendDummyInput()
			.appendField("%")
			.appendField(new Blockly.FieldDropdown([["eax", "eax"], ["ebx", "ebx"], ["ecx", "ecx"], ["edx", "edx"], ["esp", "esp"], ["ebp", "ebp"]]), "reg");
		this.setInputsInline(true);
		this.setOutput(true, "String");
		this.setColour(60);
		this.setTooltip('');
	}
};

Blockly.JavaScript['ref'] = function(block) {
	var dropdown_type = block.getFieldValue('reg');
	var code = dropdown_type;
	return [code,Blockly.JavaScript.ORDER_ADDITION];
};

Blockly.Blocks['arithmetic'] = {
	init: function() {
		this.appendValueInput("src")
			.appendField(new Blockly.FieldDropdown([["add", "add"], ["sub", "sub"], ["shr", "shr"], ["shl", "shl"]]), "operator");
		this.appendValueInput("dest")
			.appendField(",");
		this.setInputsInline(true);
		this.setPreviousStatement(true);
		this.setNextStatement(true);
		this.setColour(0);
		this.setTooltip('');
	}
};

Blockly.JavaScript['arithmetic'] = function(block) {
	var dropdown_type = block.getFieldValue('operator');
	var value_c1 = Blockly.JavaScript.valueToCode(block, 'src', Blockly.JavaScript.ORDER_ATOMIC);
	var value_c2 = Blockly.JavaScript.valueToCode(block, 'dest', Blockly.JavaScript.ORDER_ATOMIC);
	var code = dropdown_type+"('"+value_c1+"','"+value_c2+"');#";
	return [code,Blockly.JavaScript.ORDER_ADDITION];
};

Blockly.Blocks['incr'] = {
	init: function() {
		this.appendValueInput("src")
			.appendField(new Blockly.FieldDropdown([["mul", "mul"], ["div", "div"], ["inc", "inc"], ["dec", "dec"]]), "operator");
		this.setInputsInline(true);
		this.setPreviousStatement(true);
		this.setNextStatement(true);
		this.setColour(0);
		this.setTooltip('');
	}
};

Blockly.JavaScript['incr'] = function(block) {
	var dropdown_type = block.getFieldValue('operator');
	var value_label = Blockly.JavaScript.valueToCode(block, 'src', Blockly.JavaScript.ORDER_ATOMIC);
	var code = dropdown_type+"('"+value_label+"');#";
	return [code,Blockly.JavaScript.ORDER_ADDITION];
};

Blockly.Blocks['cmp'] = {
	init: function() {
		this.appendValueInput("c1")
				.appendField(new Blockly.FieldDropdown([["cmp", "cmp"], ["test", "test"]]), "type");
		this.appendValueInput("c2")
				.appendField(",");
		this.setInputsInline(true);
		this.setPreviousStatement(true);
		this.setNextStatement(true);
		this.setColour(210);
		this.setTooltip('');
	}
};

Blockly.JavaScript['cmp'] = function(block) {
	var dropdown_type = block.getFieldValue('type');
	var value_c1 = Blockly.JavaScript.valueToCode(block, 'c1', Blockly.JavaScript.ORDER_ATOMIC);
	var value_c2 = Blockly.JavaScript.valueToCode(block, 'c2', Blockly.JavaScript.ORDER_ATOMIC);
	var code = dropdown_type+"('"+value_c1+"','"+value_c2+"');#";
	return [code,Blockly.JavaScript.ORDER_ADDITION];
};

Blockly.Blocks['jump'] = {
	init: function() {
		this.appendDummyInput()
				.appendField(new Blockly.FieldDropdown([["jmp", "jmp"], ["je", "je"], ["jne","jne"], ["jg","jg"], ["jge", "jge"], ["jl","jl"], ["jle", "jle"]]), "type")
				.appendField(new Blockly.FieldTextInput("label1"), "label");
		this.setInputsInline(true);
		this.setPreviousStatement(true);
		this.setNextStatement(true);
		this.setColour(230);
		this.setTooltip('');
	}
};

Blockly.JavaScript['jump'] = function(block) {
	var dropdown_type = block.getFieldValue('type');
	var value_label = block.getFieldValue('label');
	var code = dropdown_type+"('"+value_label+"');#";
	return [code,Blockly.JavaScript.ORDER_ADDITION];
};


Blockly.Blocks['stack'] = {
	init: function() {
		this.appendValueInput("src")
			.appendField(new Blockly.FieldDropdown([["push", "push"], ["pop", "pop"]]), "type");
		this.setInputsInline(true);
		this.setPreviousStatement(true);
		this.setNextStatement(true);
		this.setColour(330);
		this.setTooltip('');
	}
};

Blockly.JavaScript['stack'] = function(block) {
	var dropdown_type = block.getFieldValue('type');
	var value_label = Blockly.JavaScript.valueToCode(block, 'src', Blockly.JavaScript.ORDER_ATOMIC);
	var code = dropdown_type+"('"+value_label+"');#";
	return [code,Blockly.JavaScript.ORDER_ADDITION];
};