(function () {
    "use strict"
    window.addEventListener("load", function () {
    // STICKY HEADER NAV
        window.addEventListener('scroll', function () {
            var header = document.querySelector("header");
            header.classList.toggle ('sticky', window.scrollY > 50); 
        });
    // END STICKY HEADER NAV
    // NAV LIST RESPONSIVE
    var bar = document.querySelector(".toggle .fa-bars");
    var remove = document.querySelector(".toggle .fa-remove");
    var navList = document.querySelector("nav ul");
    bar.addEventListener("click", function () {
        navList.style.display = "block"; 
        remove.style.display = "block";
        bar.style.display = "none";
    });
    remove.addEventListener("click", function () {
        navList.style.display = "none"; 
        remove.style.display = "none";
        bar.style.display = "block";
    });
    // END NAV LIST RESPONSIVE 
    // PAGE SCROLLING TOP BUTTON
    let scrollingUp = () => {
        let scrollTop = document.getElementById("myBtn");
        let scl = document.documentElement.scrollTop;
        let sclLen = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        let scrollValue = Math.round((scl * 100) / sclLen);
        if (scl>100) {
          scrollTop.style.display = "block";
        }
        else {
          scrollTop.style.display = "none";
        }
        scrollTop.addEventListener("click", () => {
          document.documentElement.scrollTop = 0;
        });
      }
      window.onscroll = scrollingUp;
      // END PAGE SCROLLING TOP BUTTON
        // ANIMATE ON SCROLL 
        AOS.init();
        // END ANIMATE ON SCROLL
        // FILTER ELEMENS ONCLICK
        const filterItem = document.querySelector(".items");
        const filterImg = document.querySelectorAll(".prj-type");
    
        window.onload = ()=>{ 
        filterItem.onclick = (selectedItem)=>{ 
            if(selectedItem.target.classList.contains("item")){ 
            filterItem.querySelector(".active").classList.remove("active"); 
            selectedItem.target.classList.add("active"); 
            let filterName = selectedItem.target.getAttribute("data-shuffle"); 
            filterImg.forEach((image) => {
                let filterImges = image.getAttribute("data-shuffle"); 
                if((filterImges == filterName) || (filterName == "all")){
                image.classList.remove("hide");
                image.classList.add("show");
                }else{
                image.classList.add("hide");
                image.classList.remove("show");
                }
            });
            }
        }
        for (let i = 0; i < filterImg.length; i++) {
            filterImg[i].setAttribute("onclick", "preview(this)"); 
        }
        }
        // END FILTER ELEMENTS ONCLICK
    
        // STATS COUNTER ONSCROLL
        let section = document.querySelector(".container");
        let stat = document.querySelectorAll(".stats .sta");
        let start = false;
        window.onscroll = function () {
            if (window.scrollY >= section.offsetTop) {
                if (!start) {
                    stat.forEach((sta) => startCount(sta));
                }
                start = true;
            }
        }
        function startCount(el) {
            let max = el.dataset.max;
            let count = setInterval(() => {
                el.textContent++;
                if (el.textContent == max) {
                    clearInterval(count);
                }
            }, 2000 / stat);  
        }; 
        // END STATS COUNTER ONSCROLL

        //  TESTIMONIAL ROTATOR 
        let count = 1;
        function contentRotator() {
        $(`#container p:nth-child(${count})`).fadeIn(2000, function () {
            if ($(this).is("#container p:last-child")) {
                setTimeout(function () {
                    $(`#container p:nth-child(${count})`).fadeOut(2000, function() {
                       count = 1;
                       contentRotator(); 
                    });  
                },5000);
            }
            else {
                setTimeout(function () {
                    $(`#container p:nth-child(${count})`).fadeOut(2000, function () {
                       count ++
                       contentRotator();  
                    });  
                }, 5000);
            }
        });
        };
        contentRotator();
        // END TESTIMONIAL ROTATOR
    });
})();