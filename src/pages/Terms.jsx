import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div className="py-24 px-6 max-w-4xl mx-auto">
            <Link to="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors">
                <ArrowLeft className="w-4 h-4" />
                Back to Home
            </Link>

            <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
            <p className="text-gray-400 mb-12">Last updated: December 28, 2024</p>

            <div className="prose prose-invert prose-lg max-w-none space-y-8">
                <section>
                    <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
                    <p className="text-gray-300">
                        By accessing or using DeepTek AI's services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using our services.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">2. Description of Service</h2>
                    <p className="text-gray-300">
                        DeepTek AI provides an AI-powered radiology platform that assists healthcare professionals with medical imaging analysis and report generation. Our services are intended to assist, not replace, qualified medical professionals in their clinical decision-making.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">3. User Accounts</h2>
                    <ul className="list-disc pl-6 text-gray-300 space-y-2">
                        <li>You must be a licensed healthcare professional or authorized representative to use our services</li>
                        <li>You are responsible for maintaining the confidentiality of your account credentials</li>
                        <li>You must notify us immediately of any unauthorized use of your account</li>
                        <li>You are responsible for all activities that occur under your account</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">4. Medical Disclaimer</h2>
                    <div className="p-6 rounded-xl bg-yellow-500/10 border border-yellow-500/20">
                        <p className="text-gray-300">
                            <strong className="text-yellow-400">Important:</strong> DeepTek AI's services are intended to assist medical professionals but do not replace professional medical judgment. All AI-generated findings and reports must be reviewed and verified by qualified radiologists before being used for clinical decision-making. We do not provide medical advice or diagnosis.
                        </p>
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">5. Acceptable Use</h2>
                    <p className="text-gray-300 mb-4">You agree not to:</p>
                    <ul className="list-disc pl-6 text-gray-300 space-y-2">
                        <li>Use the service for any unlawful purpose</li>
                        <li>Violate patient privacy or HIPAA regulations</li>
                        <li>Attempt to reverse engineer or copy our AI models</li>
                        <li>Share your account credentials with unauthorized users</li>
                        <li>Use the service to transmit malicious code or interfere with operations</li>
                        <li>Misrepresent AI-generated content as original clinical findings</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">6. Intellectual Property</h2>
                    <p className="text-gray-300">
                        All content, features, and functionality of our platform, including AI models, algorithms, software, and documentation, are owned by DeepTek AI and protected by intellectual property laws. You retain ownership of your medical data and reports.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">7. Data Usage and AI Training</h2>
                    <p className="text-gray-300">
                        Subject to your consent and applicable law, anonymized and de-identified data may be used to improve our AI models. You can opt out of this use at any time. We will never sell your data to third parties.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">8. Service Availability</h2>
                    <p className="text-gray-300">
                        We strive to maintain 99.99% uptime but do not guarantee uninterrupted access. We may perform maintenance or updates that temporarily affect service availability. We will provide advance notice when possible.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">9. Payment Terms</h2>
                    <ul className="list-disc pl-6 text-gray-300 space-y-2">
                        <li>Subscription fees are billed in advance on a monthly or annual basis</li>
                        <li>All fees are non-refundable except as required by law</li>
                        <li>We may change pricing with 30 days' notice</li>
                        <li>Failure to pay may result in service suspension</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">10. Limitation of Liability</h2>
                    <p className="text-gray-300">
                        To the maximum extent permitted by law, DeepTek AI shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services. Our total liability shall not exceed the amount paid by you in the 12 months preceding the claim.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">11. Indemnification</h2>
                    <p className="text-gray-300">
                        You agree to indemnify and hold harmless DeepTek AI from any claims, damages, or expenses arising from your use of our services, your violation of these terms, or your violation of any third-party rights.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">12. Termination</h2>
                    <p className="text-gray-300">
                        Either party may terminate this agreement with 30 days' written notice. We may immediately terminate your access if you violate these terms. Upon termination, you may request export of your data within 30 days.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">13. Governing Law</h2>
                    <p className="text-gray-300">
                        These terms shall be governed by the laws of India. Any disputes shall be resolved in the courts of Ranchi, Jharkhand.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">14. Changes to Terms</h2>
                    <p className="text-gray-300">
                        We reserve the right to modify these terms at any time. We will notify users of material changes via email or through the platform. Continued use after changes constitutes acceptance of the new terms.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">15. Contact</h2>
                    <p className="text-gray-300">
                        For questions about these Terms of Service, please contact us at:
                    </p>
                    <div className="mt-4 p-6 rounded-xl bg-white/5 border border-white/10">
                        <p className="text-gray-300">
                            <strong>DeepTek AI Legal Team</strong><br />
                            Email: legal@deeptek.ai<br />
                            Address: Ranchi, Jharkhand, India
                        </p>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Terms;
