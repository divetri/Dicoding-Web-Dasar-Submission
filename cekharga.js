qty = 0;
price = 0;
document.getElementById("hitung").addEventListener("click", totalout); 
function totalout(){
  price = parseInt(type.value); 
  qty = parseInt(jumlah.value);
  document.getElementById("total").innerText = "Rp " + price * qty;
}