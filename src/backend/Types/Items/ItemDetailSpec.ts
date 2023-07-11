import { ItemRankSpec } from "../General/ObjectRankSpec"
import { ItemMaterialSpec } from "./ItemMaterialSpec";

export type ItemDetailSpec = {
    material: ItemMaterialSpec;
    rank: ItemRankSpec;
    category: "ARMOR" | "WEAPONS" | "CRAFTING MATERIALS" | "CONSTRUCTION MATERIALS" | "CONSUMABLES";
    description: string;
}