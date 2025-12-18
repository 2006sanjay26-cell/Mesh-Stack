import React from 'react';
import { Link } from 'react-router-dom';
import './StudentList.css';

function StudentList({ students, deleteStudent }) {
  return (
    <div className="student-list-container">
      <div className="list-header">
        <h2>Student List</h2>
        <Link to="/add-student" className="btn btn-primary">+ Add New Student</Link>
      </div>

      {students.length === 0 ? (
        <div className="empty-state">
          <p>No students added yet. 📚</p>
          <Link to="/add-student" className="btn btn-primary">Add First Student</Link>
        </div>
      ) : (
        <div className="table-wrapper">
          <table className="students-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Roll Number</th>
                <th>Course</th>
                <th>Phone</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <tr key={student.id}>
                  <td>{student.name}</td>
                  <td>{student.email}</td>
                  <td>{student.rollNumber}</td>
                  <td>{student.course}</td>
                  <td>{student.phone}</td>
                  <td>
                    <button
                      className="btn btn-delete"
                      onClick={() => {
                        if (window.confirm('Are you sure you want to delete this student?')) {
                          deleteStudent(student.id);
                        }
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <div className="list-footer">
        <p>Total Students: <strong>{students.length}</strong></p>
      </div>
    </div>
  );
}

export default StudentList;
