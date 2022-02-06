export class Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;

  constructor(
    id: number,
    name: string,
    description: string = '',
    price: number = 0,
    imageUrl: string = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSxtg7gCb5FIwel-hvF78NbzbKOwdJfQb1lVnvhIpDWF8ZZWRkIrhesh-o8sL6AABtZofgq6Uen&usqp=CAc'
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.imageUrl = imageUrl;
  }
}
