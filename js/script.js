window.onload = function() {
    let menu = document.querySelector('#menu-bars');
    let navbar = document.querySelector('.navbar');

    menu.onclick = () => {
        menu.classList.toggle('fa-times');
        navbar.classList.toggle('active');
    }

    let section = document.querySelectorAll('section');
    let navLinks = document.querySelectorAll('header .navbar a');

    window.onscroll = () => {

        menu.classList.remove('fa-times');
        navbar.classList.remove('active');

        section.forEach(sec => {

            let top = window.scrollY;
            let height = sec.offsetHeight;
            let offset = sec.offsetTop - 150;
            let id = sec.getAttribute('id');

            if (top >= offset && top < offset + height) {
                navLinks.forEach(links => {
                    links.classList.remove('active');
                    document.querySelector('header .navbar a[href*=' + id + ']').classList.add('active');
                });
            };

        });

    }

    document.querySelector('#search-icon').onclick = () => {
        document.querySelector('#search-form').classList.toggle('active');
    }

    document.querySelector('#close').onclick = () => {
        document.querySelector('#search-form').classList.remove('active');
    }

    // add to cart
    document.querySelector('.fa-shopping-cart').onclick = () => {
        var carthide = 'carthide'
        if (document.getElementById("cart").className.includes(carthide)) {
            document.querySelector('.cart-items').classList.remove('carthide');
            document.querySelector('.cart-items').classList.toggle('card-show');
        } else {
            document.querySelector('.cart-items').classList.toggle('carthide');
        }

    }

    //Add item to cart

    const iconShoppingP = document.querySelector('.shoppingcart');
    let no = 0;
    if (JSON.parse(localStorage.getItem("items")) != null) {
        JSON.parse(localStorage.getItem("items")).map(data => {
            no = no + data.no
        });
    }

    iconShoppingP.innerHTML = no;

    // add to cart ends
    // adding cardbox data in table
    const cardboxTable = document.querySelector('.content-cards').querySelector('table');
    let tableData = '';
    tableData += ''

    if (JSON.parse(localStorage.getItem('items')) == null) {
        tableData += '<h3> Cart is Empty<h3>'
    } else {
        JSON.parse(localStorage.getItem('items')).map(data => {
            tableData += '<tr><th><img src =' + data.foodImg + '></th>' + '<th><h3>' + data.name + '</h3></th>' +
                '<th><span class="count">' + data.no + '</span></th>' +
                '<th><a href="#" onclick=itemdelete(this)><i class="fas fa-trash-alt"></i></a></th></tr>'
        });
    }
    cardboxTable.innerHTML = tableData;


    var swiper = new Swiper(".home-slider", {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
            delay: 75000000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        loop: true,
    });

    var swiper = new Swiper(".review-slider", {
        spaceBetween: 20,
        centeredSlides: true,
        autoplay: {
            delay: 3500,
            disableOnInteraction: false,
        },
        loop: true,
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            640: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            },
        },
    });


    function loader() {
        document.querySelector('.loader-container').classList.add('fade-out');
    }

    function fadeOut() {
        setInterval(loader, 3000);
    }

    fadeOut();
}