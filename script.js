/* script.js - GiftMatch
   - 100 items with personality + img (Unsplash dynamic)
   - Filters: receiver, category, price, personality
   - Auto-render on load and on change
*/

/* ---------------- DATA: 100 items ----------------
   Fields: name, category, price, receiver, personality, img
   Note: price uses '-' (200k-500k) to match HTML.
*/
const gifts = [
  {name:"Tai nghe Bluetooth", category:"Đồ tiện ích", price:">1 triệu", receiver:"Người lớn tuổi", personality:"Công nghệ", img:"https://source.unsplash.com/400x300/?bluetooth,headphones"},
  {name:"Sổ tay da", category:"Đồ tiện ích", price:">1 triệu", receiver:"Gia đình", personality:"Thực tế", img:"https://source.unsplash.com/400x300/?leather,notebook"},
  {name:"Nến thơm cao cấp", category:"Sức khỏe", price:"200k-500k", receiver:"Người lớn tuổi", personality:"Nhẹ nhàng", img:"https://source.unsplash.com/400x300/?scented,candle"},
  {name:"Bộ skincare mini", category:"Sức khỏe", price:">1 triệu", receiver:"Người lớn tuổi", personality:"Nhẹ nhàng", img:"https://source.unsplash.com/400x300/?skincare,mini"},
  {name:"Áo hoodie basic", category:"Đồ ăn/uống", price:"<200k", receiver:"Gia đình", personality:"Năng động", img:"https://source.unsplash.com/400x300/?hoodie"},
  {name:"Bình giữ nhiệt", category:"Thời trang", price:"500k-1 triệu", receiver:"Người yêu", personality:"Thực tế", img:"https://source.unsplash.com/400x300/?thermos,waterbottle"},
  {name:"Cốc in hình tuỳ chọn", category:"Công nghệ", price:"500k-1 triệu", receiver:"Đồng nghiệp", personality:"Sáng tạo", img:"https://source.unsplash.com/400x300/?custom,mug"},
  {name:"Mô hình lắp ráp", category:"Công nghệ", price:"<200k", receiver:"Bạn bè", personality:"Sáng tạo", img:"https://source.unsplash.com/400x300/?model,kit"},
  {name:"Hộp quà socola", category:"Giáo dục", price:"<200k", receiver:"Bạn bè", personality:"Lãng mạn", img:"https://source.unsplash.com/400x300/?chocolates,giftbox"},
  {name:"Voucher ăn uống", category:"Sở thích", price:">1 triệu", receiver:"Đồng nghiệp", personality:"Năng động", img:"https://source.unsplash.com/400x300/?giftvoucher,food"},

  {name:"Sách truyền cảm hứng", category:"Sở thích", price:"<200k", receiver:"Người yêu", personality:"Nhẹ nhàng", img:"https://source.unsplash.com/400x300/?inspirational,book"},
  {name:"Chuột không dây", category:"Công nghệ", price:"200k-500k", receiver:"Gia đình", personality:"Công nghệ", img:"https://source.unsplash.com/400x300/?wireless,mouse"},
  {name:"Bàn phím cơ mini", category:"Thời trang", price:">1 triệu", receiver:"Trẻ em", personality:"Công nghệ", img:"https://source.unsplash.com/400x300/?mechanical,keyboard"},
  {name:"Túi tote vải", category:"Đồ tiện ích", price:"<200k", receiver:"Bạn bè", personality:"Năng động", img:"https://source.unsplash.com/400x300/?tote,bag"},
  {name:"Bộ dụng cụ vẽ", category:"Giáo dục", price:"500k-1 triệu", receiver:"Người yêu", personality:"Sáng tạo", img:"https://source.unsplash.com/400x300/?art,kit"},
  {name:"Hộp nhạc gỗ", category:"Đồ tiện ích", price:"<200k", receiver:"Người yêu", personality:"Lãng mạn", img:"https://source.unsplash.com/400x300/?music,box"},
  {name:"Đèn ngủ đổi màu", category:"Giáo dục", price:"<200k", receiver:"Gia đình", personality:"Nhẹ nhàng", img:"https://source.unsplash.com/400x300/?colourful,nightlight"},
  {name:"Khung ảnh", category:"Sở thích", price:">1 triệu", receiver:"Đồng nghiệp", personality:"Lãng mạn", img:"https://source.unsplash.com/400x300/?photo,frame"},
  {name:"Combo trà thảo mộc", category:"Thời trang", price:">1 triệu", receiver:"Người yêu", personality:"Nhẹ nhàng", img:"https://source.unsplash.com/400x300/?herbal,tea"},
  {name:"Gối ôm plushy", category:"Đồ trang trí", price:">1 triệu", receiver:"Gia đình", personality:"Lãng mạn", img:"https://source.unsplash.com/400x300/?plush,pillow"},

  {name:"Nến thơm cao cấp 75", category:"Thời trang", price:"200k-500k", receiver:"Trẻ em", personality:"Nhẹ nhàng", img:"https://source.unsplash.com/400x300/?scented,candle"},
  {name:"Bộ skincare mini 20", category:"Sức khỏe", price:"500k-1 triệu", receiver:"Trẻ em", personality:"Nhẹ nhàng", img:"https://source.unsplash.com/400x300/?skincare,set"},
  {name:"Cốc in hình tuỳ chọn 89", category:"Thời trang", price:"200k-500k", receiver:"Trẻ em", personality:"Sáng tạo", img:"https://source.unsplash.com/400x300/?custom,mug"},
  {name:"Bàn phím cơ mini 39", category:"Sức khỏe", price:">1 triệu", receiver:"Trẻ em", personality:"Công nghệ", img:"https://source.unsplash.com/400x300/?keyboard,mini"},
  {name:"Sổ tay da 61", category:"Đồ tiện ích", price:">1 triệu", receiver:"Trẻ em", personality:"Thực tế", img:"https://source.unsplash.com/400x300/?leather,notebook"},

  {name:"Khung ảnh 63", category:"Thời trang", price:"500k-1 triệu", receiver:"Trẻ em", personality:"Lãng mạn", img:"https://source.unsplash.com/400x300/?photo,frame"},
  {name:"Chuột không dây 90", category:"Đồ ăn/uống", price:"200k-500k", receiver:"Đồng nghiệp", personality:"Công nghệ", img:"https://source.unsplash.com/400x300/?wireless,mouse"},
  {name:"Túi tote vải 4", category:"Sở thích", price:"200k-500k", receiver:"Người yêu", personality:"Năng động", img:"https://source.unsplash.com/400x300/?tote,bag"},
  {name:"Hộp nhạc gỗ 17", category:"Sức khỏe", price:"<200k", receiver:"Bạn bè", personality:"Lãng mạn", img:"https://source.unsplash.com/400x300/?music,box"},
  {name:"Sổ tay da 79", category:"Đồ trang trí", price:">1 triệu", receiver:"Người lớn tuổi", personality:"Thực tế", img:"https://source.unsplash.com/400x300/?leather,notebook"},

  {name:"Bộ dụng cụ vẽ 23", category:"Công nghệ", price:">1 triệu", receiver:"Đồng nghiệp", personality:"Sáng tạo", img:"https://source.unsplash.com/400x300/?art,tools"},
  {name:"Sổ tay da 29", category:"Sở thích", price:"500k-1 triệu", receiver:"Gia đình", personality:"Thực tế", img:"https://source.unsplash.com/400x300/?notebook,journal"},
  {name:"Chuột không dây 55", category:"Giáo dục", price:"500k-1 triệu", receiver:"Bạn bè", personality:"Công nghệ", img:"https://source.unsplash.com/400x300/?mouse,computer"},
  {name:"Áo hoodie basic 56", category:"Đồ trang trí", price:"200k-500k", receiver:"Người lớn tuổi", personality:"Năng động", img:"https://source.unsplash.com/400x300/?hoodie"},
  {name:"Bàn phím cơ mini 57", category:"Sở thích", price:"<200k", receiver:"Người lớn tuổi", personality:"Công nghệ", img:"https://source.unsplash.com/400x300/?keyboard"},

  {name:"Sổ tay da 49", category:"Sức khỏe", price:"500k-1 triệu", receiver:"Đồng nghiệp", personality:"Thực tế", img:"https://source.unsplash.com/400x300/?notebook"},
  {name:"Sổ tay da 73", category:"Đồ trang trí", price:"200k-500k", receiver:"Bạn bè", personality:"Thực tế", img:"https://source.unsplash.com/400x300/?notebook,diary"},
  {name:"Combo trà thảo mộc 77", category:"Đồ tiện ích", price:"500k-1 triệu", receiver:"Trẻ em", personality:"Nhẹ nhàng", img:"https://source.unsplash.com/400x300/?tea,herbal"},
  {name:"Sách truyền cảm hứng 34", category:"Sức khỏe", price:">1 triệu", receiver:"Trẻ em", personality:"Nhẹ nhàng", img:"https://source.unsplash.com/400x300/?book,inspiration"},
  {name:"Khung ảnh 81", category:"Đồ tiện ích", price:"500k-1 triệu", receiver:"Trẻ em", personality:"Lãng mạn", img:"https://source.unsplash.com/400x300/?photo,frame"},

  {name:"Khung ảnh 40", category:"Đồ ăn/uống", price:"<200k", receiver:"Trẻ em", personality:"Lãng mạn", img:"https://source.unsplash.com/400x300/?frame"},
  {name:"Bàn phím cơ mini 73", category:"Thời trang", price:"<200k", receiver:"Đồng nghiệp", personality:"Công nghệ", img:"https://source.unsplash.com/400x300/?keyboard,mini"},
  {name:"Hộp quà socola 55", category:"Sức khỏe", price:"<200k", receiver:"Người lớn tuổi", personality:"Lãng mạn", img:"https://source.unsplash.com/400x300/?chocolates"},
  {name:"Khung ảnh 11", category:"Sức khỏe", price:">1 triệu", receiver:"Người yêu", personality:"Lãng mạn", img:"https://source.unsplash.com/400x300/?frame,photo"},
  {name:"Đèn ngủ đổi màu 38", category:"Công nghệ", price:"200k-500k", receiver:"Bạn bè", personality:"Nhẹ nhàng", img:"https://source.unsplash.com/400x300/?lamp,ambient"},

  {name:"Voucher ăn uống 33", category:"Đồ tiện ích", price:">1 triệu", receiver:"Bạn bè", personality:"Năng động", img:"https://source.unsplash.com/400x300/?voucher,food"},
  {name:"Áo hoodie basic 83", category:"Thời trang", price:"200k-500k", receiver:"Bạn bè", personality:"Năng động", img:"https://source.unsplash.com/400x300/?hoodie,clothes"},
  {name:"Voucher ăn uống 76", category:"Giáo dục", price:"200k-500k", receiver:"Người lớn tuổi", personality:"Thực tế", img:"https://source.unsplash.com/400x300/?voucher"},
  {name:"Chuột không dây 22", category:"Thời trang", price:"<200k", receiver:"Người lớn tuổi", personality:"Công nghệ", img:"https://source.unsplash.com/400x300/?mouse"},
  {name:"Hộp quà socola 21", category:"Thời trang", price:">1 triệu", receiver:"Bạn bè", personality:"Lãng mạn", img:"https://source.unsplash.com/400x300/?luxury,chocolate"},

  {name:"Bộ skincare mini 96", category:"Sở thích", price:"<200k", receiver:"Gia đình", personality:"Nhẹ nhàng", img:"https://source.unsplash.com/400x300/?skincare,travel"},
  {name:"Sách truyền cảm hứng 70", category:"Sức khỏe", price:"<200k", receiver:"Đồng nghiệp", personality:"Nhẹ nhàng", img:"https://source.unsplash.com/400x300/?book"},
  {name:"Mô hình lắp ráp 73", category:"Sức khỏe", price:"<200k", receiver:"Gia đình", personality:"Sáng tạo", img:"https://source.unsplash.com/400x300/?model,kit"},
  {name:"Nến thơm cao cấp 34", category:"Đồ trang trí", price:">1 triệu", receiver:"Bạn bè", personality:"Nhẹ nhàng", img:"https://source.unsplash.com/400x300/?luxury,candle"},
  {name:"Mô hình lắp ráp 98", category:"Thời trang", price:">1 triệu", receiver:"Trẻ em", personality:"Sáng tạo", img:"https://source.unsplash.com/400x300/?model,collectible"},

  {name:"Đèn ngủ đổi màu 81", category:"Sở thích", price:">1 triệu", receiver:"Người yêu", personality:"Nhẹ nhàng", img:"https://source.unsplash.com/400x300/?lamp,colorful"},
  {name:"Bộ dụng cụ vẽ 23", category:"Giáo dục", price:"500k-1 triệu", receiver:"Gia đình", personality:"Sáng tạo", img:"https://source.unsplash.com/400x300/?art,kit"},
  {name:"Sổ tay da 24", category:"Giáo dục", price:"500k-1 triệu", receiver:"Gia đình", personality:"Thực tế", img:"https://source.unsplash.com/400x300/?journal"},
  {name:"Tai nghe Bluetooth 10", category:"Đồ trang trí", price:">1 triệu", receiver:"Đồng nghiệp", personality:"Công nghệ", img:"https://source.unsplash.com/400x300/?earphones"},
  {name:"Tai nghe Bluetooth 36", category:"Thời trang", price:"200k-500k", receiver:"Đồng nghiệp", personality:"Công nghệ", img:"https://source.unsplash.com/400x300/?headphones"},

  {name:"Bình giữ nhiệt 42", category:"Sức khỏe", price:"200k-500k", receiver:"Bạn bè", personality:"Thực tế", img:"https://source.unsplash.com/400x300/?waterbottle"},
  {name:"Cốc in hình tuỳ chọn 98", category:"Thời trang", price:"200k-500k", receiver:"Trẻ em", personality:"Sáng tạo", img:"https://source.unsplash.com/400x300/?mug,custom"},
  {name:"Sổ tay da 94", category:"Thời trang", price:"500k-1 triệu", receiver:"Gia đình", personality:"Thực tế", img:"https://source.unsplash.com/400x300/?notebook,leather"},
  {name:"Bình giữ nhiệt 97", category:"Công nghệ", price:">1 triệu", receiver:"Gia đình", personality:"Thực tế", img:"https://source.unsplash.com/400x300/?thermos"},
  {name:"Voucher ăn uống 56", category:"Đồ ăn/uống", price:">1 triệu", receiver:"Người yêu", personality:"Năng động", img:"https://source.unsplash.com/400x300/?dining,voucher"},

  {name:"Bộ dụng cụ vẽ 95", category:"Sở thích", price:"<200k", receiver:"Bạn bè", personality:"Sáng tạo", img:"https://source.unsplash.com/400x300/?drawing,kit"},
  {name:"Gối ôm plushy 89", category:"Đồ ăn/uống", price:"500k-1 triệu", receiver:"Gia đình", personality:"Lãng mạn", img:"https://source.unsplash.com/400x300/?pillow,plush"},
  {name:"Túi tote vải 12", category:"Sở thích", price:">1 triệu", receiver:"Trẻ em", personality:"Năng động", img:"https://source.unsplash.com/400x300/?tote,bag"},
  {name:"Bộ dụng cụ vẽ 50", category:"Sở thích", price:">1 triệu", receiver:"Trẻ em", personality:"Sáng tạo", img:"https://source.unsplash.com/400x300/?art,set"},
  {name:"Gối ôm plushy 23", category:"Đồ tiện ích", price:"200k-500k", receiver:"Đồng nghiệp", personality:"Lãng mạn", img:"https://source.unsplash.com/400x300/?plush,pillow"},

  {name:"Bàn phím cơ mini 90", category:"Sở thích", price:"200k-500k", receiver:"Gia đình", personality:"Công nghệ", img:"https://source.unsplash.com/400x300/?keyboard,mini"},
  {name:"Cốc in hình tuỳ chọn 44", category:"Đồ tiện ích", price:"200k-500k", receiver:"Đồng nghiệp", personality:"Sáng tạo", img:"https://source.unsplash.com/400x300/?custom,mug"},
  {name:"Cốc in hình tuỳ chọn 59", category:"Sức khỏe", price:">1 triệu", receiver:"Trẻ em", personality:"Sáng tạo", img:"https://source.unsplash.com/400x300/?mug,design"},
  {name:"Hộp nhạc gỗ 71", category:"Đồ ăn/uống", price:"200k-500k", receiver:"Người yêu", personality:"Lãng mạn", img:"https://source.unsplash.com/400x300/?music,box"},
  {name:"Gối ôm plushy 34", category:"Công nghệ", price:"500k-1 triệu", receiver:"Bạn bè", personality:"Lãng mạn", img:"https://source.unsplash.com/400x300/?pillow"},

  {name:"Hộp quà socola 75", category:"Giáo dục", price:"200k-500k", receiver:"Người lớn tuổi", personality:"Lãng mạn", img:"https://source.unsplash.com/400x300/?chocolate,gift"},
  {name:"Túi tote vải 31", category:"Công nghệ", price:"500k-1 triệu", receiver:"Bạn bè", personality:"Năng động", img:"https://source.unsplash.com/400x300/?tote"},
  {name:"Áo hoodie basic 44", category:"Đồ trang trí", price:"500k-1 triệu", receiver:"Người lớn tuổi", personality:"Năng động", img:"https://source.unsplash.com/400x300/?hoodie"},
  {name:"Sổ tay da 22", category:"Đồ tiện ích", price:"200k-500k", receiver:"Người yêu", personality:"Thực tế", img:"https://source.unsplash.com/400x300/?journal,leather"},
  {name:"Chuột không dây 41", category:"Sở thích", price:"200k-500k", receiver:"Gia đình", personality:"Công nghệ", img:"https://source.unsplash.com/400x300/?mouse,wireless"},

  {name:"Nến thơm cao cấp 44", category:"Đồ tiện ích", price:"500k-1 triệu", receiver:"Người lớn tuổi", personality:"Nhẹ nhàng", img:"https://source.unsplash.com/400x300/?candle,luxury"},
  {name:"Combo trà thảo mộc 13", category:"Giáo dục", price:"200k-500k", receiver:"Gia đình", personality:"Nhẹ nhàng", img:"https://source.unsplash.com/400x300/?tea,herbs"},
  {name:"Combo trà thảo mộc 51", category:"Đồ tiện ích", price:">1 triệu", receiver:"Bạn bè", personality:"Nhẹ nhàng", img:"https://source.unsplash.com/400x300/?tea,box"},
  {name:"Nến thơm cao cấp 94", category:"Sức khỏe", price:"500k-1 triệu", receiver:"Người lớn tuổi", personality:"Nhẹ nhàng", img:"https://source.unsplash.com/400x300/?candle"},
  {name:"Sổ tay da 31", category:"Đồ ăn/uống", price:"200k-500k", receiver:"Đồng nghiệp", personality:"Thực tế", img:"https://source.unsplash.com/400x300/?notebook"},

  {name:"Gối ôm plushy 28", category:"Đồ tiện ích", price:"200k-500k", receiver:"Đồng nghiệp", personality:"Lãng mạn", img:"https://source.unsplash.com/400x300/?plush"},
  {name:"Gối ôm plushy 92", category:"Sức khỏe", price:"<200k", receiver:"Người yêu", personality:"Lãng mạn", img:"https://source.unsplash.com/400x300/?pillow,soft"},
  {name:"Combo trà thảo mộc 54", category:"Giáo dục", price:"<200k", receiver:"Gia đình", personality:"Nhẹ nhàng", img:"https://source.unsplash.com/400x300/?tea"},
  {name:"Bộ dụng cụ vẽ 88", category:"Thời trang", price:"200k-500k", receiver:"Người yêu", personality:"Sáng tạo", img:"https://source.unsplash.com/400x300/?art,tools"},
  {name:"Túi tote vải 28", category:"Đồ ăn/uống", price:">1 triệu", receiver:"Gia đình", personality:"Năng động", img:"https://source.unsplash.com/400x300/?tote,bag"},

  {name:"Cốc in hình tuỳ chọn 2", category:"Công nghệ", price:"500k-1 triệu", receiver:"Người lớn tuổi", personality:"Sáng tạo", img:"https://source.unsplash.com/400x300/?mug"},
  {name:"Bàn phím cơ mini 10", category:"Giáo dục", price:">1 triệu", receiver:"Đồng nghiệp", personality:"Công nghệ", img:"https://source.unsplash.com/400x300/?keyboard"},
  {name:"Tai nghe Bluetooth 92", category:"Đồ ăn/uống", price:"<200k", receiver:"Gia đình", personality:"Công nghệ", img:"https://source.unsplash.com/400x300/?earbuds"},
  {name:"Gối ôm plushy 77", category:"Sở thích", price:"<200k", receiver:"Đồng nghiệp", personality:"Lãng mạn", img:"https://source.unsplash.com/400x300/?plush"},
  {name:"Bàn phím cơ mini 77", category:"Công nghệ", price:">1 triệu", receiver:"Người yêu", personality:"Công nghệ", img:"https://source.unsplash.com/400x300/?mechanical,keyboard"},

  {name:"Bộ dụng cụ vẽ 50", category:"Sở thích", price:"500k-1 triệu", receiver:"Đồng nghiệp", personality:"Sáng tạo", img:"https://source.unsplash.com/400x300/?art,set"},
  {name:"Khung ảnh 32", category:"Đồ trang trí", price:"200k-500k", receiver:"Đồng nghiệp", personality:"Lãng mạn", img:"https://source.unsplash.com/400x300/?frame"},
  {name:"Áo hoodie basic 17", category:"Thời trang", price:"200k-500k", receiver:"Người lớn tuổi", personality:"Năng động", img:"https://source.unsplash.com/400x300/?hoodie"},
  {name:"Voucher ăn uống 84", category:"Thời trang", price:"200k-500k", receiver:"Đồng nghiệp", personality:"Năng động", img:"https://source.unsplash.com/400x300/?food,voucher"},
  {name:"Khung ảnh 64", category:"Thời trang", price:"500k-1 triệu", receiver:"Trẻ em", personality:"Lãng mạn", img:"https://source.unsplash.com/400x300/?photo,frame"}
];

