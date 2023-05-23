import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import { ProjectsProviderWrapper } from './context/projects.context';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProviderWrapper } from './context/auth.context';

createRoot(document.getElementById('app')).render(
  <React.StrictMode>
    <Router>
      <AuthProviderWrapper>
        <ProjectsProviderWrapper>
          <App />
        </ProjectsProviderWrapper>
      </AuthProviderWrapper>
    </Router>
  </React.StrictMode>
);
