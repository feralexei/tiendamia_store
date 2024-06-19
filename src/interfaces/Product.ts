export default interface Product {
  id: string;
  title: string;
  description?: string;
  price: number;
  units?: number;
  stock?: number;
  image: Array<string>;
  color: Array<string>;
  onsale: boolean;
  discount?: number;
}