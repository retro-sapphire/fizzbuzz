// Location type and enum
export enum locationEnum {
	AfterBegin = "afterbegin",
	BeforeEnd = "beforeend",
}
export type locationType = locationEnum.AfterBegin | locationEnum.BeforeEnd;