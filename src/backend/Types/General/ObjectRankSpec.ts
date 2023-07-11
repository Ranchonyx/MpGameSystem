export type ItemRankEntry = {
    name: "Basic" | "Common" | "Uncommon" | "Rare" | "Gilded" | "Ancient" | "Exotic";
    hexColour: `#${string}`
}

export type PlayerRankEntry = {
    name: "None" | "Sky-Iron" | "Dark-Iron" | "Quicksilver" | "Mithril" | "Elyrium" | "Wellblech";
    hexColour: `#${string}`;
}

export type PlayerRankSpec = Array<PlayerRankEntry>;
export type ItemRankSpec = Array<ItemRankEntry>;