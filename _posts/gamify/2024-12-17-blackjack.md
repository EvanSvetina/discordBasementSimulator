---
layout: post
title: Blackjack
permalink: /gamify/blackjack
---

{% raw %}
<head>
    <title>Blackjack Game</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            background-color: #121212;
            color: white;
        }
        .container {
            width: 40%;
            margin: auto;
            background-color: #222;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0px 0px 10px #fff;
        }
        button {
            background-color: black;
            color: white;
            border: 1px solid white;
            padding: 10px;
            margin: 5px;
            cursor: pointer;
        }
        button:disabled {
            background-color: grey;
            cursor: not-allowed;
        }
        .error {
            color: red;
            font-weight: bold;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Blackjack Game</h1>
        <label for="betAmount">Bet Amount:</label>
        <input type="range" id="betAmount" min="1" max="1000" value="100" oninput="updateBetDisplay()">
        <span id="betValue">$100</span>
        <button id="startGame">Start Game</button>
        <button id="hit" disabled>Hit</button>
        <button id="stand" disabled>Stand</button>
        <button id="exit">Exit</button>
        <h2>Dealer's Hand</h2>
        <div id="dealerHand"></div>
        <h2>Your Hand</h2>
        <div id="playerHand"></div>
        <p id="gameStatus" class="error"></p>
        <h2>Balance: <span id="balance">$1000</span></h2>
    </div>
    <script>
        const API_URL = "http://localhost:8085/api/blackjack";
        let balance = 1000;
        function updateBetDisplay() {
            document.getElementById("betValue").innerText = `$${document.getElementById("betAmount").value}`;
        }
        document.getElementById("startGame").addEventListener("click", async function () {
            try {
                const bet = parseInt(document.getElementById("betAmount").value);
                if (bet > balance) {
                    document.getElementById("gameStatus").innerText = "Insufficient balance!";
                    return;
                }
                const response = await fetch(`${API_URL}/start?bet=${bet}`, { method: "POST" });
                if (!response.ok) throw new Error("Failed to start game.");
                const data = await response.json();
                updateUI(data, bet);
                document.getElementById("hit").disabled = false;
                document.getElementById("stand").disabled = false;
            } catch (error) {
                document.getElementById("gameStatus").innerText = error.message;
            }
        });
        document.getElementById("hit").addEventListener("click", async function () {
            try {
                const response = await fetch(`${API_URL}/hit`, { method: "POST" });
                if (!response.ok) throw new Error("Failed to hit.");
                const data = await response.json();
                updateUI(data);
            } catch (error) {
                document.getElementById("gameStatus").innerText = error.message;
            }
        });
        document.getElementById("stand").addEventListener("click", async function () {
            try {
                const response = await fetch(`${API_URL}/stand`, { method: "POST" });
                if (!response.ok) throw new Error("Failed to stand.");
                const data = await response.json();
                updateUI(data);
                document.getElementById("hit").disabled = true;
                document.getElementById("stand").disabled = true;
                adjustBalance(data);
            } catch (error) {
                document.getElementById("gameStatus").innerText = error.message;
            }
        });
        document.getElementById("exit").addEventListener("click", function () {
            window.location.reload();
        });
        function updateUI(data, bet = 0) {
            document.getElementById("dealerHand").innerText = `Dealer: ${data.dealerHand.join(", ")}`;
            document.getElementById("playerHand").innerText = `You: ${data.playerHand.join(", ")}`;
            document.getElementById("gameStatus").innerText = data.message || "";
            if (bet > 0) {
                balance -= bet;
                document.getElementById("balance").innerText = `$${balance}`;
            }
        }
        function adjustBalance(data) {
            let bet = parseInt(document.getElementById("betAmount").value);
            if (data.message.includes("You win")) {
                balance += bet * 2;
            } else if (data.message.includes("Push")) {
                balance += bet;
            }
            document.getElementById("balance").innerText = `$${balance}`;
        }
    </script>
</body>
{% endraw %}
