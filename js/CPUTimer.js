var CPUTimer = function(){
    this.timer = null;
};

CPUTimer.prototype = {

    nextInstruction: function(){
        cpu.performInstruction();
        if(cpu.pc<cpu.instructions.length && this.isTiming){
            this.timer = setTimeout(function () { cpuTimer.nextInstruction(); },1200);
        }
        else{
            this.stop();
        }
    },

    stop: function(){
        this.isTiming = false;
        if(this.timer==null){
            return;
        }
        clearTimeout(this.timer);
        this.timer = null;
    }

};