import React,{useState} from 'react'

import Button1 from './Button1'
import Button2 from './Button2'
function App() {
	const [count, setCount] = useState([])
	function clickHandler(id){
		setCount(count.filter((user,i)=>(i!==parseInt(id))))
	}
	// function editHandler(id){
	// <Button2></Button2>
	// }
	return (
		<div id="main">
						<div>{
			count.map((user,id)=>{
			return < div key={id}>
			<h1 className="list" >{user}</h1>
			{/* <button onClick={()=> <Button2></Button2>}>edit</button> */}
			<Button2 id={id}count={count} setCount={setCount}></Button2>
			<button className="delete" onClick={()=>clickHandler(id)}>del</button>
			</div>
			})
			
		}
		</div>
		<Button1 fun={setCount}></Button1>
		
			</div>
	)
}

export default App
