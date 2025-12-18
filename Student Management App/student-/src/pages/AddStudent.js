import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AddStudent.css';

function AddStudent({ addStudent }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    rollNumber: '',
    course: '',
    phone: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validateForm = () => {
    let newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.rollNumber.trim()) {
      newErrors.rollNumber = 'Roll Number is required';
    }
    if (!formData.course.trim()) {
      newErrors.course = 'Course is required';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone is required';
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = 'Phone must be 10 digits';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      addStudent(formData);
      setFormData({
        name: '',
        email: '',
        rollNumber: '',
        course: '',
        phone: ''
      });
      navigate('/student-list');
    }
  };

  return (
    <div className="add-student-container">
      <div className="form-wrapper">
        <h2>Add New Student</h2>
        <form onSubmit={handleSubmit} className="student-form">
          <div className="form-group">
            <label htmlFor="name">Full Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter student name"
              className={errors.name ? 'input-error' : ''}
            />
            {errors.name && <span className="error-message">{errors.name}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="email">Email *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter email address"
              className={errors.email ? 'input-error' : ''}
            />
            {errors.email && <span className="error-message">{errors.email}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="rollNumber">Roll Number *</label>
            <input
              type="text"
              id="rollNumber"
              name="rollNumber"
              value={formData.rollNumber}
              onChange={handleChange}
              placeholder="Enter roll number"
              className={errors.rollNumber ? 'input-error' : ''}
            />
            {errors.rollNumber && <span className="error-message">{errors.rollNumber}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="course">Course *</label>
            <input
              type="text"
              id="course"
              name="course"
              value={formData.course}
              onChange={handleChange}
              placeholder="Enter course name"
              className={errors.course ? 'input-error' : ''}
            />
            {errors.course && <span className="error-message">{errors.course}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone Number *</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter 10 digit phone number"
              className={errors.phone ? 'input-error' : ''}
            />
            {errors.phone && <span className="error-message">{errors.phone}</span>}
          </div>

          <div className="form-buttons">
            <button type="submit" className="btn btn-success">Add Student</button>
            <button 
              type="button" 
              className="btn btn-cancel"
              onClick={() => navigate('/student-list')}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddStudent;
