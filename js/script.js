$(document).ready(function(){
    $('#trigger').click(function(){
        $('.sub-menu').toggleClass('on');
    });

    $(window).resize(function(){
        var ww = $(window).width();
        toggle();
    });
    toggle();
    function toggle(){
        var ww = $(window).width();
        if(ww >= 1300) { 	
            $('.txt-box-b button').click(function(){
                $('.me').toggleClass('on');
                $('.sec-1-r').toggleClass('on');
                // $('.sec-1-l .txt-box').addClass('on');

            });
        
        }else{
            $('.txt-box-b button').click(function(){
                $('.me').toggleClass('on');
                $('.sec-1-r').toggleClass('on');
                $('.sec-1-l .txt-box').addClass('on');
                $('.sec-1-l .img-box').addClass('on');
            });
            
            $('.me-inbox').click(function(e){
                console.log(e.target)
                $('.me').removeClass('on');
                $('.sec-1-l .txt-box').removeClass('on');
                $('.sec-1-l .img-box').removeClass('on');
            });
        }
    }

    $('.btn li').click(function(){
        $(this).addClass('on');
        $(this).siblings().removeClass('on');

        // 탭 메뉴 연결해주기
        const result = $(this).attr('data-alt');

        $('.txt_b li').removeClass('on');
        $(`#${result}`).addClass('on');
    });

    const content = "안녕하세요. 웹 퍼블리셔 김혜지 입니다.";
    const text = document.querySelector('.title span');
    let i = 0;
    function typing(){
        if (i < content.length) {
        let txt = content.charAt(i);
        text.innerHTML += txt;
        i++;
        }
    }
    setInterval(typing, 200)

    const banner = $('.banner').offset().top;
    const sec1 = $('.sec-1').offset().top;
    const sec2 = $('.sec-2').offset().top+100;
    const sec3 = $('.sec-3').offset().top+100;
    const sec4 = $('.sec-4').offset().top;

    //sub-menu
    $('.tab-1').click(function(){
        $('html,body').animate({
          scrollTop : banner
        },500);
        $('#trigger').click();
        $('.sub-menu').removeClass('on');
    });
    $('.tab-2').click(function(){
        $('html,body').animate({
            scrollTop : sec1
        },500);
        $('#trigger').click();
        $('.sub-menu').removeClass('on');
    });
    $('.tab-3').click(function(){
        $('html,body').animate({
            scrollTop : sec2
        },500);
        $('#trigger').click();
        $('.sub-menu').removeClass('on');
    });
    $('.tab-4').click(function(){
        $('html,body').animate({
            scrollTop : sec3
        },500);
        $('#trigger').click();
        $('.sub-menu').removeClass('on');
    });
    $('.tab-5').click(function(){
        $('html,body').animate({
            scrollTop : sec4
        },500);
        $('#trigger').click();
        $('.sub-menu').removeClass('on');
    });

    // menu
    $('.tab_1').click(function(){
        $('html,body').animate({
          scrollTop : banner
        },500);
        $('.sub-menu').removeClass('on');

    });
    $('.tab_2').click(function(){
        $('html,body').animate({
            scrollTop : sec1
        },500);
        $('.sub-menu').removeClass('on');
    });
    $('.tab_3').click(function(){
        $('html,body').animate({
            scrollTop : sec2
        },500);
        $('.sub-menu').removeClass('on');
    });
    $('.tab_4').click(function(){
        $('html,body').animate({
            scrollTop : sec3
        },500);
        $('.sub-menu').removeClass('on');
    });
    $('.tab_5').click(function(){
        $('html,body').animate({
            scrollTop : sec4
        },500);
        $('.sub-menu').removeClass('on');
    });

    $('.sec-4-r').click(function(){
        $('html,body').animate({scrollTop:0},400);
    });

    $(window).scroll(function(){
        const sct = $(window).scrollTop();

        if(sct >= 490){
            $('label[for="trigger"]').addClass('on');
        }else{
            $('label[for="trigger"]').removeClass('on');
        }
    });

    new fullpage('#wrap',{        
        // 새로고침시 상단으로 스크롤 되는 부분 막아주기
        anchors : ['anchor1', 'anchor2', 'anchor3', 'anchor4'],
        // 스크롤바 생성
        scrollBar : true,
        // 지정한 섹션에는 스크롤을 정상값으로 돌려주기
        normalScrollElements : '.sec-4',
        // 높이값이 풀페이지가 아닌 경우 풀페이지 상단 영역으로 올라가는 현상 막아주기
        fitToSection : false
    });
    

$('.btn li').click(function(){
    chartAni();
});

chartAni();

function chartAni(){
  $('.count').each(function(){
    let chart = $(this),
    Number = chart.find('.number'),
    Data = Number.text();
    Number.text(0);

    $({ percent: 0 }).clearQueue().animate({ percent: Data }, {
        duration: 1500,
        progress: function () {
            let now = this.percent;
            Number.text(Math.floor(now));
        }
    });
  });
}

//skills
$(function(){
    $('.sec-2 .btn li').eq(0).children("a").addClass("on")
    $(".skills_txt").hide();
    $(".skills_txt").eq(0).fadeIn();

    var doms = '';
    var $progress = $('.progress');
    var $data = $progress.find('span');
    var data = $('.sec-2 .btn li').eq(0).data('percent');
    var com = Math.round(data / 100 * 360);

    var getVendorPrefix = function() {
        var body = document.body || document.documentElement,
            style = body.style,
            transition = "Transition",
            vendor = ["Moz", "Webkit", "ms"],
            lastGage,
            i = 0;
        while (i < vendor.length) {
            if (typeof style[vendor[i] + transition] === "string") {
                return vendor[i];
            }
            i++;
        }
        return false;
    };
    var prefix = getVendorPrefix();
    var transform = prefix + 'Transform';


    for(var i=0; i <= com; i++){
        console.log('hi')
        doms = '<div class="gage-bar"></div>';
        $progress.append(doms);
        $('.gage-bar:last').css(transform, 'rotate(' + i + 'deg)');
    }

    $progress.find('div').each(function(index, item){
        $(item).stop().delay(index * 5).fadeIn(50);
    });

    //Span number
    $data.text(data);


    $(".sec-2 .btn li a").click(function(){
        data = 0;
        com = 0;

        $(".skills_txt").hide();
        $(".gage-bar").remove();
        $('.sec-2 .btn li a').removeClass("on");

        var no = $(this).parent("li").index();
        $(".skills_txt").eq(no).show();
        $('.sec-2 .btn li').eq(no).children("a").addClass("on");

        var doms = '';
        var $progress = $('.progress');
        var $data = $progress.find('span');
        var data = $('.sec-2 .btn li').eq(no).data('percent');
        var com = Math.round(data / 100 * 360);
    
        var getVendorPrefix = function() {
            var body = document.body || document.documentElement,
                style = body.style,
                transition = "Transition",
                vendor = ["Moz", "Webkit", "ms"],
                lastGage,
                i = 0;
            while (i < vendor.length) {
                if (typeof style[vendor[i] + transition] === "string") {
                    return vendor[i];
                }
                i++;
            }
            return false;
        };
        var prefix = getVendorPrefix();
        var transform = prefix + 'Transform';
    

        for(var i=0; i <= com; i++){
            console.log('hi')
            doms = '<div class="gage-bar"></div>';
            $progress.append(doms);
            $('.gage-bar:last').css(transform, 'rotate(' + i + 'deg)');
        }
    
        $progress.find('div').each(function(index, item){
            $(item).stop().delay(index * 5).fadeIn(50);
        });
    
        //Span number
        $data.text(data);
                
        });
    });
});