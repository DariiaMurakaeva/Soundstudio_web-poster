$(document).ready(function(){

    //синтезатор
    //до
    $(".do1, .do2, .do3, .do4").click(function(){
        $(this).addClass("play")
    });

    $(function() {
        let audio = $('#do'), tile= $(".do1, .do2, .do3, .do4");

        function play()
        {
            audio[0].play();
        }
        function pause()
        {
            audio[0].pause();
        }
        tile.on('click',function(){
            $(this).is('.play') ? play() : pause()
            $(this).removeClass("play")
        })
    })
    //ре
    $(".re1, .re2, .re3, .re4").click(function(){
        $(this).addClass("play")
    });

    $(function() {
        let audio = $('#re'), tile= $(".re1, .re2, .re3, .re4");

        function play()
        {
            audio[0].play();
        }
        function pause()
        {
            audio[0].pause();
        }
        tile.on('click',function(){
            $(this).is('.play') ? play() : pause()
            $(this).removeClass("play")
        })
    })
    //ми
    $(".mi1, .mi2, .mi3, .mi4").click(function(){
        $(this).addClass("play")
    });

    $(function() {
        let audio = $('#mi'), tile= $(".mi1, .mi2, .mi3, .mi4");

        function play()
        {
            audio[0].play();
        }
        function pause()
        {
            audio[0].pause();
        }
        tile.on('click',function(){
            $(this).is('.play') ? play() : pause()
            $(this).removeClass("play")
        })
    })
    //фа
    $(".fa1, .fa2, .fa3").click(function(){
        $(this).addClass("play")
    });

    $(function() {
        let audio = $('#fa'), tile= $(".fa1, .fa2, .fa3");

        function play()
        {
            audio[0].play();
        }
        function pause()
        {
            audio[0].pause();
        }
        tile.on('click',function(){
            $(this).is('.play') ? play() : pause()
            $(this).removeClass("play")
        })
    })
    //соль
    $(".sol1, .sol2, .sol3").click(function(){
        $(this).addClass("play")
    });

    $(function() {
        let audio = $('#sol'), tile= $(".sol1, .sol2, .sol3");

        function play()
        {
            audio[0].play();
        }
        function pause()
        {
            audio[0].pause();
        }
        tile.on('click',function(){
            $(this).is('.play') ? play() : pause()
            $(this).removeClass("play")
        })
    })
    // ля
    $(".lya1, .lya2, .lya3").click(function(){
        $(this).addClass("play")
    });

    $(function() {
        let audio = $('#lya'), tile= $(".lya1, .lya2, .lya3");

        function play()
        {
            audio[0].play();
        }
        function pause()
        {
            audio[0].pause();
        }
        tile.on('click',function(){
            $(this).is('.play') ? play() : pause()
            $(this).removeClass("play")
        })
    })
    // си
    $(".si1, .si2, .si3").click(function(){
        $(this).addClass("play")
    });

    $(function() {
        let audio = $('#si'), tile= $(".si1, .si2, .si3");

        function play()
        {
            audio[0].play();
        }
        function pause()
        {
            audio[0].pause();
        }
        tile.on('click',function(){
            $(this).is('.play') ? play() : pause()
            $(this).removeClass("play")
        })
    })

    // до-диез
    $(".do1-1, .do1-2, .do1-3, .do1-4").click(function(){
        $(this).addClass("play")
    });

    $(function() {
        let audio = $('#do-1'), tile= $(".do1-1, .do1-2, .do1-3, .do1-4");

        function play()
        {
            audio[0].play();
        }
        function pause()
        {
            audio[0].pause();
        }
        tile.on('click',function(){
            $(this).is('.play') ? play() : pause()
            $(this).removeClass("play")
        })
    })

    // ре-диез
    $(".re1-1, .re1-2, .re1-3, .re1-4").click(function(){
        $(this).addClass("play")
    });

    $(function() {
        let audio = $('#re-1'), tile= $(".re1-1, .re1-2, .re1-3, .re1-4");

        function play()
        {
            audio[0].play();
        }
        function pause()
        {
            audio[0].pause();
        }
        tile.on('click',function(){
            $(this).is('.play') ? play() : pause()
            $(this).removeClass("play")
        })
    })
    // фа-диез
    $(".fa1-1, .fa1-2, .fa1-3").click(function(){
        $(this).addClass("play")
    });

    $(function() {
        let audio = $('#fa-1'), tile= $(".fa1-1, .fa1-2, .fa1-3");

        function play()
        {
            audio[0].play();
        }
        function pause()
        {
            audio[0].pause();
        }
        tile.on('click',function(){
            $(this).is('.play') ? play() : pause()
            $(this).removeClass("play")
        })
    })
    // соль-диез
    $(".sol1-1, .sol1-2, .sol1-3").click(function(){
        $(this).addClass("play")
    });

    $(function() {
        let audio = $('#sol-1'), tile= $(".sol1-1, .sol1-2, .sol1-3");

        function play()
        {
            audio[0].play();
        }
        function pause()
        {
            audio[0].pause();
        }
        tile.on('click',function(){
            $(this).is('.play') ? play() : pause()
            $(this).removeClass("play")
        })
    })
    // ля-диез
    $(".lya1-1, .lya1-2, .lya1-3").click(function(){
        $(this).addClass("play")
    });

    $(function() {
        let audio = $('#lya-1'), tile= $(".lya1-1, .lya1-2, .lya1-3");

        function play()
        {
            audio[0].play();
        }
        function pause()
        {
            audio[0].pause();
        }
        tile.on('click',function(){
            $(this).is('.play') ? play() : pause()
            $(this).removeClass("play")
        })
    })

    // квадратики
        $(".kv1, .kv2, .kv3, .kv4, .kv5, .kv6, .kv7, .kv8, .kv9, .kv10, .kv11, .kv12, .kv13, .kv14, .kv15, .kv16, .kv17, .kv18, .kv19, .kv20, .kv21, .kv22, .kv23, .kv24, .kv25, .kv26, .kv27, .kv28, .kv29, .kv30").click(function(){
        $(this).toggleClass("kv31")
        });

        $(".kn1, .kn3, .kn6, .kn8, .kn9, .kn11, .kn14, .kn16").click(function(){
            $(this).toggleClass("kn17")
            });

        $(".kn2, .kn4, .kn5, .kn7, .kn10, .kn12, .kn13, .kn15").click(function(){
            $(this).toggleClass("kn18")
            });    

    // кнопки-квадратики
        $(".th1, .th2, .th3, .th4").click(function(){
        $(this).toggleClass("th5")
        });
        $(".th3").click(function(){
            $(".krug").toggleClass("scale")
            });

        $(".th3").click(function(){
            $(this).toggleClass("play")
            });
        $(function() {
            let audio = $('#player2'), btn= $(".th3");
        
            function play()
            {
                audio[0].play();
            }
            function pause()
            {
                audio[0].pause();
            }
            btn.on('click',function(){
            $(this).is('.play') ? play() : pause()
            })
        }) 

    // ползунки
        $( ".polzunok" ).draggable({ axis: "y", containment: "parent"});
        $( ".shtuchka" ).draggable({ axis: "x", containment: ".controller"});
        $( ".o" ).draggable({ axis: "x", containment: ".way"});
        $( ".pip" ).draggable({ axis: "y", containment: ".rychag"});

    // кассеты
    $('.il').click( function () {
        let rez = $('<div class="popup1">Перемен!</div>');
        $('#song1').append(rez);
        setTimeout( function() { rez.remove(); }, 500);
    });
    $('.yi').click( function () {
        let rez = $('<div class="popup2">Группа крови</div>');
        $('#song2').append(rez);
        setTimeout( function() { rez.remove(); }, 500);
    });
    $('.sam').click( function () {
        let rez = $('<div class="popup3">Последний герой</div>');
        $('#song3').append(rez);
        setTimeout( function() { rez.remove(); }, 500);
    });
    $('.sa').click( function () {
        let rez = $('<div class="popup4">Легенда</div>');
        $('#song4').append(rez);
        setTimeout( function() { rez.remove(); }, 500);
    });
    $('.oh').click( function () {
        let rez = $('<div class="popup5">Апрель</div>');
        $('#song5').append(rez);
        setTimeout( function() { rez.remove(); }, 500);
    });

    // крутилки
    let rotate = 0;
    $(".shtuka").click(function(){
        rotate += 30;
        $(this).css('transform', `rotate(${rotate}deg)`)
    });
    $(".krutilka").click(function(){
        rotate += 30;
        $(this).css('transform', `rotate(${rotate}deg)`)
    });

    // пластинка
        $(".korobki").click(function(){
        $(".plastinka").addClass("move")
        setTimeout(function(){
            $('.plastinka').addClass("top");
        }, 1000);
        });
        $( function() {
            $( ".plastinka" ).draggable();
            $( ".mesto" ).droppable({
            drop: function( event, ui ) {
                $( ".plastinka" )
                .css( "top", "4.6vw" )
                .css( "left", "-20.8vw" )
                $( ".plastinka" )
                .addClass( "dropped" )
            }
            });
        } );

        let audio = $('#player'), knopka= $(".kruzhochek"), plastinka=$(".plastinka"), igla = $(".igla");
        knopka.click(function () {
        if (plastinka.hasClass("dropped")) {
            igla.hasClass('fixed') && plastinka.toggleClass("run");
            igla.hasClass('fixed') && knopka.toggleClass("pink");

            function play()
            {
                audio[0].play();
            }
            function pause()
            {
                audio[0].pause();
            }

                plastinka.hasClass('run') && $(".igla").hasClass('fixed')  ? play() : pause()
            }
        else {
                alert( "Вставьте пластинку в проигрыватель и закрепите иглу" ); 
            }
        });

    // проигрыватель
    $(".igla").click(function(){
        $(this).toggleClass("fixed")
        });

        // текст и колесики
        $(".knopochka2").click(function(){
        $(".kolesiko1, .kolesiko2").toggleClass("run")
        });
        $(".knopochka2").click(function(){
            $(".type1").addClass("type-run")
            setTimeout(function(){
                $('.type1').css("border", "none");
            }, 2200);
            setTimeout(function(){
                $('.type2').removeClass("none");
            }, 2200);
            setTimeout(function(){
                $('.type2').addClass("type-run");
            }, 2200);
            });

    // оранжевая кнопка
    $(".button2").click(function () {
        $(".screenon").toggleClass("stop");
    });

    // Привидение
        $(".yuk").click(function(){
            $("body, .boxes, .kassety, .paper, .pencil, .footer, .korobki").toggleClass("black");
            // $("body, .boxes, .kassety, .paper, .pencil, .footer").css("background-color","#060602");
            $("p").toggleClass("white-type");
            // $("p").css("color","#F0F0F0");
            $(".yuk, .player, .squaretool, .knopki, .list").toggleClass("pink-border");
            // $(".yuk, .player, .squaretool, .knopki, .list").css("border-color","#F394BE");
            $(".ghost").removeClass("none");
            $(".ghost").addClass("fly");
            setTimeout(function(){
                $('.ghost').addClass("none");
            }, 1000);
        });
})