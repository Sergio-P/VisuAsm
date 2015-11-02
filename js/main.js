function main(){
    var blocklyController = new BlocklyController();
    blocklyController.initDiv("blockly-container");
}

$(document).ready(main);