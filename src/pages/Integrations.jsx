import React from 'react';
import { Plug, Database, FileText, Workflow, Cloud, Shield, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Integrations = () => {
    const integrations = [
        {
            category: 'PACS Systems',
            items: [
                { name: 'Philips IntelliSpace', status: 'available' },
                { name: 'GE Centricity', status: 'available' },
                { name: 'Siemens syngo.plaza', status: 'available' },
                { name: 'Agfa Enterprise Imaging', status: 'available' },
                { name: 'Sectra PACS', status: 'available' },
                { name: 'Fujifilm Synapse', status: 'coming' }
            ]
        },
        {
            category: 'RIS Systems',
            items: [
                { name: 'Epic Radiant', status: 'available' },
                { name: 'Cerner RadNet', status: 'available' },
                { name: 'McKesson Radiology', status: 'available' },
                { name: 'Meditech', status: 'available' },
                { name: 'NextGen', status: 'coming' }
            ]
        },
        {
            category: 'EHR/EMR Systems',
            items: [
                { name: 'Epic', status: 'available' },
                { name: 'Cerner', status: 'available' },
                { name: 'Allscripts', status: 'available' },
                { name: 'athenahealth', status: 'coming' },
                { name: 'eClinicalWorks', status: 'coming' }
            ]
        },
        {
            category: 'Cloud Platforms',
            items: [
                { name: 'AWS HealthLake', status: 'available' },
                { name: 'Google Cloud Healthcare API', status: 'available' },
                { name: 'Microsoft Azure Health Data Services', status: 'available' },
                { name: 'Oracle Health', status: 'coming' }
            ]
        }
    ];

    const features = [
        {
            icon: Plug,
            title: 'Seamless Integration',
            desc: 'Connect to your existing systems in minutes, not months. Our plug-and-play architecture minimizes IT overhead.'
        },
        {
            icon: Database,
            title: 'DICOM Standard',
            desc: 'Full DICOM compliance ensures compatibility with any medical imaging system in your network.'
        },
        {
            icon: FileText,
            title: 'HL7 FHIR Support',
            desc: 'Modern HL7 FHIR R4 APIs enable seamless data exchange with electronic health records.'
        },
        {
            icon: Workflow,
            title: 'Workflow Integration',
            desc: 'Deep integration with your radiology workflow for automatic case routing and report delivery.'
        },
        {
            icon: Cloud,
            title: 'Flexible Deployment',
            desc: 'Cloud-hosted, on-premise, or hybrid deployment options to meet your infrastructure needs.'
        },
        {
            icon: Shield,
            title: 'Secure Data Transfer',
            desc: 'Enterprise-grade encryption and VPN options for secure data transmission between systems.'
        }
    ];

    return (
        <div className="overflow-hidden">
            {/* Hero */}
            <section className="py-24 px-6 relative">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-black to-black" />
                <div className="relative max-w-4xl mx-auto text-center">
                    <div className="w-20 h-20 bg-blue-500/10 rounded-2xl flex items-center justify-center mx-auto mb-8">
                        <Plug className="w-10 h-10 text-blue-400" />
                    </div>
                    <h1 className="text-5xl font-bold mb-6">Integrations</h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        DeepTek AI integrates seamlessly with your existing healthcare IT infrastructure. Connect to PACS, RIS, and EHR systems with ease.
                    </p>
                </div>
            </section>

            {/* Integration Features */}
            <section className="py-24 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature, i) => (
                            <div key={i} className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/50 transition-all">
                                <div className="w-14 h-14 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-400 mb-6">
                                    <feature.icon className="w-7 h-7" />
                                </div>
                                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                                <p className="text-gray-400">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Integration Partners */}
            <section className="py-24 px-6 bg-white/5">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4">Supported Systems</h2>
                        <p className="text-gray-400">We integrate with the leading healthcare IT systems</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {integrations.map((category, i) => (
                            <div key={i} className="p-8 rounded-2xl bg-black/30 border border-white/10">
                                <h3 className="text-xl font-bold mb-6">{category.category}</h3>
                                <ul className="space-y-3">
                                    {category.items.map((item, j) => (
                                        <li key={j} className="flex items-center justify-between py-2 border-b border-white/5 last:border-0">
                                            <span className="text-gray-300">{item.name}</span>
                                            {item.status === 'available' ? (
                                                <span className="flex items-center gap-2 text-green-400 text-sm">
                                                    <CheckCircle className="w-4 h-4" />
                                                    Available
                                                </span>
                                            ) : (
                                                <span className="text-yellow-400 text-sm">Coming Soon</span>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* API Section */}
            <section className="py-24 px-6">
                <div className="max-w-5xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold mb-6">Developer API</h2>
                            <p className="text-gray-400 mb-6">
                                Build custom integrations with our comprehensive REST API. Full documentation, SDKs, and developer support available.
                            </p>
                            <ul className="space-y-4 mb-8">
                                <li className="flex items-center gap-3 text-gray-300">
                                    <CheckCircle className="w-5 h-5 text-blue-400" />
                                    RESTful API with OpenAPI specification
                                </li>
                                <li className="flex items-center gap-3 text-gray-300">
                                    <CheckCircle className="w-5 h-5 text-blue-400" />
                                    Python, JavaScript, and Java SDKs
                                </li>
                                <li className="flex items-center gap-3 text-gray-300">
                                    <CheckCircle className="w-5 h-5 text-blue-400" />
                                    Webhook support for real-time events
                                </li>
                                <li className="flex items-center gap-3 text-gray-300">
                                    <CheckCircle className="w-5 h-5 text-blue-400" />
                                    Sandbox environment for testing
                                </li>
                            </ul>
                            <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-500 transition-all">
                                Contact for API Access
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                        <div className="p-6 rounded-2xl bg-[#1e1e1e] border border-white/10 font-mono text-sm">
                            <div className="flex items-center gap-2 mb-4 text-gray-400 text-xs">
                                <span className="w-3 h-3 rounded-full bg-red-500"></span>
                                <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                                <span className="w-3 h-3 rounded-full bg-green-500"></span>
                                <span className="ml-2">API Request Example</span>
                            </div>
                            <pre className="text-green-400 overflow-x-auto">
                                {`POST /api/v1/analyze
Content-Type: application/json
Authorization: Bearer <api_key>

{
  "study_id": "STU001",
  "modality": "CT",
  "priority": "urgent",
  "callback_url": "https://..."
}

Response:
{
  "analysis_id": "ANL123",
  "status": "processing",
  "estimated_time": "45s"
}`}
                            </pre>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 px-6 bg-white/5">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-6">Need a Custom Integration?</h2>
                    <p className="text-xl text-gray-400 mb-8">
                        Our integration team can help you connect DeepTek AI with any healthcare IT system.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/request-demo" className="px-8 py-4 bg-white text-black rounded-full font-bold hover:bg-gray-200 transition-all">
                            Request Demo
                        </Link>
                        <Link to="/contact" className="px-8 py-4 bg-white/5 border border-white/10 rounded-full font-bold hover:bg-white/10 transition-all">
                            Contact Integration Team
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Integrations;
