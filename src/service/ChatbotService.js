const natural = require("natural");

const faqs = [
  {
    //Greetings
    question: ["hi", "hello", "Good morning"],
    answer: ["hi", "hello", "bonjour"],
  },
  {
    //Experience
    question: [
      "How many years of experience do you have",
      "exp",
      "What is your expereince",
    ],
    answer: [
      "I have 3+ years of experience in Web and mobile development. I have an expertise in SCRUM and Agile, combining strong teamwork and autonomous work style for successful project delivery.",
    ],
  },
  {
    //Inspiration developer
    question: [
      "What inspired you to become a developer?",
      "inspiration",
      "What motivated you to pursue a career in development?",
      "What sparked your interest in coding?",
      "What led you to choose software development as a profession?",
      "What encouraged you to become a developer?",
      "What inspired you to enter the world of programming?",
      "What made you decide to pursue a career as a developer?",
      "What ignited your passion for coding?",
      "What drove you to become a software developer?",
      "What attracted you to the field of software engineering?",
      "What influenced you to become a developer?",
      "What was the catalyst for your interest in development?",
      "What prompted you to pursue a career in software engineering?",
      "What encouraged you to learn programming?",
      "What sparked your passion for coding?",
      "What inspired you to enter the world of software development?",
      "What led you to become a developer?",
      "What motivated you to start coding?",
      "What drove you to pursue a career as a programmer?",
      "What ignited your curiosity about programming?",
      "What triggered your interest in software development?",
      "What inspired you to choose a career in development?",
      "What sparked your decision to become a developer?",
      "What led you to pursue software development as a profession?",
      "What motivated you to become a programmer?",
      "What ignited your interest in coding?",
      "What encouraged you to enter the world of development?",
      "What triggered your curiosity about software engineering?",
      "What influenced your decision to become a software developer?",
      "What made you interested in pursuing a career in programming?",
      "What caused you to choose development as your profession?",
    ],
    answer: [""],
  },
  // Mindset

  {
    // Kind of applications
    question: [
      "What kind of applications do you develop?",
      "What type of software do you create?",
      "What kinds of apps are you working on?",
      "Could you tell me more about the software you develop?",
      "What specific types of applications do you specialize in?",
      "Can you describe the nature of the applications you develop?",
      "What sort of programs are you currently developing?",
      "What specific kinds of software are you focused on?",
      "What types of applications are you interested in developing?",
      "Could you give me an overview of the types of apps you create?",
      "What are some examples of applications you've developed in the past?",
      "What type of software do you specialize in developing?",
      "What kinds of apps have you developed in the past?",
      "Could you describe the types of applications you create?",
      "What specific software applications are you focused on developing?",
      "Can you tell me more about the kind of software you develop?",
      "What types of applications are you interested in creating?",
      "What software applications have you created that you're most proud of?",
      "What types of software do you have experience developing?",
      "Could you give me examples of the types of applications you've developed?",
    ],
    answer: [
      "I develop web and mobile applications for Android and iOS and can also assure their deployment. The applications I develop cover various fields including tourism, therapy, business, ... ",
      "My area of expertise revolves around developing web and mobile applications for Android and iOS. I am proficient in ensuring the proper deployment of these applications, and the industries that I cater to include tourism, therapy, and business.",
    ],
  },
  // {
  //   question: [
  //     "Can you integrate third-party services like Firebase, Google Cloud Platform, Google Analytics, and Microsoft Azure?",
  //   ],
  //   answer: [""],
  // },
  {
    // Programming languages and speciality
    question: [
      "What programming languages are you proficient in?",
      "What programming languages do you know well?",
      "Which programming languages are you comfortable working with?",
      "What languages do you have experience programming in?",
      "In which programming languages are you proficient?",
      "What coding languages are you most familiar with?",
      "What programming languages have you worked with extensively?",
      "What coding languages are you confident in using?",
      "What languages are you skilled in programming with?",
      "Which programming languages are you most adept at?",
      "What coding languages are you proficient in?",
      "What languages have you worked with frequently?",
      "Which programming languages have you mastered?",
      "What programming languages are you knowledgeable in?",
      "What coding languages are you an expert in?",
      "What programming languages do you have expertise in?",
      "What languages do you have advanced skills in?",
      "What coding languages are you a specialist in?",
      "What programming languages are you adept at using?",
      "What coding languages do you have a strong grasp of?",
      "What programming languages do you use most frequently?",
      "What coding languages are you most experienced with?",
      "What programming languages do you consider yourself skilled in?",
      "What languages are you confident in coding with?",
      "What coding languages are you comfortable writing code in?",
      "What programming languages do you use in your daily work?",
      "What coding languages do you have advanced knowledge of?",
      "What languages do you feel confident debugging in?",
      "What programming languages do you have the most experience with?",
      "What coding languages are you most proficient in?",
      "What programming languages have you used on real-world projects?",
    ],
    answer: [""],
  },
  {
    // Development preference
    question: ["What is your preferred development environment?"],
    answer: [""],
  },
  {
    //Testing
    question: [
      "Can you explain your approach to testing?",
      "How do you approach testing?",
      "What's your testing strategy?",
      "Can you walk me through your testing process?",
      "Tell me about your testing methodology.",
      "How do you ensure the quality of your work?",
      "What steps do you take to test your code?",
      "What's your approach to testing software?",
      "How do you determine what to test?",
      "What testing tools do you use?",
      "Can you describe your testing philosophy?",
      "How do you decide what types of tests to run?",
      "What criteria do you use to determine if a test has passed?",
      "What are the key elements of your testing approach?",
      "What's your experience with automated testing?",
      "How do you measure the effectiveness of your testing?",
      "What role does testing play in your development process?",
      "How do you handle regression testing?",
      "What's your strategy for testing edge cases?",
      "How do you collaborate with others on testing?",
      "What kind of testing do you do for security?",
      "What's your approach to testing for accessibility?",
      "How do you approach load testing?",
      "What's your experience with performance testing?",
      "Can you explain your unit testing approach?",
      "What's your integration testing process like?",
      "How do you test for compatibility across different devices/browsers?",
      "What's your experience with exploratory testing?",
      "How do you handle testing in agile development?",
      "What's your experience with continuous testing?",
      "Can you explain your testing automation approach?",
    ],
    answer: [""],
  },
  {
    //Debugging
    question: [
      "How do you approach debugging and troubleshooting issues?",
      "What's your process for debugging and troubleshooting?",
      "How do you go about identifying and fixing bugs?",
      "Can you walk me through your debugging approach?",
      "What tools do you use for debugging?",
      "How do you troubleshoot complex issues?",
      "What's your experience with root cause analysis?",
      "What's your approach to diagnosing problems?",
      "How do you handle difficult-to-reproduce bugs?",
      "What steps do you take when debugging code?",
      "Can you explain your methodology for troubleshooting?",
      "What's your strategy for finding the source of an issue?",
      "How do you approach debugging in a team setting?",
      "What's your experience with debugging in production environments?",
      "What's your approach to debugging code you didn't write?",
      "How do you handle debugging legacy code?",
      "What's your experience with debugging multi-threaded applications?",
      "What debugging techniques do you find most effective?",
      "What's your experience with debugging network issues?",
      "How do you handle debugging issues caused by third-party dependencies?",
      "What's your experience with debugging memory leaks?",
      "How do you approach debugging issues in a distributed system?",
      "What's your experience with debugging issues in a cloud environment?",
      "What's your approach to debugging issues in a microservices architecture?",
      "How do you handle debugging issues in a containerized environment?",
      "What's your experience with debugging issues in a mobile app?",
      "What's your approach to debugging issues with performance?",
      "How do you handle debugging issues with security vulnerabilities?",
      "What's your experience with debugging issues with race conditions?",
      "What's your approach to debugging issues with concurrency?",
      "How do you handle debugging issues with asynchronous code?",
    ],
    answer: [""],
  },
  {
    //Problem solving
    question: [
      "How do you approach problem-solving?",
      "What's your problem-solving process?",
      "How do you tackle difficult problems?",
      "Can you walk me through your approach to problem-solving?",
      "What's your methodology for solving complex problems?",
      "How do you gather information when solving a problem?",
      "What steps do you take when faced with a problem?",
      "How do you approach problem-solving in a team setting?",
      "What's your experience with root cause analysis?",
      "What's your approach to breaking down a problem into smaller components?",
      "How do you evaluate potential solutions to a problem?",
      "What techniques do you use for creative problem-solving?",
      "How do you handle problems that seem unsolvable?",
      "What's your experience with problem-solving under pressure?",
      "What's your approach to problem-solving when you have limited resources?",
      "How do you handle conflicting priorities when problem-solving?",
      "What's your experience with problem-solving in a fast-paced environment?",
      "How do you balance efficiency with thoroughness when problem-solving?",
      "What's your experience with problem-solving in a customer-facing role?",
      "What's your approach to problem-solving when dealing with technical constraints?",
      "What's your experience with problem-solving in a cross-functional team?",
      "How do you handle disagreements when problem-solving with others?",
      "What's your experience with problem-solving in a rapidly-changing industry?",
      "What's your approach to problem-solving when dealing with ambiguous situations?",
      "What's your experience with problem-solving in a data-driven environment?",
      "How do you handle problem-solving when there are multiple possible solutions?",
      "What's your approach to problem-solving when dealing with constraints outside of your control?",
      "What's your experience with problem-solving in a regulated industry?",
    ],
    answer: [""],
  },
  // {
  //   question: [
  //     "Can you provide examples of how you have improved the performance of applications you have worked on?",
  //   ],
  //   answer: [""],
  // },
  {
    // Kind of projects
    question: [
      "What types of projects have you completed in the past?",
      "What kinds of projects have you been involved in?",
      "What sorts of projects have you worked on previously?",
      "What categories of projects have you delivered?",
      "What genres of projects have you tackled?",
      "What varieties of projects have you executed?",
      "What types of assignments have you undertaken?",
      "What sorts of initiatives have you contributed to?",
      "What kinds of ventures have you participated in?",
      "What styles of projects have you accomplished?",
      "What types of endeavors have you been a part of?",
      "What types of undertakings have you completed?",
      "What kinds of tasks have you worked on?",
      "What types of initiatives have you helped bring to fruition?",
      "What categories of projects have you been a part of?",
      "What types of projects have you been responsible for?",
      "What genres of projects have you led?",
      "What varieties of projects have you managed?",
      "What types of projects have you overseen?",
      "What kinds of projects have you delivered on-time and under budget?",
      "What types of projects have you executed in a team environment?",
      "What sorts of projects have you completed independently?",
      "What types of initiatives have you taken on as a freelancer?",
      "What kinds of projects have you worked on as a consultant?",
      "What types of projects have you completed for clients?",
      "What kinds of projects have you worked on in a startup environment?",
      "What sorts of projects have you tackled in an enterprise setting?",
      "What types of projects have you contributed to in a nonprofit organization?",
      "What kinds of projects have you worked on as a volunteer?",
      "What types of projects have you completed as part of your academic coursework?",
    ],
    answer: [" kind of project"],
  },
  {
    //Education
    question: [
      "Can you provide more details about your master and bachelor degrees?",
      "Tell me more about your academic background.",
      "Can you describe your educational qualifications in more detail?",
      "What did you study in your bachelor's and master's degrees?",
      "Can you give me more information about your undergraduate and graduate studies?",
      "How did your bachelor's and master's degrees prepare you for this role?",
      "What was your major in college and what did you focus on in graduate school?",
      "Can you talk more about the coursework you completed in your bachelor's and master's degrees?",
      "What was the focus of your research during your master's program?",
      "What types of projects did you work on during your bachelor's and master's programs?",
      "What were your favorite courses during your bachelor's and master's degrees?",
      "Can you tell me more about any research you conducted during your master's program?",
      "What was the most challenging aspect of your master's program?",
      "What was the most rewarding aspect of your bachelor's degree?",
      "Can you describe any extracurricular activities you were involved in during your undergraduate and graduate studies?",
      "What skills did you develop during your bachelor's and master's programs that will be useful in this role?",
    ],
    answer: [""],
  },

  {
    //Application development process
    question: [
      "Can you explain your process for developing applications?",
      "Can you walk me through your approach to building applications?",
      "How do you typically develop applications?",
      "What's your process for creating applications?",
      "Could you share your application development methodology?",
      "Can you describe how you go about building applications?",
      "What steps do you take to develop applications?",
      "Would you mind outlining your application development process?",
      "Can you tell me about your typical workflow when developing applications?",
      "How do you usually start building an application?",
      "What's your strategy for developing applications?",
      "Can you provide some insight into how you develop applications?",
      "What techniques do you use to build applications?",
      "How do you go about creating applications?",
      "Can you shed some light on your application development approach?",
      "What's your process for creating software applications?",
      "Could you explain your methodology for building applications?",
      "What steps do you follow when developing applications?",
      "Can you tell me about your approach to developing applications?",
      "How do you approach building software applications?",
      "Can you give an overview of your application development process?",
      "What's your typical process for building applications?",
      "Could you walk me through your application development process?",
      "Can you elaborate on how you build applications?",
      "How do you approach application development?",
      "What's your method for building applications?",
      "Can you talk about how you develop applications?",
      "What's your typical workflow for application development?",
      "Can you discuss your application development process?",
      "What's your strategy for creating applications?",
    ],
    answer: [""],
  },
  {
    question: [
      "What are your core strengths as a developer?",
      "What technical skills do you consider your strongest?",
      "What programming areas do you excel at?",
      "What are your most valuable skills in software development?",
      "What do you consider your top technical competencies?",
      "What areas of software development are you most knowledgeable in?",
      "What are your key strengths in coding?",
      "What programming skills do you possess that set you apart from others?",
      "What do you think are your most valuable strengths in software engineering?",
      "What are your core technical proficiencies?",
      "What programming tools and technologies are you proficient in?",
      "What technical areas do you specialize in as a developer?",
      "What sets you apart from other developers in terms of your skills?",
      "What are your strongest programming abilities?",
      "What technical competencies do you bring to the table?",
      "What are your areas of expertise as a developer?",
      "What makes you a unique developer in terms of your skills?",
      "What programming concepts do you have the strongest grasp of?",
      "What technical abilities do you consider your top strengths?",
      "What are your most valuable technical skills in software development?",
      "What are the top areas of programming that you excel in?",
      "What do you think are your most valuable technical competencies?",
      "What makes you a standout developer in terms of your skills?",
      "What technical proficiencies do you possess that are most valuable?",
      "What programming languages do you have the most expertise in?",
      "What are your core programming strengths?",
      "What technical areas do you have the most experience in?",
      "What do you consider your most valuable strengths as a software engineer?",
      "What are your strongest technical proficiencies?",
      "What makes you a skilled developer in terms of your abilities?",
      "What areas of software development do you excel in the most?",
    ],
    answer: [""],
  },
  // {
  //   question: ["Have you contributed to any open source projects?"],
  //   answer: [""],
  // },
  {
    //Veille techno
    question: [
      "How do you stay up-to-date with new technologies and trends?",
      "What steps do you take to keep your knowledge current with the latest technology trends?",
      "What methods do you use to stay current with emerging technologies?",
      "How do you stay informed about the latest advancements in your field?",
      "What resources do you rely on to stay up-to-date with new technology developments?",
      "What strategies do you use to stay on top of industry trends?",
      "What do you do to stay informed about the latest trends in technology?",
      "What steps do you take to keep up with new advancements in your field?",
      "What actions do you take to stay abreast of the latest developments in your industry?",
      "What do you do to keep your skills up-to-date with the latest technologies?",
      "What measures do you take to stay current with the newest tools and technologies?",
      "What steps do you take to remain knowledgeable about the latest trends in your area of expertise?",
      "What resources do you consult to keep yourself up-to-date with the latest technology trends?",
      "What techniques do you use to keep your knowledge current with emerging technologies?",
      "What are your methods for staying current with the latest technological advancements?",
      "What do you do to stay on top of emerging technologies in your industry?",
      "What strategies do you employ to stay informed about the latest tech trends?",
      "What tactics do you use to keep your knowledge of technology current?",
      "What steps do you take to stay current with the latest software development trends?",
      "What measures do you take to stay current with the latest web development trends?",
      "What actions do you take to stay current with the latest mobile development trends?",
      "What steps do you take to stay informed about the latest cloud computing trends?",
      "What resources do you rely on to keep up-to-date with the latest technology news?",
    ],
    answer: [""],
  },
  {
    //Challenges
    question: [
      "What kind of development challenges do you enjoy tackling the most?",
      "What are some of the most difficult development challenges you've faced?",
      "What development projects have you found the most interesting?",
      "What aspects of development do you find most challenging?",
      "What types of development work do you find the most rewarding?",
      "What are some development projects you've worked on that you've found particularly satisfying?",
      "What development projects have you worked on that have challenged you the most?",
      "What development technologies are you most passionate about working with?",
      "What development work have you found to be the most fulfilling?",
      "What development projects have you found to be the most exciting?",
      "What are some of your favorite development projects that you've worked on?",
      "What development work have you found to be the most satisfying?",
      "What do you think makes a development challenge particularly interesting?",
      "What types of development work do you find the most engaging?",
      "What development projects have you worked on that have been particularly challenging?",
      "What are some of the most complex development challenges you've tackled?",
      "What development work have you found to be the most meaningful?",
      "What are some of the most interesting development projects you've worked on?",
      "What development technologies are you most comfortable working with?",
      "What aspects of development work do you find the most enjoyable?",
      "What development challenges have you found to be the most rewarding?",
      "What are some of the most innovative development projects you've been a part of?",
      "What development challenges have you found to be the most stimulating?",
      "What types of development work do you find the most challenging, but also the most enjoyable?",
      "What development work have you found to be the most intellectually stimulating?",
      "What development challenges have you found to be the most thought-provoking?",
      "What are some of the most satisfying development challenges you've tackled?",
      "What development projects have you worked on that have been the most impactful?",
      "What types of development challenges do you find the most interesting?",
      "What development challenges have you found to be the most creative?",
      "What development work have you found to be the most rewarding on a personal level?",
      "What development challenges have you found to be the most meaningful to you?",
    ],
    answer: [""],
  },

  {
    //Project management && collaboration
    question: ["Can you explain your approach to project management?"],
    answer: [""],
  },

  {
    //Code quality
    question: [
      "How do you ensure high quality of your code?",
      "What steps do you take to ensure that your code is of high quality?",
      "How do you ensure that your code is maintainable?",
      "What practices do you use to improve the quality of your code?",
      "What tools do you use to ensure the quality of your code?",
      "What methodologies do you use to ensure the quality of your code?",
      "How do you ensure that your code is scalable?",
      "What processes do you follow to maintain the quality of your code?",
      "What do you do to make sure that your code is easy to read and understand?",
      "How do you ensure that your code is efficient and performant?",
      "What strategies do you use to ensure the reliability of your code?",
      "What steps do you take to ensure that your code is secure?",
      "What do you do to make sure that your code is easy to debug?",
      "What metrics do you use to measure the quality of your code?",
      "What code review practices do you follow to ensure the quality of your code?",
      "What design patterns do you use to ensure the quality of your code?",
      "What coding standards do you adhere to for ensuring the quality of your code?",
      "What techniques do you use for refactoring your code to improve its quality?",
      "How do you ensure that your code is easy to maintain and extend?",
      "What do you do to ensure that your code is well-documented?",
      "How do you ensure that your code follows best practices?",
      "What do you do to ensure that your code is compatible with different platforms?",
      "What do you do to ensure that your code is portable?",
      "What do you do to ensure that your code is readable by other developers?",
      "What testing methodologies do you follow to ensure the quality of your code?",
      "How do you ensure that your code is optimized for performance?",
      "What measures do you take to ensure that your code is easy to deploy?",
      "How do you ensure that your code is easy to understand for non-technical stakeholders?",
      "What steps do you take to ensure that your code is consistent with the project requirements?",
      "What strategies do you use to ensure the maintainability of your code?",
    ],
    answer: [""],
  },

  {
    //Handle criticism behavior
    question: ["How do you handle constructive criticism or feedback?"],
    answer: [""],
  },
  // Particular project
  {
    question: [
      "Can you provide an example of a particularly successful project you have worked on",
    ],
    answer: [""],
  },

  // Add more FAQs here

  //Collaboration and teamwork
  {
    question: [
      "What's your approach to collaborating with others?",
      "How do you work with teammates effectively?",
      "What strategies do you use to collaborate on projects?",
      "What's your process for collaborating with others?",
      "How do you ensure effective teamwork?",
      "What are your tips for successful collaboration?",
      "How do you encourage collaboration among team members?",
      "What steps do you take to ensure smooth teamwork?",
      "What's your experience with collaborative projects?",
      "How do you manage conflicts in a collaborative environment?",
      "What do you think makes a great team player?",
      "How do you foster a collaborative culture?",
      "What role do you typically play in a collaborative project?",
      "How do you build trust with your teammates?",
      "What's your opinion on the importance of teamwork?",
      "What are your strengths when it comes to working with others?",
      "How do you communicate effectively in a team setting?",
      "What's your experience with remote teamwork?",
      "What techniques do you use to build relationships with team members?",
      "How do you approach team decision-making?",
      "What's your opinion on the value of diverse perspectives in teamwork?",
      "How do you handle a team member who's not pulling their weight?",
      "What's your experience with cross-functional collaboration?",
      "How do you ensure that everyone's contributions are valued in a team?",
      "What do you think are the most important qualities for a successful team?",
      "What's your process for giving and receiving feedback in a team?",
      "What are your tips for keeping a team motivated?",
      "How do you handle conflicts between team members?",
      "What's your experience with leading a team?",
      "How do you encourage innovation and creativity in a team?",
    ],
    answer: [""],
  },
  //Culture fit
  //Future goals
  {
    question: [
      "What are your long-term goals?",
      "What do you hope to achieve in the future?",
      "What are your aspirations?",
      "Where do you see yourself in five years?",
      "What plans do you have for your career?",
      "What are your career objectives?",
      "What is your ultimate career goal?",
      "What are your dreams for the future?",
      "What do you want to accomplish in the next few years?",
      "What do you see as your future path?",
      "What are your career ambitions?",
      "What are your professional goals?",
      "What are your aspirations for the future?",
      "What are your expectations for your career?",
      "What are your plans for personal growth and development?",
      "What are your goals for the next decade?",
      "What are your hopes for your future?",
      "What do you envision for yourself in the future?",
      "What do you see as your future career trajectory?",
      "What are your desired outcomes for your career?",
      "What are your personal and professional objectives?",
      "What are your future plans and goals?",
      "What are your targets for your career?",
      "What is your vision for your career and personal life?",
      "What do you see as your potential for growth?",
      "What are your expectations for your future?",
      "What is your desired career path?",
      "What are your future ambitions?",
      "What do you see as your career trajectory in the long-term?",
    ],
    answer: [""],
  },
  //Qualities
  {
    question: [
      "What are some of your strongest traits?",
      "What do you consider to be your greatest strengths?",
      "What personal qualities do you think contribute to your success?",
      "What makes you a valuable team member?",
      "What are your top professional qualities?",
      "What are some of your unique strengths?",
      "What do you bring to the table?",
      "What character traits do you think set you apart?",
      "What qualities do others often compliment you on?",
      "What do you believe are your standout qualities?",
      "What personal attributes help you perform well?",
      "What skills and characteristics make you an asset?",
      "What do you feel are your most effective skills?",
      "What qualities do you think are most important in your field?",
      "What attributes make you a good fit for this position?",
      "What do you consider to be your best traits as a professional?",
      "What personal attributes help you succeed in your career?",
      "What qualities do you believe are necessary for success?",
      "What do you consider to be your most valuable qualities?",
      "What characteristics do you think make you a strong candidate?",
      "What qualities do you have that help you solve problems?",
      "What makes you a good team player?",
      "What are your most important leadership qualities?",
      "What traits do you possess that help you achieve your goals?",
      "What personal qualities help you adapt to change?",
      "What makes you stand out as a candidate?",
      "What personal characteristics help you handle challenges?",
      "What qualities do you think are most important for building relationships?",
    ],
    answer: [""],
  },
  //Hobbies
  {
    question: [
      "What do you like to do in your free time?",
      "What activities do you enjoy?",
      "What are some of your favorite pastimes?",
      "What keeps you busy outside of work/school?",
      "What are your favorite things to do for fun?",
      "What are your leisure activities?",
      "What do you do to relax?",
      "What interests do you have?",
      "What do you enjoy doing?",
      "What are your preferred hobbies?",
      "What do you like to do when you're not working?",
      "What do you spend your time doing?",
      "What activities make you happy?",
      "What are your favorite things to do on weekends?",
      "What do you enjoy doing with your free time?",
      "What do you do for fun?",
      "What are your extracurricular activities?",
      "What are your favorite hobbies and interests?",
      "What activities do you participate in outside of work/school?",
      "What are some things you like to do outside of your regular routine?",
      "What do you do in your spare time?",
      "What are your favorite ways to unwind?",
      "What are your go-to activities for entertainment?",
      "What are your preferred forms of recreation?",
      "What do you like to do when you have time to yourself?",
      "What hobbies or interests do you have outside of work/school?",
      "What activities do you do for fun and relaxation?",
      "What are your favorite ways to pass the time?",
      "What do you enjoy doing in your downtime?",
      "What do you like to do when you're not busy?",
    ],
    answer: [""],
  },
];

