import React,{useState} from 'react'

function Button2(props) {
  console.log(props.id,props.count)
  let cnt=(props.count);
  // console.log(cnt[0])
  const [bool, setbool] = useState(false)
  let data=""
  // let ref=false;
  function handle(){
setbool(true)
  }
  function save(){
    if(data!==""){
    cnt[props.id]=data;
    // for(let i=0;)
    props.setCount([...cnt])
    setbool(false)}
  }
  function fun(e){
    data=e.target.value;
  }
  return (
    bool?
    <>
    <textarea className="editTask" onChange={fun}></textarea>
    <button className="saveTask" onClick={()=>save()}>save</button>
    </>
    :<div>
      {
      // bool?<textarea></textarea>:""
      // (bool)?<button>save</button>:""
      }
      <button className="edit"onClick={()=>handle()}>edit</button>
    </div>
  )
}

export default Button2
