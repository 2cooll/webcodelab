let display = document.getElementById('display');

// Fungsi untuk menambah angka atau operator ke layar
function appendToDisplay(value) {
    display.value += value;
}

// Fungsi untuk membersihkan layar (Clear All)
function clearDisplay() {
    display.value = '';
}

// Fungsi untuk menghitung hasil operasi
function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = 'Error';
    }
}
