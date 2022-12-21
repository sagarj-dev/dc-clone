const sortByData = [
  { label: "Tier", value: "Tier" },
  { label: "Name", value: "Name" },
  { label: "Speed", value: "SPD" },
  { label: "HP", value: "HP" },
  { label: "Strength", value: "STR" },
  { label: "Intelligence", value: "INT" },
];

const affinityData = [
  { label: "Physical", value: "Physical" },
  { label: "Mystical", value: "Mystical" },
  { label: "Energy", value: "Energy" },
];
const damageTypeData = [
  { label: "Physical", value: "Physical" },
  { label: "Special", value: "Special" },
];

const buffsData = [
  { label: "Affinity Power Up", value: "Affinity Power Up" },
  { label: "Affinity Resist Up", value: "Affinity Resist Up" },
  { label: "Agility Up", value: "Agility Up" },
  { label: "Awareness", value: "Awareness" },
  { label: "Crit Chance Up", value: "Crit Chance Up" },
  { label: "Crit Damage Up", value: "Crit Damage Up" },
  { label: "Crit Immunity", value: "Crit Immunity" },
  { label: "Damage Immunity", value: "Damage Immunity" },
  { label: "Death Immunity", value: "Death Immunity" },
  { label: "Debuff Immunity", value: "Debuff Immunity" },
  { label: "Empowered Agility Up", value: "Empowered Agility Up" },
  { label: "Empowered Stamina Up", value: "Empowered Stamina Up" },
  { label: "Empowered Strength Up", value: "Empowered Strength Up" },
  { label: "Enrage Immunity", value: "Enrage Immunity" },
  { label: "Evasion Up", value: "Evasion Up" },
  { label: "Hit Chance Up", value: "Hit Chance Up" },
  { label: "Intelligence Up", value: "Intelligence Up" },
  { label: "Invisibility", value: "Invisibility" },
  { label: "Mends", value: "Mends" },
  { label: "Silence Immunity", value: "Silence Immunity" },
  { label: "Speed Up", value: "Speed Up" },
  { label: "Stamina Up", value: "Stamina Up" },
  { label: "Strength Up", value: "Strength Up" },
  { label: "Stun Immunity", value: "Stun Immunity" },
  { label: "Taunt", value: "Taunt" },
  { label: "True Sight", value: "True Sight" },
];

const debuffsData = [
  { label: "Affinity Power Down", value: "Affinity Power Down" },
  { label: "Affinity Resist Down", value: "Affinity Resist Down" },
  { label: "Agility Down", value: "Agility Down" },
  { label: "Bleeds", value: "Bleeds" },
  { label: "Buff Immunity", value: "Buff Immunity" },
  { label: "Crit Chance Down", value: "Crit Chance Down" },
  { label: "Crit Damage Down", value: "Crit Damage Down" },
  { label: "Disease", value: "Disease" },
  { label: "Doom", value: "Doom" },
  { label: "Enrage", value: "Enrage" },
  { label: "Evasion Down", value: "Evasion Down" },
  { label: "Heal Immunity", value: "Heal Immunity" },
  { label: "Hit Chance Down", value: "Hit Chance Down" },
  { label: "Intelligence Down", value: "Intelligence Down" },
  { label: "Silence", value: "Silence" },
  { label: "Speed Down", value: "Speed Down" },
  { label: "Strength Down", value: "Strength Down" },
  { label: "Stun", value: "Stun" },
];

const effectsData = [
  { label: "Apply Shield", value: "Apply Shield" },
  { label: "Apply Taunt to Ally", value: "Apply Taunt to Ally" },
  { label: "Apply Taunt to enemy", value: "Apply Taunt to enemy" },
  { label: "Buff Stealing", value: "Buff Stealing" },
  { label: "Buff to Debuff conversion", value: "Buff to Debuff conversion" },
  { label: "Call Assist", value: "Call Assist" },
  { label: "Can't Miss", value: "Can't Miss" },
  { label: "Cooldown Effects", value: "Cooldown Effects" },
  { label: "Copy Buffs", value: "Copy Buffs" },
  { label: "Counter Attacks", value: "Counter Attacks" },
  { label: "Debuff Transfer", value: "Debuff Transfer" },
  { label: "Heal", value: "Heal" },
  { label: "Ignore Awareness", value: "Ignore Awareness" },
  { label: "Ignore Immunities", value: "Ignore Immunities" },
  { label: "Ignore Shield", value: "Ignore Shield" },
  { label: "Out of Turn Attacks", value: "Out of Turn Attacks" },
  { label: "Purge Awareness", value: "Purge Awareness" },
  { label: "Purge Buffs", value: "Purge Buffs" },
  { label: "Purge Debuffs", value: "Purge Debuffs" },
  { label: "Remove Shield", value: "Remove Shield" },
  { label: "Revive", value: "Revive" },
  { label: "Self Heal", value: "Self Heal" },
  { label: "Start of Battle Ability", value: "Start of Battle Ability" },
  { label: "Steal Shield", value: "Steal Shield" },
  { label: "True Damage", value: "True Damage" },
  { label: "Turn Meter Down", value: "Turn Meter Down" },
  { label: "Turn Meter Up", value: "Turn Meter Up" },
];

