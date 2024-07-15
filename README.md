# Chess.com Timer Alert Chrome Extension

## Overview

As a chess enthusiast, I've lost many games because I didn't pay attention to the clock and ran out of time. This frustration led me to develop a solution: a Chrome extension for chess.com that checks your remaining time and alerts you when you have 10 seconds left. The extension plays a sound of your choice and darkens the page, highlighting the board to help you focus until the game ends, after which it returns the page to normal.

## Note: Personalization and Customization

The usage of this extension is highly personalized and based on individual preferences. The provided features serve as a shell code to enhance your experience on chess.com by alerting you when your remaining time is low and helping you focus during critical moments. Users are encouraged to tailor the extension further to suit their specific needs. For instance, additional alerts can be programmed for different time intervals, or different sounds can be selected to signify various game scenarios (such as being ahead in time or in a time-scramble situation). Feel free to modify and expand the functionality to best fit your playing style and strategic preferences.

## Features

- **Time Alert**: Plays a sound when there are 10 seconds left on your clock.
- **Focus Mode**: Darkens the entire page except for the chessboard to help you focus on the game.
- **Customizable Sound**: Allows you to choose the sound that plays when the alert is triggered.

## Installation

1. **Clone the Repository**: Download or clone this repository to your local machine.
    ```sh
    git clone https://github.com/OfekCoh/Chess-Time-Alert.git
    ```

2. **Load the Extension**:
    - Open Chrome and navigate to `chrome://extensions/`.
    - Enable "Developer mode" by toggling the switch in the top right corner.
    - Click on "Load unpacked" and select the directory where you cloned the repository.

## Usage

1. **Navigate to Chess.com**: Open your browser and go to [chess.com](https://www.chess.com).
2. **Start a Game**: Begin a chess game as you normally would.
3. **Alert Activation**: The extension will monitor your clock. When your remaining time reaches 10 seconds, it will play the alert sound and activate focus mode.
4. **Customizing the Sound**: To change the alert sound, replace the `path_to_sound_file.mp3` in the script with the path to your desired sound file.

