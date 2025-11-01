import { useRef } from 'react';
import Input from '@/components/Input.jsx';
import Modal from './Modal.jsx';

export default function NewProject({ onAdd, onCancel }) {
  const modal = useRef();

  const titleRef = useRef();
  const descriptionRef = useRef();
  const dueDateRef = useRef();

  function handleSave() {
    const enteredTitle = titleRef.current.value;
    const enteredDescription = descriptionRef.current.value;
    const enteredDueDate = dueDateRef.current.value;

    if (
      enteredTitle.trim() === '' ||
      enteredDescription.trim() === '' ||
      enteredDueDate.trim() === ''
    ) {
      modal.current.open();
      return;
    }
    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  }

  return (
    <>
      <Modal ref={modal} buttonCaption={'Close'}>
        <h2 className='my-4 text-xl font-bold text-stone-700'>Invalid Input</h2>
        <p className='mb-4 text-stone-600'>
          Oops... looks like you forgot to enter a value.
        </p>
        <p className='mb-4 text-stone-600'>
          Plase make sure you provide a valid value for every input fielnd.
        </p>
      </Modal>
      <div className='rounded-md w-140 mt-10  bg-stone-100'>
        <menu className='flex justify-end items-center gap-4 my-4 px-2'>
          <li>
            <button
              onClick={onCancel}
              className='text-stone-800 hover:text-stone-950 cursor-pointer'
            >
              Cancel
            </button>
          </li>
          <li>
            <button
              className='rounded-md px-6 py-2 text-stone-50 bg-stone-800 hover:bg-stone-950 cursor-pointer'
              onClick={handleSave}
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
    </>
  );
}
