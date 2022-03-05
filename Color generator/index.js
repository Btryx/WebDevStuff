const bt = document.querySelector('button');
const h = document.querySelector('h1');
const current = document.querySelector(".currentColor")

function randomColor(){
    const r =  Math.floor(Math.random() * 255);
    const g =  Math.floor(Math.random() * 255);
    const b =  Math.floor(Math.random() * 255);
    current.innerHTML = `This color is: rgb(${r}, ${g}, ${b})`;
    return `rgb(${r}, ${g}, ${b})`
}


bt.addEventListener('click', function() {
    document.body.style.backgroundColor = randomColor();
    h.innerText = "Click again to change color!"
});

