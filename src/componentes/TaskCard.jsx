import Link from "next/link"

const TaskCard = ({ task }) => {
  return (
    <Link href={`/tasks/${task._id}`}>
      <div className="bg-gray-800 text-white rounded-md 
        hover:cursor-pointer hover:bg-gray-700">
        <h3 className="text-2xl font-bold">{task.title}</h3>
        <p className="text-slate-300">{task.description}</p>
        <p className="text-slate-400">
          <span className="mr-1">
            Created At:
          </span>
          {new Date(task.createdAt).toLocaleDateString()}
        </p>
      </div>
    </Link>
  )
}

export default TaskCard