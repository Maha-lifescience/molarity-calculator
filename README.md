# BioCalc Lab

A simple, free web tool for molarity and solution preparation calculations. BioCalc Lab helps students and lab workers work out how much reagent to weigh, how much solvent to add, and how to dilute a stock solution, without doing the maths by hand.

**Live demo:** [https://maha-lifescience.github.io/molarity-calculator/](https://maha-lifescience.github.io/molarity-calculator/)

## Why I Built It

Preparing solutions is one of the most common tasks in a biochemistry lab, and small calculation mistakes can ruin an experiment. I built BioCalc Lab as a Biochemistry student to make these calculations fast, clear, and easy to repeat. It runs fully in the browser, so there is nothing to install.

## Features

BioCalc Lab has four calculation modes that cover the most common solution preparation tasks. A reagent quick-fill dropdown lets you pick a common reagent and fill in its molecular weight automatically, which saves time and avoids typing errors. The serial dilution planner helps you plan a dilution series step by step.

Every calculation is saved in a history list, which stays on your device even after you close the page. You can export your results as a PDF to keep in your lab notebook or share with others. The tool also has a dark mode for comfortable use in low light, and the layout adjusts to phones and tablets, so you can use it at the bench.

## How to Use

Open the app in your browser and choose a calculation mode. Enter the values you know, such as the molecular weight, the target concentration, and the final volume. Press calculate, and the result appears right away. To use a common reagent, select it from the dropdown and its molecular weight will be filled in for you. Use the history panel to review earlier calculations, and the export button to download them as a PDF.

## Run It Locally

Clone the repository and open the main file in any modern browser. No build step or server is needed.

```bash
git clone https://github.com/Maha-lifescience/molarity-calculator.git
cd molarity-calculator
```

Then open `index.html` in your browser.

## Project Structure

```
molarity-calculator/
├── index.html    # Page structure
├── style.css     # Styling, dark mode, and mobile layout
├── script.js     # Calculations, history, dilution planner, and PDF export
└── LICENSE       # MIT License
```

## Built With

HTML, CSS, and JavaScript and AI tools. Calculation history is stored using the browser's localStorage, so no data is sent to any server.

## Please Note

BioCalc Lab is a study and lab-support tool. Always double-check important calculations, especially when preparing solutions for experiments where accuracy is critical.

## Author

**Maha**, BS Biochemistry, University of Agriculture Faisalabad

LinkedIn: [www.linkedin.com/in/maha-biochemist](https://www.linkedin.com/in/maha-biochemist)

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
