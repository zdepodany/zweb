let webBtn = document.querySelector("#webBtn");
let appBtn = document.querySelector("#appBtn");
let webSection = document.querySelector("#webProcedure");
let appSection = document.querySelector("#appProcedure");

webBtn.addEventListener("click", function() {
    if (webSection.classList.contains("hidden")) {
        //Show web section
        webSection.classList.remove("hidden");
        webSection.classList.add("shown");
        //Hide app section
        appSection.classList.add("hidden");
        appSection.classList.remove("shown");
    };
});

appBtn.addEventListener("click", function() {
    if (appSection.classList.contains("hidden")) {
        //Show app section
        appSection.classList.remove("hidden");
        appSection.classList.add("shown");
        //Hide web section
        webSection.classList.add("hidden");
        webSection.classList.remove("shown");
    };
});