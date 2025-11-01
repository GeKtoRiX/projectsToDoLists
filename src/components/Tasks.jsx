import NewTask from './NewTask.jsx';

export default function Tasks({ tasks, onAddTask, onDeleteTask }) {
  return (
    <section>
      <h2 className='mb-4 text-2xl font-bold text-stone-700'>Tasks</h2>
      <NewTask onAddTask={onAddTask} />
      {tasks.length === 0 && (
        <p className='my-4 text-stone-800'>
          This Project does not have any tasks yet.
        </p>
      )}
      {tasks.length > 0 && (
        <ul className='rounded-md mt-8 p-4 bg-stone-100'>
          {tasks.map((task) => {
            return (
              <li className='flex justify-between my-4' key={task.id}>
                <span>{task.text}</span>
                <button
                  onClick={() => onDeleteTask(task.id)}
                  className='text-stone-700 hover:text-red-500 cursor-pointer'
                >
                  Clear
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
}
