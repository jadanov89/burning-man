// document.addEventListener('DOMContentLoaded', function () {
//             const form = document.getElementById('myForm');

//             form.addEventListener('submit', function (e) {
//                 e.preventDefault();

//                 const name = form.elements['name'].value;
//                 const phone = form.elements['phone'].value;
//                 const email = form.elements['email'].value;
//                 const text = form.elements['text'].value;

//                 const errors = {};

//                 if (name.trim() === '') {
//                     errors.name = "Please enter your name.";
//                 }

//                 if (phone.trim() === '') {
//                     errors.phone = "Please enter your phone number.";
//                 }

//                 if (!validator.isEmail(email)) {
//                     errors.email = "Invalid email address.";
//                 }

//                 if (text.trim() === '') {
//                     errors.text = "Please enter your message.";
//                 }

//                 if (Object.keys(errors).length === 0) {
//                     alert("Form is valid. Submitting...");
//                     // Додайте код для надсилання форми на сервер тут
//                 } else {
//                     // Виведення помилок користувачу
//                     for (const field in errors) {
//                         alert(errors[field]);
//                     }
//                 }
//             });
//         });

