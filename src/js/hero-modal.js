document.addEventListener('DOMContentLoaded', function () {
    const btnModal = document.querySelector('.bookButton');
    let instance;
        
        const createModal = () => {
            instance = basicLightbox.create(`
                <div class="modal"> 
                    <button type="button" class="closeModalButton"></button> 
                    <h1>Contact Us</h1>    
                    <form id="myForm">
                        <input type="text" name="name" placeholder="Your Name" />
                        <input type="tel" name="phone" class="tel" placeholder="Your Phone" />
                        <input type="email" name="email" placeholder="Email Address" />
                        <textarea name="text" placeholder="Type your Message"></textarea>
                        <button type="submit" id="sendButton">Send</button>
                    </form>
                </div>
                `, {
                    onShow: (instance) => {
                        const closeModalButton = instance.element().querySelector('.closeModalButton');
                        closeModalButton.addEventListener('click', () => instance.close());
                        document.addEventListener('keydown', handleEscPress);
        
                        // Додаємо обробник для кнопки "Send"
                        const sendButton = instance.element().querySelector('#sendButton');
                        sendButton.addEventListener('click', function () {
                            validateForms('#myForm');
                        });
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
        
            // Додамо валідацію форми після її створення
            createModal();
        });

function validateForms(form) {
    $(form).validate({
        rules: {
            name: {
                required: true,
                minlength: 2
            },
            phone: {required: true},
                email: {
                    required: true,
                    email: true
                }
            },
            messages: {
                name: {
                    required: "Пожалуйста, введите свое имя",
                    minlength: "Введите {0} символа!"
                },
                phone: {
                    required: "Пожалуйста, введите свой номер телефона",
                    // digits: "Только цифры разрешены"
                },
                email: {
                    required: "Пожалуйста, введите свою почту",
                    email: "Неправильно введен адрес почты"
                }
                },
            submitHandler: function (form) {
                // Цей код буде викликано при успішній валідації
                // Ви можете додати тут код для відправлення форми
                alert('Форма успішно валідована і готова до відправлення!');
            },
            errorPlacement: function (error, element) {
                // Встановлення місця відображення повідомлення про помилку
                error.insertBefore(element);
            }
    });

    $(`input[name=phone]`).inputmask(`(999) 999-9999`);

}
