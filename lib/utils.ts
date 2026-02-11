import { EventDetail } from "@/types";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const sleep = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// HOME PAGE UTILS

// export const navItems = [
//   {
//     name: "Events",
//     link: "/events",
//   },
//   {
//     name: "Schedule",
//     link: "/schedule",
//   },
//   {
//     name: "Gallery",
//     link: "/gallery",
//   },
//   {
//     name: "Announcements",
//     link: "/announcements",
//   },
//   {
//     name: "Sponsors",
//     link: "/sponsors",
//   },
//   {
//     name: "About",
//     link: "/about",
//   },
//   {
//     name: "Team",
//     link: "/team",
//   },
//   {
//     name: "Contact",
//     link: "/contact",
//   },
// ];

export const navItems = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Events",
    link: "/pdf/event brochure 2.pdf",
  },
  {
    name: "Team",
    link: "/team",
  },
  {
    name: "Contact",
    link: "/contact",
  },
];

export const videoLinks: Record<number, [string, string]> = {
  2016: [
    "https://youtu.be/n8Qkbruh8XE?si=FGoYzcI9bY1ZR81-",
    "/assets/pyqs/2016.jpg",
  ],
  2017: [
    "https://youtu.be/7yvLM0vqEEE?si=L-IzgNRhh9dMch6I",
    "/assets/pyqs/2017.jpg",
  ],
  2025: [
    "https://www.instagram.com/reel/DGBOH6EImbj/",
    "/assets/pyqs/2025.jpg",
  ],
  2023: [
    "https://www.instagram.com/reel/Cp-P5b8hZiR/",
    "/assets/pyqs/2025.jpg",
  ],
};

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// ye sare event ki list hai day wise

export const teamsList = [
  {
    id: "team2",
    name: "CORE Team ",
    members: [
      {
        name: "Varad Bag",
        photo:
          "https://github.com/aariivermaaa-cloud/PRAYAAN-7.0/blob/main/contact%20us/VaradBag.jpeg?raw=true",
        socialMediaLinks: [],
      },
      {
        name: "Aditya Singh",
        photo:
          "https://github.com/aariivermaaa-cloud/PRAYAAN-7.0/blob/main/contact%20us/Aditya_Singh.jpeg?raw=true",
        socialMediaLinks: [],
      },
      {
        name: "Arnav Bhardwaj",
        photo:
          "https://github.com/aariivermaaa-cloud/PRAYAAN-7.0/blob/main/contact%20us/Arnav_bhardwaj.jpeg?raw=true",
        socialMediaLinks: [],
      },
      {
        name: "Puneet Pathak",
        photo:
          "https://github.com/aariivermaaa-cloud/PRAYAAN-7.0/blob/main/contact%20us/Punit_Pathak.jpeg?raw=true",
        socialMediaLinks: [],
      },
      {
        name: "Sudesh Bhosle",
        photo:
          "https://github.com/aariivermaaa-cloud/PRAYAAN-7.0/blob/main/contact%20us/Sudesh_Bhosle.jpeg?raw=true",
        socialMediaLinks: [],
      },
      {
        name: "Aditya Pawar",
        photo:
          "https://github.com/aariivermaaa-cloud/PRAYAAN-7.0/blob/main/contact%20us/Aditya_Pawar.jpeg?raw=true",
        socialMediaLinks: [],
      },
      {
        name: "Avinash",
        photo:
          "https://github.com/aariivermaaa-cloud/PRAYAAN-7.0/blob/main/contact%20us/Avinash.jpeg?raw=true",
        socialMediaLinks: [],
      },
      {
        name: "Prabhjot Singh",
        photo:
          "https://github.com/aariivermaaa-cloud/PRAYAAN-7.0/blob/main/contact%20us/Prabhjot_Singh.jpeg?raw=true",
        socialMediaLinks: [],
      },
      {
        name: "Sangam Singh",
        photo:
          "https://github.com/aariivermaaa-cloud/PRAYAAN-7.0/blob/main/contact%20us/angam_singh.jpeg?raw=true",
        socialMediaLinks: [],
      },
    ],
  },
  {
    id: "team11",
    name: "Organizing Team ",
    members: [
      {
        name: "Aaryan Verma",
        photo:
          "https://github.com/aariivermaaa-cloud/PRAYAAN-7.0/blob/main/contact%20us/Aaryan_Verma.jpeg?raw=true",
        socialMediaLinks: [],
      },
      {
        name: "Rohit Mathur",
        photo:
          "https://github.com/aariivermaaa-cloud/PRAYAAN-7.0/blob/main/contact%20us/Rohit_mathur.jpeg?raw=true",
        socialMediaLinks: [],
      },
      {
        name: "Vinayak",
        photo:
          "https://github.com/aariivermaaa-cloud/PRAYAAN-7.0/blob/main/contact%20us/Vinayak.jpeg?raw=true",
        socialMediaLinks: [],
      },
      {
        name: "Sumukh Kaundinya",
        photo:
          "https://github.com/aariivermaaa-cloud/PRAYAAN-7.0/blob/main/contact%20us/Sumukh_kaundinya.jpeg?raw=true",
        socialMediaLinks: [],
      },
      {
        name: "Jay Padvi",
        photo:
          "https://github.com/aariivermaaa-cloud/PRAYAAN-7.0/blob/main/contact%20us/Jay.jpeg?raw=true",
        socialMediaLinks: [],
      },
      {
        name: "Prathmesh Chaudhari",
        photo:
          "https://github.com/aariivermaaa-cloud/PRAYAAN-7.0/blob/main/contact%20us/Prathmesh_chaudhary.jpeg?raw=true",
        socialMediaLinks: [],
      },
      {
        name: "Anriya Tiwari",
        photo:
          "https://github.com/aariivermaaa-cloud/PRAYAAN-7.0/blob/main/contact%20us/Anriya_Tiwari.jpeg?raw=true",
        socialMediaLinks: [],
      },
    ],
  },
  {
    id: "team11",
    name: "Finanace Team ",
    members: [
      {
        name: "Swaroop Baad",
        photo:
          "https://github.com/aariivermaaa-cloud/PRAYAAN-7.0/blob/main/contact%20us/Swaroop%20Baad.jpeg?raw=true",
        socialMediaLinks: [],
      },
      {
        name: "Shubham Saxena",
        photo:
          "https://github.com/aariivermaaa-cloud/PRAYAAN-7.0/blob/main/contact%20us/Shubham_Saxena.jpeg?raw=true",
        socialMediaLinks: [],
      },
      {
        name: "Niraj Todankar",
        photo:
          "https://github.com/aariivermaaa-cloud/PRAYAAN-7.0/blob/main/contact%20us/Niraj_Todankar.jpeg?raw=true",
        socialMediaLinks: [],
      },
      {
        name: "Ayush Digarse",
        photo:
          "https://github.com/aariivermaaa-cloud/PRAYAAN-7.0/blob/main/contact%20us/Ayush_Digarse.jpeg?raw=true",
        socialMediaLinks: [],
      },
    ],
  },
];

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

