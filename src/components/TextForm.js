import React, {useState} from 'react'



export default function TextForm(props) {

    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked");
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleLoClick = ()=>{
        // console.log("Lowercase was clicked");
        let newText = text.toLowerCase();
        setText(newText)
    }

    const handleClear = ()=>{
        // console.log("Clear Text was clicked");
        setText('');
    }

    const handleCopy = ()=>{
        // console.log("Copy Text was clicked");
        var text = document.getElementById("myTextBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    

    const handleOnChange = (event)=>{
        //  console.log("On Changed")
        setText(event.target.value)
    }

    const [text, setText] = useState('Enter text here');



  return (
    <>
    <div className="container">
        <div className="mb-3">
        <h1 className='my-2'>{props.heading}</h1>
        <textarea className="form-control" id="myTextBox" rows="8" value={text} onChange={handleOnChange} ></textarea>
        </div>
        <div style={{display: "flex"}}>
        <button className="btn btn-primary my-1 mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary my-1 mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-primary my-1 mx-1" onClick={handleClear}>Clear Text</button>
        <button className="btn btn-primary my-1 mx-1" onClick={handleCopy}>Copy Text</button>
        </div>
    </div>
    <div className="container my-4">
        <h2>Your text summary</h2>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>

  )
}