/* ---------- helper: normalize user & data values ---------- */
function normalize(v){
  if(!v && v !== 0) return "";
  return String(v).replace(/\u2013/g,'-').replace(/\u2014/g,'-').trim();
}

/* ---------- image fallback ---------- */
function safeImageUrl(url, name){
  if(url && url.trim()) return url;
  // fallback to Unsplash query by name; encoded
  return `https://source.unsplash.com/400x300/?${encodeURIComponent(name)}`;
}

/* ---------- render ---------- */
function renderGifts(list){
  const container = document.getElementById('results');
  if(!container) return;
  container.innerHTML = "";
  if(!list || list.length === 0){
    container.innerHTML = `<p style="grid-column:1/-1;text-align:center;color:#777">Không tìm thấy món quà phù hợp 😢</p>`;
    return;
  }

  list.forEach(item=>{
    const img = safeImageUrl(item.img, item.name);
    container.innerHTML += `
      <div class="card">
        <img src="${img}" alt="${escapeHtml(item.name)}" loading="lazy" onerror="this.onerror=null;this.src='https://via.placeholder.com/400x300?text=No+Image'"/>
        <h3>${escapeHtml(item.name)}</h3>
        <p>👤 ${escapeHtml(item.receiver || '')}</p>
        <p>🏷️ ${escapeHtml(item.category || '')}</p>
        <p>💰 ${escapeHtml(item.price || '')}</p>
        <p>💖 ${escapeHtml(item.personality || '')}</p>
      </div>
    `;
  });
}

