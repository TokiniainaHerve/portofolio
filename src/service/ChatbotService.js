const faqs = [
    { question: "hi", answer: "My name is Yoshikage Kira. I'm 33 years old. My house is in the northeast section of Morioh, where all the villas are, and I am not married. I work as an employee for the Kame Yu department stores, and I get home every day by 8 PM at the latest. I don't smoke, but I occasionally drink. I'm in bed by 11 PM, and make sure I get eight hours of sleep, no matter what. After having a glass of warm milk and doing about twenty minutes of stretches before going to bed, I usually have no problems sleeping until morning. Just like a baby, I wake up without any fatigue or stress in the morning. I was told there were no issues at my last check-up. I'm trying to explain that I'm a person who wishes to live a very quiet life. I take care not to trouble myself with any enemies, like winning and losing, that would cause me to lose sleep at night. That is how I deal with society, and I know that is what brings me happiness. Although, if I were to fight I wouldn't lose to anyone." },
    { question: "What is your return policy?", answer: "Our return policy is..." },
    { question: "How do I track my order?", answer: "You can track your order by..." },
    { question: "How long does shipping take?", answer: "Shipping usually takes..." },
    // Add more FAQs here
  ];
  
  // Define a function to find the best match for a user query
  function findBestMatch(query) {
    let bestMatch = null;
    let bestScore = 0;
    for (let i = 0; i < faqs.length; i++) {
      let score = getSimilarityScore(query, faqs[i].question);
      if (score > bestScore) {
        bestMatch = faqs[i];
        bestScore = score;
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
    if (bestMatch) {
      return bestMatch.answer;
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