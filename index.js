var inputAd = document.getElementById("inputAd")
var inputSoyad = document.getElementById("inputSoyad")
var inputTelefon = document.getElementById("inputTelefon")
function ekle() {
    if (!inputAd.value || !inputSoyad.value || !inputTelefon.value) {
        alert("Lütfen eksik alanları doldurun!")
    }
    else {
        var table = document.getElementById("table")
        var rowCount = table.rows.length
        row = table.insertRow(rowCount);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        cell1.innerHTML = inputAd.value
        cell2.innerHTML = inputSoyad.value
        cell3.innerHTML = inputTelefon.value
        cell4.innerHTML = '<button type="button"  onclick="duzenle(this)" class="btn btn-success">Düzenle</button><button type="button"  onclick="sil(this)" class="btn btn-danger">Sil</button>'
        inputAd.value = ""
        inputSoyad.value = ""
        inputTelefon.value = ""
    }
}


function sil(btn) {
    var row = btn.parentNode.parentNode;
    row.parentNode.removeChild(row);
}

function kaydet(btn) {
    var row = btn.parentNode.parentNode;
    var rowCells = row.cells

    for (let i = 0; i < rowCells.length; i++) {
        if (rowCells.length - 1 != i) {
            var inputText = rowCells[i].childNodes[0].value
            rowCells[i].innerHTML = inputText
        }
        else {
            rowCells[i].innerHTML = '<button type="button"  onclick="duzenle(this)" class="btn btn-success">Düzenle</button><button type="button"  onclick="sil(this)" class="btn btn-danger">Sil</button>'
        }
    }
}

function duzenle(btn) {
    var row = btn.parentNode.parentNode;
    var rowCells = row.cells
    for (let i = 0; i < rowCells.length; i++) {
        if (rowCells.length - 1 != i) {
            var inputText = rowCells[i].childNodes[0].data
            rowCells[i].innerHTML = '<input class="form-control form-control-sm" type="text" value="">'
            rowCells[i].childNodes[0].value = inputText
        }
        else {
            rowCells[i].innerHTML = '<button type="button"  onclick="kaydet(this)" class="btn btn-primary">Kaydet</button><button type="button"  onclick="sil(this)" class="btn btn-danger">Sil</button>'
        }


    }
}
