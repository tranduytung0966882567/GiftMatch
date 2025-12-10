const gifts = [
  {name:"Tai nghe Bluetooth",category:"Đồ tiện ích",price:">1 triệu",receiver:"Người lớn tuổi"},
  {name:"Sổ tay da",category:"Đồ tiện ích",price:">1 triệu",receiver:"Gia đình"},
  {name:"Nến thơm cao cấp",category:"Sức khỏe",price:"200k–500k",receiver:"Người lớn tuổi"},
  {name:"Bộ skincare mini",category:"Sức khỏe",price:">1 triệu",receiver:"Người lớn tuổi"},
  {name:"Áo hoodie basic",category:"Đồ ăn/uống",price:"<200k",receiver:"Gia đình"},
  {name:"Bình giữ nhiệt",category:"Thời trang",price:"500k–1 triệu",receiver:"Người yêu"},
  {name:"Cốc in hình tuỳ chọn",category:"Công nghệ",price:"500k–1 triệu",receiver:"Đồng nghiệp"},
  {name:"Mô hình lắp ráp",category:"Công nghệ",price:"<200k",receiver:"Bạn bè"},
  {name:"Hộp quà socola",category:"Giáo dục",price:"<200k",receiver:"Bạn bè"},
  {name:"Voucher ăn uống",category:"Sở thích",price:">1 triệu",receiver:"Đồng nghiệp"},
  {name:"Sách truyền cảm hứng",category:"Sở thích",price:"<200k",receiver:"Người yêu"},
  {name:"Chuột không dây",category:"Công nghệ",price:"200k–500k",receiver:"Gia đình"},
  {name:"Bàn phím cơ mini",category:"Thời trang",price:">1 triệu",receiver:"Trẻ em"},
  {name:"Túi tote vải",category:"Đồ tiện ích",price:"<200k",receiver:"Bạn bè"},
  {name:"Bộ dụng cụ vẽ",category:"Giáo dục",price:"500k–1 triệu",receiver:"Người yêu"},
  {name:"Hộp nhạc gỗ",category:"Đồ tiện ích",price:"<200k",receiver:"Người yêu"},
  {name:"Đèn ngủ đổi màu",category:"Giáo dục",price:"<200k",receiver:"Gia đình"},
  {name:"Khung ảnh",category:"Sở thích",price:">1 triệu",receiver:"Đồng nghiệp"},
  {name:"Combo trà thảo mộc",category:"Thời trang",price:">1 triệu",receiver:"Người yêu"},
  {name:"Gối ôm plushy",category:"Đồ trang trí",price:">1 triệu",receiver:"Gia đình"},
  // ✅ từ đây trở xuống là dữ liệu random từ file của bạn
  {name:"Nến thơm cao cấp 75",category:"Thời trang",price:"200k–500k",receiver:"Trẻ em"},
  {name:"Bộ skincare mini 20",category:"Sức khỏe",price:"500k–1 triệu",receiver:"Trẻ em"},
  {name:"Cốc in hình tuỳ chọn 89",category:"Thời trang",price:"200k–500k",receiver:"Trẻ em"},
  {name:"Bàn phím cơ mini 39",category:"Sức khỏe",price:">1 triệu",receiver:"Trẻ em"},
  {name:"Sổ tay da 61",category:"Đồ tiện ích",price:">1 triệu",receiver:"Trẻ em"},
  {name:"Khung ảnh 63",category:"Thời trang",price:"500k–1 triệu",receiver:"Trẻ em"},
  {name:"Chuột không dây 90",category:"Đồ ăn/uống",price:"200k–500k",receiver:"Đồng nghiệp"},
  {name:"Túi tote vải 4",category:"Sở thích",price:"200k–500k",receiver:"Người yêu"},
  {name:"Hộp nhạc gỗ 17",category:"Sức khỏe",price:"<200k",receiver:"Bạn bè"},
  {name:"Sổ tay da 79",category:"Đồ trang trí",price:">1 triệu",receiver:"Người lớn tuổi"},
  {name:"Bộ dụng cụ vẽ 23",category:"Công nghệ",price:">1 triệu",receiver:"Đồng nghiệp"},
  {name:"Sổ tay da 29",category:"Sở thích",price:"500k–1 triệu",receiver:"Gia đình"},
  {name:"Chuột không dây 55",category:"Giáo dục",price:"500k–1 triệu",receiver:"Bạn bè"},
  {name:"Áo hoodie basic 56",category:"Đồ trang trí",price:"200k–500k",receiver:"Người lớn tuổi"},
  {name:"Bàn phím cơ mini 57",category:"Sở thích",price:"<200k",receiver:"Người lớn tuổi"},
  {name:"Sổ tay da 49",category:"Sức khỏe",price:"500k–1 triệu",receiver:"Đồng nghiệp"},
  {name:"Sổ tay da 73",category:"Đồ trang trí",price:"200k–500k",receiver:"Bạn bè"},
  {name:"Combo trà thảo mộc 77",category:"Đồ tiện ích",price:"500k–1 triệu",receiver:"Trẻ em"},
  {name:"Sách truyền cảm hứng 34",category:"Sức khỏe",price:">1 triệu",receiver:"Trẻ em"},
  {name:"Khung ảnh 81",category:"Đồ tiện ích",price:"500k–1 triệu",receiver:"Trẻ em"},
  {name:"Khung ảnh 40",category:"Đồ ăn/uống",price:"<200k",receiver:"Trẻ em"},
  {name:"Bàn phím cơ mini 73",category:"Thời trang",price:"<200k",receiver:"Đồng nghiệp"},
  {name:"Hộp quà socola 55",category:"Sức khỏe",price:"<200k",receiver:"Người lớn tuổi"},
  {name:"Khung ảnh 11",category:"Sức khỏe",price:">1 triệu",receiver:"Người yêu"},
  {name:"Đèn ngủ đổi màu 38",category:"Công nghệ",price:"200k–500k",receiver:"Bạn bè"},
  {name:"Voucher ăn uống 33",category:"Đồ tiện ích",price:">1 triệu",receiver:"Bạn bè"},
  {name:"Áo hoodie basic 83",category:"Thời trang",price:"200k–500k",receiver:"Bạn bè"},
  {name:"Voucher ăn uống 76",category:"Giáo dục",price:"200k–500k",receiver:"Người lớn tuổi"},
  {name:"Chuột không dây 22",category:"Thời trang",price:"<200k",receiver:"Người lớn tuổi"},
  {name:"Hộp quà socola 21",category:"Thời trang",price:">1 triệu",receiver:"Bạn bè"},
  {name:"Bộ skincare mini 96",category:"Sở thích",price:"<200k",receiver:"Gia đình"},
  {name:"Sách truyền cảm hứng 70",category:"Sức khỏe",price:"<200k",receiver:"Đồng nghiệp"},
  {name:"Mô hình lắp ráp 73",category:"Sức khỏe",price:"<200k",receiver:"Gia đình"},
  {name:"Nến thơm cao cấp 34",category:"Đồ trang trí",price:">1 triệu",receiver:"Bạn bè"},
  {name:"Mô hình lắp ráp 98",category:"Thời trang",price:">1 triệu",receiver:"Trẻ em"},
  {name:"Đèn ngủ đổi màu 81",category:"Sở thích",price:">1 triệu",receiver:"Người yêu"},
  {name:"Bộ dụng cụ vẽ 23",category:"Giáo dục",price:"500k–1 triệu",receiver:"Gia đình"},
  {name:"Sổ tay da 24",category:"Giáo dục",price:"500k–1 triệu",receiver:"Gia đình"},
  {name:"Tai nghe Bluetooth 10",category:"Đồ trang trí",price:">1 triệu",receiver:"Đồng nghiệp"}
];

/* ================= FILTER ================= */

function filterGifts() {
  const r = document.getElementById("receiver").value;
  const c = document.getElementById("category").value;
  const p = document.getElementById("price").value;
  const per = document.getElementById("personality").value;

  const results = gifts.filter(g =>
    (!r || g.receiver === r) &&
    (!c || g.category === c) &&
    (!p || g.price === p) &&
    (!per || g.personality === per)
  );

  render(results.slice(0, 5));
}

/* ================= RENDER ================= */

function render(list) {
  const el = document.getElementById("results");
  el.innerHTML = "";

  if (!list.length) {
    el.innerHTML = "<p>Không tìm thấy quà phù hợp 😢</p>";
    return;
  }

  list.forEach(g => {
    el.innerHTML += `
      <div class="card">
        <h3>${g.name}</h3>
        <p>🎯 ${g.receiver}</p>
        <p>📦 ${g.category}</p>
        <p>💰 ${g.price}</p>
        <p>💖 ${g.personality}</p>
      </div>
    `;
  });
}
