let inputan = document.getElementById("saldo");
let bunga = document.getElementById("bunga");
let waktu = document.getElementById("waktu");
let hasil = [];


document.getElementById("hitung").addEventListener("click",function(){
    hasil.push(parseInt(inputan.value))
    for(let a = 0; a <= waktu.value; a++){
        hasil.push(parseInt(hasil[a] * parseFloat(bunga.value / 100) + hasil[a]));
    }
    let show = [];
    for(let a = 1; a <= waktu.value; a++){
        show.push(`Saldo Bulan ${a} \t: Rp ${hasil[a]}\n`);
    }
    document.getElementById("hasil2").innerHTML = show.join('');
});
document.getElementById("reset").addEventListener("click",function(){
    inputan.value = "";
    bunga.value = "";
    waktu.value = "";
    document.getElementById("hasil2").innerHTML = "";
    hasil = [];
    show = [];
});