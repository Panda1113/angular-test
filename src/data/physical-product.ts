import { ProductType } from './product-type.enum';

export type PhysicalProduct = {
  type: ProductType.PHYSICAL;
  title: string;
  description: string;
  price: number;
  quantity: number;
};
