import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Card, CardContent, TextField, Button } from '@mui/material';

function LoginForm() {
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem('myFormData', JSON.stringify(formData));
    navigate('/listpage');
  };

  return (
    <div className="main-bg">
      <Container maxWidth="sm">
        <Card sx={{ boxShadow: 4, mt: 5 }}>
        <Card sx={{ textAlign: 'center', pt: 3 }}>
            <h2>User Form</h2>
          </Card>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <TextField
                  label="Full name"
                  type="text"
                  name="username"
                  onChange={handleChange}
                  required
                  fullWidth
                />
              </div>
              <div className="mb-4">
                <TextField
                  label="Email"
                  type="email"
                  name="email"
                  onChange={handleChange}
                  required
                  fullWidth
                />
              </div>
              <div className="mb-4">
                <TextField
                  label="Phone no."
                  type="tel"
                  name="password"
                  onChange={handleChange}
                  required
                  fullWidth
                />
              </div>
              <div className="d-grid gap-2 col- mx-auto" style={{ width: '18rem' }}>
                <Button variant="contained" type="submit" >
                  Login
                </Button>
               
              </div>
            </form>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
}

export default LoginForm;
