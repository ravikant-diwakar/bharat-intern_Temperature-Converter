window.addEventListener('DOMContentLoaded', () => {
    const celsiusInput = document.getElementById('celsius');
    const fahrenheitInput = document.getElementById('fahrenheit');
    const convertButton = document.getElementById('convert-btn');
    const clearButton = document.getElementById('clear-btn');
  
    convertButton.addEventListener('click', () => {
      if (celsiusInput.value !== '') {
        const celsius = parseFloat(celsiusInput.value);
        const fahrenheit = (celsius * 9 / 5) + 32;
        fahrenheitInput.value = fahrenheit.toFixed(2);
      } else if (fahrenheitInput.value !== '') {
        const fahrenheit = parseFloat(fahrenheitInput.value);
        const celsius = (fahrenheit - 32) * 5 / 9;
        celsiusInput.value = celsius.toFixed(2);
      }
    });
  
    clearButton.addEventListener('click', () => {
      celsiusInput.value = '';
      fahrenheitInput.value = '';
    });
  });
  