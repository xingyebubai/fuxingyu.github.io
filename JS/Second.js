const button = document.querySelector('.spread');
$('.col-2, .col-3, .col-4, .col-5, .col-6').hide()
$('.spread').click(function(){
    if($('.col-2, .col-3, .col-4, .col-5, .col-6').css('display') === 'none')
        {
            button.textContent = '收起';
            $('.col-2, .col-3, .col-4, .col-5, .col-6').slideDown(700)
        }
    else
        {
            button.textContent = '展开全部';
            $('.col-2, .col-3, .col-4, .col-5, .col-6').hide(400)
        }
})