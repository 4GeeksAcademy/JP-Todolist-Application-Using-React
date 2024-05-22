// import React, {useState} from "react";
// import List from "./list";
// import { func } from "prop-types";


// //create your first component
// export const EnterTask = () => {

//     const [ inputValue, setInputValue ] = useState('');
//     const [ taskList, setTaskList] = useState (["buy groceries"]);
//     // const validateInput = () => {if(inputValue === "") alert("Task missing");}

//     function addTask (){
//         if (inputValue.trim()){
//             setTaskList([...taskList,inputValue])
//         }
//     }

//     function deleteTask (index){
//         const newTaskList = [...taskList];
//         newTaskList.splice(index,1);
//         setTaskList(newTaskList);
//     }

// 	return (
//         <div>
//             <input type="text" onChange={e => setInputValue(e.target.value)} value={inputValue} />
//             <button onClick={addTask}>X</button>

//             <ul>
//                 {taskList.map((task,index) => (
//                     <li>
//                         <div>
//                             <span><p>{task}</p></span>
//                             <button onClick={() => deleteTask(index)}>X</button>
//                         </div>
//                     </li>
//                 ))}
//             </ul>

//             {/* <List elementList = "{inputValue}"/> */}
//         </div>
//     );
// };

// export default EnterTask;
