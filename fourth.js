// This is the JavaScript codes for the Calculator


function App(){
  const [exp ,setExp] = React.useState();
  const [answer, setAnswer] = React.useState(0);

  const display = (symbol) => {
    setExp(prev => prev + symbol)
  };
  
  const calc = () =>{
    setAnswer(eval(exp))
  };
const allClear =()=>{
  setExp("")
  setAnswer("0")
};  
const clear =()=>{
 setExp(prev => prev.split("").slice(0, prev.length - 1).join(""))
setAnswer("0")
};  

  return (
<r className="container">
  <r className="grid">
    <r id="display" className="dis">
      <input type="text" value={exp} placeholder="0" disabled />
      <span>{answer}</span>
    </r>
    <r onClick={allClear} id="clear" className="padButton AC red allclear">AC</r>
    <r onClick={clear} className="padButton clea C red">C</r>
    <r onClick={() => display("/")} id="divide" className="padButton divide div">/</r>
    <r onClick={() => display("*")} id="multiply" className="padButton mul times">X</r>
    <r onClick={() => display("7")} id="seven" className="padButton num7 seven dg">7</r>
    <r onClick={() => display("8")} id="eight" className="padButton num8 eight dg">8</r>
    <r onClick={() => display("9")} id="nine" className="padButton num9 nine dg">9</r>
    <r onClick={() => display("-")} id="subtract" className="padButton sub minus">-</r>
    <r onClick={() => display("4")} id="four" className="padButton num4 four dg">4</r>
    <r onClick={() => display("5")} id="five" className="padButton num5 five dg">5</r>
    <r onClick={() => display("6")} id="six" className="padButton num6 six dg">6</r>
    <r onClick={() => display("+")} id="add" className="padButton added plus">+</r>
    <r onClick={() => display("1")} id="one" className="padButton num1 one dg">1</r>
    <r onClick={() => display("2")} id="two" className="padButton two num2 dg">2</r>
    <r onClick={() => display("3")} id="three" className="padButton three num3 dg">3</r>
    <r onClick={calc} id="equals" className="padButton equal">=</r>
    <r onClick={() => display("0")} id="zero" className="padButton zero dg">0</r>
    <r onClick={() => display(".")} id="decimal" className="padButton dot dg">.</r>  
  </r>
</r>
 );
}

ReactDOM.render(<App />, document.getElementById("fourth"));
