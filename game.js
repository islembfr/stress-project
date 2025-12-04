// ----- VARIABLES DU JEU -----
let score = 0;
let timeLeft = 30;
let gameInterval;
let timerInterval;

// ----- MEILLEUR SCORE -----
let bestScore = localStorage.getItem("bestScore") || 0;
document.getElementById("bestScore").textContent = bestScore;

// ----- COMMENCER LE JEU -----
document.getElementById("startButton").addEventListener("click", () => {
    const playerName = document.getElementById("playerName").value.trim();
    if (!playerName) {
        alert("Merci d'entrer ton prénom !");
        return;
    }
    // Masquer le formulaire et afficher le jeu
    document.getElementById("startGame").style.display = "none";
    document.getElementById("gameContainer").style.display = "block";

    startGame(playerName);
});

// ----- CREER LES BULLES -----
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

    // Supprimer la bulle après 4 secondes
    setTimeout(() => bubble.remove(), 4000);
}

// ----- DEMARRER LE JEU -----
function startGame(playerName) {
    score = 0;
    timeLeft = 30;
    document.getElementById("score").textContent = score;
    document.getElementById("time").textContent = timeLeft;

    gameInterval = setInterval(createBubble, 800);

    timerInterval = setInterval(() => {
        timeLeft--;
        document.getElementById("time").textContent = timeLeft;
        if (timeLeft <= 0) {
            endGame(playerName);
        }
    }, 1000);
}

// ----- FIN DU JEU -----
function endGame(playerName) {
    clearInterval(gameInterval);
    clearInterval(timerInterval);

    alert(`Temps écoulé ! ${playerName}, ton score est : ${score}`);

    // Vérifier si c'est le nouveau meilleur score
    if (score > bestScore) {
        bestScore = score;
        localStorage.setItem("bestScore", bestScore);
        document.getElementById("bestScore").textContent = bestScore;
        alert(`🎉 Nouveau record ! Score : ${score}`);
    }
}
