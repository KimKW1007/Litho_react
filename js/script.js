(function($,window,document){
  var litho = {
    init:function(){
      this.parallax();
      this.header();
      this.section1();
      this.section2();
      this.section3();
      this.section4();
      this.section5();
      this.section6();
      this.section7();
      this.section8();
      this.section9();
      this.footer();
      this.goTop();


        /* body 전체 a태그 click이벤트 해제 나중에 삭제해주세요 */
      var $body_A =$('body a');
          $body_A.click(function(e){
            e.preventDefault();
          })
    },
    parallax:function(){
      var plx = {
        init:function(){
          this.section2();
          this.section3();
          this.section4();
          this.section5();
          this.section6();
          this.section8();
          this.section9();
        },
        section2:function(){
          var wind = $(window),
              s2 = $('#section2'),
              s2_OST = s2.offset().top,
              s2_OST_wH = s2_OST - $(window).height() + 160,
              load = false;

              wind.resize(function(){
                resizeFn()
              })
              function resizeFn(){
                s2_OST = s2.offset().top;
                s2_OST_wH = s2_OST - $(window).height() + 160;
              }
              resizeFn()
              wind.scroll(function(){
                if($(this).scrollTop() > s2_OST_wH){
                  if(load == false){
                    load = true;
                    s2.addClass('active');
                  }
                }
              })
             

        },
        section3:function(){
          var wind = $(window),
              s3 = $('#section3'),
              s3_OST = s3.offset().top,
              s3_OST_wH = s3_OST - $(window).height() + 160,
              load = false;


              wind.resize(function(){
                resizeFn()
              })
              function resizeFn(){
                s3_OST = s3.offset().top;
                s3_OST_wH = s3_OST - $(window).height() + 160;
              }
              resizeFn()
              wind.scroll(function(){
                if($(this).scrollTop() > s3_OST_wH){
                  if(load == false){
                    load = true;
                    s3.addClass('active');
                  }
                }
              })

        },
        section4:function(){
          var wind = $(window),
              s4 = $('#section4'),
              s4_OST = s4.offset().top ,
              s4_OST_wH = s4_OST - $(window).height() + 160,
              load = false;

              wind.resize(function(){
                resizeFn()
              })
              function resizeFn(){
                s4_OST = s4.offset().top;
                s4_OST_wH = s4_OST - $(window).height() + 160;
              }
              resizeFn()
              wind.scroll(function(){
                if($(this).scrollTop() > s4_OST_wH){
                  if(load == false){
                    load = true;
                    s4.addClass('active');
                  }
                }
              })

        },
        section5:function(){
          var wind = $(window),
              s5 = $('#section5'),
              s5_OST = s5.offset().top ,
              s5_OST_wH = s5_OST - $(window).height() + 160,
              load = false;


              wind.resize(function(){
                resizeFn()
              })
              function resizeFn(){
                s5_OST = s5.offset().top;
                s5_OST_wH = s5_OST - $(window).height() + 160;
              }
              resizeFn()
              wind.scroll(function(){
                if($(this).scrollTop() > s5_OST_wH){
                  if(load == false){
                    load = true;
                    s5.addClass('active');
                  }
                }
              })

        },
        section6:function(){
          var wind = $(window),
              s6 = $('#section6'),
              s6_OST = s6.offset().top ,
              s6_OST_wH = s6_OST - $(window).height() + 160,
              load = false;
              wind.resize(function(){
                resizeFn()
              })
              function resizeFn(){
                s6_OST = s6.offset().top;
                s6_OST_wH = s6_OST - $(window).height() + 160;
              }
              resizeFn()
              wind.scroll(function(){
                if($(this).scrollTop() > s6_OST_wH){
                  if(load == false){
                    load = true;
                    s6.addClass('active');
                  }
                }
              })

        },
        section8:function(){
          var wind = $(window),
              s8 = $('#section8'),
              s8_OST = s8.offset().top ,
              s8_OST_wH = s8_OST - $(window).height() + 180,
              load = false;

              wind.resize(function(){
                resizeFn()
              })
              function resizeFn(){
                s8_OST = s8.offset().top;
                s8_OST_wH = s8_OST - $(window).height() + 180;
              }
              resizeFn()
              wind.scroll(function(){
                if($(this).scrollTop() > s8_OST_wH){
                  if(load == false){
                    load = true;
                    s8.addClass('active');
                  }
                }
              })

        },
        section9:function(){
          var wind = $(window),
              s9 = $('#section9'),
              s9_OST = s9.offset().top ,
              s9_OST_wH = s9_OST - $(window).height() + 200,
              load = false;

              wind.resize(function(){
                resizeFn()
              })
              function resizeFn(){
                s9_OST = s9.offset().top;
                s9_OST_wH = s9_OST - $(window).height() + 200;
              }
              resizeFn()
              wind.scroll(function(){
                if($(this).scrollTop() > s9_OST_wH){
                  if(load == false){
                    load = true;
                    s9.addClass('active');
                  }
                }
              })

        }
      }
      plx.init();
    },
    header:function(){
      var $wrap = $('#wrap'),
          $header = $wrap.find('#header'),
          nav_btn_box = $header.find('.nav_btn_box'),
          nav_btn = nav_btn_box.find('.nav_btn'),
          nav = $('#nav'),
          menu_cl_btn = nav.find('.menu_cl_btn');

        
          nav_btn.click(function(e){
            e.preventDefault();
             $(this).toggleClass('active')
            nav.addClass('active')
            $('html').addClass('scrNone')
          })

          menu_cl_btn.click(function(e){
            e.preventDefault();
            nav.removeClass('active')
            nav_btn.removeClass('active')
            $('html').removeClass('scrNone')
          })

          // wrap에서 클릭한 곳$(e.target)이  .nav_btn, .nav_btn span 가 아니면 실행함
            $wrap.click(function(e){
              if(!$(e.target).is('.nav_btn , .nav_btn span')){
                  nav.removeClass('active')
                  nav_btn.removeClass('active')
                  $('html').removeClass('scrNone')
              }
            })
         
    },
    section1:function(){
      var s1 = $('#section1'),
          slide_view = s1.find('.slide_view'),
          slide_wrap = slide_view.find('.slide_wrap'),
          slides = slide_wrap.find('.slide'),
          slideLength = slides.length,
          slideWidth = slides.width(),
          slide_inner = slides.find('.slide_inner'),
          num_box = slide_inner.find('.num_box'),
          txt_box = slide_inner.find('.txt_box'),
          timer_line = slide_view.find('.timer_line'),
          loading_icons = s1.find('.loading_icons'),
          slide_btn_box = s1.find('.slide_btn_box'),
          next_btn = slide_btn_box.find('.next_btn'),
          prev_btn = slide_btn_box.find('.prev_btn'),
          current = -1,
          timer,
          nextIdx;


          $(window).resize(function(){
            slideWidth = slides.width();
            timerBarFn()
            reStartFn()
          })
            // 슬라이드 위에 타이머 바 함수 
            function timerBarFn(){
              timer_line.css({top:0, width:0})
              timer_line.stop().animate({width:slideWidth},7600,'easeInOutSine',
                function(){
                  timer_line.stop().animate({top:-4},300)
                })
            }
        
          // 메인슬라이드 (기본:넥스트 슬라이드) 함수 
          function mainSlide(idx){
              txt_box.stop().animate({opacity:0},100)
              slides.removeClass('active')
              num_box.removeClass('active')

              if(idx){
                nextIdx = idx;
              }else{
                nextIdx = (current+1)%slideLength;
              }
              slides.eq(current).stop().fadeOut(600);
              slides.eq(nextIdx).stop().fadeIn(600,function(){
                num_box.addClass('active')
                txt_box.css({opacity:1})
                slides.addClass('active')
              });

            current = nextIdx;
          }
        
          
        

          // 메인슬라이드랑 타이머바 합친 함수 
          function mainS_timerB(index){
            mainSlide(index)
            timerBarFn()
          }

          // 프리브슬라이드 함수 
          function prevSlide(){
            mainS_timerB((current-1) < 0 ? (slideLength-1) : (current-1))
          }

          // 슬라이드 버튼 
          next_btn.click(function(e){
            e.preventDefault();
            if(!slides.is(':animated')){
             mainS_timerB()
             reStartFn()
            }
          })
          // 슬라이드 버튼 
          prev_btn.click(function(e){
            e.preventDefault();
            if(!slides.is(':animated')){
              prevSlide()
              reStartFn()
            }
          })


         
          function autoTImer(){
            timer = setInterval(mainS_timerB,8000);
          }
          // 로딩이미지 비활성화 
          setTimeout(function(){
            loading_icons.stop().fadeOut();
          },700)
          // 슬라이드 활성화 
          setTimeout(function(){
            autoTImer();
            mainS_timerB();
            slide_btn_box.stop().delay(1200).fadeIn(1000)
          },1000)
          // 버튼 클릭시 오토타이머 클리어하고 다시 시작 
          function reStartFn(){
            clearInterval(timer);
            autoTImer()
          }


    },
    section2:function(){
      var s2 = $('#section2');
      
    },
    section3:function(){
      var s3 = $('#section3');
      
    },
    section4:function(){
      var s4 = $('#section4');
      
    },
    section5:function(){
      var s5 = $('#section5'),
          play_box = s5.find('.play_box a'),
          overlay = $('.overlay'),
          cl_btn = overlay.find('.cl_btn_box a'),
          video_src = overlay.find('iframe').attr('src'),
          autoPlay = '?autoplay=1',
          $ifClick = video_src.concat(autoPlay);

          play_box.click(function(e){
            e.preventDefault();
            overlay.stop().fadeIn(200);
            $('html').addClass('scNone');
            overlay.find('iframe').attr('src',$ifClick);
          })

          overlay.click(function(){
            $(this).stop().fadeOut(200);
            $('html').removeClass('scNone');
            overlay.find('iframe').attr('src',video_src);
          })
          cl_btn.click(function(e){
            e.preventDefault();
            overlay.stop().fadeOut(200);
            $('html').removeClass('scNone');
            overlay.find('iframe').attr('src',video_src);
          })



      
    },
    section6:function(){
      var s6 = $('#section6');
      
    },
    section7:function(){
      var s7 = $('#section7'),
          content_inner = s7.find('.content_inner'),
          content_list = content_inner.find('.content_list'),
          list_items = content_list.find('.list_item'),
          list_itemWidth = content_inner.width() / 4,
          list_itemLength = list_items.length,
          quick_btn_box = list_items.find('.quick_btn_box'),
          currentIdx = 0,
          timer,
          reStart,
          second = 0,
          // m = mouse , d = drag
          mDown = false,
          mStart,
          mEnd,
          dStart,
          dEnd;

        $(window).resize(function(){
          resizeFn()
          s7Slider();
  
        })


        function resizeFn(){
          if($(window).width() >= 1240){
            list_itemWidth = content_inner.width() / 4;
          }else if($(window).width() >= 660){
            list_itemWidth = content_inner.width() / 2;
          }else{
            list_itemWidth = content_inner.width();
          }
          list_items.css({width : list_itemWidth})
          content_list.css({width : list_itemWidth * 6})




        }
        resizeFn()
          function s7Slider(){
            content_list.stop().animate({left:-list_itemWidth * currentIdx},800)
          }

          function s7_S_Next(){
            // 슬라이드의 반응형 및 기본설정
            if(list_itemWidth == content_inner.width() / 4){
              if(currentIdx >= list_itemLength-4){
                currentIdx = 0
                s7Slider();
              }else{
                currentIdx++;
                s7Slider();
              }
            }else if(list_itemWidth == content_inner.width() / 2){
              if(currentIdx >= list_itemLength-2){
                currentIdx = 0
                s7Slider();
              }else{
                currentIdx++;
                s7Slider();
              }
            }else{
              if(currentIdx >= list_itemLength-1){
                currentIdx = 0
                s7Slider();
              }else{
                currentIdx++;
                s7Slider();
              }
            }
          }

          function autoSlide(){
            timer = setInterval(s7_S_Next,4000);
          }
          autoSlide()

          function reStartFn(){
            clearInterval(timer);
            clearInterval(reStart);
            second = 0;
            reStart = setInterval(function(){
              second++;
              if(second == 2){
                autoSlide()
                clearInterval(reStart);
              }
            },1000)
          }


          content_inner.mousedown(function(e){
            mDown = true;
            mStart = e.clientX;
            dStart = e.clientX -content_list.offset().left + content_inner.offset().left;
            clearInterval(timer);
          })
          .mouseup(function(e){
            mDown = false;
            mEnd = e.clientX;
            // 슬라이드 드래그및 터치 이벤트 반응형
            if(list_itemWidth == content_inner.width() / 4){
              if(-content_list.offset().left < 100){
                currentIdx = 0;
              }else if(-content_list.offset().left >= list_itemWidth*(list_itemLength-4)){
                currentIdx = list_itemLength-4
              }else{
                currentIdx = Math.round(-(dEnd - dStart)/(list_itemWidth))
              }
            }else if(list_itemWidth == content_inner.width() / 2){
              if(-content_list.offset().left < 100){
                currentIdx = 0;
              }else if(-content_list.offset().left >= list_itemWidth*(list_itemLength-2)){
                currentIdx = list_itemLength-2
              }else{
                currentIdx = Math.round(-(dEnd - dStart)/(list_itemWidth))
              }
            }else{
              if(-content_list.offset().left < 100){
                currentIdx = 0;
              }else if(-content_list.offset().left >= list_itemWidth*(list_itemLength-1)){
                currentIdx = list_itemLength-1
              }else{
                currentIdx = Math.round(-(dEnd - dStart)/(list_itemWidth))
              }
            }
            s7Slider()
            reStartFn()
          })
          .mousemove(function(e){
            if(!mDown){return}
            dEnd = e.clientX;
            content_list.css({left: dEnd - dStart})
            clearInterval(timer);
          })
          .mouseleave(function(e){
            if(!mDown){return}
            mDown = false;
            mEnd = e.clientX;
            if(list_itemWidth == content_inner.width() / 4){
              if(-content_list.offset().left < 100){
                currentIdx = 0;
              }else if(-content_list.offset().left >= list_itemWidth*(list_itemLength-4)){
                currentIdx = list_itemLength-4
              }else{
                currentIdx = Math.round(-(dEnd - dStart)/(list_itemWidth))
              }
            }else if(list_itemWidth == content_inner.width() / 2){
              if(-content_list.offset().left < 100){
                currentIdx = 0;
              }else if(-content_list.offset().left >= list_itemWidth*(list_itemLength-2)){
                currentIdx = list_itemLength-2
              }else{
                currentIdx = Math.round(-(dEnd - dStart)/(list_itemWidth))
              }
            }else{
              if(-content_list.offset().left < 100){
                currentIdx = 0;
              }else if(-content_list.offset().left >= list_itemWidth*(list_itemLength-1)){
                currentIdx = list_itemLength-1
              }else{
                currentIdx = Math.round(-(dEnd - dStart)/(list_itemWidth))
              }
            }
            s7Slider()
            reStartFn()
          })

          content_inner.on({
            touchstart:function(e){
              console.log(e.originalEvent);
              mDown = true;
              mStart = e.originalEvent.touches[0].clientX;
              dStart = e.originalEvent.touches[0].clientX -content_list.offset().left + content_inner.offset().left;
              clearInterval(timer);
            },
            touchend:function(e){
              mDown = false;
              mEnd = e.originalEvent.changedTouches[0].clientX;
              // 슬라이드 드래그및 터치 이벤트 반응형
              if(list_itemWidth == content_inner.width() / 4){
                if(-content_list.offset().left < 100){
                  currentIdx = 0;
                }else if(-content_list.offset().left >= list_itemWidth*(list_itemLength-4)){
                  currentIdx = list_itemLength-4
                }else{
                  currentIdx = Math.round(-(dEnd - dStart)/(list_itemWidth))
                }
              }else if(list_itemWidth == content_inner.width() / 2){
                if(-content_list.offset().left < 100){
                  currentIdx = 0;
                }else if(-content_list.offset().left >= list_itemWidth*(list_itemLength-2)){
                  currentIdx = list_itemLength-2
                }else{
                  currentIdx = Math.round(-(dEnd - dStart)/(list_itemWidth))
                }
              }else{
                if(-content_list.offset().left < 100){
                  currentIdx = 0;
                }else if(-content_list.offset().left >= list_itemWidth*(list_itemLength-1)){
                  currentIdx = list_itemLength-1
                }else{
                  currentIdx = Math.round(-(dEnd - dStart)/(list_itemWidth))
                }
              }
              s7Slider()
              reStartFn()
            },
            touchmove:function(e){
              if(!mDown){return}
              dEnd = e.originalEvent.touches[0].clientX;
              content_list.css({left: dEnd - dStart})
              clearInterval(timer);
            }
          })
          
          

          



      
    },
    section8:function(){
      var s8 = $('#section8');
    },
    section9:function(){
      var s9 = $('#section9');
      
    },
    footer:function(){
      var $footer = $('#footer');
      
    },
    goTop:function(){
      var goTop_wrap = $('#goTop_wrap'),
      goTop_btn = goTop_wrap.find('.goTop_btn');

      $(window).on({
        scroll(){
          if($(this).scrollTop() > 0){
            goTop_wrap.stop().fadeIn(300);
          }else{
            goTop_wrap.stop().fadeOut(300);
          }
        }
      })

      goTop_btn.on({
        click(e){
          e.preventDefault();
          $('html,body').stop().animate({scrollTop:0},1000);
        }
      })
    }
  }
  litho.init();


})(jQuery,window,document);