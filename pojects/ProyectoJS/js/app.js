'use strict'

//SLIDER
$(document).ready(function () {
    $(function () {
        $('.bxslider').bxSlider({
            mode: 'fade',
            captions: true,
            slideWidth: 1200,
            pager: true,
        });
    });
    //Pruba seccion
    $('#logo h2').mouseover(function () { 
        $(this).fadeOut(500);
    });
    //Posts
    var posts = [
        {
            title: 'Prueba de titulo 1',
            date: 'Publicado el día ' + moment().format('d') + ' de ' + moment().format('MMMM') + ' de ' + moment().format('YYYY'),
            content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum est aliquam, perspiciatistenetur expedita inventore, debitis et omnis exercitationem placeat earum beatae? Autemconsectetur nemo animi! Veniam fugiat aut blanditiis'
        },
        {
            title: 'Prueba de titulo 2',
            date: 'Publicado el día ' + moment().format('d') + ' de ' + moment().format('MMMM') + ' de ' + moment().format('YYYY'),
            content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum est aliquam, perspiciatistenetur expedita inventore, debitis et omnis exercitationem placeat earum beatae? Autemconsectetur nemo animi! Veniam fugiat aut blanditiis'
        },
        {
            title: 'Prueba de titulo 3',
            date: 'Publicado el día ' + moment().format('d') + ' de ' + moment().format('MMMM') + ' de ' + moment().format('YYYY'),
            content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum est aliquam, perspiciatistenetur expedita inventore, debitis et omnis exercitationem placeat earum beatae? Autemconsectetur nemo animi! Veniam fugiat aut blanditiis'
        },
        {
            title: 'Prueba de titulo 4',
            date: 'Publicado el día ' + moment().format('d') + ' de ' + moment().format('MMMM') + ' de ' + moment().format('YYYY'),
            content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum est aliquam, perspiciatistenetur expedita inventore, debitis et omnis exercitationem placeat earum beatae? Autemconsectetur nemo animi! Veniam fugiat aut blanditiis'
        },
        {
            title: 'Prueba de titulo 5',
            date: 'Publicado el día ' + moment().format('d') + ' de ' + moment().format('MMMM') + ' de ' + moment().format('YYYY'),
            content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum est aliquam, perspiciatistenetur expedita inventore, debitis et omnis exercitationem placeat earum beatae? Autemconsectetur nemo animi! Veniam fugiat aut blanditiis'
        },
        {
            title: 'Prueba de titulo 6',
            date: 'Publicado el día ' + moment().format('d') + ' de ' + moment().format('MMMM') + ' de ' + moment().format('YYYY'),
            content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum est aliquam, perspiciatistenetur expedita inventore, debitis et omnis exercitationem placeat earum beatae? Autemconsectetur nemo animi! Veniam fugiat aut blanditiis'
        },
    ];
    posts.forEach((item, index) => {
        var post = `
        <article class="post">
        <h2>${item.title}</h2>
        <span class="date">${item.date}</span>
        <p>${item.content}</p>
        <a href="#" class="button-more">Leer más</a>
    </article>
    `;
        $('#posts').append(post)
    });

    //SELECTOR DE TEMA
    var theme = $('#theme')
    $('#to-green').click(function () {
        localStorage.setItem("blue","false");
        localStorage.setItem("red","false");
        localStorage.setItem("green", "true");
        theme.attr('href', 'css/green.css')
        $('#to-green').addClass("active");
        $('#to-blue').removeClass("active");
        $('#to-red').removeClass("active");
    })
    $('#to-red').click(function () {
        localStorage.setItem("blue","false");
        localStorage.setItem("green","false");
        localStorage.setItem("red" , "true");
        theme.attr('href', 'css/red.css')
        $('#to-red').addClass("active");
        $('#to-blue').removeClass("active");
        $('#to-green').removeClass("active");
    })
    $('#to-blue').click(function () {
        localStorage.setItem("green","false");
        localStorage.setItem("red","false");
        localStorage.setItem("blue" ,"true");
        theme.attr('href', 'css/blue.css')
        $('#to-blue').addClass("active");
        $('#to-green').removeClass("active");
        $('#to-red').removeClass("active");
    });

    function compruebaTheme() {
        if (localStorage.green == 'true') {
            theme.attr('href', 'css/green.css');
        }
        if(localStorage.red == 'true') {
            theme.attr('href', 'css/red.css');
        }
        if(localStorage.blue == 'true') {
            theme.attr('href', 'css/blue.css');
        }
    }
    $(document).ready(function () {
        compruebaTheme();
    });





    //SCROLL UP TO START
    $('.subir').click(function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 800);
        return false;
    });

    //LOGIN

    $('#login form').submit(function () {
        var form_name = $('#form_name').val();
        localStorage.setItem('form_name', form_name);
    });

    var form_name = localStorage.getItem('form_name');
    if (form_name != null && form_name != 'undefined') {

        $('#about p').html('<br><strong>Bienvenido, ' + form_name + '</strong>');
        $('#about p').append("<a href='#' id='logout'>Cerrar sesión</a>");
        $('#login').hide();
        $('#about p').click(function () {
            localStorage.clear();
            location.reload();
        })
    }

    //ACORDEON SOLO FUNCIONARA EN ABOUT:
    if (window.location.href.indexOf('about') > -1) {
        $('#acordeon').accordion();
    }

    //RELOJ
    if (window.location.href.indexOf('reloj') > -1) {

        setInterval(function () {

            var reloj = moment().format('hh:mm:ss');
            $('#reloj').html(reloj);

            $("#bola1").animate({ marginTop: '340px' });
            $("#bola2").animate({ marginTop: '340px' });
            $("#bola3").animate({ marginTop: '340px' });
        }, 1000);
        setInterval(function () {
            $("#bola3").animate({ marginLeft: '-1px' });
            $("#bola1").animate({ marginTop: '-2px' });
            $("#bola2").animate({ marginLeft: '-3px' })

        }, 2000);        setInterval(function () {
            $("#bola1").animate({ marginTop: '-2px' });
        }, 850);
        setInterval(function () {
            $("#bola2").animate({ marginTop: '-2px' });
        }, 2500);
        setInterval(function () {
            $("#bola3").animate({ marginTop: '-7px' });
        }, 1500);
        setInterval(function () {
            $("#bola1").animate({ marginTop: '-2px' });
        }, 2000);
        setInterval(function () {
            $("#bola2").animate({ marginTop: '-2px' });
        }, 400);
        setInterval(function () {
            $("#bola3").animate({ marginTop: '-2px' });
        }, 1200);
    };

    $('form input[type="submit"]').click(function(e){
        e.preventDefault();
        
    })
});

/*     //FORM VALIDATOR  -CAMBIAR EL PLUGIN PORQUE ESTA OBSOLETO-
    if (window.location.href.indexOf('contacto') > -1) {

        $('form input[name="date"]').datepicker({
            dateFormat: 'dd-mm-yy'
        });
        $.validate({
            lang: 'es',
            
        });
    }; */








