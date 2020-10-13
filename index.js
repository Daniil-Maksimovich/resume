window.onload = () => {

    //hiding preloader

    document.querySelector('.loader-container').style.opacity = '0';
    setTimeout(() => {
        document.querySelector('.loader-container').style.display = 'none';
    }, 300);

    //AOS initialization
    
    AOS.init();

    // prevention links`s default behavior

    const preventLinks = document.querySelectorAll('.prevent');

    preventLinks.forEach( (elem) => {
        elem.addEventListener('click', (e) => {
            e.preventDefault();
        })
    });

    //burger menu collaption

    const burgerMenu = document.querySelector('.burger-menu');
    const menuButton = document.querySelector('.burger-menu__button');
    const menuOverlay = document.querySelector('.burger-menu__overlay');

    const collapseMenu = () => {
        burgerMenu.classList.toggle("burger-menu_active");
    }

    const hideMenu = () => {
        burgerMenu.classList.remove("burger-menu_active");
    }

    menuButton.addEventListener('click', collapseMenu);
    menuOverlay.addEventListener('click', hideMenu);

    // scrolling to sections

    const navLinks = document.querySelectorAll('.burger-menu__nav a');
    const sections = document.querySelectorAll('section');
    const sectionsArray = Array.from(sections);

    navLinks.forEach(elem => {
        elem.addEventListener('click', () => {
            console.dir(elem)

            const machedSection = sectionsArray.filter(item => {
                const patt = item.className;
                if (elem.href.match(patt)) {
                    return item
                }
            });

            const sectionCoord = machedSection[0].getBoundingClientRect();

            const body = document.body;
            const docEl = document.documentElement;

            const scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;

            const clientTop = docEl.clientTop || body.clientTop || 0;

            const top = sectionCoord.top + scrollTop - clientTop;

            window.scrollTo({
                top: top,
                behavior: 'smooth'
            })
            hideMenu();

        });
    });

    //scrolling to the top

    const scrollingBtn = document.querySelector('.scroll-button img');
    window.addEventListener('scroll', () => {
        if(this.pageYOffset >= 300 ){
            scrollingBtn.className = 'active';
        } else{
            scrollingBtn.className = '';
        }
    })
    scrollingBtn.addEventListener( 'click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    });

}