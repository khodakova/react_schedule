import {TestSystem} from '@src/generated/types';
import {formatToSave} from '@src/helpers/dateHelpers';

export const defineForConclusion = (testSystem: TestSystem | null) => {
    let res = '';
    if (testSystem)
        res = `Исследование проведено с использованием тест-систем "${
            testSystem.medProductName
        }", серия ${testSystem.lot}, производства ${testSystem.vendor}.
Дата изготовления: ${
            testSystem.suitCreateDate && formatToSave(testSystem.suitCreateDate)
        }`;
    // Дата изготовления: ${ testSystem.suitCreateDate }`;
    if (testSystem?.suitDateEnd) {
        res += `\nСрок годности: ${formatToSave(testSystem.suitDateEnd)}`;
    }
    return res;
};
