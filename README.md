# Chess.com Timer Alert Chrome Extension

## Overview

As a chess enthusiast, I've lost many games because I didn't pay attention to the clock and ran out of time. This frustration led me to develop a solution: a Chrome extension for chess.com that checks your remaining time and alerts you when you have 10 seconds left. The extension plays a sound of your choice and darkens the page, highlighting the board to help you focus (focus mode) until the game ends, after which it returns the page to normal.

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

## Example

Here's a video demonstrating the extension in action:

![Example Video](path_to_example_video.mp4)

