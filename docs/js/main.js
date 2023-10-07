(function () {

    document.addEventListener('click', burgerInit)

    function burgerInit(e) {
        const burgerIcon = e.target.closest('.burger-icon')
        const burgerNavLink = e.target.closest('.nav__link')

        if (!burgerIcon && !burgerNavLink) return
        if (document.documentElement.clientWidth > 900) return

        if (!document.body.classList.contains('body--opened-menu')) {
            document.body.classList.add('body--opened-menu')
        } else {
            document.body.classList.remove('body--opened-menu')
        }
    }


    const modal = document.querySelector('.modal')
    const button = document.querySelector('.about__img-button')

    button.addEventListener('click', openModal)
    modal.addEventListener('click', closeModal)

    function openModal(a) {
        a.preventDefault()
        document.body.classList.toggle('body--opened-modal')
    }

    function closeModal(a) {
        a.preventDefault()
    
    const target = a.target
    if (target.closest('.modal__cancel') || target.classList.contains('modal')) {
        document.body.classList.remove('body--opened-modal')
    }

}







})()


