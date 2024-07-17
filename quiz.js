const quesJSON = [
    {
        correctAnswer: 'Three ',
        options: ['Two', 'Three ', 'Four', 'Five'],
        question: "How many pieces of bun are in a Mcdonald's Big Mac?",
    },
    {
        correctAnswer: 'L. Frank Baum',
        options: [
            'Suzanne Collins',
            'James Fenimore Cooper',
            'L. Frank Baum',
            'Donna Leon',
        ],
        question: "Which author wrote 'The Wonderful Wizard of Oz'?",
    },
    {
        correctAnswer: 'Atlanta United',
        options: [
            'Atlanta United',
            'Atlanta Impact',
            'Atlanta Bulls',
            'Atlanta Stars',
        ],
        question: 'Which of these is a soccer team based in Atlanta?',
    },
    {
        correctAnswer: 'A Nanny',
        options: ['A Sow', 'A Lioness', 'A Hen', 'A Nanny'],
        question: 'A female goat is known as what?',
    },
    {
        correctAnswer: 'P. L. Travers',
        options: [
            'J. R. R. Tolkien',
            'P. L. Travers',
            'Lewis Carroll',
            'Enid Blyton',
        ],
        question: "Which author wrote 'Mary Poppins'?",
    },
    {
        correctAnswer: 'Australia',
        options: ['India', 'Australia', 'England', 'New Zealand'],
        question: "Which Nation has won the most Cricket World Cups?",
    },
    {
        correctAnswer: 'Brazil',
        options: ['Argentina', 'Germany', 'France', 'Brazil'],
        question: "Which Nation has won the most FIFA World Cup?",
    },
    {
        correctAnswer: 'Kuwaiti Dinar',
        options: ['USD', 'INR', 'Euro', 'Kuwaiti Dinar'],
        question: "Which currency is the most expensive in the world?",
    },
    {
        correctAnswer: 'Chris Evans',
        options: ['Robert Downey Jr', 'Chris Hemsworth', 'Chris Evans', 'Tom Cruise'],
        question: "Which actor played the role of Captain America in Marvel Cinematic Universe movies?",
    },
    {
        correctAnswer: 'Skin',
        options: ['Brain', 'Pancreas', 'Liver', 'Skin'],
        question: "Which is the largest organ in a human body?",
    },
    {
        correctAnswer: 'Canada',
        options: ['Canada', 'India', 'Australia', 'Brazil'],
        question: "Which country has the longest coastline in the world?",
    },
    {
        correctAnswer: 'Tungsten',
        options: ['Tungsten', 'Iron', 'Gold', 'Titanium'],
        question: "Which of these elements has the highest melting point?",
    },
    {
        correctAnswer: 'Cannberra',
        options: ['Cannberra', 'Sydney', 'Melbourne', 'Perth'],
        question: "What is the capital city of Australia?",
    },
    {
        correctAnswer: 'Antarctic Desert',
        options: ['Sahara Desert', 'Antarctic Desert', 'Gobi Desert', 'Arabian Desert'],
        question: "What is the largest desert in the world?",
    },
    {
        correctAnswer: 'Lewis Hamilton',
        options: ['Sebastian Vettel',
            'Max Verstappen',
            'Lewis Hamilton',
            'Ayrton Senna'],
           
        
        question: "Who is the driver of redbull f1 racing among these ?",
    }
    
];

// Note: Ensure that each question object is correctly formatted with commas between them, as shown above.

      let score=0;
      let currentQuestion = 0;
      const totalScore = quesJSON.length;
  
      //Accessing all the elements:
      const questionEl = document.getElementById("question");
      const optionEl = document.getElementById("options");
      const scoreEl = document.getElementById("score");
      const nextEl = document.getElementById('next');
      showQuestion();
      
      nextEl.addEventListener('click', ()=>{
        scoreEl.textContent = `Score: ${score} / ${totalScore}`;
        nextQuestion();
      } );
  
      function showQuestion(){
         // Destructuring the object
       const{correctAnswer, options, question} = quesJSON[currentQuestion];
  
        //Setting question text content
      questionEl.textContent = question; 
      
      const shuffledOptions = shuffleOptions(options);
      
          //Populating the Options div with the buttons.
          shuffledOptions.forEach((opt) => {
            const btn = document.createElement('button');
            btn.textContent = opt;
            optionEl.appendChild(btn);
    
        // Event handling on the button:
        btn.addEventListener("click", () => {
            if(opt === correctAnswer){
                score++;
            }
            else{
                score=score-0.25;
            }
            scoreEl.textContent = `Score: ${score} / ${totalScore}`;   
         nextQuestion();
            });
        });
    }
  
    function nextQuestion(){
      currentQuestion++;
      optionEl.textContent = '';
      if(currentQuestion>=quesJSON.length){
        questionEl.textContent = 'Quiz Completed!!';
        nextEl.remove();
      } 
      else{
        showQuestion();
      }
  
    }
  
  //Shuffling the Options
  function shuffleOptions(options) {
      for (let i = options.length - 1; i >= 0; i--) {
        const j = Math.floor(Math.random() * i + 1);
        [options[i], options[j]] = [
          options[j],
          options[i],
        ];
      }
      return options;
    }
    
  //   shuffleOptions([1, 2, 3, 4, 5]);