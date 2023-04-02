const btn = document.querySelector('.toggle-btn'),
    btn2 = document.querySelector('.toggle-btn2'),
    text = document.querySelector('.text');


btn.addEventListener('click',function(e){
    e.preventDefault();
    text.classList.add("text-open")
});

btn2.addEventListener('click',function(e){
    e.preventDefault();
    text.classList.remove("text-open")
});









