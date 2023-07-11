import { Base64ImageSpec } from "../Utility/Base64ImageSpec";

export type ConsumableEffectSpec = {
    icon: Base64ImageSpec<"png">;
    name: string;
    durationS: number;
    positiveEffects?: "REGEN_HP" | "REGEN_MP";
    negativeEffects?: "DRAIN_HP" | "DRAIN_MP";
    effectAmountU: number;
}