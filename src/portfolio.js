/* Change this file to get your personal Porfolio */
import { style } from "glamor";
// Website related settings
const settings = {
  isSplash: true, // Change this to true if you want to use the splash screen.
  useCustomCursor: false, // Change this to false if you want the good'ol cursor
  googleTrackingID: "UA-174238252-2",
};
const birthDate = "1998-12-23";
const experienceDate = "2020-01-01";
function calculateAge(birthDate) {
  const today = new Date();
  const birthDateObj = new Date(birthDate);
  let age = today.getFullYear() - birthDateObj.getFullYear();
  const monthDiff = today.getMonth() - birthDateObj.getMonth();

  if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDate() < birthDateObj.getDate())
  ) {
    age--;
  }

  return age;
}

//Home Page
const greeting = {
  title: "Hello 👋.",
  title2: "Tokiniaina",
  logo_name: "Tokiniaina",
  // nickname: "harry / picleric",
  full_name: "Tokiniaina Hervé",
  positions: ["Web developer.", "Mobile developer.", "Experienced developer"],
  subTitle:
    " My full name is Tokiniaina Hervé ANDRIANARISON. I am " +
    calculateAge(birthDate) +
    " years old . I deliver High-quality, User-Centered applications. Curious and Ambitious Developer Building Innovative Solutions for a Better Tomorrow.",
  resumeLink:
    "https://drive.google.com/file/d/1Zop5eWzBr5NsGl0erB6fakT-bm50qlsJ/view?usp=sharing",
  mail: "mailto:tokiniainaherve.andrianarison@gmail.com",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "",
  linkedin: "https://www.linkedin.com/in/toky-herve/",
  gmail: "tokiniainaherve.andrianarison@gmail.com",
  // gitlab: "https://gitlab.com/harikanani",
  facebook: "",
  twitter: "",
  instagram: "",
};

