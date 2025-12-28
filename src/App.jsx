import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from 'react-router-dom';

// Layouts
import PublicLayout from './components/public/PublicLayout';

// Public Pages
import Home from './pages/Home';
import Careers from './pages/Careers';
import Pricing from './pages/Pricing';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';

// Dashboard Components
import Sidebar from './components/Sidebar';
import Worklist from './components/Worklist';
import Analytics from './components/Analytics';
import DashboardHome from './components/DashboardHome';
import ReportTemplates from './components/ReportTemplates';
import ClientManagement from './components/ClientManagement';
import HangingProtocol from './components/HangingProtocol';
import ReportingInterface from './components/ReportingInterface';
import Settings from './components/Settings';
import Auth from './components/Auth';
import FAQ from './components/FAQ';
import Support from './components/Support';

// Protected Route Wrapper
const ProtectedRoute = ({ isAuthenticated, children }) => {
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

// Dashboard Layout Wrapper
const DashboardLayout = ({ user, onLogout }) => {
  const [activePage, setActivePage] = useState('dashboard');
  const [selectedStudy, setSelectedStudy] = useState(null);

  const handleOpenStudy = (study) => {
    setSelectedStudy(study);
    setActivePage('reporting');
  };

  return (
    <div className="app-container">
      {activePage !== 'reporting' && <Sidebar activePage={activePage} onNavigate={setActivePage} onLogout={onLogout} />}
      <main className="main-content">
        {activePage === 'dashboard' && <DashboardHome user={user} onNavigate={setActivePage} />}
        {activePage === 'worklist' && <Worklist onOpenStudy={handleOpenStudy} />}
        {activePage === 'templates' && <ReportTemplates />}
        {activePage === 'clients' && <ClientManagement />}
        {activePage === 'hanging_protocol' && <HangingProtocol />}
        {activePage === 'analytics' && <Analytics />}
        {activePage === 'settings' && <Settings />}
        {activePage === 'faq' && <FAQ />}
        {activePage === 'support' && <Support />}
        {activePage === 'reporting' && (
          <ReportingInterface
            study={selectedStudy}
            onBack={() => setActivePage('worklist')}
            user={user}
          />
        )}
      </main>
      <style>{`
        .app-container {
          display: flex;
          height: 100vh;
          width: 100vw;
          background-color: var(--bg-app);
          color: var(--text-main);
        }
        .main-content {
          flex: 1;
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  const handleLogin = (userData) => {
    setIsAuthenticated(true);
    setUser(userData);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUser(null);
  };

  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/careers/:id" element={<div className="p-20 text-center">Job Details Interface Coming Soon</div>} />
        </Route>

        {/* Auth Routes */}
        <Route
          path="/login"
          element={
            isAuthenticated ? <Navigate to="/dashboard" /> : <AuthWrapper onLogin={handleLogin} mode="login" />
          }
        />
        <Route
          path="/signup"
          element={
            isAuthenticated ? <Navigate to="/dashboard" /> : <AuthWrapper onLogin={handleLogin} mode="signup" />
          }
        />

        {/* Protected Dashboard Routes */}
        <Route
          path="/dashboard/*"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <DashboardLayout user={user} onLogout={handleLogout} />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

// Wrapper to inject navigation after login
const AuthWrapper = ({ onLogin, mode }) => {
  const navigate = useNavigate();

  const handleSuccess = (user) => {
    onLogin(user);
    navigate('/dashboard');
  };

  return <Auth onLogin={handleSuccess} initialMode={mode === 'signup' ? false : true} />;
};

export default App;
