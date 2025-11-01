import { forwardRef, useImperativeHandle, useRef } from 'react';
import { createPortal } from 'react-dom';
import Button from './Button.jsx';

const Modal = forwardRef(function Modal({ children, buttonCaption }, ref) {
  const dialogStyle =
    'rounded-md fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 p-4 backdrop:bg-stone-900/60';

  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog ref={dialog} className={dialogStyle}>
      {children}
      <form className='mt-4 text-right' method='dialog'>
        <Button>{buttonCaption}</Button>
      </form>
    </dialog>,
    document.getElementById('modal-root')
  );
});

export default Modal;
