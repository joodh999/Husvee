import * as mongoose from "mongoose";

export interface ITEM extends mongoose.Document {
  name: string;
  img: string;
  quantity: number;
  price: number;
}

export const ProductsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

const Product = mongoose.model<ITEM>("products", ProductsSchema);
export { Product };
