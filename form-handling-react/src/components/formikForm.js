import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './RegistrationForm.css'; // Reuse the same CSS

const FormikForm = () => {
  const [submitMessage, setSubmitMessage] = React.useState('');
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  // Validation schema using Yup with explicit string().required
  const validationSchema = Yup.object({
    username: Yup.string()
      .required('Username is required'),
    email: Yup.string()
      .required('Email is required')
      .email('Email is invalid'),
    password: Yup.string()
      .required('Password is required')
      .min(6, 'Password must be at least 6 characters')
  });

  // Initial form values
  const initialValues = {
    username: '',
    email: '',
    password: ''
  };

  // Handle form submission
  const handleSubmit = async (values, { resetForm }) => {
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
  };

  return (
    <div className="registration-form-container">
      <h2>User Registration (Formik with Yup Validation)</h2>
      
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched, isSubmitting: formikIsSubmitting }) => (
          <Form className="registration-form">
            <div className="form-group">
              <label htmlFor="username">Username:</label>
              <Field
                type="text"
                id="username"
                name="username"
                placeholder="Enter username"
                className={`form-input ${errors.username && touched.username ? 'error' : ''}`}
              />
              <ErrorMessage name="username" component="span" className="error-message" />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <Field
                type="email"
                id="email"
                name="email"
                placeholder="Enter email"
                className={`form-input ${errors.email && touched.email ? 'error' : ''}`}
              />
              <ErrorMessage name="email" component="span" className="error-message" />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <Field
                type="password"
                id="password"
                name="password"
                placeholder="Enter password"
                className={`form-input ${errors.password && touched.password ? 'error' : ''}`}
              />
              <ErrorMessage name="password" component="span" className="error-message" />
            </div>

            <button type="submit" disabled={isSubmitting || formikIsSubmitting}>
              {isSubmitting ? 'Submitting...' : 'Register'}
            </button>

            {submitMessage && (
              <div className={`submit-message ${submitMessage.includes('successful') ? 'success' : 'error'}`}>
                {submitMessage}
              </div>
            )}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormikForm;