export const announcements = [
  {
    title: "More than 500 million copies of the Harry Potter books sold",
    description:
      "Twenty years ago, readers around the world first discovered the magical story of Harry Potter, created by J.K. Rowling. We can now reveal that, since that moment, half a billion Harry Potter books have now been sold.",
    day: "Tuesday",
    date: "14 September, 2023",
    time: "09:00 AM",
  },
  {
    title: "New AI breakthrough announced",
    description:
      "Researchers have made a major breakthrough in artificial intelligence, paving the way for advanced applications in healthcare, robotics, and more. in artificial intelligence, paving the way for advanced applications in healthcare, robotics, and more",
    day: "Wednesday",
    date: "15 November, 2023",
    time: "12:00 PM",
    image: "/assets/anouncement/nppic/1.jpg",
  },
  {
    title: "Exodia Tech Conference 2025",
    description:
      "Join us for the most exciting tech conference of the year, featuring keynote speeches, panel discussions, and workshops.",
    day: "Friday",
    date: "17 January, 2025",
    time: "10:30 AM",
  },
  {
    title: "Launch of Iron Man Suit Prototype",
    description:
      "An innovative team has unveiled the first prototype of a fully functional Iron Man suit, marking a milestone in technology and engineering.",
    day: "Sunday",
    date: "19 March, 2025",
    time: "02:00 PM",
    image: "/assets/anouncement/nppic/2.jpg",
  },
];

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// List of Events for Home page

