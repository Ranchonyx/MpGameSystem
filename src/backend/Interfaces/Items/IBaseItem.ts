import { ItemDetailSpec } from "src/backend/Types/Items/ItemDetailSpec";
import { Base64ImageSpec } from "src/backend/Types/Utility/Base64ImageSpec";

export interface IBaseItem {
    details: ItemDetailSpec;
    icon: Base64ImageSpec<"png">;
    internalName: string;
    displayName: string;
}