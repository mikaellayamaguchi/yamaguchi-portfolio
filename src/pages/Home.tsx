import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Code2, Palette, Zap, ExternalLink, Award, Mail, Phone, MapPin, Send, CheckCircle, Globe, Layout, Smartphone, Server, Database, Lightbulb, Users, Clock, BookOpen, Target, Sparkles, Download } from 'lucide-react';
import { Link } from 'react-router';
import { useEffect, useState } from 'react';
import { SEO, TiltCard } from '../components/';
import hauEcoquestImg from '../assets/img/project-hau-ecoquest.png';
import wellnessApparelImg from '../assets/img/project-the-wellness-apparel.png';
import chanelCloneImg from '../assets/img/project-chanel-clone-website.png';
import profilePic from '../assets/img/my-picture.png';

export function Home() {
  const [currentWord, setCurrentWord] = useState(0);
  const words = ['beautiful', 'responsive', 'modern', 'interactive'];
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');
    setTimeout(() => {
      setFormStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setFormStatus('idle'), 3000);
    }, 1500);
  };

  const featuredProjects = [
    {
      title: 'HAU Ecoquest',
      description: 'Engineered a gamified web app with 10+ user profiles, achievements, and a community hub. Integrated MERN-stack for quest tracking and admin management for multiple users.',
      image: hauEcoquestImg,
      tags: ['React', 'Node.js', 'MongoDB', 'Express'],
      demoLink: 'https://hauecoquest.vercel.app',
      githubLink: '#',
    },
    {
      title: 'The Wellness Apparel',
      description: 'Developed an e-commerce site with product management and inventory tracking for 14 items. Optimized responsive design and user experience for all 14 product displays.',
      image: wellnessApparelImg,
      tags: ['PHP', 'MySQL', 'Bootstrap'],
      demoLink: 'http://the-wellness-apparel.onlinewebshop.net',
      githubLink: '#',
    },
    {
      title: 'Chanel Website Clone',
      description: 'Created a replica of the Chanel website with product displays, navigation, and home page layout. Focused on responsive design and translating real-world UI into functional frontend code.',
      image: chanelCloneImg,
      tags: ['HTML', 'CSS', 'JavaScript'],
      demoLink: 'https://prelim-project-thefourwhoadore.netlify.app/home',
      githubLink: '#',
    },
  ];

  const certifications = [
    {
      title: 'Sleek and Swift: A Hands-on Tailwind and ShadCN Workshop',
      issuer: 'Holy Angel University Code Geeks',
      year: '2024',
    },
    {
      title: 'Introduction to Graphic Design: Basics of UI/UX',
      issuer: 'Simplilearn',
      year: '2024',
      certCode: '8826987',
    },
    {
      title: 'Design Thinking for Beginners',
      issuer: 'Simplilearn',
      year: '2024',
      certCode: '8691600',
    },
    {
      title: 'CompTIA IT Fundamentals+ (ITF+) Certification',
      issuer: 'CompTIA',
      year: '2024',
    },
  ];

  const skills = [
    { name: 'HTML5', level: 95, icon: Globe, category: 'Frontend' },
    { name: 'CSS3', level: 93, icon: Layout, category: 'Frontend' },
    { name: 'JavaScript', level: 90, icon: Code2, category: 'Frontend' },
    { name: 'React', level: 88, icon: Code2, category: 'Frontend' },
    { name: 'Tailwind CSS', level: 92, icon: Layout, category: 'Frontend' },
    { name: 'Responsive Design', level: 95, icon: Smartphone, category: 'Frontend' },
    { name: 'Node.js', level: 85, icon: Server, category: 'Backend' },
    { name: 'Express', level: 82, icon: Server, category: 'Backend' },
    { name: 'MongoDB', level: 80, icon: Database, category: 'Backend' },
    { name: 'PostgreSQL', level: 78, icon: Database, category: 'Backend' },
    { name: 'REST APIs', level: 88, icon: Server, category: 'Backend' },
    { name: 'Git & GitHub', level: 90, icon: Code2, category: 'Tools' },
  ];

  const softSkills = [
    { skill: 'Problem Solving', icon: Lightbulb },
    { skill: 'Adaptability', icon: Target },
    { skill: 'Team Collaboration', icon: Users },
    { skill: 'Time Management', icon: Clock },
    { skill: 'Documentation Skills', icon: BookOpen },
    { skill: 'Leadership', icon: Sparkles },
  ];

  const groupedSkills = {
    Frontend: skills.filter(s => s.category === 'Frontend'),
    Backend: skills.filter(s => s.category === 'Backend'),
    Tools: skills.filter(s => s.category === 'Tools'),
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'mikaellayamaguchi23@gmail.com',
      link: 'mailto:mikaellayamaguchi23@gmail.com',
    },
    {
      icon: Phone,
      label: 'Messenger',
      value: 'facebook.com/m/mikaellayamaguchi23',
      link: 'https://m.me/mikaellayamaguchi23',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'San Fernando, Pampanga',
      link: null,
    },
  ];

  return (
    <div className="text-[#2B2A28] dark:text-[#F7F4EE]">
      <SEO 
        title="E-Portfolio"
        description="Mikaella Gabrielle S. Yamaguchi - Front End Developer crafting beautiful, responsive, and modern web experiences. View my portfolio of projects and get in touch."
      />
      
      {/* Hero Sections */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden pt-32 pb-32">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-[-200px] right-[-100px] w-[600px] h-[600px] rounded-full bg-gradient-to-br from-[#4C7B7B]/30 to-[#6E9A9A]/20"
            style={{ filter: 'blur(120px)' }}
            animate={{
              y: [0, 80, 0],
              x: [0, 50, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          <motion.div
            className="absolute bottom-[-150px] left-[-150px] w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-[#6E9A9A]/25 to-[#4C7B7B]/15"
            style={{ filter: 'blur(120px)' }}
            animate={{
              y: [0, -70, 0],
              x: [0, -40, 0],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 2,
            }}
          />
          
          <div className="absolute inset-0 bg-[linear-gradient(rgba(76,123,123,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(76,123,123,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              type: "spring", 
              stiffness: 200, 
              damping: 20,
              delay: 0.2 
            }}
            className="inline-block mb-12"
            style={{ marginTop: '48px' }}
          >
            <motion.div
              className="px-6 py-3 bg-gradient-to-r from-[#4C7B7B]/10 via-[#6E9A9A]/10 to-[#4C7B7B]/10 backdrop-blur-sm rounded-full border border-[#4C7B7B]/20 shadow-lg"
              animate={{
                boxShadow: [
                  '0 0 20px rgba(76,123,123,0.2)',
                  '0 0 40px rgba(110,154,154,0.3)',
                  '0 0 20px rgba(76,123,123,0.2)',
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <div className="flex items-center gap-3">
                <motion.div
                  className="w-2 h-2 rounded-full bg-gradient-to-r from-[#4C7B7B] to-[#6E9A9A]"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [1, 0.5, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                />
                <span className="text-sm font-semibold bg-gradient-to-r from-[#4C7B7B] to-[#6E9A9A] bg-clip-text text-transparent">
                  Looking for Internship
                </span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="inline text-[#2B2A28] dark:text-[#F7F4EE]"
              >
                Hi, I'm{' '}
              </motion.span>
              <motion.span
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  duration: 0.8, 
                  delay: 0.8,
                  type: "spring",
                  stiffness: 100 
                }}
                className="inline-block bg-gradient-to-r from-[#4C7B7B] via-[#5A8A8A] to-[#6E9A9A] bg-clip-text text-transparent relative pb-3"
              >
                Mikaella Gabrielle
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 1, delay: 1.5 }}
                  className="absolute -bottom-1 left-0 h-1.5 bg-gradient-to-r from-[#4C7B7B] via-[#5A8A8A] to-[#6E9A9A] rounded-full"
                />
              </motion.span>
            </h1>
            
            {/* Role text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="mb-10 mt-8"
              style={{ marginBottom: '40px', marginTop: '60px' }}
            >
              <p className="text-2xl md:text-4xl lg:text-5xl font-bold leading-normal pb-1 relative z-10"
              style={{
                background: 'linear-gradient(to right, #354341, #4C7B7C)',
                backgroundSize: '50% 100%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                Front End Developer 
              </p>
            </motion.div>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="text-xl md:text-2xl text-[#7A756D] dark:text-[#B8B8B8] mb-16 max-w-3xl mx-auto leading-relaxed"
            >
              Crafting{' '}
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentWord}
                  initial={{ opacity: 0, y: 30, rotateX: 90 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  exit={{ opacity: 0, y: -30, rotateX: -90 }}
                  transition={{ duration: 0.5 }}
                  className="inline-block font-bold text-[#4C7B7B] dark:text-[#6E9A9A] px-3 py-1 rounded-lg bg-[#4C7B7B]/5 dark:bg-[#6E9A9A]/5"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  {words[currentWord]}
                </motion.span>
              </AnimatePresence>{' '}
              web experiences with modern technologies
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              className="flex gap-6 justify-center flex-wrap mb-20"
            >
              <motion.a
                href="#contact"
                className="px-8 py-4 bg-[#4C7B7B] text-white rounded-xl font-medium text-base hover:bg-[#6E9A9A] transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="flex items-center gap-2">
                  Get In Touch
                  <ArrowRight className="w-4 h-4" />
                </span>
              </motion.a>

              <Link
                to="/resume"
                className="px-8 py-4 border-2 border-[#4C7B7B] text-[#4C7B7B] dark:text-[#6E9A9A] dark:border-[#6E9A9A] rounded-xl font-medium text-base hover:bg-[#4C7B7B] hover:text-white dark:hover:bg-[#6E9A9A] transition-all"
              >
                <span className="flex items-center gap-2">
                  View Resume
                  <Download className="w-4 h-4" />
                </span>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.6 }}
              className="flex justify-center gap-8 flex-wrap mb-24"
            >
              {[
                { icon: Code2, label: 'Clean Code', color: 'from-[#4C7B7B] to-[#5A8A8A]' },
                { icon: Palette, label: 'UI/UX Design', color: 'from-[#5A8A8A] to-[#6E9A9A]' },
                { icon: Zap, label: 'Performance', color: 'from-[#6E9A9A] to-[#4C7B7B]' },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 15,
                    delay: 1.8 + index * 0.1,
                  }}
                  whileHover={{ 
                    scale: 1.15, 
                    y: -8,
                    rotateY: 360,
                  }}
                  className="group relative"
                >
                  <div className="relative flex flex-col items-center gap-3 p-6 rounded-2xl bg-white/50 dark:bg-[#1a1a1a]/50 backdrop-blur-sm border border-[#4C7B7B]/10 shadow-lg hover:shadow-2xl transition-all cursor-pointer">
                    <motion.div
                      className={`relative p-4 rounded-xl bg-gradient-to-br ${item.color}`}
                      animate={{
                        boxShadow: [
                          '0 0 20px rgba(76,123,123,0.3)',
                          '0 0 40px rgba(110,154,154,0.5)',
                          '0 0 20px rgba(76,123,123,0.3)',
                        ],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: index * 0.3,
                      }}
                    >
                      <item.icon className="w-8 h-8 text-white" />
                    </motion.div>
                    
                    <span className="text-sm font-bold text-[#2B2A28] dark:text-[#F7F4EE] group-hover:text-[#4C7B7B] dark:group-hover:text-[#6E9A9A] transition-colors">
                      {item.label}
                    </span>

                    <div className="absolute top-2 left-2 w-3 h-3 border-l-2 border-t-2 border-[#4C7B7B]/30 rounded-tl-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute bottom-2 right-2 w-3 h-3 border-r-2 border-b-2 border-[#6E9A9A]/30 rounded-br-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.2 }}
            className="flex justify-center pb-12 relative z-20"
          >
            <motion.a
              href="#about"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="flex flex-col items-center gap-2 cursor-pointer"
              style={{paddingTop: '48px'}}
            >
              <span className="text-xs font-semibold text-[#7A756D] dark:text-[#B8B8B8] tracking-wider">
                SCROLL TO EXPLORE
              </span>
              <motion.div
                className="w-6 h-10 border-2 border-[#4C7B7B]/40 rounded-full p-2 flex justify-center"
                style={{backgroundColor: 'white'}}
                whileHover={{ borderColor: 'rgba(76,123,123,0.8)' }}
              >
                {/* Scrolling dot */}

                <motion.div
                  className="w-2 h-2 rounded-full" 
                  style={{ 
                    backgroundColor: '#578586',
                    display: 'block',          
                    minHeight: '12px',         
                    minWidth: '4px'    
                  }}
                  animate={{ y: [0, 5, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
              </motion.div>
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-4 bg-white dark:bg-[#1a1a1a] relative overflow-hidden">
        {/* About Me */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
          <motion.div
            className="absolute top-[100px] right-[10%] w-72 h-72 rounded-full bg-[#4C7B7B]/10 blur-[80px]"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          <motion.div
            className="absolute bottom-[100px] left-[10%] w-96 h-96 rounded-full bg-[#6E9A9A]/10 blur-[80px]"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 1,
            }}
          />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="inline-block mb-4"
            >
              <div className="px-6 py-2 bg-[#4C7B7B]/10 rounded-full text-[#4C7B7B] dark:text-[#6E9A9A] font-semibold text-sm">
                Get to know me
              </div>
            </motion.div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              About <span className="bg-gradient-to-r from-[#4C7B7B] via-[#5A8A8A] to-[#6E9A9A] bg-clip-text text-transparent">Me</span>
            </h2>
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-1.5 bg-gradient-to-r from-[#4C7B7B] to-[#6E9A9A] rounded-full mx-auto"
            />
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12 items-center mb-20">
            {/* Profile  */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, type: "spring" }}
              className="flex justify-center md:justify-start"
            >
              <div className="relative">
                <motion.div
                  animate={{
                    y: [0, -20, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="relative"
                >
                  <div className="w-72 h-72 md:w-96 md:h-96 rounded-[3rem] bg-gradient-to-br from-[#4C7B7B] via-[#5A8A8A] to-[#6E9A9A] flex items-center justify-center shadow-2xl relative overflow-hidden group">
                    
                    {/* Profile Image */}
                    <img 
                      src={profilePic} 
                      alt="Mikaella Gabrielle" 
                      className="w-full h-full object-cover object-top relative z-10 group-hover:scale-110 transition-transform duration-700"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-20 pointer-events-none" />

                    <motion.div
                      className="absolute top-4 right-4 w-2 h-2 bg-white rounded-full z-30"
                      animate={{
                        scale: [0, 1, 0],
                        opacity: [0, 1, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: 0,
                      }}
                    />
                    <motion.div
                      className="absolute bottom-8 left-8 w-2 h-2 bg-white rounded-full z-30"
                      animate={{
                        scale: [0, 1, 0],
                        opacity: [0, 1, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: 0.5,
                      }}
                    />
                    <motion.div
                      className="absolute top-1/2 right-6 w-2 h-2 bg-white rounded-full z-30"
                      animate={{
                        scale: [0, 1, 0],
                        opacity: [0, 1, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: 1,
                      }}
                    />
                  </div>

                  <motion.div 
                    className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-[#6E9A9A] to-[#4C7B7B] rounded-3xl -z-10 opacity-50"
                    animate={{
                      rotate: [0, 180, 360],
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                  />
                  <motion.div 
                    className="absolute -top-6 -left-6 w-24 h-24 border-4 border-[#4C7B7B] rounded-2xl -z-10"
                    animate={{
                      rotate: [0, -180, -360],
                    }}
                    transition={{
                      duration: 15,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                  />
                </motion.div>
              </div>
            </motion.div>

            {/* Bio Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="md:col-span-2 space-y-6"
            >
              <motion.h3 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-3xl md:text-4xl font-bold leading-tight"
              >
                Hello! I'm <span className="bg-gradient-to-r from-[#4C7B7B] to-[#6E9A9A] bg-clip-text text-transparent">Mikaella Gabrielle S. Yamaguchi</span>
              </motion.h3>
              
              <div className="space-y-5 text-[#7A756D] dark:text-[#B8B8B8] text-lg leading-relaxed">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="relative pl-6 border-l-4 border-[#4C7B7B]/30"
                >
                  I'm a passionate <strong className="text-[#4C7B7B] dark:text-[#6E9A9A] font-bold">Front End Developer</strong> currently 
                  pursuing my degree in Information Technology with a specialization in Web Development at <strong className="text-[#4C7B7B] dark:text-[#6E9A9A] font-semibold">Holy Angel University</strong>. 
                  My interest in coding sparked when I discovered amazing websites with incredible interactivity and design.
                </motion.p>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  My journey into web development began with fascination for how beautifully interactive websites are crafted, and it quickly evolved into a 
                  passion for creating elegant, user-centered digital experiences. I believe that great web development is where 
                  <strong className="text-[#4C7B7B] dark:text-[#6E9A9A] font-semibold"> creativity meets functionality</strong>, and I strive to deliver both in every project I work on.
                </motion.p>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  I specialize in crafting responsive, pixel-perfect interfaces using modern frontend technologies like <strong className="text-[#4C7B7B] dark:text-[#6E9A9A] font-semibold">HTML5</strong>, 
                  <strong className="text-[#4C7B7B] dark:text-[#6E9A9A] font-semibold"> CSS3</strong>, <strong className="text-[#4C7B7B] dark:text-[#6E9A9A] font-semibold"> JavaScript</strong>, <strong className="text-[#4C7B7B] dark:text-[#6E9A9A] font-semibold"> React</strong>, and <strong className="text-[#4C7B7B] dark:text-[#6E9A9A] font-semibold"> Tailwind CSS</strong>. 
                  I'm always eager to learn new technologies and stay up-to-date with the latest web development trends.
                </motion.p>
              </div>

              {/* Quick Stats */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="grid grid-cols-3 gap-4 pt-8"
              >
                {[
                  { num: '3', label: 'Projects Completed', icon: '✓' },
                  { num: '3+', label: 'Years Learning', icon: '🕮' },
                  { num: '100%', label: 'Dedication', icon: '♡' },
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 + i * 0.1, type: "spring" }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="relative text-center p-6 bg-gradient-to-br from-[#4C7B7B]/5 to-[#6E9A9A]/5 dark:from-[#4C7B7B]/10 dark:to-[#6E9A9A]/10 rounded-2xl border border-[#4C7B7B]/10 hover:border-[#4C7B7B]/30 transition-all cursor-default group"
                  >
                    <div className="text-4xl mb-2 group-hover:scale-110 transition-transform">{stat.icon}</div>
                    <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#4C7B7B] to-[#6E9A9A] bg-clip-text text-transparent mb-2">
                      {stat.num}
                    </div>
                    <div className="text-xs md:text-sm text-[#7A756D] dark:text-[#B8B8B8] font-medium">{stat.label}</div>
                    <div className="absolute inset-0 bg-gradient-to-br from-[#4C7B7B]/0 to-[#6E9A9A]/0 group-hover:from-[#4C7B7B]/5 group-hover:to-[#6E9A9A]/5 rounded-2xl transition-all" />
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>

          {/* Technical Skills */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-32">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold mb-2">Technical Skills</h3>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {(Object.keys(groupedSkills) as Array<keyof typeof groupedSkills>).map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="bg-gradient-to-br from-[#F7F4EE] to-white dark:from-[#0a0a0a] dark:to-[#1a1a1a] p-8 rounded-3xl shadow-lg border border-[#4C7B7B]/10 relative overflow-hidden"
                >
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-6">
                      <h4 className="text-2xl font-bold">{category}</h4>
                    </div>
                    <div className="space-y-5">
                      {groupedSkills[category].map((skill, i) => (
                        <div key={i}>
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-3">
                              <skill.icon className="w-5 h-5 text-[#4C7B7B] dark:text-[#6E9A9A]" />
                              <span className="font-semibold text-sm">{skill.name}</span>
                            </div>
                            <span className="text-xs font-bold text-[#4C7B7B] dark:text-[#6E9A9A]">{skill.level}%</span>
                          </div>
                          <div className="relative h-2.5 bg-[#4C7B7B]/10 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 1 }}
                              className="absolute inset-y-0 left-0 bg-gradient-to-r from-[#4C7B7B] to-[#6E9A9A] rounded-full"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Soft Skills Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-32"
          >
            <div className="text-center mb-12">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                className="inline-block mb-4"
              >
              </motion.div>
              <h3 className="text-3xl md:text-4xl font-bold mb-2">Soft Skills</h3>
              <p className="text-[#7A756D] dark:text-[#B8B8B8]">Personal strengths that drive my success</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {softSkills.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05, type: "spring" }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="relative bg-gradient-to-br from-[#F7F4EE] to-white dark:from-[#0a0a0a] dark:to-[#1a1a1a] p-6 rounded-2xl shadow-md hover:shadow-xl transition-all border border-[#4C7B7B]/10 cursor-default group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#4C7B7B]/0 to-[#6E9A9A]/0 group-hover:from-[#4C7B7B]/5 group-hover:to-[#6E9A9A]/5 rounded-2xl transition-all" />
                  
                  <div className="relative z-10 flex flex-col items-center text-center gap-3">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="w-12 h-12 bg-gradient-to-br from-[#4C7B7B] to-[#6E9A9A] rounded-xl flex items-center justify-center shadow-lg"
                    >
                      <item.icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <span className="font-semibold text-sm leading-tight">{item.skill}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-12">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                className="inline-block mb-4"
              >
                <div className="px-6 py-2 bg-[#6E9A9A]/10 rounded-full text-[#4C7B7B] dark:text-[#6E9A9A] font-semibold text-sm">
                  Credentials
                </div>
              </motion.div>
              <h3 className="text-3xl md:text-4xl font-bold mb-2">Certifications & Achievements</h3>
              <p className="text-[#7A756D] dark:text-[#B8B8B8]">Continuous learning and professional development</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-gradient-to-br from-[#F7F4EE] to-white dark:from-[#0a0a0a] dark:to-[#1a1a1a] p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all border border-[#4C7B7B]/10 group relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#4C7B7B]/5 to-transparent rounded-bl-full group-hover:scale-150 transition-transform duration-500" />
                  
                  <div className="relative z-10 flex items-start gap-4">
                    <motion.div 
                      className="w-14 h-14 bg-gradient-to-br from-[#4C7B7B] to-[#6E9A9A] rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg"
                      whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Award className="w-7 h-7 text-white" />
                    </motion.div>
                    <div className="flex-1">
                      <h4 className="font-bold text-lg mb-2 leading-snug group-hover:text-[#4C7B7B] dark:group-hover:text-[#6E9A9A] transition-colors">
                        {cert.title}
                      </h4>
                      <p className="text-sm text-[#7A756D] dark:text-[#B8B8B8] mb-1 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-[#4C7B7B] rounded-full" />
                        {cert.issuer}
                      </p>
                      <p className="text-xs text-[#7A756D] dark:text-[#B8B8B8] mb-2 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-[#6E9A9A] rounded-full" />
                        {cert.year}
                      </p>
                      {cert.certCode && (
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#4C7B7B]/10 rounded-lg">
                          <span className="text-xs font-semibold text-[#4C7B7B] dark:text-[#6E9A9A]">
                            Code:
                          </span>
                          <code className="text-xs font-mono text-[#4C7B7B] dark:text-[#6E9A9A]">
                            {cert.certCode}
                          </code>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section id="projects" className="py-32 px-4 bg-[#F7F4EE] dark:bg-[#0a0a0a] relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
          <motion.div
            className="absolute top-[20%] left-[10%] w-64 h-64 rounded-full bg-[#4C7B7B]/10 blur-[60px]"
            animate={{
              scale: [1, 1.2, 1],
              x: [0, 50, 0],
              y: [0, 30, 0],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          <motion.div
            className="absolute bottom-[20%] right-[10%] w-80 h-80 rounded-full bg-[#6E9A9A]/10 blur-[60px]"
            animate={{
              scale: [1, 1.3, 1],
              x: [0, -50, 0],
              y: [0, -30, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 1,
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="inline-block mb-4"
            >
              <div className="px-6 py-2 bg-[#4C7B7B]/10 rounded-full text-[#4C7B7B] dark:text-[#6E9A9A] font-semibold text-sm">
                Portfolio Showcase
              </div>
            </motion.div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Featured <span className="bg-gradient-to-r from-[#4C7B7B] via-[#5A8A8A] to-[#6E9A9A] bg-clip-text text-transparent">Projects</span>
            </h2>
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-1.5 bg-gradient-to-r from-[#4C7B7B] to-[#6E9A9A] rounded-full mx-auto mb-6"
            />
            <p className="text-[#7A756D] dark:text-[#B8B8B8] text-lg max-w-2xl mx-auto">
              Explore my latest work showcasing innovative solutions and modern web technologies
            </p>
          </motion.div>

          {/* Project Cards */}
          <div className="space-y-24">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`grid md:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Project Image */}
                <motion.div
                  className={`relative group ${index % 2 === 1 ? 'md:order-2' : ''}`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl">
      
                    <div className="absolute inset-0 bg-gradient-to-br from-[#4C7B7B]/20 to-[#6E9A9A]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                    
                    {/* Image */}
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-[400px] object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.5 }}
                    />
                    
                    {/* Floating number badge */}
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{ type: "spring", stiffness: 200, delay: index * 0.1 + 0.3 }}
                      className="absolute top-6 right-6 w-16 h-16 bg-gradient-to-br from-[#4C7B7B] to-[#6E9A9A] rounded-2xl flex items-center justify-center shadow-xl z-20"
                    >
                      <span className="text-white text-2xl font-bold">0{index + 1}</span>
                    </motion.div>

                    {/* Live demo button overlay */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileHover={{ opacity: 1, y: 0 }}
                      className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 z-20"
                    >
                      <a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-4 bg-white dark:bg-[#1a1a1a] text-[#4C7B7B] dark:text-[#6E9A9A] rounded-xl font-bold shadow-xl hover:scale-110 transition-transform flex items-center gap-3"
                      >
                        <ExternalLink className="w-5 h-5" />
                        View Live Demo
                      </a>
                    </motion.div>
                  </div>

                  <motion.div
                    className={`absolute -z-10 w-full h-full bg-gradient-to-br from-[#4C7B7B]/10 to-[#6E9A9A]/10 rounded-3xl ${
                      index % 2 === 1 ? '-left-6 -top-6' : '-right-6 -bottom-6'
                    }`}
                    animate={{
                      rotate: [0, 5, 0],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  />
                </motion.div>

                {/* Project Details */}
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 + 0.2 }}
                  className={`space-y-6 ${index % 2 === 1 ? 'md:order-1' : ''}`}
                >
                  {/* Project category */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                  >
                    <span className="inline-block px-4 py-2 bg-[#4C7B7B]/10 text-[#4C7B7B] dark:text-[#6E9A9A] rounded-lg text-sm font-semibold">
                      {project.tags[0]} Project
                    </span>
                  </motion.div>

                  {/* Project title */}
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.4 }}
                    className="text-3xl md:text-4xl font-bold leading-tight"
                  >
                    {project.title}
                  </motion.h3>

                  {/* Project description */}
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.5 }}
                    className="text-[#7A756D] dark:text-[#B8B8B8] text-lg leading-relaxed"
                  >
                    {project.description}
                  </motion.p>

                  {/* Technology stack */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.6 }}
                  >
                    <p className="text-sm font-semibold text-[#7A756D] dark:text-[#B8B8B8] mb-3">
                      TECH STACK
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {project.tags.map((tag, i) => (
                        <motion.span
                          key={i}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: index * 0.1 + 0.6 + i * 0.05 }}
                          whileHover={{ scale: 1.1, y: -3 }}
                          className="px-5 py-2.5 bg-white dark:bg-[#1a1a1a] text-[#4C7B7B] dark:text-[#6E9A9A] rounded-xl text-sm font-bold border-2 border-[#4C7B7B]/20 hover:border-[#4C7B7B] transition-all shadow-md cursor-default"
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>

                  {/* Action button */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.7 }}
                  >
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#4C7B7B] to-[#6E9A9A] text-white rounded-xl font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all group"
                    >
                      <span>Explore Project</span>
                      <ExternalLink className="w-5 h-5 group-hover:rotate-45 transition-transform" />
                    </a>
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="py-32 px-4 bg-white dark:bg-[#1a1a1a]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Get In <span className="bg-gradient-to-r from-[#4C7B7B] to-[#6E9A9A] bg-clip-text text-transparent">Touch</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#4C7B7B] to-[#6E9A9A] rounded-full mx-auto mb-6" />
            <p className="text-[#7A756D] dark:text-[#B8B8B8] text-lg max-w-2xl mx-auto">
              I'm currently seeking web development internship opportunities. Let's connect!
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="flex items-center gap-4 p-4 bg-[#F7F4EE] dark:bg-[#0a0a0a] rounded-xl hover:shadow-lg transition-all"
                >
                  <div className="w-12 h-12 bg-[#4C7B7B]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-6 h-6 text-[#4C7B7B] dark:text-[#6E9A9A]" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-[#7A756D] dark:text-[#B8B8B8] mb-1">{info.label}</p>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="font-semibold text-[#2B2A28] dark:text-[#F7F4EE] hover:text-[#4C7B7B] dark:hover:text-[#6E9A9A] transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="font-semibold">{info.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#F7F4EE] dark:bg-[#0a0a0a] border-2 border-transparent focus:border-[#4C7B7B] dark:focus:border-[#6E9A9A] rounded-xl outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#F7F4EE] dark:bg-[#0a0a0a] border-2 border-transparent focus:border-[#4C7B7B] dark:focus:border-[#6E9A9A] rounded-xl outline-none transition-all"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-[#F7F4EE] dark:bg-[#0a0a0a] border-2 border-transparent focus:border-[#4C7B7B] dark:focus:border-[#6E9A9A] rounded-xl outline-none transition-all resize-none"
                    placeholder="Your message here..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={formStatus === 'sending' || formStatus === 'success'}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full px-8 py-4 rounded-xl font-semibold transition-all flex items-center justify-center gap-2 ${
                    formStatus === 'success'
                      ? 'bg-green-500 text-white'
                      : 'bg-[#4C7B7B] hover:bg-[#6E9A9A] text-white'
                  }`}
                >
                  {formStatus === 'sending' && 'Sending...'}
                  {formStatus === 'success' && (
                    <>
                      <CheckCircle className="w-5 h-5" />
                      Message Sent!
                    </>
                  )}
                  {formStatus === 'idle' && (
                    <>
                      Send Message
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}