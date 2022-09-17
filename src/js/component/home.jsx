import React, { useState } from "react";
import ListGroup from 'react-bootstrap/ListGroup';


//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {

	const [ inputValue, setInputValue ] = useState('');
	const [ all, setAll ] = useState([]);

	function handleChange(parameter) {
		const value = parameter.target.value;
		setInputValue(value);
	}

	function handleAdd(parameter) {
		let copyAll = [...all];
		copyAll.push(inputValue);
		setAll(copyAll);		
	}
	function handleDelete(parameter) {
		let copyAll = [...all];
		copyAll.pop(inputValue);
		setAll(copyAll);
	}

	return (
		<div className="todolist">
			<div className="dentroDe">
				<h1>ALL TASKS</h1>
			<div className="input">
				<input type="text" placeholder="Input Task" value={inputValue} onChange={handleChange} />
				<button onClick={handleAdd}>Add</button>
			</div>
				{
					all.map((one,index) => {
						return(
							<div className="newOne" key={index}>								
								{one}
								<button className="button" onClick={handleDelete}>X</button>
							</div>
						)
					})
				}
			</div>
		</div>
	);
};

export default Home;
