export interface Stat {
  value: number;
  prefix: string;
  label: string;
}

export interface Tool {
  name: string;
  desc: string;
}

export interface HighlightCard {
  theme: "rust" | "lime";
  title: string;
  blurb: string;
  href: string;
  cta: string;
}

export interface SiteLinks {
  linkedin: string;
  github: string;
  resume: string;
  twitter: string;
}

export interface Project {
  name: string;
  desc: string;
  img: string;
  stack: string[];
  link: string;
  projectLink: string;
}

export interface Experience {
  date: string;
  name: string;
  desc: string;
}

export interface Site {
  name: string;
  domain: string;
  url: string;
  email: string;
  seoTitle: string;
  seoDescription: string;
  jobTitle: string;
  knowsAbout: string[];
}

export type NavId = "home" | "projects" | "experience" | "tools" | "contact";

export interface NavItem {
  id: NavId;
  href: string;
  label: string;
}

export interface Hero {
  titleBright: string;
  titleFaint: string;
  sub: string;
}

export interface Profile {
  name: string;
  portraitAlt: string;
  roleBlurb: string;
}

export interface SectionMeta {
  title: string;
  lede: string;
}

export type SocialId = "github" | "linkedin" | "twitter" | "resume";

export interface Social {
  id: SocialId;
  label: string;
  shortLabel: string;
  href: string;
}

export interface Contact {
  titleTop: string;
  titleBottom: string;
  sub: string;
  email: string;
  footerBuiltWith: string;
}
