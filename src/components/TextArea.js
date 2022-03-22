import { useState } from "react"
import React from 'react'

export default function TextArea(props) {
    const covertToUpCase = ()=>{
        setText(text.toUpperCase());
        props.alert("converted to uppercase", "success");
    }

    const covertToLowCase = ()=>{
        setText(text.toLowerCase());
        props.alert("converted to lower case", "success");
    }

    const clearText = ()=>{
        setText("");
        props.alert("text cleared", "success");
    }

    const copyText = ()=>{
        navigator.clipboard.writeText(text);
        props.alert("text copied to clipboard", "success");
    }

    const handleExtraSpace = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.alert("removed extra space", "success");
    }

    const handleOnchange = (event)=>{
        setText(event.target.value);
    }
    
    const[text, setText] = useState("")
  return (
      <>
        <div className='container my-3'>
        <div className="form-group">
            <h2 className={`text-${props.mode==='light'?'dark':'light'}`}>{props.heading}</h2>
            <textarea className="form-control" id="box" value={text} onChange={handleOnchange} rows="8" style={{backgroundColor: props.mode==='dark'?'#b7bec5':'white'}}></textarea>
        </div>
        <div>
            <button type="button" className="btn btn-primary mx-2" onClick={covertToUpCase}>Convet to Upper Case</button>
            <button type="button" className="btn btn-primary mx-2" onClick={covertToLowCase}>Convet to Lower Case</button>
            <button type="button" className="btn btn-primary mx-2" onClick={copyText}>Copy Text</button>
            <button type="button" className="btn btn-primary mx-2" onClick={handleExtraSpace}>Remove Extra Space</button>
            <button type="button" className="btn btn-primary mx-2" onClick={clearText}>Clear Text</button>
        </div>
        </div>
        <div className="container my-3">
            <div className={`text-${props.mode==='light'?'dark':'light'}`}>
            <h2>Your text summary</h2>
            <p>{text.split(/\s+/).filter((elem)=>{return elem.length!==0}).length} words and {text.length} charecters</p>
            <p>{text.split(" ").filter((elem)=>{return elem.length!==0}).length * 0.008} minutes read</p>
            </div>
        </div>
    </>
  )
}

TextArea.Prototypes = {heading: String.prototype}

TextArea.defaultProps = {
    heading: "Enter your text below"
}