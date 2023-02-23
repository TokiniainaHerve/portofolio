/* Change this file to get your personal Porfolio */
import { style } from "glamor";
// Website related settings
const settings = {
  isSplash: true, // Change this to true if you want to use the splash screen.
  useCustomCursor: false, // Change this to false if you want the good'ol cursor
  googleTrackingID: "UA-174238252-2",
};

//Home Page
const greeting = {
  title: "Hello 👋.",
  title2: "Tokiniaina",
  logo_name: "Tokiniaina",
  // nickname: "harry / picleric",
  full_name: "Tokiniaina Hervé",
  subTitle:
    "Web and mobile developer . Delivering High-Quality, User-Centered Applications. Curious and Ambitious Developer Building Innovative Solutions for a Better Tomorrow",
  resumeLink:
    "https://drive.google.com/file/d/1wrkG62HyDgbUOjNxexCT891tcqd83_cK/view?usp=sharing",
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
          fontAwesomeClassname: "simple-icons:vuejs",
          style: {
            color: "#dd1b16",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
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
            color: "#F0F8FF",
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
          fontAwesomeClassname: "simple-icons:java",
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
      width:330,height:"auto",
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
      width:330,height:"auto",
    }
  ],
};

const certifications = {
  certifications: [
    {
      title: "Meta Android developer",
      subtitle: "Job-ready skills for an in-demand career and earn a credential from Meta.",
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
      title: "Meta UX/UI Design",
      subtitle: "Principles of UX/UI Design",
      logo_path: "meta.png",
      certificate_link:
        "https://coursera.org/share/6e8d12d540903d196c26edb4a6813c00",
      alt_name: "UX/UI Design",
      color_code: "#e7870c",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I've completed one internship. I've mostly done projects on my own and I am actively looking for internships. I love organizing workshops to share my knowledge with others.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work Experience",
      experiences: [
        {
          title: "Machine Learning Intern",
          company: "Technocolabs",
          company_url: "https://technocolabs.com/",
          logo_path: "Technocolabs.jfif",
          duration: "Sept 2020 - Oct 2020",
          location: "Remote",
          description: `Analysed the changes before and after people started using sanitizers using the covid-19 dataset. Built and analysed several predictive models for defaulting user’s credit card and deployed it on a full-stack website using Flask. Made a predictive model for Blood Donation for Future Expectancy and deployed it on a fully-fledged website. Increased productivity and problem-solving technics by 20%. 
          `,
          // "I worked on the Dashboard project which helps users track their activities while using Walo Application. I also worked on Ocean Inventory Application and it's Admin panel Backend as well as on Ocean Inventory Admin Front-end using React and also worked on Walo Admin Backend.",
          color: "#0071C5",
        },
        {
          title: "Data Science Intern",
          company: "The Sparks Foundation",
          company_url: "hhttps://thesparksfoundation.info/",
          logo_path: "TSF.png",
          duration: "Aug 2020 - Sept 2020",
          location: "Remote",
          description: `Developed predictive models and deployed it on a full-stack website using Flask. Used Boxplot, Heatmap and Confusion Matrix for data visualization. Deep analysis on the superstore dataset using Bar Plots, Bar Charts, Pair Plots and Joint Plots for specific regions.
          `,
          // "Created Front end of Yearn Financial Mutual Funds website. also degined simple web application for better user experience, designed DB Schemas as well.",
          color: "#ee3c26",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "R&D Member",
          company: "Webarch Club",
          company_url: "https://www.webarchsrm.com/",
          logo_path: "Webarch.jfif",
          duration: "Mar 2020 - Nov 2020",
          location: "SRM IST Kattankulathur",
          description:
            "Member responsibilities were to help students in project planning, review issues and pull requests, ensure smooth progress and help juniors out in their difficulties.",
          color: "#4285F4",
        },
        {
          title: "Campus Leader",
          company: "Code For Cause",
          company_url: "https://www.codecau.se/",
          logo_path: "CFC.jfif",
          duration: "Nov 2020 - Present",
          location: "SRM IST Kattankulathur",
          description:
            "Held numerous workshops and distributed learning content for freshers. Contributed to development of the causefolio website displaying the information about the Code for Cause Community.",
          color: "#a60000",
        },
        {
          title: "Machine Learning - Research associate",
          company: "Next Tech Lab",
          company_url: "https://nextech.io/",
          logo_path: "NTL.jfif",
          duration: "Oct 2020 - Present",
          location: "SRM IST Kattankulathur",
          description:
            "Associate responsibilities were to build fast and efficient machine learning models, have talks on research topics related to computer vision and deep learning. Build team projects and intract with fellow members and ensure smooth progress and help juniors out in their difficulties.",
          color: "#62cff0",
        },
        {
          title: "Campus Ambassador",
          company: "Bagcampus",
          company_url: "https://bagcampus.in/",
          logo_path: "Bagcampus.jpg",
          duration: "Dec 2020 - May 2021",
          location: "Remote",
          description:
            "Spread Awareness of new Technologies and Companies and new Opportunities to Students and Grow Bagcampus Community.",
          color: "#0059c9",
        },
        {
          title: "Volunteer",
          company: "Google Crowdsource",
          company_url: "https://indiaenvironment.org/",
          logo_path: "GCS.jfif",
          duration: "Sept 2020 - Present",
          location: "Remote",
          description:
            "As a member of the global Crowdsource community one can gain recognition from other Crowdsourcers and Google.",
          color: "#ffffff",
        },
        {
          title: "Student Volunteer",
          company: "National Service Scheme",
          company_url: "https://indiaenvironment.org/",
          logo_path: "NSS.jfif",
          duration: "Dec 2019 - May 2020",
          location: "SRM IST Kattankulathur",
          description:
            "Take time out over weekends to join a gang of nation builders, nature enthusiasts to conserve what is left.",
          color: "#282b6c",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects make use of a vast variety of latest technology tools. My best experience is to create NodeJS Backend Projects, Python Scripts, and React Project. Below are some of my projects. Note that not all of the mentioned projects are on GitHub yet.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "profile_photo_2.jpeg",
    description:
      "You can contact me at the places mentioned below. I will try to get back to you as fast as I can. ",
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
      id: "0",
      name: "Mind Space",
      url: "https://www.mindspace.cf/",
      description:
        "This is Blogging website where users can create blogs, follow and unfollow other users, get summarized blog reccomendation on their dashboard and have a personalised searching mechanism.",
      languages: [
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
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "Flask",
          iconifyClass: "cib-flask",
        },
      ],
    },
    {
      id: "1",
      name: "Youtube Downloader",
      url: "https://github.com/vvHacker007/Youtube-Downloader/",
      description:
        "A desktop GUI which can be used to download youtube videos and playlist with desired quality and type on desktop.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
      ],
    },
    {
      id: "2",
      name: "Tune In",
      url: "https://github.com/vvHacker007/Tune-In",
      description:
        "Tune in is a collaborative music playing system where multiple guests can join a room and enjoy the song being played. Guests can pause and vote to skip the current song.",
      languages: [
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
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
        {
          name: "Django",
          iconifyClass: "logos-django",
        },
      ],
    },
    {
      id: "3",
      name: "Event Scheduler",
      url: "https://github.com/vvHacker007/Event-Scheduler",
      description:
        "It is an all-purpose scheduler software. It is designed to monitor all the activities and give appropriate reminders for them.",
      languages: [
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
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "Flask",
          iconifyClass: "cib-flask",
        },
      ],
    },
    {
      id: "4",
      name: "Movie Reccomendation System",
      url: "https://github.com/vvHacker007/Movie-Recommendation-Systems",
      description:
        "Made three python kernels explaining and implementing the three different types of movie recommender systems.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "Jupyter Notebook",
          iconifyClass: "logos-jupyter",
        },
      ],
    },
    {
      id: "3",
      name: "Login Authenticator",
      url: "https://github.com/vvHacker007/Login-Authenticator",
      description: "Made a template for a Login Authenticator using Flask ",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "Flask",
          iconifyClass: "cib-flask",
        },
      ],
    },
    {
      id: "4",
      name: "Calculator",
      url: "https://github.com/vvHacker007/Calculator",
      description:
        "Made a GUI based Calculator. Also made an executable file for the project which can be downloaded and used by anyone on their personal computer.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
      ],
    },
    {
      id: "5",
      name: "Notepad",
      url: "https://github.com/vvHacker007/Notepad",
      description:
        "Made a GUI based Notepad. Also made an executable file for the project which can be downloaded and used by anyone on their personal computer.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
      ],
    },
    {
      id: "6",
      name: "Tetris",
      url: "https://github.com/vvHacker007/Tetris",
      description: "Made a GUI based arcade game Tetris using pygame.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
      ],
    },
    {
      id: "7",
      name: "Steganography",
      url: "https://github.com/vvHacker007/Steganography",
      description:
        "A CLI tool to conceal messages within a file, text, image, or video.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "OpenCV",
          iconifyClass: "logos-opencv",
        },
      ],
    },
    {
      id: "8",
      name: "Mini Paint",
      url: "https://github.com/vvHacker007/Mini-Paint",
      description: "GUI based Mini Paint Application.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
      ],
    },
    {
      id: "9",
      name: "Speedtest",
      url: "https://github.com/vvHacker007/Speed-test",
      description:
        "An internet speed testing application which can notify about the download speed, upload speed, and also the reaction time of the connection.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
      ],
    },
    {
      id: "10",
      name: "Cat Classifier",
      url: "https://github.com/vvHacker007/Cat-Classifier",
      description:
        "Binary Cat Classifier made by hard coding Neural Networks in Python without using libraries such as Tensorflow or keras.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "Jupyter Notebook",
          iconifyClass: "logos-jupyter",
        },
      ],
    },
    {
      id: "11",
      name: "Snake",
      url: "https://github.com/vvHacker007/Snake",
      description:
        "A snake game which covers all the basic features like score, high score and an automated speed increase simultaneously when the snake eats the food.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
      ],
    },
    {
      id: "12",
      name: "Score Predictor",
      url: "https://score-predictor-app.herokuapp.com/",
      description:
        "Predicts students score based on the number of hours the student puts in it.",
      languages: [
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
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "Flask",
          iconifyClass: "cib-flask",
        },
        {
          name: "Jupyter Notebook",
          iconifyClass: "logos-jupyter",
        },
      ],
    },
    {
      id: "13",
      name: "Blood Donation Predictor",
      url: "https://blood-donation-predictor-app.herokuapp.com/",
      description:
        "Predicts if one is ready to donate blood based on the user's blood donation history.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "Jupyter Notebook",
          iconifyClass: "logos-jupyter",
        },
      ],
    },
    {
      id: "14",
      name: "Credit-Card Default Predictor",
      url: "https://default-predictor-app.herokuapp.com/",
      description:
        "Predicts whether user's credit card would be defaulted or not based on the user's bank statements and history.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "Jupyter Notebook",
          iconifyClass: "logos-jupyter",
        },
      ],
    },
    {
      id: "15",
      name: "Portfolio Website",
      url: "https://vvhacker007.github.io/Portfolio/",
      description: "You are stalking it right now 😉",
      languages: [
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
        {
          name: "ReactJS",
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
