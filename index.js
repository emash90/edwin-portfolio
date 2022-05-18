const sections = document.querySelectorAll('.section')
const sectBtns = document.querySelectorAll('.controls')
const sectBtn = document.querySelectorAll('.control')
const allSections = document.querySelector('.main-content')


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
        button.addEventListener("click", function() {
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

