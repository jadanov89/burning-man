document.addEventListener("DOMContentLoaded",function(){let e;let t=document.querySelector(".bookButton"),l=()=>{e=basicLightbox.create(`
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
        `,{onShow:e=>{let t=e.element().querySelector(".closeModalButton");t.addEventListener("click",()=>e.close()),document.addEventListener("keydown",a)},onClose:()=>{document.removeEventListener("keydown",a)}})},a=t=>{"Escape"===t.key&&e.close()};t.addEventListener("click",()=>{l(),e.show()})});//# sourceMappingURL=index.02b227f1.js.map

//# sourceMappingURL=index.02b227f1.js.map
