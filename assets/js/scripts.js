/* Typing Animation */

var typed = new Typed(".typing", {
    strings: ["", "Web Developer", "Web Designer", "UI/UX Designer", "SEO Optimiser"],
    typeSpeed: 150,
    backSpeed: 60,
    loop: true
});

// Aside

const nav = document.querySelector(".nav"),  
    navList = nav.querySelectorAll("li"),
    totalNavList = navList.length,
    allSection = document.querySelectorAll(".section"), 
    totalSection = allSection.length;

for (let i = 0; i < totalNavList; i++) {
    const a = navList[i].querySelector("a");
    a.addEventListener("click", function () { 
        for (let j = 0; j < totalNavList; j++) {
            if (navList[j].querySelector("a").classList.contains("active")) {
                allSection[j].classList.contains("active");
            }
            navList[j].querySelector("a").classList.remove("active");
        }
        
        this.classList.add("active");
        showSection(this); 
        if(window.innerWidth < 1200)
        {
            asidesectionTogglerBtn();
        }
    });
}

function showSection(element) {
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.remove("active");
    }

    const target = element.getAttribute("href").split("#")[1]; 
    document.querySelector("#" + target).classList.add("active");
}
const navTogglerBtn = document.querySelector(".nav-toggler"),
    aside = document.querySelector(".aside");
    navTogglerBtn.addEventListener("click", () =>
    {
        asidesectionTogglerBtn();
    })
    function asidesectionTogglerBtn()
    {
        aside.classList.toggle("open");
        navTogglerBtn.classList.toggle("open");
        for(let i=0 ; i<totalSection;i++)
        {
            allSection[i].classList.toggle("open"); 
        }
    }


    // popup section :
    let popup = document.getElementById("popup");
    let blurBackground = document.getElementById("blurBackground");
    
    function openPopup() {
        popup.classList.add("open-popup");
        blurBackground.classList.add("show-blur");
    }
    
    function closePopup() {
        popup.classList.remove("open-popup");
        blurBackground.classList.remove("show-blur");
    }
    
    blurBackground.addEventListener("click", function(event) {
        if (event.target === blurBackground) {
            closePopup();
        }
    });
    
    
    