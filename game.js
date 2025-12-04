let score = 0;
let timeLeft = 30; // durée du jeu
let gameInterval;
let timerInterval;

// Charger le meilleur score sauvegardé
let bestScore = localStorage.getItem("bestScore") || 0;
document.getElementById("bestScore").textContent = bestScore;

// Fonction pour créer une bulle
function createBubble() {
    const area = document.getElementById("gameArea");
    const bubble = document.createElement("div");
    bubble.classList.add("bubble");

    bubble.style.left = Math.random() * 90 + "%";

    bubble.addEventListener("click", () => {
        score++;
        document.getElementById("score").textContent = score;
        bubble.remove();
    });

    area.appendChild(bubble);

    setTimeout(() => bubble.remove(), 4000);
}

// Lancer le jeu
function startGame() {
    score = 0;
    timeLeft = 30;
    document.getElementById("score").textContent = score;
    document.getElementById("time").textContent = timeLeft;

    // Créer des bulles toutes les 800 ms
    gameInterval = setInterval(createBubble, 800);

    // Chronomètre
    timerInterval = setInterval(() => {
        timeLeft--;
        document.getElementById("time").textContent = timeLeft;

        if (timeLeft <= 0) {
            endGame();
        }
    }, 1000);
}

// Arrêter le jeu
function endGame() {
    clearInterval(gameInterval);
    clearInterval(timerInterval);

    // Mettre à jour le meilleur score
    if (score > bestScore) {
        bestScore = score;
        localStorage.setItem("bestScore", bestScore);
        document.getElementById("bestScore").textContent = bestScore;
        alert("🎉 Nouveau record ! Score : " + score);
    } else {
        alert("Temps écoulé ! Ton score : " + score);
    }
}

// Démarrer automatiquement
startGame();