export const projects = [
  {
    name: "Technical Paper Presentation",
    imageUrl: "/assets/cards/mex.png",
    description:
      "Ideas take the spotlight. Intellect takes the lead. PRAYAAN’s Technical Paper Presentation is where innovation meets insight and concepts turn into conversations. Step up, challenge perspectives, and let your research speak—because tomorrow’s breakthroughs begin with your paper today.",
    descriptionClass: "font-prayaan",
  },
  {
    name: "Boat Race",
    imageUrl: "/assets/cards/cs.jpeg",
    description:
      "Design, build, and race your own RC boat. Test your hull stability and piloting skills in a high-speed battle against the waves. Only the most efficient design will survive the course to claim victory.",
    descriptionClass: "font-prayaan",
  },
  {
    name: "Esports",
    imageUrl: "/assets/cards/mush.jpeg",
    description:
      "PRAYAAN E-SPORTS is where split-second decisions, clutch plays, and pure adrenaline collide. Enter the arena, outplay the best, and prove your dominance—because legends aren’t born… they’re respawned here.",
    descriptionClass: "font-prayaan",
  },
  {
    name: "Cultural Events",
    imageUrl: "/assets/cards/mnscc.jpeg",
    description:
      "The cultural showdown of Prayaan 7.0 kicks off with a live brush battle as artists race against time. It then heats up with electrifying Band Wars, before the stage opens to individual performers to showcase their unique brilliance.",
    descriptionClass: "font-prayaan",
  },
];

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// horizontal scroll on scroll list
export const horiscrollimage = [
  "https://thumbs.dreamstime.com/b/anchor-2061923.jpg",
  "https://media.gettyimages.com/id/988113204/photo/the-navigator.jpg?s=612x612&w=0&k=20&c=Fl-mYtejo__Dz_ApOgOXkHme4NCHfqH_DHsxgX3xQSc=",
  "https://t3.ftcdn.net/jpg/03/42/22/06/360_F_342220626_fQMT05ZHecXorKqUl2BHljAFId9dnyqJ.jpg",
  "https://media.istockphoto.com/id/616897190/photo/nautical-background-with-a-navigation-tools.jpg?s=612x612&w=0&k=20&c=2u6si2dts3DWPmcb8zyJvzKKdQ_JDt7dLcPonOgk8Zo=",
  "https://images.pexels.com/photos/1327437/pexels-photo-1327437.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",

  "https://thumbs.dreamstime.com/b/anchor-2061923.jpg",
  "https://media.gettyimages.com/id/988113204/photo/the-navigator.jpg?s=612x612&w=0&k=20&c=Fl-mYtejo__Dz_ApOgOXkHme4NCHfqH_DHsxgX3xQSc=",
  "https://t3.ftcdn.net/jpg/03/42/22/06/360_F_342220626_fQMT05ZHecXorKqUl2BHljAFId9dnyqJ.jpg",
  "https://media.istockphoto.com/id/616897190/photo/nautical-background-with-a-navigation-tools.jpg?s=612x612&w=0&k=20&c=2u6si2dts3DWPmcb8zyJvzKKdQ_JDt7dLcPonOgk8Zo=",
  "https://images.pexels.com/photos/1327437/pexels-photo-1327437.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",

  "https://thumbs.dreamstime.com/b/anchor-2061923.jpg",
  "https://media.gettyimages.com/id/988113204/photo/the-navigator.jpg?s=612x612&w=0&k=20&c=Fl-mYtejo__Dz_ApOgOXkHme4NCHfqH_DHsxgX3xQSc=",
  "https://t3.ftcdn.net/jpg/03/42/22/06/360_F_342220626_fQMT05ZHecXorKqUl2BHljAFId9dnyqJ.jpg",
  "https://media.istockphoto.com/id/616897190/photo/nautical-background-with-a-navigation-tools.jpg?s=612x612&w=0&k=20&c=2u6si2dts3DWPmcb8zyJvzKKdQ_JDt7dLcPonOgk8Zo=",
  "https://images.pexels.com/photos/1327437/pexels-photo-1327437.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",

  "https://thumbs.dreamstime.com/b/anchor-2061923.jpg",
  "https://media.gettyimages.com/id/988113204/photo/the-navigator.jpg?s=612x612&w=0&k=20&c=Fl-mYtejo__Dz_ApOgOXkHme4NCHfqH_DHsxgX3xQSc=",
  "https://t3.ftcdn.net/jpg/03/42/22/06/360_F_342220626_fQMT05ZHecXorKqUl2BHljAFId9dnyqJ.jpg",
  "https://media.istockphoto.com/id/616897190/photo/nautical-background-with-a-navigation-tools.jpg?s=612x612&w=0&k=20&c=2u6si2dts3DWPmcb8zyJvzKKdQ_JDt7dLcPonOgk8Zo=",
  "https://images.pexels.com/photos/1327437/pexels-photo-1327437.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",

  "https://thumbs.dreamstime.com/b/anchor-2061923.jpg",
  "https://media.gettyimages.com/id/988113204/photo/the-navigator.jpg?s=612x612&w=0&k=20&c=Fl-mYtejo__Dz_ApOgOXkHme4NCHfqH_DHsxgX3xQSc=",
  "https://t3.ftcdn.net/jpg/03/42/22/06/360_F_342220626_fQMT05ZHecXorKqUl2BHljAFId9dnyqJ.jpg",
  "https://media.istockphoto.com/id/616897190/photo/nautical-background-with-a-navigation-tools.jpg?s=612x612&w=0&k=20&c=2u6si2dts3DWPmcb8zyJvzKKdQ_JDt7dLcPonOgk8Zo=",
  "https://images.pexels.com/photos/1327437/pexels-photo-1327437.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
];

