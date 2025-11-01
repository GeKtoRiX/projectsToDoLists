import { useState } from 'react';

export default function NewTask({ onAddTask }) {
  const [enteredTask, setEnteredTask] = useState('');

  function handleChangeTask(event) {
    setEnteredTask(event.target.value);
  }
  function handleClick() {
    onAddTask(enteredTask);
    setEnteredTask('');
  }

  return (
    <div className='flex items-center gap-4'>
      <input
        onChange={handleChangeTask}
        className='rounded-sm w-64 px-2 py-1.5 bg-stone-200'
        type='text'
        value={enteredTask}
        placeholder='Typing here...'
      />
      {enteredTask.trim() === '' ? (
        <p className='rounded-md p-1.5 bg-amber-200'>
          Please start typing a task
        </p>
      ) : (
        <button
          onClick={handleClick}
          className='rounded-md border border-stone-500 p-1.5 text-stone-700 hover:text-stone-950 cursor-pointer'
        >
          Add task
        </button>
      )}
    </div>
  );
}
