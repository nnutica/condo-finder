export interface Condo {
    id: number;
    name: string;
    location: string;
    price: number;
    bedrooms: number;
    bathrooms: number;
    area: number; 
    image: string;
    description?: string; // Optional property for condo description
    }

    export const condoData: Condo[] = [
        {
            id: 1,
            name: "Skyline Condo",
            price: 3500000,
            location: "Bangkok",
            bedrooms: 2,
            bathrooms: 2,
            area: 30,
            image: "https://sereneproperty.com/2019/connect/assets/frontend/img/photo-connect-800x815--1.jpg",
          },
          {
            id: 2,
            name: "Pillar Condo",
            price: 2000000,
            location: "Bangkok",
            bedrooms: 2,
            bathrooms: 2,
            area: 28,
            image: "https://assets.sansiri.com/o77site/project-image-dcondo-sence-bangsaen-condo-landscape-935x745.jpg",
          },
          {
            id: 3,
            name: "Dominator Project3",
            price: 6000000,
            location: "Korat, Thailand",
            bedrooms: 2,
            bathrooms: 2,
            area: 40,
            image: "https://www.condonayoo.com/wp-content/uploads/2024/03/04af7c1b528890017899275a7f3865de.jpg",
          },
          {
            id: 4,
            name: "Oceanview Condo",
            location: "Krabi, Thailand",
            price: 4500000,
            bedrooms: 2,
            bathrooms: 2,
            area: 65,
            image: "https://www.lh.co.th/_next/image?url=https%3A%2F%2Flh-assets.lh.co.th%2Fimages%2Foriginal%2Fprojects%2F94c66f67-f6c5-4ecb-9337-99d72ca58b38%2Fprojects-language%2F6e3ed7a6-e962-414e-861d-5d054e1293aa%2Fthai%2Fpage-setting%2Fd9da708a-59ed-4422-b001-4150370287d5%2F3b5211c7-5d78-4185-b542-8e0daa474026.jpeg&w=3840&q=75",
          },
          {
            id: 5,
            name: "La Vie Condo",
            location: "Bangkok, Thailand",
            price: 13200000,
            bedrooms: 1,
            bathrooms: 1,
            area: 45,
            image: "https://assets.sansiri.com/o77site/sansiri-via-ari-condominium-thumbnail-portrait-810x890.jpg",
          },
          {
            id: 6,
            name: "Skyview Condo",
            location: "Chiang Mai, Thailand",
            price: 5500000,
            bedrooms: 4,
            bathrooms: 2,
            area: 85,
            image: "https://senxgroup.com/wp-content/uploads/2023/07/piti101_Thumb_web.jpg",
          },
          {
            id: 7,
            name: "Alpha Condo Ladprao",
            location: "Bangkok, Thailand",
            price: 12500000,
            bedrooms: 3,
            bathrooms: 2,
            area: 85,
            image: "https://www.realasset.co.th/upload/project/1000-x-700-px.jpg",
          },
          {
            id: 8,
            name: "Kave Condo",
            location: "Pathum thani, Thailand",
            price: 1500000,
            bedrooms: 3,
            bathrooms: 2,
            area: 25,
            image: "https://image.makewebeasy.net/makeweb/m_1920x0/fPEtgEL81/DefaultData/383350358_696782892481345_3867651432550914633_n_11zon.jpg?v=202405291424",
          },
          {
            id: 9,
            name: "DUO Ohio ",
            location: "Khot Kaen, Thailand",
            price: 7500000,
            bedrooms: 2,
            bathrooms: 1,
            area: 32,
            image: "https://whyibuythiscondo.com/wp-content/uploads/2017/09/21587046_496479674055655_9222976287364109703_o.jpg",
          },
          {
            id: 10,
            name: "Sky&Sea Condo",
            location: "HuaHin, Thailand",
            price: 11700000,
            bedrooms: 3,
            bathrooms: 2,
            area: 64,
            image: "https://www.sansiri.com/media/uuchsdeu/dcondo-campus-khonkaen-condo-cover-banner-mobile-1080x1080.webp",
          },
          {
            id: 11,
            name: "Kave WonderWorld",
            location: "Bangkok, Thailand",
            price: 1900000,
            bedrooms: 2,
            bathrooms: 2,
            area: 30,
            image: "https://www.checkraka.com/uploaded/_resize/max350x197/01/0199193e61ee25c4faafef71bf523323.webp",
          },
          {
            id: 12,
            name: "WowZaa Condo",
            location: "Korat, Thailand",
            price: 8500000,
            bedrooms: 4,
            bathrooms: 2,
            area: 72,
            image: "https://cdn-cms.pgimgs.com/areainsider/2019/03/The-Reserve-Sathorn_1280_960.jpg",
          },

    ]