
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
   git clone <your-repository-link>
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


* **Execution Environment:** Chromium, Firefox, Webkit (Cross-browser)

* **Data Source:** Managed via `data/login_data.xlsx`

> **Note:** Detailed HTML reports are generated after each run, capturing screenshots of any failed steps for faster debugging.

---
### 👨‍💻 About Me
I am a third Year University Student and an Aspiring Software Quality Assurance (SQA) Engineer This project showcases my skills in Automation, CI/CD, and Data-Driven Testing strategies.

