import Tasks from './Tasks.jsx';

export default function SelectProject({
  project,
  onDelete,
  onAddTask,
  onDeleteTask,
  tasks,
}) {
  const formattedDate = new Date(project.dueDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
  return (
    <div className='rounded-md border border-stone-600 w-140 mt-16 p-4'>
      <header className='border-b-2 border-stone-300 mb-4 pb-4'>
        <div className='flex items-center justify-between mb-2 py-2'>
          <h1 className='text-2xl font-bold text-stone-600'>{project.title}</h1>
          <button
            onClick={onDelete}
            className='p-1 text-stone-600 hover:text-stone-950 cursor-pointer'
          >
            Delete
          </button>
        </div>
        <p className=' mb-4 text-stone-400'>{formattedDate}</p>
        <p className='text-stone-600 whitespace-pre-wrap '>
          {project.description}
        </p>
      </header>
      <Tasks onAddTask={onAddTask} onDeleteTask={onDeleteTask} tasks={tasks} />
    </div>
  );
}
