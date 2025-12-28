import React, { useState, useEffect } from 'react';
import { Activity, Mail, Lock, User, ArrowRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const Auth = ({ onLogin, initialMode = true }) => {
    const [isLogin, setIsLogin] = useState(initialMode);
    const [formData, setFormData] = useState({ name: '', email: '', password: '' });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        setIsLogin(initialMode);
    }, [initialMode]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');

        // Basic validation
        if (!formData.email || !formData.password) {
            setError('Please fill in all required fields.');
            return;
        }
        if (!isLogin && !formData.name) {
            setError('Please enter your full name.');
            return;
        }

        setLoading(true);

        // Simulate API call
        setTimeout(() => {
            setLoading(false);
            // Mock successful login/signup
            onLogin({
                name: isLogin ? 'Dr. Smith' : formData.name,
                email: formData.email
            });
        }, 1500);
    };

    const toggleMode = () => {
        if (isLogin) {
            navigate('/signup');
        } else {
            navigate('/login');
        }
    };

    return (
        <div className="auth-wrapper">
            <Link to="/" className="absolute top-8 left-8 text-gray-400 hover:text-white flex items-center gap-2 transition-colors z-10">
                &larr; Back to Home
            </Link>
            <div className="auth-card fade-in">
                <div className="auth-header">
                    <div className="logo-icon large">
                        <Activity color="#3b82f6" size={32} />
                    </div>
                    <h1>Augmento DeepTek AI</h1>
                    <p className="subtitle">{isLogin ? 'Welcome back! Please login to continue.' : 'Create a new account to get started.'}</p>
                </div>

                <form onSubmit={handleSubmit} className="auth-form">
                    {!isLogin && (
                        <div className="input-group">
                            <User size={18} className="input-icon" />
                            <input
                                type="text"
                                placeholder="Full Name"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            />
                        </div>
                    )}

                    <div className="input-group">
                        <Mail size={18} className="input-icon" />
                        <input
                            type="email"
                            placeholder="Email Address"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                    </div>

                    <div className="input-group">
                        <Lock size={18} className="input-icon" />
                        <input
                            type="password"
                            placeholder="Password"
                            value={formData.password}
                            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                        />
                    </div>

                    {error && <div className="error-msg">{error}</div>}

                    <button type="submit" className={`auth-btn ${loading ? 'loading' : ''}`} disabled={loading}>
                        {loading ? 'Processing...' : (isLogin ? 'Sign In' : 'Create Account')}
                        {!loading && <ArrowRight size={18} />}
                    </button>
                </form>

                <div className="auth-footer">
                    <p>
                        {isLogin ? "Don't have an account?" : "Already have an account?"}
                        <button onClick={toggleMode} className="toggle-btn">
                            {isLogin ? 'Sign Up' : 'Login'}
                        </button>
                    </p>
                </div>
            </div>

            <style>{`
        .auth-wrapper {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100vh;
            width: 100vw;
            background: radial-gradient(circle at center, #0F1D30 0%, #050B14 100%);
            position: relative;
        }
        .auth-card {
            background: var(--bg-panel); /* #1E293B */
            width: 100%;
            max-width: 420px;
            padding: 3rem 2rem;
            border-radius: 16px;
            border: 1px solid var(--border-color);
            box-shadow: var(--shadow-lg);
            display: flex;
            flex-direction: column;
            gap: 2rem;
        }
        .auth-header {
            text-align: center;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 0.5rem;
        }
        .logo-icon.large {
            background: rgba(59, 130, 246, 0.1);
            padding: 12px;
            border-radius: 12px;
            margin-bottom: 1rem;
        }
        .auth-header h1 {
            color: var(--text-main);
            font-size: 1.5rem;
            font-weight: 700;
        }
        .subtitle {
            color: var(--text-muted);
            font-size: 0.9rem;
        }

        .auth-form {
            display: flex;
            flex-direction: column;
            gap: 1rem;
        }
        .input-group {
            position: relative;
            display: flex;
            align-items: center;
        }
        .input-icon {
            position: absolute;
            left: 12px;
            color: var(--text-muted);
            pointer-events: none;
        }
        .input-group input {
            width: 100%;
            background: var(--bg-app);
            border: 1px solid var(--border-color);
            padding: 12px 12px 12px 42px;
            border-radius: 8px;
            color: var(--text-main);
            font-size: 1rem;
            outline: none;
            transition: border 0.2s;
        }
        .input-group input:focus {
            border-color: var(--primary);
            box-shadow: 0 0 0 2px rgba(0, 166, 251, 0.2);
        }

        .auth-btn {
            background: var(--primary);
            color: white;
            border: none;
            padding: 12px;
            border-radius: 8px;
            font-size: 1rem;
            font-weight: 600;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;
            margin-top: 1rem;
            transition: background 0.2s;
        }
        .auth-btn:hover {
            background: var(--primary-hover);
        }
        .auth-btn.loading {
            opacity: 0.7;
            cursor: not-allowed;
        }

        .error-msg {
            color: var(--accent-critical);
            font-size: 0.85rem;
            text-align: center;
            background: rgba(239, 68, 68, 0.1);
            padding: 0.5rem;
            border-radius: 6px;
        }

        .auth-footer {
            text-align: center;
            font-size: 0.9rem;
            color: var(--text-muted);
        }
        .toggle-btn {
            background: none;
            border: none;
            color: var(--primary);
            font-weight: 600;
            cursor: pointer;
            margin-left: 0.5rem;
        }
        .toggle-btn:hover {
            text-decoration: underline;
        }

        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }
        .fade-in {
            animation: fadeIn 0.4s ease-out forwards;
        }
      `}</style>
        </div>
    );
};

export default Auth;
