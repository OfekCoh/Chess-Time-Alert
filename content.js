
function playSound() {
    const audio = new Audio(chrome.runtime.getURL('sound.mp3'));
    audio.play();
}
let soundCooldown= false;  // make sure the sound doesnt play doubled

function createShadyOverlay(element) {
    // Create the overlay element
    const overlay = document.createElement('div');
    overlay.id = 'shadyOverlay';
    document.body.appendChild(overlay);

    element.style.position = 'relative';
    element.style.zIndex = '10000';

    // Add CSS for the overlay
    const style = document.createElement('style');
    style.innerHTML = `
        #shadyOverlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0); /* Initial transparent background */
            z-index: 9999; /* Ensure it is on top */
            pointer-events: none; /* Allow clicks to pass through */
            transition: background-color 4s ease-out; /* Smooth transition effect */
        }
        #shadyOverlay.active {
            background-color: rgba(0, 0, 0, 0.8); /* Shady black color */
        }
    
    `;
    document.head.appendChild(style);
    
    setTimeout(() => {
        overlay.classList.add('active');
    }, 0);
    
    // wait till game ends and clear the overlay
    const intervalId = setInterval(()=>{
        const gameEnded= document.getElementsByClassName('rating-score-rating')[1];
        if(gameEnded){
            const rating= gameEnded.textContent.trim();
            overlay.classList.remove('active');
            clearInterval(intervalId);
        }
    },2000);
  }

// Checks your clock and plays a sound if you have 10 seconds left or less
function checkClock(clockElement) {
    const time = clockElement.textContent.trim().split(':');
    const minutes = parseInt(time[0],10);
    const seconds = parseInt(time[1], 10);

    if (!soundCooldown && minutes==0 && seconds == 10) {
        playSound();
        const chosenElement = document.querySelector("#board-layout-main");
        createShadyOverlay(chosenElement);
        soundCooldown = true;
        setTimeout(() => {
            soundCooldown = false;
        }, 7000);  // 7 seconds cooldown
    } 
} 

// Waits till you get in a game to find the clock element
function waitForClockElement(callback) {
    const blackClockSelector = "#board-layout-player-bottom > div > div.clock-component.clock-bottom.clock-black.clock-player-turn > span";
    const whiteClockSelector = "#board-layout-player-bottom > div > div.clock-component.clock-bottom.clock-white.clock-player-turn > span";
    
    // Check if either clock element exists initially
    let clockElement = document.querySelector(blackClockSelector) || document.querySelector(whiteClockSelector);
    if (clockElement) {
        callback(clockElement); // Execute callback immediately if element already exists
        return;
    }
    
    // Function to check for the clock elements periodically
    const checkClockElements = () => {
        clockElement = document.querySelector(blackClockSelector) || document.querySelector(whiteClockSelector);
        if (clockElement) {
            callback(clockElement); // Call callback with the found clock element
        } else {
            setTimeout(checkClockElements, 1000); // Retry every second if elements are not found
        }
    };

    // Start checking for the clock elements
    checkClockElements();
}

// When the clock is ready it calls checkClock function for every change
waitForClockElement(function(clockElement) {
    // Callback function executed when the clock element is found
    const observer = new MutationObserver(function() {
        checkClock(clockElement); 
    });
    // Define the target node to observe (the clock element)
    const targetNode = clockElement;
    
    // Configuration of the observer:
    const config = { 
        characterData: true,
        childList: true,
        subtree: true
    };
    
    // Start observing the target node for configured mutations
    observer.observe(targetNode, config);
});


// setInterval(checkClock, 1000); // Check the clock every second