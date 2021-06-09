(function() {
    
    let today = new Date();
    //get the current hour, minutes and seconds
    let hours = today.getHours() % 12 || 12; //set to 12H format
    let minutes = today.getMinutes(); 
    //adjust the hour hand to show also half hours:
    if (minutes>30){
        hours=hours+0.5;
    }
    let seconds = today.getSeconds();
    
    //convert the time to a dgree in the circle for hours
    const calcHours= ()=>{
        let changeToH= 12/hours;
        let hoursDegree= 360/changeToH;
        $("#hoursHand").css({
            transform: "rotate("+hoursDegree+"deg)"
            
        });
       
    }
    calcHours();
    

    //convert the time to a dgree in the circle for minutes
    const calcMinutes= ()=>{
        let changeToM = 60/minutes;
        let minutesDegree= 360/changeToM;
        $("#minutesHand").css({
            transform: "rotate("+minutesDegree+"deg)"
            
        });
        //every 30 minutes move the hours hand half way
        if (minutes%30 == 0 && seconds===1){
            if (hours>12){
                hours=1;
            } else{
                hours=hours+0.5;
            }
            
            calcHours();
        }
    }
    
    calcMinutes()
   
    
//making the seconds hand tick with each second with setTimeout
    setTimeout(function runSeconds() {
        //convert the time to a dgree in the circle for seconds
        let changeToS = 60/seconds;
        let secondsDegree= 360/changeToS;
        $("#secondsHand").css({
            transform: "rotate("+secondsDegree+"deg)"
            
        });
          setTimeout(runSeconds, 1000);
        
        seconds++;

        //when the seconds reach 60 and it's time to reset the seconds and progress the minutes
        if (seconds>60){
            seconds=1;
            minutes++;
        }
         //when the seconds reach 60 and it's time to reset the seconds and progress the minutes
        if (minutes>60){
            minutes=1;
        }
        calcMinutes();
        // console.log("seconds",seconds); 
        // console.log("minutes",minutes); 
        // console.log("hours",hours); 
        // console.log("**************************");
      }, 1000);


})(); 