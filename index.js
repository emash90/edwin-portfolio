const sections = document.querySelectorAll('.section')
const sectBtns = document.querySelectorAll('.controls')
const sectBtn = document.querySelectorAll('.control')
const allSections = document.querySelector('.main-content')
const form = document.getElementById('contact-form')
const submitForm = document.getElementById('submit-form')
const success = document.querySelector('.success-message')


window.addEventListener('DOMContentLoaded', () => {
const successMessage = () => {
    form.reset()
    success.innerHTML = "Message sent Successfuly. Thanks"
}
const errorMessage = () => {
    success.innerHTML = "Oops, there was an error, please refresh and try again"
}
form.addEventListener('submit', (e) => { 
    e.preventDefault()
    const formData = new FormData(form)
    ajax(form.method, form.action, formData, successMessage, errorMessage)
})
})
function ajax(method, url, formData, successMessage, errorMessage) {
    const xhr = new XMLHttpRequest()
    xhr.open(method, url)
    xhr.setRequestHeader("accept", "application/json")
    xhr.onreadystatechange = function () {
        if(xhr.readyState !== XMLHttpRequest.DONE) return
        if(xhr.status === 200) {
            successMessage(xhr.response, xhr.responseType)
        } else {
            errorMessage(xhr.status, xhr.response, xhr.responseType)
        }
    }
    xhr.send(formData)
}
//use intersection observer to add active class to nav links and scroll to section

function pageTransition() {
    const controls = document.querySelectorAll(".control");
    const sections = document.querySelectorAll(".section");
  
    // Create an Intersection Observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Get the ID of the section in view
            const targetId = entry.target.id;
  
            // Remove the "active-btn" class from all buttons
            controls.forEach((control) => {
              control.classList.remove("active-btn");
            });
  
            // Add the "active-btn" class to the button associated with the section
            const button = document.querySelector(`.control[data-id="${targetId}"]`);
            button.classList.add("active-btn");
          }
        });
      },
      { rootMargin: "0px", threshold: 0.5 } // Adjust as needed
    );
  
    // Observe all sections
    sections.forEach((section) => {
      observer.observe(section);
    });
  
    // Add click event listeners to buttons for smooth scrolling
    controls.forEach((button) => {
      button.addEventListener("click", function (event) {
        event.preventDefault();
        const targetId = button.getAttribute("data-id");
        const targetSection = document.getElementById(targetId);
  
        targetSection.scrollIntoView({
          behavior: "smooth",
        });
      });
    });
  }
  
  pageTransition();
  

