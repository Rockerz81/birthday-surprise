// Initialize Swiper
const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: false,
    grabCursor: true
});


// Start the site when popup button is clicked
function startSite() {

    // Hide popup
    const popup = document.getElementById("popup");
    if(popup){
        popup.style.display = "none";
    }

    // Play music
    const music = document.getElementById("music");
    if(music){
        music.play().catch(()=>{});
    }

    startHearts();
}



// Floating hearts animation
function startHearts(){

    const heartContainer = document.getElementById("hearts");

    if(!heartContainer) return;

    setInterval(()=>{

        const heart = document.createElement("div");

        heart.className = "heart";
        heart.innerHTML = "❤️";

        heart.style.left = Math.random()*100 + "vw";
        heart.style.fontSize = (20 + Math.random()*30) + "px";

        heartContainer.appendChild(heart);

        setTimeout(()=>{
            heart.remove();
        },6000);

    },500);
}



// Confetti celebration
function celebrate(){

    if(typeof confetti !== "function"){
        console.error("Confetti library not loaded");
        return;
    }

    let duration = 3 * 1000;
    let end = Date.now() + duration;

    (function frame() {

        confetti({
            particleCount: 6,
            angle: 60,
            spread: 60,
            origin: { x: 0 }
        });

        confetti({
            particleCount: 6,
            angle: 120,
            spread: 60,
            origin: { x: 1 }
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }

    }());
}
