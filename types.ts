
export interface Project {
  id: number;
  name: string;
  client: string;
  role: string;
  domain: string;
  description: string;
  tools: string[];
  responsibilities: string[];
  highlights?: string;
}

export interface Skill {
  category: string;
  items: string[];
  icon: string;
}

export interface Award {
  title: string;
  organization: string;
  date: string;
  description: string;
}

export interface Message {
  role: 'user' | 'model';
  text: string;
}
