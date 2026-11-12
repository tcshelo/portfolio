import { Code2, Cpu, Terminal } from 'lucide-react';
import { 
  PDF_CONVERTER
} from './projectList';

// Estrutura fixa de dados vinculada aos tokens
export const PORTFOLIO_STRUCTURE = {
  personal: {
    name: "Heloisa",
    role: "Full Stack Engineer",
    badgeToken: 1010,
    socials: {
      github: "https://github.com/tcshelo",
      linkedin: "https://www.linkedin.com/in/tcshelo/",
      email: "mailto:tcs.heloisa@gmail.com"
    }
  },
  navLinks: [
    { href: '#about', token: 1000 },
    { href: '#skills', token: 1001 },
    { href: '#projects', token: 1002 },
    { href: '#contact', token: 1003 },
  ],
  aboutFeatures: [
    {
      icon: Code2,
      titleToken: 1021,
      descToken: 1022,
      iconColor: "text-purple-400",
      bgColor: "bg-purple-950/80",
      borderColor: "border-purple-500/30"
    },
    {
      icon: Cpu,
      titleToken: 1023,
      descToken: 1024,
      iconColor: "text-indigo-400",
      bgColor: "bg-indigo-950/80",
      borderColor: "border-indigo-500/30"
    },
    {
      icon: Terminal,
      titleToken: 1025,
      descToken: 1026,
      iconColor: "text-fuchsia-400",
      bgColor: "bg-fuchsia-950/80",
      borderColor: "border-fuchsia-500/30"
    }
  ],
  skillsList: [
    { name: 'React.js', levelToken: 1033, descToken: 1034, icon: '⚛️' },
    { name: 'JavaScript (ES6+)', levelToken: 1033, descToken: 1035, icon: '⚡' },
    { name: 'PHP', levelToken: 1033, descToken: 1036, icon: '🐘' },
    { name: 'HTML5 e CSS3', levelToken: 1033, descToken: 1037, icon: '🎨' },
    { name: 'Tailwind CSS', levelToken: 1033, descToken: 1038, icon: '🌊' },
    { name: 'REST APIs e Git', levelToken: 1033, descToken: 1039, icon: '🛠️' }
  ],
  contactChannels: [
    {
      id: "email",
      label: "E-mail",
      subtitleToken: 1093,
      href: "mailto:tcs.heloisa@gmail.com",
      isExternal: false
    },
    {
      id: "linkedin",
      label: "LinkedIn",
      subtitleToken: 1094,
      href: "https://www.linkedin.com/in/tcshelo/",
      isExternal: true
    },
    {
      id: "github",
      label: "GitHub",
      subtitleToken: 1095,
      href: "https://github.com/tcshelo",
      isExternal: true
    }
  ]
};

export const projectsList = [
  PDF_CONVERTER
];