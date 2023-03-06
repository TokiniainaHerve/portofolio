const faqs = [
  { question: ["hi","hello","Good morning"] ,answer:["hi","hello","bonjour"]},
  { question: ["How many years of experience do you have?"] ,answer:[""]},
  { question: ["What inspired you to become a developer?"],answer:[""] },
  { question: ["What kind of mindset do you bring to your work as a developer?"],answer:[""] },
  { question: ["How do you handle failure or setbacks in your work?"],answer:[""] },
  { question: ["How do you stay motivated when working on long or challenging projects?"],answer:[""] },
  { question: ["What is your philosophy on continuous learning and improvement?"],answer:[""] },
  { question: ["Can you describe a time when you had to work under pressure, and how you handled it?"],answer:[""] },
  { question: ["What is your philosophy on work-life balance and self-care as a developer?"],answer:[""] },
  { question: ["What kind of applications do you develop?"],answer:[""] },
  { question: ["What technologies do you use to develop your applications?"] },
  { question: ["Can you integrate third-party services like Firebase, Google Cloud Platform, Google Analytics, and Microsoft Azure?"],answer:[""] },
  { question: ["What programming languages are you proficient in?"],answer:[""] },
  { question: ["What is your preferred development environment?"],answer:[""] },
  { question: ["Can you explain your approach to testing?"],answer:[""] },
  { question: ["How do you approach debugging and troubleshooting issues?"],answer:[""] },
  { question: ["How do you approach problem-solving?"],answer:[""] },
  { question: ["Can you provide examples of how you have improved the performance of applications you have worked on?"],answer:[""] },
  { question: ["What kind of projects have you worked on?"],answer:[""] },
  { question: ["Can you provide more details about your master and bachelor degrees?"],answer:[""] },
  { question: ["What kind of certifications do you have?"],answer:[""] },
  { question: ["Can you provide some examples of the applications you have developed?"],answer:[""] },
  { question: ["What is your approach to building innovative solutions?"],answer:[""] },
  { question: ["How do you ensure user-centered design in your applications?"],answer:[""] },
  { question: ["Do you work independently or in a team?"],answer:[""] },
  { question: ["Can you explain your process for developing applications?"],answer:[""] },
  { question: ["What are your core strengths as a developer?"],answer:[""] },
  { question: ["Have you contributed to any open source projects?"],answer:[""] },
  { question: ["How do you stay up-to-date with new technologies and trends?"],answer:[""] },
  { question: ["What kind of development challenges do you enjoy tackling the most?"],answer:[""] },
  { question: ["Have you worked with any notable clients or projects?"],answer:[""] },
  { question: ["Can you explain your approach to project management?"],answer:[""] },
  { question: ["How do you collaborate with other developers and team members?"],answer:[""] },
  { question: ["What is your philosophy on code readability and maintainability?"],answer:[""] },
  { question: ["What is your opinion on the importance of user experience in application development?"],answer:[""] },
  { question: ["How do you approach balancing creativity and practicality in your work?"],answer:[""] },
  { question: ["What values do you bring to your work as a developer?"],answer:[""] },
  { question: ["How do you ensure high quality of your code?"],answer:[""] },
  { question: ["Can you deploy applications on different platforms like web, mobile, and app stores?"],answer:[""] },
  { question: ["Can you explain your approach to collaboration and teamwork?"],answer:[""] },
  { question: ["How do you handle constructive criticism or feedback?"],answer:[""] },
  { question: ["Can you provide an example of a particularly successful project you have worked on"],answer:[""]},
  
    // Add more FAQs here
  ];
  
  // Define a function to find the best match for a user query
  function findBestMatch(query) {
    let bestMatch = -1;
    let bestScore = 0;
    for (let i = 0; i < faqs.length; i++) {
      for(let j=0;j<faqs[i].question.length;j++){
        let score = getSimilarityScore(query, faqs[i].question[j]);
        if (score > bestScore) {
          bestMatch = i;
          bestScore = score;
        }
      }
   
    }
    return bestMatch;
  }
  
  // Define a function to calculate the similarity score between two strings
  function getSimilarityScore(str1, str2) {
    // Use a library such as Natural or Compromise for more advanced NLP
    return str1 === str2 ? 1 : 0;
  }
  
  // Define a function to handle user queries
  function handleQuery(query) {
    let bestMatch = findBestMatch(query);

    if (bestMatch!=-1) {
      let n = faqs[bestMatch].answer.length;
      let random = Math.floor(Math.random() * (n));
      // console.log("bestMatch",random);
      return faqs[bestMatch].answer[random];
    } else {
      return "Sorry, I couldn't find an answer to your question.";
    }
  }

 export {handleQuery}; 
  
  // Example usage
//   console.log(handleQuery("What is your return policy?"));
  // Output: "Our return policy is..."
  
//   console.log(handleQuery("How do I cancel my order?"));
  // Output: "Sorry, I couldn't find an answer to your question.