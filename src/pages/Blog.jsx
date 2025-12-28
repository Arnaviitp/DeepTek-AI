import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Blog = () => {
    const posts = [
        {
            id: 1,
            title: 'The Evolution of AI in Radiology',
            excerpt: 'How deep learning models are achieving superhuman accuracy in diagnostic imaging.',
            date: 'Dec 28, 2024',
            category: 'Technology',
            image: 'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&q=80&w=2000'
        },
        {
            id: 2,
            title: 'Streamlining Workflow with Automation',
            excerpt: 'Reducing radiologist burnout by automating repetitive reporting tasks.',
            date: 'Dec 25, 2024',
            category: 'Workflow',
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2000'
        },
        {
            id: 3,
            title: 'Case Study: DeepTek AI at City Hospital',
            excerpt: 'A look at how City Hospital reduced report turnaround time by 40%.',
            date: 'Dec 20, 2024',
            category: 'Case Study',
            image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=2000'
        }
    ];

    return (
        <div className="py-24 px-6 max-w-7xl mx-auto">
            <div className="text-center mb-24">
                <h1 className="text-5xl font-bold mb-6">Latest Insights</h1>
                <p className="text-xl text-gray-400">News, updates, and thoughts from the team.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post) => (
                    <Link to={`/blog/${post.id}`} state={{ post }} key={post.id}>
                        <article className="group cursor-pointer">
                            <div className="relative overflow-hidden rounded-2xl mb-6 aspect-video">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-md px-3 py-1 rounded-full text-xs font-medium text-white border border-white/10">
                                    {post.category}
                                </div>
                            </div>

                            <div className="space-y-3">
                                <div className="text-sm text-gray-500">{post.date}</div>
                                <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors flex items-center justify-between">
                                    {post.title}
                                    <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </h3>
                                <p className="text-gray-400 line-clamp-2">{post.excerpt}</p>
                            </div>
                        </article>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Blog;
