export type ItemRankSpec = {
    name: "Basic" | "Common" | "Uncommon" | "Rare" | "Gilded" | "Ancient" | "Exotic";
    hexColour: `#${string}`
}

export type PlayerRankSpec = {
    name: "None" | "Sky-Iron" | "Dark-Iron" | "Quicksilver" | "Mithril" | "Elyrium" | "Wellblech";
    hexColour: `#${string}`;
}