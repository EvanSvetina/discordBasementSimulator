---
layout: base 
title: OUR EPIC IDEA!!!!!!!11!!1
description: Hi Tanisha <3
author: Evan Svetina, West Stefany
hide: true
menu: nav/home.html
---

<head>
<audio id="backgroundMusic" loop preload="auto" controlsList="nodownload">
  <source src="/discordBasementSimulator/assets/js/adventuregame/Albuquerq.mp3" type="audio/mpeg">
  Your browser does not support the audio element.
</audio>

<!-- Fallback player that will be hidden but can be used as backup if the main player fails -->
<div id="audioFallback" style="display: none; margin-top: 10px;">
  <button id="fallbackButton" style="background-color: orange; color: white; padding: 5px 10px; border: 2px solid white; cursor: pointer;">
    Try Alternative Player
  </button>
</div>

<script>
  document.addEventListener('DOMContentLoaded', function() {
    var audio = document.getElementById('backgroundMusic');
    var playButton = document.getElementById('playButton');
    
    // Set volume to 20% (faint background music)
    audio.volume = 0.2;
    
    // Ensure the audio is fully loaded before playing
    audio.preload = 'auto';
    
    // Fix for iOS and some browsers that may have playback issues
    audio.addEventListener('canplaythrough', function() {
      console.log('Audio can play through completely');
    });
    
    // Add click event to play button
    playButton.addEventListener('click', function() {
      // Ensure audio is at the beginning
      audio.currentTime = 0;
      
      // Try to play the audio
      audio.play().then(() => {
        console.log('Audio started playing successfully');
        playButton.style.display = 'none'; // Hide button after successful play
      }).catch(error => {
        console.error('Audio playback failed:', error);
      });
    });
    
    // Handle audio ending (in case loop attribute doesn't work in some browsers)
    audio.addEventListener('ended', function() {
      console.log('Audio ended, restarting');
      audio.currentTime = 0;
      audio.play().catch(err => console.log('Replay prevented:', err));
    });
    
    // Monitor playback to detect stopping issues
    setInterval(function() {
      if (!audio.paused && audio.currentTime > 0) {
        console.log('Current playback position:', audio.currentTime);
      }
    }, 5000); // Log every 5 seconds
    
    // Set up fallback player if needed
    var fallbackDiv = document.getElementById('audioFallback');
    var fallbackButton = document.getElementById('fallbackButton');
    
    // If main player has issues after 10 seconds, show fallback option
    setTimeout(function() {
      if (audio.paused || audio.currentTime < 5) {
        fallbackDiv.style.display = 'block';
        console.log('Main player may have issues, showing fallback option');
      }
    }, 10000);
    
    fallbackButton.addEventListener('click', function() {
      // Create an iframe with an embedded audio player as a fallback
      var iframe = document.createElement('iframe');
      iframe.width = "1";
      iframe.height = "1";
      iframe.frameBorder = "0";
      iframe.allow = "autoplay";
      iframe.src = "/discordBasementSimulator/assets/js/adventuregame/audio-player.html";
      document.body.appendChild(iframe);
      
      fallbackButton.textContent = "Alternative Player Activated";
      fallbackButton.disabled = true;
      
      // Create a recommended solution message
      var msg = document.createElement('p');
      msg.innerHTML = "If audio still doesn't play continuously, try downloading the <a href='/discordBasementSimulator/assets/js/adventuregame/Albuquerq.mp3' download>audio file</a> and playing it in a separate player while browsing.";
      fallbackDiv.appendChild(msg);
    });
  });
</script>

<style>
  h1 {
    color: rgb(0, 255, 0);
    text-shadow: 0 0 10px rgba(0, 255, 0, 0.5);
  }
  body {
    background-color: black;
    color: white;
    font-family: 'Courier New', Courier, monospace;
    text-shadow: 0 0 5px green;
    box-shadow: inset 0 0 10px rgba(0, 255, 0, 0.5);
  }
  a {
    color: green;
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
    text-shadow: 0 0 5px green;
    box-shadow: inset 0 0 10px rgba(0, 255, 0, 0.5);
    color: rgb(0, 100, 0);
  }
</style>
</head>

<h2><a href="/discordBasementSimulator/gamify/adventureGame">Link to Game</a></h2>

<body>
<h1>Tinkers</h1>
So far, we have come up with a few ideas for new features we want to implement into the game level. Here are a few of our works which are finished:
<ul>
    <li>Randomized dialogue with NPCS (where applicable)</li>
    <li><img src="randimg1.png" width="500" height="150"></li>
    <li><img src="randimg2.png" width="500" height="150"></li>
    <li><img src="randimg3.png" width="500" height="150"></li>
    <li><img src="randomDialogue.png"></li>
    <li>New HTML element containing WIP minigame (img needs to be updated)</li> 
    <li><img src="htmlelement2.png" width="500" height="400" ></li>
    <li><img src="quizElement.png"></li>
    <li>Replaced "Balance" with "Money Bucks". Earn money bucks by completing the quiz on computer 2. When the password game is finished on computer 1, that will also reward money. Earning 250 dollars allows you to escape the basement by talking to IShowGreen.</li>
    <li><img src="money1.png" width="500" height="200" ></li>
    <li><img src="money2.png" width="500" height="200" ></li>
    <li><img src="moneyAward.png" ></li>
    <li>Victory screen and win sfx, ability to restart game</li>
    <li><img src="vicScreenCode.png"></li>
    <li><img src="victoryscreen.png"></li>
</ul>
<br><br><br>
<img src="quelx.png">
<br><br><br>
<h1>The Idea:</h1><br>
<b1>
The premise is simple. The player walks into a strange, rancid basement populated by computers, Dorito crumbs, and a strange fellow known throughout the lands as IShowGreen.
IShowGreen is feverishly at work, without any breaking in his concentration as he mines crypto and rapidly types on his keyboard. The player can explore his many open devices, including a computer where they can play a BitCoin mining minigame and an open discord server where the player can talk to random people online (simulated ofc).<br>
<h2>Possible ASSETS:</h2><br>
<ul>
  <li>Basement BG DONE</li>
  <li>Animated IShowGreen DONE</li>
  <li>Computer sprites DONE</li>
  <li>Music (sneaky snitch or custom beats)</li>
  <li>Sound FX (computer games, IShowGreen talking)</li>
  <li>potential easter eggs</li>
</ul>
<h2>Progression:</h2>
<ul>
  <li>To complete the level, players must obtain at least 100 dollars in crypto to pay IShowGreen and escape the basement.</li>
  <li>One computer NPC will have computer science questions that can be answered for money.</li> 
  <!-- Fix/remove this later when we get a better idea -->
  <li>The other NPC has a crypto mining minigame where the player must create a progressively better password to shield their earnings from hungry hackers.</li>
</ul>
</b1>
<ul>
<li>Custom sprites for basement, Npcs (both computers and IShowGreen)</li>
</ul>
<img src="images/gamify/computer1.png"><br>
<img src="images/gamify/computer2.png"><br>
<img src="images/gamify/ishowgreen.png"><br>
<img src="images/gamify/basement.png"><br>

<button id="playButton" style="background-color: green; color: white; border: 2px solid white; padding: 5px 10px; margin: 10px; cursor: pointer;">
  Albuquerq.
</button>
mak
</body>