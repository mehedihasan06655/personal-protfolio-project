const aboutBtn = document.getElementById("aboutBtn");
const experienceBtn = document.getElementById("experienceBtn");
const educationBtn = document.getElementById("educationBtn");
const skillsBtn = document.getElementById("skillsBtn");

const aboutField = document.getElementById("about");
const experienceField = document.getElementById("experience");
const educationField = document.getElementById("education");
const skillsField = document.getElementById("skills");


aboutBtn.addEventListener("click", function(){
    aboutField.style.setProperty("display", "flex");
    experienceField.style.setProperty("display", "none");
    educationField.style.setProperty("display", "none");
    skillsField.style.setProperty("display", "none");

    this.classList.add("active");
    experienceBtn.classList.remove("active");
    educationBtn.classList.remove("active");
    skillsBtn.classList.remove("active");
})
experienceBtn.addEventListener("click", function(){
    experienceField.style.setProperty("display", "flex");

    aboutField.style.setProperty("display", "none");
    educationField.style.setProperty("display", "none");
    skillsField.style.setProperty("display", "none");

    this.classList.add("active")
    aboutBtn.classList.remove("active");
    educationBtn.classList.remove("active");
    skillsBtn.classList.remove("active");
})
educationBtn.addEventListener("click", function(){    this.classList.add("active")

    educationField.style.setProperty("display", "flex");

    aboutField.style.setProperty("display", "none");
    experienceField.style.setProperty("display", "none");
    skillsField.style.setProperty("display", "none");

    this.classList.add("active")
    aboutBtn.classList.remove("active");
    experienceBtn.classList.remove("active");
    skillsBtn.classList.remove("active");
    
})
skillsBtn.addEventListener("click", function(){
    skillsField.style.setProperty("display", "flex");

    aboutField.style.setProperty("display", "none");
    experienceField.style.setProperty("display", "none");
    educationField.style.setProperty("display", "none");

    this.classList.add("active");
    aboutBtn.classList.remove("active");
    experienceBtn.classList.remove("active");
    educationBtn.classList.remove("active");
});

$('.feedback-gellary').masonry({
    // options
    itemSelector: '.grid-item',
    columnWidth: 200
  });
  
