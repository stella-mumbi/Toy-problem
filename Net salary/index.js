// index.js

function calculateNetSalary() {
    try {
        // Get input for basic salary
        const basicSalary = parseFloat(document.getElementById("basicSalary").value);

        // Get input for benefits
        const benefits = parseFloat(document.getElementById("benefits").value);

        // Constants for tax rates and deductions
        const taxRates = {
            PAYE: 0.3,
            NHIF: 0.02,
            NSSF: 0.06
        };

        // Calculate payee (Tax)
        const payee = basicSalary * taxRates.PAYE;

        // Calculate NHIF Deductions
        const nhifDeductions = basicSalary * taxRates.NHIF;

        // Calculate NSSF Deductions
        const nssfDeductions = basicSalary * taxRates.NSSF;

        // Calculate gross salary
        const grossSalary = basicSalary + benefits;

        // Calculate net salary
        const netSalary = grossSalary - (payee + nhifDeductions + nssfDeductions);

        // Display results
        const resultsElement = document.getElementById("results");
        resultsElement.innerHTML = `
            <p>Payee (Tax): ${payee}</p>
            <p>NHIF Deductions: ${nhifDeductions}</p>
            <p>NSSF Deductions: ${nssfDeductions}</p>
            <p>Gross Salary: ${grossSalary}</p>
            <p>Net Salary: ${netSalary}</p>
        `;

    } catch (error) {
        console.error("An error occurred.");
        console.error(error);
    }
}
