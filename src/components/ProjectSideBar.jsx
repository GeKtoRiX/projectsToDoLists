import Button from './Button';

export default function ProjectSideBar() {
  const aside =
    'rounded-r-xl w-1/3 px-8 py-16 text-stone-50 bg-stone-900 md:w-72';
  const h2 = 'mb-8 font-bold uppercase text-stone-200 md:text-xl';

  return (
    <aside className={aside}>
      <h2 className={h2}>Your Projects</h2>
      <div>
        <Button>+ Add Project</Button>
      </div>
      <ul></ul>
    </aside>
  );
}