export const HTRimages = [
  "https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg8AKpGbcacbtfYk82or9UsZ1RQNXmW0Deh7wqS",
  "https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg8k8vPjhdmeRU37CuzDvwZLP5FgiTOWcaX0JNy",
  "https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg88SZ2Lsf4vby2KhTFrt1qAxpg70QM59SaBCRI",
  "https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg8yw4zY9vbcnD1Z80MwGei4QNvUP6JjxgdSYHB",
  "https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg8wuDUuOkN93fDJcmlrWoxYu8LRnVCHUMXgaki",
];

export const images = [
  "https://github.com/aariivermaaa-cloud/PRAYAAN-7.0/blob/main/events%20photos/IMG_1632.JPG.jpeg?raw=true",
  "https://github.com/aariivermaaa-cloud/PRAYAAN-7.0/blob/main/events%20photos/IMG_1632.JPG.jpeg?raw=true",
  "h",
  "https://github.com/aariivermaaa-cloud/PRAYAAN-7.0/blob/main/events%20photos/IMG_1632.JPG.jpeg?raw=true",
  "https://github.com/aariivermaaa-cloud/PRAYAAN-7.0/blob/main/events%20photos/IMG_2734.JPG.jpeg?raw=true",
  "https://github.com/aariivermaaa-cloud/PRAYAAN-7.0/blob/main/events%20photos/WhatsApp%20Image%202026-02-08%20at%2012.42.41%20AM%20(1).jpeg?raw=true",
  "https://github.com/aariivermaaa-cloud/PRAYAAN-7.0/blob/main/events%20photos/WhatsApp%20Image%202026-02-08%20at%2012.42.41%20AM.jpeg?raw=true",
  "https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg80jj3l2O6nPm1We5dZyOsKhfk4grHcBuEtjiq",
  "https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg81E4rQi0dFuSj7PyAlmGUCN6WXqKIfTRJibEM",
  "https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg8fgX5LuNnaGuQcUEXzIrigDtYvbPpyeAwZH8K",
  "https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg8nzPw094KFvlWGTIAJSubDhEoNp9XPaV5xw4j",
  "https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg87RXf5OeVgzrG1oD8Ky4Iwvx0LatSiTFCZ2Bh",
  "https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg8CWhqH5rR4iUhtEkXzqNrGjSnf1ul85MDWvBs",
  "https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg8GAjgtGvLvuzkRJai146Y2oZCN0Q3DmjflbHw",
  "https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg83tXH9Az72kmsCXMLPhjzWtoifAyncURqe9d8",
  "https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg8Xf41RshWnfg8CkBHLr7YPo4jxz6Elt0a5ucZ",
  "https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg8hUTBB8hgiPInSsWU8AM03Hk6OVjE5NlYFoqr",
  "https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg8tI4Vqp3eeKLVcTXI7MJNPQraCYZ5iGjoEO9H",
  "https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg8wZ0pJUkN93fDJcmlrWoxYu8LRnVCHUMXgaki",
  "https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg8h2xHhMgiPInSsWU8AM03Hk6OVjE5NlYFoqrg",
  "https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg8hfWTnsgiPInSsWU8AM03Hk6OVjE5NlYFoqrg",
  "https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg8brpqZ0JFTD4RYVkqMGW97ir0uIxeHfXCJ5oO",
  "https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg8XXqyIghWnfg8CkBHLr7YPo4jxz6Elt0a5ucZ",
  "https://a64j3m5x58.ufs.sh/f/XmKfJ6hWnfg877RNt8VgzrG1oD8Ky4Iwvx0LatSiTFCZ2BhA",
];

