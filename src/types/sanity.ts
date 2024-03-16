import { Image } from "sanity";

interface SanityMeta {
  _type: string;
  _id: string;
  _rev: string;
  _createdAt: Date;
  _updatedAt: Date;
}

interface Quote {
  _type: string;
  quote: string;
  author: string;
}

export interface Block {
  _key: string;
  _type: "block";
  style: "normal" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children: {
    text: string;
  }[];
  markDefs: any[];
  listItem?: "bullet" | "number";
  level?: number;
}

export interface HomePage extends SanityMeta {
  title: string;
  some: string[];
  description: string;
  video: string;
  quote: Quote;
  image: Image;
}

export interface AboutPage extends SanityMeta {
  title: string;
  image: Image;
  content_p1: Block[];
  quote: Quote;
  video: string;
  description: string;
  content_p2: Block[];
}

export interface SortableItem extends SanityMeta {
  sortOrder: number;
}

export interface ContactPerson extends SortableItem {
  position: string;
  email: string;
  image: Image;
  phone: string;
  name: string;
}

interface EventInformationApply {
  title: string;
  description: string;
  date: Date;
  location: string;
  link?: string;
}

export interface ApplyPage extends SanityMeta {
  video: string;
  image: Image;
  information: EventInformationApply[];
  video_mobile: string;
  title: string;
  content: Block[];
}

interface Course {
  title: string;
  url: string;
}

interface Semester {
  title: string;
  description: Block[];
  courses: Course[];
}
export interface ProgramStructurePage extends SanityMeta {
  quote: Quote;
  semesters: Semester[];
  title: string;
  content: Block[];
}

export interface CernAndBostonPage extends SanityMeta {
  video: string;
  cernImage: Image;
  cernContent: Block[];
  bostonContent: Block[];
  title: string;
  bostonImage: Image;
}

export interface AlumniOrganizationPage extends SanityMeta {
  video: string;
  content: Block[];
  image: Image;
}

export interface FacultyMember extends SortableItem {
  name: string;
  title: string;
  image: Image;
  bio: Block[];
  sortOrder: number;
}

export interface Notification extends SanityMeta {
  content: Block[];
  link: string;
  title: string;
}

export interface Startup {
  name: string;
  description?: Block[];
  url?: string;
  logo: Image;
  linkedin?: string;
  mail?: string;
  isInHouse: boolean;
}

export interface Student {
  _type: string;
  name: string;
  description: string;
  linkedin: string | null;
  current: boolean;
  image: Image;
  year: number;
}

export interface IdeaPage extends SanityMeta {
  title: string;
  image: Image;
  contentp1: Block[];
  video: string;
  commercializations: string[];
  contentp2: Block[];
  contact: ContactPerson;
}
