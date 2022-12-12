const ad = document.querySelector("#ad")
const soyad = document.querySelector("#soyad")
const mail = document.querySelector("#mail")
const cinsiyet = document.querySelector("#cinsiyet")
const id = document.querySelector("#id")
const ekle = document.querySelector("#ekle")//tıklama eklenecek
const sil = document.querySelector("#sil")
const edit = document.querySelector("#edit")
const table = document.querySelector("#table")


ekle.onclick = function() {
    //tıklama olayı

    //td elementleri oluşturuluyor
let tAd = document.createElement("td")
let tSoyad = document.createElement("td")
let tMail = document.createElement("td")
let tCinsiyet = document.createElement("td")
let tid = document.createElement("td")


tAd.textContent=ad.value;
tSoyad.textContent=soyad.value;
tMail.textContent=mail.value;
tCinsiyet.textContent=cinsiyet.value;
tid.textContent=id.value;

let tr=document.createElement("tr");

tr.appendChild(tAd);
tr.appendChild(tSoyad);
tr.appendChild(tMail);
tr.appendChild(tCinsiyet);
tr.appendChild(tid);

table.appendChild(tr);


ad.value="";
soyad.value="";
mail.value="";
cinsiyet.value="";
id.value="";


 ad.focus();

}
    for(i = 1;i<table.rows.length;i++){
        // console.log(i)
        table.rows[i].onclick=function(){
            rIndex = this.rowIndex;
            console.log(rIndex)
            document.getElementById("ad").value = this.cells[0].innerHTML;
            document.getElementById("soyad").value = this.cells[1].innerHTML;
            document.getElementById("mail").value = this.cells[2].innerHTML;
            document.getElementById("cinsiyet").value = this.cells[3].innerHTML;
            document.getElementById("id").value = this.cells[4].innerHTML;
            
        }

    }
    edit.onclick=function(){
        table.rows[rIndex].cells[0].innerHTML = document.getElementById("ad").value;
        table.rows[rIndex].cells[1].innerHTML = document.getElementById("soyad").value;
        table.rows[rIndex].cells[2].innerHTML = document.getElementById("mail").value;
        table.rows[rIndex].cells[3].innerHTML = document.getElementById("cinsiyet").value;
        table.rows[rIndex].cells[4].innerHTML = document.getElementById("id").value;
    }
    sil.onclick=function() {
        document.getElementById("table").deleteRow(rIndex)
    }

            

