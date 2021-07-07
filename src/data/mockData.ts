export const smartphones = [
  {
    id: 1,
    title: 'Apple iPhone 12',
    imageUrl: 'images/apple_iPhone_12.png',
    description: {
      brand: 'Apple',
      year: 2020,
      screen_size: '6,1',
      country_manufacture: 'Китай',
      memory_storge: '128 Гб',
      screen_refresh: '60 Гц',
      NFC: false,
      ESIM: true,
      wireless_charger: true,
      price: '81 990 ₽',
    },
  },
  {
    id: 2,
    title: 'Xiaomi Mi 11 Lite',
    imageUrl: 'images/xiaomi_Mi_11_Lite.png',
    description: {
      brand: 'Xiaomi',
      year: 2021,
      screen_size: '6,55',
      country_manufacture: 'Китай',
      memory_storge: '128 Гб',
      screen_refresh: '90 Гц',
      NFC: true,
      ESIM: true,
      wireless_charger: false,
      price: '27 420 ₽',
    },
  },
  {
    id: 3,
    title: 'Samsung Galaxy A72',
    imageUrl: 'images/samsung_galaxy_A72.png',
    description: {
      brand: 'Samsung',
      year: 2021,
      screen_size: '6,7',
      country_manufacture: 'Вьетнам',
      memory_storge: '128 Гб',
      screen_refresh: '90 Гц',
      NFC: true,
      ESIM: false,
      wireless_charger: true,
      price: '32 890 ₽',
    },
  },
  {
    id: 4,
    title: 'Samsung Galaxy S21',
    imageUrl: 'images/samsung_galaxy_S21.png',
    description: {
      brand: 'Samsung',
      year: 2020,
      screen_size: '6,1',
      country_manufacture: 'Вьетнам',
      memory_storge: '128 Гб',
      screen_refresh: '60 Гц',
      NFC: false,
      ESIM: true,
      wireless_charger: true,
      price: '81 990 ₽',
    },
  },
  {
    id: 5,
    title: 'Apple iPhone Xr',
    imageUrl: 'images/apple_iPhone_xr.png',
    description: {
      brand: 'Apple',
      year: 2021,
      screen_size: '6,55',
      country_manufacture: 'Китай',
      memory_storge: '128 Гб',
      screen_refresh: '90 Гц',
      NFC: true,
      ESIM: true,
      wireless_charger: false,
      price: '27 420 ₽',
    },
  },
  {
    id: 6,
    title: 'Realme 8 pro',
    imageUrl: 'images/realme_8_pro.png',
    description: {
      brand: 'Xiaomi',
      year: 2021,
      screen_size: '6,7',
      country_manufacture: 'Китай',
      memory_storge: '128 Гб',
      screen_refresh: '90 Гц',
      NFC: true,
      ESIM: false,
      wireless_charger: true,
      price: '32 890 ₽',
    },
  },
  {
    id: 7,
    title: 'Samsung Galaxy A72',
    imageUrl: 'images/samsung_galaxy_A72.png',
    description: {
      brand: 'Samsung',
      year: 2021,
      screen_size: '6,7',
      country_manufacture: 'Вьетнам',
      memory_storge: '128 Гб',
      screen_refresh: '90 Гц',
      NFC: true,
      ESIM: false,
      wireless_charger: true,
      price: '32 890 ₽',
    },
  },
];

interface descriptionTranslateTypes {
  [brand: string]: string;
  year: string;
  screen_size: string;
  country_manufacture: string;
  memory_storge: string;
  screen_refresh: string;
  NFC: string;
  ESIM: string;
  wireless_charger: string;
  price: string;
}

export const descriptionTranslate: descriptionTranslateTypes = {
  brand: 'производитель',
  year: 'год релиза',
  screen_size: 'диагональ экрана (дюйм)',
  country_manufacture: 'страна-производитель',
  memory_storge: 'объем памяти',
  screen_refresh: 'частота обновления экрана',
  NFC: 'NFC',
  ESIM: 'поддержака ESIM',
  wireless_charger: 'поддержака беспроводной зарядки',
  price: 'стоимость',
};
