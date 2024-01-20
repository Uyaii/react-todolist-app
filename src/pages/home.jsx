/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import Cookies from "js-cookie";
import tasksApi from "../API/tasks";
import { useEffect, useState } from "react";
import { FaTrash, FaPen } from "react-icons/fa6";
import { v4 as uuidv4 } from "uuid";
import { format } from "date-fns"; //for dates



const Home = () => {
  const username = Cookies.get("username");
  const [tasks, setTasks] = useState([]);
  const [addTask, setAddTask] = useState("");

  // * Get Tasks
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await tasksApi.get("/tasks")
        const allTasks = response.data
        setTasks(allTasks)
      //  console.log(tasks);
      } catch (err) {
        console.log(err.message);
      }
    }
fetchTasks()
  }, [tasks])
  

  // * New Tasks
  const handleAddTask = () => {
    const id = uuidv4()
      const datetime = format(new Date(), "MMMM dd, yyyy pp");
    const newTask = {
      id,
      title: addTask,
      datetime
    }
    
    
  }


  return <main className="home">
    <h2>Welcome back, {username.toUpperCase()} </h2>

    {/* CATEGORIES */}

    {/* ADD TASK INPUT */}

    <button>Add Task</button>


    {/* CURRENT/PENDING TASKS */}
    {tasks.map((task) => (
      <article key={task.id} className="tasks">
        <h3>{task.title}</h3>
        <p>{task.datetime}</p>
        <div className="btns">

        <FaPen />
        <FaTrash/>
        </div>
      </article>
    ))}

  </main>;
};
export default Home;
