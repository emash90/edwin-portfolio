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


// const pageTransition = () => {
//     //add active class when button is clicked
//     for(let i = 0; i < sectBtn.length; i++) {
//         sectBtn[i].addEventListener('click', (event) => {
//             let currentBtn = event.target;
//             currentBtn[0].classList = currentBtn[0].classList.re
//             event.target += 'active-btn'
//         })
//     }
// }
// pageTransition()

function pageTransition () {
    
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener(['click', 'scroll'], function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
        })  
    
    })
    //add active class to selected section
    allSections.addEventListener('click', e => {
        const id = e.target.id
        if(id) {
          
            //remove active class from selected section
            sectBtns.forEach((btn) => {
                btn.classList.remove('active')
            })
            e.target.classList.add('active')

            //hide other sections
            sections.forEach((section) => {
                section.classList.remove('active')
            })
            const element = document.getElementById(id)
            element.classList.add('active')
        }
    })
}
pageTransition()

