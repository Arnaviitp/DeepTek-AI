import React, { Suspense, lazy, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { ToastProvider } from './components/Toast';

// Layouts - Loaded eagerly as it's needed immediately
import PublicLayout from './components/public/PublicLayout';

// Loading Component
const PageLoader = () => (
  <div className="min-h-screen bg-black flex items-center justify-center">
    <div className="flex flex-col items-center gap-4">
      <div className="w-12 h-12 border-4 border-blue-500/30 border-t-blue-500 rounded-full animate-spin" />
      <p className="text-gray-400 text-sm">Loading...</p>
    </div>
  </div>
);

// Lazy loaded Public Pages
const Home = lazy(() => import('./pages/Home'));
const Careers = lazy(() => import('./pages/Careers'));
const JobDetails = lazy(() => import('./pages/JobDetails'));
const Pricing = lazy(() => import('./pages/Pricing'));
const Blog = lazy(() => import('./pages/Blog'));
const BlogPost = lazy(() => import('./pages/BlogPost'));
const RequestDemo = lazy(() => import('./pages/RequestDemo'));
const Features = lazy(() => import('./pages/Features'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Privacy = lazy(() => import('./pages/Privacy'));
const Terms = lazy(() => import('./pages/Terms'));
const Security = lazy(() => import('./pages/Security'));
const Integrations = lazy(() => import('./pages/Integrations'));
const Changelog = lazy(() => import('./pages/Changelog'));

// Lazy loaded Dashboard Components
const Sidebar = lazy(() => import('./components/Sidebar'));
const Worklist = lazy(() => import('./components/Worklist'));
const Analytics = lazy(() => import('./components/Analytics'));
const DashboardHome = lazy(() => import('./components/DashboardHome'));
const ReportTemplates = lazy(() => import('./components/ReportTemplates'));
const ClientManagement = lazy(() => import('./components/ClientManagement'));
const HangingProtocol = lazy(() => import('./components/HangingProtocol'));
const ReportingInterface = lazy(() => import('./components/ReportingInterface'));
const Settings = lazy(() => import('./components/Settings'));
const Auth = lazy(() => import('./components/Auth'));
const FAQ = lazy(() => import('./components/FAQ'));
const Support = lazy(() => import('./components/Support'));
const Billing = lazy(() => import('./components/Billing'));
const MSWordAddIn = lazy(() => import('./components/MSWordAddIn'));

// 404 Not Found Component
const NotFound = () => (
  <div className="min-h-[70vh] flex flex-col items-center justify-center px-6 text-center">
    <div className="text-8xl font-bold bg-gradient-to-b from-white to-gray-600 bg-clip-text text-transparent mb-4">
      404
    </div>
    <h1 className="text-2xl font-bold text-white mb-4">Page Not Found</h1>
    <p className="text-gray-400 mb-8 max-w-md">
      The page you're looking for doesn't exist or has been moved.
    </p>
    <a
      href="/"
      className="px-6 py-3 bg-blue-500 text-white rounded-full font-semibold hover:bg-blue-600 transition-colors"
    >
      Go Home
    </a>
  </div>
);

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
      <Suspense fallback={<div className="w-64 bg-[#0A1628]" />}>
        {activePage !== 'reporting' && <Sidebar activePage={activePage} onNavigate={setActivePage} onLogout={onLogout} />}
      </Suspense>
      <main className="main-content">
        <Suspense fallback={<PageLoader />}>
          {activePage === 'dashboard' && <DashboardHome user={user} onNavigate={setActivePage} />}
          {activePage === 'worklist' && <Worklist onOpenStudy={handleOpenStudy} />}
          {activePage === 'templates' && <ReportTemplates />}
          {activePage === 'clients' && <ClientManagement />}
          {activePage === 'hanging_protocol' && <HangingProtocol />}
          {activePage === 'analytics' && <Analytics />}
          {activePage === 'billing' && <Billing />}
          {activePage === 'settings' && <Settings />}
          {activePage === 'faq' && <FAQ />}
          {activePage === 'support' && <Support />}
          {activePage === 'ms_word' && <MSWordAddIn />}
          {activePage === 'reporting' && (
            <ReportingInterface
              study={selectedStudy}
              onBack={() => setActivePage('worklist')}
              user={user}
            />
          )}
        </Suspense>
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

// Error Boundary Component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-black flex items-center justify-center p-6">
          <div className="text-center max-w-md">
            <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-white mb-4">Something went wrong</h1>
            <p className="text-gray-400 mb-8">
              We encountered an unexpected error. Please try refreshing the page.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-3 bg-blue-500 text-white rounded-full font-semibold hover:bg-blue-600 transition-colors"
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

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
    <ErrorBoundary>
      <ToastProvider>
        <Router>
          <Suspense fallback={<PageLoader />}>
            <Routes>
              {/* Public Routes */}
              <Route element={<PublicLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/careers" element={<Careers />} />
                <Route path="/careers/:id" element={<JobDetails />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:id" element={<BlogPost />} />
                <Route path="/request-demo" element={<RequestDemo />} />
                <Route path="/features" element={<Features />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/security" element={<Security />} />
                <Route path="/integrations" element={<Integrations />} />
                <Route path="/changelog" element={<Changelog />} />

                {/* 404 Page */}
                <Route path="*" element={<NotFound />} />
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
          </Suspense>
        </Router>
      </ToastProvider>
    </ErrorBoundary>
  );
}

// Wrapper to inject navigation after login
const AuthWrapper = ({ onLogin, mode }) => {
  const navigate = useNavigate();

  const handleSuccess = (user) => {
    onLogin(user);
    navigate('/dashboard');
  };

  return (
    <Suspense fallback={<PageLoader />}>
      <Auth onLogin={handleSuccess} initialMode={mode === 'signup' ? false : true} />
    </Suspense>
  );
};

export default App;
