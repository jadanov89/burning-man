document.addEventListener("DOMContentLoaded",function(){let e;let t=document.querySelector(".bookButton"),o=()=>{e=basicLightbox.create(`
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
        `,{onShow:e=>{let t=e.element().querySelector(".closeModalButton");t.addEventListener("click",()=>e.close()),document.addEventListener("keydown",n)},onClose:()=>{document.removeEventListener("keydown",n)}})},n=t=>{"Escape"===t.key&&e.close()};t.addEventListener("click",()=>{o(),e.show()})});//# sourceMappingURL=index.378d8116.js.map

//# sourceMappingURL=index.378d8116.js.map
