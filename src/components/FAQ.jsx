import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Search } from 'lucide-react';

const FAQ = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question: "How do I create a new report?",
            answer: "Navigate to the 'Study List' tab, select a study, and click on 'Start Reporting'. You can then choose a template and begin dictating or typing your report."
        },
        {
            question: "Can I customize the report templates?",
            answer: "Yes, you can manage and customize report templates in the 'Report Templates' section. You can create new templates or modify existing ones to suit your workflow."
        },
        {
            question: "How does the AI assistance work?",
            answer: "Our AI analyzes the imaging data to provide preliminary findings and measurements. These are presented as suggestions in the reporting interface which you can review, accept, or modify."
        },
        {
            question: "Supported file formats?",
            answer: "The platform supports standard DICOM formats for images. For reports, you can export them as PDF or structured data formats."
        },
        {
            question: "How do I change my password?",
            answer: "Go to Settings > Account Security to update your password and manage other security settings."
        }
    ];

    const filteredFaqs = faqs.filter(faq =>
        faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="p-8 max-w-4xl mx-auto h-full overflow-y-auto">
            <h1 className="text-3xl font-bold mb-2">Frequently Asked Questions</h1>
            <p className="text-gray-400 mb-8">Find answers to common questions about using the platform.</p>

            <div className="relative mb-8">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                    type="text"
                    placeholder="Search for articles..."
                    className="w-full bg-[#1E293B] border border-gray-700 rounded-xl py-3 pl-10 pr-4 text-white focus:outline-none focus:border-blue-500"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>

            <div className="space-y-4">
                {filteredFaqs.map((faq, index) => (
                    <div key={index} className="bg-[#1E293B] border border-gray-700 rounded-xl overflow-hidden">
                        <button
                            className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-700/50 transition-colors"
                            onClick={() => setOpenIndex(openIndex === index ? null : index)}
                        >
                            <span className="font-semibold text-lg">{faq.question}</span>
                            {openIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                        </button>

                        {openIndex === index && (
                            <div className="px-6 pb-4 text-gray-300 border-t border-gray-700/50 pt-4">
                                {faq.answer}
                            </div>
                        )}
                    </div>
                ))}

                {filteredFaqs.length === 0 && (
                    <div className="text-center py-12 text-gray-500">
                        No results found for "{searchTerm}"
                    </div>
                )}
            </div>
        </div>
    );
};

export default FAQ;
