// Nội dung lấy từ "Hồ sơ tư liệu lịch sử – Những nhà yêu nước, chiến sĩ cách mạng
// và phong trào đấu tranh cách mạng ở Sài Gòn" (lập 30/10/2026). Không thêm chi tiết
// nào không có trong hồ sơ; chỗ các nguồn khác nhau thì ghi rõ cả hai.

export type Source = {
  title: string;
  publisher: string;
  date?: string;
  url: string;
};

export type Activity = {
  title: string;
  time: string;
  place: string;
  text: string;
  meaning: string;
};

export type Photo = {
  src: string;
  caption: string;
  /** Nơi đăng ảnh (báo, bảo tàng, Wikimedia Commons). */
  source: string;
  /** Tác giả / giấy phép, nếu nguồn có ghi. */
  credit?: string;
  /** Trang gốc chứa ảnh. */
  url: string;
};

export type Honor = {
  name: string;
  note: string;
};

export type Hero = {
  id: string;
  name: string;
  alias?: string;
  years: string;
  born: number;
  died: number;
  /** Mốc hoạt động tiêu biểu tại Sài Gòn – dùng để xếp thứ tự các phòng. */
  milestone: { year: string; label: string };
  epithet: string;
  role: string;
  hometown: string;
  portrait: { src: string; alt: string; url: string };
  overview: string[];
  context: string;
  timeline: { date: string; text: string }[];
  activities: Activity[];
  quote?: { text: string; note: string };
  significance: string[];
  /** Ảnh tư liệu liên quan (đã chuyển trắng đen). */
  gallery: Photo[];
  honors: Honor[];
  street: { name: string; area: string };
  documents: { title: string; publisher: string; url: string }[];
  sources: Source[];
  notes: string[];
  narration: string;
  audio: string;
  /** Video AI (≤ 3 phút), ví dụ "/video/ly-tu-trong.mp4" – để trống khi chưa có. */
  video?: { src: string; tool: string };
};

const commons = (file: string) => `https://commons.wikimedia.org/wiki/File:${file}`;

const khamLon = {
  src: "/tu-lieu/kham-lon.jpg",
  source: "Wikimedia Commons",
  credit: "Bưu ảnh thời Pháp thuộc · Public domain",
  url: commons("Saigon._Maison_Centrale.jpg"),
};

const pages = {
  baoCanTho: "https://baocantho.com.vn/nha-yeu-nuoc-nguyen-an-ninh-song-de-muon-doi-su-tac-ghi--a177859.html",
  sggpThuVien: "https://www.sggp.org.vn/khanh-thanh-thu-vien-so-nguyen-an-ninh-post758689.html",
  tuoiTre: "https://tuoitre.vn/dau-an-cong-hoi-bi-mat-899700.htm",
  soTuPhap: "https://pbgdpl.cantho.gov.vn/tieu-su-chu-tich-ton-duc-thang-2081888-3031981",
  baoVanHoaBaSon: "https://baovanhoa.vn/van-hoa/trien-lam-gan-180-tai-lieu-hien-vat-chuyen-de-ba-son-dong-thoi-gian-102242.html",
  btlsqg: "https://baotanglichsu.vn/en/Articles/3183/17947/the-first-member-of-vietnamese-communist-youth-union-ly-tu-trong.html",
  baoLaiChau: "https://baolaichau.vn/chinh-tri/chan-dung-anh-hung-ly-tu-trong-qua-nhung-tu-lieu-lich-su",
  sggpLyTuTrong: "https://www.sggp.org.vn/tinh-than-ly-tu-trong-ngon-duoc-soi-duong-post764305.html",
  sggpVoVanTan: "https://www.sggp.org.vn/dong-chi-vo-van-tan-nguoi-chien-si-cong-san-kien-cuong-mau-muc-post607468.html",
  sggpLeGio: "https://www.sggp.org.vn/lanh-dao-tphcm-dang-hoa-dang-huong-va-du-le-gio-81-nam-ngay-hy-sinh-cua-cac-dong-chi-nguyen-lanh-dao-dang-post649216.html",
  baoPhapLuat: "https://baophapluat.vn/nguyen-thi-minh-khai-nguoi-nu-anh-hung-tren-que-huong-xo-viet-post411389.html",
  sggpNamKy: "https://www.sggp.org.vn/khoi-nghia-nam-ky-gop-phan-to-tham-trang-su-quat-cuong-cua-dan-toc-post575952.html",
};

