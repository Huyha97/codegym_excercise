let sinhhoc;
let vatly;
let hoahoc;

sinhhoc = parseInt(prompt("nhap diem sinh hoc"));
vatly = parseInt(prompt("nhap diem vatly"));
hoahoc = parseInt(prompt("nhap diem hoa hoc"));

let Sum = sinhhoc + vatly + hoahoc;
let Average = Sum/3;
document.write("Tong la: "+ Sum);
document.write("<br/>");
document.write("Trung binh la: "+ Sum/3);
