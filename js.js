console.log("pomodoro");

let workTimer = 1;
let breakTimer = 1;
let clock = 0;

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
    timer(workTimer);

  });
});

function timer(timeIn){


  let minutes;
  let seconds = 10;
  let displayString;


    minutes = timeIn;


  let clock = setInterval(()=>{
    if(seconds <= 1 && minutes <= 0){
      clearInterval(clock);
      $("#clock").html("0:00");
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

    $("#clock").html(displayString);
  }, 1000);

}
