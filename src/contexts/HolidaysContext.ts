import {IHoliday} from '@src/types';
import {createContext, useContext} from 'react';

export type HolidaysContextType = {
    holidays: Array<IHoliday>,
    addHoliday: (arg: IHoliday) => void
}

export const HolidaysContext = createContext<HolidaysContextType>({
    holidays: [],
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    addHoliday: (arg: IHoliday) => {},
});

export const useHolidaysContext = () => useContext(HolidaysContext);
