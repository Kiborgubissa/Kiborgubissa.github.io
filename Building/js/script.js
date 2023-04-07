function ibg(){
    if(document.querySelectorAll(".ibg img")){
        for(el of document.querySelectorAll(".ibg")){
            el.setAttribute("style",`background-image: url('${el.querySelector('img').getAttribute('src')}')`)
        }
    }
}
ibg()
const burg = document.querySelector('.header__burger')
const header_body = document.querySelector('.header__body')
burg.addEventListener('click',()=>{
    burg.classList.toggle('active')
    header_body.classList.toggle('active')
    document.body.classList.toggle('body-lock')
})