import React, { useEffect, useState } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import { ArrowLeft, Clock, Calendar, Share2, Twitter, Linkedin, Link2, Check, Facebook } from 'lucide-react';

const BlogPost = () => {
    const { id } = useParams();
    const location = useLocation();
    const [showShareMenu, setShowShareMenu] = useState(false);
    const [copied, setCopied] = useState(false);

    // In a real app, we would fetch the post by ID if not passed in state
    const postFromState = location.state?.post;

    // Blog posts data
    const allPosts = {
        1: {
            title: 'The Evolution of AI in Radiology',
            date: 'Dec 28, 2024',
            category: 'Technology',
            image: 'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&q=80&w=2000',
            excerpt: 'How deep learning models are achieving superhuman accuracy in diagnostic imaging.',
            content: `
                <p>Artificial Intelligence (AI) is rapidly transforming the field of radiology, offering unprecedented opportunities to enhance diagnostic accuracy and efficiency. As deep learning models become more sophisticated, they are increasingly capable of identifying subtle abnormalities that might be missed by the human eye.</p>
                
                <h3>The Current State of AI</h3>
                <p>Today's AI algorithms are being integrated into PACS (Picture Archiving and Communication Systems) to serve as a second pair of eyes for radiologists. These tools can prioritize critical cases, such as intracranial hemorrhages or pulmonary embolisms, ensuring that the most urgent patients receive immediate attention.</p>
                
                <h3>DeepTek AI's Approach</h3>
                <p>At DeepTek AI, we leverage state-of-the-art convolutional neural networks (CNNs) trained on millions of validated cases. Our models not only detect pathologies but also assist in quantifying them, creating automated preliminary reports that radiologists can review and sign off on.</p>
                
                <h3>Looking Ahead</h3>
                <p>The future involves "ambient intelligence" where AI works seamlessly in the background, preparing scans, checking for quality issues, and drafting reports before the radiologist even opens the study. This symbiotic relationship between human expertise and machine precision is setting a new standard in patient care.</p>
            `
        },
        2: {
            title: 'Streamlining Workflow with Automation',
            date: 'Dec 25, 2024',
            category: 'Workflow',
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2000',
            excerpt: 'Reducing radiologist burnout by automating repetitive reporting tasks.',
            content: `
                <p>Radiologist burnout is a growing concern in healthcare. With increasing imaging volumes and mounting administrative tasks, many radiologists find themselves overwhelmed. Automation offers a path forward.</p>
                
                <h3>The Burnout Problem</h3>
                <p>Studies show that radiologists read hundreds of scans per day, often working long hours to keep up with demand. This relentless pace leads to fatigue, decreased job satisfaction, and potentially impacts patient care quality.</p>
                
                <h3>How Automation Helps</h3>
                <p>By automating repetitive tasks like preliminary measurements, template selection, and report structuring, AI can significantly reduce the cognitive load on radiologists. This allows them to focus on what they do best: clinical decision-making and patient communication.</p>
                
                <h3>Implementation Best Practices</h3>
                <p>Successful automation requires thoughtful implementation. It's not about replacing radiologists but augmenting their capabilities. The key is designing systems that integrate seamlessly into existing workflows without adding friction.</p>
            `
        },
        3: {
            title: 'Case Study: DeepTek AI at City Hospital',
            date: 'Dec 20, 2024',
            category: 'Case Study',
            image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=2000',
            excerpt: 'A look at how City Hospital reduced report turnaround time by 40%.',
            content: `
                <p>City Hospital, a 500-bed tertiary care facility, implemented DeepTek AI to address growing imaging volumes and radiologist shortages. The results exceeded expectations.</p>
                
                <h3>The Challenge</h3>
                <p>Before implementation, the radiology department was struggling with a 48-hour average turnaround time for routine studies. Critical findings often took hours to communicate, and radiologists were working overtime just to keep up.</p>
                
                <h3>The Solution</h3>
                <p>DeepTek AI was deployed across their CT, MRI, and X-ray workflows. AI-assisted preliminary reports were generated within minutes of scan completion, allowing radiologists to review and finalize rather than start from scratch.</p>
                
                <h3>The Results</h3>
                <p>Within 3 months, report turnaround time dropped to 29 hours—a 40% improvement. Critical findings are now communicated within 15 minutes on average. Radiologist overtime decreased by 60%, and job satisfaction scores improved significantly.</p>
            `
        }
    };

    const post = postFromState || allPosts[id] || allPosts[1];
    const currentUrl = window.location.href;

    const handleShare = (platform) => {
        const shareText = `Check out this article: ${post.title}`;
        const shareUrls = {
            twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(currentUrl)}`,
            linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`,
            facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`
        };

        if (platform === 'copy') {
            navigator.clipboard.writeText(currentUrl);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } else {
            window.open(shareUrls[platform], '_blank', 'width=600,height=400');
        }
        setShowShareMenu(false);
    };

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
                        <div className="relative">
                            <button
                                onClick={() => setShowShareMenu(!showShareMenu)}
                                className="p-3 rounded-full hover:bg-gray-700 text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                            >
                                <Share2 size={20} />
                                <span className="hidden sm:inline">Share</span>
                            </button>

                            {showShareMenu && (
                                <div className="absolute bottom-full right-0 mb-2 bg-[#0A1628] border border-gray-700 rounded-xl shadow-xl overflow-hidden min-w-[180px] animate-fade-in">
                                    <button
                                        onClick={() => handleShare('twitter')}
                                        className="w-full px-4 py-3 flex items-center gap-3 hover:bg-gray-800 transition-colors text-left"
                                    >
                                        <Twitter size={18} className="text-blue-400" />
                                        <span>Twitter</span>
                                    </button>
                                    <button
                                        onClick={() => handleShare('linkedin')}
                                        className="w-full px-4 py-3 flex items-center gap-3 hover:bg-gray-800 transition-colors text-left"
                                    >
                                        <Linkedin size={18} className="text-blue-600" />
                                        <span>LinkedIn</span>
                                    </button>
                                    <button
                                        onClick={() => handleShare('facebook')}
                                        className="w-full px-4 py-3 flex items-center gap-3 hover:bg-gray-800 transition-colors text-left"
                                    >
                                        <Facebook size={18} className="text-blue-500" />
                                        <span>Facebook</span>
                                    </button>
                                    <button
                                        onClick={() => handleShare('copy')}
                                        className="w-full px-4 py-3 flex items-center gap-3 hover:bg-gray-800 transition-colors text-left border-t border-gray-700"
                                    >
                                        {copied ? (
                                            <>
                                                <Check size={18} className="text-green-400" />
                                                <span className="text-green-400">Copied!</span>
                                            </>
                                        ) : (
                                            <>
                                                <Link2 size={18} className="text-gray-400" />
                                                <span>Copy Link</span>
                                            </>
                                        )}
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Related Posts */}
                <div className="mt-12">
                    <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {Object.entries(allPosts)
                            .filter(([key]) => key !== id)
                            .slice(0, 2)
                            .map(([key, relatedPost]) => (
                                <Link
                                    key={key}
                                    to={`/blog/${key}`}
                                    state={{ post: relatedPost }}
                                    className="group block p-4 bg-[#1E293B] border border-gray-800 rounded-xl hover:border-blue-500/50 transition-colors"
                                >
                                    <div className="aspect-video rounded-lg overflow-hidden mb-4">
                                        <img
                                            src={relatedPost.image}
                                            alt={relatedPost.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>
                                    <span className="text-xs text-blue-400">{relatedPost.category}</span>
                                    <h3 className="font-bold mt-1 group-hover:text-blue-400 transition-colors">
                                        {relatedPost.title}
                                    </h3>
                                </Link>
                            ))}
                    </div>
                </div>
            </article>

            <style>{`
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(8px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in {
                    animation: fadeIn 0.2s ease-out;
                }
            `}</style>
        </div>
    );
};

export default BlogPost;
