<<<<<<< HEAD
let sinhViens = ["Hương", "Hà", "Đức", "Thoa"];

// Tạo mảng tạm thời để chứa đối tượng với vị trí
// và độ dài của phần tử
let doDaiTen = sinhViens.map(function(e, i) {
    return { viTri: i, giaTri: e.length };
});
// Sắp xếp mảng chứa độ dài của tên
doDaiTen.sort((a, b) => a.giaTri - b.giaTri);

// Lần lượt Copy phần tử trở lại mảng sinhViens
let sinhVienDaSapXep = doDaiTen.map(function(e) {
    return sinhViens[e.viTri];
});

// In ra kết quả
console.log(sinhVienDaSapXep);
=======
>>>>>>> 2be32d49c600b10e77f7d63e68b47d5d73fb1575
