class Tujuan{
    constructor(tujuan,harga){
        this.tujuan = tujuan;
        this.harga = harga;
    }
}

const jakarta = new Tujuan("Jakarta",100000);
const cirebon = new Tujuan("Cirebon",150000);
const tasikmalaya = new Tujuan("Tasikmalaya",200000);

document.getElementById("hitung").addEventListener("click",function(){
    let harga = document.getElementById("tujuan").value;
    let member = document.getElementById("member").checked;
    let jumlah = document.getElementById("jumlahtiket").value;
    if(harga === jakarta.tujuan){
        harga = jakarta.harga;
    }else if (harga === cirebon.tujuan) {
        harga = cirebon.harga;
    }else  if (harga === tasikmalaya.tujuan) {
        harga = tasikmalaya.harga;
    }
    if(member){
        let diskon = 10/100 * harga * jumlah;
        let total = harga * jumlah - diskon;
        showdata(harga,harga * jumlah,total,diskon);
    }else{
        showdata(harga,harga * jumlah,harga * jumlah,0);
    }
});

function showdata(harga2,subtotal2,total2,diskon2){
    let subtotal = document.getElementById("subtotal");
    let total = document.getElementById("total");
    let diskon = document.getElementById("diskon");
    let hargatiket = document.getElementById("hargatiket");

    subtotal.value = subtotal2;
    total.value = total2;
    diskon.value = diskon2;
    hargatiket.value = harga2;   
}