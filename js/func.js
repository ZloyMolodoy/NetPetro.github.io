function changeText(ev) {
    if(ev.getAttribute('data-show') === "true") {
        ev.innerText = "-"
        ev.setAttribute('data-show', "false"); 
        ev.classList.add('dropbox-button__active');
        

    }
    else {
        ev.innerText = "+"
        ev.setAttribute('data-show', "true");
        ev.classList.remove('dropbox-button__active');
    }
}
