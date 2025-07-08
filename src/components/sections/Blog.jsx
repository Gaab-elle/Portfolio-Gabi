import React from 'react';
import { Calendar, Clock, Tag, User } from 'lucide-react';
import { blogPosts } from '../../data/blog';

const Blog = ({ visibleSections, sectionRef, openBlogModal }) => {
    return (
        <section
            id="blog"
            ref={sectionRef}
            className="py-20 px-4"
        >
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-16" style={{
                    background: 'linear-gradient(45deg, #8b45ff, #39ff14)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    position: 'relative',
                    zIndex: 10,
                }}>
                    Blog
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    {blogPosts.map((post, index) => (
                        <article
                            key={post.id}
                            onClick={() => openBlogModal(post)}
                            className={`glass-card p-6 rounded-xl transition-all duration-1000 cursor-pointer hover:transform hover:scale-105 ${
                                visibleSections.has('blog')
                                    ? 'opacity-100 translate-y-0'
                                    : 'opacity-0 translate-y-10'
                            }`}
                            style={{ transitionDelay: `${index * 200}ms` }}
                        >
                            <div className="relative overflow-hidden rounded-lg mb-4">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                                />
                                <div className="absolute top-4 left-4">
                                    <span className={`px-3 py-1 text-xs rounded-full font-medium border ${
                                        post.category === 'React' ? 'bg-blue-500/20 text-blue-300 border-blue-500/30' :
                                        post.category === 'Security' ? 'bg-purple-500/20 text-purple-300 border-purple-500/30' :
                                        post.category === 'DevOps' ? 'bg-green-500/20 text-green-300 border-green-500/30' :
                                        'bg-purple-500/20 text-purple-300 border-purple-500/30'
                                    }`}>
                                        {post.category}
                                    </span>
                                </div>
                            </div>

                            <div className="flex items-center justify-between text-sm text-gray-400 mb-3">
                                <span><Calendar size={14} className="inline-block mr-1" />{new Date(post.date).toLocaleDateString('pt-BR')}</span>
                                <span><Clock size={14} className="inline-block mr-1" />{post.readTime}</span>
                            </div>

                            <h3 className="text-xl font-semibold mb-3 text-white hover:text-purple-400 transition-colors">
                                {post.title}
                            </h3>

                            <p className="text-gray-300 leading-relaxed mb-4 line-clamp-3">
                                {post.excerpt}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-4">
                                {post.tags.slice(0, 3).map((tag) => (
                                    <span
                                        key={tag}
                                        className="px-2 py-1 text-xs rounded border bg-purple-500/10 text-purple-300 border-purple-500/20"
                                    >
                                        <Tag size={12} className="inline-block mr-1" />#{tag}
                                    </span>
                                ))}
                            </div>

                            <div className="flex items-center justify-between">
                                <span className="text-sm text-gray-400"><User size={14} className="inline-block mr-1" />Por {post.author}</span>
                                <button 
                                    onClick={() => openBlogModal(post)}
                                    className="text-purple-400 hover:text-green-400 transition-colors font-medium"
                                >
                                    Ler mais →
                                </button>
                            </div>
                        </article>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <button className="px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:transform hover:translateY(-2px)" style={{
                        background: 'linear-gradient(135deg, #8b45ff, #39ff14)',
                        color: 'white',
                        boxShadow: '0 4px 15px rgba(139, 69, 255, 0.3)'
                    }}>
                        Ver todos os posts
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Blog;