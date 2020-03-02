document.addEventListener('DOMContentLoaded', main)

function main() {
    const hamburger = document.querySelector('.hamburger');
    const menu = document.querySelector('.menu');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        menu.classList.toggle('active');
    });

    function initLink(element) {
        const target = element.getAttribute('href');
        const targetElement = document.querySelector(target)

        function scrollToTarget(e) {
            e.preventDefault();
            const heightNavbar = 70;
            const box = targetElement.getBoundingClientRect()
            hamburger.classList.remove('active');
            menu.classList.remove('active')
            window.scroll({
                top: window.scrollY + box.top - heightNavbar,
                behavior: 'smooth'
            })
        }

        element.addEventListener('click', scrollToTarget)
    }

    document.querySelectorAll('.list-link')
        .forEach(initLink)
}

//arrow
document.addEventListener('scroll', () => {
    const arrow = document.querySelector('.arrow')

    if (window.scrollY > 10) {
        arrow.classList.add('active')
    } else {
        arrow.classList.remove('active')
    }

    arrow.addEventListener('click', (e) => {
        e.preventDefault();
        window.scroll({
            top: 0,
            behavior: 'smooth'
        })
    })
})