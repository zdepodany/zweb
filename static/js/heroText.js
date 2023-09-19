function handleViewportWidth() {
    let desktopText = document.querySelector("#desktopHeroTxt");
    let mobileText = document.querySelector("#mobileHeroTxt");

    let viewportWidth = window.innerWidth;
    const minWidth = 479;

    if (viewportWidth >= minWidth) {
        desktopText.classList.remove("hidden");
        desktopText.classList.add("shown");
        mobileText.classList.remove("shown");
        mobileText.classList.add("hidden");
    } else {
        mobileText.classList.remove("hidden");
        mobileText.classList.add("shown");
        desktopText.classList.remove("shown");
        desktopText.classList.add("hidden");
    }
}

window.addEventListener("load", handleViewportWidth);
window.addEventListener("resize", handleViewportWidth);