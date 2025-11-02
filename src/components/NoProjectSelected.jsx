import noProjectSelectedImage from '@/assets/logo.png';
import Button from './Button';

export default function NoProjectSelected({ onStartAddProject }) {
  return (
    <div className='rounded-md w-2/3 p-24  text-center bg-stone-100'>
      <img
        className='w-16 h-16 mx-auto object-contain'
        src={noProjectSelectedImage}
        alt='No Project Selected Image'
      />
      <h2 className='my-4 text-xl font-bold text-stone-500'>
        No Project Selected
      </h2>
      <p className='mb-4 text-stone-400'>
        Select a project or get started with a new one.
      </p>
      <p className='mt-8'>
        <Button onClick={onStartAddProject}>Add new project</Button>
      </p>
    </div>
  );
}
