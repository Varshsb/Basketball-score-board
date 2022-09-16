
let homeEl = document.getElementById("home-el")
let guestEl= document.getElementById("guest-el")
let countH = 0
let countG = 0

function addByOneH() {
    countH = countH + 1 
    homeEl.innerText= countH
}

function addByTwoH() {
    countH = countH + 2 
    homeEl.innerText= countH
}

function addByThreeH() {
    countH = countH + 3 
    homeEl.innerText= countH
}

function addByOneG() {
    countG = countG + 1 
    guestEl.innerText= countG
}

function addByTwoG() {
    countG = countG + 2 
    guestEl.innerText= countG
}

function addByThreeG() {
    countG = countG + 3 
    guestEl.innerText= countG
}
