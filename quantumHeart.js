// ==========================================
// QUANTUM HEART ENGINE
// Part 1 - Canvas Setup
// ==========================================

const canvas = document.getElementById("heartCanvas");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

resizeCanvas();
window.addEventListener("resize", resizeCanvas);

// ==========================================
// PARTICLES
// ==========================================

const particles = [];
let reveal = 9999;
let trailProgress = 0;
let trailPoints = [];
let pulse = 0;

class Particle {

    constructor(x, y) {

        this.baseX = x;
        this.baseY = y;

        this.x = x;
        this.y = y;

        this.size = Math.random() * 2 + 1;

        this.angle = Math.random() * Math.PI * 2;

        this.speed = Math.random() * 0.03 + 0.01;

        this.opacity = Math.random() * 0.6 + 0.4;

    }

update() {

    this.angle += this.speed;

    let beat = Math.sin(pulse) * 5;

    this.x = this.baseX + Math.cos(this.angle) * (3 + beat);

    this.y = this.baseY + Math.sin(this.angle) * (3 + beat);

}

    draw() {

        ctx.beginPath();

        ctx.arc(
            this.x,
            this.y,
            this.size,
            0,
            Math.PI * 2
        );

        ctx.fillStyle = `rgba(255,70,120,${this.opacity})`;

        ctx.shadowColor = "#ff4d8d";
        ctx.shadowBlur = 12;

        ctx.fill();

    }

}
// ==========================================
// CREATE HEART SHAPE
// ==========================================

function createHeart() {

    particles.length = 0;
    trailPoints = [];
    for (let t = 0; t < Math.PI * 2; t += 0.02) {

        const x = 16 * Math.pow(Math.sin(t), 3);

        const y =
            -(13 * Math.cos(t)
            - 5 * Math.cos(2 * t)
            - 2 * Math.cos(3 * t)
            - Math.cos(4 * t));
            trailPoints.push({
    x: canvas.width / 2 + x * 18,
    y: canvas.height / 2 + y * 18
});

        particles.push(
            new Particle(
                canvas.width / 2 + x * 18,
                canvas.height / 2 + y * 18
            )
        );

    }


}
function drawTrail(){

    ctx.beginPath();

    let limit = Math.floor(trailProgress);

    for(let i = 0; i < limit; i++){

        ctx.lineTo(
            trailPoints[i].x,
            trailPoints[i].y
        );

    }

    ctx.strokeStyle = "#ff4d8d";

    ctx.lineWidth = 3;

    ctx.shadowColor = "#ff4d8d";

    ctx.shadowBlur = 20;

    ctx.stroke();


    if(trailProgress < trailPoints.length){

        trailProgress += 2;

    }

}

// ==========================================
// ANIMATION LOOP
// ==========================================

function animate() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawTrail();
    pulse += 0.05;

for(let i = 0; i < reveal; i++){

    particles[i].update();
    particles[i].draw();

}

if(reveal < particles.length){

    reveal += 2;

}

    requestAnimationFrame(animate);

}


// ==========================================
// START HEART FUNCTION
// ==========================================

function startHeart(){

    reveal = 0;
    trailProgress = 0;
    pulse = 0;

    createHeart();

    animate();

}