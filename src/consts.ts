import type { Site, Page, Links, Socials } from '@types'

// Global
export const SITE: Site = {
  TITLE: 'AGI OS',
  DESCRIPTION: 'Democratizing AI: AGI OS - Open, Powerful, For Everyone',
  AUTHOR: 'Andraž Kos',
}

// Work Page
export const WORK: Page = {
  TITLE: 'Work',
  DESCRIPTION: 'Places I have worked.',
}

// Blog Page
export const BLOG: Page = {
  TITLE: 'Blog',
  DESCRIPTION: 'Writing on topics I am passionate about.',
}

// Projects Page
export const PROJECTS: Page = {
  TITLE: 'Projects',
  DESCRIPTION: 'Recent projects I have worked on.',
}

// Search Page
export const SEARCH: Page = {
  TITLE: 'Search',
  DESCRIPTION: 'Search all posts and projects by keyword.',
}

// Links
export const LINKS: Links = [
  {
    TEXT: 'Home',
    HREF: '/',
  },
  {
    TEXT: 'Start',
    HREF: '/start',
  },
  {
    TEXT: 'Blog',
    HREF: '/blog',
  },
  {
    TEXT: 'Blueprints',
    HREF: '/blueprints',
  },
  {
    TEXT: 'Community',
    HREF: '/community',
  },
  {
    TEXT: 'Architecture',
    HREF: '/architecture',
  },
]

// Socials
export const SOCIALS: Socials = [
  {
    NAME: 'Github',
    ICON: 'github',
    TEXT: 'agi-os',
    HREF: 'https://github.com/agi-os',
  },
]
