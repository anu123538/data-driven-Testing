ඔයාගේ දැනට තියෙන README එකට මම කලින් කියපු වැදගත් කරුණු (Badges, Professional summary, සහ Roadmap) ඇතුළත් කරලා, කිසිම දෙයක් අඩු නොකර සම්පූර්ණ Code එක පහතින් ලියා තියෙනවා. මේක කෙලින්ම copy කරලා ඔයාගේ GitHub README.md එකට දාන්න.

````markdown
# 🚀 Playwright Data-Driven Automation Framework

![Playwright Tests](https://github.com/anu123538/data-driven-Testing/actions/workflows/playwright.yml/badge.svg)
![Playwright Version](https://img.shields.io/badge/playwright-v1.40+-2EAD33?logo=playwright)
![Language](https://img.shields.io/badge/language-JavaScript-F7DF1E?logo=javascript)

This project demonstrates a robust **Data-Driven Testing (DDT)** framework using **Playwright** and **JavaScript**. It is specifically engineered to handle complex login scenarios by dynamically fetching test data from **Excel sheets**, ensuring high test coverage with minimal code duplication.

---

## 🌟 Key Features

* **Data-Driven Logic:** Decouples test data from test scripts using seamless Excel integration.
* **Cross-Browser Validation:** Simultaneously executes tests on **Chromium, Firefox, and WebKit** to ensure consistent UI/UX.
* **CI/CD Pipeline:** Fully integrated with **GitHub Actions** for automated regression testing on every push and pull request.
* **Professional Reporting:** Generates detailed HTML reports including trace logs and failure screenshots.
* **Parallel Execution:** Optimized for speed, running multiple data sets concurrently across different browsers.

---

## 🛠️ Tech Stack

| Component | Technology |
| :--- | :--- |
| **Automation Tool** | [Playwright](https://playwright.dev/) |
| **Programming Language** | JavaScript (Node.js) |
| **Data Source** | Microsoft Excel (.xlsx) |
| **CI/CD Platform** | GitHub Actions |
| **Reporting** | Playwright HTML Reporter |

---

## 📂 Project Structure

```text
├── .github/workflows/     # CI/CD pipeline configuration
├── tests/                 # Test scripts and test suites
├── data/                  # External data files (Excel sheet)
├── utils/                 # Data loader and helper functions
├── playwright-report/     # Auto-generated HTML reports
├── playwright.config.js   # Framework configuration (Browsers, Parallelism)
└── package.json           # Project dependencies and scripts
````

-----

⚙️ Setup & Installation

1.  Clone the repository:

    
    git clone [https://github.com/anu123538/data-driven-Testing.git](https://github.com/anu123538/data-driven-Testing.git)
    cd data-driven-Testing


2.  Install dependencies:

   
    npm install
   

3.  **Run All Tests (Headless):**

    ```bash
    npx playwright test
    ```

4.  Run Tests in Headed Mode:


    npx playwright test --headed
  

5.  Generate & View HTML Report:

   
    npx playwright show-report


## ✅ Test Results & Execution

The framework validates multiple login scenarios (Success, Incorrect User, Invalid Password) by iterating through the Excel data provider.

**Latest Build Status:** Passing  
**Execution Environment:** Chromium, Firefox, Webkit (Cross-browser)

\<img width="1099" alt="GitHub Actions Execution" src="https://github.com/user-attachments/assets/2482a5be-3b48-41e2-93d9-e77fc03831dd" /\>

\<img width="1333" alt="Browser Test Matrix" src="https://github.com/user-attachments/assets/39303220-c9d8-47e2-bf84-420fa6637b8b" /\>



## 🗺️ Roadmap & Future Enhancements

  - [ ] Implement **Page Object Model (POM)** for enhanced script maintainability.
  - [ ] Integrate **Allure Reporting** for advanced analytics.
  - [ ] Add **API Testing** capabilities to the same framework.
  - [ ] Secure sensitive data using Environment Variables (.env).



## 👨‍💻 About Me

I am a 3rd-year University Student and an **Aspiring Software Quality Assurance (SQA) Engineer**.  where I apply automation strategies to solve industrial challenges. This project reflects my expertise in building scalable automation solutions and managing end-to-end CI/CD workflows.



© 2026 Anuththara Imanshi. Built with passion for Quality Engineering.


