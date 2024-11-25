function appendValue(value) {
    const display = document.getElementById('display');
    display.value += value;
  }
  
  function clearDisplay() {
    document.getElementById('display').value = '';
  }
  
  function calculate() {
    const display = document.getElementById('display');
    const expression = display.value;
  
    if (expression === "2+2") {
      display.value = 5; // Funcionalidad especial
    } else {
      try {
        display.value = eval(expression);
      } catch {
        display.value = "Error";
      }
    }
  }
  