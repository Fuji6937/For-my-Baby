const intro = document.getElementById("intro");
const heartScene = document.getElementById("heartScene");
const button = document.getElementById("startButton");
const loveScene = document.getElementById("loveScene");
const bouquetScene = document.getElementById("bouquetScene");
const letterScene = document.getElementById("letterScene");
button.addEventListener("click", () => {

    intro.classList.remove("active");

    heartScene.classList.add("active");

    startHeart();


    // Heart → Love Scene
    setTimeout(()=>{

        heartScene.classList.remove("active");

        loveScene.classList.add("active");

    },8000);



    // Love Scene → Bouquet
    setTimeout(()=>{

        loveScene.classList.remove("active");

        bouquetScene.classList.add("active");

    },14000);



    // Bouquet → Letter
setTimeout(()=>{

    bouquetScene.classList.remove("active");

    letterScene.classList.add("active");

    setTimeout(()=>{

        typeLetter();

    },1000);


},23000);


});

const stars = document.getElementById("stars");

for(let i = 0; i < 150; i++){

    const star = document.createElement("div");

    star.classList.add("star");

    star.style.left = Math.random() * 100 + "%";

    star.style.top = Math.random() * 100 + "%";

    star.style.animationDelay = Math.random() * 2 + "s";

    stars.appendChild(star);

}
function changeScene(current, next){

    current.classList.remove("active");

    setTimeout(()=>{

        next.classList.add("active");

    },1000);

}
const letterText = `
The day I first met you was never just an ordinary day for me.

At that time, I was carrying so much inside my heart. I was fighting battles silently, keeping everything hidden, and slowly losing myself in the weight of it all.

Then you came into my life like a sudden breeze after a storm — bringing a kind of peace I didn't know I needed.

You are that peace to me.

I still can't believe how sharing music codes turned into sharing our dreams, our stories, our fears, and every little piece of our lives.

You are the most amazing woman I have ever met, and I proudly say that you are my girlfriend.

I am truly grateful to have you in my life, my baby Joanna.

I love you truly, deeply, and endlessly with all my heart and soul.

I wish I was there beside you to show you how much I love you.

I want to make everything happen for us, my babyyyy.

And I pray that in every lifetime, I would still find my way back to you.

I hope you love this small present from me 💙

I LOVE YOU MY JOANNA ❤️
`;

let index = 0;


function typeLetter(){

    if(index < letterText.length){

        document.getElementById("typedLetter").innerHTML += 
        letterText.charAt(index);

        index++;

        setTimeout(typeLetter,35);

    }

}
alert("script loaded");
