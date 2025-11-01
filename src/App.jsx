import ProjectSideBar from '@/components/ProjectSideBar.jsx';
import NewProject from '@/components/NewProject.jsx';
import NoProjectSelected from '@/components/NoProjectSelected.jsx';

export default function App() {
  return (
    <main className='h-screen flex gap-8 my-8'>
      <ProjectSideBar />
      {/* <NewProject /> */}
      <NoProjectSelected />
    </main>
  );
}
