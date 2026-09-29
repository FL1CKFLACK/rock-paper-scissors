function play(playerChoice) {

    const choices = ["Камень", "Ножницы", "Бумага"];

    const computerChoice =
        choices[Math.floor(Math.random() * 3)];

    document.getElementById("player").textContent =
        "Вы: " + playerChoice;

    document.getElementById("computer").textContent =
        "Компьютер: " + computerChoice;

    if (playerChoice === computerChoice) {

        document.getElementById("result").textContent =
            "Ничья!";

    } else if (
        (playerChoice === "Камень" && computerChoice === "Ножницы") ||
        (playerChoice === "Ножницы" && computerChoice === "Бумага") ||
        (playerChoice === "Бумага" && computerChoice === "Камень")
    ) {

        document.getElementById("result").textContent =
            "Вы победили!";

    } else {

        document.getElementById("result").textContent =
            "Компьютер победил!";
    }
}
