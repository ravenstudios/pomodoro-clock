console.log("pomodoro");

let workTimer = 25;
let breakTimer = 5;
let clock;
let timerIsRunning = false;
let minutes;
let seconds = 10;
let displayString;
let timeToWork = true;

$(()=>{
  console.log("jquery");


  $("#workTimerMinus").click(()=>{
    if(!timerIsRunning){
      if(workTimer > 1){
        workTimer--;
        $("#workTimerAmmount").html(workTimer);
      }
    }

  });

  $("#workTimerPlus").click(()=>{
    if(!timerIsRunning){
      workTimer++;
      $("#workTimerAmmount").html(workTimer);
    }

  });

  $("#breakTimerMinus").click(()=>{
    if(!timerIsRunning){
      if(breakTimer > 1){
        breakTimer--;
        $("#breakTimerAmmount").html(breakTimer);
      }
    }

  });

  $("#breakTimerPlus").click(()=>{
    if(!timerIsRunning){
      breakTimer++;
      $("#breakTimerAmmount").html(breakTimer);
    }

  });

  $("#clock").click(()=>{

    if(timerIsRunning){
      timerIsRunning = false;
      clearInterval(clock);
    }
    else{
      timerIsRunning = true;
      seconds = 0;
      minutes = workTimer;
      timer();
    }


  });
});

function timer(){


  //if timer is running than pause and let user change timer settings
  //if settings have changed then restart timer with those setings,
  //else resume timer

  clock = setInterval(()=>{
      if(timeToWork){//workTimer is running

      if(seconds <= 2 && minutes <= 0){
        timeToWork = false;
        minutes = 0;
        seonds = 0;
      }

      seconds --;
      if(seconds <= 0){
        minutes --;
        seconds = 59;
      }
      if(seconds < 10){
        displayString = minutes + ":0" + seconds;
      }
      else{
        displayString = minutes + ":" + seconds;
      }
    }
    else{//break timer is running
      if(minutes === breakTimer){
        timeToWork = true;
        minutes = workTimer;
        seconds = 0;
      }

      seconds++;
      if(seconds > 59){
        minutes ++;
        seonds = 0;
      }
      if(seconds < 10){
        displayString = minutes + ":0" + seconds;
      }
      else{
        displayString = minutes + ":" + seconds;
    }
  }


    $("#clock").html(displayString);
  }, 1000);

}

function annimation() {
  let color1 = "rgb(255, 0, 0),";
  let color2 = "rgb(0, 255, 0),";
  let color3 = "rgb(0, 0, 255)";
  $(".clock").css("background", "radial-gradient(circle," + color1 + color2 + color3 + ")");
  //$(".clock")css("background", "radial-gradient(circle," + color1 + color2 + color3 + ")");
    //background: radial-gradient(circle, rgb(0, 0, 255), yellow, green); /* Standard syntax */
}
