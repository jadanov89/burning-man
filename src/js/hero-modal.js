document.addEventListener('DOMContentLoaded', function () {
    const btnModal = document.querySelector('.bookButton');
    let instance;

    const createModal = () => {
        instance = basicLightbox.create(`
        <div class="modal"> 
            <button type="button" class="closeModalButton"></button> 
            <h1>Contact Us</h1>    
            <form>
            <input type="text" name="field1" placeholder="Your Name" />
            <input type="number" name="field2" placeholder="Your Phone" />
            <input type="email" name="field3" placeholder="Email Address" />
            <textarea name="field4" placeholder="Type your Message"></textarea>
            <input type="submit" value="Send" />
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
