export default function ProjectSideBar() {
  const addProjectButton =
    'rounded-md px-4 py-2 text-xs text-stone-40 bg-stone-700 hover:bg-stone-600 hover:text-stone-100 cursor-pointer md:text-base';
  const aside =
    'rounded-r-xl w-1/3 px-8 py-16 text-stone-50 bg-stone-900 md:w-72';
  const h2 = 'mb-8 font-bold uppercase text-stone-200 md:text-xl';

  return (
    <aside className={aside}>
      <h2 className={h2}>Your Projects</h2>
      <div>
        <button className={addProjectButton}>+ Add Project</button>
      </div>
      <ul></ul>
    </aside>
  );
}
