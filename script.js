function prosesNilai() {
    // 1. Ambil input nilai dari HTML
    const inputRaw = document.getElementById('inputNilai').value;
    const tableBody = document.getElementById('tableBody');
    const resultCard = document.getElementById('resultCard');

    // Validasi jika input kosong
    if (inputRaw.trim() === "") {
        alert("Harap masukkan nilai terlebih dahulu!");
        return;
    }

    // Mengubah string input berpisah koma menjadi Array
    const daftarNilai = inputRaw.split(',');
    
    // Bersihkan isi tabel sebelumnya
    tableBody.innerHTML = '';

    // 2. PERULANGAN: Mengiterasi setiap nilai dalam Array menggunakan for loop
    for (let i = 0; i < daftarNilai.length; i++) {
        let nilai = parseFloat(daftarNilai[i].trim());

        // Abaikan jika input bukan angka valid
        if (isNaN(nilai) || nilai < 0 || nilai > 100) {
            continue;
        }

        let grade = '';
        let keterangan = '';
        let gradeClass = '';

        // 3. PERCABANGAN: Minimally 5 Kondisi Kriteria Penilaian
        if (nilai >= 85) { // Kondisi 1
            grade = 'A';
            keterangan = 'Sangat Memuaskan';
            gradeClass = 'grade-a';
        } else if (nilai >= 75) { // Kondisi 2
            grade = 'B';
            keterangan = 'Memuaskan';
            gradeClass = 'grade-b';
        } else if (nilai >= 60) { // Kondisi 3
            grade = 'C';
            keterangan = 'Cukup';
            gradeClass = 'grade-c';
        } else if (nilai >= 50) { // Kondisi 4
            grade = 'D';
            keterangan = 'Kurang (Perlu Perbaikan)';
            gradeClass = 'grade-d';
        } else { // Kondisi 5
            grade = 'E';
            keterangan = 'Sangat Kurang (Gagal)';
            gradeClass = 'grade-e';
        }

        // Memasukkan baris data ke dalam tabel HTML
        const row = `
            <tr>
                <td>${i + 1}</td>
                <td>${nilai}</td>
                <td class="${gradeClass}">${grade}</td>
                <td>${keterangan}</td>
            </tr>
        `;
        tableBody.innerHTML += row;
    }

    // Tampilkan kartu hasil
    resultCard.classList.remove('hidden');
}