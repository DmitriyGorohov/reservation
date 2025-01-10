import { Dimensions } from 'react-native';

export type ListType = {
    id: number;
    title: string;
    image: ReturnType<typeof require>;
};

export const listItems: ListType[] = [
    {
        id: 1,
        title:
            'Basic (3 euros per hour)\n' +
            'Free parking\n' +
            'Free coffee (3 per hour)\n' +
            'Relaxation area',
        image: require('../assets/img/basic/basic.png'),
    },
    {
        id: 2,
        title:
            'Everything in Basic +\n' +
            'Private booths for video calls\n' +
            'Unlimited free coffee\n' +
            '5% off food\n' +
            '10% off equipment rental',
        image: require('../assets/img/Advanced/48.png'),
    },
    {
        id: 3,
        title:
            'Everything in Advanced +\n' +
            'Separate area with panoramic window.\n' +
            'Access to fitness area and yoga room\n' +
            'Access to terrace - opportunity to work outdoors\n' +
            '10% discount on food\n' +
            '30% discount on equipment rental\n' +
            'Separate entrance and exit to the co-working area',
        image: require('../assets/img/vip/vip.png'),
    },
    {
        id: 4,
        title:
            'SuperVIP (50 euros per hour)\n' +
            'Everything in VIP +\n' +
            'Separate comfort zone\n' +
            'Unlimited access to the massage room\n' +
            'Pool access\n' +
            'Free food\n' +
            'Free rental of any equipment',
        image: require('../assets/img/super-vip/50.png'),
    },
];

export type QrCodeOnboardingType = {
    id: number;
    icon: ReturnType<typeof require>;
    title: string; // Заголовок
    subTitle: string; // Заголовок
    secondTitle: string;
};

export const qrList: QrCodeOnboardingType[] = [
    {
        id: 1,
        icon: require('../assets/img/qr-1/qr-1.png'),
        title: 'Use it to get in and out',
        subTitle: 'Scan the qr code and use it',
        secondTitle:
            'Scan the qr code and use it\n' + 'To start, press the button',
    },
    {
        id: 2,
        icon: require('../assets/img/qr-2/qr-2.png'),
        title: 'Use it to get in and out',
        subTitle: 'Scan the qr code and use it',
        secondTitle:
            'Scan the qr code and use it\n' + 'To start, press the button',
    },
    {
        id: 3,
        icon: require('../assets/img/qr-3/qr-3.png'),
        title: 'Shop around and rent the right equipment',
        subTitle: 'Scan the qr code and use it',
        secondTitle:
            'Scan the qr code and use it\n' + 'To start, press the button',
    },
    {
        id: 4,
        icon: require('../assets/img/qr-4/qr-4.png'),
        title: 'Go to sports and yoga',
        subTitle: 'Scan the qr code and use it',
        secondTitle:
            'Scan the qr code and use it\n' + 'To start, press the button',
    },
];

export type TOnboarding = {
    id: number; // Уникальный идентификатор
    title: string; // Заголовок
    subTitle: string; // Заголовок
    icon: ReturnType<typeof require>; // Иконка с использованием require()
    iconSecond?: ReturnType<typeof require>; // Иконка с использованием require()
};

export const onboardingItems: TOnboarding[] = [
    {
        id: 1,
        title: 'Book any place ',
        subTitle: 'with great convenience, without much hassle.',
        icon: require('../assets/img/success-image/success.png'),
    },
    {
        id: 2,
        title: 'Have a great time,',
        subTitle: 'and all the comforts of home.',
        icon: require('../assets/img/onboarding-image-2/onboarding-image-2.png'),
    },
    {
        id: 3,
        title: 'Use your loyalty card,',
        subTitle: 'and try all available rates!',
        icon: require('../assets/img/onboarding-image-3-1/onboarding-image-3-1.png'),
        iconSecond: require('../assets/img/onboarding-image-3-2/onboarding-image-3-2.png'),
    },
];

export const windowWidth = Dimensions.get('window').width;

export const windowHeight = Dimensions.get('window').height;

type MenuItem = {
    id: string; // Уникальный идентификатор
    title: string; // Заголовок
    // icon: ReturnType<typeof require>; // Иконка с использованием require()
    route: string; // Путь для навигации
};

export interface EventTypeApi {
    id: number;
    title: string;
    description: string;
    date: string;
    time: string;
    // image: ReturnType<typeof require>; // Можно уточнить тип как Date, если вы будете парсить дату
}

