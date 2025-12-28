import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Briefcase, Clock, IndianRupee, Send, CheckCircle, Users, Zap, Heart } from 'lucide-react';

const JobDetails = () => {
    const { id } = useParams();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        linkedin: '',
        resume: '',
        coverLetter: ''
    });
    const [submitted, setSubmitted] = useState(false);

    const jobs = {
        1: {
            title: 'Senior AI Engineer',
            department: 'Engineering',
            location: 'Ranchi, India',
            type: 'Full-time',
            salary: '₹1,25,00,000 - ₹1,65,00,000',
            description: 'We are looking for a Senior AI Engineer to join our team and help build the next generation of AI-powered radiology tools.',
            responsibilities: [
                'Design and implement machine learning models for medical imaging analysis',
                'Collaborate with radiologists to understand clinical requirements',
                'Optimize model performance for production deployment',
                'Mentor junior engineers and contribute to technical decisions',
                'Stay current with latest AI/ML research and techniques'
            ],
            requirements: [
                '5+ years of experience in machine learning or AI',
                'Strong proficiency in Python, TensorFlow/PyTorch',
                'Experience with medical imaging (DICOM, etc.) is a plus',
                'MS or PhD in Computer Science, Machine Learning, or related field',
                'Excellent communication and teamwork skills'
            ],
            benefits: [
                'Competitive salary and equity',
                'Health, dental, and vision insurance',
                'Flexible work arrangements',
                'Professional development budget',
                'Unlimited PTO'
            ]
        },
        2: {
            title: 'Radiology Consultant',
            department: 'Medical',
            location: 'Remote',
            type: 'Contract',
            salary: '₹15,000/hour',
            description: 'Join our team as a Radiology Consultant to help validate and improve our AI models for diagnostic imaging.',
            responsibilities: [
                'Review and validate AI-generated radiology reports',
                'Provide clinical expertise for model training data',
                'Collaborate with engineering team on product improvements',
                'Contribute to clinical research and publications',
                'Ensure compliance with medical standards'
            ],
            requirements: [
                'Board-certified radiologist with 5+ years experience',
                'Experience with AI/ML tools in radiology',
                'Strong attention to detail',
                'Excellent written and verbal communication',
                'Available for 20+ hours per week'
            ],
            benefits: [
                'Flexible remote work',
                'Competitive hourly rate',
                'Work on cutting-edge AI technology',
                'Contribute to improved patient outcomes',
                'Professional networking opportunities'
            ]
        },
        3: {
            title: 'Product Designer',
            department: 'Design',
            location: 'Ranchi, India',
            type: 'Full-time',
            salary: '₹1,00,00,000 - ₹1,35,00,000',
            description: 'We are seeking a talented Product Designer to create intuitive and beautiful interfaces for our medical imaging platform.',
            responsibilities: [
                'Design user interfaces for complex medical workflows',
                'Conduct user research and usability testing',
                'Create wireframes, prototypes, and high-fidelity designs',
                'Collaborate with engineering to ensure design feasibility',
                'Maintain and evolve our design system'
            ],
            requirements: [
                '4+ years of experience in product design',
                'Strong portfolio demonstrating UX/UI skills',
                'Proficiency in Figma, Sketch, or similar tools',
                'Experience with healthcare or B2B software is a plus',
                'Ability to work in a fast-paced environment'
            ],
            benefits: [
                'Competitive salary and equity',
                'Health, dental, and vision insurance',
                'Hybrid work options',
                'Design conference budget',
                'Creative and supportive team'
            ]
        },
        4: {
            title: 'Frontend Developer',
            department: 'Engineering',
            location: 'Remote',
            type: 'Full-time',
            salary: '₹85,00,000 - ₹1,15,00,000',
            description: 'Join our engineering team to build responsive, user-friendly interfaces for our radiology platform.',
            responsibilities: [
                'Build responsive web applications using React',
                'Implement complex data visualizations for medical imaging',
                'Optimize performance for large datasets',
                'Write clean, maintainable, and tested code',
                'Collaborate with designers and backend engineers'
            ],
            requirements: [
                '3+ years of experience with React',
                'Strong JavaScript/TypeScript skills',
                'Experience with modern CSS and responsive design',
                'Familiarity with REST APIs and state management',
                'Knowledge of testing frameworks (Jest, React Testing Library)'
            ],
            benefits: [
                'Competitive salary and equity',
                'Full remote work',
                'Health benefits',
                'Home office stipend',
                'Learning and development budget'
            ]
        }
    };

    const job = jobs[id] || jobs[1];

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    if (submitted) {
        return (
            <div className="py-24 px-6 max-w-3xl mx-auto text-center">
                <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-8">
                    <CheckCircle className="w-10 h-10 text-green-500" />
                </div>
                <h1 className="text-4xl font-bold mb-4">Application Submitted!</h1>
                <p className="text-xl text-gray-400 mb-8">
                    Thank you for applying to the {job.title} position. We've received your application and will be in touch soon.
                </p>
                <Link to="/careers" className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-500 transition-all">
                    <ArrowLeft className="w-4 h-4" />
                    Back to Careers
                </Link>
            </div>
        );
    }

    return (
        <div className="py-24 px-6 max-w-6xl mx-auto">
            <Link to="/careers" className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors">
                <ArrowLeft className="w-4 h-4" />
                Back to all positions
            </Link>

            <div className="grid lg:grid-cols-3 gap-12">
                {/* Job Details */}
                <div className="lg:col-span-2 space-y-8">
                    <div>
                        <h1 className="text-4xl font-bold mb-4">{job.title}</h1>
                        <div className="flex flex-wrap items-center gap-4 text-gray-400">
                            <span className="flex items-center gap-2">
                                <Briefcase className="w-4 h-4" />
                                {job.department}
                            </span>
                            <span className="flex items-center gap-2">
                                <MapPin className="w-4 h-4" />
                                {job.location}
                            </span>
                            <span className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                {job.type}
                            </span>
                            <span className="flex items-center gap-2">
                                <IndianRupee className="w-4 h-4" />
                                {job.salary}
                            </span>
                        </div>
                    </div>

                    <div className="prose prose-invert max-w-none">
                        <p className="text-lg text-gray-300">{job.description}</p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold mb-4">Responsibilities</h2>
                        <ul className="space-y-3">
                            {job.responsibilities.map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-gray-300">
                                    <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold mb-4">Requirements</h2>
                        <ul className="space-y-3">
                            {job.requirements.map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-gray-300">
                                    <CheckCircle className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold mb-4">Benefits</h2>
                        <ul className="space-y-3">
                            {job.benefits.map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-gray-300">
                                    <Heart className="w-5 h-5 text-pink-500 flex-shrink-0 mt-0.5" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Why Join Us */}
                    <div className="p-8 rounded-2xl bg-gradient-to-br from-blue-900/50 to-purple-900/50 border border-white/10">
                        <h2 className="text-2xl font-bold mb-6">Why Join DeepTek AI?</h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="text-center">
                                <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                                    <Zap className="w-6 h-6 text-blue-400" />
                                </div>
                                <h3 className="font-bold mb-2">Innovation</h3>
                                <p className="text-sm text-gray-400">Work on cutting-edge AI technology</p>
                            </div>
                            <div className="text-center">
                                <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                                    <Users className="w-6 h-6 text-purple-400" />
                                </div>
                                <h3 className="font-bold mb-2">Great Team</h3>
                                <p className="text-sm text-gray-400">Collaborate with talented people</p>
                            </div>
                            <div className="text-center">
                                <div className="w-12 h-12 bg-pink-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                                    <Heart className="w-6 h-6 text-pink-400" />
                                </div>
                                <h3 className="font-bold mb-2">Impact</h3>
                                <p className="text-sm text-gray-400">Help improve patient outcomes</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Application Form */}
                <div className="lg:col-span-1">
                    <div className="sticky top-28 p-6 rounded-2xl bg-white/5 border border-white/10">
                        <h2 className="text-xl font-bold mb-6">Apply Now</h2>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Full Name *</label>
                                <input
                                    type="text"
                                    required
                                    className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Email *</label>
                                <input
                                    type="email"
                                    required
                                    className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Phone</label>
                                <input
                                    type="tel"
                                    className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500"
                                    value={formData.phone}
                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">LinkedIn URL</label>
                                <input
                                    type="url"
                                    className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500"
                                    placeholder="https://linkedin.com/in/..."
                                    value={formData.linkedin}
                                    onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Resume URL *</label>
                                <input
                                    type="url"
                                    required
                                    className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500"
                                    placeholder="https://..."
                                    value={formData.resume}
                                    onChange={(e) => setFormData({ ...formData, resume: e.target.value })}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Cover Letter</label>
                                <textarea
                                    rows={4}
                                    className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 resize-none"
                                    placeholder="Tell us why you're a great fit..."
                                    value={formData.coverLetter}
                                    onChange={(e) => setFormData({ ...formData, coverLetter: e.target.value })}
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-colors flex items-center justify-center gap-2"
                            >
                                <Send className="w-4 h-4" />
                                Submit Application
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;
