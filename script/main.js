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
