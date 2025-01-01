// ***************questions for quiz****************

//if you want more questions change i,j,counter and shuffled array and shuffle function
let questions = [
  {
    num: 1,
    Qname: "What does PHP stand for?",
    answer: "B. Hypertext Preprocessor",
    options: [
      "A. Personal Home Page",
      "B. Hypertext Preprocessor",
      "C. Preprocessor Home Page",
      "D. Private Home Page",
    ],
  },
  {
    num: 2,
    Qname: "Which programming language is commonly used for web development?",
    answer: "C. JavaScript",
    options: ["A. C", "B. Python", "C. JavaScript", "D. Java"],
  },
  {
    num: 3,
    Qname: "What is the purpose of CSS in web development?",
    answer: "A. Styling web pages",
    options: [
      "A. Styling web pages",
      "B. Structuring web pages",
      "C. Managing databases",
      "D. Writing server-side logic",
    ],
  },
  {
    num: 4,
    Qname: "What does HTML stand for?",
    answer: "A. Hypertext Markup Language",
    options: [
      "A. Hypertext Markup Language",
      "B. High-Level Text Markup",
      "C. Hypertext Machine Language",
      "D. Home Tool Markup Language",
    ],
  },
  {
    num: 5,
    Qname: "What is the primary function of JavaScript?",
    answer: "B. To add interactivity to web pages",
    options: [
      "A. To manage databases",
      "B. To add interactivity to web pages",
      "C. To define page structure",
      "D. To apply styling to web pages",
    ],
  },
  {
    num: 6,
    Qname: "What is the role of a database in a web application?",
    answer: "B. To store and manage data",
    options: [
      "A. To structure web pages",
      "B. To store and manage data",
      "C. To add animations",
      "D. To handle client requests",
    ],
  },
  {
    num: 7,
    Qname: "Which of the following is a backend programming language?",
    answer: "C. Python",
    options: ["A. HTML", "B. CSS", "C. Python", "D. JSON"],
  },
  {
    num: 8,
    Qname: "Which technology is used to style web pages?",
    answer: "B. CSS",
    options: ["A. HTML", "B. CSS", "C. JSON", "D. PHP"],
  },
  {
    num: 9,
    Qname: "What is the purpose of a server in web development?",
    answer: "C. To handle requests and serve responses",
    options: [
      "A. To create client-side scripts",
      "B. To structure HTML documents",
      "C. To handle requests and serve responses",
      "D. To add styling to web pages",
    ],
  },
  {
    num: 10,
    Qname: "What is the main purpose of APIs in web development?",
    answer: "C. To enable communication",
    options: [
      "A. To define HTML structure",
      "B. To apply CSS styling",
      "C. To enable communication",
      "D. To manage browser rendering",
    ],
  },
  {
    num: 11,
    Qname: "Which programming paradigm focuses on objects and data?",
    answer: "B. Object-Oriented Programming",
    options: [
      "A. Procedural Programming",
      "B. Object-Oriented Programming",
      "C. Functional Programming",
      "D. Declarative Programming",
    ],
  },
  {
    num: 12,
    Qname: "Which of the following is a cloud storage provider?",
    answer: "B. AWS",
    options: ["A. MongoDB", "B. AWS", "C. React", "D. CSS"],
  },
  {
    num: 13,
    Qname: "What is the purpose of a version control system?",
    answer: "C. To track changes in code",
    options: [
      "A. To compile programs",
      "B. To manage web servers",
      "C. To track changes in code",
      "D. To execute scripts",
    ],
  },
  {
    num: 14,
    Qname: "What does HTTP stand for?",
    answer: "A. Hypertext Transfer Protocol",
    options: [
      "A. Hypertext Transfer Protocol",
      "B. Hyperlink Text Processor",
      "C. Hyper Transfer Page",
      "D. Home Text Processing",
    ],
  },
  {
    num: 15,
    Qname: "What is the purpose of responsive design in web development?",
    answer: "B. To make websites adaptable",
    options: [
      "A. To add animations to websites",
      "B. To make websites adaptable",
      "C. To optimize loading speed",
      "D. To manage server-side data",
    ],
  },
  {
    num: 16,
    Qname: "What is the primary function of a framework?",
    answer: "B. To provide a pre-built structure",
    options: [
      "A. To design user interfaces",
      "B. To provide a pre-built structure",
      "C. To execute programming scripts",
      "D. To test code for errors",
    ],
  },
  {
    num: 17,
    Qname: "Which term refers to the visual layout of a website?",
    answer: "B. User Interface",
    options: ["A. Backend", "B. User Interface", "C. Server", "D. Database"],
  },
  {
    num: 18,
    Qname: "Which term refers to the experience of using a website?",
    answer: "C. User Experience",
    options: [
      "A. User Design",
      "B. User Interface",
      "C. User Experience",
      "D. User Navigation",
    ],
  },
  {
    num: 19,
    Qname: "What does SEO stand for?",
    answer: "B. Search Engine Optimization",
    options: [
      "A. Site Engine Optimization",
      "B. Search Engine Optimization",
      "C. Style Enhancement Options",
      "D. Structured Element Order",
    ],
  },
  {
    num: 20,
    Qname: "What is the purpose of encryption in web development?",
    answer: "B. To secure data",
    options: [
      "A. To enhance web page performance",
      "B. To secure data",
      "C. To style content dynamically",
      "D. To create interactive elements",
    ],
  },
];

