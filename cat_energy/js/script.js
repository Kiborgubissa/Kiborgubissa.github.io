function ibg(){
    if(document.querySelectorAll(".ibg img")){
        for(el of document.querySelectorAll(".ibg")){
            el.setAttribute("style",`background-image: url('${el.querySelector('img').getAttribute('src')}')`)
        }
    }
}
ibg()

const burg = document.querySelector('.header__burger')
burg.addEventListener('click',()=>{
  burg.classList.toggle('active')
  document.querySelector('.header__body').classList.toggle('active')
  document.body.classList.toggle('body-lock')
})