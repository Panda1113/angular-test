import { EventProduct } from './event-product';
import { PhysicalProduct } from './physical-product';
import { ProductType } from './product-type.enum';

type Product = PhysicalProduct | EventProduct;
export const PRODUCTS: Product[] = [
  {
    title: 'Event 1',
    type: ProductType.EVENT,
    description: 'Hello! we will open this event to improve our product to the microservice architecture',
    due_date: new Date('2024-04-02')
  },
  {
    title: 'Physical 1',
    type: ProductType.PHYSICAL,
    description: 'Hi! This is our up-to-edge product with latest technology! Human will have enhanced power.',
    price: 20.4,
    quantity: 5
  },
];