/* ---------- filter logic ---------- */
function filterGifts(){
  const r = normalize(document.getElementById('receiver')?.value);
  const c = normalize(document.getElementById('category')?.value);
  const p = normalize(document.getElementById('price')?.value);
  const per = normalize(document.getElementById('personality')?.value);

  const filtered = gifts.filter(g=>{
    const gn = normalize(g.name);
    const gr = normalize(g.receiver);
    const gc = normalize(g.category);
    const gp = normalize(g.price);
    const gper = normalize(g.personality);

    return (
      (!r || gr === r) &&
      (!c || gc === c) &&
      (!p || gp === p) &&
      (!per || gper === per)
    );
  });

  renderGifts(filtered);
}

/* ---------- escape helper ---------- */
function escapeHtml(s){
  if(s === null || s === undefined) return "";
  return String(s).replace(/[&<>"']/g, m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'})[m]);
}

/* ---------- init: render default + attach listeners ---------- */
document.addEventListener('DOMContentLoaded', ()=>{
  // ensure price values in HTML match normalized values: replace en-dash if present
  const priceSelect = document.getElementById('price');
  if(priceSelect){
    [...priceSelect.options].forEach(opt=>{
      if(opt.value && opt.value.includes('–')) opt.value = opt.value.replace(/\u2013/g,'-');
      if(opt.text && opt.text.includes('–')) opt.text = opt.text.replace(/\u2013/g,'-');
    });
  }

  renderGifts(gifts);

  // live update when selects change
  const controls = ['receiver','category','price','personality'];
  controls.forEach(id=>{
    const el = document.getElementById(id);
    if(el) el.addEventListener('change', filterGifts);
  });

  // also keep the button (if exists) to force filter
  const btn = document.querySelector('#filter button');
  if(btn) btn.addEventListener('click', filterGifts);
});