document.addEventListener("DOMContentLoaded", () => {
  const intro_div = document.querySelector(".intro-div");
  const quiz_guide = document.querySelector(".quiz-guide");

  // start quiz button
  document.querySelector(".startbtn").addEventListener("click", () => {
    intro_div.classList.add("hidden");
    quiz_guide.classList.remove("hidden");
    setTimeout(() => {
      quiz_guide.classList.remove("scale-90", "opacity-0");
      quiz_guide.classList.add("scale-100", "opacity-100");
    }, 10);
  });

  //exit quize form guide button
  document.querySelector(".exitbtn").addEventListener("click", () => {
    quiz_guide.classList.add("scale-90", "opacity-0");
    quiz_guide.classList.remove("scale-100", "opacity-100");
    setTimeout(() => {
      quiz_guide.classList.add("hidden");
      intro_div.classList.remove("hidden");
    }, 300);
  });

  // continue quize from guide button
  document.querySelector(".continue").addEventListener("click", () => {
    document.querySelector(".quizdiv").classList.remove("hidden");
    setTimeout(() => {
      document.querySelector(".quizdiv").classList.remove("-translate-x-full");
      document.querySelector(".quizdiv").classList.add("translate-x-0");
      quiz_guide.classList.add("hidden", "scale-90", "opacity-0");
      intro_div.classList.remove("hidden");
    }, 10);

    setTimeout(() => {
      document.querySelector("#operationdiv").classList.remove("hidden");
    }, 660);
    setTimeout(() => {
      document
        .getElementById("operationdiv")
        .classList.remove("scale-90", "opacity-0");
      document
        .getElementById("operationdiv")
        .classList.add("scale-100", "opacity-100");
    }, 660);
  });
});

function getRandomElements(array, count) {
  // Create a shallow copy of the original array to avoid modifying it
  const arrayCopy = [...array];

  // Shuffle the array using Fisher-Yates Shuffle
  for (let i = arrayCopy.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [arrayCopy[i], arrayCopy[randomIndex]] = [
      arrayCopy[randomIndex],
      arrayCopy[i],
    ];
  }

  // Return the first `count` elements
  return arrayCopy.slice(0, count);
}

let shuffledQuestions = getRandomElements(questions, 5);

// ******************************************* *********************************

