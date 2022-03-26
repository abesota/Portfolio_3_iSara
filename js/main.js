'use strict';

{
    // スクロールしたらヘッダーを固定配置
    let nav_pos = $("#header").offset().top;
    let nav_height = $("#header").outerHeight();
    $(window).scroll(function () {
        if ($(this).scrollTop() > nav_pos) {
            $("body").css("padding-top", nav_height);
            $("#header").addClass("fixed");
        } else {
            $("body").css("padding-top", 0);
            $("#header").removeClass("fixed");
        }
    });

    function onscrollCallback(entries) {
      entries.forEach(entry => {
        if(!entry.isIntersecting) {
          top.classList.add('scrolled');
        }else{
          top.classList.remove('scrolled');
        }
      });
    }
  
    // トップへ戻る
    const top =document.getElementById('top');
  
    const onScrollObserver = new IntersectionObserver(onscrollCallback);
    onScrollObserver.observe(document.getElementById('target'));
  
    top.addEventListener('click', e => {
      e.preventDefault();
  
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    });

    // 受講の流れのアコーディオンメニュー
    const shows = document.querySelectorAll('.wp2_cap');

    shows.forEach(show => {
      show.addEventListener('click', () => {
        show.parentNode.classList.toggle('appear');

        shows.forEach(el => {
          if (show !== el) {
            el.parentNode.classList.remove('appear');
          }
        });
      });
    });

    // よくある質問のアコーディオンメニュー
    const shows_2 = document.querySelectorAll('.ofn_dt');

    shows_2.forEach(show => {
      show.addEventListener('click', () => {
        show.parentNode.classList.toggle('appear');

        shows_2.forEach(el => {
          if (show !== el) {
            el.parentNode.classList.remove('appear');
          }
        });
      });
    });

}