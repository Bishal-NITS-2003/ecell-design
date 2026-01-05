
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, Clock, Heart, Share2, Facebook, Instagram, 
  Linkedin, Twitter, Quote, User, Calendar, MessageSquare, 
  Github, Send, MoreHorizontal
} from 'lucide-react';
import { blogPosts } from './Blogs';

interface Comment {
  id: number;
  user: string;
  text: string;
  date: string;
  avatar: string;
}

interface BlogDetailProps {
  postId: number;
  onBack: () => void;
}

const BlogDetail: React.FC<BlogDetailProps> = ({ postId, onBack }) => {
  const post = blogPosts.find(p => p.id === postId);
  const [commentText, setCommentText] = useState("");
  const [comments, setComments] = useState<Comment[]>([
    {
      id: 1,
      user: "Ishaan Gupta",
      text: "This breakdown of the seed round was incredibly helpful! Looking forward to more content on Series A.",
      date: "2 hours ago",
      avatar: "https://i.pravatar.cc/150?u=ishaan"
    },
    {
      id: 2,
      user: "Sarah Jenkins",
      text: "The point about investor psychology is often overlooked. Great read!",
      date: "5 hours ago",
      avatar: "https://i.pravatar.cc/150?u=sarah"
    }
  ]);

  if (!post) return null;

  const handlePostComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!commentText.trim()) return;
    
    const newComment: Comment = {
      id: Date.now(),
      user: "Current User",
      text: commentText,
      date: "Just now",
      avatar: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
    };

    setComments([newComment, ...comments]);
    setCommentText("");
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="pt-32 pb-40"
    >
      <div className="container mx-auto px-6 lg:px-12">
        {/* Navigation */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={onBack}
          className="flex items-center gap-3 text-[10px] font-black tracking-[0.4em] uppercase text-blue-500 hover:text-white transition-all mb-12 group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-2 transition-transform" />
          Back to Insights
        </motion.button>

        <div className="flex flex-col lg:flex-row gap-16 xl:gap-24">
          {/* Main Content Area */}
          <div className="lg:w-2/3">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-12">
                <div className="flex flex-wrap gap-3 mb-8">
                  {post.hashtags.map((tag, i) => (
                    <span key={i} className="px-4 py-1.5 glass border border-blue-500/20 text-blue-400 text-[9px] font-black uppercase tracking-widest rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h1 className="text-4xl md:text-7xl font-black text-white leading-[1.1] tracking-tighter mb-10">
                  {post.title}
                </h1>
                
                <div className="flex flex-wrap items-center gap-8 py-8 border-y border-white/5">
                  <div className="flex items-center gap-4">
                    <img src={post.writerImg} className="w-14 h-14 rounded-full object-cover border border-white/10 p-1" alt="" />
                    <div>
                      <p className="text-white text-base font-bold">{post.writer}</p>
                      <p className="text-gray-500 text-[10px] font-black uppercase tracking-widest">{post.writerRole}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-8 text-gray-500 ml-auto">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      <span className="text-xs font-bold uppercase tracking-widest">{post.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock size={16} />
                      <span className="text-xs font-bold uppercase tracking-widest">{post.readTime}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Simple Content Editor Simulation */}
              <div className="prose prose-invert max-w-none text-gray-400 text-lg md:text-xl leading-relaxed font-light space-y-8">
                <div className="relative aspect-video rounded-[2.5rem] overflow-hidden glass border border-white/10 mb-12">
                  <img src={post.image} alt="" className="w-full h-full object-cover" />
                </div>

                <p className="text-white text-2xl font-medium leading-relaxed italic mb-12">
                  {post.shortDesc}
                </p>

                <p>
                  As the startup landscape continues to evolve, the distinction between a good idea and a viable business becomes increasingly sharp. Success in today's competitive market isn't just about having a unique product—it's about building a sustainable ecosystem around that product.
                </p>

                <h2 className="text-3xl font-black text-white uppercase tracking-tight pt-8">Key Takeaways</h2>
                <p>
                  Founders often get caught up in the technical details, but the most resilient startups are those that prioritize their core mission and community. Understanding market dynamics is crucial, but so is maintaining the agility to pivot when necessary.
                </p>

                <div className="p-10 glass rounded-3xl border-l-4 border-blue-600 bg-white/5 italic text-white text-xl">
                  "The goal of a startup is to reach profitability before running out of cash. Everything else is secondary."
                </div>

                <p>
                  In the coming years, we expect to see more integration of AI and automated systems in operational roles, allowing teams to focus on high-impact strategic decisions. The future belongs to those who can bridge the gap between technical innovation and human-centric design.
                </p>
              </div>

              {/* Interaction Bar */}
              <div className="mt-24 pt-12 border-t border-white/5 flex flex-wrap items-center justify-between gap-8">
                <div className="flex items-center gap-6">
                  <button className="flex items-center gap-3 glass px-8 py-4 rounded-2xl border border-white/10 text-rose-500 hover:bg-rose-500/10 transition-all">
                    <Heart size={22} />
                    <span className="font-bold">{post.likes}</span>
                  </button>
                  <button className="flex items-center gap-3 glass px-8 py-4 rounded-2xl border border-white/10 text-blue-500 hover:bg-blue-500/10 transition-all">
                    <Share2 size={22} />
                    <span className="font-bold">Share</span>
                  </button>
                </div>
                <div className="flex gap-4">
                  {[Twitter, Linkedin, Facebook].map((Icon, i) => (
                    <button key={i} className="w-14 h-14 glass rounded-2xl flex items-center justify-center text-gray-500 hover:text-white transition-all">
                      <Icon size={20} />
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              className="sticky top-32 space-y-12"
            >
              {/* Author Info */}
              <div className="glass rounded-[3rem] p-10 border border-white/10">
                <h4 className="text-[10px] font-black tracking-[0.4em] text-gray-500 uppercase mb-8">Author Details</h4>
                <div className="flex items-center gap-5 mb-8">
                  <img src={post.writerImg} className="w-20 h-20 rounded-2xl object-cover" alt="" />
                  <div>
                    <h5 className="text-white font-bold text-xl">{post.writer}</h5>
                    <p className="text-blue-400 text-[10px] font-black tracking-widest uppercase">{post.writerRole}</p>
                  </div>
                </div>
                
                {/* Social Handles */}
                <div className="space-y-4 mb-10">
                  <a href="#" className="flex items-center gap-4 text-gray-400 hover:text-white transition-colors group">
                    <div className="w-10 h-10 rounded-xl glass border border-white/10 flex items-center justify-center group-hover:border-blue-500/30">
                      <Linkedin size={16} />
                    </div>
                    <span className="text-xs font-bold">/in/{post.writer.toLowerCase().replace(' ', '')}</span>
                  </a>
                  <a href="#" className="flex items-center gap-4 text-gray-400 hover:text-white transition-colors group">
                    <div className="w-10 h-10 rounded-xl glass border border-white/10 flex items-center justify-center group-hover:border-blue-500/30">
                      <Twitter size={16} />
                    </div>
                    <span className="text-xs font-bold">@{post.writer.split(' ')[0].toLowerCase()}</span>
                  </a>
                  <a href="#" className="flex items-center gap-4 text-gray-400 hover:text-white transition-colors group">
                    <div className="w-10 h-10 rounded-xl glass border border-white/10 flex items-center justify-center group-hover:border-blue-500/30">
                      <Github size={16} />
                    </div>
                    <span className="text-xs font-bold">github.com/{post.writer.split(' ')[0].toLowerCase()}</span>
                  </a>
                </div>

                <button className="w-full py-5 glass border border-blue-500/20 text-blue-400 text-[10px] font-black tracking-widest uppercase rounded-2xl hover:bg-blue-600 hover:text-white transition-all">
                  View Full Profile
                </button>
              </div>

              {/* Comments Section */}
              <div className="glass rounded-[3rem] p-10 border border-white/10">
                <div className="flex items-center justify-between mb-8">
                  <h4 className="text-[10px] font-black tracking-[0.4em] text-gray-500 uppercase flex items-center gap-3">
                    <MessageSquare size={14} />
                    Comments ({comments.length})
                  </h4>
                </div>

                {/* Comment Form */}
                <form onSubmit={handlePostComment} className="mb-10">
                  <textarea 
                    value={commentText}
                    onChange={(e) => setCommentText(e.target.value)}
                    placeholder="Write a comment..."
                    className="w-full bg-black/40 border border-white/10 rounded-2xl p-5 text-white text-sm focus:outline-none focus:border-blue-500 transition-all resize-none min-h-[120px]"
                  />
                  <button 
                    type="submit"
                    className="mt-4 w-full py-4 bg-blue-600 text-white text-[10px] font-black tracking-widest uppercase rounded-2xl hover:shadow-[0_10px_30px_rgba(37,99,235,0.3)] transition-all flex items-center justify-center gap-3"
                  >
                    Post Comment
                    <Send size={14} />
                  </button>
                </form>

                {/* Comment List */}
                <div className="space-y-8">
                  <AnimatePresence>
                    {comments.map((comment) => (
                      <motion.div 
                        key={comment.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="group"
                      >
                        <div className="flex gap-4 mb-3">
                          <img src={comment.avatar} className="w-10 h-10 rounded-xl object-cover" alt="" />
                          <div className="flex-grow">
                            <div className="flex items-center justify-between">
                              <h5 className="text-white text-xs font-bold">{comment.user}</h5>
                              <span className="text-[10px] text-gray-600">{comment.date}</span>
                            </div>
                            <p className="text-gray-400 text-sm mt-2 leading-relaxed">
                              {comment.text}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-4 ml-14">
                          <button className="text-[9px] font-black uppercase tracking-widest text-gray-600 hover:text-blue-400">Reply</button>
                          <button className="text-[9px] font-black uppercase tracking-widest text-gray-600 hover:text-rose-400">Like</button>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default BlogDetail;
