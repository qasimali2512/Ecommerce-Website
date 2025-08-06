const bar=document.getElementById('bar');
const nav=document.getElementById('navbar');
let close=document.getElementById('close');
if(bar){
    bar.addEventListener('click',() => {
        console.log("clicked");
        nav.classList.add('active');

    })
}
if(close){
    close.addEventListener('click',() => {
        console.log("clicked");
        nav.classList.remove('active');

    })
}