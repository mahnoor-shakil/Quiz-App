var obj = {  
    name: "faraz",    
    age: 23,
    email: "faraz@gmail.com",
    courses: ["js", "reactjs", "nodejs"],
    status: false,
    education: {
     CGPA: "3.5",
    },
    getName: function () {
      console.log("method obj call..");
   }, };
  
  console.log(obj.getName());  
  
  obj.courses.shift();
  
  delete obj.courses;
  
  var questions = [  
    {
      question: "HTML Stands for",
      option1: "Hyper Text Markup Language",
      option2: "Hyper Tech Markup Language",
      option3: "Hyper Touch Markup Language",
      corrAnswer: "Hyper Text Markup Language",
    },
    {
      question: "CSS Stands for",
      option1: "Cascoding Style Sheets",
      option2: "Cascading Style Sheets",
      option3: "Cascating Style Sheets",
      corrAnswer: "Cascading Style Sheets",
    },
    {
      question: "Which tag is used for most large heading",
      option1: "<h6>",
      option2: "<h2>",
      option3: "<h1>",
      corrAnswer: "<h1>",
    },
    {
      question: "Which tag is used to make element unique ",
      option1: "id",
      option2: "class  ",
      option3: "label",
      corrAnswer: "id",
    },
    {
      question: "Any element assigned with id, can be get in css ",
      option1: "by # tag",
      option2: "by @ tag",
      option3: "by & tag",
      corrAnswer: "by # tag",
    },
  ];
  
  var ques = document.getElementById("ques");
  var opt1 = document.getElementById("opt1");
  var opt2 = document.getElementById("opt2");
  var opt3 = document.getElementById("opt3");
  var timer = document.getElementById("timer");
  var index = 0;
  var score = 0;
  var min = 1;
  var sec = 59;
  
  setInterval(function () {
    timer.innerHTML = `${min}:${sec}`;
    sec--;
    if (sec < 0) {
      min--;
      sec = 59;
      if (min < 0) {
        min = 1;
        sec = 59;
        nextQuestion();
      }
    }
  }, 1000);
  
  function nextQuestion() {
    var getOptions = document.getElementsByName("option");
  
    for (var i = 0; i < getOptions.length; i++) {
      if (getOptions[i].checked) {
        var selectedValue = getOptions[i].value;
        var selectedQues = questions[index - 1].question;
        var selectedAns = questions[index - 1][`option${selectedValue}`];
        var correctAnswer = questions[index - 1]["corrAnswer"];
  
        if (selectedAns == correctAnswer) {
          score++;
        }
      }
  
      getOptions[i].checked = false;
    }
    btn.disabled = true;
  
    if (index > questions.length - 1) {
      Swal.fire({
        title: "Good job!",
        text:
          "your percetnage is: " + ((score / questions.length) * 100).toFixed(2),
        icon: "success",
      });
    } else {
      ques.innerText = questions[index].question;
      opt1.innerText = questions[index].option1;
      opt2.innerText = questions[index].option2;
      opt3.innerText = questions[index].option3;
      index++;
      min = 1;
      sec = 59;
    }
  }
     
  function target() {
    var btn = document.getElementById("btn");
  
    btn.disabled = false;
  }