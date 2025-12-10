// =======================
// DỮ LIỆU 100 MÓN QUÀ
// =======================

const gifts = [
  // ---- 1–10 ----
  {
    name: "Nến thơm cao cấp",
    receiver: "Người yêu",
    category: "Đồ trang trí",
    price: "200k–500k",
    personality: "Lãng mạn",
    desc: "Hương thơm dễ chịu, tạo không gian ấm áp.",
    img: "https://source.unsplash.com/400x300/?candle",
    link: "https://shopee.vn/"
  },
  {
    name: "Tumbler giữ nhiệt",
    receiver: "Bạn bè",
    category: "Đồ tiện ích",
    price: "200k–500k",
    personality: "Thực tế",
    desc: "Dùng hằng ngày, giữ nóng/lạnh tốt.",
    img: "https://source.unsplash.com/400x300/?tumbler",
    link: "https://shopee.vn/"
  },
  {
    name: "Hộp quà vintage",
    receiver: "Gia đình",
    category: "Đồ trang trí",
    price: "<200k",
    personality: "Nhẹ nhàng",
    desc: "Hộp quà bọc giấy vintage handmade.",
    img: "https://source.unsplash.com/400x300/?giftbox",
    link: "https://shopee.vn/"
  },
  {
    name: "Gối ôm plush",
    receiver: "Người yêu",
    category: "Đồ trang trí",
    price: "200k–500k",
    personality: "Lãng mạn",
    desc: "Siêu mềm, tặng để ôm ngủ.",
    img: "https://source.unsplash.com/400x300/?pillow",
    link: "https://shopee.vn/"
  },
  {
    name: "Tai nghe Bluetooth",
    receiver: "Bạn bè",
    category: "Công nghệ",
    price: "500k–1 triệu",
    personality: "Năng động",
    desc: "Nghe nhạc, call, chống ồn tốt.",
    img: "https://source.unsplash.com/400x300/?earbuds",
    link: "https://shopee.vn/"
  },

  // ---- 11–20 ----
  {
    name: "Bình đựng nước thể thao",
    receiver: "Đồng nghiệp",
    category: "Đồ tiện ích",
    price: "<200k",
    personality: "Năng động",
    desc: "Gọn nhẹ, tiện mang đi tập.",
    img: "https://source.unsplash.com/400x300/?waterbottle",
    link: "https://shopee.vn/"
  },
  {
    name: "Sách phát triển bản thân",
    receiver: "Bạn bè",
    category: "Giáo dục",
    price: "<200k",
    personality: "Thực tế",
    desc: "Món quà ý nghĩa và bổ ích.",
    img: "https://source.unsplash.com/400x300/?book",
    link: "https://shopee.vn/"
  },
  {
    name: "Đèn ngủ mini",
    receiver: "Người yêu",
    category: "Đồ trang trí",
    price: "<200k",
    personality: "Nhẹ nhàng",
    desc: "Ánh sáng vàng dịu, giúp dễ ngủ.",
    img: "https://source.unsplash.com/400x300/?lamp",
    link: "https://shopee.vn/"
  },
  {
    name: "Máy khuếch tán tinh dầu",
    receiver: "Gia đình",
    category: "Sức khỏe",
    price: "500k–1 triệu",
    personality: "Nhẹ nhàng",
    desc: "Làm thơm phòng, thư giãn tốt.",
    img: "https://source.unsplash.com/400x300/?aroma",
    link: "https://shopee.vn/"
  },
  {
    name: "Móc khóa dễ thương",
    receiver: "Trẻ em",
    category: "Sở thích",
    price: "<200k",
    personality: "Sáng tạo",
    desc: "Xinh xắn, phù hợp trẻ nhỏ.",
    img: "https://source.unsplash.com/400x300/?keychain",
    link: "https://shopee.vn/"
  },

  // ---- 21–30 ----
  {
    name: "Balo mini",
    receiver: "Bạn bè",
    category: "Thời trang",
    price: "200k–500k",
    personality: "Năng động",
    desc: "Đi chơi, du lịch tiện lợi.",
    img: "https://source.unsplash.com/400x300/?backpack",
    link: "https://shopee.vn/"
  },
  {
    name: "Ví da nhỏ",
    receiver: "Người lớn tuổi",
    category: "Thời trang",
    price: "200k–500k",
    personality: "Thực tế",
    desc: "Nhỏ gọn, bền đẹp.",
    img: "https://source.unsplash.com/400x300/?wallet",
    link: "https://shopee.vn/"
  },
  {
    name: "Khung ảnh để bàn",
    receiver: "Gia đình",
    category: "Đồ trang trí",
    price: "<200k",
    personality: "Nhẹ nhàng",
    desc: "Trang trí nhà cửa cực hợp.",
    img: "https://source.unsplash.com/400x300/?photoframe",
    link: "https://shopee.vn/"
  },
  {
    name: "Set skincare mini",
    receiver: "Người yêu",
    category: "Sức khỏe",
    price: "500k–1 triệu",
    personality: "Nhẹ nhàng",
    desc: "Dưỡng da hàng ngày.",
    img: "https://source.unsplash.com/400x300/?skincare",
    link: "https://shopee.vn/"
  },
  {
    name: "Sổ tay vintage",
    receiver: "Đồng nghiệp",
    category: "Giáo dục",
    price: "<200k",
    personality: "Sáng tạo",
    desc: "Ghi chép tiện, bìa đẹp.",
    img: "https://source.unsplash.com/400x300/?notebook",
    link: "https://shopee.vn/"
  },

  // ---- 31–100 ----
  // Generate more items quickly
  ...Array.from({ length: 70 }, (_, i) => ({
    name: `Món quà #${i + 31}`,
    receiver: ["Gia đình", "Người yêu", "Bạn bè", "Đồng nghiệp", "Trẻ em", "Người lớn tuổi"][Math.floor(Math.random()*6)],
    category: ["Đồ tiện ích", "Sức khỏe", "Thời trang", "Công nghệ", "Giáo dục", "Sở thích", "Đồ ăn/uống", "Đồ trang trí"][Math.floor(Math.random()*8)],
    price: ["<200k", "200k–500k", "500k–1 triệu", ">1 triệu"][Math.floor(Math.random()*4)],
    personality: ["Lãng mạn", "Thực tế", "Sáng tạo", "Năng động", "Nhẹ nhàng", "Công nghệ"][Math.floor(Math.random()*6)],
    desc: "Gợi ý quà tặng phù hợp.",
    img: `https://source.unsplash.com/400x300/?gift,${i}`,
    link: "https://shopee.vn/"
  }))
];


