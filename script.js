// LIGHT/DARK MODE TOGGLE
let theme = localStorage.getItem('data-theme');
const checkbox = document.getElementById("switch");
const changeThemeToDark = () =>{
    document.documentElement.setAttribute("data-theme", "dark")
    localStorage.setItem("data-theme", "dark")
    console.log("Who turned off the lights?")
}

const changeThemeToLight = () =>{
    document.documentElement.setAttribute("data-theme", "light")
    localStorage.setItem("data-theme", 'light')
    console.log("Let there be light!")
}

if(theme === 'dark'){
    changeThemeToDark()
}

checkbox.addEventListener('change', ()=> {
    let theme = localStorage.getItem('data-theme');
    if (theme ==='dark'){
        changeThemeToLight()
    }else{
        changeThemeToDark()
    }
   
});

// DIALOG

const openModal = document.querySelector('.open-modal');
const closeModal = document.querySelector('.close-modal');
const apply = document.querySelector('.apply');
const dialog = document.querySelector('dialog');
const input = document.querySelector('input');
const output = document.querySelector('output');

input.addEventListener('change', (e) => {
    apply.value = e.target.value;
});

openModal.addEventListener('click', () => {
    dialog.showModal();
});

dialog.addEventListener('close', () => {
    output.value = dialog.returnValue;
});




