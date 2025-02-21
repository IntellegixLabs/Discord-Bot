# Discord Bot

This project is a Discord bot designed to assist new users by providing a guide to the server and to help maintain server integrity by banning raiders.

## Features

- **Guide Command**: Sends a welcome message and server rules to new users.
- **Ban Command**: Allows authorized users to ban raiders from the server.
- **Ready Event**: Logs a message when the bot is online and ready to serve.

## Setup Instructions

1. **Install repository**:
   cd discord-bot

2. **Install dependencies**:
   ```
   npm install
   ```

3. **Create a `.env` file**:
   - Copy the `.env.example` to `.env` and add your bot token:
     ```
     BOT_TOKEN=your_bot_token_here
     ```

4. **Run the bot**:
   ```
   node src/index.js
   ```

## Usage

- **Guide Command**: Type `!guide` in any channel to receive the server guide.

## Contributing

Feel free to submit issues or pull requests for improvements or bug fixes.