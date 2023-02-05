let center = [59.93884634999736,30.320683714154725]
let center2 = [59.93865792973904,30.323100384477144]
let markcenter = [59.9386258672318,30.323093704999245]
const query = window.matchMedia('(max-width: 1072px)') 
const query2 = window.matchMedia('(max-width: 555px)')
function resize(){
  if(map.children[0]){
    map.children[0].style = "width:100%; height:100%;"
    map.children[0].children[0].style = "width:100%; height:100%;"
  }
}
function initMap(){
    let map = new ymaps.Map('map',{
        center:center,
        zoom:16,
    })
    resize()
    //media 
    function mmedia() {
      if (query.matches) {
        map.setCenter(center2,16,{})
      }
      else{
        map.setCenter(center,16,{})
      }
    }
    query.addListener(mmedia)
    //media 

    let mark = new ymaps.Placemark(markcenter,{},{
        iconLayout: 'default#image',
        iconImageHref: './img/map-pin.png',
        iconImageSize: [113,106],
        iconImageOffset:[-55,-95],
    }) 
    let mark2 = new ymaps.Placemark(markcenter,{},{
      iconLayout: 'default#image',
      iconImageHref: './img/map-pin.png',
      iconImageSize: [57,53],
      iconImageOffset:[-25,-45],
  })
    //media 
    function mmedia2() {
      if (query2.matches) {
        map.geoObjects.remove(mark)
        map.geoObjects.add(mark2) 
      }
      else{
        map.geoObjects.remove(mark2)
        map.geoObjects.add(mark)  
      }
    }
    query2.addListener(mmedia2)
    mmedia2()

    //media 
    map.controls.remove('geolocationControl')
    map.controls.remove('searchControl')
    map.controls.remove('zoomControl')
    map.controls.remove('rulerControl')
    map.controls.remove(['scrollZoom'])
     
}
ymaps.ready(initMap)
 
 