
import { Project, Skill, Award } from './types';

export const RESUME_DATA = {
  name: "K J Nikhil",
  title: "Prompt Engineer & Automation Specialist",
  email: "nikhilkj098@gmail.com",
  mobile: "8008665008",
  location: "Bangalore, India",
  summary: "Results-driven professional with 4.5 years of experience in software testing and AI-driven automation. Specialized in Gemini AI, Prompt Engineering, and RAG systems to design intelligent, scalable automation solutions that enhance operational efficiency.",
  education: {
    degree: "B.E. in Electronics and Communication Engineering",
    college: "Saveetha Engineering College, Chennai",
    graduation: "2021",
    cgpa: "7.5"
  }
};

export const SKILLS: Skill[] = [
  {
    category: "AI & GenAI",
    icon: "fa-brain",
    items: ["Prompt Engineering", "Agentic AI Testing", "RAG Systems", "LLM Workflows", "Google AI Studio", "Data Validation"]
  },
  {
    category: "Automation Testing",
    icon: "fa-robot",
    items: ["Selenium WebDriver", "Python", "API Testing", "Pytest", "TestNG Framework", "Regression Testing"]
  },
  {
    category: "Tools & Platforms",
    icon: "fa-screwdriver-wrench",
    items: ["JIRA", "Buganizer", "Git", "SQL Server", "PyCharm", "Windows & Mac OS"]
  },
  {
    category: "Domains & Methods",
    icon: "fa-diagram-project",
    items: ["Telecom", "Technology", "Agile Methodology", "SDLC/STLC", "Manual Testing", "Requirement Analysis"]
  }
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    name: "Google (Gemini)",
    client: "Google",
    role: "Quality Engineering Analyst",
    domain: "Technology",
    description: "Gemini is a cutting-edge Google project focused on advancing technology solutions. The role involved automating test processes and ensuring product scalability and performance through rigorous testing.",
    tools: ["Selenium", "Python", "SQL", "Buganizer", "RAG", "Agentic AI", "Google AI Studio"],
    responsibilities: [
      "Designed and implemented automated test scripts using Selenium and Python, improving efficiency by 25%.",
      "Managed the full bug life cycle from reporting to closure using Buganizer.",
      "Conducted RAG and Agentic AI testing workflows to validate AI model outputs.",
      "Collaborated with BAs and Product Owners for requirement clarifications."
    ]
  },
  {
    id: 2,
    name: "BT (British Telecom)",
    client: "British Telecom",
    role: "QA Engineer",
    domain: "Telecom",
    description: "A leading telecom provider project focused on automating and manually testing web applications to support new features and system enhancements in the UK market.",
    tools: ["Python", "Pytest", "Selenium", "JIRA", "SQL"],
    responsibilities: [
      "Developed and maintained 24+ feature files for web automation using Selenium and Python, enhancing test coverage by 30%.",
      "Delivered 7+ client 'Show & Tell' presentations with a 95% acceptance rate.",
      "Conducted exploratory and regression testing, identifying critical defects.",
      "Maintained test scripts using TestNG framework and monitored daily scrum calls."
    ]
  }
];

export const AWARDS: Award[] = [
  {
    title: "ACE Award",
    organization: "Accenture",
    date: "Nov 2023",
    description: "Recognized for quality work on the Bard project."
  },
  {
    title: "Bright Beginner Award",
    organization: "UKI Group",
    date: "Feb 2022",
    description: "Awarded for rapid project adaptation."
  },
  {
    title: "Accenture Extra Miler Award",
    organization: "Accenture",
    date: "Ongoing",
    description: "Honored for high-quality software delivery."
  }
];
