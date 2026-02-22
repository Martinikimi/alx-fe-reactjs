import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import './RegistrationForm.css'; // Reuse the same CSS

const FormikForm = () => {
  const [submitMessage, setSubmitMessage] = React.useState('');
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  // Validation schema using Yup
  const validationSchema = Yup.object({
    username: Yup.string()
      .required('Username is required')
      .min(3, 'Username must be at least 3 characters'),
    email: Yup.string()
      .required('Email is required')
      .email('Email is invalid'),
    password: Yup.string()
      .required('Password is required')
      .min(6, 'Password must be at least 6 characters')
  });

  // Formik hook
  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: ''
    },
    validationSchema: validationSchema,
    onSubmit: async (values, { resetForm }) => {
      setIsSubmitting(true);
      setSubmitMessage('');

      try {
        // Simulate API call to mock endpoint
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(values)
        });

        if (response.ok) {
          const data = await response.json();
          setSubmitMessage('Registration successful!');
          resetForm();
          console.log('Response:', data);
        } else {
          setSubmitMessage('Registration failed. Please try again.');
        }
      } catch (error) {
        setSubmitMessage('Error submitting form. Please try again.');
        console.error('Error:', error);
      } finally {
        setIsSubmitting(false);
      }
    }
  });

  return (
    <div className="registration-form-container">
      <h2>User Registration (Formik)</h2>
      
      <form onSubmit={formik.handleSubmit} className="registration-form">
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.username}
            placeholder="Enter username"
            className={formik.touched.username && formik.errors.username ? 'error' : ''}
          />
          {formik.touched.username && formik.errors.username && (
            <span className="error-message">{formik.errors.username}</span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            placeholder="Enter email"
            className={formik.touched.email && formik.errors.email ? 'error' : ''}
          />
          {formik.touched.email && formik.errors.email && (
            <span className="error-message">{formik.errors.email}</span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            placeholder="Enter password"
            className={formik.touched.password && formik.errors.password ? 'error' : ''}
          />
          {formik.touched.password && formik.errors.password && (
            <span className="error-message">{formik.errors.password}</span>
          )}
        </div>

        <button type="submit" disabled={isSubmitting || formik.isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Register'}
        </button>

        {submitMessage && (
          <div className={`submit-message ${submitMessage.includes('successful') ? 'success' : 'error'}`}>
            {submitMessage}
          </div>
        )}
      </form>
    </div>
  );
};

export default FormikForm;