const affiliationsData = [
  { label: "Amazons", value: "Amazons" },
  { label: "Apokolips", value: "Apokolips" },
  { label: "Arkham Inmates", value: "Arkham Inmates" },
  { label: "Atlantean", value: "Atlantean" },
  { label: "Bat Family", value: "Bat Family" },
  { label: "Birds of Prey", value: "Birds of Prey" },
  { label: "Black Lanterns", value: "Black Lanterns" },
  { label: "Crime Syndicate", value: "Crime Syndicate" },
  { label: "Dark Knights", value: "Dark Knights" },
  { label: "Demon Knights", value: "Demon Knights" },
  { label: "Demonic", value: "Demonic" },
  { label: "Greek Gods", value: "Greek Gods" },
  { label: "Green Lantern Corps", value: "Green Lantern Corps" },
  { label: "Injustice League", value: "Injustice League" },
  { label: "Justice League", value: "Justice League" },
  { label: "Justice League Dark", value: "Justice League Dark" },
  {
    label: "Justice League International",
    value: "Justice League International",
  },
  { label: "Justice Society of America", value: "Justice Society of America" },
  { label: "Kryptonian", value: "Kryptonian" },
  { label: "Lantern", value: "Lantern" },
  { label: "League of Assassins", value: "League of Assassins" },
  { label: "Legion of Doom", value: "Legion of Doom" },
  { label: "Leviathan", value: "Leviathan" },
  { label: "Magician", value: "Magician" },
  { label: "Outlaws", value: "Outlaws" },
  { label: "Robins", value: "Robins" },
  { label: "Rogues Gallery", value: "Rogues Gallery" },
  {
    label: "Secret Society of Super-Villains",
    value: "Secret Society of Super-Villains",
  },
  { label: "Shazam Family", value: "Shazam Family" },
  { label: "Speedster", value: "Speedster" },
  { label: "Suicide Squad", value: "Suicide Squad" },
  { label: "Super Sons", value: "Super Sons" },
  { label: "Superman Revenge Squad", value: "Superman Revenge Squad" },
  { label: "Thanagarian", value: "Thanagarian" },
  { label: "The Outsiders", value: "The Outsiders" },
  { label: "Titans", value: "Titans" },
];

const gearsetData = [
  { label: "Mixed Support", value: "Mixed Support" },
  { label: "Mixed Tank", value: "Mixed Tank" },
  { label: "Physical Striker", value: "Physical Striker" },
  { label: "Physical Support", value: "Physical Support" },
  { label: "Physical Tank", value: "Physical Tank" },
  { label: "Special Striker", value: "Special Striker" },
  { label: "Special Tank", value: "Special Tank" },
];

