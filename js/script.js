{
    const welcome = () => {
        console.log("Hello everyone");
        }

    const toggleBackground = () => {
        const body = document.querySelector(".body");
        const themeName = document.querySelector(".js-themeName");

        body.classList.toggle("body--blue");
        themeName.innerText = body.classList.contains("body--blue") ? "różowe" : "niebieskie";
    }
    
    const init = () => {
        const header__button = document.querySelector(".js-changeBackgroundButton");
        header__button.addEventListener("click", toggleBackground);

        welcome (); 
    };

    init ();
}