const button = document.querySelector('#button')
const headng= document.querySelector('h1')

button.addEventListener('click', function () {
    // document.body is html body and dark/yellow in css
    document.body.classList.toggle('dark')
    headng.classList.toggle('yellow')
})