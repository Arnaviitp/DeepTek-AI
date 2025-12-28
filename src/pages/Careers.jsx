import React from 'react';
import { MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Careers = () => {
    const jobs = [
        {
            id: 1,
            title: 'Senior AI Engineer',
            department: 'Engineering',
            location: 'Ranchi, India',
            type: 'Full-time'
        },
        {
            id: 2,
            title: 'Radiology Consultant',
            department: 'Medical',
            location: 'Remote',
            type: 'Contract'
        },
        {
            id: 3,
            title: 'Product Designer',
            department: 'Design',
            location: 'Ranchi, India',
            type: 'Full-time'
        },
        {
            id: 4,
            title: 'Frontend Developer',
            department: 'Engineering',
            location: 'Remote',
            type: 'Full-time'
        }
    ];

    return (
        <div className="py-24 px-6 max-w-7xl mx-auto">
            <div className="text-center mb-24">
                <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                    Join the Mission
                </h1>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                    We're building the future of medical diagnostics. Help us save lives through code and innovation.
                </p>
            </div>

            <div className="grid gap-6">
                {jobs.map((job) => (
                    <div key={job.id} className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/50 hover:bg-white/10 transition-all flex flex-col md:flex-row md:items-center justify-between gap-6">
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-2">{job.title}</h3>
                            <div className="flex items-center gap-4 text-sm text-gray-400">
                                <span className="bg-white/10 px-3 py-1 rounded-full">{job.department}</span>
                                <span className="flex items-center gap-1">
                                    <MapPin className="w-4 h-4" />
                                    {job.location}
                                </span>
                                <span>{job.type}</span>
                            </div>
                        </div>

                        <Link to={`/careers/${job.id}`} className="px-6 py-3 bg-blue-600/20 text-blue-400 rounded-xl font-medium group-hover:bg-blue-600 group-hover:text-white transition-all flex items-center justify-center gap-2">
                            Apply Now
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Careers;
