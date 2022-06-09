export interface IDay {
    num: number,
    name?: string,
    isSaturday: boolean,
    isSunday: boolean,
    isHoliday: boolean
}

export interface ITabelRow extends Partial<IDays> {
    id: number,
    name: string,
    category: string,
    shift?: number,
    rate?: number,
    workingDays: number | null,
    monthGeneral: number | null,
    monthNorm: number | null,
    breakTime: number | null
}

export interface ITimeRange {
    time_1: string;
    time_2: string
}

// export interface IDays {
//     [index: string]: ITimeRange | number
// }

export interface IDays {
    day_1: null | ITimeRange,
    day_2: null | ITimeRange,
    day_3: null | ITimeRange,
    day_4: null | ITimeRange,
    day_5: null | ITimeRange,
    day_6: null | ITimeRange,
    day_7: null | ITimeRange,
    day_8: null | ITimeRange,
    day_9: null | ITimeRange,
    day_10: null | ITimeRange,
    day_11: null | ITimeRange,
    day_12: null | ITimeRange,
    day_13: null | ITimeRange,
    day_14: null | ITimeRange,
    day_15: null | ITimeRange,
    day_16: null | ITimeRange,
    day_17: null | ITimeRange,
    day_18: null | ITimeRange,
    day_19: null | ITimeRange,
    day_20: null | ITimeRange,
    day_21: null | ITimeRange,
    day_22: null | ITimeRange,
    day_23: null | ITimeRange,
    day_24: null | ITimeRange,
    day_25: null | ITimeRange,
    day_26: null | ITimeRange,
    day_27: null | ITimeRange,
    day_28: null | ITimeRange,
    day_29: null | ITimeRange,
    day_30: null | ITimeRange,
    day_31: null | ITimeRange,
}

export interface ISelectMenuItem {
    id: number | string;
    name: string;
}

export interface IDateCondition {
    month: number,
    year: number
}

export interface IHoliday {
    month: number,
    day: number,
    comment?: string
}
