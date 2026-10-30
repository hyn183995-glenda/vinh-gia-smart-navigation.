/* =====================================================================
   DỮ LIỆU CỦA HỆ THỐNG — đây là file DUY NHẤT cần sửa khi cập nhật.
   Không lưu thông tin cá nhân (tên học sinh, số CCCD, SĐT cá nhân...).
   Chỉ ghi thông tin công khai của đơn vị.
   ===================================================================== */
window.DU_LIEU = {
  phienBan: "1.0",
  capNhat: "30/10/2026",
  tenHeThong: "Smart Navigation",
  donVi: "Trường TH & THCS Vĩnh Gia 2",
  xa: "Xã Vĩnh Gia, tỉnh An Giang",
  nguoiPhuTrach: "Ghi tên bộ phận phụ trách cập nhật (không ghi SĐT cá nhân)",
  website: "http://thvathcsvg2.edu.vn",
  email: "c2vinhgia2.vinhgia@angiang.gov.vn",
  ngayHoc: [1, 2, 3, 4, 5],           // 1 = Thứ 2 ... 5 = Thứ 6 (chỉnh nếu khác)

  /* Khung giờ: dùng để tự báo "Đang trong giờ học / Ngoài giờ" */
  gio: {
    thcs: { ten: "Cấp THCS",    sang: ["07:00", "11:15"], chieu: ["13:10", "17:20"], nghi: "Sáng 08h30–09h00 · Chiều 14h40–15h05" },
    th:   { ten: "Cấp Tiểu học", sang: ["07:15", "10:45"], chieu: ["13:30", "16:50"], nghi: "Sáng 08h30–09h00 · Chiều 14h40–15h05" }
  },

  /* Loại đơn vị. Muốn mở rộng cho cả xã (UBND, trạm y tế...) chỉ cần thêm loại mới */
  loai: {
    chinh:      { ten: "Trụ sở chính", mau: "#c8921a", icon: "★" },
    phanhieu:   { ten: "Phân hiệu",    mau: "#1f6fb2", icon: "◆" },
    diemtruong: { ten: "Điểm trường",  mau: "#1c8a68", icon: "●" }
  },

  /* Các điểm trên bản đồ. truc = id của đơn vị quản lý trực tiếp */
  diem: [
    { id: "truong-chinh", loai: "chinh", ten: "Trường TH & THCS Vĩnh Gia 2 – Trụ sở chính", ngan: "Trụ sở chính",
      ap: "Vĩnh An", lat: 10.464404, lng: 104.876773, anh: "anh/truong-chinh.jpg",
      maps: "https://maps.app.goo.gl/r1rM5LTdB6aQ973t7", khung: ["thcs", "th"], truc: null,
      capHoc: "Lớp 1 đến Lớp 9", quyMo: "khoảng 189 học sinh",
      chucNang: [
        "Trung tâm quản trị, điều hành thống nhất toàn bộ hoạt động chuyên môn, hành chính, nhân sự của nhà trường.",
        "Nơi đặt trụ sở làm việc của Lãnh đạo trường (Hiệu trưởng, Phó Hiệu trưởng phụ trách).",
        "Đầu mối duy nhất quản lý con dấu pháp nhân, tài khoản ngân sách, kế toán, hồ sơ gốc và cơ sở dữ liệu chung.",
        "Có các phòng chức năng: Thư viện, phòng Tin học, phòng Thiết bị và các phòng quản trị hành chính."
      ], luuY: "" },

    { id: "diem-vinh-thanh", loai: "diemtruong", ten: "Điểm trường Vĩnh Thành", ngan: "Vĩnh Thành",
      ap: "Vĩnh Thành", lat: 10.457341, lng: 104.839393, anh: "anh/vinh-thanh.jpg",
      maps: "https://maps.app.goo.gl/P9JFvfozLazL7AMZ6", khung: ["th"], truc: "truong-chinh",
      capHoc: "Lớp 1 đến Lớp 5", quyMo: "khoảng 87 học sinh",
      chucNang: [
        "Địa điểm tổ chức lớp học Tiểu học khu vực ấp Vĩnh Thành.",
        "Do Trụ sở chính trực tiếp điều phối và quản lý."
      ], luuY: "" },

    { id: "phan-hieu", loai: "phanhieu", ten: "Trường TH & THCS Vĩnh Gia 2 – Phân hiệu", ngan: "Phân hiệu",
      ap: "Ninh Phước", lat: 10.381456, lng: 104.884095, anh: "anh/phan-hieu.jpg",
      maps: "https://maps.app.goo.gl/cy1N2mNbtEbkCmAg8", khung: ["th"], truc: "truong-chinh",
      capHoc: "Cấp Tiểu học (Lớp 1 đến Lớp 5)", quyMo: "khoảng 216 – 343 học sinh",
      khoangCach: "Cách Trụ sở chính hơn 15 km",
      chucNang: [
        "Dạy học và giáo dục cấp Tiểu học theo kế hoạch chung của nhà trường.",
        "Có 01 Phó Hiệu trưởng trực tiếp phụ trách, điều hành hoạt động tại chỗ theo phân công của Hiệu trưởng.",
        "Trực tiếp quản lý học sinh, giáo viên, cơ sở vật chất và thiết bị dạy học tại phân hiệu.",
        "Có thư viện, phòng Tiếng Anh, phòng Tin học và các phòng học tiểu học."
      ], luuY: "Phân hiệu không có tư cách pháp nhân độc lập, không có con dấu hay tài khoản ngân hàng riêng. Việc cần con dấu, hồ sơ gốc xử lý tại Trụ sở chính." },

    { id: "diem-ninh-phuoc", loai: "diemtruong", ten: "Điểm trường Ninh Phước", ngan: "Ninh Phước",
      ap: "Ninh Phước", lat: 10.3646, lng: 104.870738, anh: "anh/ninh-phuoc.jpg",
      maps: "https://maps.app.goo.gl/Cb5PaBJBbFT3pwJA6", khung: ["th"], truc: "phan-hieu",
      capHoc: "Lớp 1 đến Lớp 5", quyMo: "khoảng 107 học sinh",
      chucNang: [
        "Tổ chức các lớp học Tiểu học, giúp rút ngắn khoảng cách đi lại cho học sinh.",
        "Do Phân hiệu trực tiếp quản lý, không có bộ máy quản lý riêng."
      ], luuY: "" }
  ],

  /* Dịch vụ. tai: "all" hoặc danh sách id nơi thực hiện. online: true = làm trên mạng */
  dichVu: [
    { ten: "Tuyển sinh đầu cấp (Lớp 1, Lớp 6)", mota: "Đăng ký trực tuyến toàn phần qua Cổng dịch vụ công hoặc ứng dụng VNeID.", online: true, tai: "all" },
    { ten: "Chuyển trường, cấp sao văn bằng/chứng chỉ, tra cứu Học bạ số", mota: "Thủ tục học đường thực hiện trực tuyến.", online: true, tai: "all" },
    { ten: "Tư vấn & hỗ trợ", mota: "Hỗ trợ tâm lý học đường; tư vấn chính sách hỗ trợ học sinh vùng biên giới, hoàn cảnh khó khăn.", online: false, tai: "all" },
    { ten: "Việc cần con dấu, hồ sơ gốc, kế toán", mota: "Làm việc trực tiếp với Ban Giám hiệu và bộ phận hành chính.", online: false, tai: ["truong-chinh"] }
  ]
};
