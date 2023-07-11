import { IBaseItem } from "./IBaseItem";

export type MIN_PHYS_NEGATION = 1;
export interface IArmorItem extends IBaseItem {
    physicalNegationU: number | MIN_PHYS_NEGATION;
    elementalNegations: {
        thunderNegationU: number;
        blazeNegationU: number;
        frostNegationU: number;
        arcaneNegationU: number;
    }
    computeDamageTakenByWearer(source: any): number;
}