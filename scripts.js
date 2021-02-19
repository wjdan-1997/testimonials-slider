const prev = document.getElementById("prev");
const next = document.getElementById("next");
const image = document.getElementById("hero-img");
const text = document.getElementById("text");
const nom = document.getElementById("name");
const job = document.getElementById("job");
let personNumber = 0; // +1

const tanya = {
  name: "Tanya Sinclair",
  job: "UX Engineer",
  text: "“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”",
  img: "./images/image-tanya.jpg"
};

const john = {
  name: "John Tarkpor",
  job: "Junior Front-end Developer",
  text: "“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”",
  img: "./images/image-john.jpg"
};

const ketut = {
  name: "Ketut Yanto",
  job: "Junior Front-end Developer",
  text: "“ Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tincidunt mollis mauris non sagittis. Nam aliquet facilisis tellus, eget sodales ipsum efficitur at. Nam varius sollicitudin ligula vel blandit. ”",
  img: "./images/image-ketut.jpg"
};

const person = [tanya, john, ketut]; // 3
console.log(person.length)


function display(event) {

   

  if(event.target.id === "next") {
    personNumber += 1;
    console.log(personNumber,'lol')
    if(personNumber >= person.length) {
      personNumber = 0;
    }

    nom.classList.add("transition-class");
    job.classList.add("transition-class");
    text.classList.add("transition-class");
    image.classList.add("transition-class"); 

    setTimeout(()=> {
      nom.innerHTML = person[personNumber].name;
      job.innerHTML = person[personNumber].job;
      text.innerHTML = person[personNumber].text;
      image.setAttribute("src", person[personNumber].img);
  
      nom.classList.add("transition-last");
      job.classList.add("transition-last");
      text.classList.add("transition-last");
      image.classList.add("transition-last"); 
  
      nom.classList.remove("transition-class");
      job.classList.remove("transition-class");
      text.classList.remove("transition-class");
      image.classList.remove("transition-class");  
  
      setTimeout(() => {
        nom.classList.remove("transition-last");
        job.classList.remove("transition-last");
        text.classList.remove("transition-last");
        image.classList.remove("transition-last");   
      }, 300)  
    }, 300)  
  }

  if(event.target.id === "prev") {
    personNumber -= 1;
    if(personNumber < 0) {
      personNumber = person.length -1;
    }

    nom.classList.add("transition-last");
    job.classList.add("transition-last");
    text.classList.add("transition-last");
    image.classList.add("transition-last"); 

    setTimeout(()=> {
      nom.innerHTML = person[personNumber].name;
      job.innerHTML = person[personNumber].job;
      text.innerHTML = person[personNumber].text;
      image.setAttribute("src", person[personNumber].img);
  
      nom.classList.add("transition-class");
      job.classList.add("transition-class");
      text.classList.add("transition-class");
      image.classList.add("transition-class"); 
  
      nom.classList.remove("transition-last");
      job.classList.remove("transition-last");
      text.classList.remove("transition-last");
      image.classList.remove("transition-last");  
  
      setTimeout(() => {
        nom.classList.remove("transition-class");
        job.classList.remove("transition-class");
        text.classList.remove("transition-class");
        image.classList.remove("transition-class");   
      }, 300)  
    }, 300) 
  }  
};

prev.addEventListener("click", display);
next.addEventListener("click", display);