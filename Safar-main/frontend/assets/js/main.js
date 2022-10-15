/* only write js that common to all components */

const search = document.querySelector('.search')
const btn = document.querySelector('.btn')
const input = document.querySelector('.input')

btn.addEventListener('click', () => {
    search.classList.toggle('active')
    input.focus()
});


/*  filter box toggle  */

function toggle(){
    var blur=document.getElementById('main-div');
    blur.classList.toggle('active')
    var popup=document.getElementById('container');
    popup.classList.toggle('active')
}

/*  numaric rating slider  */

function rangeSlide(value) {
    document.getElementById('rangeValue').innerHTML = value;
}