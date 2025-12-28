import React from 'react';
import { Shield, Lock, Server, Eye, CheckCircle, AlertTriangle, Key, FileCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const Security = () => {
    const certifications = [
        { name: 'HIPAA Compliant', desc: 'Full compliance with healthcare data regulations' },
        { name: 'SOC 2 Type II', desc: 'Independently audited security controls' },
        { name: 'ISO 27001', desc: 'International security management standard' },
        { name: 'GDPR Ready', desc: 'European data protection compliance' }
    ];

    const features = [
        {
            icon: Lock,
            title: 'End-to-End Encryption',
            desc: 'All data is encrypted using AES-256 both in transit and at rest. Your medical imaging data is never accessible in unencrypted form.'
        },
        {
            icon: Key,
            title: 'Multi-Factor Authentication',
            desc: 'Protect your account with mandatory 2FA, supporting hardware tokens, authenticator apps, and biometrics.'
        },
        {
            icon: Server,
            title: 'Secure Infrastructure',
            desc: 'Hosted on enterprise-grade cloud infrastructure with redundant systems, regular backups, and disaster recovery.'
        },
        {
            icon: Eye,
            title: 'Audit Logging',
            desc: 'Comprehensive audit trails track all access to patient data, supporting compliance and security investigations.'
        },
        {
            icon: Shield,
            title: 'Role-Based Access',
            desc: 'Granular permissions ensure users only access the data and features necessary for their role.'
        },
        {
            icon: FileCheck,
            title: 'Regular Assessments',
            desc: 'Continuous vulnerability scanning, annual penetration testing, and regular security audits by third parties.'
        }
    ];

    return (
        <div className="overflow-hidden">
            {/* Hero */}
            <section className="py-24 px-6 relative">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-green-900/20 via-black to-black" />
                <div className="relative max-w-4xl mx-auto text-center">
                    <div className="w-20 h-20 bg-green-500/10 rounded-2xl flex items-center justify-center mx-auto mb-8">
                        <Shield className="w-10 h-10 text-green-400" />
                    </div>
                    <h1 className="text-5xl font-bold mb-6">Security First</h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        We take the security of your medical data seriously. Our platform is built from the ground up with security and compliance in mind.
                    </p>
                </div>
            </section>

            {/* Certifications */}
            <section className="py-16 px-6 border-y border-white/10">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-4 gap-8 text-center">
                        {certifications.map((cert, i) => (
                            <div key={i} className="p-6">
                                <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <CheckCircle className="w-6 h-6 text-green-400" />
                                </div>
                                <h3 className="font-bold text-lg mb-2">{cert.name}</h3>
                                <p className="text-sm text-gray-400">{cert.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Security Features */}
            <section className="py-24 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4">Enterprise-Grade Security</h2>
                        <p className="text-gray-400">Comprehensive security measures to protect your data</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature, i) => (
                            <div key={i} className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-green-500/50 transition-all">
                                <div className="w-14 h-14 bg-green-500/10 rounded-xl flex items-center justify-center text-green-400 mb-6">
                                    <feature.icon className="w-7 h-7" />
                                </div>
                                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                                <p className="text-gray-400">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Data Protection */}
            <section className="py-24 px-6 bg-white/5">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold mb-12 text-center">How We Protect Your Data</h2>

                    <div className="space-y-8">
                        <div className="p-6 rounded-xl bg-black/30 border border-white/10">
                            <h3 className="text-xl font-bold mb-4">Data at Rest</h3>
                            <ul className="space-y-3 text-gray-300">
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                                    AES-256 encryption for all stored data
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                                    Encryption keys managed through hardware security modules (HSM)
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                                    Regular encrypted backups with geographic redundancy
                                </li>
                            </ul>
                        </div>

                        <div className="p-6 rounded-xl bg-black/30 border border-white/10">
                            <h3 className="text-xl font-bold mb-4">Data in Transit</h3>
                            <ul className="space-y-3 text-gray-300">
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                                    TLS 1.3 encryption for all network communications
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                                    Certificate pinning for mobile applications
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                                    Secure VPN options for on-premise integrations
                                </li>
                            </ul>
                        </div>

                        <div className="p-6 rounded-xl bg-black/30 border border-white/10">
                            <h3 className="text-xl font-bold mb-4">Access Controls</h3>
                            <ul className="space-y-3 text-gray-300">
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                                    Role-based access control (RBAC) with least privilege principle
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                                    Single Sign-On (SSO) integration with SAML/OAuth
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                                    Session timeout and automatic logout
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Security Report */}
            <section className="py-24 px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="p-8 rounded-2xl bg-gradient-to-br from-green-900/30 to-blue-900/30 border border-white/10">
                        <div className="flex items-start gap-4 mb-6">
                            <AlertTriangle className="w-8 h-8 text-yellow-400 flex-shrink-0" />
                            <div>
                                <h2 className="text-2xl font-bold mb-2">Report a Vulnerability</h2>
                                <p className="text-gray-400">
                                    We take security issues seriously. If you believe you've found a security vulnerability in our services, please report it responsibly.
                                </p>
                            </div>
                        </div>
                        <div className="ml-12">
                            <p className="text-gray-300 mb-4">
                                Email us at: <a href="mailto:security@deeptek.ai" className="text-blue-400 hover:underline">security@deeptek.ai</a>
                            </p>
                            <p className="text-sm text-gray-400">
                                We aim to acknowledge reports within 24 hours and provide a detailed response within 5 business days. We do not pursue legal action against security researchers who follow responsible disclosure practices.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 px-6 bg-white/5">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-6">Questions About Security?</h2>
                    <p className="text-xl text-gray-400 mb-8">
                        Our security team is here to help. Contact us for security documentation, compliance questions, or to schedule a security review.
                    </p>
                    <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black rounded-full font-bold hover:bg-gray-200 transition-all">
                        Contact Security Team
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Security;
