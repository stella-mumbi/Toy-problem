function calculateNetSalary() {
    try {
        const basicSalaryInput = document.getElementById("basicSalary");
        const benefitsInput = document.getElementById("benefits");
        const resultElement = document.getElementById("netSalaryResult");

        const basicSalary = parseFloat(basicSalaryInput.value);
        const benefits = parseFloat(benefitsInput.value);

        if (!isNaN(basicSalary) && !isNaN(benefits)) {
            // Assume specific values for tax rates and deductions
            const taxRate = 0.1; // 10%
            const nhifRate = 0.025; // NHIF rate
            const nssfRate = 0.06; // NSSF rate

            // Calculate deductions and gross salary
            const payee = basicSalary * taxRate;
            const nhifDeductions = basicSalary * nhifRate;
            const nssfDeductions = basicSalary * nssfRate;
            const grossSalary = basicSalary + benefits;

            // Calculate net salary
            const netSalary = grossSalary - (payee + nhifDeductions + nssfDeductions);

            // Display the result
            resultElement.innerHTML = `
                Payee (Tax): ${payee.toFixed(2)}<br>
                NHIF Deductions: ${nhifDeductions.toFixed(2)}<br>
                NSSF Deductions: ${nssfDeductions.toFixed(2)}<br>
                Gross Salary: ${grossSalary.toFixed(2)}<br>
                Net Salary: ${netSalary.toFixed(2)}
            `;
        } else {
            resultElement.innerHTML = "Invalid input! Please enter numeric values for salary and benefits.";
        }
    } catch (error) {
        console.error("An error occurred.");
        console.error(error);
    }
}