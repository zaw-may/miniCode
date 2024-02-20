window.addEventListener("load", () => {
    let guess = ["100% Sure", "It's impossible!", "75% Sure", "50% Sure", "25% Only", "No!!", "Possible, but not sure!"];
    
    function drawCards (question) {
        document.querySelector("#guess").style.display = "block";
        document.querySelector("#img-cards").style.display = "none";
        
        let rand = Math.random();
        let guessRand = rand * guess.length;
        let guessIndex = Math.floor(guessRand);
        let yourReading = guess[guessIndex];

        document.querySelector("#guess").textContent = yourReading;
    }

    document.querySelector("#btn-qes").onclick = ( () => {
        document.querySelector("#guess").style.display = "none";
        setTimeout( () => {
            let cardQues = prompt("Imagine your dreams. Ask the question. Feel the positive energy.");
            drawCards(cardQues);
        }, 800);
    });
});
