import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Privacy = () => {
    return (
        <div className="py-24 px-6 max-w-4xl mx-auto">
            <Link to="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors">
                <ArrowLeft className="w-4 h-4" />
                Back to Home
            </Link>

            <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-gray-400 mb-12">Last updated: December 28, 2024</p>

            <div className="prose prose-invert prose-lg max-w-none space-y-8">
                <section>
                    <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
                    <p className="text-gray-300">
                        DeepTek AI ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our AI-powered radiology platform and related services.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">2. Information We Collect</h2>
                    <h3 className="text-xl font-semibold mb-3">Personal Information</h3>
                    <ul className="list-disc pl-6 text-gray-300 space-y-2">
                        <li>Name, email address, and contact information</li>
                        <li>Professional credentials and institutional affiliation</li>
                        <li>Account login credentials</li>
                        <li>Payment and billing information</li>
                    </ul>

                    <h3 className="text-xl font-semibold mb-3 mt-6">Medical Data</h3>
                    <ul className="list-disc pl-6 text-gray-300 space-y-2">
                        <li>Medical imaging data (DICOM files)</li>
                        <li>Radiology reports and annotations</li>
                        <li>Patient demographic information (de-identified when possible)</li>
                    </ul>

                    <h3 className="text-xl font-semibold mb-3 mt-6">Usage Data</h3>
                    <ul className="list-disc pl-6 text-gray-300 space-y-2">
                        <li>Log data and analytics</li>
                        <li>Feature usage patterns</li>
                        <li>Device and browser information</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">3. How We Use Your Information</h2>
                    <ul className="list-disc pl-6 text-gray-300 space-y-2">
                        <li>To provide and maintain our radiology AI services</li>
                        <li>To process medical images and generate AI-assisted reports</li>
                        <li>To improve our AI models and algorithms</li>
                        <li>To communicate with you about your account and our services</li>
                        <li>To comply with legal and regulatory requirements</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">4. HIPAA Compliance</h2>
                    <p className="text-gray-300">
                        We are committed to complying with the Health Insurance Portability and Accountability Act (HIPAA). We implement appropriate administrative, physical, and technical safeguards to protect Protected Health Information (PHI). We will enter into Business Associate Agreements (BAAs) with covered entities as required.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">5. Data Security</h2>
                    <p className="text-gray-300">
                        We employ industry-standard security measures including:
                    </p>
                    <ul className="list-disc pl-6 text-gray-300 space-y-2 mt-4">
                        <li>End-to-end encryption for data in transit and at rest</li>
                        <li>Multi-factor authentication</li>
                        <li>Regular security audits and penetration testing</li>
                        <li>SOC 2 Type II compliance</li>
                        <li>Role-based access controls</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">6. Data Retention</h2>
                    <p className="text-gray-300">
                        We retain your data for as long as necessary to provide our services and comply with legal obligations. Medical imaging data is retained according to applicable healthcare regulations and your institutional policies.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">7. Your Rights</h2>
                    <p className="text-gray-300">
                        Depending on your jurisdiction, you may have the right to:
                    </p>
                    <ul className="list-disc pl-6 text-gray-300 space-y-2 mt-4">
                        <li>Access your personal information</li>
                        <li>Correct inaccurate data</li>
                        <li>Request deletion of your data</li>
                        <li>Object to certain processing activities</li>
                        <li>Data portability</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">8. Third-Party Services</h2>
                    <p className="text-gray-300">
                        We may use third-party services for cloud hosting, analytics, and payment processing. These providers are carefully vetted and bound by data protection agreements.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">9. Changes to This Policy</h2>
                    <p className="text-gray-300">
                        We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on this page and updating the "Last updated" date.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">10. Contact Us</h2>
                    <p className="text-gray-300">
                        If you have any questions about this Privacy Policy, please contact us at:
                    </p>
                    <div className="mt-4 p-6 rounded-xl bg-white/5 border border-white/10">
                        <p className="text-gray-300">
                            <strong>DeepTek AI Privacy Team</strong><br />
                            Email: privacy@deeptek.ai<br />
                            Address: Ranchi, Jharkhand, India
                        </p>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Privacy;