// Define a function to find the best match for a user query
function findBestMatch(query) {
  let bestMatch = -1;
  let bestScore = 0;
  for (let i = 0; i < faqs.length; i++) {
    for (let j = 0; j < faqs[i].question.length; j++) {
      let score = getSimilarityScore(query, faqs[i].question[j]);
      if (score > bestScore) {
        bestMatch = i;
        bestScore = score;
      }
    }
  }
  console.log("best similarity score:" + bestScore);
  return bestMatch;
}

// Define a function to calculate the similarity score between two strings
function getSimilarityScore(str1, str2) {
  // Calculate the Levenshtein distance between the two strings
  let m = str1.length;
  let n = str2.length;
  let dp = [];
  for (let i = 0; i <= m; i++) {
    dp[i] = [];
    for (let j = 0; j <= n; j++) {
      if (i === 0) {
        dp[i][j] = j;
      } else if (j === 0) {
        dp[i][j] = i;
      } else {
        dp[i][j] = Math.min(
          dp[i - 1][j - 1] + (str1[i - 1] === str2[j - 1] ? 0 : 1),
          dp[i - 1][j] + 1,
          dp[i][j - 1] + 1
        );
      }
    }
  }
  let distance = dp[m][n];

  // Calculate the similarity score as 1 minus the normalized distance
  let maxDistance = Math.max(str1.length, str2.length);
  let similarity = 1 - distance / maxDistance;
  return similarity;
}
function getSimilarityScore2(str1, str2) {
  // const tokenizer = new natural.WordTokenizer();
  // const tokens1 = tokenizer.tokenize(str1.toLowerCase());
  // const tokens2 = tokenizer.tokenize(str2.toLowerCase());

  // const vector1 = new natural.TfIdf().addDocument(tokens1);
  // const vector2 = new natural.TfIdf().addDocument(tokens2);

  const score = natural.DiceCoefficient(str1, str2);
  return score;
}

// Define a function to handle user queries
function handleQuery(query) {
  let bestMatch = findBestMatch(query);
  console.log(query + "->" + faqs[bestMatch].question[0]);
  if (bestMatch != -1) {
    let n = faqs[bestMatch].answer.length;
    let random = Math.floor(Math.random() * n);
    // console.log("bestMatch",random);
    return faqs[bestMatch].answer[random];
  } else {
    return "Sorry, I couldn't find an answer to your question.";
  }
}

export { handleQuery };

// Example usage
//   console.log(handleQuery("What is your return policy?"));
// Output: "Our return policy is..."

//   console.log(handleQuery("How do I cancel my order?"));
// Output: "Sorry, I couldn't find an answer to your question.
