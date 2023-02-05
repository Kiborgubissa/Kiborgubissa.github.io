const change_icons = () => {
  const inputs = document.querySelectorAll('.contact__input')
  function inst(ind,opt){
    inputs[ind].querySelector('input').addEventListener(opt,()=>{
        inputs[ind].querySelector('.contact__icon').classList.toggle('_green')
    })
  }
  inst(0,'focus')
  inst(0,'blur')
  inst(1,'focus')
  inst(1,'blur')
}
change_icons()
document.addEventListener('DOMContentLoaded',() => {
  const form = document.getElementById('form')
  form.addEventListener('submit',formsend)
  async function formsend(e){
    e.preventDefault()
    formValidate(form)
  }
  function formValidate(){
    let formReq = document.querySelectorAll('._req')
    for(let index = 0;index < formReq.length;index++){
      const input = formReq[index]
      formRemoveError(input)
      if(input.classList.contains('_email')){
        if(emailTest(input)){
          formAddError(input)
          document.querySelector('.contact__icon').classList.add('red')
        } 
        else{
          document.querySelector('.contact__icon').classList.remove('red')
        }
      }
      if(input.classList.contains('_name')){
        if(nameTest(input)){
          formAddError(input)
        } 
      }
      if(input.classList.contains('_phone')){
        if(phoneTest(input)){
          formAddError(input)
          document.querySelectorAll('.contact__icon')[1].classList.add('red')
        }else{
          document.querySelectorAll('.contact__icon')[1].classList.remove('red')
        }
      }
      if(input.classList.contains('_age')){
        if(ageTest(input)){
          formAddError(input)
        }
      }
      if(input.classList.contains('_weight')){
        if(weightTest(input)){
          formAddError(input)
        }
      }
    }
  }
  function formAddError(input){
    input.classList.add('_error')
  }
  function formRemoveError(input){
    input.classList.remove('_error')
  }
  function emailTest(input){
    return !/^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/.test(input.value)
  }
  function nameTest(input){
    return !/^[а-яА-Я]+$/.test(input.value)
  }
  function phoneTest(input){
    return !/^([0-9]){11}$/.test(input.value)
  }
  function ageTest(input){
    if(Number(input.value) < 21 && Number(input.value) > 0){
      return 0;
    }
    else{
      return 1;
    }
  }
  function weightTest(input){
    if(Number(input.value) < 11 && Number(input.value) > 0){
      return 0;
    }
    else{
      return 1;
    }
  }
})
 