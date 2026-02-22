
## Features

### Controlled Components Form (`RegistrationForm.jsx`)
- Manual state management using useState
- Custom validation logic
- Real-time error display
- Loading states during submission
- Form reset after successful submission

### Formik Form (`FormikForm.jsx`)
- Formik for form state management
- Yup schema validation
- Automatic error handling
- Touched fields tracking
- Built-in form submission handling

### Common Features
- Three fields: username, email, password
- Field validation:
  - Username: required, minimum 3 characters
  - Email: required, valid email format
  - Password: required, minimum 6 characters
- Mock API integration with JSONPlaceholder
- Success/error message display
- Responsive design

## Technologies Used

- React 18
- Vite (build tool)
- Formik 2.x
- Yup 1.x
- CSS3 (vanilla CSS)
- JSONPlaceholder (mock API)

## Prerequisites

Before you begin, ensure you have installed:
- Node.js (v14 or higher)
- npm (v6 or higher)

## Installation & Setup

1. **Clone the repository:**
```bash
git clone <your-repository-url>
cd form-handling-react
