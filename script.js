/* script.js - Cập nhật hiển thị ảnh (auto placeholder nếu thiếu img) */

const gifts = [
  {name:"Tai nghe Bluetooth",category:"Đồ tiện ích",price:">1 triệu",receiver:"Người lớn tuổi",personality:"Công nghệ"},
  {name:"Sổ tay da",category:"Đồ tiện ích",price:">1 triệu",receiver:"Gia đình",personality:"Thực tế"},
  {name:"Nến thơm cao cấp",category:"Sức khỏe",price:"200k–500k",receiver:"Người lớn tuổi",personality:"Nhẹ nhàng"},
  {name:"Bộ skincare mini",category:"Sức khỏe",price:">1 triệu",receiver:"Người lớn tuổi",personality:"Nhẹ nhàng"},
  {name:"Áo hoodie basic",category:"Đồ ăn/uống",price:"<200k",receiver:"Gia đình",personality:"Năng động"},
  {name:"Bình giữ nhiệt",category:"Thời trang",price:"500k–1 triệu",receiver:"Người yêu",personality:"Thực tế"},
  {name:"Cốc in hình tuỳ chọn",category:"Công nghệ",price:"500k–1 triệu",receiver:"Đồng nghiệp",personality:"Sáng tạo"},
  {name:"Mô hình lắp ráp",category:"Công nghệ",price:"<200k",receiver:"Bạn bè",personality:"Sáng tạo"},
  {name:"Hộp quà socola",category:"Giáo dục",price:"<200k",receiver:"Bạn bè",personality:"Lãng mạn"},
  {name:"Voucher ăn uống",category:"Sở thích",price:">1 triệu",receiver:"Đồng nghiệp",personality:"Năng động"},
  {name:"Sách truyền cảm hứng",category:"Sở thích",price:"<200k",receiver:"Người yêu",personality:"Nhẹ nhàng"},
  {name:"Chuột không dây",category:"Công nghệ",price:"200k–500k",receiver:"Gia đình",personality:"Công nghệ"},
  {name:"Bàn phím cơ mini",category:"Thời trang",price:">1 triệu",receiver:"Trẻ em",personality:"Công nghệ"},
  {name:"Túi tote vải",category:"Đồ tiện ích",price:"<200k",receiver:"Bạn bè",personality:"Năng động"},
  {name:"Bộ dụng cụ vẽ",category:"Giáo dục",price:"500k–1 triệu",receiver:"Người yêu",personality:"Sáng tạo"},
  {name:"Hộp nhạc gỗ",category:"Đồ tiện ích",price:"<200k",receiver:"Người yêu",personality:"Lãng mạn"},
  {name:"Đèn ngủ đổi màu",category:"Giáo dục",price:"<200k",receiver:"Gia đình",personality:"Nhẹ nhàng"},
  {name:"Khung ảnh",category:"Sở thích",price:">1 triệu",receiver:"Đồng nghiệp",personality:"Lãng mạn"},
  {name:"Combo trà thảo mộc",category:"Thời trang",price:">1 triệu",receiver:"Người yêu",personality:"Nhẹ nhàng"},
  {name:"Gối ôm plushy",category:"Đồ trang trí",price:">1 triệu",receiver:"Gia đình",personality:"Lãng mạn"},
  {name:"Nến thơm cao cấp 75",category:"Thời trang",price:"200k–500k",receiver:"Trẻ em",personality:"Nhẹ nhàng"},
  {name:"Bộ skincare mini 20",category:"Sức khỏe",price:"500k–1 triệu",receiver:"Trẻ em",personality:"Nhẹ nhàng"},
  {name:"Cốc in hình tuỳ chọn 89",category:"Thời trang",price:"200k–500k",receiver:"Trẻ em",personality:"Sáng tạo"},
  {name:"Bàn phím cơ mini 39",category:"Sức khỏe",price:">1 triệu",receiver:"Trẻ em",personality:"Công nghệ"},
  {name:"Sổ tay da 61",category:"Đồ tiện ích",price:">1 triệu",receiver:"Trẻ em",personality:"Thực tế"},
  {name:"Khung ảnh 63",category:"Thời trang",price:"500k–1 triệu",receiver:"Trẻ em",personality:"Lãng mạn"},
  {name:"Chuột không dây 90",category:"Đồ ăn/uống",price:"200k–500k",receiver:"Đồng nghiệp",personality:"Công nghệ"},
  {name:"Túi tote vải 4",category:"Sở thích",price:"200k–500k",receiver:"Người yêu",personality:"Năng động"},
  {name:"Hộp nhạc gỗ 17",category:"Sức khỏe",price:"<200k",receiver:"Bạn bè",personality:"Lãng mạn"},
  {name:"Sổ tay da 79",category:"Đồ trang trí",price:">1 triệu",receiver:"Người lớn tuổi",personality:"Thực tế"},
  {name:"Bộ dụng cụ vẽ 23",category:"Công nghệ",price:">1 triệu",receiver:"Đồng nghiệp",personality:"Sáng tạo"},
  {name:"Sổ tay da 29",category:"Sở thích",price:"500k–1 triệu",receiver:"Gia đình",personality:"Thực tế"},
  {name:"Chuột không dây 55",category:"Giáo dục",price:"500k–1 triệu",receiver:"Bạn bè",personality:"Công nghệ"},
  {name:"Áo hoodie basic 56",category:"Đồ trang trí",price:"200k–500k",receiver:"Người lớn tuổi",personality:"Năng động"},
  {name:"Bàn phím cơ mini 57",category:"Sở thích",price:"<200k",receiver:"Người lớn tuổi",personality:"Công nghệ"},
  {name:"Sổ tay da 49",category:"Sức khỏe",price:"500k–1 triệu",receiver:"Đồng nghiệp",personality:"Thực tế"},
  {name:"Sổ tay da 73",category:"Đồ trang trí",price:"200k–500k",receiver:"Bạn bè",personality:"Thực tế"},
  {name:"Combo trà thảo mộc 77",category:"Đồ tiện ích",price:"500k–1 triệu",receiver:"Trẻ em",personality:"Nhẹ nhàng"},
  {name:"Sách truyền cảm hứng 34",category:"Sức khỏe",price:">1 triệu",receiver:"Trẻ em",personality:"Nhẹ nhàng"},
  {name:"Khung ảnh 81",category:"Đồ tiện ích",price:"500k–1 triệu",receiver:"Trẻ em",personality:"Lãng mạn"},
  {name:"Khung ảnh 40",category:"Đồ ăn/uống",price:"<200k",receiver:"Trẻ em",personality:"Lãng mạn"},
  {name:"Bàn phím cơ mini 73",category:"Thời trang",price:"<200k",receiver:"Đồng nghiệp",personality:"Công nghệ"},
  {name:"Hộp quà socola 55",category:"Sức khỏe",price:"<200k",receiver:"Người lớn tuổi",personality:"Lãng mạn"},
  {name:"Khung ảnh 11",category:"Sức khỏe",price:">1 triệu",receiver:"Người yêu",personality:"Lãng mạn"},
  {name:"Đèn ngủ đổi màu 38",category:"Công nghệ",price:"200k–500k",receiver:"Bạn bè",personality:"Nhẹ nhàng"},
  {name:"Voucher ăn uống 33",category:"Đồ tiện ích",price:">1 triệu",receiver:"Bạn bè",personality:"Năng động"},
  {name:"Áo hoodie basic 83",category:"Thời trang",price:"200k–500k",receiver:"Bạn bè",personality:"Năng động"},
  {name:"Voucher ăn uống 76",category:"Giáo dục",price:"200k–500k",receiver:"Người lớn tuổi",personality:"Thực tế"},
  {name:"Chuột không dây 22",category:"Thời trang",price:"<200k",receiver:"Người lớn tuổi",personality:"Công nghệ"},
  {name:"Hộp quà socola 21",category:"Thời trang",price:">1 triệu",receiver:"Bạn bè",personality:"Lãng mạn"},
  {name:"Bộ skincare mini 96",category:"Sở thích",price:"<200k",receiver:"Gia đình",personality:"Nhẹ nhàng"},
  {name:"Sách truyền cảm hứng 70",category:"Sức khỏe",price:"<200k",receiver:"Đồng nghiệp",personality:"Nhẹ nhàng"},
  {name:"Mô hình lắp ráp 73",category:"Sức khỏe",price:"<200k",receiver:"Gia đình",personality:"Sáng tạo"},
  {name:"Nến thơm cao cấp 34",category:"Đồ trang trí",price:">1 triệu",receiver:"Bạn bè",personality:"Nhẹ nhàng"},
  {name:"Mô hình lắp ráp 98",category:"Thời trang",price:">1 triệu",receiver:"Trẻ em",personality:"Sáng tạo"},
  {name:"Đèn ngủ đổi màu 81",category:"Sở thích",price:">1 triệu",receiver:"Người yêu",personality:"Nhẹ nhàng"},
  {name:"Bộ dụng cụ vẽ 23",category:"Giáo dục",price:"500k–1 triệu",receiver:"Gia đình",personality:"Sáng tạo"},
  {name:"Sổ tay da 24",category:"Giáo dục",price:"500k–1 triệu",receiver:"Gia đình",personality:"Thực tế"},
  {name:"Tai nghe Bluetooth 10",category:"Đồ trang trí",price:">1 triệu",receiver:"Đồng nghiệp",personality:"Công nghệ"},
  {name:"(...các món còn lại nếu có thể tiếp tục theo format trên...)",category:"",price:"",receiver:"",personality:""}
];

