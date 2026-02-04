import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

// SEO metadata for each route
const routeMeta = {
    '/': {
        title: 'DeepTek AI | Advanced AI-Powered Radiology Platform',
        description: 'Transform your radiology workflow with DeepTek AI. Generate comprehensive reports in seconds with 99.9% accuracy.',
    },
    '/features': {
        title: 'Features | DeepTek AI',
        description: 'Explore powerful AI features including automated reporting, PACS integration, and advanced diagnostics.',
    },
    '/pricing': {
        title: 'Pricing | DeepTek AI',
        description: 'Flexible pricing plans for radiology practices of all sizes. Start your free trial today.',
    },
    '/about': {
        title: 'About Us | DeepTek AI',
        description: 'Learn about our mission to revolutionize radiology with cutting-edge AI technology.',
    },
    '/careers': {
        title: 'Careers | DeepTek AI',
        description: 'Join our team and help shape the future of medical AI diagnostics.',
    },
    '/blog': {
        title: 'Blog | DeepTek AI',
        description: 'Insights, updates, and articles about radiology AI and healthcare technology.',
    },
    '/contact': {
        title: 'Contact | DeepTek AI',
        description: 'Get in touch with our team for demos, support, or partnership inquiries.',
    },
    '/request-demo': {
        title: 'Request Demo | DeepTek AI',
        description: 'Schedule a personalized demo to see DeepTek AI in action.',
    },
    '/integrations': {
        title: 'Integrations | DeepTek AI',
        description: 'Seamlessly integrate with your existing PACS, RIS, and EHR systems.',
    },
    '/security': {
        title: 'Security | DeepTek AI',
        description: 'Bank-grade security and HIPAA compliance to protect your patient data.',
    },
    '/changelog': {
        title: 'Changelog | DeepTek AI',
        description: 'Stay updated with the latest features and improvements.',
    },
    '/privacy': {
        title: 'Privacy Policy | DeepTek AI',
        description: 'Our commitment to protecting your privacy and data.',
    },
    '/terms': {
        title: 'Terms of Service | DeepTek AI',
        description: 'Terms and conditions for using DeepTek AI services.',
    },
};

const PublicLayout = () => {
    const location = useLocation();

    // Update document meta on route change
    useEffect(() => {
        const meta = routeMeta[location.pathname] || {
            title: 'DeepTek AI | Advanced AI-Powered Radiology Platform',
            description: 'Transform your radiology workflow with DeepTek AI.',
        };

        document.title = meta.title;

        // Update meta description
        let metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute('content', meta.description);
        }

        // Update OG tags
        let ogTitle = document.querySelector('meta[property="og:title"]');
        if (ogTitle) {
            ogTitle.setAttribute('content', meta.title);
        }

        let ogDescription = document.querySelector('meta[property="og:description"]');
        if (ogDescription) {
            ogDescription.setAttribute('content', meta.description);
        }

        // Scroll to top on route change
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [location.pathname]);

    return (
        <div className="min-h-screen bg-black text-white selection:bg-blue-500/30">
            <a
                href="#main-content"
                className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-500 focus:text-white focus:rounded-lg"
            >
                Skip to main content
            </a>
            <Navbar />
            <main id="main-content" className="pt-24 min-h-[calc(100vh-400px)]" role="main">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default PublicLayout;
