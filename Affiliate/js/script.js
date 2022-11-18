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
  document.querySelector('.header__menu').classList.toggle('active')
  document.body.classList.toggle('body-lock')
})

//media

const mediaQuery = window.matchMedia('(max-width: 768px)')
const sign_up = document.querySelector('.header__sign-up')
const menu = document.querySelector('.header__menu')
function mediaz() {
    if (mediaQuery.matches) {
      menu.append(sign_up)
    }
    else{
      menu.after(sign_up)
    }
}
mediaQuery.addListener(mediaz)
mediaz()

const mediaQuery2 = window.matchMedia('(max-width: 747px)')
function mediaz2() {
    if (mediaQuery2.matches) {
      document.querySelector('.articles').prepend(document.querySelector('.article'))
    }
    else{
      document.querySelector('.articles').before(document.querySelector('.article')) 
    }
}
mediaQuery2.addListener(mediaz2)
mediaz2()
//media