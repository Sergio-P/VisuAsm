
var BlocklyController = function(div){};

BlocklyController.prototype = {
    initDiv: function(div){
        this.workspace = Blockly.inject(div, {toolbox: document.getElementById('toolbox')});
    }
};