// script.js
document.addEventListener("DOMContentLoaded", function () {
    const celciusInput = document.getElementById('celciusInput');
    const fahrenheitInput = document.getElementById('fahrenheitInput');
    const konversiBtn = document.getElementById('konversiBtn');
    const resetBtn = document.getElementById('resetBtn');
    const rumusDanHasil = document.getElementById('rumusDanHasil');

    konversiBtn.addEventListener('click', konversiSuhu);
    resetBtn.addEventListener('click', reset);

    let lastInputType = 'celcius'; // Menyimpan jenis input terakhir

    function konversiSuhu() {
        const celcius = parseFloat(celciusInput.value);
        const fahrenheit = parseFloat(fahrenheitInput.value);
        rumusDanHasil.value = "";

        if (lastInputType === 'celcius') {
            if (celcius) {
                const celciusToFahrenheit = (celcius * 9/5) + 32;
                rumusDanHasil.value += `${celcius} Celsius = (${celcius} × 9/5) + 32 = ${celciusToFahrenheit} Fahrenheit\n`;
                lastInputType = 'fahrenheit';
            }
        } else if (lastInputType === 'fahrenheit') {
            if (fahrenheit) {
                const fahrenheitToCelcius = (fahrenheit - 32) * 5/9;
                rumusDanHasil.value += `${fahrenheit} Fahrenheit = (${fahrenheit} - 32) × 5/9 = ${fahrenheitToCelcius} Celsius\n`;
                lastInputType = 'celcius';
            }
        }
    }

    function reset() {
        celciusInput.value = "";
        fahrenheitInput.value = "";
        rumusDanHasil.value = "";
        lastInputType = 'celcius'; // Reset jenis input terakhir
    }
});
           

        
