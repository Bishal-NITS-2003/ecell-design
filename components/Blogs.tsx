import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Heart,
  Clock,
  ArrowRight,
  Search,
  Hash,
  MessageSquare,
  ChevronDown,
  ListFilter,
  Sparkles,
  Filter,
} from "lucide-react";

export const blogPosts = [
  {
    id: 1,
    title: "Mastering the Seed Round: A Founder's Guide",
    shortDesc:
      "Navigating the complexities of early-stage funding requires more than just a deck. Learn the nuances of investor psychology and term sheet negotiation.",
    writer: "Ananya Sharma",
    writerRole: "Venture Lead",
    writerImg:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150",
    image:
      "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&q=80&w=800",
    hashtags: ["#funding", "#startup", "#growth"],
    likes: 124,
    date: "Oct 24, 2023",
    readTime: "8 min read",
  },
  {
    id: 2,
    title: "The Zero-to-One Product Philosophy",
    shortDesc:
      "How to identify unique market gaps and build solutions that don't just improve on existing ones, but create entirely new categories.",
    writer: "Aryan Verma",
    writerRole: "Product Strategist",
    writerImg:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800",
    hashtags: ["#product", "#innovation", "#logic"],
    likes: 89,
    date: "Oct 20, 2023",
    readTime: "6 min read",
  },
  {
    id: 3,
    title: "Building Resilient Engineering Cultures",
    shortDesc:
      "Scaling a startup isn't just about code; it's about the people writing it. Discover how to foster autonomy and ownership in fast-paced teams.",
    writer: "David Miller",
    writerRole: "CTO @ TechFlow",
    writerImg:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800",
    hashtags: ["#engineering", "#culture", "#scaling"],
    likes: 256,
    date: "Oct 15, 2023",
    readTime: "12 min read",
  },
  {
    id: 4,
    title: "Bootstrap vs Venture Capital",
    shortDesc:
      "Is external funding always the answer? We weigh the pros and cons of organic growth versus hyper-scaling through capital injection.",
    writer: "Sneha Kapur",
    writerRole: "Founder",
    writerImg:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150",
    image:
      "https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&q=80&w=800",
    hashtags: ["#finance", "#strategy", "#vc"],
    likes: 142,
    date: "Oct 12, 2023",
    readTime: "10 min read",
  },
  {
    id: 5,
    title: "AI in Small Business Operations",
    shortDesc:
      "Leveraging Large Language Models to automate mundane tasks and allow your core team to focus on high-impact creative work.",
    writer: "Rajiv Menon",
    writerRole: "AI Architect",
    writerImg:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
    hashtags: ["#ai", "#automation", "#future"],
    likes: 310,
    date: "Oct 08, 2023",
    readTime: "7 min read",
  },
  {
    id: 6,
    title: "The Art of the Pivot",
    shortDesc:
      "When do you stick to your vision, and when do you change direction? Case studies of successful startups that redefined their core product.",
    writer: "Elena Wright",
    writerRole: "Strategy Consultant",
    writerImg:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150",
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800",
    hashtags: ["#pivot", "#agile", "#resilience"],
    likes: 95,
    date: "Oct 05, 2023",
    readTime: "9 min read",
  },
];

type SortOption = "latest" | "oldest" | "most-liked";

