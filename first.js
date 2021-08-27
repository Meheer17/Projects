// This is the JavaScript for the Random Quote Machine


const API = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';

class App extends React.Component {
   state = {
      quotes: [],
      index: 0
   }

   
componentDidMount(){
   fetch(API).then(res => res.json())
   .then(res => { 
      this.setState({
         quotes: res.quotes
      }, this.getRandomIndex);
   });
  
}
   
   getRandomIndex = () => {
      const {quotes} = this.state
   if(quotes.length > 0) {
const index =Math.floor(Math.random()* quotes.length);
      this.setState({
         index
      });
   }
      }
   
   
   render(){
      const {quotes, index} = this.state;
      const quote = quotes[index];
      return (
         <r className="fb">
<r id="quote-box">
   <h3 className="h"> Random Quote Machine</h3>
   
   {
      quote && (
      <r>
         <section className="quote-text" id="text"><i className="fa fa-quote-left" style={{marginRight:"0.4em"}}></i>{quote.quote}</section> 
            <cite id="author">- {quote.author}</cite>
      </r>
      )
   }
   
   
   <button id="new-quote" onClick = {this.getRandomIndex}>New Quote</button>
   </r>
 </r>           
      );
   }
}



ReactDOM.render(<App />, document.getElementById('first'))
