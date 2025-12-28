import React from 'react';
import { Users, Target, Heart, Rocket, Award, Globe, Lightbulb, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
    const team = [
        {
            name: 'Dr. Sarah Chen',
            role: 'CEO & Co-Founder',
            image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200',
            bio: 'Former Head of Radiology at Stanford. 15+ years in medical imaging.'
        },
        {
            name: 'Alex Rodriguez',
            role: 'CTO & Co-Founder',
            image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200',
            bio: 'Ex-Google AI researcher. PhD in Computer Vision from MIT.'
        },
        {
            name: 'Dr. Michael Park',
            role: 'Chief Medical Officer',
            image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=200',
            bio: 'Board-certified radiologist with expertise in AI applications.'
        },
        {
            name: 'Emily Watson',
            role: 'VP of Product',
            image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200',
            bio: 'Former product leader at Philips Healthcare.'
        }
    ];

    const values = [
        { icon: Heart, title: 'Patient First', desc: 'Every feature we build aims to improve patient outcomes.' },
        { icon: Lightbulb, title: 'Innovation', desc: 'We push the boundaries of what AI can do in healthcare.' },
        { icon: Shield, title: 'Trust', desc: 'We handle sensitive data with the utmost care and security.' },
        { icon: Users, title: 'Collaboration', desc: 'We work closely with radiologists to build what they need.' }
    ];

    const milestones = [
        { year: '2019', title: 'Company Founded', desc: 'Started with a vision to transform radiology with AI.' },
        { year: '2020', title: 'First Product Launch', desc: 'Released our AI-powered chest X-ray analysis tool.' },
        { year: '2021', title: 'Series A Funding', desc: 'Raised $25M to expand our platform and team.' },
        { year: '2022', title: 'Global Expansion', desc: 'Launched in Europe and Asia with 200+ clients.' },
        { year: '2023', title: 'Multi-Modality AI', desc: 'Extended AI support to CT, MRI, and ultrasound.' },
        { year: '2024', title: 'Industry Leader', desc: '500+ healthcare facilities, 5M+ scans analyzed.' }
    ];

    return (
        <div className="overflow-hidden">
            {/* Hero */}
            <section className="py-24 px-6 relative">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-black to-black" />
                <div className="relative max-w-5xl mx-auto text-center">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6">
                        We're on a Mission to
                        <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                            Transform Radiology
                        </span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        DeepTek AI combines cutting-edge artificial intelligence with deep clinical expertise to help radiologists work faster, more accurately, and with less burnout.
                    </p>
                </div>
            </section>

            {/* Stats */}
            <section className="py-16 px-6 border-y border-white/10">
                <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {[
                        { value: '500+', label: 'Healthcare Facilities' },
                        { value: '5M+', label: 'Scans Analyzed' },
                        { value: '99.9%', label: 'AI Accuracy' },
                        { value: '40%', label: 'Time Saved' }
                    ].map((stat, i) => (
                        <div key={i}>
                            <div className="text-4xl font-bold text-blue-400 mb-2">{stat.value}</div>
                            <div className="text-gray-400">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Story */}
            <section className="py-24 px-6">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold mb-8 text-center">Our Story</h2>
                    <div className="prose prose-invert prose-lg max-w-none text-gray-300 space-y-6">
                        <p>
                            DeepTek AI was founded in 2019 by a team of radiologists and AI researchers who saw firsthand the challenges facing modern radiology departments: growing workloads, physician burnout, and the need for faster, more accurate diagnoses.
                        </p>
                        <p>
                            We believed that artificial intelligence could be a powerful ally for radiologists—not replacing them, but augmenting their capabilities and freeing them to focus on what matters most: patient care.
                        </p>
                        <p>
                            Today, our platform is used by over 500 healthcare facilities worldwide, helping radiologists process millions of scans with unprecedented speed and accuracy. But we're just getting started. Our mission is to make AI-powered radiology accessible to every healthcare provider, everywhere.
                        </p>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="py-24 px-6 bg-white/5">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold mb-12 text-center">Our Values</h2>
                    <div className="grid md:grid-cols-4 gap-8">
                        {values.map((value, i) => (
                            <div key={i} className="text-center p-6">
                                <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6 text-blue-400">
                                    <value.icon className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                                <p className="text-gray-400">{value.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Timeline */}
            <section className="py-24 px-6">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold mb-12 text-center">Our Journey</h2>
                    <div className="relative">
                        <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500" />
                        <div className="space-y-12">
                            {milestones.map((milestone, i) => (
                                <div key={i} className="flex gap-8 items-start">
                                    <div className="w-16 h-16 rounded-full bg-blue-500/10 border-2 border-blue-500 flex items-center justify-center flex-shrink-0 text-blue-400 font-bold text-sm relative z-10">
                                        {milestone.year}
                                    </div>
                                    <div className="pt-3">
                                        <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                                        <p className="text-gray-400">{milestone.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Team */}
            <section className="py-24 px-6 bg-white/5">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4">Leadership Team</h2>
                        <p className="text-gray-400">Meet the people driving our mission forward</p>
                    </div>
                    <div className="grid md:grid-cols-4 gap-8">
                        {team.map((member, i) => (
                            <div key={i} className="text-center group">
                                <div className="w-40 h-40 rounded-full overflow-hidden mx-auto mb-6 border-4 border-white/10 group-hover:border-blue-500/50 transition-colors">
                                    <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                                </div>
                                <h3 className="text-lg font-bold mb-1">{member.name}</h3>
                                <p className="text-blue-400 text-sm mb-3">{member.role}</p>
                                <p className="text-gray-400 text-sm">{member.bio}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl font-bold mb-6">Join Our Team</h2>
                    <p className="text-xl text-gray-400 mb-8">
                        We're always looking for talented people to help us build the future of radiology.
                    </p>
                    <Link to="/careers" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black rounded-full font-bold hover:bg-gray-200 transition-all">
                        View Open Positions
                        <Rocket className="w-4 h-4" />
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default About;
