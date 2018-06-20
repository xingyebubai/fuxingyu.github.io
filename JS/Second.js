const button = document.querySelector('.spread');
$('.Col').hide()
$('.spread').click(function(){
    if($('.Col').css('display') === 'none')
        {
            button.textContent = '收起';
            $('.Col').slideDown(700)
        }
    else
        {
            button.textContent = '展开全部';
            $('.Col').hide(400)
        }
})