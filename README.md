# YT TimeCtrl

**YT TimeCtrl** is a Chrome extension that allows users to set custom start and end times for YouTube videos. This enables automatic looping of specific sections, providing an easy way to repeat and control playback of selected video parts.

## Features

- Set custom **start** and **end** times for YouTube video playback.
- Automatically loop the video between the specified time range.
- Simple and user-friendly interface with a RUN/STOP button.
- Input time in `hh:mm:ss` format.

## Installation

1. Clone or download the repository to your local machine.
2. Open **Google Chrome** and go to the [Extensions](chrome://extensions) page.
3. Enable **Developer mode** in the top right corner.
4. Click on **Load unpacked** and select the folder containing this extension.
5. The extension will now be available in your Chrome toolbar.

## Usage

1. Navigate to a YouTube video.
2. Open the **YT TimeCtrl** extension from the Chrome toolbar.
3. Enter the desired **start** and **end** times in the format `hh:mm:ss`.
4. Click the **RUN** button to start the controlled playback loop.
5. Click **STOP** to end the loop.

## Development

### File Structure

- `manifest.json`: Configuration file that defines the extension’s permissions and behaviors.
- `popup.html`: The extension's user interface.
- `popup.js`: Handles the logic for user interactions in the popup.
- `content.js`: Controls YouTube video playback according to the specified start and end times.
- `popup.css`: Contains styles for the popup UI.

### Technologies Used

- **HTML/CSS/BOOTSTRAP** for the popup interface.
- **JavaScript** for functionality and interaction with YouTube.