export const VERimages = [
  "https://github.com/aariivermaaa-cloud/PRAYAAN-7.0/blob/main/events%20photos/WhatsApp%20Image%202026-02-08%20at%2012.42.44%20AM.jpeg?raw=true",
  "https://github.com/aariivermaaa-cloud/PRAYAAN-7.0/blob/main/events%20photos/IMG_1632.JPG.jpeg?raw=true",
  "https://github.com/aariivermaaa-cloud/PRAYAAN-7.0/blob/main/events%20photos/WhatsApp%20Image%202026-02-08%20at%2012.45.08%20AM.jpeg?raw=true",
  "https://github.com/aariivermaaa-cloud/PRAYAAN-7.0/blob/main/events%20photos/IMG_1971.JPG.jpeg?raw=true",
  "https://github.com/aariivermaaa-cloud/PRAYAAN-7.0/blob/main/events%20photos/IMG_1632.JPG.jpeg?raw=true",
  "https://github.com/aariivermaaa-cloud/PRAYAAN-7.0/blob/main/events%20photos/IMG_2734.JPG.jpeg?raw=true",
  "https://github.com/aariivermaaa-cloud/PRAYAAN-7.0/blob/main/events%20photos/WhatsApp%20Image%202026-02-08%20at%2012.42.41%20AM%20(1).jpeg?raw=true",
  "https://github.com/aariivermaaa-cloud/PRAYAAN-7.0/blob/main/events%20photos/WhatsApp%20Image%202026-02-08%20at%2012.42.41%20AM.jpeg?raw=true",
  "https://github.com/aariivermaaa-cloud/PRAYAAN-7.0/blob/main/events%20photos/WhatsApp%20Image%202026-02-08%20at%2012.44.27%20AM%20(1).jpeg?raw=true",
  "https://github.com/aariivermaaa-cloud/PRAYAAN-7.0/blob/main/events%20photos/WhatsApp%20Image%202026-02-08%20at%2012.44.47%20AM%20(1).jpeg?raw=true",
  "https://github.com/aariivermaaa-cloud/PRAYAAN-7.0/blob/main/events%20photos/WhatsApp%20Image%202026-02-08%20at%2012.44.47%20AM%20(2).jpeg?raw=true",
  "https://github.com/aariivermaaa-cloud/PRAYAAN-7.0/blob/main/events%20photos/WhatsApp%20Image%202026-02-08%20at%2012.44.47%20AM.jpeg?raw=true",
];

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// characters

export const characters1 = `Emerging from the ocean as the largest maritime fest, PRAYAAN makes waves.`;
export const characters2 = `A high-voltage, two-day explosion of creativity, competition, and passion.`;
export const characters3 = `competition, and passion.`;
export const characters4 = `Every moment is electric, every stage alive with ambition.`;
export const characters5 = `Step into PRAYAAN—feel the energy, own the legacy.`;
export const characters1s = `Emerging from the ocean as the largest maritime fest, PRAYAAN makes waves.`;
export const characters2s = `A high-voltage, two-day explosion of creativity, competition, and passion.`;
export const characters3s = `competition, and passion.`;
export const characters4s = `Every moment is electric, every stage alive with ambition.`;
export const characters5s = ` Step into PRAYAAN—feel the energy, own the legacy.`;
export const characters6s = `own the legacy.`;

export const characters6 = `Indian Maritime University, Mumbai Port Campus, cradled by the Arabian Sea, blends`;
export const characters7 = `discipline with the rhythm of the tides, where knowledge meets technology to shape the marine engineers of tomorrow. `;
export const characters8 = `With waves whispering the language of engines and machinery, it kindles innovation, precision, and resilience in every mind, nurturing technical`;
export const characters9 = `mastery and problem-solving spirit. Here, intellect and the spirit of the sea converge,`;
export const characters10 = `crafting a legacy anchored in skill, service, and mechanical brilliance.`;

export const characters11 = `PRAYAAN is where imagination meets energy and bold ideas take flight. It is a`;
export const characters12 = `vibrant stage where creativity spreads its wings and passion lights the way. Prayaan`;
export const characters13 = `is a haven for dreamers who dare to push boundaries, PRAYAAN carries the spirit of`;
export const characters14 = `innovation in every breath. It calls to the dreamers, the innovators, the bold—together`;
export const characters15 = `weaving a tapestry of wonder, a realm where the brilliance of tomorrow is born.`;
export const characters16 = ``;
export const characters17 = ``;
export const characters11s = ``;
export const characters12s = ``;
export const characters13s = ``;
export const characters14s = ``;
export const characters15s = ``;
export const characters16s = ``;
export const characters17s = ``;
export const characters18s = ``;
export const characters19s = ``;
export const characters20s = ``;
export const characters21s = ``;
