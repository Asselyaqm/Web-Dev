export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  rating: number;
  url: string;
}

export const products = [
  {
    id: 1,
    name: 'Смартфон Apple iPhone 14 Pro 256Gb фиолетовый',
    price: 621.979,
    description: 'New Apple smartphone',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h4d/h62/62948396728350/apple-iphone-14-pro-128gb-fioletovyj-106363319-1.jpg',
    rating: 5,
    url: 'https://kaspi.kz/shop/p/apple-iphone-14-pro-256gb-fioletovyi-106363319/?c=750000000#!/item'
  },
  {
    id: 2,
    name: 'Samsung Galaxy A53',
    price: 153.190,
    description: 'Смартфон Samsung Galaxy A53 5G 8 ГБ/256 ГБ черный',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hc1/h66/49613525188638/smartfon-samsung-galaxy-a53-5g-256gb-sm-a536ezkhskz-black-104253200-1.jpg',
    rating: 5,
    url: 'https://kaspi.kz/shop/p/samsung-galaxy-a53-5g-8-gb-256-gb-chernyi-104253200/?c=750000000#!/item'
  },
  {
    id: 3,
    name: ' Apple iPhone 14',
    price: 478.515,
    description: 'Смартфон Apple iPhone 14 256Gb голубой',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hef/h97/63073056096286/apple-iphone-14-128gb-goluboj-106363155-1.jpg',
    rating: 5,
    url: 'https://kaspi.kz/shop/p/apple-iphone-14-256gb-goluboi-106363155/?c=750000000#!/item'
  },
  {
    id: 4,
    name: 'Apple MacBook Pro 14',
    price: 979.990,
    description: 'Ноутбук Apple MacBook Pro 14 MKGP3 серый',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hbf/h8a/47153374199838/apple-macbook-pro-14-mkgp3-seryj-102866247-1.jpg',
    rating: 5,
    url: 'https://kaspi.kz/shop/p/apple-macbook-pro-14-mkgp3-seryi-102866247/?c=750000000#!/item'
  },
  {
    id: 5,
    name: 'Apple MacBook Air',
    price: 477.680,
    description: 'Ноутбук Apple MacBook Air 13 MGND3 золотистый',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hfd/h54/33286638272542/apple-macbook-air-2020-13-3-mgnd3-zolotistyj-100797576-1-Container.jpg',
    rating: 5,
    url: 'https://kaspi.kz/shop/p/apple-macbook-air-13-mgnd3-zolotistyi-100797576/?c=750000000#!/item'
  },
  {
    id: 6,
    name: 'Lenovo IdeaPad',
    price: 169.990,
    description: 'Ноутбук Lenovo IdeaPad 3 15ITL6 82H8005GRK серебристый',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h8f/h3a/66993674190878/lenovo-ideapad-3-15itl6-82h8005grk-serebristyi-108090705-1.jpg',
    rating: 5,
    url: 'https://kaspi.kz/shop/p/lenovo-ideapad-3-15itl6-82h8005grk-serebristyi-108090705/?c=750000000#!/item'
  },
  {
    id: 7,
    name: 'Dyson Airwrap',
    price: 459.990,
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h16/h1b/67104330809374/dyson-hs05-airwrap-complete-long-fen-shchetka-1300-w-104498649-1.jpg',
    rating: 5,
    description:'Dyson HS05 Airwrap Complete Long фен-щетка 1300 W',
    url: 'https://kaspi.kz/shop/p/dyson-hs05-airwrap-complete-long-fen-schetka-1300-w-104498649/?c=750000000#!/item'
  },
  {
    id: 8,
    name: 'Dyson',
    price: 379.990,
    description: 'Dyson HD08 Blue-Copper фен 1600 W',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h4f/h9e/69573849186334/fen-dyson-hd08-blue-copper-with-box-108433915-1.jpg',
    rating: 5,
    url: 'https://kaspi.kz/shop/p/dyson-hd08-blue-copper-fen-1600-w-108433915/?c=750000000#!/item'
  },
  {
    id: 9,
    name: 'Yandex Stanciya',
    price: 95.510,
    description: 'Умная колонка Яндекс Станция 2 черный',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/ha1/ha7/51009607663646/yandeks-stantsiya-2-yndx-00051-chernyi-104991250-1.jpg',
    rating: 5,
    url: 'https://kaspi.kz/shop/p/jandeks-stantsija-2-chernyi-104991250/?c=750000000#!/item'
  },
  {
    id: 10,
    name: 'Яндекс станция',
    price: 166.990,
    description: 'Умная колонка Яндекс Станция Макс синий',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hf3/hd3/51046001246238/yandeks-stantsiya-maks-s-alisoi-sinii-101165296-1.jpg',
    rating: 5,
    url: 'https://kaspi.kz/shop/p/jandeks-stantsija-maks-sinii-101165296/?c=750000000#!/item'
  }
];
