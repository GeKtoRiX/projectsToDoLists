import Input from '@/components/Input.jsx';
import { useRef } from 'react';

export default function NewProject({ onAdd }) {
  const titleRef = useRef();
  const descriptionRef = useRef();
  const dueDateRef = useRef();

  function hadnleSave() {
    const enteredTitle = titleRef.current.value;
    const enteredDescription = descriptionRef.current.value;
    const enteredDueDate = dueDateRef.current.value;

    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  }

  return (
    <div className='rounded-md w-140 mt-10  bg-stone-100'>
      <menu className='flex justify-end items-center gap-4 my-4 px-2'>
        <li>
          <button className='text-stone-800 hover:text-stone-950 cursor-pointer'>
            Cancel
          </button>
        </li>
        <li>
          <button
            className='rounded-md px-6 py-2 text-stone-50 bg-stone-800 hover:bg-stone-950 cursor-pointer'
            onClick={hadnleSave}
          >
            Save
          </button>
        </li>
      </menu>
      <div className='flex flex-col gap-4 justify-center p-2'>
        <Input type='text' ref={titleRef} label={'title'} />
        <Input ref={descriptionRef} label={'Description'} textArea />
        <Input type='date' ref={dueDateRef} label={'Due Date'} />
      </div>
    </div>
  );
}
