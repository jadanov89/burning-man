document.addEventListener('DOMContentLoaded', function () {
    const btnModal = document.querySelector('.bookButton');
    let instance;

    const createModal = () => {
        instance = basicLightbox.create(`
        <div class="modal"> 
            <button type="button" class="closeModalButton"></button> 
            <h1>Contact Us</h1>    
            <form id="myForm">
            <input type="name" name="name" placeholder="Your Name" />
            <input type="phone" name="phone" placeholder="Your Phone" />
            <input type="email" name="email"  placeholder="Email Address" />
            <textarea name="text" placeholder="Type your Message"></textarea>
            <button type="submit">Send</button>
        </form>
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
