// This is the JavaScript code for the Drum Machine


const audioClips=[{
    keyCode: 81,
    keyTrigger: 'Q',
    id: 'key1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3'
  },
  {
    keyCode: 87,
    keyTrigger: 'W',
    id: 'key2',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3'
  },
  {
    keyCode: 69,
    keyTrigger: 'E',
    id: 'key3',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3'
  },
  {
    keyCode: 65,
    keyTrigger: 'A',
    id: 'key4',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3'
  },
  {
    keyCode: 83,
    keyTrigger: 'S',
    id: 'key5',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3'
  },
  {
    keyCode: 68,
    keyTrigger: 'D',
    id: 'key6',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'
  },
  {
    keyCode: 90,
    keyTrigger: 'Z',
    id: 'key7',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3'
  },
  {
    keyCode: 88,
    keyTrigger: 'X',
    id: 'key8',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3'
  },
  {
    keyCode: 67,
    keyTrigger: 'C',
    id: 'key9',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3'
  }];

function App() {
  const [speed , setSpeed] = React.useState(0.5);
  const [volume, setVolume] = React.useState(1);
  const [recording, setRecording] = React.useState("");
  
  const playRecording = () =>{
    let index = 0;
    let recordArray = recording.split(" ");
    const interval = setInterval(()=>{
     const audioTag= document.getElementById(recordArray[index]);
    audioTag.volume = volume;
    audioTag.currentTime = 0;
    audioTag.play(); 
      index++;
    },speed * 600);    
    setTimeout(
    () => clearInterval(interval),
      600 * speed * recordArray.length - 1 
    )
  };
   
    return(
   <r id="drum-machine">
<h2 className="text-center head">DRUM MACHINE</h2>
   {audioClips.map(clip =>(
        <Pad key={clip.id} clip={clip} volume={volume} setRecording={setRecording}/>
        ))}
        <r id="display">{recording}</r>
        <h4 className="volume">Volume</h4>
        <input 
          type="range"
          className="w-100 volume"
          step="0.01" 
          onChange={(e)=> setVolume(e.target.value)}
          max="1" 
          min="0" 
          value={volume}/>
        <h4 className="speed">Speed</h4>
        <input 
          type="range"
          className="w-100 speed"
          step="0.01" 
          onChange={(e)=> setSpeed(e.target.value)}
          max="1.3" 
          min="0.1" 
          value={speed}
          />
      <button onClick={playRecording} className="btn btn-success pl">Play</button>
            <button onClick={() => setRecording("")} className="btn btn-danger clear">Clear</button>
</r>

    );
  }

function Pad({clip, volume, setRecording}){
  const [active, setActive] = React.useState(false);
  
  React.useEffect(() =>{
    document.addEventListener('keydown', handleKeyPress);
    return()=>{
      document.removeEventListener('keydown', handleKeyPress);
    }
  }, [])
  
  const handleKeyPress =(e)=>{
if(e.keyCode == clip.keyCode){
playSound();
}};
  
  const playSound = () =>{
    const audioTag= document.getElementById(clip.keyTrigger);
    setActive(true);
    audioTag.volume = volume;
    setTimeout(()=>setActive(false), 200)
    audioTag.currentTime = 0;
    audioTag.play();
    setRecording(prev => prev +clip.keyTrigger+ " ");
  }
   return(
    <button onClick={playSound} className={`btn btn-secondary p-4 n-3 drum-pad ${active && 'btn-warning'} `}>
  <audio className="clip" id={clip.keyTrigger} src={clip.url}/>
    {clip.keyTrigger}
  </button>
      );
}
  
 
  
ReactDOM.render(<App/>, document.getElementById('third'));
