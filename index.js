// ! JANGAN DIMOFIDIKASI
const dataBelanjaan = [
  {
    id: "D-10001",
    nama: "Minyak Goreng Delima",
    harga: 25000,
    kuantitas: 2,
  },
  {
    id: "D-10020",
    nama: "Beras Mamos",
    harga: 48000,
    kuantitas: 1,
  },
  {
    id: "F-00010",
    nama: "Larutan Cap Kaki Empat",
    harga: 7500,
    kuantitas: 8,
  },
];

// boleh dimodifikasi bila ingin menggunakan deklarasi fungsi yang normal
const listBelanjaan = (daftarBelanja) => {
  const daftarItem = [];  // Array item belanjaan

  for (let index = 0; index < daftarBelanja.length; index++) {
    // Menambahkan item ke array dalam bentuk string menggunakan template literal
    daftarItem.push(`- ${daftarBelanja[index].nama} x ${daftarBelanja[index].kuantitas}`);
  }

  return daftarItem; // Return list item belanjaan
};

// boleh dimodifikasi bila ingin menggunakan deklarasi fungsi yang normal
const totalBelanjaan = (daftarBelanja) => {
  let totalHargaBelanjaan = 0; // Total harga belanjaan

  for (let index = 0; index < daftarBelanja.length; index++) {
    // Operasi penjumlahan total harga belanjaan
    totalHargaBelanjaan = totalHargaBelanjaan + (daftarBelanja[index].harga * daftarBelanja[index].kuantitas)    
  }

  return totalHargaBelanjaan; // Return nilai total harga belanjaan
};

// ! JANGAN DIMODIFIKASI
const main = () => {
  console.log("Selamat datang customer");

  console.log("Belanjaan Anda adalah:");
  console.log(listBelanjaan?.(dataBelanjaan)?.join("\n"));
  console.log(
    "\nTotal Belanjaan Anda adalah Rp. " + totalBelanjaan?.(dataBelanjaan)
  );
};

main();

module.exports = {
  dataBelanjaan,
  listBelanjaan,
  totalBelanjaan,
};
