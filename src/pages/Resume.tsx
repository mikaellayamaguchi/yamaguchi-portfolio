import { motion } from 'framer-motion';
import { Download, Briefcase, GraduationCap, Award, Calendar, MapPin, Mail, Phone, Globe } from 'lucide-react';
import { SEO } from '../components';
import resumePdf from '../assets/docs/my-resume.pdf';

export function Resume() {
  // Education history
  const education = [
    {
      degree: 'Bachelor of Science in Information Technology Specializing in Web Development',
      school: 'Holy Angel University',
      location: 'Tertiary',
      period: '2022 - Present',
      gpa: null,
      description: 'Specialization in Web Development and Modern Technologies',
    },
    {
      degree: 'Secondary Education',
      school: 'Holy Angel University',
      location: 'Secondary',
      period: '2016 - 2022',
      gpa: null,
      description: null,
    },
    {
      degree: 'Primary Education',
      school: 'Achievers Special Education Center',
      location: 'Primary',
      period: '2010 - 2016',
      gpa: null,
      description: null,
    },
  ];

  // Certifications and achievements
  const certifications = [
    {
      title: 'Sleek and Swift: A Hands-on Tailwind and ShadCN Workshop',
      issuer: 'Holy Angel University Code Geeks',
      date: '2024',
      credentialId: null,
    },
    {
      title: 'Introduction to Graphic Design: Basics of UI/UX',
      issuer: 'Simplilearn',
      date: '2024',
      credentialId: '8826987',
    },
    {
      title: 'Design Thinking for Beginners',
      issuer: 'Simplilearn',
      date: '2024',
      credentialId: '8691600',
    },
    {
      title: 'CompTIA IT Fundamentals+ (ITF+) Certification',
      issuer: 'CompTIA',
      date: '2024',
      credentialId: null,
    },
  ];

  // Technical and Soft skills
  const technicalSkills = {
    'Frontend & Design': ['HTML', 'CSS', 'JavaScript', 'React', 'Angular', 'Vue', 'Tailwind', 'Bootstrap'],
    'Backend & Database': ['Node.js', 'PHP', 'SQL', 'MongoDB', 'JSON/Data Handling'],
    'Tools & Platforms': ['Figma', 'Canva', 'GitHub', 'WordPress', 'Git'],
  };

  const softSkills = [
    'Problem Solving',
    'Adaptability',
    'Team Collaboration',
    'Time Management',
    'Documentation Skills',
    'Leadership',
  ];

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resumePdf;
    link.download = 'Mikaella_Yamaguchi_Resume.pdf'; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="text-[#2B2A28] dark:text-[#F7F4EE]">
      <SEO 
        title="Resume - Education & Experience"
        description="View Mikaella Gabrielle S. Yamaguchi's resume including education, work experience, technical skills, and certifications. Download PDF resume."
        keywords="resume, cv, education, experience, web developer resume, skills, certifications"
      />
      
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-[#F7F4EE] to-white dark:from-[#0a0a0a] dark:to-[#1a1a1a]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              My <span className="bg-gradient-to-r from-[#4C7B7B] to-[#6E9A9A] bg-clip-text text-transparent">Resume</span>
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-[#4C7B7B] to-[#6E9A9A] rounded-full mx-auto mb-8" />
            <p className="text-xl text-[#7A756D] dark:text-[#B8B8B8] mb-8">
              Front End Web Developer | Passionate About Creating Amazing Digital Experiences
            </p>

            {/* Download Resume Button */}
            <motion.button
              onClick={handleDownload}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#4C7B7B] hover:bg-[#6E9A9A] text-white rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl"
            >
              <Download className="w-5 h-5" />
              Download PDF Resume
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Bar */}
      <section className="py-8 px-4 bg-white dark:bg-[#1a1a1a] border-y border-[#4C7B7B]/20">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center gap-2 text-[#7A756D] dark:text-[#B8B8B8]">
              <Mail className="w-4 h-4 text-[#4C7B7B]" />
              <a href="mailto:mikaellayamaguchi23@gmail.com" className="hover:text-[#4C7B7B] transition-colors">
                mikaellayamaguchi23@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-2 text-[#7A756D] dark:text-[#B8B8B8]">
              <MapPin className="w-4 h-4 text-[#4C7B7B]" />
              <span>San Fernando, Pampanga</span>
            </div>
            <div className="flex items-center gap-2 text-[#7A756D] dark:text-[#B8B8B8]">
              <Globe className="w-4 h-4 text-[#4C7B7B]" />
              <a href="/" className="hover:text-[#4C7B7B] transition-colors">
                Portfolio Home
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-[#4C7B7B] rounded-xl flex items-center justify-center shadow-lg">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold">Education</h2>
            </div>
          </motion.div>

          <div className="space-y-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white dark:bg-[#1a1a1a] p-8 rounded-2xl shadow-lg border-l-4 border-[#4C7B7B] hover:shadow-xl transition-shadow"
              >
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-bold mb-2">{edu.degree}</h3>
                    <p className="text-[#4C7B7B] dark:text-[#6E9A9A] font-semibold text-lg">{edu.school}</p>
                  </div>
                  <div className="text-left md:text-right">
                    <div className="flex items-center gap-2 text-[#7A756D] dark:text-[#B8B8B8] text-sm mb-1">
                      <Calendar className="w-4 h-4" />
                      {edu.period}
                    </div>
                    <div className="flex items-center gap-2 text-[#7A756D] dark:text-[#B8B8B8] text-sm">
                      <MapPin className="w-4 h-4" />
                      {edu.location}
                    </div>
                  </div>
                </div>
                {edu.description && <p className="text-[#7A756D] dark:text-[#B8B8B8] mb-2">{edu.description}</p>}
                {edu.gpa && <p className="text-sm font-semibold text-[#4C7B7B] dark:text-[#6E9A9A]">GPA: {edu.gpa}</p>}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 bg-[#F7F4EE] dark:bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Technical Skills</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#4C7B7B] to-[#6E9A9A] rounded-full" />
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {Object.entries(technicalSkills).map(([category, skillList], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white dark:bg-[#1a1a1a] p-8 rounded-2xl shadow-lg border border-[#4C7B7B]/10"
              >
                <h3 className="text-xl font-bold text-[#4C7B7B] dark:text-[#6E9A9A] mb-6 border-b border-[#4C7B7B]/10 pb-4">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {skillList.map((skill, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 bg-[#4C7B7B]/10 text-[#4C7B7B] dark:text-[#6E9A9A] rounded-xl text-sm font-bold"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Soft Skills Section */}
      <section className="py-20 px-4 bg-white dark:bg-[#1a1a1a]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Soft Skills</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#4C7B7B] to-[#6E9A9A] rounded-full" />
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {softSkills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1, type: "spring" }}
                whileHover={{ scale: 1.05 }}
                className="bg-[#F7F4EE] dark:bg-[#0a0a0a] p-6 rounded-2xl shadow-md border border-[#4C7B7B]/10 flex items-center justify-center text-center group"
              >
                <h3 className="font-bold text-[#2B2A28] dark:text-[#F7F4EE] group-hover:text-[#4C7B7B] dark:group-hover:text-[#6E9A9A] transition-colors">
                  {skill}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 px-4 bg-[#F7F4EE] dark:bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-[#4C7B7B] rounded-xl flex items-center justify-center shadow-lg">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold">Certifications & Achievements</h2>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-[#1a1a1a] p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-[#4C7B7B]/10"
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#4C7B7B] to-[#6E9A9A] rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                    <Award className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-xl mb-2 leading-tight">{cert.title}</h3>
                    <p className="text-sm font-semibold text-[#4C7B7B] dark:text-[#6E9A9A] mb-1">
                      {cert.issuer}
                    </p>
                    <p className="text-sm text-[#7A756D] dark:text-[#B8B8B8] mb-3">{cert.date}</p>
                    {cert.credentialId && (
                      <div className="inline-block px-3 py-1 bg-[#4C7B7B]/10 rounded-lg">
                        <p className="text-xs font-mono text-[#4C7B7B] dark:text-[#6E9A9A]">
                          ID: {cert.credentialId}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}