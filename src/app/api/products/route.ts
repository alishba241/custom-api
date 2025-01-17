import { NextResponse } from "next/server";


interface IProducts {
    product_name: string;
    product_description: string;
    price: number;
    stock: number;
    sizes_available: string[];
    image: string;
    id: string;
}

// API Data
const products: IProducts[] = [
  
    {
        product_name: "Trenton modular sofa_3",
        product_description:
            "A modern, versatile modular sofa designed for comfort and style. Its clean lines and customizable layout make it perfect for any living space.",
        price: 25000,
        stock: 4,
        sizes_available: ["L", "XL", "XS"],
        image:
            "https://res.cloudinary.com/dqc4xmj4g/image/upload/v1736284448/Trenton_modular_sofa_3_1_s5q1vn.png",
        id: "1",
    },
    {
        product_name: "Granite Dining Table with Dining Chair",
        product_description:
            "A sophisticated dining set featuring a solid granite tabletop paired with elegant dining chairs. Ideal for both formal and casual settings.",
        price: 25000,
        stock: 92,
        sizes_available: ["L", "XL", "XS"],
        image:
            "https://res.cloudinary.com/dqc4xmj4g/image/upload/v1736284514/Granite_dining_table_with_dining_chair_1_nf4cea.png",
        id: "2",
    },
    {
        product_name: "Outdoor Bar Table and Stool",
        product_description:
            "A stylish outdoor bar set, designed for both relaxation and entertainment. Features a sleek, weather-resistant design perfect for patios or terraces.",
        price: 25000,
        stock: 5,
        sizes_available: ["L", "XL", "XS"],
        image:
            "https://res.cloudinary.com/dqc4xmj4g/image/upload/v1736284618/Outdoor_bar_table_and_stool_1_twusni.png",
        id: "3",
    },
    {
        product_name: "Plain Console with Teak Mirror",
        product_description:
            "A minimalistic console table crafted from solid wood, featuring a beautiful teak mirror to enhance any entryway or hallway.",
        price: 25000,
        stock: 68,        sizes_available: ["L", "XL", "XS"],
        image:
            "https://res.cloudinary.com/dqc4xmj4g/image/upload/v1736284687/Plain_console_with_teak_mirror_1_hsanoh.png",
        id: "4",
    },
    {
        product_name: "Grain Coffee Table",
        product_description:
            "A unique coffee table featuring a natural wood grain pattern, perfect for creating a warm and inviting atmosphere in any living room.",
        price: 15000,
        stock: 18,
        sizes_available: ["L", "XL", "XS"],
        image:
            "https://res.cloudinary.com/dqc4xmj4g/image/upload/v1736284712/Grain_coffee_table_1_fj0cz3.png",
        id: "5",
    },
    {
        product_name: "Kent Coffee Table",
        product_description:
            "A sleek, contemporary coffee table with a glass top and a bold metallic frame. Adds elegance and functionality to any space.",
        price: 225000,
        stock: 29,
        sizes_available: ["L", "XL", "XS"],
        image:
            "https://res.cloudinary.com/dqc4xmj4g/image/upload/v1736284740/Kent_coffee_table_1_ucncvs.png",
        id: "6",
    },
    {
        product_name: "Round Coffee Table_Color 2",
        product_description:
            "A round, compact coffee table with a contemporary design. Perfect for small living spaces, offering a stylish and functional centerpiece.",
        price: 251000,
        stock: 12,
        sizes_available: ["L", "XL", "XS"],
        image:
            "https://res.cloudinary.com/dqc4xmj4g/image/upload/v1736284796/Round_coffee_table_color_2_1_uc6dgx.png",
        id: "7",
    },
    {
        product_name: "Reclaimed Teak Coffee Table",
        product_description:
            "This eco-friendly coffee table features reclaimed teak wood, showcasing a rustic yet modern aesthetic. Adds character to any room.",
        price: 25200,
        stock: 59,
        sizes_available: ["L", "XL", "XS"],
        image:
            "https://res.cloudinary.com/dqc4xmj4g/image/upload/v1736284818/Reclaimed_teak_coffee_table_1_uxitfz.png",
        id: "8",
    },
    {
        product_name: "Plain Console",
        product_description:
            "A simple, functional console table perfect for smaller spaces. Features a minimalist design with clean lines and ample storage.",
        price: 258200,
        stock: 18,
        sizes_available: ["L", "XL", "XS"],
        image:
            "https://res.cloudinary.com/dqc4xmj4g/image/upload/v1736284988/Plain_console__1_tmei5n.png",
        id: "9",
    },
    {
        product_name: "Reclaimed Teak Sideboard",
        product_description:
            "A rustic sideboard crafted from reclaimed teak, offering both storage and charm. Ideal for living or dining rooms with its timeless appeal.",
        price: 20000,
        stock: 70,
        sizes_available: ["L", "XL", "XS"],
        image:
            "https://res.cloudinary.com/dqc4xmj4g/image/upload/v1736285045/Reclaimed_teak_coffee_table_1_ivjdfk.png",
        id: "10",
    },
    {
        product_name: "SJP_0825",
        product_description:
            "A stylish accent piece designed for a contemporary home, combining comfort and modern aesthetics with luxurious fabric.",
        price: 200000,
        stock: 52,
        sizes_available: ["L", "XL", "XS"],
        image:
            "https://res.cloudinary.com/dqc4xmj4g/image/upload/v1736285200/SJP_0825_1_anv8fz.png",
        id: "11",
    },
    {
        product_name: "Bella Chair and Table",
        product_description:
            "A chic chair and table set that effortlessly combines style and functionality. Ideal for cozy nooks or casual dining areas.",
        price: 100000,
        stock: 71,
        sizes_available: ["L", "XL", "XS"],
        image:
            "https://res.cloudinary.com/dqc4xmj4g/image/upload/v1736285232/Bella_chair_and_table_1_cm0o4d.png",
        id: "12",
    },
    {
        product_name: "Granite Square Side Table",
        product_description:
            "A square side table made from polished granite, perfect for adding a touch of luxury to any living room or bedroom.",
        price: 258800,
        stock: 18,
        sizes_available: ["L", "XL", "XS"],
        image:
            "https://res.cloudinary.com/dqc4xmj4g/image/upload/v1736285260/Granite_square_side_table_1_kgyc6v.png",
        id: "13",
    },
    {
        product_name: "Asgaard Sofa",
        product_description:
            "A modern and elegant sofa with Scandinavian design influences, featuring clean lines and a comfortable seating experience.",
        price: 250000,
        stock: 68,
        sizes_available: ["L", "XL", "XS"],
        image:
            "https://res.cloudinary.com/dqc4xmj4g/image/upload/v1736285344/Asgaard_sofa_2_ncg4dz.png",
        id: "14",
    },
    {
        product_name: "Maya Sofa Three Seater",
        product_description:
            "A plush, spacious three-seater sofa that provides comfort and style for any living room. Ideal for larger spaces or family gatherings.",
        price: 115000,
        stock: 75,
        sizes_available: ["L", "XL", "XS"],
        image:
            "https://res.cloudinary.com/dqc4xmj4g/image/upload/v1736285373/Maya_sofa_three_seater_1_kxa7xj.png",
        id: "15",
    },
    {
        product_name: "Outdoor Sofa Set",
        product_description:
            "A durable and stylish outdoor sofa set made with weather-resistant materials, designed for outdoor relaxation and socializing.",
        price: 244000,
        stock: 11,
        sizes_available: ["L", "XL", "XS"],
        image:
            "https://res.cloudinary.com/dqc4xmj4g/image/upload/v1736285405/Outdoor_sofa_set_1_g5zrfb.png",
        id: "16",
    },
];


// GET Request Handler
export async function GET() {
  return NextResponse.json(products);
}