const BlogCard: React.FC<{
  post: (typeof blogPosts)[0];
  index: number;
  onPostClick: (id: number) => void;
}> = ({ post, index, onPostClick }) => {
  const [liked, setLiked] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative"
    >
      <div className="absolute inset-0 bg-blue-500/5 rounded-[2rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="glass rounded-[2rem] border border-white/5 overflow-hidden flex flex-col h-full hover:border-blue-500/20 transition-all duration-500">
        <div className="relative h-64 overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-60" />
          <div className="absolute top-4 left-4 flex gap-2">
            {post.hashtags.map((tag, i) => (
              <span
                key={i}
                className="px-3 py-1 bg-black/40 backdrop-blur-md rounded-full text-[10px] font-black text-blue-400 uppercase tracking-widest border border-white/10"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="p-8 flex flex-col flex-grow">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full overflow-hidden border border-white/10 p-0.5">
              <img
                src={post.writerImg}
                alt={post.writer}
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div>
              <p className="text-white text-sm font-bold leading-none">
                {post.writer}
              </p>
              <p className="text-gray-500 text-[10px] font-bold uppercase tracking-wider mt-1">
                {post.writerRole}
              </p>
            </div>
          </div>

          <h3 className="text-2xl font-black text-white mb-4 leading-tight group-hover:text-blue-400 transition-colors">
            {post.title}
          </h3>

          <p className="text-gray-400 text-sm font-light leading-relaxed mb-8 flex-grow">
            {post.shortDesc}
          </p>

          <div className="flex items-center justify-between pt-6 border-t border-white/5 mt-auto">
            <div className="flex items-center gap-6">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setLiked(!liked);
                }}
                className={`flex items-center gap-2 transition-colors ${
                  liked ? "text-rose-500" : "text-gray-500 hover:text-rose-400"
                }`}
              >
                <Heart
                  size={18}
                  fill={liked ? "currentColor" : "none"}
                  className={liked ? "animate-pulse" : ""}
                />
                <span className="text-xs font-bold">
                  {liked ? post.likes + 1 : post.likes}
                </span>
              </button>
              <div className="flex items-center gap-2 text-gray-500">
                <Clock size={16} />
                <span className="text-xs font-bold">{post.readTime}</span>
              </div>
            </div>

            <button
              onClick={() => onPostClick(post.id)}
              className="group/btn flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-blue-500 group-hover:text-white transition-colors"
            >
              Read More
              <ArrowRight
                size={14}
                className="group-hover/btn:translate-x-1 transition-transform"
              />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

interface BlogsProps {
  onPostClick?: (postId: number) => void;
}

const Blogs: React.FC<BlogsProps> = ({ onPostClick = () => {} }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState<SortOption>("latest");
  const [isSortOpen, setIsSortOpen] = useState(false);

  const sortedAndFilteredPosts = useMemo(() => {
    let result = blogPosts.filter(
      (post) =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.hashtags.some((tag) =>
          tag.toLowerCase().includes(searchTerm.toLowerCase())
        )
    );

    switch (sortBy) {
      case "latest":
        result.sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
        );
        break;
      case "oldest":
        result.sort(
          (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
        );
        break;
      case "most-liked":
        result.sort((a, b) => b.likes - a.likes);
        break;
    }

    return result;
  }, [searchTerm, sortBy]);

  const sortLabels: Record<SortOption, string> = {
    latest: "Latest Articles",
    oldest: "Past Classics",
    "most-liked": "Most Popular",
  };

  return (
    <section className="pt-44 pb-40 relative">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Simplified Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full glass border border-blue-500/20 text-blue-400 text-[10px] font-bold tracking-[0.3em] uppercase">
            <Sparkles size={14} className="animate-pulse" />
            Insights from the ecosystem
          </div>
          <h2 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter leading-[0.9] mb-6">
            The Startup <br />
            <span className="text-blue-500 italic">Chronicles</span>
          </h2>
        </motion.div>

        {/* Separate Search and Sort Controls */}
        <div className="flex flex-col lg:flex-row items-center gap-6 mb-20">
          {/* Dedicated Search Bar */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex-grow w-full group"
          >
            <div className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-blue-400 transition-colors">
              <Search size={22} />
            </div>
            <input
              type="text"
              placeholder="Search by keywords, tags, or authors..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full glass border border-white/10 rounded-2xl py-6 pl-16 pr-8 text-white text-lg focus:outline-none focus:border-blue-500/50 focus:bg-white/[0.04] transition-all backdrop-blur-xl placeholder:text-gray-600"
            />
          </motion.div>

          {/* Dedicated Sort Dropdown */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full lg:w-72 shrink-0"
          >
            <button
              onClick={() => setIsSortOpen(!isSortOpen)}
              className="w-full flex items-center justify-between px-8 py-6 glass border border-white/10 rounded-2xl text-[10px] font-black tracking-[0.3em] text-gray-400 hover:text-white hover:border-blue-500/30 transition-all uppercase"
            >
              <div className="flex items-center gap-4">
                <ListFilter size={18} className="text-blue-500" />
                <span>{sortBy === "latest" ? "Sort" : sortLabels[sortBy]}</span>
              </div>
              <ChevronDown
                size={18}
                className={`transition-transform duration-500 ${
                  isSortOpen ? "rotate-180 text-blue-500" : ""
                }`}
              />
            </button>

            <AnimatePresence>
              {isSortOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.98 }}
                  className="absolute top-full right-0 left-0 mt-4 z-50 glass border border-white/10 rounded-2xl overflow-hidden shadow-[0_25px_80px_rgba(0,0,0,0.6)]"
                >
                  {(["latest", "oldest", "most-liked"] as SortOption[]).map(
                    (option) => (
                      <button
                        key={option}
                        onClick={() => {
                          setSortBy(option);
                          setIsSortOpen(false);
                        }}
                        className={`w-full text-left px-8 py-5 text-[10px] font-black tracking-widest uppercase transition-all flex items-center justify-between ${
                          sortBy === option
                            ? "bg-blue-600/20 text-blue-400"
                            : "text-gray-400 hover:bg-white/5 hover:text-white"
                        }`}
                      >
                        {sortLabels[option]}
                        {sortBy === option && (
                          <div className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_10px_#3b82f6]" />
                        )}
                      </button>
                    )
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Grid Section */}
        <AnimatePresence mode="popLayout">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-14"
          >
            {sortedAndFilteredPosts.map((post, i) => (
              <BlogCard
                key={post.id}
                post={post}
                index={i}
                onPostClick={onPostClick}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {sortedAndFilteredPosts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="py-60 text-center"
          >
            <Hash
              size={80}
              className="mx-auto text-gray-800 mb-8 animate-pulse"
            />
            <h3 className="text-3xl font-black text-gray-600 uppercase tracking-widest">
              No matching insights found
            </h3>
            <p className="text-gray-700 mt-6 text-lg font-light">
              Try adjusting your search terms to discover more content.
            </p>
          </motion.div>
        )}

        {/* Load More / Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-40 text-center"
        >
          <button className="group relative px-20 py-8 rounded-2xl glass border border-white/10 text-white font-black tracking-[0.4em] uppercase hover:bg-blue-600 hover:border-blue-600 transition-all duration-500 overflow-hidden">
            <span className="relative z-10">View All</span>
            <div className="absolute inset-0 bg-blue-500/30 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>
        </motion.div>
      </div>

      {/* Background Decor */}
      <div className="absolute top-[30%] right-[-10%] w-[60vw] h-[60vw] bg-blue-600/5 rounded-full blur-[200px] -z-10" />
      <div className="absolute bottom-[20%] left-[-10%] w-[50vw] h-[50vw] bg-purple-600/5 rounded-full blur-[200px] -z-10" />
    </section>
  );
};

export default Blogs;
