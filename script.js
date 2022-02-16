const mycards = document.querySelectorAll('.cards');

mycards.forEach((card)=> {
    card.addEventListener('click',() =>{
        removeclass();
        card.classList.add('active');
    })
});

function removeclass() {
    mycards.forEach((card)=> {
        card.classList.remove('active');
    })
}