document.addEventListener("DOMContentLoaded", () => {
  let majordiv = document.querySelector(".majordiv");
  getquestions(0, 1);

  function getquestions(index, count) {
    majordiv.innerHTML = ` <!-- Question Section -->
  <div>
  <h2 class="text-2xl font-bold mb-4">
  ${count}.
  ${shuffledQuestions[index].Qname}
            </h2>
            <div data-info="${shuffledQuestions[index].num}" class="space-y-4">
            
              <div class="costomopt">${shuffledQuestions[index].options[0]}</div>
              <div class="costomopt">${shuffledQuestions[index].options[1]}</div>
              <div class="costomopt">${shuffledQuestions[index].options[2]}</div>
              <div class="costomopt">${shuffledQuestions[index].options[3]}</div>
              </div>
              </div>
              <div class="mt-6 flex items-center justify-between">
              <p class="text-base text-white font-bold pl-2">${count} of 5 Questions</p>
             
            </div>`;
  }
  i = 0;
  j = 1;
  let counter = 1;
  document.getElementById("nextbtn").addEventListener("click", () => {
    if (document.getElementById("nextbtn").disabled == false) {
      counter++;
    }
    if (i < 4) {
      i++;
      j++;
    }
    getquestions(i, j);
    document.getElementById("nextbtn").setAttribute("disabled", "true");
    document
      .getElementById("nextbtn")
      .classList.remove("bg-pink-600", "text-white", "hover:bg-pink-700");

    //result div******************************************************
    if (counter == 6) {
      const resultdiv = document.getElementById("resultdiv");

      document.getElementById("operationdiv").classList.add("hidden");
      document.getElementById("resultdiv").classList.remove("hidden");
      setTimeout(() => {
        resultdiv.classList.remove("scale-90", "opacity-0");
        resultdiv.classList.add("scale-100", "opacity-100");
      }, 10);

      let goted = parseInt(scorespan.innerHTML); // Example: 3
      let total = 5; // Total score value
      let progress = (goted / total) * 100; // Calculate target progress
      let currentProgress = 0; // Start progress from 0

      const circle = document.querySelector(".progressbar"); // Select the progress circle
      const text = document.querySelector(".percentagetext"); // Select the percentage text

      const animateProgress = () => {
        const animationInterval = setInterval(() => {
          if (currentProgress >= progress) {
            clearInterval(animationInterval); // Stop the animation once it reaches the target
          } else {
            currentProgress++; // Increment progress
            // Update the progress circle
            circle.style.background = `
              conic-gradient(
                 rgb(219 39 119) 0% ${currentProgress}%, 
                #374151 ${currentProgress}% 100%
              )
            `;
            // Update the percentage text
            text.textContent = `${currentProgress}%`;
          }
        }, 20); // Adjust the speed of the animation (smaller = faster)
      };

      // Start the animation
      animateProgress();

      //result of score
      document.querySelector(".resultspan").innerHTML = scorespan.innerHTML;

      //reset operation div animation
      document
        .getElementById("operationdiv")
        .classList.remove("scale-100", "opacity-100");
      document
        .getElementById("operationdiv")
        .classList.add("scale-90", "opacity-0");

      //reseting all
      function resetall(duration) {
        setTimeout(() => {
          // Reset variables
          i = 0;
          j = 1;
          counter = 1;
          scorespan.innerHTML = "0";
          shuffledQuestions = getRandomElements(questions, 5); // Re-shuffle questions

          //reset styles for options
          const options = document.querySelectorAll(".costomopt");
          options.forEach((option) => {
            option.classList.remove("truequest", "falsequest", "disabled");
          });

          //reset questions
          getquestions(0, 1);

          // Reset progress bar and result div styles
          const circle = document.querySelector(".progressbar");
          const text = document.querySelector(".percentagetext");
          circle.style.background = `
    conic-gradient(
      #374151 0% 100%
    )
  `;
          text.textContent = "0%";

          const nextBtn = document.getElementById("nextbtn");
          nextBtn.setAttribute("disabled", "true");
          nextBtn.classList.remove(
            "bg-pink-600",
            "text-white",
            "hover:bg-pink-700"
          );
        }, duration);
      }

      //try again button
      document.querySelector(".tryagain").addEventListener("click", () => {
        //hidding resultdiv
        resultdiv.classList.remove("scale-100", "opacity-100");
        resultdiv.classList.add("scale-90", "opacity-0");
        setTimeout(() => {
          resultdiv.classList.add("hidden");
        }, 500);
        resetall(501);
        setTimeout(() => {
          document
            .getElementById("operationdiv")
            .classList.remove("scale-90", "opacity-0");
          document
            .getElementById("operationdiv")
            .classList.add("scale-100", "opacity-100");
        }, 700);
        setTimeout(() => {
          document.getElementById("operationdiv").classList.remove("hidden");
        }, 600);
      });

      //go to home button
      document.querySelector(".gohome").addEventListener("click", () => {
        //hide resultdiv
        resultdiv.classList.remove("scale-100", "opacity-100");
        resultdiv.classList.add("scale-90", "opacity-0");
        setTimeout(() => {
          resultdiv.classList.add("hidden");
        }, 500);

        //hide quizdiv
        setTimeout(() => {
          document.querySelector(".quizdiv").classList.add("-translate-x-full");
          document.querySelector(".quizdiv").classList.remove("translate-x-0");
        }, 600);
        setTimeout(() => {
          document.querySelector(".quizdiv").classList.add("hidden");
          document.querySelector("#operationdiv").classList.remove("hidden");
        }, 900);
        resetall(1000);
        //reseting operation div
        document
          .getElementById("operationdiv")
          .classList.remove("scale-100", "opacity-100");
        document
          .getElementById("operationdiv")
          .classList.add("scale-90", "opacity-0");
      });
    }
  });
  //***************************************************************** */
  quizbox = document.querySelector(".quizdiv");
  scorespan = document.getElementById("scorespan");

  quizbox.addEventListener("click", (event) => {
    let selected = event.target;
    if (selected.classList.contains("costomopt")) {
      let selectedquestnum = selected.parentElement.getAttribute("data-info");
      //access to array with ref of touch
      shuffledQuestions.forEach((ele) => {
        if (ele.num == selectedquestnum) {
          if (ele.answer == selected.textContent) {
            //if answer is right
            selected.classList.add("truequest");
            for (let i = 0; i < 4; i++) {
              selected.parentElement.children[i].classList.add("disabled");
            }
            document.getElementById("nextbtn").removeAttribute("disabled");
            document
              .getElementById("nextbtn")
              .classList.add("bg-pink-600", "text-white", "hover:bg-pink-700");

            //changing score span
            let score = parseInt(scorespan.innerHTML);
            scorespan.innerHTML = score + 1;
          } else {
            //if answer is wrong
            selected.classList.add("falsequest");

            for (let i = 0; i < 4; i++) {
              selected.parentElement.children[i].classList.add("disabled");
              if (
                selected.parentElement.children[i].textContent == ele.answer
              ) {
                selected.parentElement.children[i].classList.add("truequest");
                document.getElementById("nextbtn").removeAttribute("disabled");
                document
                  .getElementById("nextbtn")
                  .classList.add(
                    "bg-pink-600",
                    "text-white",
                    "hover:bg-pink-700"
                  );
              }
            }
          }
        }
      });
    }
  });
});
