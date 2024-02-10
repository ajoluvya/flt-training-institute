//import CourseList from './components/Courses';
//import BranchList from './components/Branches';
//import logo from './logo.svg';
import {AddInstructor} from './components/Instructors';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>
          Flight Training Institute
        </h1>
      </header>
      <section>
        <AddInstructor/>
      </section>
    </div>
  );
}

export default App;
