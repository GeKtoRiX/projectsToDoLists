import Button from './Button';

export default function ProjectSideBar({
  onStartAddProject,
  projects,
  onSelectProject,
  selectedProjectID,
}) {
  const aside =
    'rounded-r-xl w-1/3 px-8 py-16 text-stone-50 bg-stone-900 md:w-72';
  const h2 = 'mb-8 font-bold uppercase text-stone-200 md:text-xl';

  return (
    <aside className={aside}>
      <h2 className={h2}>Your Projects</h2>
      <div>
        <Button onClick={onStartAddProject}>+ Add Project</Button>
      </div>
      <ul className='mt-8'>
        {projects.map((project) => {
          let cssClasses =
            'rounded-sm w-full my-1 px-2 py-1 text-left text-stone-400 hover:text-stone-800';

          if (project.id === selectedProjectID)
            cssClasses += ' text-stone-100 bg-stone-800';
          else {
            cssClasses += ' text-stone-400';
          }

          return (
            <li key={project.id}>
              <button
                onClick={() => onSelectProject(project.id)}
                className={cssClasses}
              >
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
