const button = document.querySelector('.spread');
$('.navlist').hide()
$('.PHP,.JavaScript,.CSS,.banner').hide()

    
    $('.navButton').click(function(){     
        
        if($('.navlist').css('display') === 'none')
            {
                $('.navlist').show(500).slideDown()
                $('.navButton').transition({ y: 300 }, 500, 'linear')
            }
        else
            {
                $('.navlist').hide(500).slideUp()
                $('.navButton').transition({ y: 0 }, 500, 'linear')
            }
        
    })
    
   

var mq750 = window.matchMedia("(min-width:1500px)");//750 修改为 400
function mediaQueryReset(mq750){
    if (mq750.matches) {
        $('.navButton').hide()
        $('.navlist').show()
        $('.navButton').transition({ y: 0 }, 500, 'linear')
    } else {
        $('.navButton').show()
        $('.navlist').hide()
    }
    
}

mediaQueryReset(mq750)
mq750.addListener(mediaQueryReset)


    /*====================="展开"按钮=======================*/
$('.spread').click(function(){
    if($('.PHP,.JavaScript,.CSS,.banner').css('display') === 'none')
        {
            button.textContent = '收起';
            $('.spread').textContent
            $('.jQuery,.PHP,.JavaScript,.CSS,.banner').slideDown(600)
        }
    else
        {
            button.textContent = '展开全部';           
            $('.navButton').transition({ y: 0 }, 500, 'linear')
            $('.jQuery,.PHP,.JavaScript,.CSS').slideUp(600)
            if ($(window).width() <= 1500){
                $('.navlist').hide(600).slideUp()
            }
        }
})






/*====================="回到顶部"的按钮====================*/
    $(".goToTop").hide()
    $(window).scroll(function(){
        if($(this).scrollTop()>1){ //当垂直滚动条大于1时，按钮淡出，反之淡入
            $(".goToTop").fadeIn(2000)
        }else{
            $(".goToTop").fadeOut()
        }
    })