export const project = {
  title: "Những người sống vì Sài Gòn",
  subtitle: "Bảo tàng số về sáu danh nhân trong phong trào yêu nước và cách mạng ở Sài Gòn",
  intro:
    "Trang này giới thiệu sáu nhân vật gắn với phong trào yêu nước và cách mạng ở Sài Gòn – Gia Định – Chợ Lớn, từ cuối thế kỷ XIX đến giữa thế kỷ XX. Mỗi người có một phòng riêng: tiểu sử, hoạt động tại Sài Gòn, hình ảnh tư liệu, cách thành phố ghi nhớ họ và nguồn tham khảo.",
  info: "Dự án Lịch sử Khối 11 “Khát vọng độc lập cho thành phố” · 50:01 – Khắc dấu rạng đông",
  audio: "/audio/gioi-thieu.mp3",
  narration:
    "Chào mừng bạn đến với bảo tàng số “Những người sống vì Sài Gòn”. Nơi đây là sáu căn phòng dành cho sáu danh nhân: Trần Chánh Chiếu, Nguyễn An Ninh, Tôn Đức Thắng, Lý Tự Trọng, Võ Văn Tần và Nguyễn Thị Minh Khai. Mỗi người một hoàn cảnh, một con đường, nhưng đều chung một khát vọng: thấy thành phố và đất nước được độc lập. Bạn có thể đi theo dòng thời gian, ghé từng phòng trưng bày, nghe thuyết minh, xem ảnh tư liệu, rồi tìm lại tên họ trên những con đường của Thành phố Hồ Chí Minh hôm nay. Mời bạn bắt đầu hành trình.",
};

export const nav = [
  { id: "dong-thoi-gian", label: "Dòng thời gian" },
  { id: "phong-trung-bay", label: "Phòng trưng bày" },
  { id: "ten-duong", label: "Tên đường" },
  { id: "nhom", label: "Nhóm thực hiện" },
];

export const method = [
  "Nội dung lấy từ báo chí chính thống, bảo tàng và tạp chí khoa học của trường đại học công lập Việt Nam.",
  "Các mốc quan trọng được đối chiếu ít nhất hai nguồn khi có thể. Chỗ nào các nguồn ghi khác nhau, chúng em ghi cả hai ở mục “Lưu ý tư liệu”.",
  "Ảnh là ảnh tư liệu thật, đã chuyển sang trắng đen; không dùng ảnh do AI tạo.",
];

export const honoring = {
  title: "Tên người thành tên phố",
  lede: "Sáu danh nhân đều có đường mang tên ở Thành phố Hồ Chí Minh. Bấm vào tên đường để về phòng của người đó.",
};

export const team = {
  school: "Trường THPT Lê Quý Đôn",
  className: "Lớp 11A3",
  members: [
    "Lương Thuỳ Trâm Anh",
    "Nguyễn Vũ Minh Anh",
    "Trần Phúc Lâm",
    "Trịnh Vy Lan",
    "Lâm Tỷ San",
    "Phạm Linh San",
  ],
};

export const tools = [
  { task: "Trang web", tool: "Vite, React, TypeScript, Tailwind CSS" },
  { task: "Ảnh tư liệu", tool: "Wikimedia Commons, báo chí chính thống và Bảo tàng Lịch sử Quốc gia (nguồn ghi dưới từng ảnh); chuyển trắng đen bằng Python Pillow" },
  { task: "Giọng thuyết minh", tool: "Microsoft Edge Text-to-Speech, giọng vi-VN-HoaiMyNeural (thư viện edge-tts)" },
  { task: "Lời thuyết minh", tool: "Nhóm tự biên soạn từ hồ sơ tư liệu" },
];
