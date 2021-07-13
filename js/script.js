/**
 * Created by saleem on 10/10/2017.
 */

 $(document).ready(function () {

    $('.share a').click(function (ev) {
            window.open(this.href, "my_window", "width=400, height=400");
            ev.preventDefault()
        });


    // loader
    $('.loader').fadeOut(3000);


    $('.bePartnerLink').click(function () {
        $('.bePartner').toggleClass('open');
    })
    $('.close-icon').click(function () {
        $('.bePartner').toggleClass('open');

    });
    var searchBox = document.getElementById('searchbox');

    $('.icon-search,#searchbox-close').click(function () {
        if (searchBox.className === 'show') {
            searchBox.className = 'hide';
        } else {
            searchBox.className = 'show';
        }
    })

//searchToggle();
    // $(window).load(function () {

    // });
});