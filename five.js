// This is the JavaScript Codes for the Pomodoro Clock


function App(){

  const [onBreak, setOnBreak] = React.useState(false);
  const [timerOn, setTimerOn] = React.useState(false);
  const [sessionTime, setSessionTime] = React.useState(25*60);
  const [breakTime, setBreakTime] = React.useState(5*60);
  const [displayTime,setDisplayTime] = React.useState(25*60);
  const [breakAudio, setBreakAudio] = React.useState(new Audio());
  
  const formatTime = (time) => {
    let minutes = Math.floor(time/60);
    let seconds = time % 60;
    return(
      (minutes < 10 ? "0" + minutes : minutes) + ":" +
      (seconds < 10 ? "0" + seconds :seconds)
    );    
  };
    
  const changeTime = (amount, type) => {
    if(type == 'break'){
      if(breakTime<= 60 && amount < 0){
        return;
      }
      setBreakTime(prev => prev + amount) ;
    } else { 
      if(sessionTime<= 60 && amount < 0){
        return;
      }
    setSessionTime(prev => prev + amount);
      if(!timerOn){
          setDisplayTime(sessionTime + amount) 
      }
    } 
  };
  
  const playBreak = () => {
    breakAudio.currentTime = 0;
    breakAudio.play();
  };
  
  const controlTime = () => {
    let second = 1000;
    let date = new Date().getTime();
    let nextDate = new Date().getTime() + second;
    let onBreakVar = onBreak;
     if(!timerOn){
     let interval = setInterval(() =>{
       date = new Date().getTime();
       if(date > nextDate){
         setDisplayTime((prev) => {
         if(prev <= 0 && !onBreakVar){
           playBreakSound();
           onBreakVar = true;
           setOnBreak(true)
           return breakTime;
         }else if(prev <=0 && onBreakVar){
           playBreakSound();
           onBreakVar = false;
           setOnBreak(false)
           return sessionTime;    
         }
         return prev - 1;
         });
          nextDate += second;
       }
     },30);
     localStorage.clear();
     localStorage.setItem('interval-id', interval);
    } 
    if(timerOn){
     clearInterval(localStorage.getItem("interval-id"))
    }
    setTimerOn(!timerOn);
  };
  
  const resetTime = () => {
    setDisplayTime(25*60);
    setBreakTime(5*60);
    setSessionTime(25*60); 
  };
  
return (
<r> 
  <r className="boxes">
  <Length 
    title={"Break length"} 
    changeTime={changeTime} 
    type={"break"} 
    time={breakTime} 
    formatTime={formatTime} 
    />
  <Length 
    title={"Session length"} 
    changeTime={changeTime} 
    type={"session"} 
    time={sessionTime} 
    formatTime={formatTime} 
    />
    </r>
  <h3>{onBreak ? "break": "session"}</h3>
  <h1>{formatTime(displayTime)}</h1>

  <button className="deep-purple hg" 
    onClick={controlTime}>
    {timerOn ? (
    <i className="material-icons">pause_circle_filled</i>
    ): (
    <i className="material-icons">play_circle_filled</i>
    )}
  </button>
  <button className="deep-purple" onClick={resetTime}>
    <i className="material-icons">autorenew</i>
  </button>
  </r>
);
};

function Length({title, changeTime, type, time, formatTime}){
 return(
 <r>
   <h4>{title}</h4>
     <r className="time-sets">
       <button id="break-decrement" id="session-decrement" className="deep-purple"
         onClick={() => changeTime(-60, type)}>
         <i class="material-icons">arrow_drop_down</i>
       </button>
       <h4>{formatTime(time)}</h4>
       <button id="break-increment" id="session-increment" className="deep-purple"
         onClick={() => changeTime(60,type)}>
         <i class="material-icons">arrow_drop_up</i>
       </button>
     </r>
 </r>
 );  
}

ReactDOM.render(<App/>, document.getElementById("fifth"));
