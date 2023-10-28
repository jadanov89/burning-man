document.addEventListener("DOMContentLoaded",function(){let e;let t=document.querySelector(".bookButton"),o=()=>{e=basicLightbox.create(`
            <div class="modal">
                <p>A custom modal that has been styled independently. It's not part of basicLightbox, but perfectly shows its flexibility.</p>
                <input placeholder="Type something">
                <a id="closeModalButton">Close</a>
            </div>
        `,{onShow:e=>{let t=e.element().querySelector("#closeModalButton");t.addEventListener("click",()=>e.close()),document.addEventListener("keydown",n)},onClose:()=>{document.removeEventListener("keydown",n)}})},n=t=>{"Escape"===t.key&&e.close()};t.addEventListener("click",()=>{o(),e.show()})});//# sourceMappingURL=index.9f560a91.js.map

//# sourceMappingURL=index.9f560a91.js.map
