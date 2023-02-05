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
const control = document.querySelectorAll('.slider__control-item')
const slider = document.querySelector('.slider__items')
control.forEach((el)=>{
    el.addEventListener('click',(event)=>{
        if(event.target.value == 1){
            slider.classList.remove('right')
            slider.classList.add('left')
        }else if(event.target.value == 3){
            slider.classList.remove('left')
            slider.classList.add('right')
        }else{
            slider.classList.remove('right')
            slider.classList.remove('left')
        }
    })
})

//slider
$(document).ready(function(){
    $('.slider__items').slick({
        arrows:false,
        dots:true,
        adaptiveHeight:true,
        slidesToShow:3,
        slidesToScroll:1,
        infinite:false,
        initialSlide:1,
        swipe:false,
        responsive:[
            {
              breakpoint:903,
              settings:{
                slidesToShow:2,
              }
            },
            {
              breakpoint:556,
              settings:{
                slidesToShow:1,
              }
            },
        ],
    })
})
//slider