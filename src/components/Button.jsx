export default function Button({ children, ...props }) {
  const addProjectButton =
    'rounded-md px-4 py-2 text-xs text-stone-50 bg-stone-700 hover:bg-stone-600 hover:text-stone-100 cursor-pointer md:text-base';

  return (
    <button className={addProjectButton} {...props}>
      {children}
    </button>
  );
}
