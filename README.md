# Basketball Scoreboard

A clean, modern basketball scoreboard web application built with vanilla JavaScript, HTML, and CSS. Perfect for keeping track of game scores during basketball matches or practice sessions.

![Basketball Scoreboard](https://github.com/user-attachments/assets/90594b77-b784-4753-90ab-de874a48de96)

## Features

- **Dual Team Scoring**: Track scores for both HOME and AWAY teams
- **Multiple Point Options**: Add 1, 2, or 3 points with dedicated buttons
- **Digital Scoreboard Display**: Large, easy-to-read score displays with retro styling
- **Reset Functionality**: Reset both scores to zero with a single button
- **Responsive Design**: Works on desktop and mobile devices
- **Modern UI**: Beautiful pink/red gradient design with smooth animations

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm (comes with Node.js)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ToddCole/score-keeper.git
   cd score-keeper
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open your browser and navigate to `http://localhost:5173`

## Usage

- **Adding Points**: Click the +1, +2, or +3 buttons under each team to add points to their score
- **Resetting Scores**: Click the "Reset" button to set both teams' scores back to 0
- **Team Names**: The scoreboard displays "HOME" and "AWAY" teams by default

## Scripts

- `npm start` - Start the development server
- `npm run dev` - Alternative command to start development server
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build locally

## Technologies Used

- **HTML5** - Structure and semantic markup
- **CSS3** - Styling with custom properties, flexbox, and responsive design
- **Vanilla JavaScript** - Interactive functionality and DOM manipulation
- **Vite** - Fast development server and build tool

## Project Structure

```
score-keeper/
├── index.html          # Main HTML file
├── index.css           # Stylesheet with all visual styling
├── index.js            # JavaScript functionality
├── vite.config.js      # Vite configuration
├── package.json        # Project dependencies and scripts
└── README.md          # Project documentation
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).