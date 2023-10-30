document.addEventListener('DOMContentLoaded', function () {
    const btnModal = document.querySelector('.bookButton');
    let instance;

    const createModal = () => {
        instance = basicLightbox.create(`
            <div class="modal">
                <p>A custom modal that has been styled independently. It's not part of basicLightbox, but perfectly shows its flexibility.</p>
                <input placeholder="Type something">
               
                <button type="button" class="closeModalButton">
                    <svg class="modal-back" width="20" height="20">
                        <use href="./images/icons.svg#mod-close"></use>
                    </svg>
                </button>
            </div>
        `, {
            onShow: (instance) => {
                const closeModalButton = instance.element().querySelector('.closeModalButton');
                closeModalButton.addEventListener('click', () => instance.close());
                document.addEventListener('keydown', handleEscPress);
            },
            onClose: () => {
                document.removeEventListener('keydown', handleEscPress);
            },
        });
    };

    const handleEscPress = (event) => {
        if (event.key === 'Escape') {
            instance.close();
        }
    };

    btnModal.addEventListener('click', () => {
        createModal();
        instance.show();
    });
});
