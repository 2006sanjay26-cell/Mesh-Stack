import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import AddStudent from './pages/AddStudent';
import StudentList from './pages/StudentList';
import About from './pages/About';
import './App.css';

function App() {
  const [students, setStudents] = useState([]);

  const addStudent = (student) => {
    const newStudent = {
      id: Date.now(),
      ...student
    };
    setStudents([...students, newStudent]);
  };

  const deleteStudent = (id) => {
    setStudents(students.filter(student => student.id !== id));
  };

  return (
    <Router>
      <Navigation />
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route 
            path="/add-student" 
            element={<AddStudent addStudent={addStudent} />} 
          />
          <Route 
            path="/student-list" 
            element={<StudentList students={students} deleteStudent={deleteStudent} />} 
          />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
