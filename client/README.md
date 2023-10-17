# OKYP

Welcome to the Soccer Player Identification Game! This web application allows users to register, log in, and enjoy a fun game where they identify the names of players in images. The game leverages the **Hanko authentication** system for secure user access.


## Features

- User Registration: New users can create an account and log in securely, user could also harness using passkeys.
- Authentication with Hanko: The application uses the Hanko authentication system to ensure user security.
- Player Identification Game: Users receive images and must identify the player's name from a list of options.

## Getting Started

To get started with the Okyp, follow these steps:

1. **Clone the Repository**: Clone this repository to your local machine:

   ```bash
   git clone https://github.com/asahelcode/hanko-kyp
   cd hanko-kyp

2. **Install Dependencies**: Install the required dependencies using npm or yarn:
   ```bash
   npm install
   # or
   yarn install
   ```
3. **Configuration**: Set up your [Hanko authentication](https://docs.hanko.io/introduction) system credentials in the application.

4. **Run the Application**: Start the development server:
   ```bash
      npm run dev
      # or
      yarn dev
   ```
   Okyp is now accessible at http://localhost:5173.

# Authentication
This application uses the Hanko Authentication System for secure user registration and login. To configure Hanko, follow these steps:

1. Create a Hanko account if you don't have one already.
2. In your hanko cloud, create a new project
3. Add your application URL to the APP URL in the general settings, Simple
4. Copy the API url for each call to register and login

# Game Rules
### Okyp is straightforward:

- An image of a player is displayed.
- You are presented with a list of player names to choose from.
- You are notified if you chose a player name correctly or not
- You lose when you incorrectly choose a player's name five times

# Development
If you want to contribute to the development of this project, please follow these steps:

1. **Fork the Repository**: Click the "Fork" button on the GitHub repository.

2. **Clone Your Fork**: Clone your forked repository to your local machine.

3. **Create a New Branch**: Create a new branch for your feature or bug fix:

   ```bash
   git checkout -b feature/my-feature
   ```
4. **Make Changes**: Make your code changes and improvements.

5. **Commit and Push**: Commit your changes and push them to your repository:

   ```bash
   git commit -m "Add my feature"
   git push origin feature/my-feature
   ```
6. **Create a Pull Request**: Create a pull request from your branch to the main repository.

# Contributing
**I welcome contributions to make this project better. If you have any ideas or improvements, please feel free to submit issues or pull requests**