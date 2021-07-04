let taskbar = document.getElementsByClassName('taskbar-right-upper')[0];
let startMenu = document.getElementsByClassName('start-menu')[0];
let Windows = document.getElementsByClassName('taskbar-left')[0];
let key = document.getElementsByClassName('taskbar-right')[0];
key.addEventListener('click', () => {
    console.log('Clicked');
    if (taskbar.style.bottom === '40px') {
        taskbar.style.bottom = '-123px';
    }
    else {
        taskbar.style.bottom = '40px';
    }
});
Windows.addEventListener('click', () => {
    console.log('Clicked');
    if (startMenu.style.bottom === '40px') {
        startMenu.style.bottom = '-563px';
    }
    else {
        startMenu.style.bottom = '40px';
    }
});