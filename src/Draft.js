
import {React ,useState,useRef } from 'react';
import './App.css';

function App() {
  const [inputTxt,setInput] = useState("");
  const [heading,setHeading] = useState("");
  const [bold,setIsBold] = useState("");
  const [red,setIsRed] = useState("");
  console.log(inputTxt,'inputTxt');
  const [underline,setIsUnderline] = useState("");
  const ref = useRef([{heading: ""}, {bold: ""}, {red: ""}, {underline: ""}]);
  console.log(ref.current, "reeeeee")
  
  const handleText = (e) => {
    setInput(e.target.value);
    if(e.target.value === ""){
        setHeading("");
        setIsBold("");
        setIsRed("");
        setIsUnderline("");
    }

        if(inputTxt.startsWith('# ') || heading?.length) {
            setHeading(e.target.value);
            ref.current[0].heading = e.target.value;
        }
        if(inputTxt.startsWith('*** ') || underline?.length) {
            setIsUnderline(e.target.value);
            ref.current[3].underline = e.target.value

        }
        if(inputTxt.startsWith('** ') || red?.length) {
        setIsRed(e.target.value);
        ref.current[2].red =e.target.value

        }
        if(inputTxt.startsWith('* ') || bold?.length) {
            setIsBold(e.target.value);
            ref.current[1].bold = e.target.value

        }
    
  };
  console.log(ref.current, 'refff');
  

  const saveElements = () => {
    console.log(ref.current, 'gl');
    localStorage.setItem("data", JSON.stringify(ref.current))
  }
  const storedData = JSON.parse(localStorage.getItem("data"))
  console.log(storedData,'storedData');
  const wrd = '# '
  const wrd2= '* '
  const wrd3 = "** "
  const wrd4 = '*** '
  console.log(inputTxt.includes(wrd), "inputTxt.includes(wrd) ")
  return (
    <div id ="bg-con">
     <div className="bg-container"> 
      <div className="button-text-container" id="button-text-container">
        <p>Demo editor by Gireesh Kumar</p>
        <button id="save-button" onClick={saveElements}>Save</button>
      </div>
      <div id="box" className="App">
        <input id="inputText" style={{outline: "none", border:'0px'}} onChange={(e) => handleText(e)} className={heading?.length ? "heading" :  underline?.length ? "underline": red?.length ? "red": bold?.length ? "bold" : ""} value={inputTxt.includes(wrd) ? inputTxt.replace(/#/,""): inputTxt.includes(wrd4) ? inputTxt.replace(/\*\*\*/g,""):inputTxt.includes(wrd3) ?inputTxt.replace(/\*\*/g,""): inputTxt.includes(wrd2) ? inputTxt.replace(/[* ]/,""):inputTxt}/>
       {(inputTxt?.startsWith('# ') || (storedData && storedData[0]?.heading)) ? <h1>{storedData && storedData[0]?.heading ? storedData[0]?.heading : heading.replace(/#/g, '')}</h1> :  (inputTxt.startsWith('*** ') || (storedData && storedData[3]?.underline)) ?  <p id="underline" style={{textDecorationLine: "underline"}}>{storedData&& storedData[3]?.underline ? storedData[3]?.underline : underline.replace(/[*** ]/g, '')}</p> : (inputTxt.startsWith('** ') || (storedData && storedData[2]?.red)) ? <p id="red" style={{color: "red"}}>{storedData && storedData[2]?.red ? storedData[2]?.red : red.replace(/[** ]/g, '')}</p> : (inputTxt?.startsWith('* ') || (storedData && storedData[1]?.bold))  ? <p id="bold" style={{fontWeight: "bold"}}>{storedData && storedData[1]?.bold ? storedData[1]?.bold : bold.replace(/[* ]/g, '')}</p>:   null}
      </div>
    </div>
    </div>
  );
}

export default App;
