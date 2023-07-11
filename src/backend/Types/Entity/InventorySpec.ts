import { IBaseItem } from "src/backend/Interfaces/Items/IBaseItem"
import { Range } from "../Utility/Range"
import { IArmorItem } from "src/backend/Interfaces/Items/IArmorItem";
import { IUsableItem } from "src/backend/Interfaces/Items/IUsableItem";
import { ItemStackSpec } from "../Items/ItemStackSpec";

export type InventorySpec = {
    backpackItems: Record<Range<18>, ItemStackSpec<IBaseItem> | undefined>;
    armorItems: Record<Range<4>, IArmorItem | undefined>;
    holdingItems: Record<Range<2>, ItemStackSpec<IUsableItem> | undefined>;
};