export interface IMango {
    name: string;
    season: "summer" | "winter";
    variety: string;
    price: number;
    stock: number;
    origin: string;
    unit: "KG" | "TON";
}