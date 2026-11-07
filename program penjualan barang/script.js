const barang = document.getElementById("pilihBarang");

barang.addEventListener('change', () => {
    const barangDipilih = barang.value;
    let harga = document.getElementById("harga");

    switch (barangDipilih) {
        case "Sapu":
            harga.value = 10000;
            break;
        case "Sabun":
            harga.value = 5000;
            break;
        case "Shampoo":
            harga.value = 20000;
            break;
    }
})

function proses() {
    let nama = document.getElementById("pilihBarang").value;
    let harga = Number(document.getElementById("harga").value);
    let jumlah = Number(document.getElementById("jumlah").value);

    if (nama == '' || harga == '' || jumlah == '') {
        alert("Masukkan data terlebih dahulu!");
    }

    let total = harga * jumlah;
    let diskon = 0;

    if (total >= 100000) {
        diskon = 0.05;
        diskon = total * diskon;
    }

    let bayar = total - diskon;

    document.getElementById("total").value = `Rp${total}`;
    document.getElementById("diskon").value = `Rp${diskon}`;
    document.getElementById("bayar").value = `Rp${bayar}`;
}