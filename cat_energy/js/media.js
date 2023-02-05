const logo = document.querySelector('.header__logo img')
const cat_img = document.querySelector('.example__img')
const slider = document.querySelector('.slider input')
//mediaQuery
const mediaQuery1 = window.matchMedia('(max-width: 1032px)')
const mediaQuery2 = window.matchMedia('(max-width: 555px)')
const mediaQuery3 = window.matchMedia('(max-width: 1072px)')
//mediaQuery

//media 1 

function mediaz() {
  if (mediaQuery2.matches) {
    logo.src = 'img/logo-mobile.png'
  }
  else if(mediaQuery1.matches){
   logo.src = 'img/logo-tablet.png'
  }
  else{
    logo.src = 'img/logo-desktop.png'
  }
}
mediaQuery1.addListener(mediaz)
mediaQuery2.addListener(mediaz)
mediaz()

//media 2

function mediaz2() {
  if(mediaQuery2.matches){
    cat_img.setAttribute("style","background-image: url('img/image_cat_mobile.png')")
  }
  else if(mediaQuery3.matches){
    cat_img.setAttribute("style","background-image: url('img/image_cat_tablet.png')")
  }
  else{
    cat_img.setAttribute("style","background-image: url('img/image_cat_desktop.png')")
  }
}
mediaQuery2.addListener(mediaz2)
mediaQuery3.addListener(mediaz2)
mediaz2()

//media 3

function mediaz3() {
  if(mediaQuery2.matches){
    slider.setAttribute('type','checkbox')
    slider.classList.add('slider__checkbox')
  }
  else{
    slider.setAttribute('type','range')
    slider.classList.remove('slider__checkbox')
  }
}
mediaQuery2.addListener(mediaz3)
mediaz3()



