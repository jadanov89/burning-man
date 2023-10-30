const modalSvg = [
    {
      close:
        `<symbol id="icon-close" viewBox="0 0 32 32">
        <path d="M32 3.223l-3.223-3.223-12.777 12.777-12.777-12.777-3.223 3.223 12.777 12.777-12.777 12.777 3.223 3.223 12.777-12.777 12.777 12.777 3.223-3.223-12.777-12.777 12.777-12.777z"></path>
        </symbol>`,
      name:
        `<symbol id="icon_name" viewBox="0 0 32 32">
        <path d="M16 16c2.946 0 5.333-2.388 5.333-5.333s-2.388-5.333-5.333-5.333v0c-2.946 0-5.333 2.388-5.333 5.333s2.388 5.333 5.333 5.333v0zM16 18.667c-3.561 0-10.667 1.787-10.667 5.333v1.333c0 0.732 0.599 1.333 1.333 1.333h18.667c0.732 0 1.333-0.601 1.333-1.333v-1.333c0-3.547-7.108-5.333-10.667-5.333z"></path>
        </symbol>`,
      email:
        `<symbol id="icon_email" viewBox="0 0 32 32">
        <path d="M26.667 5.333h-21.333c-1.467 0-2.652 1.2-2.652 2.667l-0.014 16c0 1.467 1.2 2.667 2.667 2.667h21.333c1.467 0 2.667-1.2 2.667-2.667v-16c0-1.467-1.2-2.667-2.667-2.667zM26.133 11.001l-9.426 5.892c-0.201 0.126-0.446 0.2-0.708 0.2s-0.506-0.075-0.713-0.204l0.006 0.003-9.426-5.892c-0.336-0.201-0.557-0.562-0.557-0.975 0-0.625 0.507-1.132 1.132-1.132 0.233 0 0.449 0.070 0.629 0.19l-0.004-0.003 8.933 5.586 8.933-5.588c0.176-0.118 0.392-0.188 0.624-0.188 0.625 0 1.132 0.507 1.132 1.132 0 0.413-0.221 0.775-0.552 0.972l-0.005 0.003z"></path>
        </symbol>`, 
      telefon:
        `<symbol id="icon_telefon" viewBox="0 0 32 32">
        <path d="M24.882 19.774l-3.268-0.373c-0.090-0.011-0.194-0.018-0.3-0.018-0.707 0-1.347 0.287-1.81 0.75l-2.368 2.368c-3.669-1.894-6.585-4.81-8.427-8.372l-0.051-0.108 2.382-2.377c0.463-0.463 0.75-1.103 0.75-1.81 0-0.106-0.006-0.21-0.019-0.312l0.001 0.012-0.373-3.243c-0.155-1.287-1.24-2.276-2.557-2.276-0.001 0-0.002 0-0.003 0h-2.226c-1.454 0-2.663 1.209-2.574 2.661 0.683 10.987 9.47 19.762 20.444 20.444 1.452 0.089 2.663-1.12 2.663-2.574v-2.226c0-0.004 0-0.008 0-0.012 0-1.308-0.985-2.386-2.253-2.532l-0.012-0.001z"></path>
        </symbol>`     
    },
];


document.addEventListener('DOMContentLoaded', function () {
    const btnModal = document.querySelector('.bookButton');
    let instance;

    const createModal = () => {
        instance = basicLightbox.create(`
            <div class="modal"> 
                <button type="button" class="closeModalButton">close</button>     
                <form class="form" action="">
                    <p class="field required half">
                    <label class="label required" for="name">Name</label>
                    <input class="text-input" type="text" id="name" name="name" required="true">
                    </p>
                    <p class="field required half">
                    <label class="label" for="email">E-mail</label>
                    <input class="text-input" type="email" id="email" name="email" required="true">
                    </p>
                    <p class="field">
                    <label class="label" for="message">Message</label>
                    <textarea class="textarea" id="message" cols="50" name="message" rows="4" required="true"></textarea>
                    </p>
                    <p class="field">
                    <input class="button" type="submit" value="Send message">
                    </p>
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