export const menuData: MenuItem[] = [
    {
        id: '1',
        title: 'Shop',
        route: '',
    },
    {
        id: '2',
        title: 'Reservation',
        route: '',
    },
    {
        id: '3',
        title: 'Contacts',
        route: '',
    },
    {
        id: '4',
        title: 'Events',
        route: '',
    },
    {
        id: '5',
        title: 'Bonuses',
        route: '',
    },
];

export type Product = {
    id: number;
    title: string;
    // image: ReturnType<typeof require>;
    price: number;
    favorites: boolean;
    quantity?: number;
};

export const breakfasts: Product[] = [
    {
        id: 1,
        title: 'Rice porridge with lingonberries',
        price: 29,
        favorites: false,
    },
    {
        id: 2,
        title: 'Rice porridge with lingonberries',
        price: 19,
        favorites: false,
    },
    {
        id: 3,
        title: 'Rice porridge with lingonberries',
        price: 23,
        favorites: false,
    },
];

export const lunches: Product[] = [
    {
        id: 4,
        title: 'Rice porridge with lingonberries',
        price: 21,
        favorites: false,
    },
    {
        id: 5,
        title: 'Rice porridge with lingonberries',
        price: 22,
        favorites: false,
    },
    {
        id: 6,
        title: 'Rice porridge with lingonberries',
        price: 19,
        favorites: false,
    },
];

export const dinners: Product[] = [
    {
        id: 7,
        title: 'Rice porridge with lingonberries',
        price: 19,
        favorites: false,
    },
    {
        id: 8,
        title: 'Rice porridge with lingonberries',
        price: 19,
        favorites: false,
    },
    {
        id: 9,
        title: 'Rice porridge with lingonberries',
        price: 19,
        favorites: false,
    },
];

export const app: Product[] = [
    {
        id: 10,
        title: 'Rice porridge with lingonberries',
        price: 19,
        favorites: false,
    },
    {
        id: 11,
        title: 'Rice porridge with lingonberries',
        price: 19,
        favorites: false,
    },
    {
        id: 12,
        title: 'Rice porridge with lingonberries',
        price: 19,
        favorites: false,
    },
];

export const desert: Product[] = [
    {
        id: 13,
        title: 'Rice porridge with lingonberries',
        price: 19,
        favorites: false,
    },
    {
        id: 14,
        title: 'Rice porridge with lingonberries',
        price: 19,
        favorites: false,
    },
    {
        id: 15,
        title: 'Rice porridge with lingonberries',
        price: 19,
        favorites: false,
    },
];

export const allProducts: Product[] = [
    ...breakfasts,
    ...lunches,
    ...dinners,
    ...desert,
    ...app,
];

export type EventType = {
    id: number;
    title: string;
    description: string;
    date: string;
    time: string;
    // image: ReturnType<typeof require>;
};

export const eventsCommon: EventType[] = [
    {
        id: 1,
        title: 'Dinner Under the Stars',
        description:
            'Enjoy the atmosphere of a romantic dinner on the restaurant terrace under the open sky, where a special menu and pleasant live music await you.',
        date: '23rd December 2024',
        time: '6:00 PM – 11:00 PM',
    },
    {
        id: 2,
        title: 'Gastronomic Masterclass',
        description:
            'Join our chef for an exciting masterclass where you will learn to cook signature dishes and uncover the secrets of culinary art.',
        date: '23rd December 2024',
        time: '6:00 PM – 11:00 PM',
    },
    {
        id: 3,
        title: 'Wine and Cheese Evening',
        description:
            'Discover the perfect pairing of wines and cheeses at our gastronomic evening, where a sommelier will share insights on the best combinations and conduct a tasting.',
        date: '23rd December 2024',
        time: '6:00 PM – 11:00 PM',
    },
    {
        id: 4,
        title: 'Theme of the Night: Italian Celebration',
        description:
            'Immerse yourself in the atmosphere of Italy at our themed evening with live music, traditional dishes, and dances that will transport you to the heart of Rome.',
        date: '23rd December 2024',
        time: '6:00 PM – 11:00 PM',
    },
    {
        id: 5,
        title: 'Theme of the Night: Italian Celebration',
        description:
            'Immerse yourself in the atmosphere of Italy at our themed evening with live music, traditional dishes, and dances that will transport you to the heart of Rome.',
        date: '23rd December 2024',
        time: '6:00 PM – 11:00 PM',
    },
    {
        id: 6,
        title: 'Theme of the Night: Italian Celebration',
        description:
            'Immerse yourself in the atmosphere of Italy at our themed evening with live music, traditional dishes, and dances that will transport you to the heart of Rome.',
        date: '23rd December 2024',
        time: '6:00 PM – 11:00 PM',
    },
];
