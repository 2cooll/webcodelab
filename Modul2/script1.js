
function hitung() {
    var bil1 = parseFloat(document.getElementById('bil1').value);
    var bil2 = parseFloat(document.getElementById('bil2').value);
    
    if (isNaN(bil1)) bil1 = 0;
    if (isNaN(bil2)) bil2 = 0;
    var hasil = bil1 + bil2;
    document.getElementById('hasil').textContent = "Hasil: " + hasil;
}
function resetForm() {
    document.getElementById('bil1').value = "";
    document.getElementById('bil2').value = "";
    document.getElementById('hasil').textContent = "Hasil: ";
}