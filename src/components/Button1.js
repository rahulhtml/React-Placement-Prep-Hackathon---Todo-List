import React,{useState,useEffect,useRef} from 'react'

function Button1(props) {
  // const [user, setuser] = useState("")
  let data="";
  const name= useRef("")
  function handle(){
    // console.log(name.curent)
    if(data!=="")
    props.fun((prev)=>[...prev,data])
    // e.target.elements.todo.value=""
  }
  function fun(e){
    data=e.target.value;
  
}
 useEffect(() => {
  console.log(name.current.value)
  name.current.value=""
  })
  return (
    <div>
      {/* <form onSubmit={handle}> */}
      <textarea id="task" ref={name} onChange={fun}></textarea>
      <button  type="submit" id="btn" onClick={handle}>add</button> 
      {/* </form> */}
    </div>
  )
}

export default Button1
