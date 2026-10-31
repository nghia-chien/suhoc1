import { heroes } from "../data/heroes";
import { Room } from "./Room";

export function Rooms() {
  return (
    <section id="phong-trung-bay" className="scroll-mt-14">
      <div className="wrap border-t border-line pt-20">
        <h2 className="text-4xl md:text-5xl">Phòng trưng bày</h2>
        <p className="mt-3 max-w-2xl text-ink-soft">
          Mỗi phòng gồm tiểu sử, hoạt động tại Sài Gòn, hình ảnh tư liệu, ý nghĩa – vinh danh và nguồn tham khảo. Bấm nút
          phát để nghe thuyết minh.
        </p>
      </div>
      {heroes.map((h, i) => (
        <Room key={h.id} hero={h} index={i} />
      ))}
    </section>
  );
}
