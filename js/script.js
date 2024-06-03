(function(){
    const button = document.getElementById('mobile-menu-button')
    const menu = document.getElementById('mobile-menu')
    button.addEventListener('click', ()=>menu.classList.toggle('hidden'))
})()

// IIFE - immediately Invoked Function Expression. 