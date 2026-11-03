import hauEcoquestImg1 from './assets/img/project-hau-ecoquest1.webp';
import hauEcoquestImg2 from './assets/img/project-hau-ecoquest2.webp';
import hauEcoquestImg3 from './assets/img/project-hau-ecoquest3.webp';
import hauEcoquestImg4 from './assets/img/project-hau-ecoquest4.webp';
import wellnessApparelImg1 from './assets/img/project-the-wellness-apparel1.webp';
import wellnessApparelImg2 from './assets/img/project-the-wellness-apparel2.webp';
import wellnessApparelImg3 from './assets/img/project-the-wellness-apparel3.webp';
import chanelCloneImg1 from './assets/img/project-chanel-clone-website1.webp';
import chanelCloneImg2 from './assets/img/project-chanel-clone-website-2.webp';
import chanelCloneImg3 from './assets/img/project-chanel-clone-website-3.webp';
import chanelCloneImg4 from './assets/img/project-chanel-clone-website-4.webp';
import skyfestImg1 from './assets/img/project-skyfest1.webp';
import skyfestImg2 from './assets/img/project-skyfest2.webp';
import danonos1 from './assets/img/project-danonos-doughnuts-and-brownies1.webp';
import danonos2 from './assets/img/project-danonos-doughnuts-and-brownies2.webp';
import danonos3 from './assets/img/project-danonos-doughnuts-and-brownies3.webp';
import blogRWDImg from './assets/img/blog-responsive-web-design-image.webp';
import wdJourney from './assets/img/blog-web-developer-journey.webp';

export const EMAIL = 'mikaellayamaguchi23@gmail.com';
export const LINKEDIN = 'https://www.linkedin.com/in/mika-yamaguchi-053532350/';
export const GITHUB = 'https://github.com/mikaellayamaguchi';
export const LOCATION = 'San Fernando, Pampanga';

export const services = [
  'Front-End Development',
  'Responsive Interfaces',
  'UI / UX Design',
  'WordPress & CMS',
];

export const projects = [
  {
    title: 'Skyfest',
    role: 'Front End Developer',
    description: 'A debut multi-page project developed as an introduction to front-end engineering. Created a responsive event platform for a balloon festival featuring a custom JavaScript-driven modal gallery and a dynamic schedule grid. Focused on mastering DOM manipulation, mobile-first CSS layouts, and cross-browser deployment using GitHub Pages.',
    images: [skyfestImg1, skyfestImg2],
    tags: ['HTML5', 'CSS3', 'JavaScript', 'GitHub Pages'],
    demoLink: 'https://mikaellayamaguchi.github.io/skyfest/index.html',
    githubLink: 'https://github.com/mikaellayamaguchi/skyfest',
  },
  {
    title: 'HAU Ecoquest',
    role: 'Front End Developer',
    description: 'Engineered a gamified web app with 10+ user profiles, achievements, and a community hub. Integrated MERN-stack for quest tracking and admin management for multiple users.',
    images: [hauEcoquestImg1, hauEcoquestImg2, hauEcoquestImg3, hauEcoquestImg4],
    tags: ['React', 'Node.js', 'MongoDB', 'Express'],
    demoLink: 'https://hauecoquest.vercel.app',
    githubLink: 'https://github.com/Josh-Aguiluz/6WCSERVER-Final-Project',
  },
  {
    title: 'The Wellness Apparel',
    role: 'Front End Developer',
    description: 'Developed an e-commerce site with product management and inventory tracking for 14 items. Optimized responsive design and user experience for all 14 product displays.',
    images: [wellnessApparelImg1, wellnessApparelImg2, wellnessApparelImg3],
    tags: ['PHP', 'MySQL', 'Bootstrap'],
    demoLink: 'http://the-wellness-apparel.onlinewebshop.net',
    githubLink: 'https://github.com/gabewebd/the-wellness-apparel',
  },
  {
    title: 'Chanel Website Clone',
    role: 'Front End Developer',
    description: 'Created a replica of the Chanel website with product displays, navigation, and home page layout. Focused on responsive design and translating real-world UI into functional frontend code.',
    images: [chanelCloneImg1, chanelCloneImg2, chanelCloneImg3, chanelCloneImg4],
    tags: ['HTML', 'CSS', 'JavaScript'],
    demoLink: 'https://prelim-project-thefourwhoadore.netlify.app/home',
    githubLink: 'https://github.com/gabewebd/6AWEB-TheFourWhoAdore',
  },
  {
    title: "Danono's Doughnuts and Brownies",
    role: 'Front End Developer',
    description: 'Built Danono’s website showcasing doughnuts and signature refreshers. Focused on responsive design, product display layout, and translating the café’s vibrant branding into an interactive, user-friendly frontend experience.',
    images: [danonos1, danonos2, danonos3],
    tags: ['PHP', 'CSS'],
    demoLink: 'https://danonos.com',
    githubLink: 'https://github.com/gabewebd/WSEA',
  },
];

