/**
 * Animation for my clipboard landing page
 */

const computer = document.querySelector('.keep_img');
const device = document.querySelector('.access_img');
const downbtn = document.querySelectorAll('.bottom_down_btns');

//


const observer = new IntersectionObserver((e) => {
    e.forEach(en => {
        if (en.isIntersecting) {
            computer.style.transform = "translateX(0%)";
            computer.style.opacity = "1";
          
        } else {
            computer.style.transform = "translateX(-15%)";
            computer.style.opacity = "0";
          
        }
    });
}, {
    threshold: 0.3
});
observer.observe(computer);


const observer2 = new IntersectionObserver((e) => {
    e.forEach(en => {
        if (en.isIntersecting) {
            downbtn.forEach(btn => {
                btn.style.transform = "translateY(0%)";
                btn.style.opacity = "1";
            });
          
        } else {
              downbtn.forEach(btn => {
                btn.style.transform = "translateY(15%)";
                btn.style.opacity = "0";
            });
        }
    });
}, {
    threshold: 0.3
});
downbtn.forEach(btn => observer2.observe(btn));

const observer3 = new IntersectionObserver((e) => {
    e.forEach(en => {
        if (en.isIntersecting) {
         
            device.style.transform = "translateX(0%)";
            device.style.opacity = "1";
        } else {
           
            device.style.transform = "translateX(-15%)";
            device.style.opacity = "0";
        }
    });
}, {
    threshold: 0.3
});
observer3.observe(device);