import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Vikrant Prasad', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: "Hello, I'm",
  name: 'Vikrant Prasad',
  subtitle: 'an aspiring full-stack web developer.',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'jai.jpg',
  paragraphOne: 'I am a final year Chemical Engineering UG student at IIT Guwahati.',
  paragraphTwo:
    'I love coding and i am trying to gain mastery in full-stack web development. Although my majors is Chemical Engineering I am trying to learn more about core cs subjects.',
  paragraphThree: 'I love reading novels and self-development books in my free time.',
  resume: 'https://drive.google.com/file/d/14pDJOtMPaR6mZbZ_lmIovHBxANRmRbId/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'a.jpg',
    title: 'Society Basket',
    info:
      'Developed an e-commerce website from which we can easily order grocery items in our locality, thus minimizing contact and bringing local shops to your door.',
    info2: '',
    url: 'https://society-basket.netlify.app',
    repo: 'https://github.com/vikrantprasad5/society-basket', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'b3.jpg',
    title: 'Github User Stats',
    info:
      'Developed a web-application to fetch the stats of the any Github User by using the Github API and displaying their statistics using fusion charts.',
    info2: '',
    url: 'https://react-github-user-stats.netlify.app',
    repo: 'https://github.com/vikrantprasad5/Github-Users', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'c.jpg',
    title: 'Personal Blogging Site',
    info:
      'Made a beautiful minimalist personal blogging website which is fully functional with front-end and back-end capabilities where I can publish my blogs for everyone to read.',
    info2: '',
    url: 'https://github.com/vikrantprasad5/my-thoughts',
    repo: 'https://my-thoughts26.herokuapp.com', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'd.jpg',
    title: 'To-Do List',
    info:
      'Made a To-do List App and connected it with cloud database so that the list is stored and can be accessed from any network.',
    info2: '',
    url: 'https://github.com/vikrantprasad5/todo-list',
    repo: 'https://morning-taiga-20548.herokuapp.com', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'e.jpg',
    title: 'Simon Game',
    info:
      'Made an online version of popular electronic memorization game called Simon using javascript.',
    info2: '',
    url: 'https://github.com/vikrantprasad5/simon-game',
    repo: 'https://vikrantprasad5.github.io/simon-game/', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'f.jpg',
    title: 'Virtual Drum Kit',
    info: 'Rock those "w,a,s,d,j,k,l" keys to make some slick drumming sounds.',
    info2: 'Developed it by using stock sounds, javascript and DOM.',
    url: 'https://vikrantprasad5.github.io/Drum-Game-Kit/',
    repo: 'https://github.com/vikrantprasad5/Drum-Game-Kit', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'g.jpg',
    title: 'TinDog',
    info: "It's Tinder but for dogs!",
    info2: 'A beautiful responsive concept page for Tinder for dogs.',
    url: 'https://vikrantprasad5.github.io/TinDog/',
    repo: 'https://github.com/vikrantprasad5/TinDog', // if no repo, the button will not show up
  },
];
// PORs
export const POR = {
  img: 'jai.jpg',
  paragraphOne: 'I am a final year Chemical Engineering UG student at IIT Guwahati.',
  paragraphTwo:
    'I love coding and i am trying to gain mastery in full-stack web development. Although my majors is Chemical Engineering I am trying to learn more about core cs subjects.',
  paragraphThree: 'I love reading novels and self-development books in my free time.',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};
// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'vikrantprasad5@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/vikrantprasad26',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/vikrantprasad5/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/vikrantprasad5',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
