import React, {useState} from 'react';

export default function TextForm(props) {
    const [text,setText] = useState("");
    // const [Mystyle,setMyStyle] = useState({
    //     color: 'black',
    //     backgroundColor:'white',
    // });
    // const [btnText, setbtnText] = useState("Enable Dark Mode");

    // const toggleStyle =()=>{
    
    //     if(Mystyle.backgroundColor === 'white'){
    //         console.log("Dark mode enabled");
    //         setMyStyle({
    //             color: 'white',
    //             backgroundColor: 'black'
    //         })
    //         setbtnText("Enable Light Mode");
    //     }
    //     else{
    //         console.log("Dark mode disabled");
    //         setMyStyle({
    //             color: 'black',
    //             backgroundColor: 'white'
    //         })
    //         setbtnText("Enable Dark Mode");
    //     }
    // }

    const handleUpperCase = () =>{
      let newText = text.toUpperCase();
      setText(newText);
      props.showAlert("Converted to Uppercase", "success");
      
    }

    
    const handleLowerCase = () =>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase", "success");
        
      }

      const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
        props.showAlert("Responding", "success");
      }

      const clearText = ()=>{
          let newText ="";
          setText(newText);
          props.showAlert("Text cleared", "success");
      }
      const handleCopy = ()=>{
          let t= document.getElementById("exampleFormControlTextarea1");
          t.select();
          navigator.clipboard.writeText(t.value);
          props.showAlert("Copied to clipboard", "success");
      }

      const handleExtraSpaces=()=>{
          let newText = text.split(/[ ]+/);
          setText(newText.join(" "));
          props.showAlert("Removed extra spaces from text", "success");
      }

    const handleOnChange = (e) =>{
        // setText("");
        // console.log("change demanded");
        setText(e.target.value);
    }
  return (
      <>
            <div style={{color: props.mode === 'dark'? 'white':'black'}}>
          <h3>{props.heading}</h3>


          <div className="mb-3">
      
    
      <textarea className="form-control" id="exampleFormControlTextarea1" rows="8" value={text} onChange={handleOnChange} style={{color: props.mode === 'dark'? 'white':'black' ,backgroundColor: props.mode === 'dark'? 'black':'white'}}></textarea>
      
    </div>
    <button type="button" className={`btn btn-outline-${props.mode === 'dark'? 'light':'dark'} mx-1`} onClick={handleUpperCase}>Convert to Uppercase</button>
    <button type="button" className={`btn btn-outline-${props.mode === 'dark'? 'light':'dark'} mx-1`} onClick={handleLowerCase}>Convert to Lowercase</button>
    <button type="button" className={`btn btn-outline-${props.mode === 'dark'? 'light':'dark'} mx-1`} onClick={speak}>Read out</button>
    {/* <button type="button" className="btn btn-outline-dark mx-1" onClick={toggleStyle}>{btnText}</button> */}
    <button type="button" className={`btn btn-outline-${props.mode === 'dark'? 'light':'dark'} mx-1`} onClick={handleCopy}>Copy Text</button>
    <button type="button" className={`btn btn-outline-${props.mode === 'dark'? 'light':'dark'} mx-1`} onClick={handleExtraSpaces}>Format</button>
    <button type="button" className={`btn btn-outline-${props.mode === 'dark'? 'light':'dark'} mx-1`} onClick={clearText}>Clear</button>
      </div>

      <div className="container my-3" style={{color: props.mode === 'dark'? 'white':'black'}}>
          <h4>Your text summary</h4>
          <p>{text.length>0 ? text.trim().split(/[ ]+/).length : 0} words and {text.length} characters</p>
          <p>Roughly around <b>{0.008 * text.split(" ").length} minutes readtime</b></p>
          <h4>Preview</h4>
          <p>{text.length>0?text: "Enter text in the textbox above to preview"}</p>
      </div>
      </>
      
       
 
  )
}
