'use client'
import { useRouter, useParams } from "next/navigation";
import { useEffect, useState } from "react";

const FormPage = () => {

  const [newTask, setNewTask] = useState({
    title: '',
    description: ''
  });

  const router = useRouter();
  const params = useParams();

  const getTask = async () => {
    const res = await fetch(`/api/tasks/${params.id}`);
    const data = await res.json();
    // console.log(data)
    setNewTask({
      title: data.title,
      description: data.description
    });
  }

  const createTask = async () => {
    try {
      const res = await fetch('/api/tasks', {
        method: 'POST',
        body: JSON.stringify(newTask),
        headers: {
          "Content-Type": "application/json"
        }
      });
      const data = await res.json();

      if (res.status === 200) {
        router.push('/');
        router.refresh();
      }
      console.log(data);

    } catch (error) {
      console.error(error);
    }
  }

  const updateTask = async () => {  
    const res = await fetch(`/api/tasks/${params.id}`, { 
      method: 'PUT',
      body: JSON.stringify(newTask),
      headers: {
        "Content-Type": "application/json"
      }
    })
    const data = await res.json();
    console.log(data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(newTask);
    // await createTask();
    if(!params.id){
      await createTask();
    } else {
      // console.log('updating task');
      updateTask(); 
    }
  }

  const handleDelete = async () => {
    if(window.confirm('Are you sure you want to delete this task?')) {
      try {
          const res = await fetch(`/api/tasks/${params.id}`, {  
            method: 'DELETE',
          });
          router.push('/');
          router.refresh();
        
      } catch (error) {
        console.error(error);
      }
    }
  }

  const handleChange = (e) => {
    setNewTask({
      ...newTask,
      [e.target.name]: e.target.value
    });
  }

  useEffect(() => {
    // console.log('params', params);
    if(params.id){
      getTask();
    }
  })

  return (
    <div className='h-[calc(100vh-7rem)] flex justify-center items-center'>
      <form onSubmit={handleSubmit}>
        <header className="flex justify-between">

          <h1 className='font-bold text-3xl'>
            {
              !params.id ? "Create Task" : "Update Task"
            }
          </h1>

          <button
            type="button"
            className='bg-red-500 px-3 py-1 rounded-md'
            onClick={() => {
              handleDelete();
            }}
          >
            Delete
          </button>
        </header>
        <input
          type='text'
          name='title'
          placeholder='Title'
          className='bg-gray-800 border-2 w-full p-4 rounded-lg my-4'
          onChange={handleChange}
          value={newTask.title}
        />
        <textarea
          name='description'
          rows={3}
          placeholder='Description'
          className='bg-gray-800 border-2 w-full p-4 rounded-lg my-4'
          onChange={handleChange}
          value={newTask.description}></textarea>
          
        <button
          type="submit"
          className='bg-green-600 hover:bg-green-700 text-white font-bold px-4 py-2 rounded-lg'
        >
          {
            !params.id ? "Create" : "Update"
          }
        </button>
      </form>
    </div>
  )
}

export default FormPage