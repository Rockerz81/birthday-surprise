const swiper = new Swiper('.swiper', {

    direction: 'horizontal',
    loop: false

});


function startSite() {

    document.getElementById("popup").style.display = "none";

    document.getElementById("music").play();

    startHearts();

}


function startHearts() {

    setInterval(() => {

        const heart = document.createElement("div");

        heart.className = "heart";

        heart.innerHTML = "❤️";

        heart.style.left = Math.random() * 100 + "vw";

        heart.style.fontSize = (20 + Math.random() * 30) + "px";

        document.getElementById("hearts").appendChild(heart);

        setTimeout(() => heart.remove(), 6000);

    }, 500);

}


function confettiExplosion() {

confetti({
particleCount: 200,
spread: 120,
origin: { y: 0.6 }

});

}


}
