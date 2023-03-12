import { natural } from "natural";

const faqs = [
  {
    question: ["hi", "hello", "Good morning"],
    answer: ["hi", "hello", "bonjour"],
  },
  {
    question: ["How many years of experience do you have", "exp"],
    answer: [
      "I have 3+ years of experience in Web and mobile development. I have an expertise in SCRUM and Agile, combining strong teamwork and autonomous work style for successful project delivery.",
    ],
  },
  { question: ["What inspired you to become a developer?"], answer: [""] },
  {
    question: [
      "What kind of mindset do you bring to your work as a developer?",
    ],
    answer: [""],
  },
  {
    question: ["How do you handle failure or setbacks in your work?"],
    answer: [""],
  },
  {
    question: [
      "How do you stay motivated when working on long or challenging projects?",
    ],
    answer: [""],
  },
  {
    question: [
      "What is your philosophy on continuous learning and improvement?",
    ],
    answer: [""],
  },
  {
    question: [
      "Can you describe a time when you had to work under pressure, and how you handled it?",
    ],
    answer: [""],
  },
  {
    question: [
      "What is your philosophy on work-life balance and self-care as a developer?",
    ],
    answer: [""],
  },
  {
    question: ["What kind of applications do you develop?"],
    answer: [
      "I develop web and mobile applications for Android and iOS and can also assure their deployment. The applications I develop cover various fields including tourism, therapy, business, ... ",
      "My area of expertise revolves around developing web and mobile applications for Android and iOS. I am proficient in ensuring the proper deployment of these applications, and the industries that I cater to include tourism, therapy, and business.",
    ],
  },
  { question: ["What technologies do you use to develop your applications?"] },
  {
    question: [
      "Can you integrate third-party services like Firebase, Google Cloud Platform, Google Analytics, and Microsoft Azure?",
    ],
    answer: [""],
  },
  {
    question: ["What programming languages are you proficient in?"],
    answer: [""],
  },
  {
    question: ["What is your preferred development environment?"],
    answer: [""],
  },
  { question: ["Can you explain your approach to testing?"], answer: [""] },
  {
    question: ["How do you approach debugging and troubleshooting issues?"],
    answer: [""],
  },
  { question: ["How do you approach problem-solving?"], answer: [""] },
  {
    question: [
      "Can you provide examples of how you have improved the performance of applications you have worked on?",
    ],
    answer: [""],
  },
  {
    question: ["What kind of projects have you worked on?"],
    answer: [" kind of project"],
  },
  {
    question: [
      "Can you provide more details about your master and bachelor degrees?",
    ],
    answer: [""],
  },
  { question: ["What kind of certifications do you have?"], answer: [""] },
  {
    question: [
      "Can you provide some examples of the applications you have developed?",
    ],
    answer: [""],
  },
  {
    question: ["What is your approach to building innovative solutions?"],
    answer: [""],
  },
  {
    question: ["How do you ensure user-centered design in your applications?"],
    answer: [""],
  },
  { question: ["Do you work independently or in a team?"], answer: [""] },
  {
    question: ["Can you explain your process for developing applications?"],
    answer: [""],
  },
  { question: ["What are your core strengths as a developer?"], answer: [""] },
  {
    question: ["Have you contributed to any open source projects?"],
    answer: [""],
  },
  {
    question: ["How do you stay up-to-date with new technologies and trends?"],
    answer: [""],
  },
  {
    question: [
      "What kind of development challenges do you enjoy tackling the most?",
    ],
    answer: [""],
  },
  {
    question: ["Have you worked with any notable clients or projects?"],
    answer: [""],
  },
  {
    question: ["Can you explain your approach to project management?"],
    answer: [""],
  },
  {
    question: [
      "How do you collaborate with other developers and team members?",
    ],
    answer: [""],
  },
  {
    question: [
      "What is your philosophy on code readability and maintainability?",
    ],
    answer: [""],
  },
  {
    question: [
      "What is your opinion on the importance of user experience in application development?",
    ],
    answer: [""],
  },
  {
    question: [
      "How do you approach balancing creativity and practicality in your work?",
    ],
    answer: [""],
  },
  {
    question: ["What values do you bring to your work as a developer?"],
    answer: [""],
  },
  { question: ["How do you ensure high quality of your code?"], answer: [""] },
  {
    question: [
      "Can you deploy applications on different platforms like web, mobile, and app stores?",
    ],
    answer: [""],
  },
  {
    question: ["Can you explain your approach to collaboration and teamwork?"],
    answer: [""],
  },
  {
    question: ["How do you handle constructive criticism or feedback?"],
    answer: [""],
  },
  {
    question: [
      "Can you provide an example of a particularly successful project you have worked on",
    ],
    answer: [""],
  },

  // Add more FAQs here
];

// Define a function to find the best match for a user query
function findBestMatch(query) {
  let bestMatch = -1;
  let bestScore = 0;
  for (let i = 0; i < faqs.length; i++) {
    for (let j = 0; j < faqs[i].question.length; j++) {
      let score = getSimilarityScore2(query, faqs[i].question[j]);
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
  const tokenizer = new natural.tokenizer();
  const tokens1 = tokenizer.tokenize(str1.toLowerCase());
  const tokens2 = tokenizer.tokenize(str2.toLowerCase());

  const vector1 = new natural.TfIdf().addDocument(tokens1);
  const vector2 = new natural.TfIdf().addDocument(tokens2);

  const score = natural.TfIdf.cosineSimilarity(vector1, vector2);
  return score;
}

// Define a function to handle user queries
function handleQuery(query) {
  let bestMatch = findBestMatch(query);
  console.log(query + "->" + bestMatch);
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