var gearTable = [
  {
    mat1: { lvl1: 4, lvl2: 0, lvl3: 0 },
    mat2: { lvl1: 2, lvl2: 0, lvl3: 0 },
    mat3: { lvl1: 2, lvl2: 0, lvl3: 0 },
    mat4: { lvl1: 4, lvl2: 0, lvl3: 0 },
    esnc: { lvl1: 1000, lvl2: 0, lvl3: 0 },
  },
  {
    mat1: { lvl1: 8, lvl2: 0, lvl3: 0 },
    mat2: { lvl1: 4, lvl2: 0, lvl3: 0 },
    mat3: { lvl1: 4, lvl2: 0, lvl3: 0 },
    mat4: { lvl1: 8, lvl2: 0, lvl3: 0 },
    esnc: { lvl1: 3000, lvl2: 0, lvl3: 0 },
  },
  {
    mat1: { lvl1: 12, lvl2: 4, lvl3: 0 },
    mat2: { lvl1: 6, lvl2: 8, lvl3: 0 },
    mat3: { lvl1: 6, lvl2: 8, lvl3: 0 },
    mat4: { lvl1: 12, lvl2: 4, lvl3: 0 },
    esnc: { lvl1: 6000, lvl2: 0, lvl3: 0 },
  },
  {
    mat1: { lvl1: 16, lvl2: 6, lvl3: 0 },
    mat2: { lvl1: 8, lvl2: 12, lvl3: 0 },
    mat3: { lvl1: 8, lvl2: 12, lvl3: 0 },
    mat4: { lvl1: 16, lvl2: 6, lvl3: 0 },
    esnc: { lvl1: 18000, lvl2: 0, lvl3: 0 },
  },
  {
    mat1: { lvl1: 20, lvl2: 8, lvl3: 6 },
    mat2: { lvl1: 10, lvl2: 16, lvl3: 12 },
    mat3: { lvl1: 10, lvl2: 16, lvl3: 6 },
    mat4: { lvl1: 20, lvl2: 8, lvl3: 12 },
    esnc: { lvl1: 36000, lvl2: 0, lvl3: 0 },
  },
  {
    mat1: { lvl1: 24, lvl2: 10, lvl3: 8 },
    mat2: { lvl1: 12, lvl2: 20, lvl3: 16 },
    mat3: { lvl1: 12, lvl2: 20, lvl3: 8 },
    mat4: { lvl1: 24, lvl2: 10, lvl3: 16 },
    esnc: { lvl1: 60000, lvl2: 0, lvl3: 0 },
  },
  {
    mat1: { lvl1: 28, lvl2: 12, lvl3: 10 },
    mat2: { lvl1: 29, lvl2: 24, lvl3: 20 },
    mat3: { lvl1: 29, lvl2: 24, lvl3: 10 },
    mat4: { lvl1: 28, lvl2: 12, lvl3: 20 },
    esnc: { lvl1: 90000, lvl2: 0, lvl3: 0 },
  },
  {
    mat1: { lvl1: 32, lvl2: 44, lvl3: 12 },
    mat2: { lvl1: 31, lvl2: 28, lvl3: 24 },
    mat3: { lvl1: 31, lvl2: 28, lvl3: 12 },
    mat4: { lvl1: 32, lvl2: 44, lvl3: 24 },
    esnc: { lvl1: 126000, lvl2: 0, lvl3: 0 },
  },
  {
    mat1: { lvl1: 36, lvl2: 61, lvl3: 14 },
    mat2: { lvl1: 48, lvl2: 32, lvl3: 28 },
    mat3: { lvl1: 48, lvl2: 32, lvl3: 14 },
    mat4: { lvl1: 36, lvl2: 61, lvl3: 28 },
    esnc: { lvl1: 180000, lvl2: 0, lvl3: 0 },
  },
  {
    mat1: { lvl1: 40, lvl2: 18, lvl3: 76 },
    mat2: { lvl1: 50, lvl2: 36, lvl3: 32 },
    mat3: { lvl1: 50, lvl2: 36, lvl3: 16 },
    mat4: { lvl1: 40, lvl2: 18, lvl3: 92 },
    esnc: { lvl1: 270000, lvl2: 0, lvl3: 0 },
  },
  {
    mat1: { lvl1: 40, lvl2: 185, lvl3: 60 },
    mat2: { lvl1: 80, lvl2: 100, lvl3: 195 },
    mat3: { lvl1: 80, lvl2: 50, lvl3: 195 },
    mat4: { lvl1: 40, lvl2: 235, lvl3: 60 },
    esnc: { lvl1: 420000, lvl2: 0, lvl3: 0 },
  },
];

var rankTotals = {
  "no-stars": [0, 10, 0, 0],
  "rank-1": [10, 15, 5000, 0],
  "rank-2": [25, 25, 10000, 0],
  "rank-3": [50, 40, 50000, 0],
  "rank-4": [90, 60, 100000, 0],
  "rank-5": [150, 90, 0, 100],
  "legendary-1": [240, 130, 0, 1000],
  "legendary-2": [370, 180, 0, 5000],
  "legendary-3": [550, 240, 0, 25000],
  "legendary-4": [790, 310, 0, 100000],
  "legendary-5": [1100, 410, 0, 0],
  "rebirth-1": [1510, 610, 0, 0],
  "rebirth-2": [2120, 910, 0, 0],
  "rebirth-3": [3030, 1310, 0, 0],
  "rebirth-4": [4340, 1810, 0, 0],
  "rebirth-5": [6150, 0, 0, 0],
};

export type rankTotalsType =
  | "no-stars"
  | "rank-1"
  | "rank-2"
  | "rank-3"
  | "rank-4"
  | "rank-5"
  | "legendary-1"
  | "legendary-2"
  | "legendary-3"
  | "legendary-4"
  | "legendary-5"
  | "rebirth-1"
  | "rebirth-2"
  | "rebirth-3"
  | "rebirth-4"
  | "rebirth-5";

export {
  affiliationsData,
  affinityData,
  buffsData,
  damageTypeData,
  debuffsData,
  effectsData,
  gearsetData,
  sortByData,
  gearTable,
  rankTotals,
};
