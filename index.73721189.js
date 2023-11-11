document.addEventListener("DOMContentLoaded",function(){let e;let t=document.querySelector(".bookButton"),n=()=>{e=basicLightbox.create(`
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
                `,{onShow:e=>{let t=e.element().querySelector(".closeModalButton");t.addEventListener("click",()=>e.close()),document.addEventListener("keydown",o);// Додаємо обробник для кнопки "Send"
let n=e.element().querySelector("#sendButton");n.addEventListener("click",function(){$("#myForm").validate({rules:{name:{required:!0,minlength:2},phone:{required:!0},email:{required:!0,email:!0}},messages:{name:{required:"Пожалуйста, введите свое имя",minlength:"Введите {0} символа!"},phone:{required:"Пожалуйста, введите свой номер телефона"},email:{required:"Пожалуйста, введите свою почту",email:"Неправильно введен адрес почты"}},submitHandler:function(e){// Цей код буде викликано при успішній валідації
// Ви можете додати тут код для відправлення форми
alert("Форма успішно валідована і готова до відправлення!")},errorPlacement:function(e,t){// Встановлення місця відображення повідомлення про помилку
e.insertBefore(t)}}),$("input[name=phone]").inputmask("(999) 999-9999")})},onClose:()=>{document.removeEventListener("keydown",o)}})},o=t=>{"Escape"===t.key&&e.close()};t.addEventListener("click",()=>{n(),e.show()}),// Додамо валідацію форми після її створення
n()});//# sourceMappingURL=index.73721189.js.map

//# sourceMappingURL=index.73721189.js.map
