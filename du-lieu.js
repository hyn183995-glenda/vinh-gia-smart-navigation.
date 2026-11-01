/* =====================================================================
   DỮ LIỆU CỦA HỆ THỐNG — đây là file DUY NHẤT cần sửa khi cập nhật.
   Chỉ ghi thông tin công khai của đơn vị, không ghi thông tin cá nhân.
   ===================================================================== */
window.DU_LIEU = {
  phienBan: "2.0",
  capNhat: "01/11/2026",
  tenHeThong: "Smart Navigation",
  donVi: "Trường TH & THCS Vĩnh Gia 2",
  xa: "Xã Vĩnh Gia, tỉnh An Giang",
  website: "http://thvathcsvg2.edu.vn",
  email: "c2vinhgia2.vinhgia@angiang.gov.vn",
  ngayHoc: [1, 2, 3, 4, 5],            // 1 = Thứ 2 ... 5 = Thứ 6
  hienDuLieuMau: true,                  // true = hiện cả điểm "mau: true"; false = chỉ hiện điểm đã xác minh

  /* ====== DẤU ẤN SÁNG KIẾN CÁ NHÂN — hãy điền thông tin của bạn ====== */
  sangKien: {
    ten: "Smart Navigation – Hệ thống dẫn đường số các trụ sở và địa điểm công trên địa bàn xã Vĩnh Gia",
    tacGia: "[Họ và tên tác giả]",
    chucVu: "[Chức vụ]",
    donVi: "Trường TH & THCS Vĩnh Gia 2",
    nam: "2026",
    mucTieu: "Giúp người dân, phụ huynh tìm đúng nơi, đúng đường, đúng thông tin chỉ bằng một lần quét mã QR.",
    diemMoi: [
      "Một bản đồ duy nhất cho 4 trụ sở nhà trường, đầy đủ chức năng, giờ học và liên hệ.",
      "Mở rộng được cho cơ quan, y tế, danh thắng của cả xã bằng danh mục sổ xuống.",
      "Không thu thập thông tin cá nhân, không cần máy chủ, miễn phí vận hành.",
      "Dữ liệu tách riêng, người kế nhiệm chỉ cần sửa một tệp để cập nhật."
    ],
    banQuyen: "Sáng kiến cá nhân. Mọi quyền thuộc về tác giả; khi sử dụng, sao chép hoặc phát triển tiếp cần ghi rõ nguồn."
  },

  gio: {
    thcs: { ten: "Cấp THCS",     sang: ["07:00", "11:15"], chieu: ["13:10", "17:20"], nghi: "Sáng 08h30–09h00 · Chiều 14h40–15h05" },
    th:   { ten: "Cấp Tiểu học", sang: ["07:15", "10:45"], chieu: ["13:30", "16:50"], nghi: "Sáng 08h30–09h00 · Chiều 14h40–15h05" }
  },

  /* Danh mục sổ xuống */
  nhom: {
    giaoduc:  { ten: "Trường học", icon: "🎓" },
    hanhchinh:{ ten: "Cơ quan hành chính", icon: "🏛️" },
    yte:      { ten: "Y tế", icon: "➕" },
    anninh:   { ten: "Biên phòng – An ninh", icon: "🛡️" },
    danhthang:{ ten: "Danh thắng & di tích", icon: "🌅" }
  },
  /* Loại đơn vị (màu và biểu tượng ghim) — mỗi loại thuộc 1 nhóm */
  loai: {
    chinh:      { ten: "Trụ sở chính", mau: "#c8921a", icon: "★", nhom: "giaoduc" },
    phanhieu:   { ten: "Phân hiệu",    mau: "#1f6fb2", icon: "◆", nhom: "giaoduc" },
    diemtruong: { ten: "Điểm trường",  mau: "#1c8a68", icon: "●", nhom: "giaoduc" },
    hanhchinh:  { ten: "Cơ quan",      mau: "#5b4bb7", icon: "▲", nhom: "hanhchinh" },
    yte:        { ten: "Y tế",         mau: "#c62839", icon: "✚", nhom: "yte" },
    anninh:     { ten: "Biên phòng",   mau: "#3d6b2e", icon: "⚑", nhom: "anninh" },
    danhthang:  { ten: "Danh thắng",   mau: "#d9631e", icon: "❖", nhom: "danhthang" }
  },

  /* mau: true  = thông tin/vị trí còn là mẫu hoặc gần đúng, cần xác minh */
  diem: [
    { id: "truong-chinh", loai: "chinh", ten: "Trường TH & THCS Vĩnh Gia 2 – Trụ sở chính", ngan: "Trụ sở chính",
      ap: "Vĩnh An", lat: 10.464404, lng: 104.876773, anh: "truong-chinh.jpg",
      maps: "https://maps.app.goo.gl/r1rM5LTdB6aQ973t7", khung: ["thcs", "th"], truc: null,
      capHoc: "Lớp 1 đến Lớp 9", quyMo: "khoảng 189 học sinh",
      chucNang: [
        "Trung tâm quản trị, điều hành thống nhất toàn bộ hoạt động của nhà trường.",
        "Nơi làm việc của Lãnh đạo trường (Hiệu trưởng, Phó Hiệu trưởng phụ trách).",
        "Đầu mối duy nhất quản lý con dấu pháp nhân, tài khoản ngân sách, kế toán và hồ sơ gốc.",
        "Có các phòng chức năng: Thư viện, phòng Tin học, phòng Thiết bị, phòng quản trị hành chính."
      ], luuY: "" },
    { id: "diem-vinh-thanh", loai: "diemtruong", ten: "Điểm trường Vĩnh Thành", ngan: "Vĩnh Thành",
      ap: "Vĩnh Thành", lat: 10.457341, lng: 104.839393, anh: "vinh-thanh.jpg",
      maps: "https://maps.app.goo.gl/P9JFvfozLazL7AMZ6", khung: ["th"], truc: "truong-chinh",
      capHoc: "Lớp 1 đến Lớp 5", quyMo: "khoảng 87 học sinh",
      chucNang: ["Địa điểm tổ chức lớp học Tiểu học khu vực ấp Vĩnh Thành.", "Do Trụ sở chính trực tiếp điều phối và quản lý."], luuY: "" },
    { id: "phan-hieu", loai: "phanhieu", ten: "Trường TH & THCS Vĩnh Gia 2 – Phân hiệu", ngan: "Phân hiệu",
      ap: "Ninh Phước", lat: 10.381456, lng: 104.884095, anh: "phan-hieu.jpg",
      maps: "https://maps.app.goo.gl/cy1N2mNbtEbkCmAg8", khung: ["th"], truc: "truong-chinh",
      capHoc: "Cấp Tiểu học (Lớp 1 đến Lớp 5)", quyMo: "khoảng 216 – 343 học sinh", khoangCach: "Cách Trụ sở chính hơn 15 km",
      chucNang: [
        "Dạy học và giáo dục cấp Tiểu học theo kế hoạch chung của nhà trường.",
        "Có 01 Phó Hiệu trưởng trực tiếp phụ trách, điều hành tại chỗ theo phân công của Hiệu trưởng.",
        "Trực tiếp quản lý học sinh, giáo viên, cơ sở vật chất và thiết bị dạy học tại phân hiệu.",
        "Có thư viện, phòng Tiếng Anh, phòng Tin học và các phòng học tiểu học."
      ], luuY: "Phân hiệu không có tư cách pháp nhân độc lập, không có con dấu hay tài khoản ngân hàng riêng. Việc cần con dấu, hồ sơ gốc xử lý tại Trụ sở chính." },
    { id: "diem-ninh-phuoc", loai: "diemtruong", ten: "Điểm trường Ninh Phước", ngan: "Ninh Phước",
      ap: "Ninh Phước", lat: 10.3646, lng: 104.870738, anh: "ninh-phuoc.jpg",
      maps: "https://maps.app.goo.gl/Cb5PaBJBbFT3pwJA6", khung: ["th"], truc: "phan-hieu",
      capHoc: "Lớp 1 đến Lớp 5", quyMo: "khoảng 107 học sinh",
      chucNang: ["Tổ chức các lớp học Tiểu học, giúp rút ngắn khoảng cách đi lại cho học sinh.", "Do Phân hiệu trực tiếp quản lý, không có bộ máy quản lý riêng."], luuY: "" },

    /* ----- Các địa điểm khác của xã (VỊ TRÍ GẦN ĐÚNG – cần xác minh và thay toạ độ thật) ----- */
    { id: "ubnd-xa", loai: "hanhchinh", ten: "Ủy ban nhân dân xã Vĩnh Gia", ngan: "UBND xã", mau: true,
      ap: "", lat: 10.4690, lng: 104.8580, anh: "", maps: "", truc: null,
      gioText: "Giờ hành chính (cần xác nhận)",
      chucNang: ["Tiếp nhận và giải quyết thủ tục hành chính cho người dân.", "Quản lý nhà nước trên địa bàn xã."], luuY: "" },
    { id: "tram-xa-qdy", loai: "yte", ten: "Trạm xá quân dân y Vĩnh Gia", ngan: "Trạm xá quân dân y", mau: true,
      ap: "", lat: 10.4560, lng: 104.8480, anh: "", maps: "", truc: null,
      gioText: "Cần xác nhận giờ khám",
      chucNang: ["Khám, chữa bệnh ban đầu cho người dân vùng biên giới.", "Kết hợp lực lượng quân y và y tế địa phương."], luuY: "" },
    { id: "don-bien-phong", loai: "anninh", ten: "Đồn Biên phòng Vĩnh Gia", ngan: "Đồn Biên phòng", mau: true,
      ap: "", lat: 10.4420, lng: 104.8930, anh: "", maps: "", truc: null,
      gioText: "Trực 24/24",
      chucNang: ["Bảo vệ chủ quyền, an ninh biên giới khu vực.", "Phối hợp cùng chính quyền và nhân dân giữ gìn trật tự địa bàn."], luuY: "" },
    { id: "kenh-vinh-te", loai: "danhthang", ten: "Kênh Vĩnh Tế", ngan: "Kênh Vĩnh Tế", mau: true,
      ap: "", lat: 10.4850, lng: 104.8300, anh: "", maps: "", truc: null,
      gioText: "Tham quan tự do",
      ke: "Công trình thủy lợi, giao thông và biên giới nổi tiếng của vùng Tây Nam Bộ, được đào từ năm 1819 đến 1824 dưới sự chỉ huy của Thoại Ngọc Hầu.",
      chucNang: ["Điểm tìm hiểu lịch sử khai phá vùng biên giới.", "Cảnh quan sông nước, thích hợp ngắm hoàng hôn."], luuY: "" }
  ],

  dichVu: [
    { ten: "Tuyển sinh đầu cấp (Lớp 1, Lớp 6)", mota: "Đăng ký trực tuyến toàn phần qua Cổng dịch vụ công hoặc ứng dụng VNeID.", online: true, tai: "all" },
    { ten: "Chuyển trường, cấp sao văn bằng/chứng chỉ, tra cứu Học bạ số", mota: "Thủ tục học đường thực hiện trực tuyến.", online: true, tai: "all" },
    { ten: "Tư vấn & hỗ trợ", mota: "Hỗ trợ tâm lý học đường; tư vấn chính sách hỗ trợ học sinh vùng biên giới, hoàn cảnh khó khăn.", online: false, tai: "all" },
    { ten: "Việc cần con dấu, hồ sơ gốc, kế toán", mota: "Làm việc trực tiếp với Ban Giám hiệu và bộ phận hành chính.", online: false, tai: ["truong-chinh"] }
  ]
};
