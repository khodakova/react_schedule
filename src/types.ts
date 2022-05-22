export interface IDay {
    num: number,
    name?: string,
    isSaturday: boolean,
    isSunday: boolean,
    isHoliday: boolean
}

export interface ITabelRow extends IDays {
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

export interface IDays {
    day_1?: number | null | string | ITimeRange,
    day_2?: number | null | string | ITimeRange,
    day_3?: number | null | string | ITimeRange,
    day_4?: number | null | string | ITimeRange,
    day_5?: number | null | string | ITimeRange,
    day_6?: number | null | string | ITimeRange,
    day_7?: number | null | string | ITimeRange,
    day_8?: number | null | string | ITimeRange,
    day_9?: number | null | string | ITimeRange,
    day_10?: number | null | string | ITimeRange,
    day_11?: number | null | string | ITimeRange,
    day_12?: number | null | string | ITimeRange,
    day_13?: number | null | string | ITimeRange,
    day_14?: number | null | string | ITimeRange,
    day_15?: number | null | string | ITimeRange,
    day_16?: number | null | string | ITimeRange,
    day_17?: number | null | string | ITimeRange,
    day_18?: number | null | string | ITimeRange,
    day_19?: number | null | string | ITimeRange,
    day_20?: number | null | string | ITimeRange,
    day_21?: number | null | string | ITimeRange,
    day_22?: number | null | string | ITimeRange,
    day_23?: number | null | string | ITimeRange,
    day_24?: number | null | string | ITimeRange,
    day_25?: number | null | string | ITimeRange,
    day_26?: number | null | string | ITimeRange,
    day_27?: number | null | string | ITimeRange,
    day_28?: number | null | string | ITimeRange,
    day_29?: number | null | string | ITimeRange,
    day_30?: number | null | string | ITimeRange,
    day_31?: number | null | string | ITimeRange,
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
