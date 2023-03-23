let screenChanged = (size) =>{
    if(size.matches){
        const heroIconsCaption = document.querySelectorAll('.hero__icons figure figcaption');
        for(figcaption of heroIconsCaption){
            figcaption.className = "title--m";
        }
    }
}
const screen = globalThis.matchMedia('(min-width:1024px)');
screen.addListener(screenChanged);
screenChanged(screen);

let mainForm = document.forms.propertyForm;
mainForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    let {address,city,state,room,price,bedrooms,bathrooms,housetype} = mainForm;
    let property = {
        address:address.value,
        city:city.value,
        state:state.value,
        room:room.value,
        price:price.value,
        bedrooms:bedrooms.value,
        bathrooms:bathrooms.value,
        housetype:housetype.value,
   }
   creatProperty(property);
});

let creatProperty = (property) =>{
    let cardContainer = document.querySelector("#card-container");
    let cardTemplate = document.querySelector(".card");
    let card = cardTemplate.cloneNode(true);

    let cardAddress = card.querySelector(".card__address");
    let cardRoom = card.querySelector(".card__room");
    let cardPrice = card.querySelector(".card__price");
    let iconBedroom = card.querySelector(".card__bedroom")
    let iconBathroom = card.querySelector(".card__bathroom")
    let iconHousetype = card.querySelector(".card__housetype")

    cardAddress.textContent = `${property['address']} ${property['city']} ${property['state']}`;
    cardRoom.textContent = `${property['room']} Room`;
    cardPrice.textContent = `$${property['price']}/Month`
    iconBedroom.textContent = property['bedrooms'];
    iconBathroom.textContent = property['bathrooms'];
    iconHousetype.textContent = property['housetype'];

    cardContainer.insertAdjacentElement("beforeend",card);
    openModal();
}

let openModal = () =>{
    const modal = document.querySelector(".modal");
    //so that the message comes down from the top of the visible screen
    modal.style.top = `${window.pageYOffset}px`;
    modal.classList.remove('hidden')
    modal.classList.add('modal--animated');
    setTimeout(()=>{
        modal.classList.add('hidden');
        modal.classList.remove('modal--animated')
    },1000);
}
