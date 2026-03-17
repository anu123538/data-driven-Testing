const ExcelJS = require('exceljs');

async function readExcelData(filePath) {
    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.readFile(filePath);
    const sheet = workbook.getWorksheet(1);
    const testData = [];

    sheet.eachRow((row, rowNumber) => {
        if (rowNumber > 1) { // to remove header
            testData.push({
                username: row.getCell(2).value?.toString(),
                password: row.getCell(3).value?.toString(),
                expected: row.getCell(4).value?.toString()
            });
        }
    });
    return testData;
}

module.exports = { readExcelData };