export const heroes: Hero[] = [
  {
    id: "tran-chanh-chieu",
    name: "Trần Chánh Chiếu",
    alias: "Gilbert Chiếu",
    years: "1867 – 1919",
    born: 1867,
    died: 1919,
    milestone: { year: "1907", label: "Làm chủ bút báo Lục Tỉnh Tân Văn" },
    epithet: "Lãnh tụ phong trào Minh Tân (Duy Tân) ở Nam Kỳ đầu thế kỷ XX",
    role: "Nhà báo, nhà hoạt động kinh tế yêu nước",
    hometown: "Quận Vân Tập, chợ Rạch Giá, tỉnh Rạch Giá (nay thuộc Kiên Giang)",
    portrait: {
      src: "/portraits/tran-chanh-chieu.jpg",
      alt: "Chân dung trắng đen Trần Chánh Chiếu, ảnh tư liệu",
      url: commons("Gilbert-chieu.jpg"),
    },
    overview: [
      "Một đại điền chủ uyên bác ở Rạch Giá, mang quốc tịch Pháp và từng được phong đốc phủ sứ, nhưng đã dùng địa vị và tài sản của mình để phụng sự phong trào yêu nước.",
      "Ông là chủ bút những tờ báo quốc ngữ đầu tiên ở Nam Kỳ, lập các cơ sở kinh tế vừa làm ăn vừa làm nơi liên lạc, và vận động khoảng 100 thanh niên tham gia phong trào Đông Du.",
    ],
    context:
      "Đầu thế kỷ XX, hưởng ứng tư tưởng duy tân của Phan Bội Châu, Phan Châu Trinh, ở Nam Kỳ hình thành phong trào Minh Tân: chấn hưng kinh tế, mở mang dân trí, dùng hàng nội để tự cường. Trần Chánh Chiếu là nhân vật trung tâm của phong trào này – một khuynh hướng yêu nước cải cách, khác với phong trào cộng sản về sau.",
    timeline: [
      { date: "2/6/1867", text: "Sinh tại quận Vân Tập, chợ Rạch Giá (nay Kiên Giang) trong gia đình khá giả." },
      { date: "1906", text: "Làm chủ bút báo Nông Cổ Mín Đàm; vận động, quyên góp cho phong trào Đông Du." },
      { date: "1907", text: "Làm chủ bút báo Lục Tỉnh Tân Văn – cơ quan cổ động mạnh mẽ cho tư tưởng duy tân." },
      { date: "1908", text: "Lập Nam Kỳ Minh Tân Công nghệ xã, Minh Tân khách sạn (Mỹ Tho), Nam Trung khách sạn (Sài Gòn). Cuối tháng 10 bị Pháp bắt, giam hơn 7 tháng." },
      { date: "1917", text: "Bị bắt thêm một lần (liên quan phong trào Phan Xích Long), sau được thả vì không đủ chứng cứ." },
      { date: "1919", text: "Mất tại Sài Gòn." },
    ],
    activities: [
      {
        title: "Dùng báo chí cổ động duy tân, tự cường",
        time: "1906 – 1908",
        place: "Sài Gòn – Nam Kỳ",
        text: "Trên cương vị chủ bút Nông Cổ Mín Đàm rồi Lục Tỉnh Tân Văn, ông biến báo quốc ngữ thành diễn đàn mở mang dân trí, chấn hưng công thương, kêu gọi dùng hàng nội hóa và đoàn kết tự cường.",
        meaning: "Đặt nền cho báo chí quốc ngữ gắn với mục tiêu yêu nước ở Nam Kỳ.",
      },
      {
        title: "Xây dựng cơ sở kinh tế làm “hậu phương” cho phong trào",
        time: "1908",
        place: "Sài Gòn, Mỹ Tho",
        text: "Lập Minh Tân Công nghệ xã, Minh Tân khách sạn, Nam Trung khách sạn và công ty kinh doanh – vừa làm kinh tế, vừa là nơi liên lạc, tụ họp của những người yêu nước.",
        meaning: "Tạo nguồn tài chính và mạng lưới cơ sở; thể hiện tinh thần “thực nghiệp cứu quốc”.",
      },
      {
        title: "Hỗ trợ phong trào Đông Du và bị thực dân đàn áp",
        time: "1906 – 1909",
        place: "Nam Kỳ",
        text: "Quyên tiền và vận động khoảng 100 thanh niên sang Nhật du học. Vì vậy ông bị bắt cuối tháng 10/1908, giam hơn 7 tháng; ra tù vẫn bị theo dõi chặt chẽ.",
        meaning: "Gắn phong trào Minh Tân ở Nam Kỳ với phong trào Đông Du trong cả nước.",
      },
    ],
    significance: [
      "Trần Chánh Chiếu là tấm gương của tầng lớp điền chủ – trí thức Nam Kỳ biết đặt quyền lợi dân tộc lên trên lợi ích cá nhân, mở đường cho tư tưởng tự cường về kinh tế và văn hóa ở Sài Gòn.",
      "Bài học ông để lại là tinh thần “khai dân trí, chấn dân khí, hậu dân sinh”: kết hợp làm kinh tế, làm báo và giáo dục để nâng cao sức mạnh dân tộc.",
    ],
    gallery: [
      { src: "/tu-lieu/tcc-nong-co-min-dam.jpg", caption: "Báo Nông Cổ Mín Đàm – Trần Chánh Chiếu làm chủ bút từ năm 1906.", source: "Wikimedia Commons", credit: "Public domain", url: commons("Nông_Cổ_Mín_Đàm_-_Nghiên_Cứu_Lịch_Sử.jpg") },
      { src: "/tu-lieu/tcc-luc-tinh-tan-van.jpg", caption: "Một số số báo Lục Tỉnh Tân Văn – ông làm chủ bút từ năm 1907.", source: "Wikimedia Commons", credit: "Public domain", url: commons("Lục_Tỉnh_Tân_Văn_số_223,_số_243,_số_320,_số_665_-_Nghiên_Cứu_Lịch_Sử.jpg") },
      { src: "/tu-lieu/tcc-tien-can-bao-hau.jpg", caption: "Bìa cuốn thứ sáu của “Tiền căn báo hậu”, truyện phỏng theo Bá tước Monte Cristo của A. Dumas. Người dịch ký tên Kỳ Lân Các – một bút hiệu của Trần Chánh Chiếu.", source: "Wikimedia Commons", credit: "Public domain", url: commons("Tiền-căn_báo-hậu_(前根報後)_Volume_6_by_Kỳ-Lân-Các_(Gilbert_Trần_Chánh_Chiếu).pdf") },
    ],
    honors: [
      { name: "Đường Trần Chánh Chiếu", note: "Khu vực Chợ Lớn, gần ga Chợ Lớn (Quận 5 trước đây)" },
      { name: "Trong sách giáo khoa và nghiên cứu", note: "Tên ông gắn với lịch sử báo chí quốc ngữ và phong trào Minh Tân – Duy Tân" },
    ],
    street: { name: "Trần Chánh Chiếu", area: "Khu Chợ Lớn" },
    documents: [
      { title: "Chân dung Trần Chánh Chiếu", publisher: "Báo Pháp luật TP.HCM", url: "https://plo.vn/dai-gia-dat-nam-ky-bai-cuoi-tran-chanh-chieu-dai-dien-chu-uyen-bac-post392111.html" },
      { title: "Nghiên cứu về phong trào Minh Tân", publisher: "Tạp chí Khoa học ĐHSP TP.HCM", url: "https://journal.hcmue.edu.vn/index.php/hcmuejos/article/download/448/440" },
    ],
    sources: [
      { title: "“Đại gia” đất Nam kỳ – Bài cuối: Trần Chánh Chiếu – đại điền chủ uyên bác", publisher: "GS Trần Văn Giàu, Báo Pháp luật TP.HCM", url: "https://plo.vn/dai-gia-dat-nam-ky-bai-cuoi-tran-chanh-chieu-dai-dien-chu-uyen-bac-post392111.html" },
      { title: "Những đóng góp của Trần Chánh Chiếu trong phong trào Duy Tân ở Nam Kì đầu thế kỉ XX", publisher: "ThS. Ngô Sỹ Tráng, Tạp chí Khoa học ĐHSP TP.HCM, số 8(86)", date: "2016", url: "https://journal.hcmue.edu.vn/index.php/hcmuejos/article/download/448/440" },
    ],
    notes: [
      "Ngày sinh 2/6/1867 ghi theo Tạp chí Khoa học Trường ĐHSP TP.HCM (2016).",
    ],
    narration:
      "Phòng thứ nhất. Trần Chánh Chiếu, còn gọi là Gilbert Chiếu, sinh năm 1867 ở Rạch Giá. Là một đại điền chủ có quốc tịch Pháp, ông lại trở thành lãnh tụ của phong trào Minh Tân ở Nam Kỳ. Ông làm chủ bút các tờ Nông Cổ Mín Đàm và Lục Tỉnh Tân Văn, kêu gọi đồng bào mở mang dân trí và dùng hàng nội hóa. Năm 1908, ông lập Minh Tân Công nghệ xã và các khách sạn ở Mỹ Tho, Sài Gòn, vừa làm kinh tế vừa làm nơi liên lạc, đồng thời vận động khoảng một trăm thanh niên sang Nhật theo phong trào Đông Du. Cuối năm đó ông bị thực dân Pháp bắt giam. Ông mất năm 1919 tại Sài Gòn. Ngày nay, một con đường ở khu Chợ Lớn mang tên ông.",
    audio: "/audio/tran-chanh-chieu.mp3",
  },
  {
    id: "nguyen-an-ninh",
    name: "Nguyễn An Ninh",
    years: "1900 – 1943",
    born: 1900,
    died: 1943,
    milestone: { year: "1923", label: "Lập báo La Cloche Fêlée (Tiếng chuông rè) tại Sài Gòn" },
    epithet: "“Sống để muôn đời, sử tạc ghi” – nhà trí thức yêu nước, nhà báo, nhà tư tưởng",
    role: "Nhà báo, nhà tư tưởng, nhà hoạt động cách mạng tiền bối",
    hometown: "Xã Long Thượng, huyện Cần Giuộc, tỉnh Chợ Lớn cũ (nay thuộc Long An)",
    portrait: {
      src: "/portraits/nguyen-an-ninh.jpg",
      alt: "Chân dung trắng đen Nguyễn An Ninh tay chống cằm, ảnh tư liệu",
      url: commons("Nguyen_An_Ninh.jpg"),
    },
    overview: [
      "Du học Pháp và đỗ cử nhân Luật loại xuất sắc ở Đại học Sorbonne khi chưa đầy 20 tuổi, ông từ chối con đường quan lại để dấn thân vào sự nghiệp khai dân trí, chấn dân khí.",
      "Ông nổi tiếng với tờ La Cloche Fêlée (Tiếng chuông rè) lập cuối năm 1923 tại Sài Gòn, những buổi diễn thuyết thu hút hàng nghìn người và tổ chức Thanh niên Cao vọng.",
    ],
    context:
      "Nam Kỳ khi đó là thuộc địa trực trị của Pháp: chính quyền thực dân kiểm soát gắt gao, nhưng không gian báo chí – xuất bản tương đối cởi mở hơn Bắc và Trung Kỳ. Nguyễn An Ninh tận dụng chính không gian đó để đấu tranh hợp pháp.",
    timeline: [
      { date: "1900", text: "Sinh ở Long Thượng, Cần Giuộc trong gia đình Nho học; mẹ là cụ Trương Thị Ngự, sau được truy tặng Mẹ Việt Nam Anh hùng." },
      { date: "1918", text: "Sang Pháp học Luật tại Sorbonne; khoảng hai năm sau tốt nghiệp cử nhân loại xuất sắc." },
      { date: "1922 – 1923", text: "Về nước hoạt động, lập Hội Khuyến học Nam Kỳ, diễn thuyết trước hơn 3.000 người." },
      { date: "Cuối 1923", text: "Sáng lập và làm chủ bút báo La Cloche Fêlée tại Sài Gòn; báo ra 19 số thì bị đình bản, tái bản với tên Nước Nam." },
      { date: "1926 – 1928", text: "Bị bắt năm 1926 (giam 2 năm), cuối 1928 tiếp tục bị bắt. Thanh niên Cao vọng có khoảng 7.000 hội viên (1928)." },
      { date: "1932", text: "Lập báo La Lutte (Tranh đấu), phát động phong trào “Đông Dương đại hội”." },
      { date: "10/1939", text: "Bị bắt lần cuối, án 5 năm tù và 10 năm biệt xứ; ít lâu sau bị đày ra Côn Đảo." },
      { date: "14/8/1943", text: "Hy sinh tại nhà tù Côn Đảo." },
    ],
    activities: [
      {
        title: "Báo La Cloche Fêlée – vũ khí báo chí công khai",
        time: "Từ cuối năm 1923",
        place: "Sài Gòn",
        text: "Gần như một mình viết bài, biên tập, in và bán báo. Báo bằng tiếng Pháp nên vượt được hàng rào kiểm duyệt dành cho báo quốc ngữ, công khai phê phán chính sách cai trị thực dân.",
        meaning: "Mở ra lối đấu tranh hợp pháp bằng báo chí ở Nam Kỳ, cổ vũ một thế hệ trí thức, thanh niên dấn thân.",
      },
      {
        title: "Diễn thuyết và tổ chức Thanh niên Cao vọng",
        time: "1923 – 1928",
        place: "Sài Gòn và các tỉnh Nam Kỳ",
        text: "Diễn thuyết trước hơn 3.000 người, rồi lập Thanh niên Cao vọng – hoạt động như hội kín, phối hợp với Hội Việt Nam Cách mạng Thanh niên; đến năm 1928 có khoảng 7.000 hội viên.",
        meaning: "Chuẩn bị về tư tưởng và tổ chức cho các phong trào cách mạng tiếp theo ở Sài Gòn – Nam Kỳ.",
      },
      {
        title: "Trước tác và truyền bá tư tưởng tiến bộ",
        time: "1923 – 1932",
        place: "Sài Gòn",
        text: "Viết và dịch: Cao vọng của thanh niên An Nam (1923), Dân ước (1923), Nước Pháp ở Đông Dương (1925), tổ chức dịch Tuyên ngôn của Đảng Cộng sản (đăng báo 1926), vở tuồng Hai Bà Trưng (1928), Tôn giáo (1932).",
        meaning: "Đưa tư tưởng dân quyền, tiến bộ và cách mạng đến đông đảo công chúng Nam Kỳ.",
      },
    ],
    significance: [
      "Nguyên Tổng Bí thư Nguyễn Văn Linh đánh giá ông là nhà yêu nước vĩ đại, một trí thức tầm cỡ; nguyên Thủ tướng Phạm Văn Đồng nhận định ông có tầm vóc của một nhà lãnh đạo cách mạng.",
      "Bài học ông để lại là sức mạnh của báo chí, tư tưởng và văn hóa trong đấu tranh giải phóng dân tộc: tri thức chỉ thực sự có giá trị khi gắn với vận mệnh dân tộc.",
    ],
    gallery: [
      { src: "/tu-lieu/nan-la-cloche-felee.jpg", caption: "Báo La Cloche Fêlée (Tiếng chuông rè), số ra ngày 22/2/1926.", source: "Wikimedia Commons", credit: "Public domain", url: commons("La_Cloche_Fêlée_1926-02-22.jpg") },
      { src: "/tu-lieu/nan-lenh-truy-na.jpg", caption: "Lệnh truy nã Nguyễn An Ninh của cảnh sát Đông Dương.", source: "Wikimedia Commons", credit: "Chính quyền Đông Dương thuộc Pháp · Public domain", url: commons("Nguyễn_An_Ninh_Wanted_poster_by_the_Indochina_Police.jpg") },
      { src: "/tu-lieu/nan-kham-lon-1937.jpg", caption: "Nguyễn An Ninh cùng vợ và con trai Nguyễn An Tịnh trước Khám Lớn Sài Gòn, năm 1937.", source: "Wikimedia Commons", credit: "Ảnh tư liệu gia đình · Public domain", url: commons("Nguyễn_An_Ninh_cùng_vợ_và_con_Nguyễn_An_Tịnh_trước_khám_lớn_Sài_Gòn_1937.jpg") },
      { src: "/tu-lieu/nan-di-anh.jpg", caption: "Di ảnh Nguyễn An Ninh (1900 – 1943).", source: "Báo Cần Thơ Online", url: pages.baoCanTho },
      { src: "/tu-lieu/nan-mo-con-dao.jpg", caption: "Mộ nhà yêu nước Nguyễn An Ninh ở Côn Đảo. Ông hy sinh ngày 14/8/1943.", source: "Báo Cần Thơ Online", url: pages.baoCanTho },
      { src: "/tu-lieu/nan-thu-vien-so.jpg", caption: "Thư viện số Nguyễn An Ninh, khánh thành ngày 14/9/2024 tại Đường sách TP.HCM, nhân 124 năm ngày sinh của ông.", source: "Báo Sài Gòn Giải Phóng", url: pages.sggpThuVien },
    ],
    honors: [
      { name: "Đường Nguyễn An Ninh", note: "Khu trung tâm TP.HCM, cạnh chợ Bến Thành; ở Cần Thơ có đường cùng tên (quận Ninh Kiều)" },
      { name: "Nhà tưởng niệm Nguyễn An Ninh", note: "Phường Trung Mỹ Tây, Quận 12, TP.HCM" },
      { name: "Trường THPT Nguyễn An Ninh", note: "TP.HCM" },
      { name: "Thư viện số Nguyễn An Ninh", note: "Vận động hiến tặng sách, lan tỏa tinh thần hiếu học" },
      { name: "Mộ tại Nghĩa trang Hàng Dương", note: "Côn Đảo – nhiều người đến viếng vào dịp 14/8 hằng năm" },
    ],
    street: { name: "Nguyễn An Ninh", area: "Cạnh chợ Bến Thành" },
    documents: [
      { title: "Ảnh chân dung Nguyễn An Ninh", publisher: "Báo Cần Thơ Online", url: "https://baocantho.com.vn/nha-yeu-nuoc-nguyen-an-ninh-song-de-muon-doi-su-tac-ghi--a177859.html" },
      { title: "Tiểu sử và tư liệu", publisher: "Trường THPT Nguyễn An Ninh", url: "https://thptnguyenanninh.hcm.edu.vn/lich-su-truong/tieu-su-nguyen-an-ninh/ctmb/86902/418404" },
      { title: "Thư viện số Nguyễn An Ninh", publisher: "Báo Sài Gòn Giải Phóng", url: "https://www.sggp.org.vn/khanh-thanh-thu-vien-so-nguyen-an-ninh-post758689.html" },
    ],
    sources: [
      { title: "Nhà yêu nước Nguyễn An Ninh “Sống để muôn đời, sử tạc ghi”", publisher: "Duy Khôi, Báo Cần Thơ Online", date: "01/9/2024", url: "https://baocantho.com.vn/nha-yeu-nuoc-nguyen-an-ninh-song-de-muon-doi-su-tac-ghi--a177859.html" },
      { title: "Tiểu sử Nguyễn An Ninh", publisher: "Trường THPT Nguyễn An Ninh", date: "5/9/2020", url: "https://thptnguyenanninh.hcm.edu.vn/lich-su-truong/tieu-su-nguyen-an-ninh/ctmb/86902/418404" },
      { title: "Khánh thành Thư viện số Nguyễn An Ninh", publisher: "Báo Sài Gòn Giải Phóng", url: "https://www.sggp.org.vn/khanh-thanh-thu-vien-so-nguyen-an-ninh-post758689.html" },
    ],
    notes: [
      "Ngày sinh: Trường THPT Nguyễn An Ninh ghi 15/9/1900; Báo Cần Thơ ghi năm 1900.",
      "Thời điểm về nước: Báo Cần Thơ ghi tháng 10/1922; Trường THPT Nguyễn An Ninh ghi 3/10/1923.",
    ],
    narration:
      "Phòng thứ hai. Nguyễn An Ninh sinh năm 1900 ở Cần Giuộc, trong một gia đình Nho học. Ông du học Pháp, đỗ cử nhân Luật ở Đại học Sorbonne, nhưng từ chối làm quan để trở về khai dân trí. Cuối năm 1923, tại Sài Gòn, ông lập tờ báo tiếng Pháp La Cloche Fêlée, nghĩa là Tiếng chuông rè, tự viết, tự in và tự bán báo để phê phán chế độ thực dân. Những buổi diễn thuyết của ông thu hút hàng nghìn người; tổ chức Thanh niên Cao vọng do ông lập có khoảng bảy nghìn hội viên vào năm 1928. Bị bắt nhiều lần, ông bị đày ra Côn Đảo và hy sinh tại đó ngày 14 tháng 8 năm 1943. Hôm nay, tên ông được đặt cho con đường cạnh chợ Bến Thành, cho trường học và thư viện.",
    audio: "/audio/nguyen-an-ninh.mp3",
  },
  {
    id: "ton-duc-thang",
    name: "Tôn Đức Thắng",
    alias: "Bác Tôn",
    years: "1888 – 1980",
    born: 1888,
    died: 1980,
    milestone: { year: "1925", label: "Lãnh đạo cuộc bãi công của công nhân Ba Son" },
    epithet: "Người sáng lập Công hội đỏ, thủ lĩnh phong trào công nhân Sài Gòn, Chủ tịch nước",
    role: "Người sáng lập Công hội bí mật – tổ chức công hội đầu tiên của Việt Nam",
    hometown: "Cù lao Ông Hổ, làng Mỹ Hòa Hưng, Long Xuyên (nay thuộc An Giang)",
    portrait: {
      src: "/portraits/ton-duc-thang.jpg",
      alt: "Chân dung trắng đen Tôn Đức Thắng, ảnh tư liệu",
      url: commons("Mr._Ton_Duc_Thang.jpg"),
    },
    overview: [
      "Lên Sài Gòn học nghề và làm thợ máy, ông sớm gắn bó với giai cấp công nhân và phong trào đấu tranh ở xưởng Ba Son, nơi công nhân gọi ông là “anh Hai”.",
      "Ông sáng lập Công hội bí mật (Công hội đỏ) và lãnh đạo cuộc bãi công Ba Son tháng 8/1925. Sau Cách mạng Tháng Tám, ông trở thành Chủ tịch nước và là người đầu tiên được tặng Huân chương Sao Vàng.",
    ],
    context:
      "Tôn Đức Thắng là đại diện tiêu biểu của giai cấp công nhân Việt Nam trong buổi đầu hình thành phong trào công nhân có tổ chức ở Sài Gòn. Cuộc đời ông trải gần trọn thế kỷ XX, gắn với những bước ngoặt lớn của dân tộc.",
    timeline: [
      { date: "20/8/1888", text: "Sinh tại Cù lao Ông Hổ (nay An Giang) trong gia đình nông dân khá giả." },
      { date: "1906 – 1912", text: "Lên Sài Gòn học việc, làm thợ; năm 1912 tham gia bãi khóa ở Trường Bá Nghệ, được công nhân Ba Son ủng hộ." },
      { date: "1915 – 1920", text: "Bị động viên sang Pháp làm lính thợ trong Chiến tranh thế giới thứ nhất." },
      { date: "1919", text: "Tham gia cuộc phản chiến kéo cờ đỏ trên chiến hạm ở Biển Đen ủng hộ nước Nga Xô viết." },
      { date: "1920 – 1925", text: "Về Sài Gòn, lập Công hội bí mật và lãnh đạo phong trào công nhân Sài Gòn – Chợ Lớn." },
      { date: "8/1925", text: "Lãnh đạo cuộc bãi công của công nhân Ba Son." },
      { date: "1926 – 1929", text: "Gia nhập Hội Việt Nam Cách mạng Thanh niên; cuối 1929 bị bắt, án 20 năm khổ sai, đày Côn Đảo." },
      { date: "1945 – 1976", text: "Đảm nhiệm nhiều trọng trách; Chủ tịch nước VNDCCH (1969), Chủ tịch nước CHXHCN Việt Nam (1976)." },
      { date: "30/3/1980", text: "Qua đời tại Hà Nội." },
    ],
    activities: [
      {
        title: "Sáng lập Công hội bí mật (Công hội đỏ)",
        time: "1920 – 1925",
        place: "Sài Gòn – Chợ Lớn, xưởng Ba Son",
        text: "Trở về từ Pháp, ông tổ chức công hội bí mật, tập hợp công nhân đấu tranh chống áp bức, bóc lột và cổ vũ tinh thần yêu nước.",
        meaning: "Đưa phong trào công nhân Sài Gòn từ tự phát sang có tổ chức, có ý thức giai cấp.",
      },
      {
        title: "Lãnh đạo cuộc bãi công Ba Son",
        time: "Từ 4/8/1925",
        place: "Xưởng Ba Son, Sài Gòn",
        text: "Công nhân bãi công đòi quyền lợi và cố ý kéo dài việc sửa chiến hạm Jules Michelet – con tàu đang chuẩn bị sang Trung Quốc. Ngày 13/8, giới chủ phải nhượng bộ (tăng lương 10%, nhận lại thợ bị đuổi); công nhân tiếp tục lãn công, giữ chân chiến hạm đến cuối tháng 11.",
        meaning: "Thắng lợi cả kinh tế và chính trị; đánh dấu phong trào công nhân chuyển sang đấu tranh tự giác.",
      },
      {
        title: "Tù đày Côn Đảo, giữ vững khí tiết",
        time: "1929 – 1945",
        place: "Sài Gòn, Côn Đảo",
        text: "Bị bắt cuối năm 1929, kết án 20 năm khổ sai. Trong tù ông vẫn tiếp tục tổ chức, giác ngộ bạn tù; được trả tự do sau Cách mạng Tháng Tám 1945.",
        meaning: "Tấm gương bất khuất, tiêu biểu cho ý chí của giai cấp công nhân Việt Nam.",
      },
    ],
    significance: [
      "Từ người thợ máy ở Ba Son trở thành Chủ tịch nước, ông là biểu tượng của giai cấp công nhân và khối đại đoàn kết dân tộc. Chủ tịch Hồ Chí Minh ca ngợi ông là “một gương mẫu đạo đức cách mạng”.",
      "Cuộc đời ông để lại bài học về đức khiêm nhường, lòng trung thành và tinh thần đoàn kết – được gìn giữ qua bảo tàng, khu lưu niệm và các công trình mang tên ông.",
    ],
    gallery: [
      { src: "/tu-lieu/tdt-ba-son.jpg", caption: "Cổng Arsenal Sài Gòn – xưởng Ba Son thời Pháp thuộc (bưu ảnh).", source: "Wikimedia Commons", credit: "Public domain", url: commons("Saigon_-_Entrée_de_l'Arsenal.jpg") },
      { src: "/tu-lieu/tdt-xuong-ba-son.jpg", caption: "Xưởng tiện, phay, bào của Arsenal Sài Gòn (Ba Son) đầu thế kỷ XX.", source: "Báo Tuổi Trẻ", credit: "Ảnh tư liệu", url: pages.tuoiTre },
      { src: "/tu-lieu/tdt-jules-michelet.jpg", caption: "Tuần dương hạm Pháp Jules Michelet – con tàu công nhân Ba Son kéo dài việc sửa chữa trong cuộc bãi công năm 1925.", source: "Wikimedia Commons", credit: "U.S. Naval History and Heritage Command · Public domain", url: commons("NH_50713_JULES_MICHELET.tif") },
      { src: "/tu-lieu/tdt-voi-thanh-nien.jpg", caption: "Chủ tịch Tôn Đức Thắng (ảnh tư liệu).", source: "Cổng PBGDPL TP Cần Thơ (Sở Tư pháp)", url: pages.soTuPhap },
      { src: "/tu-lieu/tdt-trien-lam-ba-son.jpg", caption: "Triển lãm “Ba Son – Dòng thời gian” (2024) giới thiệu quá trình hình thành và phát triển của Ba Son.", source: "Báo Văn Hóa", url: pages.baoVanHoaBaSon },
      { src: "/tu-lieu/tdt-trien-lam-bao-tang.jpg", caption: "Triển lãm “Ba Son – Dòng thời gian” diễn ra tại Bảo tàng Tôn Đức Thắng.", source: "Báo Văn Hóa", url: pages.baoVanHoaBaSon },
    ],
    honors: [
      { name: "Đường Tôn Đức Thắng", note: "Đại lộ ven sông Sài Gòn, khu trung tâm (Quận 1 trước đây)" },
      { name: "Bảo tàng Tôn Đức Thắng", note: "Số 5 Tôn Đức Thắng, TP.HCM" },
      { name: "Trường Đại học Tôn Đức Thắng", note: "TP.HCM" },
      { name: "Khu lưu niệm Chủ tịch Tôn Đức Thắng", note: "Cù lao Ông Hổ, An Giang – di tích lịch sử quốc gia" },
      { name: "Huân chương Sao Vàng", note: "Người đầu tiên được Nhà nước tặng thưởng" },
    ],
    street: { name: "Tôn Đức Thắng", area: "Ven sông Sài Gòn" },
    documents: [
      { title: "Chân dung Chủ tịch Tôn Đức Thắng", publisher: "Cổng PBGDPL Cần Thơ (Sở Tư pháp)", url: "https://pbgdpl.cantho.gov.vn/tieu-su-chu-tich-ton-duc-thang-2081888-3031981" },
      { title: "Xưởng Ba Son – bãi công 1925", publisher: "Báo Tuổi Trẻ", url: "https://tuoitre.vn/dau-an-cong-hoi-bi-mat-899700.htm" },
      { title: "Triển lãm “Ba Son – Dòng thời gian”", publisher: "Báo Văn Hóa", url: "https://baovanhoa.vn/van-hoa/trien-lam-gan-180-tai-lieu-hien-vat-chuyen-de-ba-son-dong-thoi-gian-102242.html" },
      { title: "Bảo tàng Tôn Đức Thắng", publisher: "Báo Văn Hóa", url: "https://baovanhoa.vn/van-hoa/bao-tang-ton-duc-thang-ky-niem-138-nam-ngay-sinh-bac-ton-257642.html" },
    ],
    sources: [
      { title: "Tiểu sử Chủ tịch Tôn Đức Thắng (20/8/1888 – 30/3/1980)", publisher: "Sở Tư pháp, Cổng PBGDPL TP Cần Thơ", url: "https://pbgdpl.cantho.gov.vn/tieu-su-chu-tich-ton-duc-thang-2081888-3031981" },
      { title: "Dấu ấn Công hội bí mật", publisher: "Phạm Vũ, Báo Tuổi Trẻ", date: "11/8/2015", url: "https://tuoitre.vn/dau-an-cong-hoi-bi-mat-899700.htm" },
      { title: "Triển lãm gần 180 tài liệu, hiện vật chuyên đề “Ba Son – Dòng thời gian”", publisher: "Báo Văn Hóa", url: "https://baovanhoa.vn/van-hoa/trien-lam-gan-180-tai-lieu-hien-vat-chuyen-de-ba-son-dong-thoi-gian-102242.html" },
    ],
    notes: [
    ],
    narration:
      "Phòng thứ ba. Tôn Đức Thắng sinh năm 1888 ở Cù lao Ông Hổ, An Giang. Ông lên Sài Gòn học nghề, làm thợ máy, rồi bị động viên sang Pháp; năm 1919 ông tham gia cuộc kéo cờ đỏ phản chiến trên chiến hạm ở Biển Đen. Trở về Sài Gòn, ông lập Công hội bí mật, tổ chức công hội đầu tiên của công nhân Việt Nam. Tháng 8 năm 1925, ông lãnh đạo cuộc bãi công ở xưởng Ba Son, giữ chân chiến hạm Jules Michelet của Pháp đến cuối tháng 11. Cuối năm 1929, ông bị kết án 20 năm khổ sai và đày ra Côn Đảo. Sau Cách mạng Tháng Tám, ông trở thành Chủ tịch nước. Ngày nay, đại lộ ven sông Sài Gòn và một bảo tàng ở Thành phố mang tên ông.",
    audio: "/audio/ton-duc-thang.mp3",
  },
  {
    id: "ly-tu-trong",
    name: "Lý Tự Trọng",
    years: "1914 – 1931",
    born: 1914,
    died: 1931,
    milestone: { year: "1931", label: "Bắn mật thám Legrand để bảo vệ đồng chí tại cuộc mít tinh kỷ niệm Khởi nghĩa Yên Bái" },
    epithet: "Người đoàn viên thanh niên cộng sản đầu tiên – “sống mãi tuổi 17”",
    role: "Người đoàn viên Đoàn Thanh niên Cộng sản đầu tiên",
    hometown: "Sinh tại làng Bản Mạy, Nakhon Phanom (Thái Lan); quê gốc Thạch Hà, Hà Tĩnh",
    portrait: {
      src: "/portraits/ly-tu-trong.jpg",
      alt: "Chân dung trắng đen Lý Tự Trọng, ảnh tư liệu",
      url: commons("Ảnh_chụp_Lý_Tự_Trọng_(1914-1931).jpg"),
    },
    overview: [
      "Sinh năm 1914 trong một gia đình Việt kiều yêu nước ở Xiêm, ông được Nguyễn Ái Quốc chọn vào nhóm thiếu niên đưa sang Quảng Châu đào tạo năm 1926.",
      "Năm 1929 ông về Sài Gòn làm giao liên. Đầu năm 1931, ông bắn chết mật thám Legrand để bảo vệ đồng chí, bị bắt, kết án tử hình và hy sinh khi mới 17 tuổi.",
    ],
    context:
      "Lý Tự Trọng trưởng thành đúng giai đoạn Nguyễn Ái Quốc gây dựng Hội Việt Nam Cách mạng Thanh niên và chuẩn bị thành lập Đảng. Việc đào tạo một lớp thiếu niên ở nước ngoài nằm trong chiến lược tạo nguồn cán bộ lâu dài cho cách mạng.",
    timeline: [
      { date: "20/10/1914", text: "Sinh tại làng Bản Mạy (Nakhon Phanom, Thái Lan), quê gốc Thạch Hà, Hà Tĩnh." },
      { date: "1926", text: "Được Nguyễn Ái Quốc chọn vào nhóm thiếu niên đưa sang Quảng Châu, Trung Quốc." },
      { date: "1929", text: "Về Sài Gòn làm giao liên cho tổ chức cộng sản; làm việc trên các chuyến tàu ra vào cảng Sài Gòn." },
      { date: "8 – 9/2/1931", text: "Tại cuộc mít tinh kỷ niệm một năm Khởi nghĩa Yên Bái, bắn chết mật thám Legrand để bảo vệ diễn giả." },
      { date: "1931", text: "Bị bắt, giam ở Khám Lớn Sài Gòn, tra tấn và kết án tử hình." },
      { date: "20 – 21/11/1931", text: "Hy sinh khi mới 17 tuổi." },
    ],
    activities: [
      {
        title: "Giao liên và vận động thanh niên tại Sài Gòn",
        time: "Từ năm 1929",
        place: "Sài Gòn và các tuyến tàu biển ra vào cảng",
        text: "Làm nhiệm vụ liên lạc, chuyển tài liệu, kết nối tổ chức cộng sản trong nước với bên ngoài; đồng thời giác ngộ thanh niên công nhân.",
        meaning: "Giữ vững mạch liên lạc – công việc thầm lặng nhưng thiết yếu trong điều kiện hoạt động bí mật.",
      },
      {
        title: "Nổ súng bảo vệ đồng chí",
        time: "8/2 hoặc 9/2/1931",
        place: "Sài Gòn",
        text: "Trong cuộc mít tinh kỷ niệm một năm Khởi nghĩa Yên Bái, khi mật thám Legrand xông tới bắt người đang diễn thuyết, Lý Tự Trọng rút súng bắn chết hắn và bị bắt ngay tại chỗ.",
        meaning: "Hành động quả cảm trở thành biểu tượng cho tinh thần xả thân của tuổi trẻ cách mạng.",
      },
      {
        title: "Khí tiết trước tòa án thực dân",
        time: "1931",
        place: "Khám Lớn Sài Gòn",
        text: "Bị tra tấn, kết án tử hình, ông vẫn hiên ngang, biến phiên tòa thành diễn đàn tố cáo chế độ thực dân.",
        meaning: "Khẳng định lý tưởng cách mạng là lựa chọn của tuổi trẻ yêu nước.",
      },
    ],
    quote: {
      text: "Con đường của thanh niên chỉ là con đường cách mạng, không thể có con đường nào khác!",
      note: "Lý Tự Trọng trước tòa án thực dân, 1931",
    },
    significance: [
      "Lý Tự Trọng là biểu tượng bất tử của tuổi trẻ cách mạng Việt Nam. Câu nói của ông trở thành phương châm hành động của tổ chức Đoàn và của tuổi trẻ cả nước.",
      "Tên đường, tượng đài, giải thưởng và trường đoàn mang tên ông vừa là sự tôn vinh, vừa nhắc nhở trách nhiệm của thanh niên với đất nước.",
    ],
    gallery: [
      { src: "/tu-lieu/ltt-hoang-hoa-cuong-1925.jpg", caption: "Lý Tự Trọng (đánh dấu +) cùng học sinh Việt Nam Trường Hoàng Phố (Quảng Châu) và cán bộ Hội Việt Nam Cách mạng Thanh niên viếng mộ liệt sĩ Phạm Hồng Thái ở Hoàng Hoa Cương. Bảo tàng ghi năm chụp là 1925.", source: "Bảo tàng Lịch sử Quốc gia", url: pages.btlsqg },
      { ...khamLon, caption: "Khám Lớn Sài Gòn (Maison Centrale), nơi Lý Tự Trọng bị giam năm 1931." },
      { src: "/tu-lieu/ltt-tuong-dong.jpg", caption: "Tượng đồng bán thân Lý Tự Trọng, tác phẩm của nhà điêu khắc Trần Văn Lắm.", source: "Wikimedia Commons", credit: "Ảnh: Bùi Thụy Đào Nguyên · CC BY-SA 3.0", url: commons("Tựợng_đồng_Lý_Tự_Trọng.jpg") },
      { src: "/tu-lieu/ltt-tuong-ha-noi.jpg", caption: "Tượng Lý Tự Trọng ở Hà Nội.", source: "Bảo tàng Lịch sử Quốc gia", url: pages.btlsqg },
      { src: "/tu-lieu/ltt-tuong-niem-tphcm.jpg", caption: "Thế hệ trẻ TP.HCM mặc niệm tưởng nhớ trước tượng đài Lý Tự Trọng, tháng 10/2024.", source: "Báo Sài Gòn Giải Phóng", credit: "Ảnh: Cẩm Tuyết", url: pages.sggpLyTuTrong },
      { src: "/tu-lieu/ltt-sach-tu-lieu.jpg", caption: "Bìa sách “Chân dung anh hùng Lý Tự Trọng qua những tư liệu lịch sử” của tác giả Dương Trọng Phúc.", source: "Báo Lai Châu", url: pages.baoLaiChau },
    ],
    honors: [
      { name: "Đường Lý Tự Trọng", note: "Khu trung tâm TP.HCM (Quận 1 trước đây) và nhiều tỉnh, thành khác" },
      { name: "Tượng Lý Tự Trọng", note: "Dựng ở TP.HCM và Hà Nội" },
      { name: "Giải thưởng Lý Tự Trọng", note: "Trung ương Đoàn trao tặng cán bộ Đoàn xuất sắc" },
      { name: "Trường Đoàn Lý Tự Trọng", note: "Cùng khu tưởng niệm ông tại Hà Tĩnh" },
    ],
    street: { name: "Lý Tự Trọng", area: "Khu trung tâm" },
    documents: [
      { title: "Chân dung Lý Tự Trọng", publisher: "Bảo tàng Lịch sử Quốc gia", url: "https://baotanglichsu.vn/en/Articles/3183/17947/the-first-member-of-vietnamese-communist-youth-union-ly-tu-trong.html" },
      { title: "Tư liệu lịch sử về Lý Tự Trọng", publisher: "Báo Lai Châu Online", url: "https://baolaichau.vn/chinh-tri/chan-dung-anh-hung-ly-tu-trong-qua-nhung-tu-lieu-lich-su" },
      { title: "Kỷ niệm 110 năm ngày sinh", publisher: "Báo Sài Gòn Giải Phóng", url: "https://www.sggp.org.vn/tinh-than-ly-tu-trong-ngon-duoc-soi-duong-post764305.html" },
    ],
    sources: [
      { title: "The first member of Vietnamese Communist Youth Union – Lý Tự Trọng", publisher: "Thu Nhuận, Bảo tàng Lịch sử Quốc gia", date: "14/4/2015", url: "https://baotanglichsu.vn/en/Articles/3183/17947/the-first-member-of-vietnamese-communist-youth-union-ly-tu-trong.html" },
      { title: "Tinh thần Lý Tự Trọng – Ngọn đuốc soi đường", publisher: "Thu Hoài – Cẩm Tuyết, Báo Sài Gòn Giải Phóng", date: "19/10/2024", url: "https://www.sggp.org.vn/tinh-than-ly-tu-trong-ngon-duoc-soi-duong-post764305.html" },
      { title: "Chân dung anh hùng Lý Tự Trọng qua những tư liệu lịch sử", publisher: "Báo Lai Châu Online", date: "3/10/2024", url: "https://baolaichau.vn/chinh-tri/chan-dung-anh-hung-ly-tu-trong-qua-nhung-tu-lieu-lich-su" },
    ],
    notes: [
      "Tên khai sinh: nhiều tài liệu ghi Lê Hữu Trọng; Bảo tàng Lịch sử Quốc gia ghi Lê Văn Trọng.",
      "Ngày nổ súng: nhiều tài liệu ghi 8/2/1931; Bảo tàng Lịch sử Quốc gia ghi 9/2/1931.",
      "Ngày hy sinh: nhiều tài liệu ghi 21/11/1931; Bảo tàng Lịch sử Quốc gia ghi 20/11/1931.",
    ],
    narration:
      "Phòng thứ tư. Lý Tự Trọng sinh năm 1914 trong một gia đình Việt kiều yêu nước ở Xiêm, quê gốc Hà Tĩnh. Năm 1926, ông được Nguyễn Ái Quốc chọn sang Quảng Châu đào tạo. Năm 1929, ông về Sài Gòn làm giao liên, kết nối tổ chức cộng sản trong và ngoài nước. Tháng 2 năm 1931, tại cuộc mít tinh kỷ niệm một năm Khởi nghĩa Yên Bái, ông bắn chết mật thám Legrand để bảo vệ đồng chí đang diễn thuyết, rồi bị bắt. Trước tòa án thực dân, ông nói: Con đường của thanh niên chỉ là con đường cách mạng, không thể có con đường nào khác. Ông hy sinh năm 1931, khi mới 17 tuổi. Ông là người đoàn viên thanh niên cộng sản đầu tiên; tên ông được đặt cho một con đường ở trung tâm Thành phố.",
    audio: "/audio/ly-tu-trong.mp3",
  },
  {
    id: "vo-van-tan",
    name: "Võ Văn Tần",
    years: "1891 – 1941",
    born: 1891,
    died: 1941,
    milestone: { year: "1937", label: "Làm Bí thư Xứ ủy Nam Kỳ" },
    epithet: "Người chiến sĩ cộng sản kiên cường, mẫu mực – Bí thư Xứ ủy Nam Kỳ",
    role: "Bí thư Xứ ủy Nam Kỳ, Ủy viên Thường vụ Trung ương Đảng",
    hometown: "Làng Đức Hòa, huyện Đức Hòa, tỉnh Chợ Lớn cũ (nay thuộc Long An)",
    portrait: {
      src: "/portraits/vo-van-tan.jpg",
      alt: "Chân dung trắng đen Võ Văn Tần, ảnh tư liệu",
      url: commons("Portrait_of_Võ_Văn_Tần_2.jpg"),
    },
    overview: [
      "Từ Hội kín Nguyễn An Ninh và Hội Việt Nam Cách mạng Thanh niên, ông trở thành một trong những đảng viên đầu tiên của Đảng Cộng sản Việt Nam.",
      "Ông lần lượt là Bí thư Tỉnh ủy Chợ Lớn, Gia Định rồi Bí thư Xứ ủy Nam Kỳ, tham gia chuẩn bị Khởi nghĩa Nam Kỳ; bị bắt năm 1940 và hy sinh ngày 28/8/1941.",
    ],
    context:
      "Võ Văn Tần hoạt động trong giai đoạn Đảng ra đời (1930) và lãnh đạo các cao trào cách mạng ở Nam Kỳ. Vùng Đức Hòa – Chợ Lớn – Gia Định là địa bàn trọng yếu sát Sài Gòn, nơi phong trào công – nông phát triển mạnh.",
    timeline: [
      { date: "8/1891", text: "Sinh tại làng Đức Hòa (Chợ Lớn cũ, nay Long An) trong gia đình nông dân yêu nước." },
      { date: "1923", text: "Tham gia đấu tranh chống sưu cao thuế nặng; bị bắt nhưng không đủ chứng cứ kết tội." },
      { date: "1926", text: "Gia nhập Hội kín Nguyễn An Ninh, sau đó là Hội Việt Nam Cách mạng Thanh niên." },
      { date: "11/1929", text: "Gia nhập An Nam Cộng sản Đảng." },
      { date: "4/6/1930", text: "Trực tiếp lãnh đạo cuộc biểu tình của nông dân Đức Hòa." },
      { date: "1931 – 1936", text: "Bí thư Huyện ủy Đức Hòa, Bí thư Tỉnh ủy Chợ Lớn rồi Gia Định." },
      { date: "1935 – 1939", text: "Vào Xứ ủy Nam Kỳ (11/1935); Bí thư Xứ ủy, Ủy viên Trung ương (3/1937); Ủy viên Thường vụ Trung ương (3/1938)." },
      { date: "1940", text: "Bị thực dân Pháp bắt." },
      { date: "28/8/1941", text: "Bị xử bắn tại Hóc Môn sau khoảng 16 tháng tù đày, tra tấn." },
    ],
    activities: [
      {
        title: "Xây dựng tổ chức Đảng, lãnh đạo biểu tình Đức Hòa",
        time: "1930 – 1936",
        place: "Đức Hòa, Chợ Lớn, Gia Định (vùng ven Sài Gòn)",
        text: "Lập chi bộ, xây dựng tổ chức Đảng ở Đức Hòa; ngày 4/6/1930 trực tiếp lãnh đạo biểu tình của nông dân. Lần lượt làm Bí thư Huyện ủy, Bí thư Tỉnh ủy Chợ Lớn rồi Gia Định.",
        meaning: "Giữ vững và phát triển phong trào ở địa bàn trọng yếu sát Sài Gòn, dù bị khủng bố ác liệt.",
      },
      {
        title: "Lãnh đạo Xứ ủy Nam Kỳ, chuẩn bị Khởi nghĩa",
        time: "1935 – 1940",
        place: "Nam Kỳ, trung tâm là Sài Gòn – Gia Định",
        text: "Bí thư Xứ ủy Nam Kỳ – người lãnh đạo cao nhất của Đảng bộ Nam Kỳ thời kỳ này; khôi phục tổ chức Đảng sau khủng bố và tham gia chuẩn bị Khởi nghĩa Nam Kỳ.",
        meaning: "Khẳng định vai trò nhà lãnh đạo chiến lược của phong trào cách mạng Nam Kỳ.",
      },
      {
        title: "Giữ vững khí tiết đến phút cuối",
        time: "1940 – 28/8/1941",
        place: "Hóc Môn – Bà Điểm (nay thuộc TP.HCM)",
        text: "Qua khoảng 16 tháng tù đày, tra tấn, ông không khuất phục. Ngày 28/8/1941, ông bị xử bắn cùng một số đồng chí lãnh đạo khác sau Khởi nghĩa Nam Kỳ.",
        meaning: "Tấm gương “sống cống hiến, chết vẻ vang” cho các thế hệ sau.",
      },
    ],
    significance: [
      "Võ Văn Tần được đánh giá là nhà lãnh đạo tiền bối tài năng, mẫu mực của Đảng. Cuộc đời ông gắn với quá trình xây dựng Đảng bộ Nam Kỳ và các cao trào cách mạng vùng ven Sài Gòn những năm 1930 – 1940.",
      "Sự hy sinh của ông và các đồng chí sau Khởi nghĩa Nam Kỳ là tổn thất lớn, nhưng đã hun đúc ý chí đấu tranh, góp phần vào thắng lợi của Cách mạng Tháng Tám 1945.",
    ],
    gallery: [
      { src: "/tu-lieu/vvt-chan-dung.jpg", caption: "Một ảnh chân dung khác của Võ Văn Tần (ảnh tư liệu).", source: "Wikimedia Commons", credit: "Public domain", url: commons("Portrait_of_Võ_Văn_Tần.jpg") },
      { src: "/tu-lieu/vvt-cong-vien.jpg", caption: "Công viên Võ Văn Tần (ảnh chụp năm 2017).", source: "Wikimedia Commons", credit: "Ảnh: Myhanh · CC BY 4.0", url: commons("CongVienVoVanTan.JPG") },
      { src: "/tu-lieu/vvt-hoi-thao-2021.jpg", caption: "Hội thảo khoa học “Đồng chí Võ Văn Tần với cách mạng Việt Nam và quê hương Long An” nhân kỷ niệm 130 năm ngày sinh, ngày 26/8/2021.", source: "Báo Sài Gòn Giải Phóng", url: pages.sggpVoVanTan },
      { src: "/tu-lieu/vvt-le-gio-nga-ba-giong.jpg", caption: "Lãnh đạo TP.HCM dâng hương tại Khu di tích Ngã Ba Giồng (Hóc Môn) trong lễ giỗ 81 năm ngày hy sinh của các đồng chí nguyên lãnh đạo Đảng, ngày 28/8/2022.", source: "Báo Sài Gòn Giải Phóng", url: pages.sggpLeGio },
    ],
    honors: [
      { name: "Đường Võ Văn Tần", note: "Tuyến đường lớn ở khu trung tâm (khu vực Quận 3 trước đây)" },
      { name: "Tượng đài Võ Văn Tần", note: "Khu di tích Ngã tư Đức Hòa, Long An" },
      { name: "Lễ giỗ ngày 28/8", note: "Lãnh đạo TP.HCM dâng hương tưởng niệm hằng năm" },
      { name: "Trường học, công trình", note: "Nhiều nơi ở Long An và các địa phương khác mang tên ông" },
    ],
    street: { name: "Võ Văn Tần", area: "Khu vực Quận 3 trước đây" },
    documents: [
      { title: "Chân dung và tượng đài Võ Văn Tần", publisher: "Báo Nhân Dân", url: "https://nhandan.vn/vang-mai-khuc-ca-tren-dong-vam-co-dong-post658734.html" },
      { title: "Tư liệu về cuộc đời hoạt động", publisher: "Báo Sài Gòn Giải Phóng", url: "https://www.sggp.org.vn/dong-chi-vo-van-tan-nguoi-chien-si-cong-san-kien-cuong-mau-muc-post607468.html" },
      { title: "Lễ giỗ 28/8 tại Hóc Môn", publisher: "Báo Sài Gòn Giải Phóng", url: "https://www.sggp.org.vn/lanh-dao-tphcm-dang-hoa-dang-huong-va-du-le-gio-81-nam-ngay-hy-sinh-cua-cac-dong-chi-nguyen-lanh-dao-dang-post649216.html" },
    ],
    sources: [
      { title: "Vang mãi khúc ca trên dòng Vàm Cỏ Đông", publisher: "Lê Vy, Báo Nhân Dân", date: "7/8/2021", url: "https://nhandan.vn/vang-mai-khuc-ca-tren-dong-vam-co-dong-post658734.html" },
      { title: "Đồng chí Võ Văn Tần – người chiến sĩ cộng sản kiên cường, mẫu mực", publisher: "Đăng Nguyên, Báo Sài Gòn Giải Phóng", date: "26/8/2021", url: "https://www.sggp.org.vn/dong-chi-vo-van-tan-nguoi-chien-si-cong-san-kien-cuong-mau-muc-post607468.html" },
      { title: "Lãnh đạo TPHCM dự lễ giỗ 81 năm ngày hy sinh của các đồng chí nguyên lãnh đạo Đảng", publisher: "Văn Minh, Báo Sài Gòn Giải Phóng", date: "28/8/2022", url: "https://www.sggp.org.vn/lanh-dao-tphcm-dang-hoa-dang-huong-va-du-le-gio-81-nam-ngay-hy-sinh-cua-cac-dong-chi-nguyen-lanh-dao-dang-post649216.html" },
    ],
    notes: [
      "Ngày bị bắt: nhiều tài liệu ghi 21/4/1940; Báo Nhân Dân ghi 14/7/1940, tại ấp Tân Thới Trung, Hóc Môn – Bà Điểm.",
      "Nơi hy sinh: theo Báo Sài Gòn Giải Phóng, ông hy sinh ngày 28/8/1941 tại Nhà thương Giếng Nước, nay là Bệnh viện Hóc Môn.",
    ],
    narration:
      "Phòng thứ năm. Võ Văn Tần sinh năm 1891 trong một gia đình nông dân ở Đức Hòa, bên dòng Vàm Cỏ Đông. Từ Hội kín Nguyễn An Ninh và Hội Việt Nam Cách mạng Thanh niên, ông trở thành một trong những đảng viên đầu tiên của Đảng. Ngày 4 tháng 6 năm 1930, ông lãnh đạo cuộc biểu tình của nông dân Đức Hòa. Ông lần lượt làm Bí thư Tỉnh ủy Chợ Lớn, Gia Định, rồi từ năm 1937 là Bí thư Xứ ủy Nam Kỳ, tham gia chuẩn bị Khởi nghĩa Nam Kỳ. Năm 1940, ông bị thực dân Pháp bắt. Sau khoảng mười sáu tháng tù đày, ngày 28 tháng 8 năm 1941, ông bị xử bắn tại Hóc Môn. Hôm nay, một tuyến đường lớn ở trung tâm Thành phố mang tên ông.",
    audio: "/audio/vo-van-tan.mp3",
  },
  {
    id: "nguyen-thi-minh-khai",
    name: "Nguyễn Thị Minh Khai",
    alias: "tên thật Nguyễn Thị Vịnh",
    years: "1910 – 1941",
    born: 1910,
    died: 1941,
    milestone: { year: "1937", label: "Làm Bí thư Thành ủy Sài Gòn – Chợ Lớn" },
    epithet: "Nữ Bí thư Thành ủy Sài Gòn – Chợ Lớn, người nữ anh hùng trên quê hương Xô Viết",
    role: "Bí thư Thành ủy Sài Gòn – Chợ Lớn; đại biểu Đại hội VII Quốc tế Cộng sản",
    hometown: "Vĩnh Yên, thành phố Vinh, tỉnh Nghệ An",
    portrait: {
      src: "/portraits/nguyen-thi-minh-khai.jpg",
      alt: "Chân dung trắng đen Nguyễn Thị Minh Khai, ảnh tư liệu",
      url: commons("Nguyen_Thi_Minh_Khai.jpg"),
    },
    overview: [
      "Bà từng làm thư ký giúp việc cho Nguyễn Ái Quốc ở Trung Quốc, và năm 1935 là đại biểu dự Đại hội VII Quốc tế Cộng sản tại Moskva, trình bày tham luận về vai trò của phụ nữ trong cách mạng Đông Dương.",
      "Tháng 9/1937 bà về Sài Gòn làm Bí thư Thành ủy Sài Gòn – Chợ Lớn khi mới 27 tuổi. Bị bắt năm 1940, bà hy sinh năm 1941 khi 31 tuổi.",
    ],
    context:
      "Bà trưởng thành trong cao trào Xô Viết Nghệ Tĩnh (1930 – 1931) và giai đoạn Đảng lãnh đạo phong trào dân chủ, rồi chuẩn bị khởi nghĩa cuối những năm 1930 – tiêu biểu cho lớp cán bộ nữ được tôi luyện cả trong nước và trên trường quốc tế.",
    timeline: [
      { date: "30/9/1910", text: "Sinh tại Vĩnh Yên, TP Vinh, Nghệ An; tên thật Nguyễn Thị Vịnh. Mẹ là cụ Đậu Thị Thư (Mẹ Việt Nam Anh hùng)." },
      { date: "Đầu 1929", text: "Thoát ly gia đình để hoạt động cách mạng." },
      { date: "Sau 3/2/1930", text: "Gia nhập Đảng; làm thư ký giúp việc cho Nguyễn Ái Quốc tại Văn phòng Chi bộ Đông phương ở Trung Quốc." },
      { date: "1935", text: "Dự Đại hội VII Quốc tế Cộng sản tại Moskva. Kết hôn với đồng chí Lê Hồng Phong." },
      { date: "9/1937", text: "Về Sài Gòn; được cử làm Bí thư Thành ủy Sài Gòn – Chợ Lớn." },
      { date: "30/7/1940", text: "Bị bắt khi đang chuẩn bị Khởi nghĩa Nam Kỳ; giam ở Khám Lớn Sài Gòn, tra tấn nhưng không khai báo." },
      { date: "8/1941", text: "Hy sinh khi 31 tuổi, tại Nhà thương Giếng Nước (nay Bệnh viện Hóc Môn)." },
    ],
    activities: [
      {
        title: "Hoạt động quốc tế và trưởng thành về lý luận",
        time: "1930 – 1935",
        place: "Trung Quốc, Liên Xô (Moskva)",
        text: "Thư ký giúp việc cho Nguyễn Ái Quốc tại Văn phòng Chi bộ Đông phương của Quốc tế Cộng sản; năm 1935 dự Đại hội VII Quốc tế Cộng sản, trình bày tham luận về phụ nữ Đông Dương.",
        meaning: "Nâng cao vị thế của phụ nữ Việt Nam trong phong trào cộng sản quốc tế.",
      },
      {
        title: "Bí thư Thành ủy Sài Gòn – Chợ Lớn",
        time: "Từ tháng 9/1937",
        place: "Sài Gòn – Chợ Lớn",
        text: "Khi mới 27 tuổi, bà trực tiếp lãnh đạo phong trào đấu tranh của công nhân, lao động và các tầng lớp nhân dân thành phố trong thời kỳ vận động dân chủ và chuẩn bị khởi nghĩa.",
        meaning: "Một trong những nữ Bí thư Thành ủy đầu tiên – minh chứng cho năng lực lãnh đạo của phụ nữ.",
      },
      {
        title: "Chuẩn bị Khởi nghĩa Nam Kỳ, bị bắt và hy sinh",
        time: "1940 – 1941",
        place: "Sài Gòn – Hóc Môn",
        text: "Bị bắt ngày 30/7/1940 sau khi lộ cơ sở in báo Tiến Lên, giam ở Khám Lớn Sài Gòn, bị tra tấn dã man nhưng giữ vững khí tiết. Năm 1941, bà bị thực dân Pháp xử bắn cùng một số đồng chí lãnh đạo.",
        meaning: "Biểu tượng bất khuất của người phụ nữ Việt Nam và của phong trào cách mạng Nam Kỳ.",
      },
    ],
    significance: [
      "Việc một phụ nữ 27 tuổi đảm nhiệm cương vị Bí thư Thành ủy Sài Gòn – Chợ Lớn là minh chứng cho vai trò và bản lĩnh của phụ nữ trong sự nghiệp cách mạng.",
      "Tên bà được đặt cho nhiều đường phố, trường học – nhắc thế hệ trẻ, đặc biệt là nữ sinh, về truyền thống “anh hùng, bất khuất, trung hậu, đảm đang”.",
    ],
    gallery: [
      { src: "/tu-lieu/ntmk-le-hong-phong.jpg", caption: "Chân dung hai nhà lãnh đạo Nguyễn Thị Minh Khai và Lê Hồng Phong.", source: "Báo Pháp luật Việt Nam", url: pages.baoPhapLuat },
      { src: "/tu-lieu/ntmk-khoi-nghia-nam-ky.jpg", caption: "Ảnh tư liệu trong chuyên đề “Khởi nghĩa Nam Kỳ góp phần tô thắm trang sử quật cường của dân tộc” (22/11/2020).", source: "Báo Sài Gòn Giải Phóng", url: pages.sggpNamKy },
      { ...khamLon, caption: "Khám Lớn Sài Gòn (Maison Centrale), nơi bà bị giam sau khi bị bắt ngày 30/7/1940." },
      { src: "/tu-lieu/ntmk-ky-vat.jpg", caption: "Một số kỷ vật về Nguyễn Thị Minh Khai trưng bày tại Nhà tưởng niệm.", source: "Báo Pháp luật Việt Nam", url: pages.baoPhapLuat },
      { src: "/tu-lieu/ntmk-truong.jpg", caption: "Trường THPT Nguyễn Thị Minh Khai (TP.HCM) mang tên bà.", source: "Wikimedia Commons", credit: "Ảnh: Ngô Trung · CC BY-SA 3.0", url: commons("Trường_Nguyễn_thị_Minh_Khai.JPG") },
    ],
    honors: [
      { name: "Đường Nguyễn Thị Minh Khai", note: "Trục đường lớn nối khu vực Quận 1 – Quận 3 trước đây" },
      { name: "Trường THPT Nguyễn Thị Minh Khai", note: "Tiền thân là Trường Nữ trung học (Áo Tím / Gia Long)" },
      { name: "Nhà tưởng niệm", note: "Phường Quang Trung, TP Vinh, Nghệ An" },
      { name: "Lễ giỗ ngày 28/8", note: "TP.HCM dâng hương tưởng niệm bà cùng các đồng chí hy sinh năm 1941" },
    ],
    street: { name: "Nguyễn Thị Minh Khai", area: "Nối Quận 1 – Quận 3 trước đây" },
    documents: [
      { title: "Chân dung Nguyễn Thị Minh Khai", publisher: "Báo Pháp luật Việt Nam", url: "https://baophapluat.vn/nguyen-thi-minh-khai-nguoi-nu-anh-hung-tren-que-huong-xo-viet-post411389.html" },
      { title: "Kỷ vật của Nguyễn Thị Minh Khai", publisher: "Báo Pháp luật Việt Nam", url: "https://baophapluat.vn/post-504431.html" },
      { title: "Chuyên đề Khởi nghĩa Nam Kỳ", publisher: "Báo Sài Gòn Giải Phóng", url: "https://www.sggp.org.vn/khoi-nghia-nam-ky-gop-phan-to-tham-trang-su-quat-cuong-cua-dan-toc-post575952.html" },
    ],
    sources: [
      { title: "Nguyễn Thị Minh Khai – Người nữ anh hùng trên quê hương Xô Viết", publisher: "Kim Long, Báo Pháp luật Việt Nam", date: "7/9/2021", url: "https://baophapluat.vn/nguyen-thi-minh-khai-nguoi-nu-anh-hung-tren-que-huong-xo-viet-post411389.html" },
      { title: "Khởi nghĩa Nam Kỳ góp phần tô thắm trang sử quật cường của dân tộc", publisher: "Báo Sài Gòn Giải Phóng", date: "22/11/2020", url: "https://www.sggp.org.vn/khoi-nghia-nam-ky-gop-phan-to-tham-trang-su-quat-cuong-cua-dan-toc-post575952.html" },
      { title: "Lãnh đạo TPHCM dự lễ giỗ 81 năm ngày hy sinh của các đồng chí nguyên lãnh đạo Đảng", publisher: "Văn Minh, Báo Sài Gòn Giải Phóng", date: "28/8/2022", url: "https://www.sggp.org.vn/lanh-dao-tphcm-dang-hoa-dang-huong-va-du-le-gio-81-nam-ngay-hy-sinh-cua-cac-dong-chi-nguyen-lanh-dao-dang-post649216.html" },
    ],
    notes: [
      "Ngày hy sinh: Báo Sài Gòn Giải Phóng ghi 28/8/1941; Báo Pháp luật Việt Nam ghi 26/8/1941.",
    ],
    narration:
      "Phòng thứ sáu. Nguyễn Thị Minh Khai, tên thật Nguyễn Thị Vịnh, sinh năm 1910 ở Vinh, Nghệ An. Thoát ly hoạt động cách mạng từ sớm, bà làm thư ký giúp việc cho Nguyễn Ái Quốc ở Trung Quốc, và năm 1935 dự Đại hội Bảy Quốc tế Cộng sản tại Moskva, trình bày tham luận về vai trò của phụ nữ Đông Dương. Tháng 9 năm 1937, bà về Sài Gòn làm Bí thư Thành ủy Sài Gòn – Chợ Lớn khi mới 27 tuổi, lãnh đạo phong trào của công nhân và nhân dân thành phố. Ngày 30 tháng 7 năm 1940, khi đang chuẩn bị Khởi nghĩa Nam Kỳ, bà bị bắt, bị tra tấn ở Khám Lớn Sài Gòn nhưng không khai báo. Bà hy sinh năm 1941 ở tuổi 31. Ngày nay, một trục đường lớn và một ngôi trường nổi tiếng ở Thành phố mang tên bà.",
    audio: "/audio/nguyen-thi-minh-khai.mp3",
  },
];
