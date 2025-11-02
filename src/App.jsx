import { useState } from 'react';

import ProjectSideBar from '@/components/ProjectSideBar.jsx';
import NoProjectSelected from '@/components/NoProjectSelected.jsx';
import NewProject from '@/components/NewProject.jsx';
import SelectProject from '@/components/SelectProject.jsx';

export default function App() {
  // Хук управления текущим проектом и массивом всех проектов.
  const [projectState, setProjectState] = useState({
    // Текущий проект(Не выбран(undefined)/Новый проект(null)/Существующий проект(id)).
    selectedProjectID: undefined,
    // Массив всех существующих проектов.
    projects: [],
    // Массив заданий ко всем существующим проектам.
    tasks: [],
  });

  // Перевод состояния проекта в Не выбран(undefined).
  function handleCancelAddProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectID: undefined,
      };
    });
  }
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
  // Выбор определенного проекта из массива по ID.
  function hadnleSelectProject(id) {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectID: id,
      };
    });
  }
  // Удаление Проекта из массива.
  function handleDeleteProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectID: undefined,
        projects: prevState.projects.filter(
          (project) => project.id !== prevState.selectedProjectID
        ),
      };
    });
  }

  // Добавление задания в проекте.
  function handleAddTask(text) {
    setProjectState((prevState) => {
      const taskID = {
        text: text,
        projectID: prevState.selectedProjectID,
        id: Math.random(),
      };
      return {
        ...prevState,
        tasks: [...prevState.tasks, taskID],
      };
    });
  }
  // Удаление задания в проекте.
  function handleDeleteTask(id) {
    setProjectState((prevState) => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter((task) => task.id !== id),
      };
    });
  }

  // Получение текущего проекта по ID projectState.
  const selectedProject = projectState.projects.find(
    (project) => project.id === projectState.selectedProjectID
  );

  // Рендер определенного проекта.
  let content = (
    <SelectProject
      project={selectedProject}
      onDelete={handleDeleteProject}
      onAddTask={handleAddTask}
      onDeleteTask={handleDeleteTask}
      tasks={projectState.tasks}
    />
  );

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
        onSelectProject={hadnleSelectProject}
        selectedProjectID={projectState.selectedProjectID}
      />
      {content}
    </main>
  );
}
