import { useState } from "react"
import Navbar from "./components/Navbar"
import Alert from "./components/Alert"
// import About from "./components/About"
import './index.css'
// import {createBrowserRouter,RouterProvider} from 'react-router-dom'

function App() {
  const [text, setText] = useState("")
  const [Select, setSelect] = useState()
  const [mode, setMode] = useState("light")
  const [mody, setMody] = useState()
  const [alert, setAlert] = useState(null)

  const showAlert =(message, type)=>{
    setAlert({
      message : message,
      type : type
    })
    
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  
  const changeHandler = (e) => {
    setText(e.target.value)
    setSelect(e.target)
  }

  const upHandler = () => {
    setText(text.toUpperCase())
    showAlert("Text has been converted to UpperCase successfully","success")
  }
  const loHandler = () => {
    setText(text.toLowerCase())
    showAlert("Text has been converted to LowerCase successfully","success")
  }
  
  const clearHandler = ()=>{
    setText("")
    showAlert("Text has been clearded successfully","success")
  }
  
  const copyHandler = (e)=>{
    window.navigator.clipboard.writeText(text);
    Select.select()
    showAlert("Text has been Copied successfully","success")
  }
  
  const removeExtraSpaces= ()=>{
    let newText = text.split(/[ ]+/)
  
    setText(newText.join(" "))
    showAlert("Removed extra spaces successfully","success")
  }
  
  const toggleMode = ()=>{
    if(mode==="light"){
      setMode('dark')
      document.body.style.backgroundColor = "#262739"
      document.body.style.color = "white"
      showAlert("The dak mode has been applied.","success")
    }
    else{
      document.body.style.backgroundColor = "white"
      document.body.style.color = "black"
      setMode('light')
      showAlert("The light mode has been applied.","success")
    }
  }

  
  const changeMode =(e)=>{
    
    setMody(e)
    if(e==="white"){
      document.body.style.color = "black";
      document.body.style.backgroundColor = e;
      showAlert("The white mode has been applied.","success")
      document.title="TextUtils-White Mode"
      
      
    }
    else{
      document.body.style.color = "white";
      document.body.style.backgroundColor = e;
      showAlert("The dak mode has been applied.","success")
      document.title="TextUtils-Dark Mode"
      
      
    }
    
  }

  let count =[ ];
  const words = ()=>{
    let arr = text.split(/\s+/)
    for(let i=0;i<arr.length;i++){
      if(arr[i]!==""){
      count.push(arr[i]);
      }
    }
   return count.length
    
  }

  const letters = ()=>{
    let letter ="";
    for(let i =0;i<count.length;i++){
        letter += count[i]
    }

    return letter.length
  }
  // const router = createBrowserRouter([
  //   {
  //     path : '/home',
  //     element : <>
  //      <Navbar title="TextUtils" about="About" mode={mode}  toggleMode = {toggleMode} changeMode ={changeMode}/>
  //     <Alert alert={alert}/>
  //     <div className="container">

  //       <div className="mb-3 my-4">
  //         <label htmlFor="exampleFormControlTextarea1" className="form-label h1">Change Your Text 😊 </label>
  //         <textarea className="form-control" value={text} onChange={changeHandler} id="exampleFormControlTextarea1" rows="8"></textarea>
  //       </div>
  //       <button className="btn btn-primary m-1"  onClick={upHandler}>Convert To UpperCase</button>
  //       <button className="btn btn-primary m-1" onClick={loHandler}>Convert To LowerCase</button>
  //       <button className="btn btn-primary m-1 " onClick={clearHandler}>Clear</button>
  //       <button className="btn btn-primary m-1 " onClick={copyHandler}>Copy</button>
  //       <button className="btn btn-primary m-1 " onClick={removeExtraSpaces}>removeExtraSpaces</button>
        
  //     </div>

  //     <div className="container my-3">
  //       <h2>Word, Letters Count and Time taken to read</h2>
  //       <p>{words()} Words, {letters()} Letters and {0.008*count.length} Time taken to read</p>

  //       <h3>Preview</h3>
  //       <p>{text.length<=0? "Enter text for preview": text}</p>
  //     </div>
  //     </>
  //   },
  //   {
  //     path : '/about.jsx',
  //     element : <> <Navbar title="TextUtils" about="About" mode={mode}  toggleMode = {toggleMode} changeMode ={changeMode}/>
  //       <Alert alert={alert}/><About/></>
  //   }
  // ])

  return (
    <>
      
      <Navbar title="TextUtils" about="About" mode={mode}  toggleMode = {toggleMode} changeMode ={changeMode}/>
      <Alert alert={alert}/>
      {/* <About/> */}
      <div className="container">

        <div className="mb-3 my-4">
          <label htmlFor="exampleFormControlTextarea1" className="form-label h1">Change Your Text 😊 </label>
          <textarea className="form-control" value={text} onChange={changeHandler} id="exampleFormControlTextarea1" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1"  onClick={upHandler}>Convert To UpperCase</button>
        <button className="btn btn-primary mx-1" onClick={loHandler}>Convert To LowerCase</button>
        <button className="btn btn-primary mx-1 " onClick={clearHandler}>Clear</button>
        <button className="btn btn-primary mx-1 " onClick={copyHandler}>Copy</button>
        <button className="btn btn-primary mx-1 " onClick={removeExtraSpaces}>removeExtraSpaces</button>
        
      </div>

      <div className="container my-3">
        <h2>Word, Letters Count and Time taken to read</h2>
        <p>{words()} Words, {letters()} Letters and {0.008*count.length} Time taken to read</p>

        <h3>Preview</h3>
        <p>{text.length<=0? "Enter text for preview": text}</p>
      </div>
      {/* <RouterProvider router={router}/> */}
     
    </>
  )
}

export default App
