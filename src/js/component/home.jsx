import React, { useState } from "react";
import List from "./list";

//create your first component
export const Home = () => {


		const [tasks, setTasks] = useState ([]);
		const [input, setInput] = useState ("");

//handle input change
 const handleInputChange = (e) => {setInput(e.target.value)};

//add task
const addTask = () => {
	if (input){
		setTasks([...tasks, input]);
		setInput("");
	}
};

//remove task
const removeTask = (index) => {
	const newTasks = tasks.filter((_, i) => i !== index);
	setTasks(newTasks);
};

const handleKeyPress = (e) => {
	if(e.key === 'Enter'){
		addTask();
	}
};

	return (
		<div className="container">
			<h2>To Do List</h2>
			<div className="inputContainer">
				<input type="text" value={input} onChange={handleInputChange} onKeyDown={handleKeyPress}/>
				<button onClick={addTask}>Input</button>
			</div>
			<List tasks={tasks} removeTask={removeTask}/>
		</div>
	);
};

export default Home;
