(function () {

    // Бургер
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

    // модалка
    const modal = document.querySelector('.modal')
    const button = document.querySelector('.about__img-button')

    button.addEventListener('click', openModal)
    modal.addEventListener('click', closeModal)

    function openModal(e) {
        e.preventDefault()
        document.body.classList.toggle('body--opened-modal')
    }

    function closeModal(e) {
        e.preventDefault()

        const target = e.target
        if (target.closest('.modal__cancel') || target.classList.contains('modal')) {
            document.body.classList.remove('body--opened-modal')
        }

    }


    // табы

    const tabControls = document.querySelector('.tab-controls')

    tabControls.addEventListener('click', toggleTab)

    function toggleTab(e) {

        const tabControls = e.target.closest('.tab-controls__link')

        if (!tabControls) return

        e.preventDefault()

        if (tabControls.classList.contains('tab-controls__link--active')) return


        const tabContentID = tabControls.getAttribute('href')
        const tabContent = document.querySelector(tabContentID)
        const activeControl = document.querySelector('.tab-controls__link--active')
        const activeContent =document.querySelector('.tab-content--show')

        activeControl.classList.remove('tab-controls__link--active')
        activeContent.classList.remove('tab-content--show')
        
        tabControls.classList.add('tab-controls__link--active')
        tabContent.classList.add('tab-content--show')



    }


})()