export const blogPosts = [
  {
    title: 'From Curiosity to Code: My Journey as a Web Developer',
    category: 'Personal Growth',
    date: 'Oct 15, 2024',
    readTime: '3 min read',
    excerpt: 'How my fascination with beautiful websites turned into a passion for front-end development, and the lessons I learned while building my first React projects.',
    image: wdJourney,
    link: '/blog/journey',
  },
  {
    title: 'Essential Tips for Pixel-Perfect Responsive Design',
    category: 'Tutorial',
    date: 'Nov 28, 2024',
    readTime: '4 min read',
    excerpt: 'Mastering fluid layouts isn’t just about media queries. Discover the key principles of CSS Grid and Flexbox to make your UI look flawless on any screen.',
    image: blogRWDImg,
    link: '/blog/responsive-design',
  },
];

export const certifications: { title: string; issuer: string; year: string; code?: string }[] = [
  { title: 'Sleek and Swift: A Hands-on Tailwind and ShadCN Workshop', issuer: 'Holy Angel University Code Geeks', year: '2024' },
  { title: 'Introduction to Graphic Design: Basics of UI/UX', issuer: 'Simplilearn', year: '2024', code: '8826987' },
  { title: 'Design Thinking for Beginners', issuer: 'Simplilearn', year: '2024', code: '8691600' },
  { title: 'CompTIA IT Fundamentals+ (ITF+) Certification', issuer: 'CompTIA', year: '2024' },
  { title: 'AWS Academy Graduate - Cloud Foundations - Training Badge', issuer: 'Amazon Web Services Training and Certification', year: '2026' },
  { title: 'JavaScript Essentials 1', issuer: 'Cisco', year: '2024' },
  { title: 'JavaScript Essentials 2', issuer: 'Cisco', year: '2026' },
  { title: 'HTML Fundamentals', issuer: 'FreeAcademy.ai', year: '2026' },
];

export const skillGroups: Record<string, string[]> = {
  'Frontend & Design': ['HTML5', 'CSS3', 'JavaScript', 'React', 'Angular', 'Vue', 'Tailwind CSS', 'Bootstrap', 'Responsive Design'],
  'Backend & Database': ['Node.js', 'Express', 'PHP', 'REST APIs', 'MySQL', 'MongoDB'],
  'Tools & Platforms': ['Git & GitHub', 'Figma', 'Canva', 'WordPress'],
};

export const softSkills = [
  'Problem Solving',
  'Adaptability',
  'Team Collaboration',
  'Time Management',
  'Documentation Skills',
  'Leadership',
];

export const education = [
  {
    degree: 'Bachelor of Science in Information Technology Specializing in Web Development',
    school: 'Holy Angel University',
    level: 'Tertiary',
    period: '2022 - Present',
    description: 'Specialization in Web Development and Modern Technologies',
  },
  {
    degree: 'Secondary Education',
    school: 'Holy Angel University',
    level: 'Secondary',
    period: '2016 - 2022',
  },
  {
    degree: 'Primary Education',
    school: 'Achievers Special Education Center',
    level: 'Primary',
    period: '2010 - 2016',
  },
];
