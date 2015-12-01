var CPUTimer = function(){
    this.timer = null;
};

CPUTimer.prototype = {

    nextInstruction: function(){
        cpu.performInstruction();
        if(cpu.pc<cpu.instructions.length){
            this.timer = setTimeout(cpuTimer.nextInstruction,1200);
        }
    },

    stop: function(){
        if(this.timer==null){
            return;
        }
        clearTimeout(this.timer);
        this.timer = null;
    }

};