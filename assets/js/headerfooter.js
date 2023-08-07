// Create dynamic header and footer by jQuery

$(document).ready(function(){
    MasterMenu();
    MasterFooter();
});

function MasterMenu(){
    var dynamicheader = document.getElementById("dynamicheader");
    dynamicheader.innerHTML = "<header>"+

'<header id="rs-header" class="rs-header style3">'+
                '<!-- Topbar Area Start -->'+
                '<div class="topbar-area style2">'+
                    '<div class="container custom">'+
                        '<div class="row-table">'+
                            '<div class="col-cell">'+
                                '<div class="header-logo">'+
                                    '<div class="logo-area">'+
                                        '<a href="index.html">'+
                                            '<h2 class="normal-logo1">DemandTech</h2>'+
                                            '<!-- <h2 class="sticky-logo">DemandTech</h2> -->'+
                                            '<!-- <img class="normal-logo" src="assets/images/logo-dark2.png" alt="logo">   -->'+
                                            '<!-- <img class="sticky-logo" src="assets/images/logo-dark.png" alt="logo"> -->'+
                                        '</a>'+
                                    '</div>'+
                                '</div>'+
                            '</div>'+
                            '<div class="col-cell">'+
                                '<div class="header-quote">'+
                                    '<ul class="rs-address-area">'+
                                        '<li class="address-list">'+
                                            '<div class="info-icon">'+
                                                '<i class="flaticon-location"></i>'+
                                            '</div>'+
                                            '<div class="info-content">'+
                                                '<div class="info-title"><a href="#">Location</a></div>'+
                                                '<div class="info-des">Business Bay, Dubai, UAE</div>'+
                                            '</div>'+
                                        '</li>'+
                                        '<li class="address-list">'+
                                            '<div class="info-icon">'+
                                                '<i class="flaticon-email"></i>'+
                                            '</div>'+
                                            '<div class="info-content">'+
                                                '<div class="info-title"><a href="#">Mail us</a></div>'+
                                                '<div class="info-des"><a href="mailto:contact@demandtech.com">contact@demandtech.com</a></div>'+
                                            '</div>'+
                                        '</li>'+
                                        '<!-- <li class="address-list">'+
                                            '<div class="info-icon">'+
                                                '<i class="flaticon-call"></i>'+
                                            '</div>'+
                                            '<div class="info-content">'+
                                                '<div class="info-title"><a href="#">Call us</a></div>'+
                                                '<div class="info-des"><a href="tel:(+1)9999999999"> (+1) 9999 999 999</a></div>'+
                                            '</div>'+
                                        '</li> -->'+
                                    '</ul>'+
                                '</div>'+
                            '</div>'+
                        '</div>'+
                    '</div>'+
                '</div>'+
                '<!-- Topbar Area End -->'+

                '<!-- Menu Start -->'+
                '<div class="menu-area menu-sticky">'+
                    '<div class="container custom box-layout">'+
                        '<div class="row-table">'+
                            '<div class="col-cell header-logo">'+
                                '<div class="logo-area">'+
                                    '<a href="index.html">'+
                                        '<h3 class="normal-logo2">DemandTech</h3>  '+
                                    '</a>'+
                                '</div>'+
                            '</div>'+
                            '<div class="col-cell menu-responsive">'+
                                '<div class="rs-menu-area">'+
                                    '<div class="main-menu">'+
                                        '<nav class="rs-menu hidden-md">'+
                                            '<ul class="nav-menu">'+
                                                '<li class="rs-mega-menu menu-item-has-children">'+
                                                    '<a href="index.html">Home</a>'+

                                                '</li>'+
                                                '<li class="menu-item-has-children">'+
                                                    '<a href="#">Whitepapers</a>'+
                                                
                                                '</li>'+
                                                '<li class="menu-item-has-children">'+
                                                    '<a href="#">Reports</a>'+
                                                  
                                                '</li>'+
                                                '<li class="menu-item-has-children">'+
                                                    '<a href="#">Webinars</a>'+
                                                '</li>'+
                                               
                                               
                                            '</ul>'+
                                            '<!-- //.nav-menu -->'+
                                        '</nav>'+
                                    '</div>'+
                                    '<!-- //.main-menu -->'+
                                '</div>'+
                            '</div>'+
                            '<div class="col-cell rightbar-menu">'+
                                '<div class="expand-btn-inner">'+
                                    '<ul>'+
                                        '<!-- <li class="search-parent">'+
                                            '<a class="hidden-xs rs-search" data-bs-toggle="modal" data-bs-target="#searchModal" href="#">'+
                                                '<i class="flaticon-search"></i>'+
                                            '</a>'+
                                        '</li> -->'+
                                        '<li class="humburger">'+
                                            '<a id="nav-expander" class="nav-expander bar" href="#">'+
                                                '<div class="bar">'+
                                                    '<span class="dot1"></span>'+
                                                    '<span class="dot2"></span>'+
                                                    '<span class="dot3"></span>'+
                                                    '<span class="dot4"></span>'+
                                                    '<span class="dot5"></span>'+
                                                    '<span class="dot6"></span>'+
                                                    '<span class="dot7"></span>'+
                                                    '<span class="dot8"></span>'+
                                                    '<span class="dot9"></span>'+
                                                '</div>'+
                                            '+</a>'+
                                        '</li>'+
                                    '</ul>'+
                                    '<div class="toolbar-sl-share">'+
                                        '<ul>'+
                                            '<li><a href="#"><i class="fa fa-facebook"></i></a></li>'+
                                            '<li><a href="#"><i class="fa fa-twitter"></i></a></li>'+
                                            '<li><a href="#"><i class="fa fa-linkedin"></i></a></li>'+
                                            '<li><a href="#"><i class="fa fa-instagram"></i></a></li>'+
                                        '</ul>'+
                                    '</div>'+
                                '</div>'+
                            '</div>'+
                        '</div>'+
                    '</div>'+
                '</div>'+
                '<!-- Menu End -->'+
                '<!-- Canvas Menu start -->'+
                '<nav class="right_menu_togle hidden-md">'+
                    '<div class="close-btn">'+
                        '<a id="nav-close" class="nav-close">'+
                            '<div class="line">'+
                                '<span class="line1"></span>'+
                                '<span class="line2"></span>'+
                            '</div>'+
                        '</a>'+
                    '</div>'+
                    '<div class="canvas-logo">'+
                        '<a href="index.html"><h2 class="normal-logo">DemandTech</h2></a>'+
                    '</div>'+
                    '<div class="offcanvas-text">'+
                        '<!-- <p>We denounce with righteous indig nation in and dislike men who are so beguiled and to demo realized, that they data forest see best business consulting wordpress theme 2021.</p> -->'+
                    '</div>'+
                    '<div class="media-img">'+
                        '<img src="assets/images/off2.jpg" alt="Images">'+
                    '</div>'+
                    '<div class="canvas-contact">'+
                        '<div class="address-area">'+
                            '<div class="address-list">'+
                                '<div class="info-icon">'+
                                    '<i class="flaticon-location"></i>'+
                                '</div>'+
                                '<div class="info-content">'+
                                    '<h4 class="title">Address</h4>'+
                                    '<em>Business Bay, Dubai, UAE</em>'+
                                '</div>'+
                            '</div>'+
                            '<div class="address-list">'+
                                '<div class="info-icon">'+
                                    '<i class="flaticon-email"></i>'+
                                '</div>'+
                                '<div class="info-content">'+
                                    '<h4 class="title">Email</h4>'+
                                    '<em><a href="mailto:contact@demandtech.com">contact@demandtech.com</a></em>'+
                                '</div>'+
                            '</div>'+
                            '<!-- <div class="address-list">'+
                                '<div class="info-icon">'+
                                    '<i class="flaticon-call"></i>'+
                                '</div>'+
                                '<div class="info-content">'+
                                    '<h4 class="title">Phone</h4>'+
                                    '<em>+019988772</em>'+
                                '</div>'+
                            '</div> -->'+
                        '</div>'+
                        '<ul class="social">'+
                            '<li><a href="#"><i class="fa fa-facebook"></i></a></li>'+
                            '<li><a href="#"><i class="fa fa-twitter"></i></a></li>'+
                            '<li><a href="#"><i class="fa fa-linkedin"></i></a></li>'+
                            '<li><a href="#"><i class="fa fa-instagram"></i></a></li>'+
                        '</ul>'+
                    '</div>'+
                '</nav>'+
                '<!-- Canvas Menu end -->'+

                '<!-- Canvas Mobile Menu start -->'+
                '<nav class="right_menu_togle mobile-navbar-menu" id="mobile-navbar-menu">'+
                    '<div class="close-btn">'+

                       ' <a id="nav-close2" class="nav-close">'+
                            
                            '<div class="line">'+
                                '<span class="line1"></span>'+
                                '<span class="line2"></span>'+
                            '</div>'+
                        '</a>'+
                    '</div>'+
                    '<ul class="nav-menu">'+
                        '<li class="menu-item-has-children current-menu-item">'+
                            '<a href="index.html">Home</a>'+
                            
                        '</li>'+
                        '<li class="menu-item-has-children">'+
                            '<a href="#">Whitepapers</a>'+
                            
                        '</li>'+
                        '<li class="menu-item-has-children">'+
                            '<a href="#">Reports</a>'+
                            
                        '</li>'+
                        '<li class="menu-item-has-children">'+
                            '<a href="#">Webinars</a>'+
                        '</li>'+
                    
                    '</ul>'+
                    '<!-- //.nav-menu -->'+
                    '<div class="canvas-contact">'+
                        '<div class="address-area">'+
                            '<div class="address-list">'+
                                '<div class="info-icon">'+
                                    '<i class="flaticon-location"></i>'+
                                '</div>'+
                                '<div class="info-content">'+
                                    '<h4 class="title">Address</h4>'+
                                    '<em>Business Bay, Dubai, UAE</em>'+
                                '</div>'+
                            '</div>'+
                            '<div class="address-list">'+
                                '<div class="info-icon">'+
                                    '<i class="flaticon-email"></i>'+
                                '</div>'+
                                '<div class="info-content">'+
                                    '<h4 class="title">Email</h4>'+
                                    '<em><a href="mailto:contact@demandtech.com">contact@demandtech.com</a></em>'+
                                '</div>'+
                            '</div>'+
                            '<!-- <div class="address-list">'+
                                '<div class="info-icon">'+
                                    '<i class="flaticon-call"></i>'+
                                '</div>'+
                                '<div class="info-content">'+
                                    '<h4 class="title">Phone</h4>'+
                                    '<em>+019988772</em>'+
                                '</div>'+
                            '</div> -->'+
                        '</div>'+
                    '</div>'+
                '</nav>'+
                '<!-- Canvas Menu end -->'+
            '</header>'+

    '<header>'
}

function MasterFooter(){
    var dynamicfooter = document.getElementById("dynamicfooter");
    dynamicfooter.innerHTML = "<footer>"+

    '<footer>'
}