var angka_1 = document.getElementById("angka_1")
var angka_2 = document.getElementById("angka_2");
var hasil = document.getElementById("hasil");

document.getElementById("tambah").addEventListener("click", function() {
    hasil.value = parseInt(angka_1.value) + parseInt(angka_2.value);
});

document.getElementById("kali").addEventListener("click", function() {
    hasil.value = parseInt(angka_1.value) * parseInt(angka_2.value);
});

document.getElementById("bagi").addEventListener("click", function() {
    hasil.value = parseInt(angka_1.value) / parseInt(angka_2.value);
});

document.getElementById("kurang").addEventListener("click", function() {
    hasil.value = parseInt(angka_1.value) - parseInt(angka_2.value);
});

document.getElementById("reset").addEventListener("click",function(){
    angka_1.value = "";
    angka_2.value = "";
    hasil.value = "";
});