function openModal (){
    const modal = document.querySelector(".modal");
    modal.style.top = `${window.pageYOffset}px`;
    modal.classList.remove('hidden')
    modal.classList.add('modal--animated');
    setTimeout(()=>{
        modal.classList.add('hidden');
        modal.classList.remove('modal--animated')
    },1000);
}

document.forms.propertyForm.addEventListener("submit",()=>openModal());
