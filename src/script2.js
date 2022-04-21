//Kullanıcının inputlara girdiği ad,soyad,yaş ve mail adreslerini, butona tıklayarak tabloya ekleyebildiği uygulama
const ad = document.querySelector("#ad");
const soyad = document.querySelector("#soyad");
const yas = document.querySelector("#yas");
const mail = document.querySelector("#mail");
const kaydet = document.querySelector("#kaydet");
const tablo = document.querySelector("#tablo");

kaydet.onclick = function() {
  let tAd = document.createElement("td");
  let tSoyad = document.createElement("td");
  let tYas = document.createElement("td");
  let tMail = document.createElement("td");


  tAd.style.cssText ="color:green;";
  tSoyad.style.cssText ="color:green;";
  tYas.style.cssText ="color:green;";
  tMail.style.cssText ="color:green;";


  tAd.textContent = ad.value;
  tSoyad.textContent = soyad.value;
  tYas.textContent = yas.value;
  tMail.textContent = mail.value;
  let tr = document.createElement("tr");

  tr.appendChild(tAd);
  tr.appendChild(tSoyad);
  tr.appendChild(tYas);
  tr.appendChild(tMail);
  tablo.appendChild(tr);
}
//Kullanıcının inputlara girdiği iki değerin aynı olup olmadığını karşılaştıran uygulama
var sifre1 = document.getElementById("sifre1");
var sifre2 = document.getElementById("sifre2");
var sifre = document.getElementById("sifre");
var kontrol = document.getElementById("kontrol");
kontrol.onclick = function(){
  if(sifre1.value == sifre2.value)
  {
    alert("Şifreler Aynı");
  }
  else{
    alert("Şifreler Farklı");
  }
}
