const arrow = document.querySelector('.arrow');
const inputValue = document.querySelector('input')
const errorBlock = document.querySelector('.error-message')
let isValid = false


arrow.addEventListener("click", function() {
    if (emailIsValid(inputValue.value) == true) {
        alert('done')
    } else {
        errorBlock.style.display = "block"
        inputValue.style.border = "2px solid hsl(0, 93%, 68%)"
    }    
});

inputValue.addEventListener("keydown", function() {
    errorBlock.style.display = "none"
})

function emailIsValid (email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }
  
 