/* ---------- HỖ TRỢ TẠO PLACEHOLDER ẢNH ---------- */
function placeholderFor(name){
  // dùng via.placeholder và encode tên món
  const txt = encodeURIComponent(name.replace(/\s+/g, ' '));
  // kích thước 400x300, nền nhạt, chữ đậm
  return `https://via.placeholder.com/400x300.png?text=${txt}`;
}

/* ---------- LỌC ---------- */
function filterGifts() {
  const r = document.getElementById("receiver").value;
  const c = document.getElementById("category").value;
  const p = document.getElementById("price").value;
  const per = document.getElementById("personality").value;

  const results = gifts.filter(g =>
    (!r || (g.receiver || "").toString() === r) &&
    (!c || (g.category || "").toString() === c) &&
    (!p || (g.price || "").toString() === p) &&
    (!per || (g.personality || "").toString() === per)
  );

  render(results.slice(0, 12)); // hiển thị tối đa 12 item
}

/* ---------- RENDER (với ảnh) ---------- */
function render(list) {
  const el = document.getElementById("results");
  el.innerHTML = "";

  if (!list.length) {
    el.innerHTML = "<p>Không tìm thấy quà phù hợp 😢</p>";
    return;
  }

  list.forEach(g => {
    // nếu gift có g.img dùng nó, nếu không thì dùng placeholder sinh từ tên
    const imgUrl = g.img && g.img.trim() ? g.img : placeholderFor(g.name || 'Gift');
    el.innerHTML += `
      <div class="card">
        <div style="width:100%;height:160px;overflow:hidden;border-radius:12px;margin-bottom:10px;">
          <img src="${imgUrl}" alt="${escapeHtml(g.name)}"
               style="width:100%;height:100%;object-fit:cover;display:block;"
               loading="lazy"
               onerror="this.onerror=null;this.src='${placeholderFor('No+Image')}';">
        </div>
        <h3 style="margin:6px 0 4px;">${escapeHtml(g.name)}</h3>
        <p style="margin:4px 0">🎯 <strong>${escapeHtml(g.receiver)}</strong></p>
        <p style="margin:4px 0">📦 ${escapeHtml(g.category)}</p>
        <p style="margin:4px 0">💰 ${escapeHtml(g.price)}</p>
        <p style="margin:4px 0">💖 ${escapeHtml(g.personality || '')}</p>
      </div>
    `;
  });
}

/* helper */
function escapeHtml(s){
  if(!s && s!==0) return '';
  return String(s).replace(/[&<>"']/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'})[m]);
}

/* auto show on load */
document.addEventListener('DOMContentLoaded', () => {
  // show first 12 by default
  render(gifts.slice(0,12));
  // connect filter controls if needed (optional: add event listeners)
  const btn = document.querySelector('#filter button');
  if(btn) btn.addEventListener('click', filterGifts);
});
