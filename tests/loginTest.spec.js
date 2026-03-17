const { test, expect } = require('@playwright/test');
const { readExcelData } = require('../utils/DataLoader');
const path = require('path');


test.describe('Data-Driven Login Tests from Excel', () => {
    
    // 1. Excel file path show
    const filePath = path.join(__dirname, '../data/testData.xlsx');

    //
    const dataRows = [
        { username: 'student', password: 'Password123', expected: 'Success' },
        { username: 'incorrectUser', password: 'password123', expected: 'Fail' },
        { username: 'student', password: 'wrongPassword', expected: 'Fail' }
    ];

    
    dataRows.forEach((data, index) => {
        
       
        test(`Test Case ${index + 1}: Login for user - ${data.username}`, async ({ page }) => {
            
            console.log(`Running test for: ${data.username}`);

            // go to Website 
            await page.goto('https://practicetestautomation.com/practice-test-login/');
            
            // Username and Password fill 
            await page.fill('#username', data.username);
            await page.fill('#password', data.password);
            
            // Submit button click
            await page.click('#submit');

            // Expected result 
            if (data.expected === 'Success') {
                // check url
                await expect(page).toHaveURL(/logged-in-successfully/);
                console.log('Login successful as expected.');
            } else {
                //error message
                const error = page.locator('#error');
                await expect(error).toBeVisible();
                console.log('Error message displayed as expected.');
            }
        });
    });
});