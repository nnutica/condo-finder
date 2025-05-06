export interface Member {
    id: string;
    name: string;
    role: string;
    image?: string;
  }

export const members: Member[] = [
    {
        id: "1650703596",
        name: "นิตินัทธ์ ล้ออุทัย",
        role: "หัวหน้าทีม",
        image:"src/assets/member/nut.jpg"
      },
      {
        id: "1650700964",
        name: "หรรษธร เกษียร",
        role: "มือปืนรับจ้าง แห่งลุ่มแม่น้ำโขง",
        image:"src/assets/member/tar.png"
      },
      {
        id: "1650704404",
        name: "ก้ายอ เมล",
        role: "นักพัฒนา Backend",
        image:"src/assets/member/korya.png"
      },
      {
        id: "1650703901",
        name: "แซมมี่ ขี้กระเซ็น",
        role: "Gay",
        image:"src/assets/member/sam.png"
      },
      {
        id: "1650702135",
        name: "Alexsander Ojoe De GayMO",
        role: "Gay",
        image:"src/assets/member/ojoe.png"
      },
];