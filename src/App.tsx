import {Header} from"./components/Header";
import {Footer} from"./components/Footer";
import {Task} from"./components/Task";
import {TaskInput} from "./components/TaskInput";
import {Sidebar} from "./components/Sidebar";
import {type TaskCardProps} from "./libs/types";

function App() {
  const taskList: TaskCardProps[] = [
  { id: 1, title: "Read a book", description: "Vite + React + Bootstrap + TS", isDone: false },
  { id: 2, title: "Write code", description: "Finish project for class", isDone: false },
  { id: 3, title: "Deploy app", description: "Push project to GitHub Pages", isDone: false },
];

  return (
    <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
      {/* Header ด้านบน */}
      <Header />

      <div className="d-flex flex-grow-1">
        {/* Sidebar ด้านซ้าย */}
        <Sidebar userName="chanadda" type="admin" />

        {/* Main content */}
        <main className="flex-grow-1 p-4">
          {/* Input เพิ่ม Task */}
          <TaskInput />

          {/* แสดง Task ทั้งหมด */}
          {taskList.map((task) => (
            <Task key={task.id} {...task} />
          ))}
        </main>
      </div>

      {/* Footer ด้านล่าง */}
      <Footer
        year="2026"
        fullName="Jeerakit Attaittiruj"
        studentId="670610681"
      />
    </div>
  );
}

export default App;
