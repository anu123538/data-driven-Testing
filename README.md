
# Playwright Data-Driven Automation Framework

This project demonstrates a robust **Data-Driven Testing (DDT)** framework using **Playwright** and **JavaScript**. It is designed to automate system login processes by fetching test data dynamically from an **Excel sheet**.

## 🚀 Key Features
* **Data-Driven Logic:** Decouples test data from test scripts using Excel integration.
* **Playwright Automation:** Fast and reliable end-to-end testing for modern web apps.
* **CI/CD Integration:** Configured with GitHub Actions to run tests automatically on every push.
* **Automated Reporting:** Generates detailed HTML reports for every test execution.

## 🛠️ Tech Stack
* **Tool:** Playwright
* **Language:** JavaScript
* **Data Source:** Microsoft Excel (`.xlsx`)
* **CI/CD:** GitHub Actions

## 📂 Project Structure
```text
├── .github/workflows      # CI/CD pipeline configuration
├── tests/                 # Playwright test scripts
├── data/                  # Excel sheets containing test data
├── playwright-report/     # Generated test execution reports
├── playwright.config.js   # Global configuration for Playwright
└── package.json           # Project dependencies
```

## ⚙️ Setup & Installation

1. **Clone the repository:**
   ```bash
   git clone <https://github.com/anu123538/data-driven-Testing/>
   cd Playwright-DataDriven
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run Tests:**
   ```bash
   npx playwright test
   ```

4. **View HTML Report:**
   ```bash
   npx playwright show-report
   ```

## ✅ Test Results & Execution
The framework executes multiple test cases based on the data provided in the Excel sheet. Below is the status of the latest execution:

* **Test Status:** Passing (See GitHub Actions badge)
<img width="1099" height="359" alt="Screenshot 2026-03-17 170651" src="https://github.com/user-attachments/assets/2482a5be-3b48-41e2-93d9-e77fc03831dd" />

Execution Environment: Chromium, Firefox, Webkit (Cross-browser)
  <img width="1333" height="663" alt="Screenshot 2026-03-16 172824" src="https://github.com/user-attachments/assets/39303220-c9d8-47e2-bf84-420fa6637b8b" />



### 👨‍💻 About Me
I am a third Year University Student and an Aspiring Software Quality Assurance (SQA) Engineer This project showcases my skills in Automation, CI/CD, and Data-Driven Testing strategies.

