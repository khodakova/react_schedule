import {isEqual} from 'lodash';

import {getToken} from '@src/helpers/localStorage';

/*
Глубокое сравнение двух объектов
 */
export const compareTwoObject = (
    object1: object = {},
    object2: object = {},
): boolean => {
    return isEqual(object1, object2);
};

/*
Проверка объекта на пустоту
 */
export const isEmptyObject = (object: object): boolean => {
    return (
        !object ||
        (Object.keys(object).length === 0 && object.constructor === Object)
    );
};

/*
Проверка на объект
 */
export const isObject = (obj: object): boolean =>
    obj && typeof obj === 'object' && !Array.isArray(obj);

/*
Гарантированное возвращение массива
 */
export const ensureArray = (data: unknown): Array<any> =>
    Array.isArray(data) ? data : [];

/*
Гарантированное возвращение объекта
 */
// export const ensureObject = (obj: object, defaultValue: object): Object =>
//     isObject(obj) ? obj : isObject(defaultValue) ? defaultValue : {};

export const parseBoolean = (val: unknown): boolean =>
    !val ||
    val === 'false' ||
    val === 'null' ||
    val === 'undefined' ||
    val === '0'
        ? false
        : true;

/*
Валидация e-mail
 */
export const validateEmail = (email: string): boolean => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
};

export const DATE_FORMAT = 'MM.DD.YYYY';

export const TIME_FORMAT = 'hh:mm:ss';

export const DATE_TIME_FORMAT = `${DATE_FORMAT} ${TIME_FORMAT}`;

/*
Задержка для действия
 */
export const sleep = (ms: number): Promise<unknown> =>
    new Promise((resolve) => setTimeout(resolve, ms));

export const isPromise = (func: Promise<unknown>): boolean =>
    func && typeof func.then === 'function';

/*
Установка заголовков для запроса
 */
export const getHeaders = (options: object = {}): object =>
    Object.assign(
        {},
        {
            Authorization: `Bearer ${getToken()}`,
            'Content-Type': 'application/json',
        },
        options,
    );

/*
Проверка исполняемости кода в браузере
 */
export const isBrowser = typeof window !== 'undefined';

/**
 * Вычисление хэша
 * @param str
 */
export function hashCode(str: string) {
    // console.log(str);
    return `${str} ${new Date()}`
        .split('')
        .reduce(
            (prevHash, currVal) =>
                ((prevHash << 5) - prevHash + currVal.charCodeAt(0)) | 0,
            0,
        );
}

/**
 * Calculate a 32 bit FNV-1a hash
 * Found here: https://gist.github.com/vaiorabbit/5657561
 * Ref.: http://isthe.com/chongo/tech/comp/fnv/
 *
 * @param {string} str the input value
 * @param {boolean} [asString=false] set to true to return the hash value as
 *     8-digit hex string instead of an integer
 * @param {integer} [seed] optionally pass the hash of the previous chunk
 * @returns {integer | string}
 */
export function hashFnv32a(str: string, seed?: any): number {
    /*jshint bitwise:false */
    let i,
        l,
        hval = seed === undefined ? 0x811c9dc5 : seed;

    for (i = 0, l = str.length; i < l; i++) {
        hval ^= str.charCodeAt(i);
        hval +=
            (hval << 1) +
            (hval << 4) +
            (hval << 7) +
            (hval << 8) +
            (hval << 24);
    }
    // if( asString ){
    //     // Convert to 8 digit hex string
    //     return ("0000000" + (hval >>> 0).toString(16)).substr(-8);
    // }
    return hval >>> 0;
}

/*
Скролл до объекта
 */
// export const scrollTo = (element: HTMLElement, rest: unknown): void => {
//     // const isIE = detectIE()
//     const supportsNativeSmoothScroll =
//         'scrollBehavior' in document.documentElement.style;
//
//     if (!supportsNativeSmoothScroll) {
//         // const [x, y] = rest;
//         // const offsetTop = x?.top || x || 0;
//         // const offsetLeft = x?.left || y || 0;
//         // element.scrollTop = offsetTop;
//         // element.scrollLeft = offsetLeft;
//     } else {
//         element.scrollTo(rest);
//     }
// };
