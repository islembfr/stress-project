function calculateStress() {
    let q1 = parseInt(document.querySelector("select[name='q1']").value);
    let q2 = parseInt(document.querySelector("select[name='q2']").value);
    let q3 = parseInt(document.querySelector("select[name='q3']").value);

    let score = q1 + q2 + q3;

    let result = document.getElementById("result");

    if (score <= 2) {
        result.innerHTML = "🟢 Ton niveau de stress est faible. Continue comme ça !";
        result.style.color = "green";
    } 
    else if (score <= 4) {
        result.innerHTML = "🟡 Ton niveau de stress est modéré. Fais attention et prends des pauses.";
        result.style.color = "orange";
    } 
    else {
        result.innerHTML = "🔴 Ton niveau de stress est élevé. Tu devrais te reposer et te détendre.";
        result.style.color = "red";
    }
}