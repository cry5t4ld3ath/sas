const mediaQueries = [
                    window.matchMedia('(0px <= width <= 450px)'),
                    window.matchMedia('(451px <= width <= 850px)'),
                    window.matchMedia('(min-width: 800px)')
];




function iconNavBarHeader(event) {
    const imgIconNavBar = document.getElementById('iconNavBar');
    const navBar = document.querySelector('#navBarHeader');
    const tagA = navBar.querySelectorAll('a');
    
    //change icon header navbar
    if (imgIconNavBar.src.match('img/navicon.svg')) {

        imgIconNavBar.src = 'img/naviconclose.svg';

        mediaQueries[0].matches
        ? (navBar.style.height = '200px'
          ,navBar.style.width = '130px'
          ,navBar.style.top = '61px'
          ,tagA.forEach(function(tag) {
          tag.style.fontSize = '1.3rem'
          }
          ))
        : mediaQueries[1].matches
        ? (navBar.style.height = '300px'
          ,navBar.style.width = '180px'
          ,navBar.style.top = '71px'
          ,tagA.forEach(function(tag) {
          tag.style.fontSize = '1.5rem'
        }
        ))
        : (navBar.style.height = '500px'
          ,navBar.style.width = '300px'
          ,navBar.style.top = '91px'
          ,tagA.forEach(function(tag) {
          tag.style.fontSize = '2.5rem'
        }
        ));

        navBar.style.transition = '1s';
    } else {
        imgIconNavBar.src = 'img/navicon.svg';
        
        navBar.style.height = '0px';
        navBar.style.transition = '1s';
    }
    //

    // Check if the click occurred outside the navigation bar
    if (event.target !== imgIconNavBar) {

        imgIconNavBar.src = 'img/navicon.svg';

        navBar.style.height = '0px';
        navBar.style.transition = '1s';
    }
};


function bottomConnectSide (event) {

    const openConnect = document.getElementById('connectspan');
    const itemConnect = document.getElementById('asideBottom');

    if (event.target === openConnect){

        if (itemConnect.style.bottom === '0px') {

            mediaQueries[0].matches
            ? (itemConnect.style.bottom = '-50px')
            :  mediaQueries[1].matches
            ? (itemConnect.style.bottom = '-70px')
            : (itemConnect.style.bottom = '-70px')
            
            itemConnect.style.transition = '1s';
        }else {

            itemConnect.style.bottom = '0px';
            itemConnect.style.transition = '.5s';
        }

    } else {  

        mediaQueries[0].matches
        ? (itemConnect.style.bottom = '-50px')
        :  mediaQueries[1].matches
        ? (itemConnect.style.bottom = '-70px')
        : (itemConnect.style.bottom = '-70px')

        itemConnect.style.transition = '1s';
    }

};



function handleScroll() {

    const scrollPosition = window.scrollY;
    const navBarHeader = document.getElementById('navBarHeader');

    if (scrollPosition > navBarHeader.offsetWidth) {
        iconNavBarHeader(event);
        bottomConnectSide(event);
    }

}

//listener media queries and scroll.
document.addEventListener('click', event => {
    iconNavBarHeader(event);
    bottomConnectSide(event);
});

window.addEventListener('scroll', handleScroll);


mediaQueries.forEach(mediaQuery => {
    mediaQuery.addListener(() => {
        iconNavBarHeader(event);
        bottomConnectSide(event);
    })
})
//listener media queries and scroll.



