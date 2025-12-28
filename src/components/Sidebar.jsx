import React, { useState } from 'react';
import {
  LayoutDashboard, List, Activity, Settings, HelpCircle, LogOut, FileText, Users,
  Receipt, Clipboard, Phone, MessageCircle, ChevronLeft, ChevronRight, Menu
} from 'lucide-react';

const Sidebar = ({ activePage = 'worklist', onNavigate, onLogout }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <aside className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
      <div className="logo-container">
        <div className="logo-icon">
          {isCollapsed ? <Activity color="#3b82f6" size={24} /> : <Activity color="#3b82f6" size={24} />}
        </div>
        {!isCollapsed && <span className="logo-text">Augmento DeepTek AI</span>}
        <button
          className="collapse-toggle"
          onClick={() => setIsCollapsed(!isCollapsed)}
          title={isCollapsed ? "Expand Sidebar" : "Collapse Sidebar"}
        >
          {isCollapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
        </button>
      </div>

      <nav className="nav-menu">
        {/* Main Section */}
        <NavItem
          icon={List} label="Study List" page="worklist"
          activePage={activePage} onNavigate={onNavigate} collapsed={isCollapsed}
        />
        <NavItem
          icon={Activity} label="Analytics" page="analytics"
          activePage={activePage} onNavigate={onNavigate} collapsed={isCollapsed}
        />
        <NavItem
          icon={Receipt} label="Billing" page="billing"
          activePage={activePage} onNavigate={onNavigate} collapsed={isCollapsed}
        />

        {/* PROFILE Section */}
        {!isCollapsed ? (
          <div className="nav-section-title">PROFILE</div>
        ) : (
          <div className="nav-section-divider" />
        )}

        <NavItem
          icon={Users} label="Clients" page="clients"
          activePage={activePage} onNavigate={onNavigate} collapsed={isCollapsed}
        />
        <NavItem
          icon={Clipboard} label="Hanging Protocol" page="hanging_protocol"
          activePage={activePage} onNavigate={onNavigate} collapsed={isCollapsed}
        />
        <NavItem
          icon={FileText} label="Report Templates" page="templates"
          activePage={activePage} onNavigate={onNavigate} collapsed={isCollapsed}
        />

        {/* HELP Section */}
        {!isCollapsed ? (
          <div className="nav-section-title">HELP</div>
        ) : (
          <div className="nav-section-divider" />
        )}

        <NavItem
          icon={FileText} label="MS-Word Add In" page="ms_word"
          activePage={activePage} onNavigate={onNavigate} collapsed={isCollapsed}
        />
        <NavItem
          icon={HelpCircle} label="FAQ" page="faq"
          activePage={activePage} onNavigate={onNavigate} collapsed={isCollapsed}
        />
        <NavItem
          icon={Phone} label="Support" page="support"
          activePage={activePage} onNavigate={onNavigate} collapsed={isCollapsed}
        />
      </nav>

      <div className="bottom-menu">
        <button className="nav-item text-danger" onClick={onLogout} title="Logout">
          <LogOut size={20} />
          {!isCollapsed && <span>Logout</span>}
        </button>
      </div>

      <style>{`
        .sidebar {
          width: 260px;
          background-color: var(--bg-sidebar);
          border-right: 1px solid var(--border-color);
          display: flex;
          flex-direction: column;
          padding: 1rem;
          height: 100vh;
          transition: width 0.3s ease;
        }
        .sidebar.collapsed {
            width: 80px;
            padding: 1rem 0.5rem;
        }

        .logo-container {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.5rem 0.75rem;
          margin-bottom: 2rem;
          position: relative;
          min-height: 40px;
        }
        .sidebar.collapsed .logo-container {
            justify-content: center;
            padding: 0;
            flex-direction: column;
            gap: 1rem;
        }

        .logo-icon {
          background: rgba(59, 130, 246, 0.1);
          padding: 6px;
          border-radius: 8px;
          flex-shrink: 0;
        }
        .logo-text {
          font-weight: 700;
          font-size: 1.1rem;
          letter-spacing: -0.5px;
          white-space: nowrap;
          overflow: hidden;
          opacity: 1;
          transition: opacity 0.2s;
        }
        
        .collapse-toggle {
            background: transparent;
            border: 1px solid var(--border-color);
            color: var(--text-muted);
            border-radius: 4px;
            display: flex; align-items: center; justify-content: center;
            cursor: pointer;
            width: 24px; height: 24px;
            margin-left: auto;
        }
        .sidebar.collapsed .collapse-toggle {
            margin-left: 0;
            width: 100%;
            border: none;
            padding-top: 0.5rem;
        }
        .collapse-toggle:hover {
            color: var(--text-main);
            background: var(--bg-hover);
        }

        .nav-menu {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          flex: 1;
          overflow-y: auto;
          overflow-x: hidden;
          padding-right: 4px;
        }
        .sidebar.collapsed .nav-menu {
            padding-right: 0;
            align-items: center;
        }

        .nav-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.75rem;
          border-radius: 6px;
          color: var(--text-muted);
          text-decoration: none;
          transition: all 0.2s;
          background: none;
          border: 1px solid transparent;
          cursor: pointer;
          width: 100%;
          text-align: left;
          font-family: inherit;
          font-size: 0.95rem;
          white-space: nowrap;
        }
        .sidebar.collapsed .nav-item {
            justify-content: center;
            padding: 0.75rem;
            width: auto;
        }

        .nav-item:hover {
          color: var(--text-main);
          background-color: var(--bg-hover);
        }
        .nav-item.active {
          color: var(--text-main);
          background-color: rgba(0, 166, 251, 0.1); /* Brand Cyan Tint */
          border-color: rgba(0, 166, 251, 0.2);
        }
        .nav-item.active svg {
            color: var(--primary);
        }
        
        .nav-section-title {
           font-size: 0.75rem;
           font-weight: 700;
           color: var(--text-muted);
           margin-top: 1.5rem;
           margin-bottom: 0.5rem;
           padding-left: 0.75rem;
           letter-spacing: 0.5px;
        }
        .nav-section-divider {
            width: 20px;
            height: 1px;
            background: var(--border-color);
            margin: 1rem 0;
        }

        .bottom-menu {
          border-top: 1px solid var(--border-color);
          padding-top: 1rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .sidebar.collapsed .bottom-menu {
            align-items: center;
        }

        .text-danger:hover {
           background-color: rgba(239, 68, 68, 0.1) !important;
           color: var(--accent-critical) !important;
           border-color: transparent;
        }

        /* Scrollbar styles */
        .nav-menu::-webkit-scrollbar { width: 4px; }
        .nav-menu::-webkit-scrollbar-track { background: transparent; }
        .nav-menu::-webkit-scrollbar-thumb { background: var(--border-color); border-radius: 4px; }
        .nav-menu::-webkit-scrollbar-thumb:hover { background: var(--text-muted); }
      `}</style>
    </aside>
  );
};

const NavItem = ({ icon: Icon, label, page, activePage, onNavigate, collapsed }) => (
  <button
    className={`nav-item ${activePage === page ? 'active' : ''}`}
    onClick={() => onNavigate && onNavigate(page)}
    title={collapsed ? label : ''}
  >
    <Icon size={20} />
    {!collapsed && <span>{label}</span>}
  </button>
);

export default Sidebar;
