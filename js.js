console.log("pomodoro");

let workTimer = 1;
let breakTimer = 1;
let clock = 0;
let timerIsRunning = false;
$(()=>{
  console.log("jquery");


  $("#workTimerMinus").click(()=>{
    console.log("click");
    if(workTimer > 1){
      workTimer--;
      $("#workTimerAmmount").html(workTimer);
    }
  });

  $("#workTimerPlus").click(()=>{
    workTimer++;
    $("#workTimerAmmount").html(workTimer);
  });

  $("#breakTimerMinus").click(()=>{
    if(breakTimer > 1){
      breakTimer--;
      $("#breakTimerAmmount").html(breakTimer);
    }
  });

  $("#breakTimerPlus").click(()=>{
    breakTimer++;
    $("#breakTimerAmmount").html(breakTimer);
  });

  $("#clock").click(()=>{
    breakTimer++;
    timer();

  });
});

function timer(){

  //if timer is running than pause and let user change timer settings
  //if settings have changed then restart timer with those setings,
  //else resume timer
  let minutes;
  let seconds = 10;
  let displayString;
  let timeToWork = true;

    minutes = 0;


  let clock = setInterval(()=>{
    // if(seconds <= 2 && minutes <= 0){
    //   $("#clock").html("0:00");
    //   clearInterval(clock);
    //
    // }

    if(timeToWork){

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
    else{
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
