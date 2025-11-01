import { useState } from 'react';
import ProjectSideBar from '@/components/ProjectSideBar.jsx';
import NoProjectSelected from '@/components/NoProjectSelected.jsx';
import NewProject from '@/components/NewProject.jsx';

export default function App() {
  // Хук управления текущим проектом и массивом всех проектов.
  const [projectState, setProjectState] = useState({
    // Текущий проект(Не выбран(undefined)/Новый проект(null)/Существующий проект(id))
    selectedProjectID: undefined,
    // Массив всех существующих проектов.
    projects: [],
  });

  // Перевод состояния проекта в Новый проект(null).
  function handleStartProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectID: null,
      };
    });
  }
  // Добавление Проекта в массив.
  function handleAddProject(projectData) {
    setProjectState((prevState) => {
      const newProject = {
        ...projectData,
        id: Math.random(),
      };
      return {
        ...prevState,
        selectedProjectID: undefined,
        projects: [...prevState.projects, newProject],
      };
    });
  }
  // Перевод состояния проекта в Не выбран(undefined).
  function handleCancelAddProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectID: undefined,
      };
    });
  }

  let content;
  if (projectState.selectedProjectID === undefined)
    content = <NoProjectSelected onStartAddProject={handleStartProject} />;
  else if (projectState.selectedProjectID === null)
    content = (
      <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject} />
    );

  return (
    <main className='h-screen flex gap-8 my-8'>
      <ProjectSideBar
        onStartAddProject={handleStartProject}
        projects={projectState.projects}
      />
      {content}
    </main>
  );
}
