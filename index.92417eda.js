document.addEventListener("DOMContentLoaded",function(){let e;let t=document.querySelector(".bookButton"),o=()=>{e=basicLightbox.create(`
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
        `,{onShow:e=>{let t=e.element().querySelector(".closeModalButton");t.addEventListener("click",()=>e.close()),document.addEventListener("keydown",n)},onClose:()=>{document.removeEventListener("keydown",n)}})},n=t=>{"Escape"===t.key&&e.close()};t.addEventListener("click",()=>{o(),e.show()})});//# sourceMappingURL=index.92417eda.js.map

//# sourceMappingURL=index.92417eda.js.map