const skills = {
  data: [
    {
      title: "Web and mobile Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Develop highly interactive User Interfaces and Backend for web and mobile applications",
        "⚡ Elevate your code quality with meticulous unit and integration testing.",
        "⚡ Deploying the applications seamlessly on popular app marketplaces such as the App Store and Google Play, as well as on the web",
        "⚡ Integration of third party services such as Firebase/ Google Cloud Platform / Google Analytics / Microsoft Azure ",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "Typescript",
          fontAwesomeClassname: "simple-icons:typescript",
          style: {
            color: "#007acc",
          },
        },

        {
          skillName: "React",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "Angular",
          fontAwesomeClassname: "simple-icons:angular",
          style: {
            color: "#DE33A6",
          },
        },
        {
          skillName: "Vue.js",
          fontAwesomeClassname: "logos:vue",
          style: {
            color: "#dd1b16",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "vscode-icons:file-type-node",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: ".NET Framework",
          fontAwesomeClassname: "simple-icons:dotnet",
          style: {
            color: "#512bd4",
          },
        },
        {
          skillName: "C#",
          fontAwesomeClassname: "simple-icons:csharp",
          style: {
            color: "#7a3398",
          },
        },
        {
          skillName: "iOS",
          fontAwesomeClassname: "simple-icons:apple",
          style: {
            color: "#555555",
          },
        },
        {
          skillName: "Android",
          fontAwesomeClassname: "simple-icons:android",
          style: {
            color: "#3DDC84",
          },
        },
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        },
        {
          skillName: "Dart",
          fontAwesomeClassname: "simple-icons:dart",
          style: {
            color: "#29B0EE",
          },
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "devicon:java",
          style: {
            color: "#f89820",
          },
        },
        {
          skillName: "Spring",
          fontAwesomeClassname: "simple-icons:spring",
          style: {
            color: "#177245 ",
          },
        },
        {
          skillName: "Linux",
          fontAwesomeClassname: "simple-icons:linux",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#439743",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },

        {
          skillName: "Apache",
          fontAwesomeClassname: "simple-icons:apache",
          style: {
            color: "#CA1A22",
          },
        },
        {
          skillName: "Oracle database",
          fontAwesomeClassname: "simple-icons:oracle",
          style: {
            color: "#f80000",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#E94E32",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Experience hosting and managing websites",
        "⚡ Experience deploying mobile applications",
        "⚡ Experience with Continuous Integration",
      ],
      softwareSkills: [
        {
          skillName: "Heroku",
          fontAwesomeClassname: "simple-icons:heroku",
          style: {
            color: "#6863A6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
      ],
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Côte d'Azur University",
      subtitle: "Master MBDS in Mobility, Big Data and Systems Integration ",
      logo_path: "cote_d_azur.png",
      alt_name: "Côte d'Azur",
      duration: "2020 - 2021",
      descriptions: [
        "⚡ Very professional, it emphasizes the development of computer applications with a focus on big data and data analysis.",
        "⚡ The pedagogical approach includes an inductive approach based on supervised prototypes defined with industrial partners.",
        "⚡ Courses on agile project management (SCRUM) and professional seminars complete the curriculum.",
        // "⚡ I have implemented several projects based on what I've leart under my Computer Engineering course. ",
      ],
      website_link: "https://univ-cotedazur.fr/",
      width: 330,
      height: "auto",
    },
    {
      title: "It -  University",
      subtitle: "Bachelor degree in Computer science ",
      logo_path: "it_university.png",
      alt_name: "It-university",
      duration: "2016 - 2019",
      descriptions: [
        "⚡ Bachelor in  Application development (Programming), Web Integration and Web Designer, and Database",
        // "⚡ I have implemented several projects based on what I've leart under my Computer Engineering course. ",
      ],
      website_link: "https://www.ituniversity-mg.com/page/",
      width: 330,
      height: "auto",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Meta Android developer",
      subtitle:
        "Job-ready skills for an in-demand career and earn a credential from Meta.",
      logo_path: "meta_android.png",
      certificate_link:
        "https://www.credly.com/badges/9e62b367-5091-436c-a760-9a7b6e9aadae",
      alt_name: "Meta Android developer",
      // color_code: "#2AAFED",
      color_code: "#2AAFED",
    },

    {
      title: "Java Certification",
      subtitle: "Codingame: Problems solving with Java",
      logo_path: "codeingame.svg",
      certificate_link:
        "https://www.codingame.com/certification/5Jo_V6HwyUbTSHkIWP50XQ",
      alt_name: "java",
      color_code: "#fcd207",
    },
    // {
    //   title: "A300: Atlas Security",
    //   subtitle: "MongoDB University",
    //   logo_path: "mongo.png",
    //   certificate_link:
    //     "https://drive.google.com/file/d/12u_tkvhgB-K2TIm-RDdJOwYbQ9ccqiqA/view?usp=sharing",
    //   alt_name: "MongoDB University",
    //   // color_code: "#F6B808",
    //   color_code: "#47A048",
    // },
    {
      title: "Meta Front-End Developer Certificate",
      subtitle: "Front-End development with React,Javascript,HTML and CSS.",
      logo_path: "meta-front.png",
      certificate_link:
        "https://www.credly.com/badges/e5b924a3-e426-44e9-8a7f-d354a89379ac/public_url",
      alt_name: "Meta Front-End Developer Certificate",
      color_code: "#e7870c",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work and Internship",
  description:
    "I have " +
    calculateAge(experienceDate) +
    "+ years of experience.I bring expertise in developing user-centered Web applications and mobile applications for both Android and iOS platforms.Expertise in SCRUM and Agile, combining strong teamwork and autonomous work style for successful project delivery.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work Experience",
      experiences: [
        {
          title: "Web and mobile developer",
          company: "Adrware",
          company_url: "https://adrware.mg/",
          logo_path: "Adrware.jpeg",
          duration: "Feb 2020 - Today",
          location: "Antananarivo-Madagascar",
          description: `Development of web applications using React and .NET Framework and mobile applications for Android and Ios under Kotlin, Java, Swift and React Native .Integration of design and functionalities. Implementation of the software 
          architecture .
          Deployment of the application on App
          Store or Google Play Store or on the web .
          Develop unit tests and integration tests.
          `,
          // "I worked on the Dashboard project which helps users track their activities while using Walo Application. I also worked on Ocean Inventory Application and it's Admin panel Backend as well as on Ocean Inventory Admin Front-end using React and also worked on Walo Admin Backend.",
          color: "#0071C5",
        },
        {
          title: "Web Developer Intern",
          company: "Pulse",
          company_url: "https://www.pulse.mg/",
          logo_path: "pulse.jpeg",
          duration: "Jul 2019 - Oct 2019",
          location: "Antananarivo-Madagascar",
          description: `Development of a web application for order management usign ASP.NET MVC and Angular deployed on a Sharepoint Server.
          `,
          // "Created Front end of Yearn Financial Mutual Funds website. also degined simple web application for better user experience, designed DB Schemas as well.",
          color: "#ee3c26",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "I have built numerous projects during my years of experience, working both with a team and independently depending on the project. Some of these projects are private while others are deployed on the web, Google Play Store, or App Store. Here are some of my projects",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "profile_photo_2.png",
    description:
      "You can contact me at the places mentioned below. I will try to get back to you as fast as I can. You can also download my resume ",
  },
  // blogSection: {
  //   title: "Blogs",
  //   subtitle:
  //     "I don't blog frequently but when I do something awesome, I do try to document it so it can be helpful to others.",
  //   link: "https://medium.com/@vedanshvijay/",
  //   avatar_image_path: "blogs_image.svg",
  // },
};

const projects = {
  data: [
    {
      id: "00",
      name: "Delerium",
      url:
        "https://play.google.com/store/apps/details?id=com.iconicsoft.delerium",
      description:
        "Truth or Drink game in Mauritian Creole tailored for adults 18 and above who cherish Mauritius. This immersive app is designed to foster genuine connections and laughter among friends. With a curated collection of thought-provoking and lighthearted questions, Delerium offers an array of prompts to encourage players to share truths or indulge in a drink, leading to hilariously candid moments and unexpected revelations.",
      languages: [
        {
          name: "Kotlin",
          iconifyClass: "simple-icons:kotlin",
          style: {
            color: "#B125EA ",
          },
        },
      ],
    },
    {
      id: "0",
      name: "iHemostasis",
      url: "https://apps.apple.com/fr/app/ihemostasis/id472966966?l=en",
      description:
        "This is a Mobile app of therapeutic education tool devoted to the mechanisms of coagulation and study of clinical cases in haemostasis field",
      languages: [
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "Swift",
          iconifyClass: "logos-swift",
        },
      ],
    },
    {
      id: "1",
      name: "Trigger's reports",
      url: "https://triggersreports.com/",
      description:
        "A mobile application on iOS / Android and a web application for back office.Security mobile application for professionals and individuals that allows you to locate your loved ones and employees.",
      languages: [
        {
          name: "React",
          iconifyClass: "logos-react",
        },
        {
          name: ".NET Core",
          iconifyClass: "logos-dotnet",
        },
        {
          name: "Swift",
          iconifyClass: "logos-swift",
        },
        {
          name: "Java",
          iconifyClass: "logos-java",
        },
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
      ],
    },
    {
      id: "2",
      name: "The Real madagascar",
      url:
        "https://play.google.com/store/apps/details?id=aiolos.com.therealmadagascar&hl=en",
      description:
        "The official application of Madagascar's Ministry of Transport, Tourism and Meteorology.An essential, reliable and easy-to-use travel companion. Integrating Google Maps, Facebook authenticator and real time navigation",
      languages: [
        {
          name: "React-Native",
          iconifyClass: "logos-react",
        },
        {
          name: "Firebase",
          iconifyClass: "logos-firebase",
        },
        {
          name: "Facebook Authentification",
          iconifyClass: "logos-facebook",
        },
        {
          name: "Google Maps",
          iconifyClass: "logos-google-maps",
        },
        {
          name: "Mapbox",
          iconifyClass: "simple-icons:mapbox",
          style: {
            color: "#4264fb",
          },
        },
      ],
    },
    {
      id: "3",
      name: "Editus myBusiness",
      url:
        "https://play.google.com/store/apps/details?id=lu.pragma.mybusiness&hl=en_US&gl=US",
      description:
        " Mobile app on iOS and Android. With Editus myBusiness, evaluate your visibility on Editus.lu and more than 20 web platforms in Luxembourg. Thanks to the monitoring of your statistics in real time, you will be able to optimize your campaigns and generate a better return on investment for your company. SSO and Adform Integration",
      languages: [
        {
          name: "Kotlin",
          iconifyClass: "simple-icons:kotlin",
          style: {
            color: "#B125EA ",
          },
        },
        {
          name: "JWT",
          iconifyClass: "logos-jwt",
        },
        {
          name: "Firebase",
          iconifyClass: "logos-firebase",
        },
      ],
    },
    {
      id: "4",
      name: "Black Pearl v2",
      url: "",
      description:
        "Private web application for order management . Deployed on SharePoint Server",
      languages: [
        {
          name: "ASP.NET MVC",
          iconifyClass: "logos-dotnet",
        },
        {
          name: "Angular",
          iconifyClass: "simple-icons:angular",
          style: {
            color: "#DE33A6",
          },
        },
      ],
    },
    {
      id: "3",
      name: "Bet Soccer",
      url: "https://github.com/mbdsp7-Lova-Tokiniaina-Mamitiana",
      description:
        "Multi-platform (Web , mobile and desktop) app for bets in Football. Used c# Winform, Node.js,Angular , Android (Java) and Grails(java) ",
      languages: [
        {
          name: "Winform",
          iconifyClass: "logos-dotnet",
        },
        {
          name: "Angular",
          iconifyClass: "simple-icons:angular",
          style: {
            color: "#DE33A6",
          },
        },
        {
          name: "Java",
          iconifyClass: "logos-java",
        },
        {
          name: "Grails",
          iconifyClass: "logos-grails",
        },
        {
          name: "Node.js",
          iconifyClass: "logos-nodejs",
        },
      ],
    },
    {
      id: "4",
      name: "Augmented Reality App",
      url: "",
      description:
        "Made an augmented reality mobile app using ViroReact. Showing locations (hotels,restaurants,...) nearby arround 50 km",
      languages: [
        {
          name: "React-native",
          iconifyClass: "logos-react",
        },
      ],
    },
    {
      id: "5",
      name: "Hotel Reservation",
      url: "https://www.aiolia.us",
      description: "Private website hotel reservation like Booking.com",
      languages: [
        {
          name: "React",
          iconifyClass: "logos-react",
        },
        {
          name: "Node.js",
          iconifyClass: "logos-nodejs",
        },
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "Typescript",
          iconifyClass: "vscode-icons:file-type-typescript",
        },
      ],
    },
    {
      id: "6",
      name: "Portofoio App",
      url: "#",
      description: "This portofolio website. 😊",
      languages: [
        {
          name: "React",
          iconifyClass: "logos-react",
        },
      ],
    },
  ],
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
  projects,
};
