function ibg(){
    $.each($('.ibg'), function(index, val) {
        if($(this).find('img').length>0){
            $(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
        }
    });
}
ibg();
$(".header__burger").click(function(){
    $(".header__burger").toggleClass('active')
    $(".header__body").toggleClass('active')
})
$(".dashboard-views__tabs .tabs__item").click(function(e){
    e.preventDefault()
    $(".dashboard-views__tabs .tabs__item").removeClass('active')
    $(this).addClass('active');
})
$(".apis__code .tabs__item").click(function(e){
    e.preventDefault()
    $(".apis__code .tabs__item").removeClass('active')
    $(this).addClass('active');
})
$(".supabase-auth__code .tabs__item").click(function(e){
    e.preventDefault()
    $(".supabase-auth__code .tabs__item").removeClass('active')
    $(this).addClass('active');
})