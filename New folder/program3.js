let Quiz = document.getElementById("Quiz");
let Tugas = document.getElementById("Tugas");
let UTS = document.getElementById("UTS");
let UAS = document.getElementById("UAS");
let keterangan = "";

document.getElementById("hitung").addEventListener("click",function(){
    let IPK = 10/100  * (Quiz.value) + 20/100 * (Tugas.value) + 30/100 * (UTS.value) + 40/100 * (UAS.value);
    if(IPK > 80){
        keterangan = "Lulus dengan Sangat Baik";
    }else if(IPK <= 80 && IPK >= 69){
        keterangan = "Lulus dengan Baik";
    }else if(IPK < 69 && IPK >= 56){
        keterangan = "Lulus dengan Cukup";
    }else if(IPK < 55 && IPK >= 39){
        keterangan = "Lulus dengan Kurang";
    }else if(IPK < 38){
        keterangan = "Tidak Lulus";
    }
    show(IPK,keterangan);
});

function show(IPK,keterangan2){
    document.getElementById("IPK").value = IPK;
    document.getElementById("keterangan").value = keterangan2;
};

document.getElementById("ulang").addEventListener("click",function(){
    Quiz.value = "";
    Tugas.value = "";
    UTS.value = "";
    UAS.value = "";
    document.getElementById("IPK").value = "";
    document.getElementById("keterangan").value = "";
});