
// import {React ,useState } from 'react';
// import './App.css';

// function App() {
//   const [isHeading, setIsHeading] = useState();
//   const [isBold, setIsBold] = useState();
//   const [isRed,setIsRed] = useState();
//   const [isUnderline,setIsUnderline] = useState();
//   const headingEl = <h1 id="heading">this is heading</h1>;
//   console.log(typeof headingEl);
//   const handleText = (e) => {
//     const inputTxt = document.getElementById('inputText');

//     switch (e.target.value) {
//       case '# ':
//         setIsHeading(true);
//         inputTxt.value = '';
//         break;
//       case '* ':
//         setIsBold(true);
//         break;
//       case '*  ':
//         setIsRed(true);
//         break;
//       case '*   ':
//         setIsUnderline(true);
//         inputTxt.value = '';
//         break;
//       default:
//         break;
//     }
//   };
//   const saveElements = () => {
//     const headingText = document.getElementById("heading");
//     const boldText = document.getElementById('bold');
//     const redText = document.getElementById('red');
//     const underlineText = document.getElementById('underline');
//    localStorage.setItem("elementsData", JSON.stringify({heading:headingText.innerHTML, bold:boldText.innerHTML, red: redText.innerHTML,underline: underlineText.innerHTML}))
//   }
//   const storedData = JSON.parse(localStorage.getItem("elementsData"));
//   console.log(storedData,'storedData');
//   return (
//     <div id ="bg-con">
//      <div className="bg-container">
//       <div className="button-text-container" id="button-text-container">
//         <p>Demo editor by</p>
//         <button id="save-button" onClick={saveElements}>Save</button>
//       </div>
//       <div id="box" className="App">
//         <input id="inputText" style={{outline: "none", border:'0px'}} onChange={(e) => handleText(e)}/>
//        {isHeading ? <h1 id="heading">this is heading</h1> : storedData?.heading ? <h1>{storedData?.heading}</h1> :null}
//         {isBold ?  <p id="bold" style={{fontWeight: "bold"}}>This is bold line</p> : storedData?.bold ? <p id="bold" style={{fontWeight: "bold"}}>{storedData?.bold}</p> : null}
//         {isRed ? <p id="red" style={{color: "red"}}>This is red line</p>: storedData?.red ? <p id="red" style={{color: "red"}}>{storedData?.red}</p> : null}
//         {isUnderline ? <p id="underline" style={{textDecorationLine: "underline"}}>This line is underlined</p> : storedData?.underline ? <p id="underline" style={{textDecorationLine: "underline"}}>{storedData?.underline}</p> :null}
//       </div>
//     </div>
//     </div>
//   );
// }

// export default App;
