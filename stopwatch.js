function StopWatch(){
    let duration = 0;
    let statusCheck = 0;
    let startTime;
    let endTime;

    this.start = function(){
        if (statusCheck === 1) {
            document.getElementById("result").innerText = "Stop Watch is already started.";
        } else {
            statusCheck = 1;
            startTime = new Date().getTime();
            document.getElementById("result").innerText = "Stop Watch has been started.";
        }
    };

    this.stop = function(){
        if(statusCheck === 0){
            document.getElementById("result").innerText = "Stop Watch is already stopped.";
        } else {
            statusCheck = 0;
            endTime = new Date().getTime();
            duration = (endTime - startTime) /1000;
            document.getElementById("result").innerText = 
            "Stop watch has been stopped. Total Duration: " + duration + " Seconds.";
        }
    };

    Object.defineProperty(this, 'duration',{
        get: function(){
            return duration;}
    });

    this.reset = function(){
        duration = 0;
        document.getElementById("result").innerText = "Stopwatch has been reset to: " + duration + " Seconds.";
    };
};

const watch1 = new StopWatch();