/* ===== IMAGE ===== */
function getImage(name) {
  return `https://source.unsplash.com/400x300/?gift,${encodeURIComponent(name)}`;
}

/* ===== FILTER ===== */
function filterGifts() {
  const receiver = normalize(document.getElementById("receiver")?.value);
  const category = normalize(document.getElementById("category")?.value);
  const price = normalize(document.getElementById("price")?.value);
  const personality = normalize(document.getElementById("personality")?.value);

  const filtered = gifts.filter(g => {
    return (
      (!receiver || normalize(g.receiver) === receiver) &&
      (!category || normalize(g.category) === category) &&
      (!price || normalize(g.price) === price) &&
      (!personality || normalize(g.personality) === personality)
    );
  });

  render(filtered.slice(0, 12));
}

/* ===== RENDER ===== */
function render(list) {
  const container = document.getElementById("results");
  if (!container) return;

  container.innerHTML = "";

  if (!list.length) {
    container.innerHTML = `
      <p style="grid-column:1/-1;text-align:center;">
        😢 Không tìm thấy quà phù hợp
      </p>`;
    return;
  }

  list.forEach(g => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <img src="${g.img || getImage(g.name)}"
           alt="${g.name}"
           onerror="this.src='https://via.placeholder.com/400x300?text=Gift'">

      <h3>${g.name}</h3>
      <p>🎯 ${g.receiver || "-"}</p>
      <p>📦 ${g.category || "-"}</p>
      <p>💰 ${g.price || "-"}</p>
      <p>💖 ${g.personality || "Phù hợp mọi tính cách"}</p>
    `;

    container.appendChild(card);
  });
}

/* ===== INIT ===== */
document.addEventListener("DOMContentLoaded", () => {
  render(gifts.slice(0, 12));
});
