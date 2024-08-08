
const TaskCard = ({task}) => {
  return (
        <div className="bg-gray-800 text-white rounded-md 
        hover:cursor-pointer hover:bg-gray-700">
            <h1>{task.title}</h1>
            <p>{task.description}</p>
          </div>
  )
}

export default TaskCard