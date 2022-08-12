import './App.css';
import Main from "./components/Main"
import Project from './components/Project';
import Works from './components/Works';
import workData from './WorkData'
import projectData from './ProjectData';
function App() {
  const workElements = workData.map(item =>{
    return(
      <Works
      key = {item.key}
      heading = {item.heading}
      date = {item.date}
      site = {item.site}
      describe = {item.describe}
      />
    )
  })
  const projectElements = projectData.map(item=> {
    return(
      <Project
          key = {item.key}
          img = {item.img}
          year = {item.year}
          type = {item.type}
          describe = {item.describe}
      />
    )
  })
  return (
    <div className="App">
      <Main/>
      <h2 className='certificate--heading'>Certificates</h2>
      <div className = 'works'>
        {workElements}
      </div>
      <h2 className='project--heading'>Projects</h2>
      <div className='projects'>
        {projectElements}
      </div>
    </div>
  );
}

export default App;
