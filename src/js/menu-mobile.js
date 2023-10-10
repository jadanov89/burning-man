(() => {
    const refs = {
        openModalBtn: document.querySelector('[data-mobile-open]'),
        closeModalBtn: document.querySelector('[data-mobile-close]'),
        modal: document.querySelector('[data-menu]'),
        burgerIcon: document.querySelector('#icon-burger'),
        crossIcon: document.querySelector('#icon-cross'),
    };

    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);

    function toggleModal() {
        refs.modal.classList.toggle('is-open');
        const isModalOpen = refs.modal.classList.contains('is-open');

        if (isModalOpen) {
            refs.burgerIcon.style.display = 'none';
            refs.crossIcon.style.display = 'block';
        } else {
            refs.burgerIcon.style.display = 'block';
            refs.crossIcon.style.display = 'none';
        }
    }
})();



// const bookButton = document.querySelector(".bookButton");

// bookButton.addEventListener("click", function() {

//     this.disabled = true;

//     this.disabled = false;
    
// });




