// This is the JavaScript codes for the Markeddown Previwer 


const initialState = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`;
class App extends React.Component {
  state = {
    text: initialState
  }
handleChange= (e) =>{
this.setState({
  text: e.target.value
})
}
  render(){
    const{ text } = this.state;
    const markdown = marked(text, {breaks: true})
		try{
    return(
    <r style={{backgroundColor: '#2369b49c'}}>
      <h1 className="center" color="black">Convert To Markdown</h1>
       <r className="c">
         <h3 className="center">Write Your Markdown:</h3>
         <textarea id="editor" value={text} onChange={this.handleChange}/>
         </r>
        <h3 className="center" >See Your Result:</h3>
        <r style={{textAlign:'left', color:'black'}} dangerouslySetInnerHTML={{__html:markdown}} id="preview" ></r>
      </r>
    );
		}catch(err){console.log(err)}
  }
}

ReactDOM.render(<App/>, document.getElementById('second'));
