/* script.js - GiftMatch
   - 100 items with personality + img (Unsplash dynamic)
   - Filters: receiver, category, price, personality
   - Auto-render on load and on change
*/

/* ---------------- DATA: 100 items ----------------
   Fields: name, category, price, receiver, personality, img
   Note: price uses '-' (200k-500k) to match HTML.
*/
const IMAGE =
"https://cdn-jidif.nitrocdn.com/wCwGAAqIRuzTlLHXLfIRIHwpuTczfvVQ/assets/images/optimized/rev-46c7a40/i0.wp.com/www.thank-you-note-samples.com/wp-content/uploads/2019/12/171e51e3cefe0c5637c3abfda5b98ca6.anniversary-birthday-blue-bow-264787.jpg";
const gifts = [
  {name:"Tai nghe Bluetooth", category:"Đồ tiện ích", price:">1 triệu", receiver:"Người lớn tuổi", personality:"Công nghệ", img:IMAGE},
  {name:"Sổ tay da", category:"Đồ tiện ích", price:">1 triệu", receiver:"Gia đình", personality:"Thực tế", img:IMAGE},
  {name:"Nến thơm cao cấp", category:"Sức khỏe", price:"200k-500k", receiver:"Người lớn tuổi", personality:"Nhẹ nhàng", img:IMAGE},
  {name:"Bộ skincare mini", category:"Sức khỏe", price:">1 triệu", receiver:"Người lớn tuổi", personality:"Nhẹ nhàng", img:IMAGE},
  {name:"Áo hoodie basic", category:"Đồ ăn/uống", price:"<200k", receiver:"Gia đình", personality:"Năng động", img:IMAGE},
  {name:"Bình giữ nhiệt", category:"Thời trang", price:"500k-1 triệu", receiver:"Người yêu", personality:"Thực tế", img:IMAGE},
  {name:"Cốc in hình tuỳ chọn", category:"Công nghệ", price:"500k-1 triệu", receiver:"Đồng nghiệp", personality:"Sáng tạo", img:IMAGE},
  {name:"Mô hình lắp ráp", category:"Công nghệ", price:"<200k", receiver:"Bạn bè", personality:"Sáng tạo", img:IMAGE},
  {name:"Hộp quà socola", category:"Giáo dục", price:"<200k", receiver:"Bạn bè", personality:"Lãng mạn", img:IMAGE},
  {name:"Voucher ăn uống", category:"Sở thích", price:">1 triệu", receiver:"Đồng nghiệp", personality:"Năng động", img:IMAGE},

  {name:"Sách truyền cảm hứng", category:"Sở thích", price:"<200k", receiver:"Người yêu", personality:"Nhẹ nhàng", img:IMAGE},
  {name:"Chuột không dây", category:"Công nghệ", price:"200k-500k", receiver:"Gia đình", personality:"Công nghệ", img:IMAGE},
  {name:"Bàn phím cơ mini", category:"Thời trang", price:">1 triệu", receiver:"Trẻ em", personality:"Công nghệ", img:IMAGE},
  {name:"Túi tote vải", category:"Đồ tiện ích", price:"<200k", receiver:"Bạn bè", personality:"Năng động", img:IMAGE},
  {name:"Bộ dụng cụ vẽ", category:"Giáo dục", price:"500k-1 triệu", receiver:"Người yêu", personality:"Sáng tạo", img:IMAGE},
  {name:"Hộp nhạc gỗ", category:"Đồ tiện ích", price:"<200k", receiver:"Người yêu", personality:"Lãng mạn", img:IMAGE},
  {name:"Đèn ngủ đổi màu", category:"Giáo dục", price:"<200k", receiver:"Gia đình", personality:"Nhẹ nhàng", img:IMAGE},
  {name:"Khung ảnh", category:"Sở thích", price:">1 triệu", receiver:"Đồng nghiệp", personality:"Lãng mạn", img:IMAGE},
  {name:"Combo trà thảo mộc", category:"Thời trang", price:">1 triệu", receiver:"Người yêu", personality:"Nhẹ nhàng", img:IMAGE},
  {name:"Gối ôm plushy", category:"Đồ trang trí", price:">1 triệu", receiver:"Gia đình", personality:"Lãng mạn", img:IMAGE},

  {name:"Nến thơm cao cấp", category:"Thời trang", price:"200k-500k", receiver:"Trẻ em", personality:"Nhẹ nhàng", img:IMAGE},
{name:"Bộ skincare mini", category:"Sức khỏe", price:"500k-1 triệu", receiver:"Trẻ em", personality:"Nhẹ nhàng", img:IMAGE},
{name:"Cốc in hình tuỳ chọn", category:"Thời trang", price:"200k-500k", receiver:"Trẻ em", personality:"Sáng tạo", img:IMAGE},
{name:"Bàn phím cơ mini", category:"Sức khỏe", price:">1 triệu", receiver:"Trẻ em", personality:"Công nghệ", img:IMAGE},
{name:"Sổ tay da", category:"Đồ tiện ích", price:">1 triệu", receiver:"Trẻ em", personality:"Thực tế", img:IMAGE},

{name:"Khung ảnh", category:"Thời trang", price:"500k-1 triệu", receiver:"Trẻ em", personality:"Lãng mạn", img:IMAGE},
{name:"Chuột không dây", category:"Đồ ăn/uống", price:"200k-500k", receiver:"Đồng nghiệp", personality:"Công nghệ", img:IMAGE},
{name:"Túi tote vải", category:"Sở thích", price:"200k-500k", receiver:"Người yêu", personality:"Năng động", img:IMAGE},
{name:"Hộp nhạc gỗ", category:"Sức khỏe", price:"<200k", receiver:"Bạn bè", personality:"Lãng mạn", img:IMAGE},
{name:"Sổ tay da", category:"Đồ trang trí", price:">1 triệu", receiver:"Người lớn tuổi", personality:"Thực tế", img:IMAGE},

{name:"Bộ dụng cụ vẽ", category:"Công nghệ", price:">1 triệu", receiver:"Đồng nghiệp", personality:"Sáng tạo", img:IMAGE},
{name:"Sổ tay da", category:"Sở thích", price:"500k-1 triệu", receiver:"Gia đình", personality:"Thực tế", img:IMAGE},
{name:"Chuột không dây", category:"Giáo dục", price:"500k-1 triệu", receiver:"Bạn bè", personality:"Công nghệ", img:IMAGE},
{name:"Áo hoodie basic", category:"Đồ trang trí", price:"200k-500k", receiver:"Người lớn tuổi", personality:"Năng động", img:IMAGE},
{name:"Bàn phím cơ mini", category:"Sở thích", price:"<200k", receiver:"Người lớn tuổi", personality:"Công nghệ", img:IMAGE},

{name:"Sổ tay da", category:"Sức khỏe", price:"500k-1 triệu", receiver:"Đồng nghiệp", personality:"Thực tế", img:IMAGE},
{name:"Sổ tay da", category:"Đồ trang trí", price:"200k-500k", receiver:"Bạn bè", personality:"Thực tế", img:IMAGE},
{name:"Combo trà thảo mộc", category:"Đồ tiện ích", price:"500k-1 triệu", receiver:"Trẻ em", personality:"Nhẹ nhàng", img:IMAGE},
{name:"Sách truyền cảm hứng", category:"Sức khỏe", price:">1 triệu", receiver:"Trẻ em", personality:"Nhẹ nhàng", img:IMAGE},
{name:"Khung ảnh", category:"Đồ tiện ích", price:"500k-1 triệu", receiver:"Trẻ em", personality:"Lãng mạn", img:IMAGE},

 {name:"Khung ảnh", category:"Đồ ăn/uống", price:"<200k", receiver:"Trẻ em", personality:"Lãng mạn", img:IMAGE},
  {name:"Bàn phím cơ mini", category:"Thời trang", price:"<200k", receiver:"Đồng nghiệp", personality:"Công nghệ", img:IMAGE},
  {name:"Hộp quà socola", category:"Sức khỏe", price:"<200k", receiver:"Người lớn tuổi", personality:"Lãng mạn", img:IMAGE},
  {name:"Khung ảnh", category:"Sức khỏe", price:">1 triệu", receiver:"Người yêu", personality:"Lãng mạn", img:IMAGE},
  {name:"Đèn ngủ đổi màu", category:"Công nghệ", price:"200k-500k", receiver:"Bạn bè", personality:"Nhẹ nhàng", img:IMAGE},

  {name:"Voucher ăn uống", category:"Đồ tiện ích", price:">1 triệu", receiver:"Bạn bè", personality:"Năng động", img:IMAGE},
  {name:"Áo hoodie basic", category:"Thời trang", price:"200k-500k", receiver:"Bạn bè", personality:"Năng động", img:IMAGE},
  {name:"Voucher ăn uống", category:"Giáo dục", price:"200k-500k", receiver:"Người lớn tuổi", personality:"Thực tế", img:IMAGE},
  {name:"Chuột không dây", category:"Thời trang", price:"<200k", receiver:"Người lớn tuổi", personality:"Công nghệ", img:IMAGE},
  {name:"Hộp quà socola", category:"Thời trang", price:">1 triệu", receiver:"Bạn bè", personality:"Lãng mạn", img:IMAGE},

  {name:"Bộ skincare mini", category:"Sở thích", price:"<200k", receiver:"Gia đình", personality:"Nhẹ nhàng", img:IMAGE},
  {name:"Sách truyền cảm hứng", category:"Sức khỏe", price:"<200k", receiver:"Đồng nghiệp", personality:"Nhẹ nhàng", img:IMAGE},
  {name:"Mô hình lắp ráp", category:"Sức khỏe", price:"<200k", receiver:"Gia đình", personality:"Sáng tạo", img:IMAGE},
  {name:"Nến thơm cao cấp", category:"Đồ trang trí", price:">1 triệu", receiver:"Bạn bè", personality:"Nhẹ nhàng", img:IMAGE},
  {name:"Mô hình lắp ráp", category:"Thời trang", price:">1 triệu", receiver:"Trẻ em", personality:"Sáng tạo", img:IMAGE},

  {name:"Đèn ngủ đổi màu", category:"Sở thích", price:">1 triệu", receiver:"Người yêu", personality:"Nhẹ nhàng", img:IMAGE},
  {name:"Bộ dụng cụ vẽ", category:"Giáo dục", price:"500k-1 triệu", receiver:"Gia đình", personality:"Sáng tạo", img:IMAGE},
  {name:"Sổ tay da", category:"Giáo dục", price:"500k-1 triệu", receiver:"Gia đình", personality:"Thực tế", img:IMAGE},
  {name:"Tai nghe Bluetooth", category:"Đồ trang trí", price:">1 triệu", receiver:"Đồng nghiệp", personality:"Công nghệ", img:IMAGE},
  {name:"Tai nghe Bluetooth", category:"Thời trang", price:"200k-500k", receiver:"Đồng nghiệp", personality:"Công nghệ", img:IMAGE},

  {name:"Bình giữ nhiệt", category:"Sức khỏe", price:"200k-500k", receiver:"Bạn bè", personality:"Thực tế", img:IMAGE},
  {name:"Cốc in hình tuỳ chọn", category:"Thời trang", price:"200k-500k", receiver:"Trẻ em", personality:"Sáng tạo", img:IMAGE},
  {name:"Sổ tay da", category:"Thời trang", price:"500k-1 triệu", receiver:"Gia đình", personality:"Thực tế", img:IMAGE},
  {name:"Bình giữ nhiệt", category:"Công nghệ", price:">1 triệu", receiver:"Gia đình", personality:"Thực tế", img:IMAGE},
  {name:"Voucher ăn uống", category:"Đồ ăn/uống", price:">1 triệu", receiver:"Người yêu", personality:"Năng động", img:IMAGE},

  {name:"Bộ dụng cụ vẽ 95", category:"Sở thích", price:"<200k", receiver:"Bạn bè", personality:"Sáng tạo", img:IMAGE},
  {name:"Gối ôm plushy 89", category:"Đồ ăn/uống", price:"500k-1 triệu", receiver:"Gia đình", personality:"Lãng mạn", img:IMAGE},
  {name:"Túi tote vải 12", category:"Sở thích", price:">1 triệu", receiver:"Trẻ em", personality:"Năng động", img:IMAGE},
  {name:"Bộ dụng cụ vẽ 50", category:"Sở thích", price:">1 triệu", receiver:"Trẻ em", personality:"Sáng tạo", img:IMAGE},
  {name:"Gối ôm plushy 23", category:"Đồ tiện ích", price:"200k-500k", receiver:"Đồng nghiệp", personality:"Lãng mạn", img:IMAGE},

  {name:"Bàn phím cơ mini 90", category:"Sở thích", price:"200k-500k", receiver:"Gia đình", personality:"Công nghệ", img:IMAGE},
  {name:"Cốc in hình tuỳ chọn 44", category:"Đồ tiện ích", price:"200k-500k", receiver:"Đồng nghiệp", personality:"Sáng tạo", img:IMAGE},
  {name:"Cốc in hình tuỳ chọn 59", category:"Sức khỏe", price:">1 triệu", receiver:"Trẻ em", personality:"Sáng tạo", img:IMAGE},
  {name:"Hộp nhạc gỗ 71", category:"Đồ ăn/uống", price:"200k-500k", receiver:"Người yêu", personality:"Lãng mạn", img:IMAGE},
  {name:"Gối ôm plushy 34", category:"Công nghệ", price:"500k-1 triệu", receiver:"Bạn bè", personality:"Lãng mạn", img:IMAGE},

  {name:"Hộp quà socola 75", category:"Giáo dục", price:"200k-500k", receiver:"Người lớn tuổi", personality:"Lãng mạn", img:IMAGE},
  {name:"Túi tote vải 31", category:"Công nghệ", price:"500k-1 triệu", receiver:"Bạn bè", personality:"Năng động", img:IMAGE},
  {name:"Áo hoodie basic 44", category:"Đồ trang trí", price:"500k-1 triệu", receiver:"Người lớn tuổi", personality:"Năng động", img:IMAGE},
  {name:"Sổ tay da 22", category:"Đồ tiện ích", price:"200k-500k", receiver:"Người yêu", personality:"Thực tế", img:IMAGE},
  {name:"Chuột không dây 41", category:"Sở thích", price:"200k-500k", receiver:"Gia đình", personality:"Công nghệ", img:IMAGE},
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
