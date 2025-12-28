import React, { useEffect } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import { ArrowLeft, Clock, Calendar, Share2 } from 'lucide-react';

const BlogPost = () => {
    const { id } = useParams();
    const location = useLocation();
    // In a real app, we would fetch the post by ID if not passed in state
    const postFromState = location.state?.post;

    // Fallback data if accessed directly
    const fallbackPost = {
        title: 'The Evolution of AI in Radiology',
        date: 'Dec 28, 2024',
        category: 'Technology',
        image: 'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&q=80&w=2000',
        content: `
      <p>Artificial Intelligence (AI) is rapidly transforming the field of radiology, offering unprecedented opportunities to enhance diagnostic accuracy and efficiency. As deep learning models become more sophisticated, they are increasingly capable of identifying subtle abnormalities that might be missed by the human eye.</p>
      
      <h3>The Current State of AI</h3>
      <p>Today's AI algorithms are being integrated into PACS (Picture Archiving and Communication Systems) to serve as a second pair of eyes for radiologists. These tools can prioritize critical cases, such as intracranial hemorrhages or pulmonary embolisms, ensuring that the most urgent patients receive immediate attention.</p>
      
      <h3>DeepTek AI's Approach</h3>
      <p>At DeepTek AI, we leverage state-of-the-art convolutional neural networks (CNNs) trained on millions of validated cases. Our models not only detect pathologies but also assist in quantifying them, creating automated preliminary reports that radiologists can review and sign off on.</p>
      
      <h3>Looking Ahead</h3>
      <p>The future involves "ambient intelligence" where AI works seamlessly in the background, preparing scans, checking for quality issues, and drafting reports before the radiologist even opens the study. This symbiotic relationship between human expertise and machine precision is setting a new standard in patient care.</p>
    `
    };

    const post = postFromState || fallbackPost;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-[#0A1628] pb-20">
            {/* Hero Image */}
            <div className="h-[40vh] w-full relative">
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] via-transparent to-transparent z-10" />
                <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                />
                <div className="absolute top-6 left-6 z-20">
                    <Link to="/blog" className="inline-flex items-center gap-2 text-white bg-black/30 backdrop-blur-md px-4 py-2 rounded-full hover:bg-black/50 transition-colors">
                        <ArrowLeft size={18} />
                        Back to Blog
                    </Link>
                </div>
            </div>

            {/* Content */}
            <article className="max-w-3xl mx-auto px-6 -mt-20 relative z-20">
                <div className="bg-[#1E293B] rounded-2xl p-8 shadow-xl border border-gray-800">
                    <div className="flex items-center gap-4 text-sm text-gray-400 mb-6">
                        <span className="bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full border border-blue-500/20">
                            {post.category}
                        </span>
                        <div className="flex items-center gap-1">
                            <Calendar size={14} />
                            {post.date}
                        </div>
                        <div className="flex items-center gap-1">
                            <Clock size={14} />
                            5 min read
                        </div>
                    </div>

                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-8 leading-tight">
                        {post.title}
                    </h1>

                    <div className="prose prose-invert prose-lg max-w-none text-gray-300">
                        {/* Using dangerouslySetInnerHTML for the demo content structure */}
                        <div dangerouslySetInnerHTML={{ __html: post.content }} />
                    </div>

                    <div className="mt-12 pt-8 border-t border-gray-700 flex justify-between items-center">
                        <div className="text-gray-400">
                            Share this article
                        </div>
                        <div className="flex gap-4">
                            <button className="p-2 rounded-full hover:bg-gray-700 text-gray-400 hover:text-white transition-colors">
                                <Share2 size={20} />
                            </button>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    );
};

export default BlogPost;
