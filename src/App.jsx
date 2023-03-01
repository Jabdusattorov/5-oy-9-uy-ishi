import { useRef, useState } from 'react';
import test from './question'
import "./app.scss"

function App() {
  const btnRef = useRef()
  const contRef = useRef()
  const emptyRef = useRef()
  const parentRef = useRef()

  const [countTrue, setCountTrue] = useState(0)
  const [countFalse, setCountFalse] = useState(0)

      // alert("Double click on your chosen answer")

  function submit(e){
    if(e.target.className == "btn"){
      e.target.parentElement.parentElement.style.display = "none"
      if(e.target.dataset.type == "true"){
        console.log("Success");
        setCountTrue(countTrue + 1)
      }else{
        console.log("ERROR");
        setCountFalse(countFalse + 1)
      }
    }
    if(contRef.current.innerText == ""){
      emptyRef.current.style.display = "block"
    }
  }
  return (
    <div ref={contRef} className="App">
      {test.map((item)=>(
      <div ref={parentRef} key={item.id} onDoubleClick={submit} className="card">
        <h2>{item.test}</h2>
        <div className="btn-group">
          <button className='btn' ref={btnRef} data-type={item.A.type}>{item.A.answer}</button>
          <button className='btn' ref={btnRef} data-type={item.B.type}>{item.B.answer}</button>
          <button className='btn' ref={btnRef} data-type={item.C.type}>{item.C.answer}</button>
        </div>
      </div>
      ))}

<div ref={emptyRef} className='empty'>
          <h1>Your result</h1>
          <h3>
            <span>True: {countTrue} </span>
            <span>False: {countFalse} </span>
          </h3>
        </div>
    </div>
  )
}

export default App
