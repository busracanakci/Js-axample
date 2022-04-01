//İndex sayfasında nulunan form uygulaması için form değerlerini kaydeden bir uygulama, 3.sayfada daha ayrıntılı bir uygulama yer almakta
function denemeForm() {
  var s = document.getElementById('registerForm').action;
  document.getElementById('snc').innerHTML = s;
}
//Toplama işlemi
var tplm = document.getElementById('toplam');
tplm.onclick= function() {
  var s1 = Number(document.getElementById('sayi1').value);
  var s2 = Number(document.getElementById('sayi2').value);
  var st = s1 + s2;
  document.getElementById('sonuc').innerHTML = s1+"+"+s2+"="+st;
}
//Çıkarma işlemi
var btnfark = document.getElementById('fark');

btnfark.onclick = function() {
  var s1 = Number(document.getElementById('sayi1').value);
  var s2 = Number(document.getElementById('sayi2').value);
  var sf = s1 - s2;
  document.getElementById('sonuc').innerHTML  = s1+"-"+s2+"="+sf;
}
//Çarpma işlemi 
var btncrp = document.getElementById('carp');
btncrp.onclick = function() {
  var s1 = Number(document.getElementById('sayi1').value);
  var s2 = Number(document.getElementById('sayi2').value);
  var sc = s1*s2;
  document.getElementById('sonuc').innerHTML = s1+"*"+s2+"="+sc;
}
//Bölme işlemi
var btnbol = document.getElementById('bol');
btnbol.onclick = function(){
  var s1 = Number(document.getElementById('sayi1').value);
  var s2 = Number(document.getElementById('sayi2').value);
  var sb = s1/s2;
  document.getElementById('sonuc').innerHTML = s1+"/"+s2+"="+sb;
}

//Todo list uygulaması, kullanıcının inputa girdiği değeri butona tıklayarak , tabloya ekleyebildiği bir uygulama
const gorev = document.querySelector("#yenigorev");
const ekle = document.querySelector("#ekle");

ekle.onclick = function() {
  let tGorev = document.createElement("td");
  let tSil = document.createElement("td");
  let silBtn = document.createElement("button");
  silBtn.textContent="X";
  tSil.appendChild(silBtn);
  silBtn.onclick=function(e){
    liste.removeChild(this.parentNode.parentNode);
  }
  tGorev.style.cssText ="color:green;";
  silBtn.style.cssText="color:green;";
  tGorev.textContent=gorev.value;
  let tr=document.createElement("tr");

  tr.appendChild(tGorev);
  tr.appendChild(tSil);
  liste.appendChild(tr);
  gorev.value="";

}
