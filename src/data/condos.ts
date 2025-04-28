export interface Condo {
    id: number;
    name: string;
    location: string;
    price: number;
    bedrooms: number;
    bathrooms: number;
    area: number; 
    image: string;
    }

    export const condoData: Condo[] = [
        {
            id: 1,
            name: "Skyline Condo",
            price: 3500000,
            location: "Bangkok",
            bedrooms: 2,
            bathrooms: 2,
            area: 28,
            image: "640x480",
          },
          {
            id: 2,
            name: "Skyline Condo",
            price: 2000000,
            location: "Bangkok",
            bedrooms: 2,
            bathrooms: 2,
            area: 28,
            image: "640x480",
          },
          {
            id: 3,
            name: "Skyline Condo",
            price: 3500000,
            location: "Bangkok",
            bedrooms: 2,
            bathrooms: 2,
            area: 28,
            image: "640x480",
          },
          {
            id: 4,
            name: "Skyview Condo",
            location: "Bangkok, Thailand",
            price: 4500000,
            bedrooms: 2,
            bathrooms: 2,
            area: 65,
            image: "640x480",
          },
          {
            id: 5,
            name: "Oceanview Condo",
            location: "Pattaya, Thailand",
            price: 3200000,
            bedrooms: 1,
            bathrooms: 1,
            area: 45,
            image: "640x480",
          },
          {
            id: 6,
            name: "Mountainview Condo",
            location: "Chiang Mai, Thailand",
            price: 5500000,
            bedrooms: 3,
            bathrooms: 2,
            area: 85,
            image: "640x480",
          },

    ]