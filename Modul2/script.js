document.getElementById('inputregis').addEventListener('submit', function(event) {
    event.preventDefault(); 

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var address = document.getElementById('address').value;
    
    if (name === "" || email === "" || address === "") {
        alert('Semua bidang harus diisi!');
    } else {
        alert('Form berhasil dikirim!');
    }
});
