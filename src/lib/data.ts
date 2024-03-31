type Image = {
  srcSet: string;
  src: string;
};

type ResponsiveImage = {
  mobile: Image;
  tablet: Image;
  desktop: Image;
};

export type Project = {
  slug: string;
  name: string;
  description: string;
  skills: string[];
  techStack: string[];
  background: string;
  heroImg: ResponsiveImage;
  portfolioImg: ResponsiveImage;
  previews: ResponsiveImage[];
  website: string;
};

export const PROJECTS: Project[] = [
  {
    slug: 'manage',
    name: 'Manage',
    website: 'https://manage-indol.vercel.app/',
    description:
      'This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the testimonial slider.',
    skills: ['Interaction Design', 'Front End Development'],
    techStack: ['HTML', 'CSS', 'JS'],
    background:
      'This project was a front-end  challenge from Frontend Mentor. It’s a platform that enables you to practice building websites to a design and project brief. Each challenge includes mobile and desktop designs to show how the website should look at different screen sizes. Creating these projects has helped me refine my workflow and solve real-world coding problems. I’ve learned something new with each project, helping me to improve and adapt my style.',
    heroImg: {
      mobile: {
        srcSet:
          '/images/detail/mobile/image-manage-hero.jpg, /images/detail/mobile/image-manage-hero@2x.jpg 2x',
        src: '/images/detail/mobile/image-manage-hero.jpg',
      },
      tablet: {
        srcSet:
          '/images/detail/tablet/image-manage-hero.jpg, /images/detail/tablet/image-manage-hero@2x.jpg 2x',
        src: '/images/detail/tablet/image-manage-hero.jpg',
      },
      desktop: {
        srcSet:
          '/images/detail/desktop/image-manage-hero.jpg, /images/detail/desktop/image-manage-hero@2x.jpg 2x',
        src: '/images/detail/desktop/image-manage-hero.jpg',
      },
    },
    portfolioImg: {
      mobile: {
        srcSet:
          '/images/portfolio/mobile/image-portfolio-manage.jpg, /images/portfolio/mobile/image-portfolio-manage@2x.jpg 2x',
        src: '/images/portfolio/mobile/image-portfolio-manage.jpg',
      },
      tablet: {
        srcSet:
          '/images/portfolio/tablet/image-portfolio-manage.jpg, /images/portfolio/tablet/image-portfolio-manage@2x.jpg 2x',
        src: '/images/portfolio/tablet/image-portfolio-manage.jpg',
      },
      desktop: {
        srcSet:
          '/images/portfolio/desktop/image-portfolio-manage.jpg, /images/portfolio/desktop/image-portfolio-manage@2x.jpg 2x',
        src: '/images/portfolio/desktop/image-portfolio-manage.jpg',
      },
    },
    previews: [
      {
        mobile: {
          srcSet:
            '/images/detail/mobile/image-manage-preview-1.jpg, /images/detail/mobile/image-manage-preview-1@2x.jpg 2x',
          src: '/images/detail/mobile/image-manage-preview-1.jpg',
        },
        tablet: {
          srcSet:
            '/images/detail/tablet/image-manage-preview-1.jpg, /images/detail/tablet/image-manage-preview-1@2x.jpg 2x',
          src: '/images/detail/tablet/image-manage-preview-1.jpg',
        },
        desktop: {
          srcSet:
            '/images/detail/desktop/image-manage-preview-1.jpg, /images/detail/desktop/image-manage-preview-1@2x.jpg 2x',
          src: '/images/detail/desktop/image-manage-preview-1.jpg',
        },
      },
      {
        mobile: {
          srcSet:
            '/images/detail/mobile/image-manage-preview-2.jpg, /images/detail/mobile/image-manage-preview-2@2x.jpg 2x',
          src: '/images/detail/mobile/image-manage-preview-2.jpg',
        },
        tablet: {
          srcSet:
            '/images/detail/tablet/image-manage-preview-2.jpg, /images/detail/tablet/image-manage-preview-2@2x.jpg 2x',
          src: '/images/detail/tablet/image-manage-preview-2.jpg',
        },
        desktop: {
          srcSet:
            '/images/detail/desktop/image-manage-preview-2.jpg, /images/detail/desktop/image-manage-preview-2@2x.jpg 2x',
          src: '/images/detail/desktop/image-manage-preview-2.jpg',
        },
      },
    ],
  },
  {
    slug: 'bookmark',
    name: 'Bookmark',
    website: 'https://bookmark-landing-page-theta-liard.vercel.app/',
    description:
      'This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the features section.',
    skills: ['Interaction Design', 'Front End Development'],
    techStack: ['HTML', 'CSS', 'JS'],
    background:
      'This project was a front-end  challenge from Frontend Mentor. It’s a platform that enables you to practice building websites to a design and project brief. Each challenge includes mobile and desktop designs to show how the website should look at different screen sizes. Creating these projects has helped me refine my workflow and solve real-world coding problems. I’ve learned something new with each project, helping me to improve and adapt my style.',
    heroImg: {
      mobile: {
        srcSet:
          '/images/detail/mobile/image-bookmark-hero.jpg, /images/detail/mobile/image-bookmark-hero@2x.jpg 2x',
        src: '/images/detail/mobile/image-bookmark-hero.jpg',
      },
      tablet: {
        srcSet:
          '/images/detail/tablet/image-bookmark-hero.jpg, /images/detail/tablet/image-bookmark-hero@2x.jpg 2x',
        src: '/images/detail/tablet/image-bookmark-hero.jpg',
      },
      desktop: {
        srcSet:
          '/images/detail/desktop/image-bookmark-hero.jpg, /images/detail/desktop/image-bookmark-hero@2x.jpg 2x',
        src: '/images/detail/desktop/image-bookmark-hero.jpg',
      },
    },
    portfolioImg: {
      mobile: {
        srcSet:
          '/images/portfolio/mobile/image-portfolio-bookmark.jpg, /images/portfolio/mobile/image-portfolio-bookmark@2x.jpg 2x',
        src: '/images/portfolio/mobile/image-portfolio-bookmark.jpg',
      },
      tablet: {
        srcSet:
          '/images/portfolio/tablet/image-portfolio-bookmark.jpg, /images/portfolio/tablet/image-portfolio-bookmark@2x.jpg 2x',
        src: '/images/portfolio/tablet/image-portfolio-bookmark.jpg',
      },
      desktop: {
        srcSet:
          '/images/portfolio/desktop/image-portfolio-bookmark.jpg, /images/portfolio/desktop/image-portfolio-bookmark@2x.jpg 2x',
        src: '/images/portfolio/desktop/image-portfolio-bookmark.jpg',
      },
    },
    previews: [
      {
        mobile: {
          srcSet:
            '/images/detail/mobile/image-bookmark-preview-1.jpg, /images/detail/mobile/image-bookmark-preview-1@2x.jpg 2x',
          src: '/images/detail/mobile/image-bookmark-preview-1.jpg',
        },
        tablet: {
          srcSet:
            '/images/detail/tablet/image-bookmark-preview-1.jpg, /images/detail/tablet/image-bookmark-preview-1@2x.jpg 2x',
          src: '/images/detail/tablet/image-bookmark-preview-1.jpg',
        },
        desktop: {
          srcSet:
            '/images/detail/desktop/image-bookmark-preview-1.jpg, /images/detail/desktop/image-bookmark-preview-1@2x.jpg 2x',
          src: '/images/detail/desktop/image-bookmark-preview-1.jpg',
        },
      },
      {
        mobile: {
          srcSet:
            '/images/detail/mobile/image-bookmark-preview-2.jpg, /images/detail/mobile/image-bookmark-preview-2@2x.jpg 2x',
          src: '/images/detail/mobile/image-bookmark-preview-2.jpg',
        },
        tablet: {
          srcSet:
            '/images/detail/tablet/image-bookmark-preview-2.jpg, /images/detail/tablet/image-bookmark-preview-2@2x.jpg 2x',
          src: '/images/detail/tablet/image-bookmark-preview-2.jpg',
        },
        desktop: {
          srcSet:
            '/images/detail/desktop/image-bookmark-preview-2.jpg, /images/detail/desktop/image-bookmark-preview-2@2x.jpg 2x',
          src: '/images/detail/desktop/image-bookmark-preview-2.jpg',
        },
      },
    ],
  },
  {
    slug: 'insure',
    name: 'Insure',
    website: '/',
    description:
      'This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the features section.',
    skills: ['Interaction Design', 'Front End Development'],
    techStack: ['HTML', 'CSS', 'JS'],
    background:
      'This project was a front-end  challenge from Frontend Mentor. It’s a platform that enables you to practice building websites to a design and project brief. Each challenge includes mobile and desktop designs to show how the website should look at different screen sizes. Creating these projects has helped me refine my workflow and solve real-world coding problems. I’ve learned something new with each project, helping me to improve and adapt my style.',
    heroImg: {
      mobile: {
        srcSet:
          '/images/detail/mobile/image-insure-hero.jpg, /images/detail/mobile/image-insure-hero@2x.jpg 2x',
        src: '/images/detail/mobile/image-insure-hero.jpg',
      },
      tablet: {
        srcSet:
          '/images/detail/tablet/image-insure-hero.jpg, /images/detail/tablet/image-insure-hero@2x.jpg 2x',
        src: '/images/detail/tablet/image-insure-hero.jpg',
      },
      desktop: {
        srcSet:
          '/images/detail/desktop/image-insure-hero.jpg, /images/detail/desktop/image-insure-hero@2x.jpg 2x',
        src: '/images/detail/desktop/image-insure-hero.jpg',
      },
    },
    portfolioImg: {
      mobile: {
        srcSet:
          '/images/portfolio/mobile/image-portfolio-insure.jpg, /images/portfolio/mobile/image-portfolio-insure@2x.jpg 2x',
        src: '/images/portfolio/mobile/image-portfolio-insure.jpg',
      },
      tablet: {
        srcSet:
          '/images/portfolio/tablet/image-portfolio-insure.jpg, /images/portfolio/tablet/image-portfolio-insure@2x.jpg 2x',
        src: '/images/portfolio/tablet/image-portfolio-insure.jpg',
      },
      desktop: {
        srcSet:
          '/images/portfolio/desktop/image-portfolio-insure.jpg, /images/portfolio/desktop/image-portfolio-insure@2x.jpg 2x',
        src: '/images/portfolio/desktop/image-portfolio-insure.jpg',
      },
    },
    previews: [
      {
        mobile: {
          srcSet:
            '/images/detail/mobile/image-insure-preview-1.jpg, /images/detail/mobile/image-insure-preview-1@2x.jpg 2x',
          src: '/images/detail/mobile/image-insure-preview-1.jpg',
        },
        tablet: {
          srcSet:
            '/images/detail/tablet/image-insure-preview-1.jpg, /images/detail/tablet/image-insure-preview-1@2x.jpg 2x',
          src: '/images/detail/tablet/image-insure-preview-1.jpg',
        },
        desktop: {
          srcSet:
            '/images/detail/desktop/image-insure-preview-1.jpg, /images/detail/desktop/image-insure-preview-1@2x.jpg 2x',
          src: '/images/detail/desktop/image-insure-preview-1.jpg',
        },
      },
      {
        mobile: {
          srcSet:
            '/images/detail/mobile/image-insure-preview-2.jpg, /images/detail/mobile/image-insure-preview-2@2x.jpg 2x',
          src: '/images/detail/mobile/image-insure-preview-2.jpg',
        },
        tablet: {
          srcSet:
            '/images/detail/tablet/image-insure-preview-2.jpg, /images/detail/tablet/image-insure-preview-2@2x.jpg 2x',
          src: '/images/detail/tablet/image-insure-preview-2.jpg',
        },
        desktop: {
          srcSet:
            '/images/detail/desktop/image-insure-preview-2.jpg, /images/detail/desktop/image-insure-preview-2@2x.jpg 2x',
          src: '/images/detail/desktop/image-insure-preview-2.jpg',
        },
      },
    ],
  },
  {
    slug: 'fylo',
    name: 'Fylo',
    website: '/',
    description:
      'This project was built in pure HTML and CSS. I had mobile and desktop designs to work to and built it so that it was fully-responsive. I took a mobile-first approach and used modern CSS like Flexbox and Grid for layout purposes.',
    skills: ['Interaction Design', 'Front End Development'],
    techStack: ['HTML', 'CSS'],
    background:
      'This project was a front-end  challenge from Frontend Mentor. It’s a platform that enables you to practice building websites to a design and project brief. Each challenge includes mobile and desktop designs to show how the website should look at different screen sizes. Creating these projects has helped me refine my workflow and solve real-world coding problems. I’ve learned something new with each project, helping me to improve and adapt my style.',
    heroImg: {
      mobile: {
        srcSet:
          '/images/detail/mobile/image-fylo-hero.jpg, /images/detail/mobile/image-fylo-hero@2x.jpg 2x',
        src: '/images/detail/mobile/image-fylo-hero.jpg',
      },
      tablet: {
        srcSet:
          '/images/detail/tablet/image-fylo-hero.jpg, /images/detail/tablet/image-fylo-hero@2x.jpg 2x',
        src: '/images/detail/tablet/image-fylo-hero.jpg',
      },
      desktop: {
        srcSet:
          '/images/detail/desktop/image-fylo-hero.jpg, /images/detail/desktop/image-fylo-hero@2x.jpg 2x',
        src: '/images/detail/desktop/image-fylo-hero.jpg',
      },
    },
    portfolioImg: {
      mobile: {
        srcSet:
          '/images/portfolio/mobile/image-portfolio-fylo.jpg, /images/portfolio/mobile/image-portfolio-fylo@2x.jpg 2x',
        src: '/images/portfolio/mobile/image-portfolio-fylo.jpg',
      },
      tablet: {
        srcSet:
          '/images/portfolio/tablet/image-portfolio-fylo.jpg, /images/portfolio/tablet/image-portfolio-fylo@2x.jpg 2x',
        src: '/images/portfolio/tablet/image-portfolio-fylo.jpg',
      },
      desktop: {
        srcSet:
          '/images/portfolio/desktop/image-portfolio-fylo.jpg, /images/portfolio/desktop/image-portfolio-fylo@2x.jpg 2x',
        src: '/images/portfolio/desktop/image-portfolio-fylo.jpg',
      },
    },
    previews: [
      {
        mobile: {
          srcSet:
            '/images/detail/mobile/image-fylo-preview-1.jpg, /images/detail/mobile/image-fylo-preview-1@2x.jpg 2x',
          src: '/images/detail/mobile/image-fylo-preview-1.jpg',
        },
        tablet: {
          srcSet:
            '/images/detail/tablet/image-fylo-preview-1.jpg, /images/detail/tablet/image-fylo-preview-1@2x.jpg 2x',
          src: '/images/detail/tablet/image-fylo-preview-1.jpg',
        },
        desktop: {
          srcSet:
            '/images/detail/desktop/image-fylo-preview-1.jpg, /images/detail/desktop/image-fylo-preview-1@2x.jpg 2x',
          src: '/images/detail/desktop/image-fylo-preview-1.jpg',
        },
      },
      {
        mobile: {
          srcSet:
            '/images/detail/mobile/image-fylo-preview-2.jpg, /images/detail/mobile/image-fylo-preview-2@2x.jpg 2x',
          src: '/images/detail/mobile/image-fylo-preview-2.jpg',
        },
        tablet: {
          srcSet:
            '/images/detail/tablet/image-fylo-preview-2.jpg, /images/detail/tablet/image-fylo-preview-2@2x.jpg 2x',
          src: '/images/detail/tablet/image-fylo-preview-2.jpg',
        },
        desktop: {
          srcSet:
            '/images/detail/desktop/image-fylo-preview-2.jpg, /images/detail/desktop/image-fylo-preview-2@2x.jpg 2x',
          src: '/images/detail/desktop/image-fylo-preview-2.jpg',
        },
      },
    ],
  },
];
