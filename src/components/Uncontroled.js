import React,{useRef,useState} from 'react'

const Uncontroled = () => {
  const [show,setShow] = useState(false);
    const name = useRef(null);

    const submitForm=(e) =>{
      e.preventDefault();
      console.log(name.current.value);
     name.current.value === ""  ?  alert("please input name") :setShow(true)
    }
  return (
    <div>
        <h1> Uncontroled components </h1>
        <div className="card">
        <form onSubmit={submitForm}>
            <label htmlFor="username">Enter your name</label>
            <input type="text" id='username' ref={name} />
            <button type='submit'>Submit</button>
        </form>

        <p>{show ? `${name.current.value}`:``}</p>
        </div>
    </div>
  )
}

export default Uncontroled
