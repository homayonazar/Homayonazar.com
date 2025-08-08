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



  
  const popup = document.getElementById("popup");
  const popupImg = document.getElementById("popup-img");
  const closeBtn = document.getElementById("close");

  // همه عکس‌هایی که می‌خوای کلیک‌پذیر باشن
  document.querySelectorAll(".popup-image").forEach(img => {
    img.addEventListener("click", () => {
      popup.style.display = "flex";
      popupImg.src = img.src; // همون عکس بزرگ شه
    });
  });

  // بستن پاپ‌آپ با ضربدر
  closeBtn.addEventListener("click", () => {
    popup.style.display = "none";
  });

  // بستن با کلیک بیرون از عکس
  popup.addEventListener("click", (e) => {
    if (e.target === popup) {
      popup.style.display = "none";
    }
  });

    







  ////////////////////// Modal Pic //////////
