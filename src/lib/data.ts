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
  techStack: string[];
  background: string;
  hero: ResponsiveImage;
  previews: ResponsiveImage[];
};

export const PROJECTS: Project[] = [
  {
    slug: 'manage',
    name: 'Manage',
    description:
      'This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the testimonial slider.',
    techStack: [
      'Interaction Design',
      'Front End Development',
      'HTML',
      'CSS',
      'JS',
    ],
    background:
      'This project was a front-end  challenge from Frontend Mentor. It’s a platform that enables you to practice building websites to a design and project brief. Each challenge includes mobile and desktop designs to show how the website should look at different screen sizes. Creating these projects has helped me refine my workflow and solve real-world coding problems. I’ve learned something new with each project, helping me to improve and adapt my style.',
    hero: {
      mobile: {
        srcSet:
          '/images/detail/mobile/image-manage-hero.jpg, /images/detail/mobil/image-manage-hero@2x.jpg 2x',
        src: '/images/detail/mobile/image-manage-hero.jpg',
      },
      tablet: {
        srcSet:
          '/images/detail/mobile/image-manage-hero.jpg, /images/detail/mobil/image-manage-hero@2x.jpg 2x',
        src: '/images/detail/mobile/image-manage-hero.jpg',
      },
      desktop: {
        srcSet:
          '/images/detail/mobile/image-manage-hero.jpg, /images/detail/mobil/image-manage-hero@2x.jpg 2x',
        src: '/images/detail/mobile/image-manage-hero.jpg',
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
            '/images/detail/mobile/image-manage-preview-1.jpg, /images/detail/mobile/image-manage-preview-1@2x.jpg 2x',
          src: '/images/detail/mobile/image-manage-preview-1.jpg',
        },
        desktop: {
          srcSet:
            '/images/detail/mobile/image-manage-preview-1.jpg, /images/detail/mobile/image-manage-preview-1@2x.jpg 2x',
          src: '/images/detail/mobile/image-manage-preview-1.jpg',
        },
      },
    ],
  },
  {
    slug: 'bookmark',
    name: 'Bookmark',
    description:
      'This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the features section.',
    techStack: [
      'Interaction Design',
      'Front End Development',
      'HTML',
      'CSS',
      'JS',
    ],
    background:
      'This project was a front-end  challenge from Frontend Mentor. It’s a platform that enables you to practice building websites to a design and project brief. Each challenge includes mobile and desktop designs to show how the website should look at different screen sizes. Creating these projects has helped me refine my workflow and solve real-world coding problems. I’ve learned something new with each project, helping me to improve and adapt my style.',
    hero: {
      mobile: {
        srcSet:
          '/images/detail/mobile/image-bookmark-hero.jpg, /images/detail/mobil/image-bookmark-hero@2x.jpg 2x',
        src: '/images/detail/mobile/image-bookmark-hero.jpg',
      },
      tablet: {
        srcSet:
          '/images/detail/mobile/image-bookmark-hero.jpg, /images/detail/mobil/image-bookmark-hero@2x.jpg 2x',
        src: '/images/detail/mobile/image-bookmark-hero.jpg',
      },
      desktop: {
        srcSet:
          '/images/detail/mobile/image-bookmark-hero.jpg, /images/detail/mobil/image-bookmark-hero@2x.jpg 2x',
        src: '/images/detail/mobile/image-bookmark-hero.jpg',
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
            '/images/detail/mobile/image-bookmark-preview-1.jpg, /images/detail/mobile/image-bookmark-preview-1@2x.jpg 2x',
          src: '/images/detail/mobile/image-bookmark-preview-1.jpg',
        },
        desktop: {
          srcSet:
            '/images/detail/mobile/image-bookmark-preview-1.jpg, /images/detail/mobile/image-bookmark-preview-1@2x.jpg 2x',
          src: '/images/detail/mobile/image-bookmark-preview-1.jpg',
        },
      },
    ],
  },
  {
    slug: 'insure',
    name: 'Insure',
    description:
      'This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the features section.',
    techStack: [
      'Interaction Design',
      'Front End Development',
      'HTML',
      'CSS',
      'JS',
    ],
    background:
      'This project was a front-end  challenge from Frontend Mentor. It’s a platform that enables you to practice building websites to a design and project brief. Each challenge includes mobile and desktop designs to show how the website should look at different screen sizes. Creating these projects has helped me refine my workflow and solve real-world coding problems. I’ve learned something new with each project, helping me to improve and adapt my style.',
    hero: {
      mobile: {
        srcSet:
          '/images/detail/mobile/image-insure-hero.jpg, /images/detail/mobil/image-insure-hero@2x.jpg 2x',
        src: '/images/detail/mobile/image-insure-hero.jpg',
      },
      tablet: {
        srcSet:
          '/images/detail/mobile/image-insure-hero.jpg, /images/detail/mobil/image-insure-hero@2x.jpg 2x',
        src: '/images/detail/mobile/image-insure-hero.jpg',
      },
      desktop: {
        srcSet:
          '/images/detail/mobile/image-insure-hero.jpg, /images/detail/mobil/image-insure-hero@2x.jpg 2x',
        src: '/images/detail/mobile/image-insure-hero.jpg',
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
            '/images/detail/mobile/image-insure-preview-1.jpg, /images/detail/mobile/image-insure-preview-1@2x.jpg 2x',
          src: '/images/detail/mobile/image-insure-preview-1.jpg',
        },
        desktop: {
          srcSet:
            '/images/detail/mobile/image-insure-preview-1.jpg, /images/detail/mobile/image-insure-preview-1@2x.jpg 2x',
          src: '/images/detail/mobile/image-insure-preview-1.jpg',
        },
      },
    ],
  },
  {
    slug: 'fylo',
    name: 'Fylo',
    description:
      'This project was built in pure HTML and CSS. I had mobile and desktop designs to work to and built it so that it was fully-responsive. I took a mobile-first approach and used modern CSS like Flexbox and Grid for layout purposes.',
    techStack: ['Interaction Design', 'Front End Development', 'HTML', 'CSS'],
    background:
      'This project was a front-end  challenge from Frontend Mentor. It’s a platform that enables you to practice building websites to a design and project brief. Each challenge includes mobile and desktop designs to show how the website should look at different screen sizes. Creating these projects has helped me refine my workflow and solve real-world coding problems. I’ve learned something new with each project, helping me to improve and adapt my style.',
    hero: {
      mobile: {
        srcSet:
          '/images/detail/mobile/image-fylo-hero.jpg, /images/detail/mobil/image-fylo-hero@2x.jpg 2x',
        src: '/images/detail/mobile/image-fylo-hero.jpg',
      },
      tablet: {
        srcSet:
          '/images/detail/mobile/image-fylo-hero.jpg, /images/detail/mobil/image-fylo-hero@2x.jpg 2x',
        src: '/images/detail/mobile/image-fylo-hero.jpg',
      },
      desktop: {
        srcSet:
          '/images/detail/mobile/image-fylo-hero.jpg, /images/detail/mobil/image-fylo-hero@2x.jpg 2x',
        src: '/images/detail/mobile/image-fylo-hero.jpg',
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
            '/images/detail/mobile/image-fylo-preview-1.jpg, /images/detail/mobile/image-fylo-preview-1@2x.jpg 2x',
          src: '/images/detail/mobile/image-fylo-preview-1.jpg',
        },
        desktop: {
          srcSet:
            '/images/detail/mobile/image-fylo-preview-1.jpg, /images/detail/mobile/image-fylo-preview-1@2x.jpg 2x',
          src: '/images/detail/mobile/image-fylo-preview-1.jpg',
        },
      },
    ],
  },
];
