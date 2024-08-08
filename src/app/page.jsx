import TaskCard from '@/componentes/TaskCard';
import Task from '@/models/Task';
import { connectDB } from '@/utils/mongoose';

async function loadTask(){
    connectDB();
    const tasks = await Task.find();
    console.log(tasks);
    return tasks
}

const HomePage = async () => {
  const tasks = await loadTask();
  return (
    <div className="grid grid-cols-3 gap-2">
      {
        tasks.map(task => (
          <TaskCard key={task._id} task={task} />
        ))
      }
    </div>
  )
}

export default HomePage