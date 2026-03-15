import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import { Link, useParams, Navigate } from 'react-router';
import { useEffect } from 'react';
import { blogArticles, BlogArticleId } from './blogData';

export function BlogPost() {
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!id || !(id in blogArticles)) {
    return <Navigate to="/" replace />;
  }

  const article = blogArticles[id as BlogArticleId];

  return (
    <div className="min-h-screen bg-[#F7F4EE] dark:bg-[#0a0a0a] pt-32 pb-32 px-5 sm:px-8 text-[#2B2A28] dark:text-[#F7F4EE] relative selection:bg-[#4C7B7B]/30">
      
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <div className="absolute top-[-10%] left-[-5%] w-96 h-96 rounded-full bg-[#4C7B7B]/10 blur-[100px]" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Back Navigation */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <Link 
            to="/#blog" 
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-white dark:bg-[#1a1a1a] border border-[#4C7B7B]/15 rounded-full text-sm font-bold text-[#7A756D] dark:text-[#B8B8B8] hover:text-[#4C7B7B] dark:hover:text-[#6E9A9A] hover:shadow-md transition-all group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
        </motion.div>

        {/* Article Header */}
        <motion.header 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{display: 'flex', flexDirection: 'column', gap: '30px'}} 
          className="space-y-8 mb-16 text-center max-w-3xl mx-auto"
        >
          <div className="flex items-center justify-center gap-3">
            <span className="px-4 py-1.5 bg-[#4C7B7B]/10 text-[#4C7B7B] dark:text-[#6E9A9A] text-xs font-bold rounded-xl uppercase tracking-widest">
              {article.category}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight text-[#2B2A28] dark:text-[#F7F4EE]">
            {article.title.includes(':') ? (
               <>
                 {article.title.split(':')[0]}: <br />
                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4C7B7B] to-[#6E9A9A] inline-block mt-2">
                   {article.title.split(':')[1]}
                 </span>
               </>
            ) : (
              article.title
            )}
          </h1>

          <div className="flex items-center justify-center gap-6 text-sm font-semibold text-[#7A756D] dark:text-[#B8B8B8] pt-4">
            <span className="flex items-center gap-2"><Calendar className="w-4 h-4" /> {article.date}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#4C7B7B]/40" />
            <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> {article.readTime}</span>
          </div>
        </motion.header>

        {/* Hero Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full aspect-[16/9] md:aspect-[21/9] rounded-[2rem] overflow-hidden shadow-2xl mb-20 border-[6px] border-white/50 dark:border-[#1a1a1a]"
        >
          <img 
            src={article.image} 
            alt={article.title} 
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Article Body */}
        <motion.article 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-[65ch] mx-auto text-lg md:text-xl text-[#5a5753] dark:text-[#c4c4c4] leading-loose"
          style={{ paddingBottom: '50px' }}
        >
          {article.content.map((block: { type: string; text: string }, index: number) => {
            
            if (block.type === 'paragraph-first') {
              return (
                <p 
                  key={index} 
                  className="text-xl md:text-2xl font-medium text-[#2B2A28] dark:text-[#F7F4EE] leading-relaxed"
                  style={{ paddingBottom: '30px' }} // Custom inline padding
                >
                  <span className="text-7xl text-[#4C7B7B] font-black float-left mr-5 mt-2 leading-none">
                    {block.text.charAt(0)}
                  </span> 
                  {block.text.slice(1)}
                </p>
              );
            }
            
            if (block.type === 'h2') {
              return (
                <h2 
                  key={index} 
                  className="text-3xl md:text-4xl font-bold text-[#2B2A28] dark:text-[#F7F4EE] tracking-tight"
                  style={{ paddingTop: '50px', paddingBottom: '25px' }} // Custom inline padding
                >
                  {block.text}
                </h2>
              );
            }
            
            if (block.type === 'quote') {
              return (
                <blockquote 
                  key={index} 
                  className="pl-8 border-l-4 border-[#4C7B7B] bg-[#4C7B7B]/5 dark:bg-[#4C7B7B]/10 pr-8 rounded-r-2xl italic text-xl md:text-2xl font-medium text-[#2B2A28] dark:text-[#F7F4EE] shadow-sm"
                  style={{ paddingTop: '35px', paddingBottom: '35px', marginTop: '40px', marginBottom: '40px', paddingLeft: '20px' }} // Custom inline padding
                >
                  "{block.text}"
                </blockquote>
              );
            }
            
            // Standard paragraph
            return (
              <p 
                key={index}
                style={{ paddingBottom: '25px' }} // Custom inline padding
              >
                {block.text}
              </p>
            );
          })}

          {/* Bottom Action Bar */}
          <div 
            className="flex items-center justify-center border-t border-[#4C7B7B]/15"
            style={{ paddingTop: '60px', marginTop: '60px' }} // Custom inline padding
          >
            <Link 
              to="/#blog" 
              className="px-8 py-4 bg-[#4C7B7B] text-white font-bold rounded-2xl hover:bg-[#6E9A9A] hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
            >
              Read More Articles
            </Link>
          </div>

        </motion.article>
      </div>
    </div>
  );
}