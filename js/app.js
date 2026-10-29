let menubtn = document.querySelector('nav button')
let sidebar = document.querySelector('aside')
let closebtn = document.querySelector("sidebar-top button");

menuBtn.addEventListener('click',()=>{
    sidebar.classList.add('open')
})

closeBtn.addEventListener('click',()=>{
    sidebar.classlist.remove('open')
})