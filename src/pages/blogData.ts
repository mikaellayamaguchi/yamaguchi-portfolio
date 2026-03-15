import wdjourn from '../assets/img/blog-web-developer-journey2.png';

export const blogArticles = {
  "journey": {
    title: "From Curiosity to Code: My Journey as a Web Developer",
    category: "Personal Growth",
    date: "Oct 15, 2024",
    readTime: "3 min read",
    image: wdjourn,
    content: [
      { type: 'paragraph-first', 
        text: 'My interest in web development started from simple curiosity. Whenever I came across beautifully designed websites, I would often wonder how everything worked behind the scenes—how the layouts were structured, how animations appeared smoothly, and how the entire experience felt so interactive.' },
      { type: 'paragraph', 
        text: 'At first, I didn’t know anything about the technologies behind it. I only knew that there had to be some kind of structure and logic that allowed designers and developers to turn ideas into real websites. The more websites I explored, the more curious I became about how colors, layouts, and interactive elements were created.' },
      { type: 'h2', 
        text: 'The Learning Curve' },
      { type: 'paragraph', 
        text: 'Eventually, I started learning the basics of web development, beginning with HTML and CSS. Understanding how a webpage was structured and styled felt like unlocking the first layer of that curiosity. However, moving into JavaScript introduced a completely different level of problem-solving, where logic and functionality played a much bigger role.' },
      { type: 'quote', 
        text: 'Web development is where design and logic come together to create meaningful digital experiences.' },
      { type: 'paragraph', 
        text: 'Like many beginners, I faced several challenges along the way. There were times when simple layout issues or small syntax errors took hours to fix. But every solved problem helped me understand the process better and motivated me to keep improving my skills.' },
      { type: 'h2', 
        text: 'Looking Forward' },
      { type: 'paragraph', 
        text: 'Today, as an Information Technology student at Holy Angel University, I continue to focus on developing my frontend skills and building responsive user interfaces. What started as simple curiosity about how websites were designed eventually grew into a passion for creating digital experiences.' },
      { type: 'paragraph', 
        text: 'There is still so much to learn, but that curiosity that started it all continues to drive me to explore new technologies and improve as a developer.' },
    ]
  },
  "responsive-design": {
  title: "Essential Tips for Pixel-Perfect Responsive Design",
  category: "Tutorial",
  date: "Nov 28, 2024",
  readTime: "4 min read",
  image: "https://www.webfx.com/wp-content/uploads/2021/10/iStock-612224522.jpg",
  content: [
    { 
      type: 'paragraph-first', 
      text: 'One of the biggest lessons I learned while building websites is that “pixel-perfect” design doesn’t mean forcing everything to look identical on every screen. In reality, it means making sure your layout adapts smoothly whether someone is viewing it on a large desktop monitor or a small mobile phone.' 
    },
    { 
      type: 'paragraph', 
      text: 'When I first started learning frontend development, I relied heavily on media queries to fix layout issues. If something broke on mobile, I would just add another breakpoint. Over time, I realized there were better ways to approach responsive design using modern CSS tools.' 
    },
    { 
      type: 'h2', 
      text: '1. Using Flexbox and Grid the Right Way' 
    },
    { 
      type: 'paragraph', 
      text: 'Flexbox and CSS Grid quickly became two of my favorite layout tools. Flexbox works really well when aligning elements in a single row or column, like navigation menus or buttons. CSS Grid, on the other hand, is great for larger layouts where you need both rows and columns.' 
    },
    { 
      type: 'paragraph', 
      text: 'One trick I use a lot for responsive card layouts is the auto-fit grid pattern. With a single line like grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));, the layout automatically adjusts the number of columns depending on the screen size. It saves a lot of time and reduces the need for extra media queries.' 
    },
    { 
      type: 'h2', 
      text: '2. Making Typography Responsive' 
    },
    { 
      type: 'paragraph', 
      text: 'Another thing I learned is that fixed pixel sizes for text can cause problems across devices. A font size that looks great on a desktop can feel huge on a phone. Instead of manually adjusting text sizes everywhere, I started using the CSS clamp() function to make typography scale more naturally with the screen size.' 
    },
    { 
      type: 'quote', 
      text: 'Good responsive design isn’t about forcing layouts to fit screens. It’s about letting the layout adapt naturally.' 
    },
    { 
      type: 'paragraph', 
      text: 'Responsive design became much easier once I started focusing on flexible layouts and relative units like rem, vh, and vw. Instead of constantly fixing layouts, the design begins to adapt on its own. It’s a small shift in mindset, but it makes building modern interfaces much more efficient.' 
    }
  ]
}
};

export type BlogArticleId = keyof typeof blogArticles;