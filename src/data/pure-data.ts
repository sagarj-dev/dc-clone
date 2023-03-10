export interface charType {
  tier: string;
  name: string;
  subName: string;
  SPD: string;
  HP: string;
  STR: string;
  INT: string;
  AG: string;
  STAM: string;
  CRC: string;
  CRV: string;
  LegendaryOrder: string;
  GearSet: string;
  powers: {
    one: {
      name: string;
      dis: {
        Default: string;
        Legendary: string;
      };
    };
    two: {
      name: string;
      dis: {
        Default: string;
        Legendary: string;
      };
    };
    three: {
      name: string;
      dis: {
        Default: string;
        Legendary: string;
      };
    };
    four: {
      name: string;
      dis: {
        Default: string;
        Legendary: string;
      };
    };
    five: {
      name: string;
      dis: {
        Default: string;
        Legendary: string;
      };
    };
  };
  CombatEffects: string[];
  Affiliations: string;
  id: string;
  affinity: string;
}

const characters: charType[] = [
  {
    tier: "S",
    name: "Azrael",
    subName: "The Avenging Angel",
    SPD: "111",
    HP: "29255",
    STR: "2635",
    INT: "1516",
    AG: "2090",
    STAM: "2166",
    CRC: "47%",
    CRV: "256%",
    LegendaryOrder:
      "5,2],1),4,3 (great at L2, best at L3, 3 and 4 are dealer’s choice)",
    GearSet: "Physical Striker",
    powers: {
      one: {
        name: "Vengeance Blades:",
        dis: {
          Default:
            "Damage to a single enemy and gain 3 Strength Ups (2T), apply 20% additional damage if Azrael has True Sight.",
          Legendary: "Purge 3 Buffs on target.",
        },
      },
      two: {
        name: "Holy of Holies:",
        dis: {
          Default:
            "Gain 4 Strength Ups (2T) and 30% Shield. Apply Debuff Immunity (1T) and 15% Turn Meter Up if Azrael has True Sight.",
          Legendary:
            "50% Chance to use Vengeance Blades on a random enemy, 100% chance if Azrael has True Sight.",
        },
      },
      three: {
        name: "Salvation:",
        dis: {
          Default:
            "Heavy Damage to an enemy, ignore shields if Azrael has True Sight.",
          Legendary: "Apply 50% Turn Meter Down on target.",
        },
      },
      four: {
        name: "Doctrine:",
        dis: {
          Default:
            "75% Chance to use Holy of Holies when an ally receives damage.",
          Legendary: "Azrael gains a Light Overheal.",
        },
      },
      five: {
        name: "Sanctum:",
        dis: {
          Default:
            "Each time Azrael gains one or more buffs on his turn 75% Chance to gain True Sight (1T).",
          Legendary: "Azrael starts the combat with True Sight (2T).",
        },
      },
    },
    CombatEffects: [
      "Debuff Immunity",
      "Strength Up",
      "True Sight",
      "Counter Attacks",
      "Apply Shield",
      "Ignore Shield",
      "Turn Meter Up",
      "Turn Meter Down",
      "Purge Buffs",
      "Start of Battle Ability",
      "Self Heal and Out of Turn Attacks",
    ],
    Affiliations: "Bat Family",
    id: "140",
    affinity: "Physical",
  },
  {
    tier: "S",
    name: "Big Barda",
    subName: "Greatest Warrior of Apokolips",
    SPD: "102",
    HP: "39748",
    STR: "2172",
    INT: "1586",
    AG: "1959",
    STAM: "2785",
    CRC: "22%",
    CRV: "228%",
    LegendaryOrder:
      "4,5*,2,3,1 (2021 rework) *some opt not to take 5 as she can be squishy at lower levels",
    GearSet: "Physical Tank",
    powers: {
      one: {
        name: "Planet Breaker:",
        dis: {
          Default: "Damage to an enemy. Gain 4 Stamina Up (2T).",
          Legendary: "100% Additional Damage if Big Barda is Taunting.",
        },
      },
      two: {
        name: "Strength of the New Gods:",
        dis: {
          Default:
            "Gain Taunt (2T) and apply 5 Stamina Up (2T) and 15% Turn Meter Up to all allies.",
          Legendary: "Also gain 6 Mends (3T).",
        },
      },
      three: {
        name: "Aerial Smash:",
        dis: {
          Default: "Damage to an enemy and apply Stun(1T).",
          Legendary:
            "Apply 2 permanent Stamina Up (Always) and 2 Mend (3T) to all allies.",
        },
      },
      four: {
        name: "Blessing of New Genesis:",
        dis: {
          Default:
            "70% Chance to gain 30% Turn Meter and 2 Mend (3T) each time Big Barda takes damage.",
          Legendary:
            "50% Chance to use Strength of the New Gods after Blessing of New Genesis.",
        },
      },
      five: {
        name: "Resilience of Apokolips:",
        dis: {
          Default:
            "At beginning of each enemy turn, 40% chance to gain Death Immunity (1T) if Big Barda has 5+ Stamina Ups.",
          Legendary: "Big Bard starts the combat with Taunt (1T).",
        },
      },
    },
    CombatEffects: [
      "Death Immunity",
      "Mends",
      "Stamina Up",
      "Taunt",
      "Stun",
      "Turn Meter Up and Start of Battle Ability",
    ],
    Affiliations: "Apokolips",
    id: "17",
    affinity: "Physical",
  },
  {
    tier: "S",
    name: "Black Canary",
    subName: "Dinah Laurel Lance",
    SPD: "108",
    HP: "39788",
    STR: "2618",
    INT: "1507",
    AG: "1759",
    STAM: "2789",
    CRC: "22%",
    CRV: "228%",
    LegendaryOrder: "5,2)1,3],4",
    GearSet: "Physical Tank",
    powers: {
      one: {
        name: "Spin Kick:",
        dis: {
          Default: "Damage to an enemy, Gain 4 Evasion Ups (2T).",
          Legendary: "-40% Turn Meter on the target.",
        },
      },
      two: {
        name: "Wildcat Haymaker:",
        dis: {
          Default: "Damage to an enemy, apply 4 Strength Downs (2T).",
          Legendary:
            "Stun (2T) the enemy, +7% Damage per Strength Up on Target (Max 10).",
        },
      },
      three: {
        name: "Canary Cry:",
        dis: {
          Default: "Damage and apply 3 Evasion Ups (2T) to all allies.",
          Legendary: "70% chance per enemy to -25% Turn Meter.",
        },
      },
      four: {
        name: "Martial Arts Training:",
        dis: {
          Default:
            "Gain +30% Turn Meter if any ally take damage. If Black Canary evades, 75% chance for ally to retaliate.",
          Legendary: "Silence a random enemy (2T) if any ally Evades.",
        },
      },
      five: {
        name: "Jiu-jitsu Instruction:",
        dis: {
          Default:
            "At end of Black Canary's turn, 50% chance for Black Canary and allies gain 3 Evasion Ups (2T) if no allies have Evasion Up, or use Wildcat Haymaker if all allies have Evasion Up.",
          Legendary:
            "Also, apply True Sight at the start of the battle and whenever Allies end their turn with Evasion Up, if they don’t already have True Sight.",
        },
      },
    },
    CombatEffects: [
      "True Sight",
      "Evasion Up",
      "Silence",
      "Strength Down",
      "Stun",
      "Counter Attacks",
      "Out of Turn Attacks",
      "Turn Meter Up and Turn Meter Down",
    ],
    Affiliations: "Birds of Prey",
    id: "20",
    affinity: "Physical",
  },
  {
    tier: "S",
    name: "Conner Kent",
    subName: "The Boy of Steel",
    SPD: "115",
    HP: "32425",
    STR: "2830",
    INT: "1571",
    AG: "2178",
    STAM: "2608",
    CRC: "25%",
    CRV: "228%",
    LegendaryOrder: "3,1,2],5,4 (2022 rework)",
    GearSet: "Physical Support",
    powers: {
      one: {
        name: "Charge Punch:",
        dis: {
          Default:
            "Heavy damage to an enemy. Gain True Sight (1T) and Strike again if Conner has 3 or more Strength Up. Can't miss.",
          Legendary: "Also, apply Stun (1T).",
        },
      },
      two: {
        name: "X-ray analysis:",
        dis: {
          Default: "Gain 5 Strength Up (2T) and Purge 5 Buffs on target.",
          Legendary: "Apply Buff Immunity on target(1T).",
        },
      },
      three: {
        name: "Super Leap:",
        dis: {
          Default: "Heavy damage to all enemies and gain 20% Shield.",
          Legendary: "Apply 3 Stuns (1T) to a primary target.",
        },
      },
      four: {
        name: "Genomorph programming:",
        dis: {
          Default: "Passive: If an enemy is stunned gain 3 Strength Up (2T).",
          Legendary: "Gain 1 additional Strength Up (2T).",
        },
      },
      five: {
        name: "Solar Absorption:",
        dis: {
          Default:
            "Passive: At the beginning of each of his turns gain 25% Shield if Conner Kent has 3 or more Strength Up.",
          Legendary: "Also Purge 3 Debuffs from self.",
        },
      },
    },
    CombatEffects: [
      "Strength Up",
      "True Sight",
      "Buff Immunity",
      "Stun",
      "Can't Miss",
      "Apply Shield",
      "Purge Buffs and Purge Debuffs",
    ],
    Affiliations: "Titans",
    id: "35",
    affinity: "Physical",
  },
  {
    tier: "S",
    name: "Nightwing",
    subName: "The Aerial Avenger",
    SPD: "120",
    HP: "29056",
    STR: "2310",
    INT: "1698",
    AG: "2256",
    STAM: "2146",
    CRC: "47%",
    CRV: "256%",
    LegendaryOrder: "4,1,5,2],3 (2021 rework)",
    GearSet: "Physical Striker",
    powers: {
      one: {
        name: "Tumbling Combo:",
        dis: {
          Default:
            "Damage to an enemy. 70% chance to apply up to 3 Invisibility (1T) buffs to teammates.",
          Legendary:
            "Gain 3 Evasion ups (2T) and 1 Awareness. Apply 1 awareness to a random ally.",
        },
      },
      two: {
        name: "Electrified Eskrima:",
        dis: {
          Default: "Damage to all enemies. Gain 6 Agility Up (2T).",
          Legendary:
            "Gain Debuff Immunity (1T) Apply Stun (1T) to primary target.",
        },
      },
      three: {
        name: "The Flying Grayson:",
        dis: {
          Default:
            "Heavy damage and Call Assist on an enemy. 50% chance to call a second Assist. Also, gain Damage Immunity (1T).",
          Legendary: "Apply 2 Awareness to Assisting teammates.",
        },
      },
      four: {
        name: "Trapeze Artist:",
        dis: {
          Default:
            "Nightwing has 85% increased Defense while he has Evasion Up.",
          Legendary:
            "Start battle with 3 Evasion Ups (2T) and 3 Awareness (Always).",
        },
      },
      five: {
        name: "Tag-Team Fighter:",
        dis: {
          Default:
            "70% chance to use Tumbling Combo on a random enemy at the end of every ally's turn if any ally is invisible.",
          Legendary:
            "At the start of the battle all teammates gain Invisibility (1T).",
        },
      },
    },
    CombatEffects: [
      "Agility Up",
      "Awareness",
      "Damage Immunity",
      "Debuff Immunity",
      "Evasion Up",
      "Invisibility",
      "Stun",
      "Call Assist",
      "Out of Turn Attacks and Start of Battle Ability",
    ],
    Affiliations: "Bat Family, Robins and Titans",
    id: "88",
    affinity: "Physical",
  },
  {
    tier: "S",
    name: "Aquaman",
    subName: "King of Atlantis",
    SPD: "99",
    HP: "38833",
    STR: "2451",
    INT: "1531",
    AG: "1754",
    STAM: "2693",
    CRC: "22%",
    CRV: "228%",
    LegendaryOrder: "4,1,2],5,3 (2021 rework)",
    GearSet: "Physical Tank",
    powers: {
      one: {
        name: "Might of the Ocean:",
        dis: {
          Default: "Damage to an enemy. Gain 3 Mend (3T).",
          Legendary: "Gain +50% Turn Meter if Aquaman is Mending.",
        },
      },
      two: {
        name: "I Am Your King:",
        dis: {
          Default:
            "Apply Crit Immunity (1T) and 40% Turn Meter Up to team. Apply 3 Death Immunity (1T) on self if Mending.",
          Legendary: "Use Might of the Ocean afterward, if Mending.",
        },
      },
      three: {
        name: "Trident of Poseidon:",
        dis: {
          Default:
            "Heavy Damage to an enemy. Apply 4 Bleed (3T) and Stun (1T).",
          Legendary: "Also Aquaman gains 2 Strength Ups (2T).",
        },
      },
      four: {
        name: "Maelstrom:",
        dis: {
          Default:
            "Passive: If Aquaman is Affected by Turn Meter Down, use I Am Your King.",
          Legendary: "30% Turn Meter Down on the enemy team.",
        },
      },
      five: {
        name: "King of Atlantis:",
        dis: {
          Default:
            "Leader: While Aquaman is alive all allies are immune to Crit Damage. Also, 75% Chance for Aquaman to start the combat with 3 Mends (3T).",
          Legendary:
            "Also all allies gain 2 additional Mends (3T) at the start of the combat.",
        },
      },
    },
    CombatEffects: [
      "Crit Immunity",
      "Death Immunity",
      "Mends",
      "Strength Up",
      "Bleeds",
      "Stun",
      "Counter Attacks",
      "Turn Meter Up",
      "Turn Meter Down and Start of Battle Ability",
    ],
    Affiliations: "Atlantean and Justice League",
    id: "3",
    affinity: "Mystical",
  },
  {
    tier: "S",
    name: "Black Flash",
    subName: "Death of the Speed Force",
    SPD: "131",
    HP: "27186",
    STR: "1475",
    INT: "2928",
    AG: "2228",
    STAM: "2139",
    CRC: "35%",
    CRV: "228%",
    LegendaryOrder: "3,5,4],1,2",
    GearSet: "Special Striker",
    powers: {
      one: {
        name: "Accelerated Strike:",
        dis: {
          Default:
            "Special Damage to an Enemy and gain 2 Speed Ups (2T). 5% additional damage per Speed Up (limit 10).",
          Legendary: "Gain 1 permanent Speed Up.",
        },
      },
      two: {
        name: "Speedsters Ghosts:",
        dis: {
          Default:
            "25% Turn Meter Down to all enemies and 75% chance to apply 25% Turn Meter Up to all allies.",
          Legendary: "Apply Doom (4T) to a random enemy.",
        },
      },
      three: {
        name: "Chased by Death:",
        dis: {
          Default: "Special Damage to all enemies and gain 25% Turn Meter Up.",
          Legendary: "Reset enemies Turn Meter.",
        },
      },
      four: {
        name: "Nightmare of a Speedster:",
        dis: {
          Default:
            "Passive: 75% Chance to gain a light Overheal and 4 Int Ups (2T) every time an ally gains Turn Meter Up.",
          Legendary: "Also gain Crit Immunity (1T).",
        },
      },
      five: {
        name: "Back to the Speed Force:",
        dis: {
          Default:
            "Passive: Gain 2 permanent Speed Ups every time an enemy dies.",
          Legendary: "Reset Chased by Death cooldown.",
        },
      },
    },
    CombatEffects: [
      "Crit Immunity",
      "Intelligence Up",
      "Speed Up",
      "Doom",
      "Cooldown Effects",
      "Turn Meter Up",
      "Turn Meter Down and Self Heal",
    ],
    Affiliations: "Speedster",
    id: "147",
    affinity: "Mystical",
  },
  {
    tier: "S",
    name: "Darkseid",
    subName: "God of Evil",
    SPD: "109",
    HP: "36902",
    STR: "1672",
    INT: "2623",
    AG: "1670",
    STAM: "2625",
    CRC: "15%",
    CRV: "178%",
    LegendaryOrder:
      "1],2,3,4,5 (4 would be beneficial earlier after 1 for Raids or using slow comps)",
    GearSet: "Special Tank",
    powers: {
      one: {
        name: "Erosion Blast:",
        dis: {
          Default: "Special Damage to a single enemy and gain 4 Int Ups (2T).",
          Legendary:
            "Attack twice to the same enemy if Darkseid has 4 or more Int Ups and apply Stun (1T).",
        },
      },
      two: {
        name: "Omega Beams:",
        dis: {
          Default:
            "Special Damage to all enemies and apply Doom (4T) on a random enemy. Gain 4 Stamina Ups (2T).",
          Legendary: "Cannot miss and apply 20% Shield on all allies.",
        },
      },
      three: {
        name: "Loneliness + Alienation:",
        dis: {
          Default:
            "Special Damage to all enemies, Ignore Shields if Darkseid has 4 or more Int Ups. +30% Additional damage if Darkseid has 4 or more Stamina Ups.",
          Legendary: "Apply 25% Turn Meter Down on targets.",
        },
      },
      four: {
        name: "New God Sense:",
        dis: {
          Default:
            "Passive: Gain 4 Int Ups (2T) every time an enemy is buffed.",
          Legendary: "Also gain 2 Stamina Ups (2T) and 10% Turn Meter Up.",
        },
      },
      five: {
        name: "Tyrant:",
        dis: {
          Default:
            "Leader: At the end of each teammate’s turn, 75% Chance to Call Assist from the teammate to a random enemy if Darkseid has 5 or more Buffs.",
          Legendary: "Also gain a Medium Overheal.",
        },
      },
    },
    CombatEffects: [
      "Intelligence Up",
      "Stamina Up",
      "Doom",
      "Stun",
      "Call Assist",
      "Can't Miss",
      "Heal",
      "Apply Shield",
      "Ignore Shield",
      "Turn Meter Up and Turn Meter Down",
    ],
    Affiliations: "Apokolips",
    id: "152",
    affinity: "Mystical",
  },
  {
    tier: "S",
    name: "Etrigan",
    subName: "The Demon",
    SPD: "122",
    HP: "30274",
    STR: "1486",
    INT: "3017",
    AG: "2170",
    STAM: "2447",
    CRC: "35%",
    CRV: "228%",
    LegendaryOrder: "3,1/4),5/2 (2022 rework)",
    GearSet: "Special Striker",
    powers: {
      one: {
        name: "Burning Hands:",
        dis: {
          Default:
            "Special Damage to an enemy. Apply 20% True Damage and Heal Immunity (1T) if Etrigan is Overhealed.",
          Legendary: "Use Burning Hands once more if Etrigan is Overhealed.",
        },
      },
      two: {
        name: "Raining Hellfire:",
        dis: {
          Default:
            "Special Damage to all enemies. Use Burning Hands against a random enemy if another enemy is dead.",
          Legendary: "Reduce Cooldown by 1 after use for each living enemy.",
        },
      },
      three: {
        name: "Merlin's Mystic Shield:",
        dis: {
          Default:
            "Gain 4 Intelligence Ups (2T), Stun Immunity (2T) and an Overheal (120).",
          Legendary:
            "At start of battle, Etrigan gains Crit Immunity (2T) and a light Overheal (20).",
        },
      },
      four: {
        name: "Gone, Gone, O' Form of Man:",
        dis: {
          Default:
            "Passive: Use Merlin's Mystic Shield and gain Crit Immunity (2T) on enemy death.",
          Legendary: "Also gain 5 Intelligence Ups (2T).",
        },
      },
      five: {
        name: "Jason Blood's Chivalry:",
        dis: {
          Default:
            "Passive: Gain 1 True Sight (1T) and 35% Turn Meter if an enemy revives. Use Jason Blood's Chivalry at the start of Etrigan's turn, if Overhealed.",
          Legendary: "Also gain 10 Agility Up (2T).",
        },
      },
    },
    CombatEffects: [
      "Agility Up",
      "Crit Immunity",
      "Intelligence Up",
      "Stun Immunity",
      "True Sight",
      "Heal Immunity",
      "Cooldown Effects",
      "True Damage",
      "Turn Meter Up and Self Heal",
    ],
    Affiliations: "Demon Knights and Justice League Dark",
    id: "47",
    affinity: "Mystical",
  },
  {
    tier: "S",
    name: "Spectre",
    subName: "Spirit of Vengeance",
    SPD: "120",
    HP: "27186",
    STR: "1632",
    INT: "2997",
    AG: "2001",
    STAM: "2139",
    CRC: "35%",
    CRV: "228%",
    LegendaryOrder:
      "4],2,3,5,1 (2021 rework - after his 4 the rest is personal preference)",
    GearSet: "Special Striker",
    powers: {
      one: {
        name: "Ethereal Punch:",
        dis: {
          Default:
            "Special Damage to an enemy. Ignore Shields and gain 2 permanent Int Ups.",
          Legendary: "Gain 20% Turn Meter Up to self.",
        },
      },
      two: {
        name: "Fear Projection:",
        dis: {
          Default:
            "Apply 20% Turn Meter Down and Stun (1T), Purge all Buffs on target.",
          Legendary: "Apply an additional Stun (1T) to a random enemy.",
        },
      },
      three: {
        name: "Divine Punishment:",
        dis: {
          Default:
            "Special Damage to all enemies and 75% chance to use Ethereal Punch.",
          Legendary: "Apply Heal Immunity (1T) to all enemies.",
        },
      },
      four: {
        name: "Soul Conversion:",
        dis: {
          Default:
            "Passive: When any character dies, 75% Chance for Spectre to gain 4 Intelligence Ups (2T) and 50% Turn Meter Up.",
          Legendary: "Use Fear Projection on a random enemy.",
        },
      },
      five: {
        name: "Soul Purge:",
        dis: {
          Default:
            "Passive: At the beginning of every Spectre's turn, gain 2 permanent Int Ups and purge 2 debuffs on him.",
          Legendary: "Also gain 1 Awareness.",
        },
      },
    },
    CombatEffects: [
      "Awareness",
      "Intelligence Up",
      "Heal Immunity",
      "Stun",
      "Out of Turn Attacks",
      "Ignore Shield",
      "Turn Meter Up",
      "Turn Meter Down",
      "Purge Buffs and Purge Debuffs",
    ],
    Affiliations: "Justice Society of America",
    id: "113",
    affinity: "Mystical",
  },
  {
    tier: "S",
    name: "DeSaad",
    subName: "Master Interrogator of Apokolips",
    SPD: "111",
    HP: "29779",
    STR: "1624",
    INT: "3027",
    AG: "2082",
    STAM: "2398",
    CRC: "35%",
    CRV: "228%",
    LegendaryOrder: "3],5,1,2,4",
    GearSet: "Special Striker",
    powers: {
      one: {
        name: "Temptation:",
        dis: {
          Default:
            "Light Special Damage to a single enemy and apply Intelligence Down (2T).",
          Legendary: "25% chance to Call Assist on the enemy.",
        },
      },
      two: {
        name: "Persuasion:",
        dis: {
          Default:
            "Steal 4 Buffs from the enemy team for random allies. Steal up to 15% shield from each shielded enemy for DeSaad.",
          Legendary: "25% chance to purge 1 Buff from each enemy.",
        },
      },
      three: {
        name: "Corruption:",
        dis: {
          Default: "Apply Buff Immunity (1T) and Stun (1T) the enemy team.",
          Legendary:
            "If Darkseid is a teammate, purge all Buffs from the enemy team before applying Buff Immunity.",
        },
      },
      four: {
        name: "Bow to DeSaad:",
        dis: {
          Default:
            "Passive: Apply Intelligence Down (1T) and 30% chance to Stun (1T) the enemy team at the beginning of DeSaad's turn.",
          Legendary:
            "Gain 25% Overheal after an enemy with the Energy Affinity hits DeSaad.",
        },
      },
      five: {
        name: "Torturer New God:",
        dis: {
          Default:
            "Passive: Purge 1 Buff and 50% to Call Assist on an enemy after it hits DeSaad.",
          Legendary:
            "20% Overheal and 20% chance to gain Debuff Immunity (1T) at the end of DeSaad's turn.",
        },
      },
    },
    CombatEffects: [
      "Debuff Immunity",
      "Buff Immunity",
      "Intelligence Down",
      "Stun",
      "Buff Stealing",
      "Call Assist",
      "Counter Attacks",
      "Steal Shield",
      "Purge Buffs and Self Heal",
    ],
    Affiliations: "Apokolips",
    id: "181",
    affinity: "Energy",
  },
  {
    tier: "S",
    name: "Lex Luthor",
    subName: "Survival Support Suit",
    SPD: "83",
    HP: "26543",
    STR: "1588",
    INT: "2937",
    AG: "2177",
    STAM: "2074",
    CRC: "35%",
    CRV: "228%",
    LegendaryOrder:
      "4,1,3,3,2 (there is a lot of debate on moving 2 before 3, I prefer 3, but use what is best for you)",
    GearSet: "Special Striker",
    powers: {
      one: {
        name: "Hands-Free Security:",
        dis: {
          Default:
            "Heavy Special Damage to an enemy, purge 4 buffs from enemy.",
          Legendary: "Apply Buff Immunity.",
        },
      },
      two: {
        name: "LexCorp Nano-Meds:",
        dis: {
          Default: "Apply 4 Speed Up and light overheal to all allies.",
          Legendary:
            "Purge 2 debuffs and apply 20% turn meter up to all allies",
        },
      },
      three: {
        name: "Metahuman Deterrent:",
        dis: {
          Default: "Heavy Special Damage and 60% Turn Meter Down to an enemy.",
          Legendary:
            "Apply Silence [1 turn] enemy.Legendary 2: Call AssistLexCorp Repair Bot: Team Leader: All Allies gain a medium overheal and 2 Intelligence Up if buffed.",
        },
      },
      four: {
        name: "",
        dis: { Default: "", Legendary: "" },
      },
      five: {
        name: "",
        dis: { Default: "", Legendary: "" },
      },
    },
    CombatEffects: [
      "Intelligence Up",
      "Speed Up",
      "Buff Immunity",
      "Silence",
      "Call Assist",
      "Heal",
      "Turn Meter Up",
      "Turn Meter Down",
      "Purge Buffs and Purge Debuffs",
    ],
    Affiliations: "Injustice League and Secret Society of Super-Villains",
    id: "76",
    affinity: "Energy",
  },
  {
    tier: "S",
    name: "Martian Manhunter",
    subName: "Last of the Martians",
    SPD: "103",
    HP: "27375",
    STR: "1546",
    INT: "2920",
    AG: "2156",
    STAM: "2158",
    CRC: "35%",
    CRV: "228%",
    LegendaryOrder: "3/1,2],4,5 (updated for rework)",
    GearSet: "Special Striker",
    powers: {
      one: {
        name: "Martian Vision:",
        dis: {
          Default:
            "Special Damage to single enemy, 75% chance to gain 1 Intelligence Up (2T) and apply 1 Awareness to a random teammate.",
          Legendary: "Call Assist if Martian Manhunter has Awareness.",
        },
      },
      two: {
        name: "Nine Senses:",
        dis: {
          Default: "Gain 3 Awareness, +35% Turn Meter.",
          Legendary: "Apply Debuff Immunity (1T) to all allies.",
        },
      },
      three: {
        name: "Shapechanging:",
        dis: {
          Default:
            "Special Heavy Damage to an enemy, apply Stun. Apply 20% extra damage if Martian Manhunter has Awareness.",
          Legendary: "Purge 5 buffs from target, purge can't miss.",
        },
      },
      four: {
        name: "Martian Intellect:",
        dis: {
          Default:
            "75% chance to gain +2 Intelligence Up (2T) at end of ally's turn if Martian Manhunter has Awareness.",
          Legendary: "Also gain Invisibility (1T) and 20% Overheal.",
        },
      },
      five: {
        name: "Telepathic Link:",
        dis: {
          Default:
            "Team Leader: Each ally gains 20% Turn Meter Up and Awareness at the start of battle.",
          Legendary: "Grant +1 Awareness to all allies when ally dies.",
        },
      },
    },
    CombatEffects: [
      "Awareness",
      "Debuff Immunity",
      "Intelligence Up",
      "Invisibility",
      "Stun",
      "Call Assist",
      "Turn Meter Up",
      "Purge Buffs",
      "Start of Battle Ability and Self Heal",
    ],
    Affiliations: "Justice League",
    id: "80",
    affinity: "Energy",
  },
  {
    tier: "S",
    name: "Supergirl",
    subName: "Last Daughter of Krypton",
    SPD: "122",
    HP: "31301",
    STR: "2755",
    INT: "1483",
    AG: "2105",
    STAM: "2495",
    CRC: "25%",
    CRV: "228%",
    LegendaryOrder: "1,4],2,3,5 (2021 rework)",
    GearSet: "Physical Support",
    powers: {
      one: {
        name: "Heat Vision Sweep:",
        dis: {
          Default:
            "Heavy Damage and apply 3 Crit Damage Down (2T) to all enemies.",
          Legendary:
            "Strike again if one enemy has 1 or more Crit Damage Down.",
        },
      },
      two: {
        name: "Strength of Hope:",
        dis: {
          Default:
            "Apply 5 Affinity Resistance Ups (2T) to all allies and 35% Turn Meter Up to all allies.",
          Legendary: "Apply Death Immunity (2T) to a random ally.",
        },
      },
      three: {
        name: "Boulder Slam:",
        dis: {
          Default:
            "Damage to all enemies, +100% damage if an ally is below 50% health.",
          Legendary: "Apply 7 Crit Damage Downs (2T) to all enemies.",
        },
      },
      four: {
        name: "Save the Day:",
        dis: {
          Default:
            "Every time an ally receives damage Supergirl Supergirl has 80% Chance to gain 3 Stamina Ups (1T).",
          Legendary:
            "If an ally receives Critical Damage use Strength of Hope.",
        },
      },
      five: {
        name: "House of El:",
        dis: {
          Default: "All enemies gain -40% Critical Damage.",
          Legendary:
            "At the start of each ally turn, 70% chance to grant them 1 Agility Up (2T)",
        },
      },
    },
    CombatEffects: [
      "Affinity Resist Up",
      "Agility Up",
      "Death Immunity",
      "Stamina Up",
      "Crit Damage Down and Turn Meter Up",
    ],
    Affiliations: "Kryptonian and Titans",
    id: "119",
    affinity: "Energy",
  },
  {
    tier: "S",
    name: "Superman",
    subName: "Man of Steel",
    SPD: "123",
    HP: "29630",
    STR: "2537",
    INT: "1555",
    AG: "2116",
    STAM: "2203",
    CRC: "47%",
    CRV: "256%",
    LegendaryOrder: "5,3,1],2,4 (2021 rework)",
    GearSet: "Physical Striker",
    powers: {
      one: {
        name: "Super Strength:",
        dis: {
          Default:
            "Damage to an enemy. Strike again if Superman has no debuffs.",
          Legendary: "75% Chance to Stun (1T).",
        },
      },
      two: {
        name: "Heat Vision:",
        dis: {
          Default: "Heavy Damage and 10% True Damage to an enemy. Can't Miss.",
          Legendary: "Always apply Buff Immunity (1T) and Heal Immunity (1T).",
        },
      },
      three: {
        name: "Kryptonian Physiology:",
        dis: {
          Default:
            "Gain 3 Taunt (1T), 3 Death Immunity (2T) and 3 Strength Ups (3T).",
          Legendary: "50% Chance to use Super Strength on a random enemy.",
        },
      },
      four: {
        name: "Impervious:",
        dis: {
          Default:
            "Superman has a 85% Chance to Purge all the debuffs from himself at the beginning of each of his turns.",
          Legendary: "Also Gain 10% of True Overheal.",
        },
      },
      five: {
        name: "I'll Take the Hits:",
        dis: {
          Default:
            "75% chance to use Kryptonian Physiology and gain Damage Immunity (2T) when an ally receives damage.",
          Legendary: "Use Kryptonian Physiology at the start of the battle.",
        },
      },
    },
    CombatEffects: [
      "Damage Immunity",
      "Death Immunity",
      "Strength Up",
      "Taunt",
      "Buff Immunity",
      "Heal Immunity",
      "Stun",
      "Can't Miss",
      "True Damage",
      "Purge Debuffs",
      "Start of Battle Ability and Self Heal",
    ],
    Affiliations: "Justice League and Kryptonian",
    id: "120",
    affinity: "Energy",
  },
  {
    tier: "S",
    name: "Terra",
    subName: "Troubled Teen Titan",
    SPD: "110",
    HP: "27807",
    STR: "1530",
    INT: "2889",
    AG: "2162",
    STAM: "2201",
    CRC: "35%",
    CRV: "228%",
    LegendaryOrder: "4,2,1],3,5",
    GearSet: "Special Striker",
    powers: {
      one: {
        name: "Stalagmite Slam:",
        dis: {
          Default:
            "Special Damage to an enemy, Can't Miss and apply 5 Evasion Down (2T) to target.",
          Legendary: "Apply Heal Immunity to target (1T).",
        },
      },
      two: {
        name: "Rock Solid:",
        dis: {
          Default:
            "Apply 4 Agility Ups (2T) and 4 Hit Chance Ups (2T) to all allies. Also apply 30% Shield.",
          Legendary: "Give Debuff Immunity (1T) to team.",
        },
      },
      three: {
        name: "Tremor:",
        dis: {
          Default: "Special Damage and 3 Evasion Down (2T) to all enemies.",
          Legendary: "75% chance to use Tremor a second time.",
        },
      },
      four: {
        name: "Meltdown:",
        dis: {
          Default:
            "If Terra has 6+ Debuffs at the start of her turn, purge her debuffs and trigger Meltdown, dealing Special Damage to all enemies.",
          Legendary: "Use Rock Solid at the start of the battle.",
        },
      },
      five: {
        name: "Earthen Purity:",
        dis: {
          Default:
            "If Terra triggers Meltdown, 75% chance to give Buff Immunity (2T) to a random enemy.",
          Legendary:
            "Grant Debuff Immunity (2T) and +4 Agility Ups (2T) to two random ally upon Terra’s death.",
        },
      },
    },
    CombatEffects: [
      "Agility Up",
      "Debuff Immunity",
      "Hit Chance Up",
      "Buff Immunity",
      "Evasion Down",
      "Heal Immunity",
      "Can't Miss",
      "Apply Shield",
      "Purge Debuffs and Start of Battle Ability",
    ],
    Affiliations: "Titans",
    id: "123",
    affinity: "Energy",
  },
  {
    tier: "A",
    name: "Atom",
    subName: "The World's Smallest Hero",
    SPD: "120",
    HP: "30019",
    STR: "2652",
    INT: "1666",
    AG: "2167",
    STAM: "2367",
    CRC: "25%",
    CRV: "228%",
    LegendaryOrder: "5,1,4,2,3 (2022 rework)",
    GearSet: "Physical Support",
    powers: {
      one: {
        name: "Atomic Punch:",
        dis: {
          Default:
            "Damage to an enemy. and gain 2 Empowered Strenght Ups (2T).",
          Legendary: "Ignore Shields and Awareness if the target is buffed.",
        },
      },
      two: {
        name: "Microscopic Assistance:",
        dis: {
          Default:
            "Purge 5 debuffs from each ally. Call Assist from primary target.",
          Legendary: "Gain 5 Evasion Ups (2T).",
        },
      },
      three: {
        name: "The Harder They Fall:",
        dis: {
          Default:
            "Heavy Damage to an enemy. +50% Damage if target is above 50% HP.",
          Legendary: "Also gain Debuff Immunity (2T).",
        },
      },
      four: {
        name: "Time Pool Recall:",
        dis: {
          Default:
            "Passive: Each time Atom damage an enemy 70% Chance to Call Assist on a random teammate.",
          Legendary: "Also apply 5 Evasion Ups (1T) on a teammate.",
        },
      },
      five: {
        name: "Scientific Approach:",
        dis: {
          Default:
            "Passive: 85% chance to gain 50% Turn Meter Up each time an enemy gains 1+ buff on their turn.",
          Legendary: "Also Atom gain 2 Empowered Strenght Ups (2T).",
        },
      },
    },
    CombatEffects: [
      "Debuff Immunity",
      "Evasion Up",
      "Empowered Strength Up",
      "Call Assist",
      "Counter Attacks",
      "Ignore Shield",
      "Ignore Awareness",
      "Turn Meter Up and Purge Debuffs",
    ],
    Affiliations: "Justice League",
    id: "142",
    affinity: "Physical",
  },
  {
    tier: "A",
    name: "Atom Smasher",
    subName: "Albert Rothstein",
    SPD: "101",
    HP: "41050",
    STR: "2552",
    INT: "1603",
    AG: "1781",
    STAM: "2915",
    CRC: "22%",
    CRV: "228%",
    LegendaryOrder: "3,5,1],2,4",
    GearSet: "Physical Tank",
    powers: {
      one: {
        name: "Colossal Punch:",
        dis: {
          Default: "Damage to single enemy and apply 5 Agility Down (3T).",
          Legendary: "Purge 2 Buffs from the enemy.",
        },
      },
      two: {
        name: "Tremors:",
        dis: {
          Default:
            "Gain 6 Empowered Stamina Up (3T). Apply Hit Chance Down (1T) to all teammates and 4 Hit Chance Down (2T) to all enemies.",
          Legendary: "Gain 5 Affinity Resist Up (2T).",
        },
      },
      three: {
        name: "Rock Burst:",
        dis: {
          Default:
            "Heavy damage to all enemies. Apply 50% Turn Meter Down and 2 Hit Chance Down (2T). If enemies already have Hit Chance Down, 5 turns are added to their duration.",
          Legendary:
            "Deal 10% True Damage (+10% if enemy has Hit Chance Down).",
        },
      },
      four: {
        name: "Atomic Dispersal:",
        dis: {
          Default:
            "At the start of battle, gain permanent Empowered Strength and Stamina Up.",
          Legendary:
            "At the start of his turn, if Atom Smasher has 5+ Empowered Stamina Up, suffers 10% True Damage but gains permanent Empowered Strength and Stamina Up.",
        },
      },
      five: {
        name: "For Atom!:",
        dis: {
          Default:
            'When a teammate is hit, use "Colossal Punch" ignoring Awareness. If the teammate has Hit Chance Down, apply Intelligence and Agility Down (3T) on the attacker.',
          Legendary:
            "75% chance to gain permanent Empowered Stamina Up and to apply 20% Turn Meter Down on a random enemy after counterattack.",
        },
      },
    },
    CombatEffects: [
      "Affinity Resist Up",
      "Empowered Strength Up",
      "Empowered Stamina Up",
      "Agility Down",
      "Hit Chance Down",
      "Intelligence Down",
      "Counter Attacks",
      "Ignore Awareness",
      "True Damage",
      "Turn Meter Down and Purge Buffs",
    ],
    Affiliations: "Justice Society of America and Suicide Squad",
    id: "184",
    affinity: "Physical",
  },
  {
    tier: "A",
    name: "Batman",
    subName: "World's Greatest Detective",
    SPD: "112",
    HP: "29775",
    STR: "2390",
    INT: "1655",
    AG: "2114",
    STAM: "2342",
    CRC: "25%",
    CRV: "228%",
    LegendaryOrder: "2,3,4,1,5 (updated for rework)",
    GearSet: "Physical Support",
    powers: {
      one: {
        name: "Batarang Throw:",
        dis: {
          Default: "Damage to an enemy. Purge 2 Buffs from target.",
          Legendary: "Purge 2-3 extra Buffs.",
        },
      },
      two: {
        name: "Detective Work:",
        dis: {
          Default:
            "Apply 2 Affinity Power Ups and True Sight to all allies. 50% chance to apply 40% Turn Meter Up to each ally.",
          Legendary: "Lowers the Cooldown of all moves by 1 for all allies.",
        },
      },
      three: {
        name: "Synthesize Cure:",
        dis: {
          Default: "Purge 10 Debuffs and Heavy Overheal to an ally.",
          Legendary: "Also apply 100% Turn Meter Up if used on a teammate.",
        },
      },
      four: {
        name: "Explosive Batarangs:",
        dis: {
          Default: "Damage and Purge 3-4 Buffs from each enemy.",
          Legendary: "Purge all Buffs from each Invisible enemy.",
        },
      },
      five: {
        name: "Precision Strikes:",
        dis: {
          Default:
            "All allies have a 50% chance to Purge 1 Buff and gain 2 Affinity Power Ups (2T) if damaging an enemy.",
          Legendary:
            "If Precision Strikes hits, 50% chance for ally to also gain Awareness.",
        },
      },
    },
    CombatEffects: [
      "Affinity Power Up",
      "Awareness",
      "True Sight",
      "Cooldown Effects",
      "Heal",
      "Turn Meter Up",
      "Purge Buffs and Purge Debuffs",
    ],
    Affiliations: "Bat Family and Justice League",
    id: "14",
    affinity: "Physical",
  },
  {
    tier: "A",
    name: "Batwoman",
    subName: "Army of One",
    SPD: "117",
    HP: "28383",
    STR: "2513",
    INT: "1551",
    AG: "1916",
    STAM: "2078",
    CRC: "47%",
    CRV: "256%",
    LegendaryOrder:
      "(standard) 4,3,2,5,1 / Optimal use of turn meter 3,5,4,1,2 (no rings in 2)",
    GearSet: "Physical Striker",
    powers: {
      one: {
        name: "Neutralize and Destroy:",
        dis: {
          Default: "Damage to an Enemy. Apply 4 Crit Damage Down.",
          Legendary: "+5% True Damage per invisible teammate.",
        },
      },
      two: {
        name: "Stealth Ops:",
        dis: {
          Default: "Gain Invisibility, 3 Strength Up and 20% Turn Meter Up.",
          Legendary:
            "Double all effects of Stealth Ops if Batwoman is already invisible.",
        },
      },
      three: {
        name: "Piercing Grapple:",
        dis: {
          Default:
            "Heavy Damage to an Enemy. +80% additional damage if Invisible.",
          Legendary:
            "Use Piercing Grapple on a random enemy if target is killed.",
        },
      },
      four: {
        name: "Kane Legacy:",
        dis: {
          Default:
            "40% Chance to apply 4 Crit Damage Down at the beginning of each enemy turn.",
          Legendary: "Use Stealth Ops at start of battle (Applies cooldown).",
        },
      },
      five: {
        name: "Payback:",
        dis: {
          Default:
            "At the end of each enemy turn, deal light damage to the attacker per ally hit.",
          Legendary:
            "Gain 1 Awareness (Always) each time Batwoman gains Invisibility on an ally's turn.",
        },
      },
    },
    CombatEffects: [
      "Awareness",
      "Invisibility",
      "Strength Up",
      "Crit Damage Down",
      "Counter Attacks",
      "True Damage",
      "Turn Meter Up and Start of Battle Ability",
    ],
    Affiliations: "Bat Family",
    id: "15",
    affinity: "Physical",
  },
  {
    tier: "A",
    name: "Black Mask",
    subName: "The Crime King",
    SPD: "121",
    HP: "31538",
    STR: "2431",
    INT: "1612",
    AG: "2281",
    STAM: "2519",
    CRC: "25%",
    CRV: "228%",
    LegendaryOrder: "1,2,4],3,5",
    GearSet: "Physical Support",
    powers: {
      one: {
        name: "Weakening Shot:",
        dis: {
          Default:
            "Light Damage and Always apply 2 Strength Down (1T), 2 Agility Down (1T), 3 Bleed (3T) and 60% chance to Silence (1T) an enemy.",
          Legendary:
            "Call Assist from random teammate if Black Mask has any immunity.",
        },
      },
      two: {
        name: "Crime Lord:",
        dis: {
          Default:
            "Apply Taunt (1T) to ally and call their Assist, Black Mask gains 1 Crit Immunity (2T).",
          Legendary:
            "40% chance to call second Assist. +40% chance if any enemy is Overhealed.",
        },
      },
      three: {
        name: "Sionis Legacy:",
        dis: {
          Default:
            "Damage to an Enemy, +12% Damage per debuff on target (Max 10), Damage +45% to overhealed targets.",
          Legendary:
            "5% chance per debuff on target use again on random target.",
        },
      },
      four: {
        name: "Obsidian Protection:",
        dis: {
          Default:
            "Start battle with Crit Immunity (1T), 40% chance to gain Crit Immunity (1T) at the start of each enemy turn.",
          Legendary:
            "Also apply 2 Strength Down (2T) and 2 Agility Down on that enemy.",
        },
      },
      five: {
        name: "Even the Odds:",
        dis: {
          Default:
            "Whenever an ally dies, Black Mask gains Crit Immunity (2T), and applies 3 Strength Down (2T), 3 Agility Down (2T), 2 Buff Immunity (2T) and 30% Turn Meter Down to the enemy team.",
          Legendary:
            "Apply 2 Strength Up (0T) to all allies when called to assist by Black Mask.",
        },
      },
    },
    CombatEffects: [
      "Crit Immunity",
      "Agility Down",
      "Bleeds",
      "Silence",
      "Strength Down",
      "Call Assist",
      "Apply Taunt to Ally",
      "Turn Meter Down and Start of Battle Ability",
    ],
    Affiliations: "Secret Society of Super-Villains",
    id: "23",
    affinity: "Physical",
  },
  {
    tier: "A",
    name: "Cassandra Cain",
    subName: "The One Who Is All",
    SPD: "125",
    HP: "28732",
    STR: "2618",
    INT: "1394",
    AG: "2282",
    STAM: "2113",
    CRC: "47%",
    CRV: "256%",
    LegendaryOrder: "5,1,2,],3,4",
    GearSet: "Physical Striker",
    powers: {
      one: {
        name: "Death Wish:",
        dis: {
          Default:
            "Damage to an enemy. Apply 50% additional damage if Cassandra is Invisible.",
          Legendary: "Apply Buff Immunity (1T) on target.",
        },
      },
      two: {
        name: "The Falling Leaf Technique:",
        dis: {
          Default:
            "Light Damage to an enemy and apply Heal Immunity on target (1T). Gain 5 Evasion Ups (1T) and Invisibility (1T).",
          Legendary: "Purge 3 Buffs on target.",
        },
      },
      three: {
        name: "Bat Swarm:",
        dis: {
          Default:
            "Damage to all enemies. Apply 5 Bleeds on targets if Cassandra is Invisible.",
          Legendary: "Apply 20% Turn Meter Down on two random targets.",
        },
      },
      four: {
        name: "Shadow Recovery:",
        dis: {
          Default:
            "If Cassandra is invisible at the start of every turn, gain 25% Heal and 5 Evasion Ups (2T).",
          Legendary: "Purge 3 Debuffs on Cassandra.",
        },
      },
      five: {
        name: "Body Reading Ability:",
        dis: {
          Default:
            "If Cassandra evades an attack, use Death Wish on the enemy attacker.",
          Legendary: "Start the battle with Invisibility (2T).",
        },
      },
    },
    CombatEffects: [
      "Evasion Up",
      "Invisibility",
      "Buff Immunity",
      "Heal Immunity",
      "Bleeds",
      "Counter Attacks",
      "Purge Buffs",
      "Purge Debuffs",
      "Start of Battle Ability and Self Heal",
    ],
    Affiliations: "The Outsiders and Bat Family",
    id: "30",
    affinity: "Physical",
  },
  {
    tier: "A",
    name: "Doctor Poison",
    subName: "Master of the Toxic",
    SPD: "105",
    HP: "26503",
    STR: "1686",
    INT: "2780",
    AG: "2243",
    STAM: "2070",
    CRC: "35%",
    CRV: "228%",
    LegendaryOrder: "4,1,2,5,3 (updated for 2021 rework)",
    GearSet: "Special Striker",
    powers: {
      one: {
        name: "Virulence:",
        dis: {
          Default:
            "Special Damage and apply 3 Bleeds (3T) that ignore immunities to an enemy. If target already had Bleed, apply 1 Bleed (3T) to a random enemy.",
          Legendary: "Double Damage if the target is bleeding.",
        },
      },
      two: {
        name: "Antivenom:",
        dis: {
          Default:
            "Overheal all allies. Additional 2% True Heal per Bleed on enemy team (Max 20%).",
          Legendary: "Purge 3 debuffs from all allies.",
        },
      },
      three: {
        name: "Gas Grenade:",
        dis: {
          Default:
            "10% true Damage to all enemies and apply 3 Bleeds (3T). Additional Light Special Damage to enemy team per Bleed on enemy team. Can't miss.",
          Legendary: "Apply 2 Heal Immunities (2T) to random enemies.",
        },
      },
      four: {
        name: "Master of Poisons:",
        dis: {
          Default:
            "Passive: At the end of her turn, 75% Chance for all enemies to take 1% True Damage per Bleed on the enemy team (Max 25%).",
          Legendary: "Also, purge 1 Buffs from each enemy.",
        },
      },
      five: {
        name: "Master of Antidotes:",
        dis: {
          Default:
            "Passive: At the beginning of her turn, 71% chance to apply Overheal to all allies.",
          Legendary:
            "If there are 6+ Bleeds on the enemy team, double amount healed.",
        },
      },
    },
    CombatEffects: [
      "Bleeds",
      "Heal Immunity",
      "Can't Miss",
      "Heal",
      "True Damage",
      "Purge Buffs",
      "Purge Debuffs and Ignore Immunities",
    ],
    Affiliations: "",
    id: "42",
    affinity: "Physical",
  },
  {
    tier: "A",
    name: "Dove",
    subName: "The Avatar Of Peace",
    SPD: "116",
    HP: "29553",
    STR: "2618",
    INT: "1583",
    AG: "2328",
    STAM: "2320",
    CRC: "25%",
    CRV: "228%",
    LegendaryOrder: "1,4,5],2,3",
    GearSet: "Physical Support",
    powers: {
      one: {
        name: "Dove Kick:",
        dis: {
          Default:
            "Damage to a single Enemy and apply 3 Hit Chance Down (1T) to the target.",
          Legendary: "Gain 3 Evasion Ups (2T).",
        },
      },
      two: {
        name: "Amazing Willingness:",
        dis: {
          Default:
            "Apply 5 Evasion Ups (1T) and 25% Shield to all allies, apply 15% additional Shield if Hawk is in the Team.",
          Legendary:
            "Also apply 2 Strength Ups (1T) apply 2 additional Strength Ups (1T) if Hawk is in the team.",
        },
      },
      three: {
        name: "Hyper Flight:",
        dis: {
          Default:
            "Damage to all enemies and apply 3 Hit Chance Down (1T) to all enemies.",
          Legendary: "Purge 3 Debuffs on Dove.",
        },
      },
      four: {
        name: "Danger Sense:",
        dis: {
          Default:
            "Every time Dove evades an attack, 75% Chance to apply Silence on the attacker and gain 3 Agility Ups (2T).",
          Legendary: "Also use Dove Kick on the attacker.",
        },
      },
      five: {
        name: "The Other Half:",
        dis: {
          Default:
            "At the start of every Dove turn gain 2 Strength Ups (2T) if she has 3 or more Evasion Ups (2T). Gain 2 extra Strength Ups (2T) if Hawk is in the team.",
          Legendary: "Start the battle with 3 Evasions Ups (2T).",
        },
      },
    },
    CombatEffects: [
      "Agility Up",
      "Evasion Up",
      "Strength Up",
      "Hit Chance Down",
      "Silence",
      "Counter Attacks",
      "Apply Shield",
      "Purge Debuffs and Start of Battle Ability",
    ],
    Affiliations: "Titans",
    id: "153",
    affinity: "Physical",
  },
  {
    tier: "A",
    name: "Harley Quinn",
    subName: "The Mad Jester",
    SPD: "114",
    HP: "28730",
    STR: "2363",
    INT: "1620",
    AG: "2319",
    STAM: "2113",
    CRC: "47%",
    CRV: "256%",
    LegendaryOrder: "2,4,1,3,5 (2021 rework)",
    GearSet: "Physical Striker",
    powers: {
      one: {
        name: "Ya Big Dummy!:",
        dis: {
          Default:
            "Damage to an enemy, 10% increased damage per Intelligence Down on target.",
          Legendary: "50% Chance to strike twice.",
        },
      },
      two: {
        name: "Come Get It:",
        dis: {
          Default:
            "Gain Taunt (3T) and 5 Evasion Ups (2T), 50% chance to Enrage (1T) all enemies.",
          Legendary:
            "Harley Quinn triggers Come Get it at the beginning of battle and gains 1 Evasion Up (2T). Come Get It gains 2 turn initial cooldown.",
        },
      },
      three: {
        name: "Big Smasheroony:",
        dis: {
          Default: "Damage and apply 3 Intelligence Downs (2T) to all enemies.",
          Legendary: "50% chance to +100% damage.",
        },
      },
      four: {
        name: "Acrobatty:",
        dis: {
          Default:
            "Passive: Gain 35% Turn Meter and Evasion Up and apply 2 Intelligence Downs (2T) to an enemy if Harley evades.",
          Legendary: "Use Ya Big Dummy! on the enemy if evading.",
        },
      },
      five: {
        name: "Mockery:",
        dis: {
          Default:
            "Passive: 80% Chance to gain 2 Evasion Ups (2T) if an enemy has Taunt at the end of her turn.",
          Legendary: "50% Chance to apply Stun on the target.",
        },
      },
    },
    CombatEffects: [
      "Evasion Up",
      "Taunt",
      "Enrage",
      "Intelligence Down",
      "Stun",
      "Counter Attacks",
      "Turn Meter Up and Start of Battle Ability",
    ],
    Affiliations: "Suicide Squad",
    id: "59",
    affinity: "Physical",
  },
  {
    tier: "A",
    name: "King Shark",
    subName: "Nanaue",
    SPD: "124",
    HP: "30800",
    STR: "2666",
    INT: "1579",
    AG: "2155",
    STAM: "2445",
    CRC: "25%",
    CRV: "228%",
    LegendaryOrder: "1/3,2,5,4",
    GearSet: "Physical Support",
    powers: {
      one: {
        name: "Direct Hit:",
        dis: {
          Default:
            "Damage to an enemy and apply 20% additional damage for every Bleed on the character (max 5 Bleeds).",
          Legendary: "Apply 2 Bleeds (3T) on target after damage.",
        },
      },
      two: {
        name: "Deep Bite:",
        dis: {
          Default:
            "Damage to a single enemy and apply 5 Bleeds that cannot miss (3T) on target.",
          Legendary: "Apply 50% Turn Meter Down on target.",
        },
      },
      three: {
        name: "Shark Attack:",
        dis: {
          Default:
            "Damage to all enemies and apply 30% Turn Meter Down to all enemies.",
          Legendary: "Also apply Stun (1T) on the main target.",
        },
      },
      four: {
        name: "Smells like Blood:",
        dis: {
          Default:
            "Passive: Every time a teammate deals damage to an enemy 75% Chance for King Shark to use Direct Hit on a random enemy.",
          Legendary: "Purge 3 Debuffs on King Shark.",
        },
      },
      five: {
        name: "Terror in the Deep:",
        dis: {
          Default:
            "Passive: 80% Chance to gain 4 Empowered Strength Ups (2T) every time an enemy Bleeds.",
          Legendary: "Also apply a Medium Overheal on King Shark.",
        },
      },
    },
    CombatEffects: [
      "Empowered Strength Up",
      "Bleeds",
      "Stun",
      "Out of Turn Attacks",
      "Turn Meter Down",
      "Purge Debuffs and Self Heal",
    ],
    Affiliations: "Suicide Squad",
    id: "162",
    affinity: "Physical",
  },
  {
    tier: "A",
    name: "Lady Shiva",
    subName: "Sandra Wu-San",
    SPD: "115",
    HP: "28732",
    STR: "2548",
    INT: "1516",
    AG: "2230",
    STAM: "2113",
    CRC: "47%",
    CRV: "256%",
    LegendaryOrder: "5,4,1,2,3",
    GearSet: "Physical Striker",
    powers: {
      one: {
        name: "Secret Art:",
        dis: {
          Default: "Damage to an enemy and gain 4 Critical Chance Ups (2T).",
          Legendary: "Purge 4 Buffs on target.",
        },
      },
      two: {
        name: "Leopard Blow:",
        dis: {
          Default:
            "Heavy Damage to a single enemy and apply Heal Immunity (1T).",
          Legendary: "If the enemy dies, resets the cooldown of Leopard Blow.",
        },
      },
      three: {
        name: "Kobusho Tactics:",
        dis: {
          Default:
            "Damage to all enemies and remove 100% of the primary target Shields.",
          Legendary: "Lady Shiva gains 20% Shields.",
        },
      },
      four: {
        name: "Dragon Path:",
        dis: {
          Default:
            "Passive: At the beginning of every Lady Shiva Turn, 75% to gain 2 Critical Chance Ups (2T) and 2 Strength Ups (2T).",
          Legendary: "Lady Shiva attacks ignore Awareness.",
        },
      },
      five: {
        name: "Chi Kung:",
        dis: {
          Default:
            "Passive: If Lady Shiva deals critical damage, gain a medium Overheal and 2 Awareness.",
          Legendary:
            "Lady Shiva starts the combat with Critical Immunity (2T) and 35% Turn Metter Up.",
        },
      },
    },
    CombatEffects: [
      "Awareness",
      "Crit Chance Up",
      "Crit Immunity",
      "Strength Up",
      "Heal Immunity",
      "Cooldown Effects",
      "Apply Shield",
      "Remove Shield",
      "Ignore Awareness",
      "Turn Meter Up",
      "Purge Buffs",
      "Start of Battle Ability and Self Heal",
    ],
    Affiliations: "Birds of Prey",
    id: "150",
    affinity: "Physical",
  },
  {
    tier: "A",
    name: "Lobo",
    subName: "The Main Man",
    SPD: "106",
    HP: "40795",
    STR: "2469",
    INT: "1415",
    AG: "1732",
    STAM: "2890",
    CRC: "22%",
    CRV: "228%",
    LegendaryOrder:
      "2,5],1,3,4 (and possibly never take 4… depending on your comp)",
    GearSet: "Physical Tank",
    powers: {
      one: {
        name: "The Garrote:",
        dis: {
          Default: "Damage to an enemy, Damage +100% if Lobo is Taunting.",
          Legendary: "Apply 2 Bleeds (3T) that can't miss.",
        },
      },
      two: {
        name: "The Main Man:",
        dis: {
          Default:
            "Gain 5 Taunts (1T) , Light Heal (50%), and 5 Stamina Up (2T).",
          Legendary:
            "Apply 15% Turn Meter Down to all enemies, 15% additional Turn Meter Down to enemies above 50% HP.",
        },
      },
      three: {
        name: "Spacehog Surprise:",
        dis: {
          Default:
            "Heavy Damage to all enemies and apply Stun (1T) to a random enemy.",
          Legendary: "Apply 1 Bleed (3T) to all enemies.",
        },
      },
      four: {
        name: "You Want Some?:",
        dis: {
          Default: "Passive: Use The Main Man when anyone dies.",
          Legendary: "Gain Turn Meter Up +50% when anyone dies.",
        },
      },
      five: {
        name: "Banned from the Afterlife:",
        dis: {
          Default:
            "Passive: For each ally alive, Lobo has a 33% Chance to revive with 60% Health.",
          Legendary: "75% Chance to use Spacehog Surprise upon Revive.",
        },
      },
    },
    CombatEffects: [
      "Taunt",
      "Stamina Up",
      "Bleeds",
      "Stun",
      "Out of Turn Attacks",
      "Revive",
      "Turn Meter Down and Self Heal",
    ],
    Affiliations: "Justice League",
    id: "78",
    affinity: "Physical",
  },
  {
    tier: "A",
    name: "Peacemaker",
    subName: "Christopher Smith",
    SPD: "116",
    HP: "30041",
    STR: "2844",
    INT: "1499",
    AG: "2169",
    STAM: "2244",
    CRC: "47%",
    CRV: "256%",
    LegendaryOrder: "5,4,1]3,2",
    GearSet: "Physical Striker",
    powers: {
      one: {
        name: "Fist Diplomacy:",
        dis: {
          Default: "Damage to a single enemy and purge 4 Buffs on target.",
          Legendary: "Can't miss.",
        },
      },
      two: {
        name: "Always Ready:",
        dis: {
          Default:
            "Peacemaker gains 4 Strength Ups (2T) and 4 Crit Chance Ups (2T). Also 70% Chance to gain 1 Damage Immunity (1T).",
          Legendary: "Also apply Buff Immunity (1T) on a random enemy.",
        },
      },
      three: {
        name: "Peace at any Cost:",
        dis: {
          Default:
            "Damage to all enemies and 75% Chance to remove all positive immunities from the targets.",
          Legendary: "Remove 3 Buffs on every character.",
        },
      },
      four: {
        name: "Zealous Vigilante:",
        dis: {
          Default:
            "Passive: Every time an enemy is buffed 75% Chance for Peacemaker to gain 2 Strength Ups (2T) and 2 Crit Damage Ups (2T).",
          Legendary: "Peacemaker is immune to Stun.",
        },
      },
      five: {
        name: "Violent Tendencies:",
        dis: {
          Default:
            "Passive: If Peacemaker is attacked by an enemy with Awareness he uses Fist Diplomacy on the attacker.",
          Legendary: "Peacemaker attacks ignore Awareness.",
        },
      },
    },
    CombatEffects: [
      "Crit Chance Up",
      "Crit Damage Up",
      "Damage Immunity",
      "Strength Up",
      "Stun Immunity",
      "Buff Immunity",
      "Can't Miss",
      "Counter Attacks",
      "Ignore Awareness and Purge Buffs",
    ],
    Affiliations: "Suicide Squad",
    id: "172",
    affinity: "Physical",
  },
  {
    tier: "A",
    name: "Punchline",
    subName: "Alexis Kaye",
    SPD: "122",
    HP: "31887",
    STR: "2588",
    INT: "1508",
    AG: "2543",
    STAM: "2554",
    CRC: "25%",
    CRV: "228%",
    LegendaryOrder: "4,5],1,2,3",
    GearSet: "Physical Support",
    powers: {
      one: {
        name: "Toxic Relationship:",
        dis: {
          Default: "Damage and apply 3 Diseases (3T) on a single enemy.",
          Legendary: "Also, gain 3 Mends.",
        },
      },
      two: {
        name: "XOXO:",
        dis: {
          Default: "Heavy damage and gain Invisibility (2T).",
          Legendary:
            "50% chance to apply 3 Empowered Stamina Ups (2T) on a random ally who's injured below 60% of their total HP.",
        },
      },
      three: {
        name: "Explosive Reaction:",
        dis: {
          Default: "Damage and apply Buff Immunity (2T) to all enemies.",
          Legendary: "Apply Doom (4T) on a random enemy.",
        },
      },
      four: {
        name: "Friendly Fire:",
        dis: {
          Default:
            "When an ally is hit, 70% chance to apply 3 Diseases (3T) that ignores immunities on the attacker.",
          Legendary: "Also apply Buff Immunity (1T).",
        },
      },
      five: {
        name: "Mercury Retrograde:",
        dis: {
          Default:
            "If an enemy has Disease, apply 2 Strength Downs (1T) at the start of the enemy's turn.",
          Legendary:
            "Start the battle with Invisibility (1T) and 1 Empowered Stamina Up (1T).",
        },
      },
    },
    CombatEffects: [
      "Invisibility",
      "Mends",
      "Empowered Stamina Up",
      "Buff Immunity",
      "Doom",
      "Disease",
      "Strength Down",
      "Start of Battle Ability and Ignore Immunities",
    ],
    Affiliations: "Injustice League",
    id: "175",
    affinity: "Physical",
  },
  {
    tier: "A",
    name: "Red Hood",
    subName: "Vengeful Vigilante",
    SPD: "113",
    HP: "30198",
    STR: "2464",
    INT: "1354",
    AG: "2329",
    STAM: "2260",
    CRC: "47%",
    CRV: "256%",
    LegendaryOrder:
      "4,1,5,2,3 (If he is your primary leader the 5 should move up - updated for rework)",
    GearSet: "Physical Striker",
    powers: {
      one: {
        name: "Blazing Pistols:",
        dis: {
          Default:
            "Apply 3 light damage bursts. Each burst removes 2 awareness.",
          Legendary: "35% chance to use Barrel Down on target",
        },
      },
      two: {
        name: "Barrel Down:",
        dis: {
          Default:
            "Damage to an enemy. Steal 2 buffs (Max10) for each bleed on target to a random ally.",
          Legendary:
            "Also gain turn meter up +10% for each bleed on the target (maximum 50%)",
        },
      },
      three: {
        name: "Explosive Gunplay:",
        dis: {
          Default: "Damage to all enemies.",
          Legendary: "Gain invisibility (1 turn) and 2 evasion ups",
        },
      },
      four: {
        name: "Ruthless Vigilante:",
        dis: {
          Default:
            "Passive Ability: When Red Hood damages an enemy, 100% chance to apply 2 bleed that can't miss.",
          Legendary: "Also apply heal immunity (1 turn)",
        },
      },
      five: {
        name: "Outlaws Never Die:",
        dis: {
          Default:
            "Team Leader: When an enemy dies, apply 1 buff immunity and turn meter down -50% on all enemies.",
          Legendary: "Also steal 2 buffs from each enemy to random allies",
        },
      },
    },
    CombatEffects: [
      "Evasion Up",
      "Invisibility",
      "Buff Immunity",
      "Heal Immunity",
      "Bleeds",
      "Buff Stealing",
      "Turn Meter Up",
      "Turn Meter Down and Purge Buffs",
    ],
    Affiliations: "Bat Family, Outlaws and Robins",
    id: "99",
    affinity: "Physical",
  },
  {
    tier: "A",
    name: "Red Robin",
    subName: "Tim Drake",
    SPD: "127",
    HP: "29493",
    STR: "2401",
    INT: "1582",
    AG: "2076",
    STAM: "2314",
    CRC: "25%",
    CRV: "228%",
    LegendaryOrder: "3,1,2/5,4",
    GearSet: "Physical Support",
    powers: {
      one: {
        name: "Sweep the Legs:",
        dis: {
          Default: "Light Damage and purge 2 buffs from enemy.",
          Legendary: "Apply Buff Immunity to target if Red Robin is Invisible.",
        },
      },
      two: {
        name: "Tech Support:",
        dis: {
          Default: "Apply True Sight and +80% Turn Meter to friendly target.",
          Legendary: "Red Robin also gains True Sight and +25% Turn Meter.",
        },
      },
      three: {
        name: "Tactical Strike:",
        dis: {
          Default: "Damage and purge 4-5 buffs from enemy.",
          Legendary:
            "Can't miss; Purge +2 buffs if an enemy is Taunting or Invisible.",
        },
      },
      four: {
        name: "Into the Shadows:",
        dis: {
          Default:
            "Passive ability: If any hero is Invisible at the end of a turn. 65% chance to gain Invisibility.",
          Legendary: "Also purge 1 debuff from each ally.",
        },
      },
      five: {
        name: "Young Justice:",
        dis: {
          Default:
            "Passive ability: 30% chance to use Sweep the Legs at the end of every ally's turn if any ally has True Sight or is Invisible.",
          Legendary: "25% chance to use Sweep the Legs twice.",
        },
      },
    },
    CombatEffects: [
      "Invisibility",
      "True Sight",
      "Buff Immunity",
      "Can't Miss",
      "Out of Turn Attacks",
      "Turn Meter Up",
      "Purge Buffs and Purge Debuffs",
    ],
    Affiliations: "Bat Family and Robins",
    id: "100",
    affinity: "Physical",
  },
  {
    tier: "A",
    name: "Riddler",
    subName: "The Prince of Puzzles",
    SPD: "113",
    HP: "28047",
    STR: "2519",
    INT: "1700",
    AG: "2455",
    STAM: "2170",
    CRC: "25%",
    CRV: "228%",
    LegendaryOrder:
      "5,4,3,2,1] (for raids take 1,4 first - updated for 2021 rework)",
    GearSet: "Physical Support",
    powers: {
      one: {
        name: "Concussion Strike:",
        dis: {
          Default: "Damage to an enemy. Apply 6 Agility Downs (2T).",
          Legendary: "Also apply 5 Int Down (2T)",
        },
      },
      two: {
        name: "Shocking Revelation:",
        dis: {
          Default:
            "Always apply 5 Speed Down (2T) and 5 Evasion Down (2T) to the target. Also, Stun (1T) if the target has Agility Down.",
          Legendary:
            "75% Chance to use Shocking Revelation on an additional random enemy.",
        },
      },
      three: {
        name: "Riddle me THAT!:",
        dis: {
          Default:
            "Damage and apply Taunt (2T) and 8 Agility Down (2T) to a target. Call assist on the target.",
          Legendary:
            "Gain True Sight (2T) and Death Immunity. Also, 75% Chance to cast buffs on a random ally.",
        },
      },
      four: {
        name: "Feeble minded:",
        dis: {
          Default:
            "Passive: 85% chance to use Shocking Revelation on the attacker when Riddler is hit.",
          Legendary: "Also apply 3 Agility Down (2T) at the end of the turn.",
        },
      },
      five: {
        name: "Unsolvable Riddle:",
        dis: {
          Default:
            "Passive: 80% chance Apply 2 Int Down (2T) and 2 Agility Down (2T) to a random enemy at the end of Riddler's turn.",
          Legendary:
            "Start the battle with True Sight (2T) and 75% chance to reset Cooldown of Riddle me THAT! at the end of Riddler's turn.",
        },
      },
    },
    CombatEffects: [
      "True Sight",
      "Death Immunity",
      "Agility Down",
      "Evasion Down",
      "Intelligence Down",
      "Speed Down",
      "Stun",
      "Call Assist",
      "Cooldown Effects",
      "Counter Attacks",
      "Apply Taunt to enemy and Start of Battle Ability",
    ],
    Affiliations: "Secret Society of Super-Villains",
    id: "102",
    affinity: "Physical",
  },
  {
    tier: "A",
    name: "Talon",
    subName: "William Cobb",
    SPD: "113",
    HP: "28772",
    STR: "2452",
    INT: "1506",
    AG: "2330",
    STAM: "2117",
    CRC: "47%",
    CRV: "256%",
    LegendaryOrder: "3,4,1,2],5",
    GearSet: "Physical Striker",
    powers: {
      one: {
        name: "Talon of the Owls:",
        dis: {
          Default:
            "Damage to single enemy (+50% damage if enemy is from Bat Family). Applies 4 Bleed (3T).",
          Legendary:
            "If Talon has True Sight, executes Talon of the Owls once more.",
        },
      },
      two: {
        name: "Slashing Dive:",
        dis: {
          Default: "Damage to single enemy. Applies 5 Agility Down (2T).",
          Legendary:
            "If the target is bleeding, deals 5% True Damage per Bleed (Max 10).",
        },
      },
      three: {
        name: "Flurry of Knives:",
        dis: {
          Default: "Heavy damage to all enemies. Applies 4 Bleed (3T).",
          Legendary: "Purge all immunities before damage.",
        },
      },
      four: {
        name: "Electrum in Blood:",
        dis: {
          Default:
            "Gains 30% True Heal at the start of his turn. Gains 3 Mend (3T).",
          Legendary:
            "Whenever Talon reaches 0 HP, 30% chance (+15% chance per bleeding enemy) to gain a 30% True Heal.",
        },
      },
      five: {
        name: "Court Tactics:",
        dis: {
          Default:
            "70% chance to gain 1 True Sight (2T) at the start of his turn. If any bleeding enemy attacks, 75% chance to execute Talon of the Owls against attacker.",
          Legendary:
            "If Talon has True Sight, purge 4 Buffs on the bleeding attacker.",
        },
      },
    },
    CombatEffects: [
      "Mends",
      "True Sight",
      "Agility Down",
      "Bleeds",
      "Counter Attacks",
      "True Damage",
      "Purge Buffs and Self Heal",
    ],
    Affiliations: "Suicide Squad",
    id: "176",
    affinity: "Physical",
  },
  {
    tier: "A",
    name: "Two-Face",
    subName: "Duke of Duality",
    SPD: "121",
    HP: "31109",
    STR: "2695",
    INT: "1634",
    AG: "2034",
    STAM: "2476",
    CRC: "25%",
    CRV: "228%",
    LegendaryOrder: "3,2,1,4,5 OR 1,2,3,5,4 (2021 rework)",
    GearSet: "Physical Support",
    powers: {
      one: {
        name: "Twin Pistols:",
        dis: {
          Default:
            "Two damage shots to an enemy. If Harvey, apply 1 Damage Immunity (1T) to a random ally. If Two-Face, always applies 3 Evasion Downs (2T) to the enemy.",
          Legendary: "75% chance to fire 2 extra shots at random enemies.",
        },
      },
      two: {
        name: "Coin Flip:",
        dis: {
          Default:
            "50% chance to become Harvey. Apply 4 Crit Chance Ups (2T) and 4 Agility Ups (2T) to all allies.50% chance to become Two-Face. Apply 4 Hit Chance Downs (2T) and 4 Crit Chance Downs (2T) to an enemy.",
          Legendary: "Also Call Assist on a random enemy.",
        },
      },
      three: {
        name: "Justice For All:",
        dis: {
          Default:
            "Damage to all enemies.If Harvey, Apply Debuff Immunity (1T) to all allies If Two-Face, use Twin Pistols after Justice For All.",
          Legendary: "+50% Crit Chance and Crit Damage.",
        },
      },
      four: {
        name: "Good Fortune:",
        dis: {
          Default:
            "Passive: At the beginning of his turn: If Harvey, 75% chance to apply 2 Crit Chance Ups (2T) to all allies.If Two-Face, 75% chance to apply 4 Evasion Downs (2T) to all enemies.",
          Legendary: "50% Chance to reset Justice For All cooldown.",
        },
      },
      five: {
        name: "Tough Luck:",
        dis: {
          Default:
            "Passive: When an ally deals Critical Damage: If Harvey, 50% chance to Purge 5 Debuffs from ally. If Two-Face, 50% chance to Apply 25% Turn Meter Down to target.",
          Legendary:
            "50% chance to double Debuffs Purged or Turn Meter Down applied.",
        },
      },
    },
    CombatEffects: [
      "Agility Up",
      "Crit Chance Up",
      "Damage Immunity",
      "Debuff Immunity",
      "Crit Chance Down",
      "Evasion Down",
      "Hit Chance Down",
      "Call Assist",
      "Cooldown Effects",
      "Turn Meter Down and Purge Debuffs",
    ],
    Affiliations: "Arkham Inmates and Secret Society of Super-Villains",
    id: "124",
    affinity: "Physical",
  },
  {
    tier: "A",
    name: "Alan Scott",
    subName: "Keeper of the Starheart",
    SPD: "97",
    HP: "40701",
    STR: "2569",
    INT: "1533",
    AG: "1868",
    STAM: "2880",
    CRC: "22%",
    CRV: "228%",
    LegendaryOrder: "1,5,2],4,3 (2022 rework)",
    GearSet: "Physical Tank",
    powers: {
      one: {
        name: "Power-Knuckle Strike:",
        dis: {
          Default:
            "Damage to an enemy. +40% damage per shielded ally. 50% chance to gain Debuff Immunity (1T).",
          Legendary: "If Alan Scott is shielded, the attack is critical.",
        },
      },
      two: {
        name: "Protection of the Starheart:",
        dis: {
          Default:
            "Give 50% Shield to self and 35% Shield to each teammate. Also, gain 3 Empowered Stamina Up (1T).",
          Legendary: "Also gain Death Immunity (1T).",
        },
      },
      three: {
        name: "The Weight of My Will:",
        dis: {
          Default:
            "Heavy Damage to an enemy, apply 7 Strength Down (1T) and 4 Evasion Down (2T).",
          Legendary: "Gain 100% Shield if Alan performs a critical hit.",
        },
      },
      four: {
        name: "Starheart's Blessing:",
        dis: {
          Default:
            "60% chance to apply 25% shield to all allies at the beginning of each enemy turn. Also, 30% chance to gain Mend (3T).",
          Legendary: "Also apply 2 Affinity Resistance Up (1T).",
        },
      },
      five: {
        name: "Faithful Chastisement:",
        dis: {
          Default:
            "60% chance to apply 2 Strength down (2T) and Hit Chance Down (1T) to enemies that hit shielded allies.",
          Legendary:
            "50% Chance to use basic on enemies that damage Alan Scott.",
        },
      },
    },
    CombatEffects: [
      "Affinity Resist Up",
      "Death Immunity",
      "Debuff Immunity",
      "Mends",
      "Empowered Stamina Up",
      "Evasion Down",
      "Hit Chance Down",
      "Strength Down",
      "Counter Attacks and Apply Shield",
    ],
    Affiliations: "Justice Society of America and Lantern",
    id: "1",
    affinity: "Mystical",
  },
  {
    tier: "A",
    name: "Cheetah",
    subName: "Avatar of the Hunt",
    SPD: "128",
    HP: "28847",
    STR: "2652",
    INT: "1436",
    AG: "2196",
    STAM: "2125",
    CRC: "47%",
    CRV: "256%",
    LegendaryOrder: "3,5],4,1,2 (updated for rework)",
    GearSet: "Physical Striker",
    powers: {
      one: {
        name: "Swift Slash:",
        dis: {
          Default: "Light Damage and apply 5 Bleeds (3T) to an enemy.",
          Legendary: "Can't Miss. Gain 10% Turn Meter Up",
        },
      },
      two: {
        name: "Ravage:",
        dis: {
          Default: "Damage to an enemy, purge 3 Buffs.",
          Legendary: "Purge 3 additional Buffs if target is bleeding",
        },
      },
      three: {
        name: "Blood In The Air:",
        dis: {
          Default:
            "Apply 3 Strength Ups (2T) to all allies, apply 1 extra Strength Up (2T) per bleeding enemy.",
          Legendary: "+20% all ally Turn Meters",
        },
      },
      four: {
        name: "Ambush Killer:",
        dis: {
          Default:
            "Passive Ability: 35% Chance to gain 2 Strength Up (2T) and 25% Turn Meter if a member of any team takes Bleed or Disease damage.",
          Legendary:
            "15% Chance to use Blood In The Air when a member of any team takes Bleed or Disease damage",
        },
      },
      five: {
        name: "Pack Leader:",
        dis: {
          Default:
            "Team Leader: All allies have a 35% chance to gain 40% Turn Meter if damaging a Bleeding target or applying Bleeds.",
          Legendary: "Start battle with Blood In The Air",
        },
      },
    },
    CombatEffects: [
      "Strength Up",
      "Bleeds",
      "Can't Miss",
      "Cooldown Effects",
      "Turn Meter Up",
      "Purge Buffs and Start of Battle Ability",
    ],
    Affiliations: "Injustice League",
    id: "32",
    affinity: "Mystical",
  },
  {
    tier: "A",
    name: "Hippolyta",
    subName: "Queen of the Amazons",
    SPD: "120",
    HP: "30949",
    STR: "2531",
    INT: "1688",
    AG: "2171",
    STAM: "2460",
    CRC: "25%",
    CRV: "228%",
    LegendaryOrder: "4,1],2,3,5 (updated for rework)",
    GearSet: "Physical Support",
    powers: {
      one: {
        name: "To Victory!:",
        dis: {
          Default:
            "Damage to an enemy 75% chance to reset Cooldown on all Super Powers.",
          Legendary: "Cooldown Reduction Chance +25%",
        },
      },
      two: {
        name: "Shields Up:",
        dis: {
          Default:
            "Apply 4 Int Ups [2 turns] and 30% Shield to all allies Cooldown +3 on Draw Swords.",
          Legendary: "Purge 2 Debuffs from all allies",
        },
      },
      three: {
        name: "Draw Swords:",
        dis: {
          Default:
            "Apply 4 Strength Ups [2 turns] and +25% Turn Meter to all allies Cooldown +3 on Shields Up.",
          Legendary: "Apply Stun Immunity [3 turns] to all allies",
        },
      },
      four: {
        name: "Tip of the Spear:",
        dis: {
          Default:
            "Damage to an enemy, call Assist on target, apply 2 Strength Ups (2T) and 2 Int Ups (2T) on Assisting teammate.",
          Legendary: "75% chance for additional Assist",
        },
      },
      five: {
        name: "Queen of War:",
        dis: {
          Default:
            "Team Leader: Apply 1 permanent Stamina Up to an ally when an ally deals damage to an enemy, apply 1 Strength Up (2T) if it is an Amazon.",
          Legendary:
            "50% chance for Hippolyta to gain Death Immunity (1T) when allies deal damage",
        },
      },
    },
    CombatEffects: [
      "Death Immunity",
      "Intelligence Up",
      "Stamina Up",
      "Strength Up",
      "Stun Immunity",
      "Call Assist",
      "Cooldown Effects",
      "Apply Shield",
      "Turn Meter Up and Purge Debuffs",
    ],
    Affiliations: "Amazons",
    id: "63",
    affinity: "Mystical",
  },
  {
    tier: "A",
    name: "Ice",
    subName: "Tora Olafsdotter",
    SPD: "116",
    HP: "36869",
    STR: "1678",
    INT: "2772",
    AG: "1859",
    STAM: "2622",
    CRC: "15%",
    CRV: "178%",
    LegendaryOrder: "3,2,1],4,5",
    GearSet: "Special Tank",
    powers: {
      one: {
        name: "Tip of the Iceberg:",
        dis: {
          Default:
            "Special Damage and 70% chance to apply Stun (1T) on a single enemy.",
          Legendary: "Apply 3 Speed Downs (1T) on primary target.",
        },
      },
      two: {
        name: "Ice Queen:",
        dis: {
          Default: "Overheal and apply 30% Turn Meter Up on all allies.",
          Legendary: "Also, apply 25% Shields.",
        },
      },
      three: {
        name: "Ice Breaker:",
        dis: {
          Default:
            "Heavy Special Damage to a single enemy and apply 3 Strength Ups (1T) on all allies.",
          Legendary: "Empowered Int Down on all enemies.",
        },
      },
      four: {
        name: "On Thin Ice:",
        dis: {
          Default:
            "If an enemy is Stunned, apply 10% True Damage at the end of the enemy's turn.",
          Legendary: "Stun (2T) a random enemy.",
        },
      },
      five: {
        name: "Hot and Cold:",
        dis: {
          Default:
            "50% chance to gain 5 Int Ups (1T) at the end of her turn. If Fire is on the team, also Purge 5 debuffs from teammates.",
          Legendary:
            "Also, use Tip of the Iceberg and apply 2 Speed Ups (1T) on Fire.",
        },
      },
    },
    CombatEffects: [
      "Intelligence Up",
      "Speed Up",
      "Strength Up",
      "Speed Down",
      "Stun",
      "Empowered Intelligence Down",
      "Out of Turn Attacks",
      "Heal",
      "Apply Shield",
      "True Damage",
      "Turn Meter Up and Purge Debuffs",
    ],
    Affiliations: "Justice League",
    id: "185",
    affinity: "Mystical",
  },
  {
    tier: "A",
    name: "Kyle Rayner",
    subName: "White Lantern",
    SPD: "115",
    HP: "39036",
    STR: "1751",
    INT: "2360",
    AG: "1639",
    STAM: "2839",
    CRC: "15%",
    CRV: "178%",
    LegendaryOrder: "5,2,3,1 or 4",
    GearSet: "Special Tank",
    powers: {
      one: {
        name: "One-shot:",
        dis: {
          Default:
            "Special Damage and apply 4 Int Downs (1T) on a single enemy.",
          Legendary:
            "Also, 75% Chance to apply Buff Immunity (1T) on the target.",
        },
      },
      two: {
        name: "Valiant Cover:",
        dis: {
          Default:
            "Apply Damage Immunity (1T) and Purge 3 debuffs on all allies. Additionally, gain 3 Awareness.",
          Legendary: "Also, apply Debuff Immunity (2T) on primary target.",
        },
      },
      three: {
        name: "Key Issue:",
        dis: {
          Default:
            "Heavy Special Damage and apply 4 Speed Downs (2T) on a single target.",
          Legendary: "Also, Apply Buff Immunity (2T).",
        },
      },
      four: {
        name: "Crossover:",
        dis: {
          Default:
            "Call assists on a random enemy at the end of each of his turns.",
          Legendary:
            "70% chance to apply Death Immunity (1T) on a random ally.",
        },
      },
      five: {
        name: "Retcon:",
        dis: {
          Default:
            "If an ally is affected by Turn Meter Down, apply 35% Turn Meter Up.",
          Legendary: "Also, Reduce Cooldown by 1 Turn on Valiant Cover.",
        },
      },
    },
    CombatEffects: [
      "Awareness",
      "Damage Immunity",
      "Death Immunity",
      "Debuff Immunity",
      "Buff Immunity",
      "Intelligence Down",
      "Speed Down",
      "Call Assist",
      "Cooldown Effects",
      "Turn Meter Up and Purge Debuffs",
    ],
    Affiliations: "Lantern",
    id: "167",
    affinity: "Mystical",
  },
  {
    tier: "A",
    name: "Shazam",
    subName: "Billy Batson",
    SPD: "110",
    HP: "39251",
    STR: "1685",
    INT: "1615",
    AG: "1910",
    STAM: "2860",
    CRC: "15%",
    CRV: "178%",
    LegendaryOrder: "2,1,3,4,5",
    GearSet: "Special Tank",
    powers: {
      one: {
        name: "Strength of Hercules:",
        dis: {
          Default:
            "Special damage to an enemy, +100% damage if Shazam is Taunting.",
          Legendary: "75% chance to Stun (1T) target if Shazam is Overhealed.",
        },
      },
      two: {
        name: "Fortitude of Atlas:",
        dis: {
          Default: "Gain Taunt (2T), 10 Stamina Ups (2T) and a heavy Overheal.",
          Legendary:
            "Gain Taunt (1T) at the start of battle and Damage Immunity (1T) on each use.",
        },
      },
      three: {
        name: "Power of Zeus:",
        dis: {
          Default:
            "Heavy Special Damage to an enemy. Apply 6 Strength Downs (2T) (+3 and Buff Immunity (1T) if Shazam is Taunting.",
          Legendary: "Reset target's Turn Meter.",
        },
      },
      four: {
        name: "Speed of Mercury:",
        dis: {
          Default: "Gain 40% Turn Meter Up if a teammate takes damage.",
          Legendary:
            'Equal chance to reduce Cooldown of "Fortitude of Atlas" by 1.',
        },
      },
      five: {
        name: "Nobody Likes a Bully:",
        dis: {
          Default:
            "At the beginning of each enemy turn, apply 3 Strength Down (0T) and 3 Intelligence Down (0T) if a teammate's HP is below 40%****.",
          Legendary:
            "50% chance to use Strength of Hercules against attacker if a teammate takes damage.",
        },
      },
    },
    CombatEffects: [
      "Damage Immunity",
      "Stamina Up",
      "Taunt",
      "Buff Immunity",
      "Intelligence Down",
      "Strength Down",
      "Stun",
      "Cooldown Effects",
      "Counter Attacks",
      "Turn Meter Up",
      "Turn Meter Down",
      "Start of Battle Ability and Self Heal",
    ],
    Affiliations: "Shazam Family",
    id: "107",
    affinity: "Mystical",
  },
  {
    tier: "A",
    name: "Star Sapphire",
    subName: "Carol Ferris",
    SPD: "97",
    HP: "27014",
    STR: "1567",
    INT: "2967",
    AG: "2121",
    STAM: "2121",
    CRC: "15%",
    CRV: "228%",
    LegendaryOrder: "3,1],4),2,5 (rework 2020)",
    GearSet: "Special Striker",
    powers: {
      one: {
        name: "Spirit of Zamaron:",
        dis: {
          Default:
            "Special Damage and apply 2 Strength Downs (2T) and 2 Int Downs (2T) to an enemy.",
          Legendary: "Strike twice if Star Sapphire is Overhealed.",
        },
      },
      two: {
        name: "Power of Love:",
        dis: {
          Default:
            "Heavy Overheal and 15% Shield to an ally and Star Sapphire.",
          Legendary: "Purge 4 debuffs from each target.",
        },
      },
      three: {
        name: "Starfall:",
        dis: {
          Default:
            "Light Special Damage and apply 4 Strength Downs (2T) and 4 Int Downs (2T) to all enemies.",
          Legendary: "Apply Buff Immunity (1T) to all enemies.",
        },
      },
      four: {
        name: "Love Grows:",
        dis: {
          Default:
            "75% chance to apply 3 Mends (3T) and Crit Immunity (1T) to an ally if they get buffed.",
          Legendary:
            "Apply 2 Mends (3T) and Crit Immunity (1T) to Star Sapphire as well.",
        },
      },
      five: {
        name: "Love Unending:",
        dis: {
          Default:
            "When Star Sapphire dies, apply 100% True Heal and 1 Awareness (1T) to all allies.",
          Legendary: "Also purge all debuffs.",
        },
      },
    },
    CombatEffects: [
      "Awareness",
      "Crit Immunity",
      "Mends",
      "Buff Immunity",
      "Intelligence Down",
      "Strength Down",
      "Heal",
      "Apply Shield and Purge Debuffs",
    ],
    Affiliations: "Lantern",
    id: "114",
    affinity: "Mystical",
  },
  {
    tier: "A",
    name: "Ultraviolet Lantern",
    subName: "John Stewart",
    SPD: "117",
    HP: "38727",
    STR: "1598",
    INT: "2637",
    AG: "1893",
    STAM: "2808",
    CRC: "15%",
    CRV: "178%",
    LegendaryOrder: "1,2],3,4,5",
    GearSet: "Special Tank",
    powers: {
      one: {
        name: "Construct of Hate:",
        dis: {
          Default:
            "Special Damage to a single enemy. 30% chance to Stun (1T) the target.",
          Legendary: "Damage dealt ignores Shield.",
        },
      },
      two: {
        name: "Primeval Empowerment:",
        dis: {
          Default:
            "Gain 60% of Shield. 60% chance to apply Enrage (1T) to all enemies.",
          Legendary:
            "If at least one enemy gets enraged, gain 1 permanent Intelligence Up.",
        },
      },
      three: {
        name: "Sword of Unseen Light:",
        dis: {
          Default:
            "High Special Damage to all enemies and 75% chance to Stun them (1T).",
          Legendary: "Gain 1 permanent Stamina Up.",
        },
      },
      four: {
        name: "Negative Emotion Conduit:",
        dis: {
          Default:
            "When John or any ally gets hit, 50% chance to gain 2 Awareness and 30% Shield.",
          Legendary: "Also, gain 1 Affinity Power Up (1T).",
        },
      },
      five: {
        name: "Call of Umbrax:",
        dis: {
          Default:
            "At the start of his turn, 75% chance to gain Taunt (2T) and 50% chance to apply Enrage (1T) on a random enemy.",
          Legendary:
            "If any enemy attacks John while he's taunting, 30% chance to apply Doom on the attacker.",
        },
      },
    },
    CombatEffects: [
      "Affinity Power Up",
      "Awareness",
      "Intelligence Up",
      "Stamina Up",
      "Taunt",
      "Doom",
      "Enrage",
      "Stun",
      "Apply Shield and Ignore Shield",
    ],
    Affiliations: "Lantern",
    id: "178",
    affinity: "Mystical",
  },
  {
    tier: "A",
    name: "Wonder Girl",
    subName: "Champion of War",
    SPD: "123",
    HP: "31956",
    STR: "2800",
    INT: "1673",
    AG: "2167",
    STAM: "2561",
    CRC: "25%",
    CRV: "228%",
    LegendaryOrder:
      "Recommended 3],1,2,4,5 / some like her proccing AOE more and take 3 last / works at R5",
    GearSet: "Physical Support",
    powers: {
      one: {
        name: "Wonder Combo:",
        dis: {
          Default:
            "Damage to an enemy. +50% Crit Chance if target has any buff.",
          Legendary:
            "50% Additional Damage. +100% damage and Can't Miss if Enraged.",
        },
      },
      two: {
        name: "Boon of Olympus:",
        dis: {
          Default:
            "Give 3 Strength up and 15% Turn Meter to all allies. Give 2 additional Strength Up if all enemies have 1+ buffs.",
          Legendary: "Purge 2 debuffs from each ally.",
        },
      },
      three: {
        name: "Lasso of Lightning:",
        dis: {
          Default:
            "Damage to all enemies. Double damage if all enemies have 2+ buffs.",
          Legendary: "Purge 3 buffs from all enemies.",
        },
      },
      four: {
        name: "Birthright:",
        dis: {
          Default:
            "Each time an enemy gains one or more buffs on their turn, 65% chance to gain 1 Str Up.",
          Legendary: "Additionally gain 2 Crit Chance Ups.",
        },
      },
      five: {
        name: "Divine Balance:",
        dis: {
          Default:
            "At the start of each enemy's turn, if that enemy has 8+ buffs, purge 2 buffs and 70% chance to use Lasso of Lightning.",
          Legendary: "Also purge 3 debuffs from Wonder Girl.",
        },
      },
    },
    CombatEffects: [
      "Crit Chance Up",
      "Strength Up",
      "Can't Miss",
      "Out of Turn Attacks",
      "Turn Meter Up and Purge Buffs",
    ],
    Affiliations: "Amazons and Titans",
    id: "128",
    affinity: "Mystical",
  },
  {
    tier: "A",
    name: "Wonder Woman",
    subName: "Champion of the Amazons",
    SPD: "112",
    HP: "27939",
    STR: "2544",
    INT: "1606",
    AG: "2226",
    STAM: "2034",
    CRC: "47%",
    CRV: "256%",
    LegendaryOrder: "2,1,3,4,5 (early thoughts - 2021 rework)",
    GearSet: "Physical Striker",
    powers: {
      one: {
        name: "Double Strike:",
        dis: {
          Default: "Damage to an enemy, Call Assist.",
          Legendary: "50% chance to call extra Assist.",
        },
      },
      two: {
        name: "Call To Arms:",
        dis: {
          Default:
            "Apply 4 Strength Ups to all allies and apply +25% Turn Meter up to all allies.",
          Legendary:
            "75% chance to Double Strike random enemy after using Call To Arms.",
        },
      },
      three: {
        name: "Goddess of War:",
        dis: {
          Default: "Damage to all enemies, can't miss.",
          Legendary: "+75% Critical Damage.",
        },
      },
      four: {
        name: "Riposte:",
        dis: {
          Default:
            "Passive: 75% chance to use Call to Arms on enemies that damage Wonder Woman.",
          Legendary: "50% chance to counterattack with Goddess of War.",
        },
      },
      five: {
        name: "Hiketeia:",
        dis: {
          Default:
            "Passive: Apply Invisibility (1T) on a random ally at the end of her turn.",
          Legendary: "50% Chance to gain Crit Immunity (1T).",
        },
      },
    },
    CombatEffects: [
      "Crit Immunity",
      "Invisibility",
      "Strength Up",
      "Call Assist",
      "Can't Miss",
      "Counter Attacks and Turn Meter Up",
    ],
    Affiliations: "Amazons and Justice League",
    id: "129",
    affinity: "Mystical",
  },
  {
    tier: "A",
    name: "Yara Flor",
    subName: "Future State Wonder Woman",
    SPD: "123",
    HP: "29015",
    STR: "2773",
    INT: "1661",
    AG: "2139",
    STAM: "2266",
    CRC: "25%",
    CRV: "228%",
    LegendaryOrder: "5,3,2,1,4",
    GearSet: "Physical Support",
    powers: {
      one: {
        name: "Lasso Strike:",
        dis: {
          Default:
            "Damage to a single enemy, Ignore Shields if the target has Silence.",
          Legendary:
            "Apply Silence on target (1T) and Ignore Awareness if the target already Silenced.",
        },
      },
      two: {
        name: "Spirit Control:",
        dis: {
          Default:
            "Reset enemy Turn Meter and apply Silence (1T) that ignores immunities on the target.",
          Legendary: "Yara Flor gains Debuff Immunity (2T).",
        },
      },
      three: {
        name: "Amazonian Wrath:",
        dis: {
          Default:
            "Heavy Damage to all enemies and if an enemy dies Yara Flor gains 4 Stamina Ups (2T).",
          Legendary: "Also Yara Flor gains 2 permanent Stamina Ups.",
        },
      },
      four: {
        name: "Demigod Stance:",
        dis: {
          Default:
            "Passive: Everytime an enemy is Silenced Yara Flor gain Stun Immunity (1T).",
          Legendary: "Also apply 20% Shield to all allies.",
        },
      },
      five: {
        name: "Heart of the Amazon:",
        dis: {
          Default:
            "Passive: At the start of every Yara Flor turn purge 3 Debuffs on her.",
          Legendary: "Also gains 3 Strength Ups (2T).",
        },
      },
    },
    CombatEffects: [
      "Debuff Immunity",
      "Stamina Up",
      "Strength Up",
      "Stun Immunity",
      "Silence",
      "Apply Shield",
      "Ignore Shield",
      "Ignore Awareness",
      "Turn Meter Down",
      "Purge Debuffs and Ignore Immunities",
    ],
    Affiliations: "Amazons",
    id: "166",
    affinity: "Mystical",
  },
  {
    tier: "A",
    name: "Abin Sur",
    subName: "The Timeless Protector",
    SPD: "108",
    HP: "42621",
    STR: "2081",
    INT: "1760",
    AG: "1938",
    STAM: "3072",
    CRC: "22%",
    CRV: "228%",
    LegendaryOrder: "2,5,3],1) and you may never want to take his 4",
    GearSet: "Physical Tank",
    powers: {
      one: {
        name: "Ground Rules:",
        dis: {
          Default:
            "Special damage to all enemies and 75% chance to Stun (1T) primary target.",
          Legendary:
            "Also, 75% chance to apply 3 Evasion Downs (1T) (Can't miss) on all targets.",
        },
      },
      two: {
        name: "Pack Tactics:",
        dis: {
          Default:
            "Apply Invisibility (2T) on all allies and place Taunt (2T) on the primary target.",
          Legendary:
            "Call assist from the primary target. Also, gain Crit immunity (2T) and Debuff immunity (1T).",
        },
      },
      three: {
        name: "Indomitable Will:",
        dis: {
          Default: "Heavy special damage to a single target.",
          Legendary:
            "If an enemy is killed by Indomitable Will, gain permanent 3 Int Ups.",
        },
      },
      four: {
        name: "From Beyond the Grave:",
        dis: {
          Default:
            "If an ally is Taunting, apply Debuff Immunity to them (1T) at the end of the turn.",
          Legendary:
            "If an ally who is Taunting is killed, apply Taunt (2T) on a random ally.",
        },
      },
      five: {
        name: "Protector of Sector 2814:",
        dis: {
          Default:
            "If an ally is Taunting, apply 65% True Heal at the end of the turn.",
          Legendary:
            "At the start of the turn, gain 2 Int Ups (1T) for each Invisible ally.",
        },
      },
    },
    CombatEffects: [
      "Crit Immunity",
      "Debuff Immunity",
      "Intelligence Up",
      "Evasion Down",
      "Stun",
      "Call Assist",
      "Heal and Apply Taunt to Ally",
    ],
    Affiliations: "Lantern",
    id: "177",
    affinity: "Energy",
  },
  {
    tier: "A",
    name: "Arkkis Chummuck",
    subName: "Green Lantern of Sector 3014",
    SPD: "106",
    HP: "28375",
    STR: "2753",
    INT: "1513",
    AG: "2065",
    STAM: "2078",
    CRC: "47%",
    CRV: "256%",
    LegendaryOrder: "2,2,4,]3,1 (updated for rework)",
    GearSet: "Physical Striker",
    powers: {
      one: {
        name: "Toomeyan Fist:",
        dis: {
          Default:
            "Damage to an enemy, +75% damage and -4% Shield if Arkkis is Shielded. Gain 2 Strength Ups (2T).",
          Legendary: "Gain an Overheal and 10% Shield if target is killed.",
        },
      },
      two: {
        name: "Issue Challenge:",
        dis: {
          Default:
            "Arkkis uses Toomeyan Fist on the target twice and gains 3 Strength Ups (1T) and 10% Shield, then target attacks Arkkis once. Apply Taunt (1T) to target and self.",
          Legendary:
            "Gain Debuff Immunity [2 turns].Legendary 2: Gain Death Immunity [2 turns]Sword and Shield: Gain 25% Shield and 4 Strength Ups (2T).",
        },
      },
      three: {
        name: "",
        dis: { Default: "", Legendary: "" },
      },
      four: {
        name: "",
        dis: { Default: "", Legendary: "" },
      },
      five: {
        name: "",
        dis: { Default: "", Legendary: "" },
      },
    },
    CombatEffects: [
      "Death Immunity",
      "Debuff Immunity",
      "Enrage Immunity",
      "Strength Up",
      "Taunt",
      "Counter Attacks",
      "Apply Shield",
      "Apply Taunt to enemy and Turn Meter Up",
    ],
    Affiliations: "Green Lantern Corps",
    id: "6",
    affinity: "Energy",
  },
  {
    tier: "A",
    name: "Brainiac",
    subName: "The Collector of Worlds",
    SPD: "116",
    HP: "33284",
    STR: "2606",
    INT: "1612",
    AG: "2281",
    STAM: "2693",
    CRC: "25%",
    CRV: "228%",
    LegendaryOrder:
      "5,1,3,4,2 (leader build - non leader move back 5 at your choice)",
    GearSet: "Physical Support",
    powers: {
      one: {
        name: "Drone Blast:",
        dis: {
          Default: "Damage to an enemy. Gain 30% Shield.",
          Legendary: "Gain Double shield if Brainiac has no shields.",
        },
      },
      two: {
        name: "Shrink Ray:",
        dis: {
          Default: "Light Damage and apply 6 Strength Down to an enemy.",
          Legendary: "Gain Crit Immunity",
        },
      },
      three: {
        name: "Might of Colu:",
        dis: {
          Default:
            "Damage to an enemy. 100% chance to stun if Brainiac is Shielded.",
          Legendary:
            "If Brainiac is shielded, 60% chance to use Might of Colu on an additional random enemy.",
        },
      },
      four: {
        name: "Vanguard Defense:",
        dis: {
          Default:
            "Give Enrage Immunity and 15% Turn Meter Up to team at start of battle.",
          Legendary: "25% chance to Call assist each time Brainiac attacks",
        },
      },
      five: {
        name: "Telekinetic Barrier:",
        dis: {
          Default:
            "Team Leader: Give Damage Immunity to the team at the beginning of each ally turn until the end of that ally's turn.",
          Legendary:
            "Start battle with 30% Shield on Brainiac and 15% shield on the rest of the team",
        },
      },
    },
    CombatEffects: [
      "Crit Immunity",
      "Damage Immunity",
      "Enrage Immunity",
      "Strength Down",
      "Stun",
      "Call Assist",
      "Apply Shield",
      "Turn Meter Up and Start of Battle Ability",
    ],
    Affiliations: "Legion of Doom",
    id: "26",
    affinity: "Energy",
  },
  {
    tier: "A",
    name: "Captain Atom",
    subName: "Quantum Field Man",
    SPD: "111",
    HP: "29034",
    STR: "1546",
    INT: "3060",
    AG: "2199",
    STAM: "2323",
    CRC: "35%",
    CRV: "228%",
    LegendaryOrder: "2,4],3,1,5 (2022 rework)",
    GearSet: "Special Striker",
    powers: {
      one: {
        name: "Phasing Punch:",
        dis: {
          Default:
            "Special Damage to an enemy. Ignore Shields and Awareness, and 50% chance to apply Disease (3T).",
          Legendary: "Can't Miss if target has Disease.",
        },
      },
      two: {
        name: "Quantum Field:",
        dis: {
          Default:
            "Special Damage and apply 3 Intelligence Down (2T) to all enemies.",
          Legendary:
            "Also apply 3 Strength Down (2T) and 30% Turn Meter Down to all affected enemies.",
        },
      },
      three: {
        name: "Radiation Bombardment:",
        dis: {
          Default:
            "Heavy Special Damage and apply 4 Diseases (3T) to an enemy.",
          Legendary: "Apply Heal Immunity (2T) before the damage.",
        },
      },
      four: {
        name: "Molecular Manipulation:",
        dis: {
          Default:
            "Passive: When an enemy hits Captain Atom, 85% chance to apply 2 Disease (3T), 3 Intelligence Down (2T), and 3 Agility Down (2T).",
          Legendary: "50% chance to execute Quantum Field.",
        },
      },
      five: {
        name: "Nuclear Counter:",
        dis: {
          Default:
            "Passive: 75% chance to use Phasing Punch at the end of every enemy's turn if that enemy has Disease.",
          Legendary:
            "At the end of an enemy's turn, if they have 4+ Disease, apply Doom on them.",
        },
      },
    },
    CombatEffects: [
      "Doom",
      "Disease",
      "Heal Immunity",
      "Intelligence Down",
      "Strength Down",
      "Can't Miss",
      "Counter Attacks",
      "Out of Turn Attacks",
      "Ignore Shield",
      "Ignore Awareness and Turn Meter Down",
    ],
    Affiliations: "Justice League International",
    id: "27",
    affinity: "Energy",
  },
  {
    tier: "A",
    name: "Cyclone",
    subName: "Maxine Hunkel",
    SPD: "123",
    HP: "31996",
    STR: "2897",
    INT: "1531",
    AG: "2206",
    STAM: "2565",
    CRC: "25%",
    CRV: "228%",
    LegendaryOrder: "1,3,5],2,4",
    GearSet: "Physical Support",
    powers: {
      one: {
        name: "No place like home:",
        dis: {
          Default:
            "Two blasts of damage and apply 5 Int Downs (1T) on a single target.",
          Legendary: "Also, apply 5 Speed Downs (1T).",
        },
      },
      two: {
        name: "Good Witch:",
        dis: {
          Default:
            "Apply Damage Immunity (2T) on a single ally and purge 5 debuffs.",
          Legendary: "Gain 5 Speed Ups (2T).",
        },
      },
      three: {
        name: "Bad Witch:",
        dis: {
          Default:
            "Two blasts of damage on all enemies. 10% extra damage per Speed Down on enemy team (Max 10).",
          Legendary: "Apply 3 Speed Downs (1T) on all enemies.",
        },
      },
      four: {
        name: "Don't be silly, Toto:",
        dis: {
          Default:
            "Apply 6 Int Downs (1T) on a random enemy at the end of Cyclone's turn.",
          Legendary: "Also, 25% chance to Enrage (1T) the target.",
        },
      },
      five: {
        name: "Behind the curtain:",
        dis: {
          Default:
            "70% chance to purge 2 debuffs on a random ally and apply damage to the attacker when Cyclone is attacked.",
          Legendary: "Also, Stun (1T) the attacker.",
        },
      },
    },
    CombatEffects: [
      "Damage Immunity",
      "Speed Up",
      "Enrage",
      "Intelligence Down",
      "Speed Down",
      "Stun",
      "Counter Attacks and Purge Debuffs",
    ],
    Affiliations: "Justice Society of America",
    id: "183",
    affinity: "Energy",
  },
  {
    tier: "A",
    name: "Fire",
    subName: "Beatriz Da Costa",
    SPD: "114",
    HP: "38527",
    STR: "1678",
    INT: "2598",
    AG: "1867",
    STAM: "2788",
    CRC: "15%",
    CRV: "178%",
    LegendaryOrder:
      "3,2,5,4 / 1 (I don’t plan to ever take 1, you may think different)",
    GearSet: "Special Tank",
    powers: {
      one: {
        name: "Burning Barrage:",
        dis: {
          Default:
            "Special damage to a single enemy. If enemy is shielded, remove 20% of its shield.",
          Legendary:
            "Deal light special damage to the rest of the enemy team and 25% chance to apply Heal Immunity (1T) to the main target.",
        },
      },
      two: {
        name: "Wall of Fire:",
        dis: {
          Default:
            "Special damage and 30% Turn Meter Down to all enemies. If enemies are shielded, remove 30% of their shields.",
          Legendary:
            "75% chance to apply 2 Evasion Down (2T). Deal 3% True Damage per each enemy with pre-applied Evasion Down.",
        },
      },
      three: {
        name: "Blazing Tornado:",
        dis: {
          Default:
            "Special damage to all enemies. Apply 4 Evasion Down (2T) and Heal Immunity (1T).",
          Legendary:
            "Purge 2 Buffs from each enemy and apply 2 Strength Down (2T).",
        },
      },
      four: {
        name: "Pyroplasm:",
        dis: {
          Default:
            "When Fire is hit, gain 4 Speed Up (2T) and 35% Turn Meter Up.",
          Legendary:
            "Gain Awareness and True Sight (1T) if the attacker has the Physical Affinity.",
        },
      },
      five: {
        name: "Let it Burn:",
        dis: {
          Default:
            "At the start of her turn, if Fire's HP is above 50% gain 5 Intelligence Up (1T). If below, gain a medium Heal (160) (and extra light Heal (50) if Ice is a teammate).",
          Legendary:
            "When an enemy dies, if Fire's HP is above 50% gain 2 Intelligence Up (2T) and True Sight (1T).",
        },
      },
    },
    CombatEffects: [
      "Awareness",
      "Intelligence Up",
      "Speed Up",
      "True Sight",
      "Evasion Down",
      "Heal Immunity",
      "Strength Down",
      "Remove Shield",
      "True Damage",
      "Turn Meter Up",
      "Turn Meter Down",
      "Purge Buffs and Self Heal",
    ],
    Affiliations: "Justice League International",
    id: "186",
    affinity: "Energy",
  },
  {
    tier: "A",
    name: "Gorilla Grodd",
    subName: "Psychic Mastermind",
    SPD: "105",
    HP: "38098",
    STR: "1658",
    INT: "2453",
    AG: "1738",
    STAM: "2745",
    CRC: "15%",
    CRV: "178%",
    LegendaryOrder:
      "5.1,2,4,3 (2020 rework - legendary order is whatever you want)",
    GearSet: "Special Tank",
    powers: {
      one: {
        name: "Grodd's Rage:",
        dis: {
          Default: "Special Damage to an enemy, 45% chance to stun (1T).",
          Legendary: "Steal all Int Ups on target.",
        },
      },
      two: {
        name: "Psychic Leader:",
        dis: {
          Default:
            "Apply 4 Int Up (2T) to self, 2 Int Up (2T) to teammates. Call Assist.",
          Legendary: "Give 2 Speed Up (2T) to all allies.",
        },
      },
      three: {
        name: "Gorilla Slam:",
        dis: {
          Default:
            "Special Damage to all enemies 80% Chance to call Grodd's Rage on a random enemy, with a 100% Stun chance..",
          Legendary: "+3 Agility Ups (2T) to the Team.",
        },
      },
      four: {
        name: "Thirst for Blood:",
        dis: {
          Default:
            "Passive: 100% Chance to Gain 3 Permanent Int Up (Always) on Grodd and 2 Permanent Int Up (Always) on a random ally whenever a hero dies.",
          Legendary: "Apply 2 Speed Ups (2T) to self and random ally.",
        },
      },
      five: {
        name: "Speedforce Memory:",
        dis: {
          Default:
            "Passive: 70% chance for all allies to gain 3 Speed Up (2T) whenever an enemy gets stunned.",
          Legendary:
            "Give Death Immunity (1T) to the team at the beginning of each ally turn until the end of that ally's turn.",
        },
      },
    },
    CombatEffects: [
      "Agility Up",
      "Death Immunity",
      "Intelligence Up",
      "Speed Up",
      "Stun",
      "Buff Stealing and Call Assist",
    ],
    Affiliations: "Injustice League",
    id: "53",
    affinity: "Energy",
  },
  {
    tier: "A",
    name: "Hawkgirl",
    subName: "Champion of Thanagar",
    SPD: "110",
    HP: "29839",
    STR: "2532",
    INT: "1581",
    AG: "2074",
    STAM: "2224",
    CRC: "47%",
    CRV: "256%",
    LegendaryOrder: "1,4,]5,3,2 (updated for rework, finalized)",
    GearSet: "Physical Striker",
    powers: {
      one: {
        name: "Thanagarian Strike:",
        dis: {
          Default: "Damage to an enemy, 75% chance to Stun (1T).",
          Legendary:
            "50% Chance to Strike a random additional enemy. 100% chance if target was stunned by Thanagarian Strike.",
        },
      },
      two: {
        name: "To the Nth Power:",
        dis: {
          Default:
            "Purge 3 debuffs and apply Crit Immunity (2T) to all allies, 80% chance to Purge extra debuff.",
          Legendary: "20% chance to apply Debuff Immunity (1T) to all allies.",
        },
      },
      three: {
        name: "Charged Blow:",
        dis: {
          Default:
            "Light Special Damage to all enemies. Apply Stun (1T) to a random enemy. Apply 1 additional Stun (1T) to a random enemy if any teammate has a Positive Immunity.",
          Legendary: "Apply 3 Strength Downs (1T) to all enemies.",
        },
      },
      four: {
        name: "Heavy Strikes:",
        dis: {
          Default:
            "Gain 50% Turn Meter if an enemy gets stunned on a team member's turn.",
          Legendary: "Call Assist if Hawkgirl Stuns an enemy on her turn.",
        },
      },
      five: {
        name: "Power Through Many Lives:",
        dis: {
          Default: "Hawkgirl starts the combat with Stun immunity (1T).",
          Legendary: "Hawkgirl starts the combat with Crit immunity (1T).",
        },
      },
    },
    CombatEffects: [
      "Crit Immunity",
      "Debuff Immunity",
      "Stun Immunity",
      "Stun",
      "Strength Down",
      "Call Assist",
      "Turn Meter Up",
      "Start of Battle Ability and Purge Debuffs",
    ],
    Affiliations: "Thanagarian",
    id: "60",
    affinity: "Energy",
  },
  {
    tier: "A",
    name: "Impulse",
    subName: "Bart Allen",
    SPD: "135",
    HP: "27133",
    STR: "2513",
    INT: "1377",
    AG: "2439",
    STAM: "2078",
    CRC: "47%",
    CRV: "256%",
    LegendaryOrder: "3,1,2,5,4",
    GearSet: "Physical Striker",
    powers: {
      one: {
        name: "Spoiler Warning:",
        dis: {
          Default:
            "Damage to a single target. 70% Chance to apply 2 Speed Downs (1T). Attack twice if Impulse has 2 or more Evasion Ups.",
          Legendary: "Attack once again after the second attack.",
        },
      },
      two: {
        name: "Speedrun:",
        dis: {
          Default:
            "Apply 70% Turn meter down to all enemies and 70% chance to apply Stun to the primary target.",
          Legendary:
            "Also, converts debuffs to Speed Ups on Impulse (Max 3 debuffs).",
        },
      },
      three: {
        name: "High Metabolism:",
        dis: {
          Default:
            "Damage to all enemies and apply 3 Agility Down (2T) to all enemies if an enemy is stunned.",
          Legendary:
            "50% Chance to apply 3 Hit Chance Downs (2T) on all enemies.",
        },
      },
      four: {
        name: "Chop Chop:",
        dis: {
          Default:
            "Passive: 70% Chance to apply 1 Permanent Evasion Up on Impulse at the start of his turn.",
          Legendary:
            "Impulse has 50% Chance to reduce High Metabolism Cooldown by 1.",
        },
      },
      five: {
        name: "Think Fast:",
        dis: {
          Default:
            "Passive: If Impulse evades an attack, 80% chance to use apply 40% Turn Meter Up on all allies.",
          Legendary:
            "Also trigger Call Assist from a random teammate on the enemy attacker.",
        },
      },
    },
    CombatEffects: [
      "Speed Up",
      "Evasion Up",
      "Agility Down",
      "Hit Chance Down",
      "Speed Down",
      "Stun",
      "Call Assist",
      "Cooldown Effects",
      "Turn Meter Up and Turn Meter Down",
    ],
    Affiliations: "Speedster",
    id: "148",
    affinity: "Energy",
  },
  {
    tier: "A",
    name: "Jesse Quick",
    subName: "The Golden Age Daughter",
    SPD: "132",
    HP: "27510",
    STR: "2565",
    INT: "1447",
    AG: "2404",
    STAM: "1991",
    CRC: "47%",
    CRV: "256%",
    LegendaryOrder: "3,4/2/1],5",
    GearSet: "Physical Striker",
    powers: {
      one: {
        name: "Breakout Speedster:",
        dis: {
          Default:
            "Damage to a single target. Gains 3 Crit Chance Up (1T) and 75% chance to apply 4 Evasion Down (1T) to target.",
          Legendary: "Gains 2 permanent Speed Up.",
        },
      },
      two: {
        name: "Superheroes Study:",
        dis: {
          Default:
            "Gains 3 Speed Up (2T). Apply 3 Evasion Up (2T) to herself and all her allies.",
          Legendary: "Gains 1 permanent Crit Chance Up.",
        },
      },
      three: {
        name: "Speed Force Formula:",
        dis: {
          Default:
            "Heavy damage to a single target. Gains 4 Crit Damage Up (2T) and 4 Speed Up (1T).",
          Legendary: "Gains 2 permanent Evasion Up.",
        },
      },
      four: {
        name: "Golden Age Inheritance:",
        dis: {
          Default:
            "Passive: 75% chance to Purge 4 Debuff at the start of her turn.",
          Legendary: "Always gains 2 Strength Up (2T).",
        },
      },
      five: {
        name: "Quickstart CEO:",
        dis: {
          Default:
            "Passive: Steals 4 Buffs if she successfully evades an attack.",
          Legendary: "Always gains 1 permanent Crit Damage Up.",
        },
      },
    },
    CombatEffects: [
      "Crit Chance Up",
      "Crit Damage Up",
      "Evasion Up",
      "Speed Up",
      "Strength Up",
      "Evasion Down",
      "Buff Stealing and Purge Debuffs",
    ],
    Affiliations: "Speedster",
    id: "173",
    affinity: "Energy",
  },
  {
    tier: "A",
    name: "Kilowog",
    subName: "Green Lantern of Sector 674",
    SPD: "125",
    HP: "31404",
    STR: "2697",
    INT: "1753",
    AG: "1976",
    STAM: "2505",
    CRC: "0%",
    CRV: "0%",
    LegendaryOrder: "3,1,4,2,5",
    GearSet: "Physical Support",
    powers: {
      one: {
        name: "Heavy Gauntlet Construct:",
        dis: {
          Default: "Damage to an enemy. Ignore Shields.",
          Legendary: "Purge 2 Buffs on target.",
        },
      },
      two: {
        name: "Trainer protection:",
        dis: {
          Default:
            "Apply 30% Shield to all allies and 3 Empowered Strength Up (2T) to the primary target.",
          Legendary: "Apply Debuff Immunity (2T) on primary target.",
        },
      },
      three: {
        name: "Pulverize:",
        dis: {
          Default: "Damage to all enemies, apply Stun to the primary target.",
          Legendary: "Apply 20% Turn Meter Down to all enemies.",
        },
      },
      four: {
        name: "Don't Surrender Poozer:",
        dis: {
          Default:
            "Every time that a teammate receive a Critical Hit, apply 2 Empowered Strength Ups (2T) on that teammate.",
          Legendary: "Also Kilowog gains 2 Empowered Strength Ups (2T).",
        },
      },
      five: {
        name: "Rookies!!:",
        dis: {
          Default:
            "At the start of every ally Turn, if that ally has 5 or more buffs 75% chance to apply 15% Shield on that ally.",
          Legendary: "If the ally is a Green Lantern apply Light Overheal.",
        },
      },
    },
    CombatEffects: [
      "Debuff Immunity",
      "Empowered Strength Up",
      "Stun",
      "Heal",
      "Apply Shield",
      "Ignore Shield",
      "Turn Meter Down and Purge Buffs",
    ],
    Affiliations: "Green Lantern Corps",
    id: "135",
    affinity: "Energy",
  },
  {
    tier: "A",
    name: "Mongul",
    subName: "Ruler of the Warworld",
    SPD: "118",
    HP: "32425",
    STR: "2830",
    INT: "1665",
    AG: "2124",
    STAM: "2641",
    CRC: "25%",
    CRV: "228%",
    LegendaryOrder: "3,5,1]2,4",
    GearSet: "Physical Support",
    powers: {
      one: {
        name: "Ringmaster:",
        dis: {
          Default:
            "Damage and 75% chance to apply awareness to all teammates..",
          Legendary: "50% Chance to gain Awareness.",
        },
      },
      two: {
        name: "Black Mercy:",
        dis: {
          Default:
            "15% True Damage and apply 3 Speed Downs (1T) on all enemies.",
          Legendary:
            "Purge 4 buffs from main target. If the target has no buffs, apply Buff Immunity (2T).",
        },
      },
      three: {
        name: "Trophy Maker:",
        dis: {
          Default: "Heavy damage and 30% True Damage to a single enemy.",
          Legendary:
            "Also, apply Stun (1T) that cannot be purged and ignores immunities.",
        },
      },
      four: {
        name: "Golden Fury:",
        dis: {
          Default:
            "Passive: At the start of his turn, gain Awareness. If Mongul already has Awareness, it is applied to a random ally.",
          Legendary: "Apply 3 Evasion Downs (1T) on a random enemy.",
        },
      },
      five: {
        name: "Lord of the Warworld:",
        dis: {
          Default:
            "Leader: Convert 6 Int Ups from all enemies to Speed Downs (1T) for all enemies at the end of his turn.",
          Legendary: "While Mongul is alive, all allies are immune to Stun.",
        },
      },
    },
    CombatEffects: [
      "Stun Immunity",
      "Awareness",
      "Buff Immunity",
      "Evasion Down",
      "Speed Down",
      "Stun",
      "Buff to Debuff conversion",
      "True Damage",
      "Purge Buffs and Ignore Immunities",
    ],
    Affiliations: "Injustice League",
    id: "179",
    affinity: "Energy",
  },
  {
    tier: "A",
    name: "Naomi Mcduffie",
    subName: "Powerhouse",
    SPD: "113",
    HP: "39828",
    STR: "2587",
    INT: "1498",
    AG: "1623",
    STAM: "2793",
    CRC: "22%",
    CRV: "228%",
    LegendaryOrder: "3,2,1,4,5",
    GearSet: "Physical Tank",
    powers: {
      one: {
        name: "Only Child:",
        dis: {
          Default: "Heavy damage to a single enemy and gain Taunt (1T).",
          Legendary: "50% Chance to apply double damage on the target.",
        },
      },
      two: {
        name: "Double Trouble:",
        dis: {
          Default:
            "Heavy damage that ignores Awareness to a single target and 75% chance to deal half damage to a random enemy. All damage ignores Awareness.",
          Legendary:
            "Also, 50% Chance to apply double the original base damage and Stun (1T) on the original target.",
        },
      },
      three: {
        name: "Shush!:",
        dis: {
          Default:
            "Heavy damage to all enemies and 80% chance to apply Silence (1T) on primary target.",
          Legendary: "50% Chance to apply double damage.",
        },
      },
      four: {
        name: "Identity Crisis:",
        dis: {
          Default:
            "Passive: If Naomi's health is under 50%, call Only Child at the end of her turn.",
          Legendary:
            "50% chance to gain Death Immunity (1T) at the end of her turn.",
        },
      },
      five: {
        name: "Good Instincts:",
        dis: {
          Default:
            "Passive: If Naomi has 3 or more debuffs, 65% chance to gain 7 Strength Ups (1T) at the end of her turn.",
          Legendary: "Also, gain 3 Stamina Ups (1T).",
        },
      },
    },
    CombatEffects: [
      "Death Immunity",
      "Stamina Up",
      "Strength Up",
      "Taunt",
      "Silence and Ignore Awareness",
    ],
    Affiliations: "Justice League",
    id: "174",
    affinity: "Energy",
  },
  {
    tier: "A",
    name: "Stargirl",
    subName: "Wielder of The Cosmic Staff",
    SPD: "122",
    HP: "30498",
    STR: "2721",
    INT: "1521",
    AG: "2182",
    STAM: "2415",
    CRC: "25%",
    CRV: "228%",
    LegendaryOrder: "5,2,3,1,4 (2021 rework)",
    GearSet: "Physical Support",
    powers: {
      one: {
        name: "Cosmic Strike:",
        dis: {
          Default: "Damage to an enemy. Apply 4 Strength Down (2T).",
          Legendary: "60% Chance to use Cosmic Strike again.",
        },
      },
      two: {
        name: "Star Force Field:",
        dis: {
          Default: "Give Crit Immunity (2T) and 75% Shield to all allies.",
          Legendary:
            "Purge 2 Debuff from all allies and 50% Turn Meter Up to self.",
        },
      },
      three: {
        name: "Stellar Blast:",
        dis: {
          Default:
            "Damage to all enemies and 60% chance to gain Damage Immunity (1T).",
          Legendary:
            "75% additional damage and 3 Crit Chance Down (2T) to enemies.",
        },
      },
      four: {
        name: "Energy Conversion:",
        dis: {
          Default:
            "Passive: At the end of each enemy's turn, turn up to 5 Strength Up into Strength Down (2T) that ignore immunities.",
          Legendary: "50% chance to gain 3 Crit Chance Ups (1T).",
        },
      },
      five: {
        name: "Cosmic Projection:",
        dis: {
          Default:
            "Passive: Each time an enemy gains a Buff in their turn, 80% chance for Stargirl to gain 2 Strength Ups (2T) and 25% Turn Meter Up.",
          Legendary:
            "At the beginning of Stargirl's turn, Purge 3 Debuffs on her.",
        },
      },
    },
    CombatEffects: [
      "Crit Chance Up",
      "Crit Immunity",
      "Damage Immunity",
      "Strength Up",
      "Crit Chance Down",
      "Strength Down",
      "Buff to Debuff conversion",
      "Apply Shield",
      "Turn Meter Up",
      "Purge Debuffs and Ignore Immunities",
    ],
    Affiliations: "Justice Society of America",
    id: "116",
    affinity: "Energy",
  },
  {
    tier: "A",
    name: "Superboy",
    subName: "Jon Kent",
    SPD: "110",
    HP: "38058",
    STR: "1492",
    INT: "2455",
    AG: "1909",
    STAM: "2741",
    CRC: "15%",
    CRV: "178%",
    LegendaryOrder: "1,3,5,4,2 (updated for rework)",
    GearSet: "Special Tank",
    powers: {
      one: {
        name: "Super Slam:",
        dis: {
          Default:
            "Special Damage to an enemy. Purge 6 Buffs if Superboy has True Sight.",
          Legendary: "Can't Miss.",
        },
      },
      two: {
        name: "Heat-Vision Burst:",
        dis: {
          Default: "Special Damage to an enemy. Gain 2 True Sight.",
          Legendary: "Gain 3 Int Up.",
        },
      },
      three: {
        name: "Frost Breath:",
        dis: {
          Default: "Apply Stun and 40% Turn Meter Down to an enemy.",
          Legendary:
            "50% chance to use Super Slam on a random target. 25% chance to use it twice.",
        },
      },
      four: {
        name: "Emerging Super-Senses:",
        dis: {
          Default:
            "At the beginning of his turn, if Superboy has no True Sight, gain 1 True Sight and 1 Int Up until the end of the turn.",
          Legendary:
            "If Superboy had True Sight, 50% chance to gain Death Immunity.",
        },
      },
      five: {
        name: "Natural Hero Instincts:",
        dis: {
          Default:
            "Passive Ability: At the end of each enemy's turn, gain 25% Turn Meter Up if any enemy has Taunt or Invisibility.",
          Legendary: "Also apply 10% Turn Meter Up to all teammates.",
        },
      },
    },
    CombatEffects: [
      "Death Immunity",
      "Intelligence Up",
      "True Sight",
      "Stun",
      "Can't Miss",
      "Turn Meter Up",
      "Turn Meter Down and Purge Buffs",
    ],
    Affiliations: "Kryptonian and Super Sons",
    id: "118",
    affinity: "Energy",
  },
  {
    tier: "A",
    name: "Ultraman",
    subName: "The Man Who Steals",
    SPD: "115",
    HP: "37076",
    STR: "1497",
    INT: "2501",
    AG: "1949",
    STAM: "2643",
    CRC: "15%",
    CRV: "178%",
    LegendaryOrder: "4,2,3,1,5 (updated for rework 2021)",
    GearSet: "Special Tank",
    powers: {
      one: {
        name: "Ultra Strength:",
        dis: {
          Default:
            "Special Damage to an enemy. If Ultraman is debuffed, Transfer 5 Debuffs to target. Otherwise, +50% Extra Damage.",
          Legendary:
            "If Ultraman is still debuffed, Transfer 3 Debuffs to target. Otherwise, apply 5 Crit Damage Down (2T).",
        },
      },
      two: {
        name: "Kryptonite Recharge:",
        dis: {
          Default:
            "Gain Taunt(2T), 3 Int Up (2T), 4 Stamina Up (2T) and 4 Mend (3T).",
          Legendary:
            "Gain Overheal. If Ultraman's HP is over 50%, apply an (125) Overheal on a random ally.",
        },
      },
      three: {
        name: "Ultra Vision:",
        dis: {
          Default:
            "Special Damage to all enemies. Purge 3 random buffs from a random enemy.",
          Legendary:
            "25% chance per enemy alive to apply Buff Immunity (1T) to all enemies.",
        },
      },
      four: {
        name: "Sadistic Delight:",
        dis: {
          Default:
            "Passive: When an enemy dies, Reset cooldown of Kryptonite Recharge.",
          Legendary:
            "Also gain 3 Mends (3T). Use Kryptonite Recharge at the start of the battle.",
        },
      },
      five: {
        name: "Corruption Transfer:",
        dis: {
          Default:
            "Passive: If a teammate is debuffed at the end of their turn, 75% chance to Transfer 4 Debuffs to a random enemy. Transfer 2 Extra Debuffs to a random enemy if a teammate is a Villain.",
          Legendary:
            "When Corruption Transfer activates, Ultraman uses Ultra Strength on the random enemy if a teammate is a Villain.",
        },
      },
    },
    CombatEffects: [
      "Intelligence Up",
      "Mends",
      "Stamina Up",
      "Taunt",
      "Buff Immunity",
      "Crit Damage Down",
      "Cooldown Effects",
      "Debuff Transfer",
      "Out of Turn Attacks",
      "Heal",
      "Purge Buffs",
      "Start of Battle Ability and Self Heal",
    ],
    Affiliations: "Crime Syndicate",
    id: "125",
    affinity: "Energy",
  },
  {
    tier: "A",
    name: "Wally West",
    subName: "The Flash",
    SPD: "133",
    HP: "29161",
    STR: "2526",
    INT: "1483",
    AG: "2243",
    STAM: "2156",
    CRC: "47%",
    CRV: "256%",
    LegendaryOrder: "2,4,1/3],5 (2022 rework)",
    GearSet: "Physical Striker",
    powers: {
      one: {
        name: "Hypersonic Strike:",
        dis: {
          Default:
            "Damage to an enemy. Gain 3 Speed Ups (Always). 50% chance to gain an additional Speed Up (Always).",
          Legendary: "50% Chance to strike twice.",
        },
      },
      two: {
        name: "Gift of Speed:",
        dis: {
          Default: "Give 3 Speed Up (3T) and 30% Turn Meter Up to all allies.",
          Legendary:
            "Also gain 1 Awareness (Always) and apply 1 Awareness on a random ally.",
        },
      },
      three: {
        name: "Infinite Mass Punch:",
        dis: {
          Default:
            "Heavy Damage to an enemy. 100% Additional Crit Chance if Wally has 5+ Speed Up.",
          Legendary: "100% Additional Crit Damage.",
        },
      },
      four: {
        name: "Matter Phasing:",
        dis: {
          Default:
            "Passive: 50% chance to gain 6 Evasion Up (1T) at the beginning of each enemy turn.",
          Legendary:
            "Every time Wally evades, the cooldown of Gift of Speed is reduced by 1.",
        },
      },
      five: {
        name: "Outrun Death:",
        dis: {
          Default:
            "Passive: If Wally has 5 Speed Ups when reaching 0 HP, purge 3 and gain a 30% True Heal.",
          Legendary:
            "Reset Cooldown to all abilities, remove all debuffs and gain 5 Evasion Ups after Outrun Death.",
        },
      },
    },
    CombatEffects: [
      "Awareness",
      "Crit Chance Up",
      "Crit Damage Up",
      "Evasion Up",
      "Speed Up",
      "Cooldown Effects",
      "Turn Meter Up and Self Heal",
    ],
    Affiliations: "Justice League, Speedster and Titans",
    id: "127",
    affinity: "Energy",
  },
  {
    tier: "B",
    name: "Arsenal",
    subName: "Roy Harper",
    SPD: "129",
    HP: "31451",
    STR: "2475",
    INT: "1525",
    AG: "2333",
    STAM: "2510",
    CRC: "25%",
    CRV: "228%",
    LegendaryOrder: "1,3,5,2,4 (2022 rework)",
    GearSet: "Physical Support",
    powers: {
      one: {
        name: "Crippling Arrow:",
        dis: {
          Default: "Heavy Damage and apply 4 Strength Downs (1T) to an enemy.",
          Legendary: "50% chance to attack an additional random enemy.",
        },
      },
      two: {
        name: "Everybody Chill:",
        dis: {
          Default:
            "Damage and apply 4 Strength Down (2T) to all enemies. Always Reset Turn Meter to the main target.",
          Legendary: "Always apply 5 Hit Chance Downs (1T) to missed targets.",
        },
      },
      three: {
        name: "Blinding Impact:",
        dis: {
          Default:
            "Heavy Damage and apply 5 Hit Chance Downs (2T) to an enemy.",
          Legendary: "+5% Damage per Debuff on the enemy team (Limit 20).",
        },
      },
      four: {
        name: "Concussion Grenade:",
        dis: {
          Default:
            "Passive: When an enemy deals damage, 75% chance to apply 2 Strength Downs (2T) and 2 Intelligence Downs (2T) for each affected ally.",
          Legendary:
            "When Concussion Grenade activates, reduce Cooldown of Blinding Impact by 1.",
        },
      },
      five: {
        name: "Speedy Counter:",
        dis: {
          Default:
            "Passive: When an enemy misses an attack, counter with Crippling Arrow.",
          Legendary: "Also gain Invisibility (2T) if not Invisible.",
        },
      },
    },
    CombatEffects: [
      "Invisibility",
      "Hit Chance Down",
      "Intelligence Down",
      "Strength Down",
      "Cooldown Effects",
      "Counter Attacks and Turn Meter Down",
    ],
    Affiliations: "Outlaws, The Outsiders and Titans",
    id: "7",
    affinity: "Physical",
  },
  {
    tier: "B",
    name: "Artemis",
    subName: "The Shim'Tar",
    SPD: "120",
    HP: "38338",
    STR: "1524",
    INT: "2569",
    AG: "1726",
    STAM: "2769",
    CRC: "15%",
    CRV: "178%",
    LegendaryOrder: "5,3,2,]1,4",
    GearSet: "Special Tank",
    powers: {
      one: {
        name: "Mistress Uppercut:",
        dis: {
          Default: "Special Damage and gain 4 Crit Chance Ups (2T).",
          Legendary: "Attack again if Artemis has 4 or more Int Ups.",
        },
      },
      two: {
        name: "Champion Charge:",
        dis: {
          Default: "Special Damage and gain 4 Int Ups (2T).",
          Legendary: "Apply Stun (1T) on target.",
        },
      },
      three: {
        name: "Mistress Launch:",
        dis: {
          Default:
            "Special Damage to all enemies and 75% chance to gain 3 Stamina Ups (2T).",
          Legendary: "Apply Heal Immunity (1T) on targets.",
        },
      },
      four: {
        name: "Light of Ra:",
        dis: {
          Default:
            "Every time that Artemis deals Critical Damage Gain 4 Int Ups (2T) and apply 15% Shield to all allies.",
          Legendary: "Artemis gains 15% additional Shield.",
        },
      },
      five: {
        name: "Nephthys Blessing:",
        dis: {
          Default:
            "At the start of her turn 75% chance to remove up to 3 Debuff and gain 3 Crit Chance Up (2T).",
          Legendary:
            "Use Mistress Uppercut at the start of the battle on a random enemy.",
        },
      },
    },
    CombatEffects: [
      "Crit Chance Up",
      "Intelligence Up",
      "Stamina Up",
      "Heal Immunity",
      "Stun",
      "Start of Battle Ability",
      "Apply Shield and Purge Debuffs",
    ],
    Affiliations: "Amazons and Outlaws",
    id: "133",
    affinity: "Physical",
  },
  {
    tier: "B",
    name: "Batgirl",
    subName: "BatgirlOfBurnside",
    SPD: "119",
    HP: "30129",
    STR: "2303",
    INT: "1540",
    AG: "2249",
    STAM: "2378",
    CRC: "25%",
    CRV: "228%",
    LegendaryOrder: "5,2,3,4,1 (updated for rework)",
    GearSet: "Physical Support",
    powers: {
      one: {
        name: "Precision Strike:",
        dis: {
          Default: "Damage to an enemy. Bonus Damage if enemy has no buffs.",
          Legendary: "Call Assist if enemy has no buffs.",
        },
      },
      two: {
        name: "Target Analyzed:",
        dis: {
          Default:
            "Gain 4 Evasion Ups. Always Purge 5 Buffs from an enemy and reduce Turn Meter by 25%.",
          Legendary:
            "Gain Invisibility. Purge 5 Awareness and +5 buffs if Batgirl has Evasion Up.",
        },
      },
      three: {
        name: "Say Cheese!:",
        dis: {
          Default:
            "Damage to an enemy. +70% Damage if Evasion Up on Batgirl. If no Evasion Ups, gain 3 Evasion Ups.",
          Legendary: "Apply 5 Hit Chance Down.",
        },
      },
      four: {
        name: "Missed Us:",
        dis: {
          Default:
            "If enemies miss an attack, apply Light Damage and Purge 3 Buffs.",
          Legendary: "Counter-attack Can't Miss. Gain 1 Crit Chance Up.",
        },
      },
      five: {
        name: "Neighborhood Defender:",
        dis: {
          Default:
            "When any ally evades, all allies gain Heal and Crit Immunity.",
          Legendary: "Team starts battle with 3 Evasion Up.",
        },
      },
    },
    CombatEffects: [
      "Crit Immunity",
      "Evasion Up",
      "Invisibility",
      "Hit Chance Down",
      "Call Assist",
      "Counter Attacks",
      "Out of Turn Attacks",
      "Purge Buffs and Start of Battle Ability",
    ],
    Affiliations: "Bat Family and Birds of Prey",
    id: "10",
    affinity: "Physical",
  },
  {
    tier: "B",
    name: "Beast Boy",
    subName: "Changeling",
    SPD: "121",
    HP: "30924",
    STR: "2719",
    INT: "1479",
    AG: "2186",
    STAM: "2457",
    CRC: "25%",
    CRV: "228%",
    LegendaryOrder: "3,2,5,4,1 (updated for rework)",
    GearSet: "Physical Striker",
    powers: {
      one: {
        name: "Monkey Business:",
        dis: {
          Default:
            "Damage to an enemy. +50% damage if Beast Boy is mending. Gain 1 agility up and 1 int up.",
          Legendary: "Apply 1 Affinity Resistance Up to the whole team.",
        },
      },
      two: {
        name: "Bear Hug:",
        dis: {
          Default:
            "Damage to an enemy and 35% Turn Meter Down. If Beast Boy is mending, double amount of turn meter down and gain 1 crit immunity.",
          Legendary: "Apply 1 buff immunity to target.",
        },
      },
      three: {
        name: "Belly Flop!:",
        dis: {
          Default: "Damage and apply 15% Turn Meter Down to all enemies.",
          Legendary: "Gain 25% Shield and 3 Mend.",
        },
      },
      four: {
        name: "Echinodermian Regeneration:",
        dis: {
          Default:
            "Passive Ability: 70% chance to gain 4 Mends if Beast Boy's HP is under 30% at the end of each enemy's turn.",
          Legendary: "Also gain Damage Immunity",
        },
      },
      five: {
        name: "Go Titans!:",
        dis: {
          Default:
            "Passive Ability: 30% chance to use Monkey Business at the end of each teammate's turn. +25% chance if teammate is a Titan.",
          Legendary:
            "Gain 2 Agility Up and 25% Turn Meter Up if Beast Boy is Overhealed at the end of each teammate's turn.",
        },
      },
    },
    CombatEffects: [
      "Affinity Resist Up",
      "Agility Up",
      "Crit Immunity",
      "Damage Immunity",
      "Intelligence Up",
      "Mends",
      "Buff Immunity",
      "Out of Turn Attacks",
      "Apply Shield",
      "Turn Meter Up and Turn Meter Down",
    ],
    Affiliations: "Titans",
    id: "16",
    affinity: "Physical",
  },
  {
    tier: "B",
    name: "Black Manta",
    subName: "Scourge of the Seven Seas",
    SPD: "109",
    HP: "28859",
    STR: "2330",
    INT: "1462",
    AG: "2138",
    STAM: "2126",
    CRC: "47%",
    CRV: "256%",
    LegendaryOrder: "1,5,2,4,3",
    GearSet: "",
    powers: {
      one: {
        name: "Hidden Blade:",
        dis: {
          Default: "Damage to an enemy. Apply 4 Bleeds if target is Bleeding.",
          Legendary: "Attack again if target has 5+ Bleeds",
        },
      },
      two: {
        name: "Jetpack Onslaught:",
        dis: {
          Default: "Light Damage and apply 2-3 Bleeds to all enemies.",
          Legendary: "Gain True Sight",
        },
      },
      three: {
        name: "Optic Blast:",
        dis: {
          Default: "Heavy Damage to an enemy. Always apply Heal Immunity.",
          Legendary: "Turn all Bleeds on target into Permanent Bleeds",
        },
      },
      four: {
        name: "Vengeful Conversion:",
        dis: {
          Default:
            "At the end of an enemy's turn, turn up to 5 Mends into Bleeds.",
          Legendary: "Gain 10% Turn Meter Up for each Mend turned into Bleed",
        },
      },
      five: {
        name: "Blood in the Water:",
        dis: {
          Default:
            "When an enemy Bleeds, gain 2 Agility Ups and 2 Stamina Ups.",
          Legendary: "Also apply Heal Immunity to enemy",
        },
      },
    },
    CombatEffects: [
      "Agility Up",
      "Stamina Up",
      "True Sight",
      "Bleeds",
      "Heal Immunity",
      "Buff to Debuff conversion and Turn Meter Up",
    ],
    Affiliations: "Injustice League",
    id: "22",
    affinity: "Physical",
  },
  {
    tier: "B",
    name: "Booster Gold",
    subName: "25th Century Hero",
    SPD: "120",
    HP: "29335",
    STR: "2596",
    INT: "1553",
    AG: "2086",
    STAM: "2174",
    CRC: "47%",
    CRV: "256%",
    LegendaryOrder: "1,5,2,4,3",
    GearSet: "Physical Striker",
    powers: {
      one: {
        name: "High Speed Kick:",
        dis: {
          Default:
            "Damage to an enemy. +80% additional damage if Booster Gold has True Sight.",
          Legendary:
            "Purge 2 Buffs from target. Purge 3 additional Buffs from target if Booster Gold has True Sight.",
        },
      },
      two: {
        name: "Mass Dispersion Field:",
        dis: {
          Default:
            "Apply True Sight, 60% Shield and Purge 4 Debuffs from an ally.",
          Legendary:
            "Booster Gold gains 2 Strength Up. 40% chance to gain Damage Immunity.",
        },
      },
      three: {
        name: "Booster Shots:",
        dis: {
          Default: "Heavy Damage and apply 4 Strength Down. Ignore Shields.",
          Legendary: "50% chance to apply Stun.",
        },
      },
      four: {
        name: "Hypercharged Rods:",
        dis: {
          Default:
            "If Booster Gold gets hit, 50% chance to gain 50% Turn Meter Up and Purge 2 Buff from attacker.",
          Legendary:
            "When Hypercharged Rods Activates, Cooldown -1 to Booster Shots.",
        },
      },
      five: {
        name: "IR Vision:",
        dis: {
          Default:
            "At the beginning of his turn, if Booster Gold has True Sight, gain 3 Strength Up and Crit Immunity.",
          Legendary: "50% chance to start the battle with True Sight.",
        },
      },
    },
    CombatEffects: [
      "Damage Immunity",
      "True Sight",
      "Strength Down",
      "Stun",
      "Apply Shield",
      "Ignore Shield",
      "Turn Meter Up",
      "Purge Buffs and Start of Battle Ability",
    ],
    Affiliations: "Justice League International",
    id: "25",
    affinity: "Physical",
  },
  {
    tier: "B",
    name: "Catwoman",
    subName: "The Princess of Plunder",
    SPD: "123",
    HP: "30385",
    STR: "2661",
    INT: "1673",
    AG: "2463",
    STAM: "2404",
    CRC: "25%",
    CRV: "228%",
    LegendaryOrder:
      "3,1,3,2,4 (could go 3,3,1,2,4 if you would rather have the stun than the awareness stealing if only L2)",
    GearSet: "Physical Support",
    powers: {
      one: {
        name: "Whiplash:",
        dis: {
          Default:
            "Damage to an enemy, always purge 2 Buffs and gain 2 Speed Ups if Catwoman is Invisible.",
          Legendary:
            "Steal all Awareness and True Sight from target. Purge 5 Buffs if the target has a Positive Immunity.",
        },
      },
      two: {
        name: "Misdirection:",
        dis: {
          Default:
            "Gain Invisibility and Turn Meter Up +40%. Invisibility duration +1 if teammate is Taunting.",
          Legendary:
            "On dying, 50% chance to use Misdirection, gain 8 Evasion Up and Heal.",
        },
      },
      three: {
        name: "Hit and Run:",
        dis: {
          Default:
            "Damage to an enemy, gain 3 Speed Ups.Legendary 1: Purge all Buffs on the target.Legendary 2: Apply Stun to target. Steal all Positive Immunities on target if Catwoman is Invisible (before purge.)Distraction: Passive Ability: Catwoman has 38% chance to gain Invisibility and Heal on a turn when anyone on her team takes damage.",
          Legendary: "Also gain 1 Evasion and 1 Speed Up",
        },
      },
      four: {
        name: "",
        dis: { Default: "", Legendary: "" },
      },
      five: {
        name: "",
        dis: { Default: "", Legendary: "" },
      },
    },
    CombatEffects: [
      "Evasion Up",
      "Invisibility",
      "Speed Up",
      "Stun",
      "Buff Stealing",
      "Turn Meter Up",
      "Purge Buffs and Self Heal",
    ],
    Affiliations: "Bat Family and Birds of Prey",
    id: "31",
    affinity: "Physical",
  },
  {
    tier: "B",
    name: "Deadshot",
    subName: "Suicide Squad Hitman",
    SPD: "116",
    HP: "29178",
    STR: "2545",
    INT: "1553",
    AG: "2153",
    STAM: "2158",
    CRC: "47%",
    CRV: "256%",
    LegendaryOrder: "2,3,4,1,5 (updated for rework)",
    GearSet: "Physical Striker",
    powers: {
      one: {
        name: "Ricochet Shot:",
        dis: {
          Default:
            "Damage to an enemy, gain 3 Crit Chance Up and 20% chance to cause additional Damage to a random enemy.",
          Legendary: "Apply 20% Turn Meter Down to target.",
        },
      },
      two: {
        name: "Scout Target:",
        dis: {
          Default:
            "Apply 5 Bleed, 40% Turn Meter Down and 4 Evasion Down to a target.",
          Legendary: "Purge 4 buffs on target.",
        },
      },
      three: {
        name: "Master of Arms:",
        dis: {
          Default:
            "Damage to all enemies, gain 30% Turn Meter Up if an enemy has Bleed.",
          Legendary: "Crit Chance +50%.",
        },
      },
      four: {
        name: "Try That Again:",
        dis: {
          Default:
            "Passive Ability: Use Scout Target on an enemy that deals damage to Deadshot.",
          Legendary: "Use Ricochet Shot if the attacker has 4 or more Bleeds.",
        },
      },
      five: {
        name: "Bad Boys:",
        dis: {
          Default:
            "Team Leader: At the start of the battle the team gains 2 Evasion Up and Deadshot gains 2 Hit Chance Up.",
          Legendary: "Deadshot gains Crit Immunity.",
        },
      },
    },
    CombatEffects: [
      "Crit Immunity",
      "Evasion Up",
      "Hit Chance Up",
      "Bleeds",
      "Evasion Down",
      "Counter Attacks",
      "Turn Meter Down",
      "Purge Buffs and Start of Battle Ability",
    ],
    Affiliations: "Suicide Squad",
    id: "39",
    affinity: "Physical",
  },
  {
    tier: "B",
    name: "Deathstroke",
    subName: "The Terminator",
    SPD: "104",
    HP: "38043",
    STR: "2461",
    INT: "1669",
    AG: "1759",
    STAM: "2614",
    CRC: "22%",
    CRV: "228%",
    LegendaryOrder: "1,3,4,2,5 (updated for 2021 rework)",
    GearSet: "Physical Tank",
    powers: {
      one: {
        name: "Covering Fire:",
        dis: {
          Default: "Damage to an enemy and apply Silence (1T) on target.",
          Legendary:
            "50% Turn Meter Down on target if Deathstroke has Awareness.",
        },
      },
      two: {
        name: "Lazarus Sanction:",
        dis: {
          Default:
            "Damage to an enemy and apply Silence (1T), 100% chance to gain 2 Awareness.",
          Legendary: "Resets Termination cooldown.",
        },
      },
      three: {
        name: "Termination:",
        dis: {
          Default:
            "Damage to an enemy, Silence (1T) target if Deathstroke has Awareness or a positive immunity. +150% damage if the target is Silenced.",
          Legendary: "Gain 100% Turn Meter Up if the target is killed.",
        },
      },
      four: {
        name: "Tactical Genius:",
        dis: {
          Default:
            "Gain 3 Awareness at the start of combat, 100% chance for +2 Awareness.",
          Legendary:
            "Gain 8 Mends (3T) and then Death Immunity (1T) after taking damage for the first time.",
        },
      },
      five: {
        name: "Army of One:",
        dis: {
          Default:
            "Whenever an Enemy dies gain 5 Speed Ups (2T), 5 Strength Ups (2T), and 50% Turn Meter Up.",
          Legendary: "Gain 2 permanent Speed Ups when an enemy dies.",
        },
      },
    },
    CombatEffects: [
      "Awareness",
      "Death Immunity",
      "Mends",
      "Speed Up",
      "Strength Up",
      "Silence",
      "Cooldown Effects",
      "Turn Meter Up and Turn Meter Down",
    ],
    Affiliations: "Secret Society of Super-Villains",
    id: "40",
    affinity: "Physical",
  },
  {
    tier: "B",
    name: "Green Arrow",
    subName: "Castaway",
    SPD: "127",
    HP: "27655",
    STR: "2372",
    INT: "1528",
    AG: "2150",
    STAM: "2005",
    CRC: "47%",
    CRV: "256%",
    LegendaryOrder: "3,1,2,5,4 (updated for rework)",
    GearSet: "Physical Striker",
    powers: {
      one: {
        name: "Cover Shot:",
        dis: {
          Default:
            "Light Damage and purge 2 buffs from an enemy purge 2 extra buffs if Green Arrow is Invisible.",
          Legendary: "Apply 40% Turn Meter Down if Green Arrow is Invisible",
        },
      },
      two: {
        name: "Trick Shot:",
        dis: {
          Default: "Heavy Damage to an enemy gain Invisibility.",
          Legendary: "Purge up to 3 Buffs",
        },
      },
      three: {
        name: "Multishot:",
        dis: {
          Default: "Light Damage and apply 20% Turn Meter Down to all enemies.",
          Legendary: "Gain Invisibility and 50% chance to gain Debuff Immunity",
        },
      },
      four: {
        name: "Quickness:",
        dis: {
          Default:
            "Passive Ability: 20% chance to use Cover Shot on Random Enemy at the end of every teammate's turn.",
          Legendary: "50% chance to use Cover Shot twice",
        },
      },
      five: {
        name: "Alone No More:",
        dis: {
          Default:
            "All teammates have a 50% chance to Purge 1 Buff when damaging an enemy.",
          Legendary: "Also apply 10% Turn Meter Down",
        },
      },
    },
    CombatEffects: [
      "Debuff Immunity",
      "Invisibility",
      "Out of Turn Attacks",
      "Turn Meter Down and Purge Buffs",
    ],
    Affiliations: "Justice League",
    id: "54",
    affinity: "Physical",
  },
  {
    tier: "B",
    name: "Huntress",
    subName: "The Zealous Crusader",
    SPD: "121",
    HP: "28650",
    STR: "2657",
    INT: "1514",
    AG: "2129",
    STAM: "2105",
    CRC: "47%",
    CRV: "256%",
    LegendaryOrder: "2,1],5,4,3 (rework)",
    GearSet: "Physical Striker",
    powers: {
      one: {
        name: "Merciless Shot:",
        dis: {
          Default:
            "Damage to an enemy, +100% Crit Chance if Target below 50% Health.",
          Legendary: "10% True Damage to targets below 50% Health",
        },
      },
      two: {
        name: "Bird of Prey:",
        dis: {
          Default:
            "Gain 4 Evasion Ups (3T), 80% chance to gain 3 Speed Ups (3T).",
          Legendary: "Gain +35% Turn Meter",
        },
      },
      three: {
        name: "The Big Hit:",
        dis: {
          Default:
            "Heavy Damage to an enemy, +115% Damage if an enemy is dead.",
          Legendary: "Gain 3 Strength Ups [3 turns] if target killed",
        },
      },
      four: {
        name: "No Rest:",
        dis: {
          Default:
            "Passive Ability: 100% Chance to use Bird of Prey after killing an enemy on Huntress's turn.",
          Legendary: "Also gain 5 Critical Chance Ups [3 turns]",
        },
      },
      five: {
        name: "Window of Opportunity:",
        dis: {
          Default:
            "Passive Ability: At the end of each ally turn, 70% chance to use The Big Hit on a random enemy that is below 25% health.",
          Legendary:
            "Always apply Heal Immunity (0T) on all of Huntress' attacks",
        },
      },
    },
    CombatEffects: [
      "Crit Chance Up",
      "Evasion Up",
      "Speed Up",
      "Strength Up",
      "Heal Immunity",
      "True Damage and Turn Meter Up",
    ],
    Affiliations: "Birds of Prey",
    id: "64",
    affinity: "Physical",
  },
  {
    tier: "B",
    name: "Jay Garrick",
    subName: "Golden Age Flash",
    SPD: "130",
    HP: "30128",
    STR: "2469",
    INT: "1464",
    AG: "2221",
    STAM: "2253",
    CRC: "47%",
    CRV: "256%",
    LegendaryOrder: "1,2,5],4,3 (2020 rework early testing)",
    GearSet: "Physical Striker",
    powers: {
      one: {
        name: "Vortex Strike:",
        dis: {
          Default:
            "Damage to an enemy. 75% chance to strike twice. Can't miss.",
          Legendary: "Gain 2 Speed Ups (2T).",
        },
      },
      two: {
        name: "Whirlwind Sweep:",
        dis: {
          Default: "Damage to all enemies. Gain 2 permanent Speed Ups.",
          Legendary: "50% chance to use Vortex Strike on random enemy.",
        },
      },
      three: {
        name: "Flash Barrage:",
        dis: {
          Default:
            "Heavy Damage to an enemy. Apply 10% Turn Meter Down per Speed Up on Jay Garrick (Max 10).",
          Legendary: "Apply 2 Speed Downs to target (2T).",
        },
      },
      four: {
        name: "Speed Steal:",
        dis: {
          Default:
            "Passive: When an enemy gains Turn Meter Up, steal up to 30% Turn Meter from target.",
          Legendary: "75% chance to reset the cooldown of Whirlwind Sweep.",
        },
      },
      five: {
        name: "Superhuman Reflexes:",
        dis: {
          Default: "Passive: Jay Garrick gains +50% Agility.",
          Legendary: "Jay Garrick gains 3 Strength Ups (2T).",
        },
      },
    },
    CombatEffects: [
      "Speed Up",
      "Strength Up",
      "Speed Down",
      "Can't Miss",
      "Cooldown Effects",
      "Turn Meter Up and Turn Meter Down",
    ],
    Affiliations: "Justice Society of America and Speedster",
    id: "65",
    affinity: "Physical",
  },
  {
    tier: "B",
    name: "Man-Bat",
    subName: "Dr. Kirk Langstrom",
    SPD: "88",
    HP: "39788",
    STR: "2426",
    INT: "1587",
    AG: "1701",
    STAM: "2789",
    CRC: "22%",
    CRV: "228%",
    LegendaryOrder: "4,1,3,2,5",
    GearSet: "Physical Tank",
    powers: {
      one: {
        name: "Glide Slash:",
        dis: {
          Default:
            "Damage to an enemy and apply 3 Disease. 50% Additional damage if any enemy is Taunting or Invisible.",
          Legendary: "4 additional Disease if target is Taunting or Invisible.",
        },
      },
      two: {
        name: "Subsonic Blast:",
        dis: {
          Default:
            "Light Damage to all enemies. Gain True Sight and 20% Turn Meter Up.",
          Legendary: "Also gain 8 Agility Up.",
        },
      },
      three: {
        name: "The Man-Bat:",
        dis: {
          Default:
            "Gain 3 Strength Up and deal Damage to an enemy. Gain 2 additional Strength Up if target has Disease.",
          Legendary: "Apply 3 Disease to a random enemy.",
        },
      },
      four: {
        name: "Challenge the Leader:",
        dis: {
          Default:
            "60% Chance to use Glide Slash when an enemy gains Taunt on their turn.",
          Legendary: "Man-Bat is immune to Critical hits.",
        },
      },
      five: {
        name: "Contaminated Claws:",
        dis: {
          Default:
            "90% chance to apply 1 Disease each time Man-Bat deals damage to an enemy.",
          Legendary:
            "Gain 1 Agility Up at the end of his turn if any enemy has Disease.",
        },
      },
    },
    CombatEffects: [
      "Agility Up",
      "Crit Immunity",
      "Strength Up",
      "True Sight",
      "Disease",
      "Out of Turn Attacks and Turn Meter Up",
    ],
    Affiliations: "Secret Society of Super-Villains",
    id: "79",
    affinity: "Physical",
  },
  {
    tier: "B",
    name: "Nubia",
    subName: "Vengeful Amazon",
    SPD: "119",
    HP: "27186",
    STR: "2607",
    INT: "1695",
    AG: "2151",
    STAM: "1959",
    CRC: "47%",
    CRV: "256%",
    LegendaryOrder: "5,4,2],1,3",
    GearSet: "Physical Striker",
    powers: {
      one: {
        name: "Ares' Smite:",
        dis: {
          Default: "Damage and gain 3 Crit Chance Ups (1T).",
          Legendary:
            "If the target is enraged, Nubia gains Empowered Strength Up (1T).",
        },
      },
      two: {
        name: "Athena's Wisdom:",
        dis: {
          Default: "Damage and 70% to apply Stun (1T) to a single enemy",
          Legendary: "Apply Enrage (2T) on the target.",
        },
      },
      three: {
        name: "Artemis' Haste:",
        dis: {
          Default: "Damage and 75% to apply Enrage (1T) to all enemies.",
          Legendary: "50% Chance to apply 3 Strength Ups (2T) on each ally.",
        },
      },
      four: {
        name: "Vengeance:",
        dis: {
          Default:
            "Passive: Apply Empowered Strength Up (1T) to a random ally when Nubia is hit.",
          Legendary: "If Nubia has Strength Up, 50% chance to gain Awareness.",
        },
      },
      five: {
        name: "Expertise:",
        dis: {
          Default:
            "Passive: Gain permanent Empowered Stamina Up at the end of Nubia's turn.",
          Legendary: "Also, Gain True Sight (1T).",
        },
      },
    },
    CombatEffects: [
      "Awareness",
      "Crit Chance Up",
      "Strength Up",
      "True Sight",
      "Empowered Strength Up",
      "Empowered Stamina Up",
      "Enrage and Stun",
    ],
    Affiliations: "Amazons",
    id: "165",
    affinity: "Physical",
  },
  {
    tier: "B",
    name: "Owlman",
    subName: "Thomas Wayne Jr.",
    SPD: "117",
    HP: "27066",
    STR: "2736",
    INT: "1518",
    AG: "2208",
    STAM: "1947",
    CRC: "47%",
    CRV: "256%",
    LegendaryOrder: "4,2,1,3,5",
    GearSet: "Physical Striker",
    powers: {
      one: {
        name: "Talon Strike:",
        dis: {
          Default: "Damage to an enemy. Can't miss. Apply 2 Evasion Down (2T).",
          Legendary:
            "On Critical Hit, apply 3 Hit Chance Up (2T) to teammates.",
        },
      },
      two: {
        name: "Hunter's Preparation:",
        dis: {
          Default:
            "Gain 4 Hit Chance Up (2T), 4 Crit Chance Up (2T) and 15% Turn Meter Up. Also gain 4 Crit Damage Up (2T) if there are Evasion Up in enemy team.",
          Legendary:
            "50% chance to apply same amount of buffs to a random ally",
        },
      },
      three: {
        name: "Darkest Knight:",
        dis: {
          Default:
            "Damage to an enemy. +20% Damage per Evasion Up on enemy team (limit 10).",
          Legendary:
            "Use Darkest Knight on random target when an ally misses an attack.",
        },
      },
      four: {
        name: "Double Down:",
        dis: {
          Default:
            "Passive Ability: When teammates deal a Critical Hit on their turn, they gain 25% Turn Meter Up and 1 Crit Chance Up (1T).",
          Legendary: "Owlman gains the same amount of Turn Meter Up.",
        },
      },
      five: {
        name: "Wide Vision:",
        dis: {
          Default:
            "Passive Ability: At the start of each of your allies' turns, they gain 2 Hit Chance Up (2T for teammates 3T for Owlman) and 3 Crit Chance Up (2T for teammates 3T for Owlman).",
          Legendary:
            "At the start of battle, apply 4 Agility Up (2T) to all allies.",
        },
      },
    },
    CombatEffects: [
      "Agility Up",
      "Crit Chance Up",
      "Crit Damage Up",
      "Hit Chance Up",
      "Evasion Down",
      "Can't Miss",
      "Out of Turn Attacks",
      "Turn Meter Up and Start of Battle Ability",
    ],
    Affiliations: "Crime Syndicate",
    id: "90",
    affinity: "Physical",
  },
  {
    tier: "B",
    name: "Robin",
    subName: "Damian Wayne",
    SPD: "128",
    HP: "29353",
    STR: "2847",
    INT: "1483",
    AG: "2252",
    STAM: "2175",
    CRC: "47%",
    CRV: "256%",
    LegendaryOrder: "2,4,1,]3,5",
    GearSet: "Physical Striker",
    powers: {
      one: {
        name: "Ambush:",
        dis: {
          Default:
            "Damage to an enemy, +75% Crit chance if Robin is Invisible.",
          Legendary:
            "75% chance to gain Invisibility (1T) and 3 Crit Damage Ups (1T).",
        },
      },
      two: {
        name: "One With Shadow:",
        dis: {
          Default:
            "Gain 4 Invisibility (1T). If Robin is already invisible, gain +50% Turn Meter Up and a Light Heal.",
          Legendary:
            "Gain 1 Strength Up (2T) and 1 Crit Chance Up (2T) per Invisibility Buff on team (max 10).",
        },
      },
      three: {
        name: "Niten Ichi-Ryu:",
        dis: {
          Default:
            "Damage to an enemy, always apply 6 Bleeds (3T) if Robin is Invisible.",
          Legendary: "Always apply Silence (2T).",
        },
      },
      four: {
        name: "Shadowmeld:",
        dis: {
          Default:
            "60% chance to gain Invisibility (1T) if Robin is Invisible at the beginning of his turn.",
          Legendary: "Use One With Shadow on enemy death.",
        },
      },
      five: {
        name: "Assassin Training:",
        dis: {
          Default:
            "Team Leader: Each ally has a 75% chance to go invisible (2T) when critically hit and Robin gains 2 Crit Damage Ups (2T).",
          Legendary:
            "If a teammate gains Invisibility and Robin is invisible, Robin gains +25% Turn Meter and 2 Crit Chance Ups (2T).",
        },
      },
    },
    CombatEffects: [
      "Crit Chance Up",
      "Crit Damage Up",
      "Invisibility",
      "Strength Up",
      "Bleeds",
      "Silence",
      "Turn Meter Up and Self Heal",
    ],
    Affiliations: "Bat Family, Robins and Titans",
    id: "103",
    affinity: "Physical",
  },
  {
    tier: "B",
    name: "Spoiler",
    subName: "Stephanie Brown",
    SPD: "122",
    HP: "30076",
    STR: "2356",
    INT: "1740",
    AG: "2380",
    STAM: "2373",
    CRC: "25%",
    CRV: "228%",
    LegendaryOrder: "3,2/4],1,5 (2 or 4 is dealer’s choice)",
    GearSet: "Physical Support",
    powers: {
      one: {
        name: "Good Influence:",
        dis: {
          Default:
            "Damage to a single enemy. Double damage if Spoiler is Invisible.",
          Legendary:
            "Also, 50% chance to apply Silence (2T) on a random enemy.",
        },
      },
      two: {
        name: "Mislead:",
        dis: {
          Default:
            "40% Shield to all allies. Apply Invisibility (2T) on the primary target and Damage to a single random adversary.",
          Legendary: "Apply True Sight (2T) on the target.",
        },
      },
      three: {
        name: "Team Focus:",
        dis: {
          Default:
            "Damage to all enemies and apply Taunt (2T) to the primary target. Double damage if Spoiler is Invisible.",
          Legendary:
            "Call ally to assist. Additional assist if Spoiler is invisible.",
        },
      },
      four: {
        name: "Shadow Steps:",
        dis: {
          Default:
            "Passive: 75% Chance to apply 3 Int Ups (1T) and 50% Turn Meter Up on a random ally at the end of Spoiler's turn.",
          Legendary:
            "All attacks from Spoiler Ignore Shields if she is Invisible.",
        },
      },
      five: {
        name: "Alert:",
        dis: {
          Default:
            "Passive: 60% Chance to gain Invisibility (1T) at the end of her turn.",
          Legendary: "Also, 50% Chance to gain Awareness.",
        },
      },
    },
    CombatEffects: [
      "Awareness",
      "Intelligence Up",
      "Invisibility",
      "True Sight",
      "Silence",
      "Call Assist",
      "Apply Shield",
      "Ignore Shield",
      "Apply Taunt to enemy and Turn Meter Up",
    ],
    Affiliations: "Bat Family",
    id: "163",
    affinity: "Physical",
  },
  {
    tier: "B",
    name: "Superwoman",
    subName: "Earth 3 Lois Lane",
    SPD: "105",
    HP: "29255",
    STR: "2600",
    INT: "1377",
    AG: "2265",
    STAM: "2166",
    CRC: "47%",
    CRV: "256%",
    LegendaryOrder: "5,4],2,1,3",
    GearSet: "Physical Striker",
    powers: {
      one: {
        name: "Treachery:",
        dis: {
          Default:
            "Damage to a single enemy. If the target is afflicted by Silence, Apply 3 Crit Chance Ups (2T) and 3 Crit Damage Ups (2T) on herself.",
          Legendary:
            "If the target is afflicted by Silence, 80% Chance to apply 3 Hit Chance Downs (1T).",
        },
      },
      two: {
        name: "Submission:",
        dis: {
          Default:
            "Damage to all enemies. Gains 4 Empowered Strength Ups (2T) and apply Silence (2T) to the primary enemy.",
          Legendary: "Applies 2 Intelligence Down (2T) on the main target.",
        },
      },
      three: {
        name: "Toxic Love:",
        dis: {
          Default:
            "Damage to a single enemy. Apply Silence (2T) on a random target.",
          Legendary:
            "If Superwoman has Empowered Strength Up, apply 3 Hit Chance Downs (2T) to the target.",
        },
      },
      four: {
        name: "Narcissism:",
        dis: {
          Default:
            "Passive: At the beginning of her turn, gain 3 Crit Chance Up (2T).",
          Legendary: "Superwoman starts the battle with Damage Immunity (1T).",
        },
      },
      five: {
        name: "Mother Knows Best:",
        dis: {
          Default:
            "Passive: Every time Superwoman deals critical damage, Apply Silence (1T) on the target.",
          Legendary: "Gain 1 Permanent Empowered Strength Up.",
        },
      },
    },
    CombatEffects: [
      "Crit Chance Up",
      "Crit Damage Up",
      "Damage Immunity",
      "Empowered Strength Up",
      "Hit Chance Down",
      "Intelligence Down",
      "Silence and Start of Battle Ability",
    ],
    Affiliations: "Crime Syndicate",
    id: "151",
    affinity: "Physical",
  },
  {
    tier: "B",
    name: "Talia Al Ghul",
    subName: "Daughter of the Demon",
    SPD: "119",
    HP: "29954",
    STR: "2652",
    INT: "1586",
    AG: "2282",
    STAM: "2235",
    CRC: "47%",
    CRV: "256%",
    LegendaryOrder: "2,5,4,3,1 (2022 rework)",
    GearSet: "Physical Striker",
    powers: {
      one: {
        name: "Leg Sweep:",
        dis: {
          Default:
            "Damage to an enemy. Gain 4 Evasion Up (2T) and purge 2 buffs.",
          Legendary: "100% additional damage if target is bleeding.",
        },
      },
      two: {
        name: "Precision Shot:",
        dis: {
          Default:
            "Damage to an Enemy and apply 5 Bleed (3T). Apply 2 additional Bleed (3T) if Talia has 1+ Evasion Up.",
          Legendary: "Always steal 2 Buffs from target.",
        },
      },
      three: {
        name: "Blade Dance:",
        dis: {
          Default:
            "Heavy Damage to an enemy. 75% chance to use Leg Sweep if target is bleeding.",
          Legendary: "Always apply Heal Immunity (2T) to target.",
        },
      },
      four: {
        name: "Hemorrhage:",
        dis: {
          Default:
            "When an attack misses Talia, apply 2 Bleed (3T) to attacker. Also gain 50% Turn Meter Up.",
          Legendary:
            "50% Chance to apply 3 Bleed (3T) to an enemy each time they get a buff on their turn.",
        },
      },
      five: {
        name: "Blood Scent:",
        dis: {
          Default:
            "75% chance to gain 2 Evasion Up (2T) each time Talia applies 1 or more Bleed to an enemy.",
          Legendary:
            "At the end of an enemy's turn, if they have 8+ Bleeds, execute Blade Dance against them.",
        },
      },
    },
    CombatEffects: [
      "Evasion Up",
      "Bleeds",
      "Heal Immunity",
      "Buff Stealing",
      "Out of Turn Attacks",
      "Turn Meter Up and Purge Buffs",
    ],
    Affiliations: "League of Assassins",
    id: "122",
    affinity: "Physical",
  },
  {
    tier: "B",
    name: "Ursa",
    subName: "Kryptonian Officer",
    SPD: "116",
    HP: "30128",
    STR: "2565",
    INT: "1673",
    AG: "2265",
    STAM: "2253",
    CRC: "47%",
    CRV: "256%",
    LegendaryOrder: "3,4,5],1,2",
    GearSet: "Physical Striker",
    powers: {
      one: {
        name: "Kneel for Execution!:",
        dis: {
          Default: "Damage to a single enemy. Can't miss.",
          Legendary: "Apply permanent Intelligence Down.",
        },
      },
      two: {
        name: "Enhanced Vision:",
        dis: {
          Default:
            "Gain True Sight (4T) and 2 Awareness. Apply 2 Hit Chance Up (2T) to a random ally.",
          Legendary: "Gain permanent Empowered Agility Up and Awareness.",
        },
      },
      three: {
        name: "Killing, My Favourite Part:",
        dis: {
          Default: "Heavy damage to a single enemy.",
          Legendary: "Damage dealt ignores shields and Awareness.",
        },
      },
      four: {
        name: "I am The Weapon:",
        dis: {
          Default:
            "Passive: Gain Empowered Strength Up (5T) at the beginning of her turn.",
          Legendary: "All damage dealt to male enemies is increased by 50%.",
        },
      },
      five: {
        name: "Phantom Zone Dweller:",
        dis: {
          Default:
            "Passive: Gain permanent Empowered Stamina Up at the beginning of her turn.",
          Legendary:
            "Gain permanent Stun Immunity at the start of the battle. Cannot be purged.",
        },
      },
    },
    CombatEffects: [
      "Awareness",
      "Hit Chance Up",
      "Stun Immunity",
      "True Sight",
      "Empowered Strength Up",
      "Empowered Agility Up",
      "Empowered Stamina Up",
      "Intelligence Down",
      "Can't Miss",
      "Ignore Shield and Ignore Awareness",
    ],
    Affiliations: "Kryptonian",
    id: "180",
    affinity: "Physical",
  },
  {
    tier: "B",
    name: "Aquagirl",
    subName: "Tula",
    SPD: "110",
    HP: "27415",
    STR: "1602",
    INT: "2901",
    AG: "2113",
    STAM: "2162",
    CRC: "35%",
    CRV: "228%",
    LegendaryOrder: "1,3],4,2,5",
    GearSet: "Special Striker",
    powers: {
      one: {
        name: "Double Hydro Blast:",
        dis: {
          Default:
            "Special Damage with first shot and apply 2 Str Down (1T). Special Damage with second shot and apply 2 Int Down (1T).",
          Legendary: "Apply 15% Turn Meter Down on each shot",
        },
      },
      two: {
        name: "Deep Sea Protection:",
        dis: {
          Default:
            "Aquagirl gains Damage Immunity (1T) and applies 30% Shield and 4 Mends (3T) to all allies.",
          Legendary: "Call Assist on a random teammate",
        },
      },
      three: {
        name: "Hydro Bomb:",
        dis: {
          Default:
            "Special Damage to all enemies. Can't miss if one ally is mending if one ally is mending.",
          Legendary: "Apply 5% extra damage per Mend on Aquagirl (Max 50%).",
        },
      },
      four: {
        name: "Atlantean Sorcery:",
        dis: {
          Default:
            "Passive: If Aquagirl's HP is below 50%, gain 3 Mends (3T) at the start of her turn.",
          Legendary: "If Aquagirl HP is full, she gains 2 Int Ups (2T).",
        },
      },
      five: {
        name: "The Drift:",
        dis: {
          Default:
            "Passive: If an ally recieves Mends, 75% Chance for Aquagirl to gain 5 Int Ups (2T).",
          Legendary: "Also apply 20% Shields on the single target",
        },
      },
    },
    CombatEffects: [
      "Damage Immunity",
      "Intelligence Up",
      "Mends",
      "Intelligence Down",
      "Strength Down",
      "Call Assist",
      "Can't Miss",
      "Apply Shield and Turn Meter Down",
    ],
    Affiliations: "Atlantean",
    id: "169",
    affinity: "Mystical",
  },
  {
    tier: "B",
    name: "Aqualad",
    subName: "Kaldur'ahm",
    SPD: "129",
    HP: "30665",
    STR: "2606",
    INT: "1790",
    AG: "2019",
    STAM: "2432",
    CRC: "25%",
    CRV: "228%",
    LegendaryOrder:
      "2,4],3,1),5 (heal support) / 3,1],4,2),5 (Bleed build) L4 ideal",
    GearSet: "Physical Support",
    powers: {
      one: {
        name: "Hydro-Stomp:",
        dis: {
          Default:
            "Damage to an enemy. Apply 2 Strength Down (2T). Apply 2 additional Strength Down (2T) per each of the enemy's Int Ups (Max 9).",
          Legendary: "Also apply 3 Bleeds (3T).",
        },
      },
      two: {
        name: "Atlantean Bulwark:",
        dis: {
          Default:
            "Apply Damage Immunity (1T) and a 17% True Heal to a friendly target.",
          Legendary: "50% Chance to double the healing done.",
        },
      },
      three: {
        name: "Water-Bearer Mayhem:",
        dis: {
          Default:
            "Heavy Damage to an enemy and apply 5 Bleeds. Turn up to 5 Strength Up into Strength Down (2T). Remove all Int Ups from the target.",
          Legendary: "Apply 5 additional Bleed (3T).",
        },
      },
      four: {
        name: "Hyde Legacy:",
        dis: {
          Default:
            "Passive: 60% chance to Reduce Atlantean Bulwark's cooldown to 0 at the end of his turn.",
          Legendary:
            "50% Chance to also turn all Bleeds into Permanent Bleeds.",
        },
      },
      five: {
        name: "Refreshing Waters:",
        dis: {
          Default:
            "Passive: At the end of each ally's turn, apply a 3 Mends if that ally is under 60% health.",
          Legendary:
            "Apply Damage Immunity (1T) at the beginning of each teammate's turn if that teammate is under 30% health.",
        },
      },
    },
    CombatEffects: [
      "Damage Immunity",
      "Bleeds",
      "Strength Down",
      "Cooldown Effects",
      "Buff to Debuff conversion",
      "Heal and Purge Buffs",
    ],
    Affiliations: "Atlantean",
    id: "2",
    affinity: "Mystical",
  },
  {
    tier: "B",
    name: "Black Adam",
    subName: "Khem-Adam",
    SPD: "108",
    HP: "27615",
    STR: "1578",
    INT: "2914",
    AG: "2100",
    STAM: "2182",
    CRC: "35%",
    CRV: "228%",
    LegendaryOrder: "2,5,1,4,3 (updated for the last time, I promise!)",
    GearSet: "Special Striker",
    powers: {
      one: {
        name: "Lightning Strike:",
        dis: {
          Default:
            "Special Damage to an enemy. 40% chance to gain 50% Turn Meter Up.",
          Legendary: "+20% chance to gain Turn Meter Up.",
        },
      },
      two: {
        name: "SHAZAM!:",
        dis: {
          Default:
            "Special Damage to all enemies. +20% Special damage per dead enemy.",
          Legendary:
            "Use Lightning Strike on random target if any enemy's HP is below 50%.",
        },
      },
      three: {
        name: "Khandaq Storm:",
        dis: {
          Default:
            "Heavy Special Damage and purge 5 buffs from an enemy, Cooldown +1 on SHAZAM!.",
          Legendary: "+75% damage if target's HP is below 50%.",
        },
      },
      four: {
        name: "Stamina of Shu:",
        dis: {
          Default:
            "Passive Ability: Gain 60% Turn Meter Up when an enemy is killed.",
          Legendary: "When Black Adam kills an enemy, gain Damage Immunity.",
        },
      },
      five: {
        name: "Courage of Mehen:",
        dis: {
          Default:
            "Passive Ability: When Black Adam kills an enemy, gain 2 permanent Crit Chance Ups.",
          Legendary:
            "When Black Adam kills an enemy, reset Cooldown of SHAZAM!",
        },
      },
    },
    CombatEffects: ["Crit Chance Up", "Turn Meter Up and Purge Buffs"],
    Affiliations: "Secret Society of Super-Villains and Shazam Family",
    id: "19",
    affinity: "Mystical",
  },
  {
    tier: "B",
    name: "Circe",
    subName: "Goddess of Witchcraft",
    SPD: "121",
    HP: "26677",
    STR: "1479",
    INT: "3025",
    AG: "2190",
    STAM: "2088",
    CRC: "35%",
    CRV: "228%",
    LegendaryOrder: "3,5,2,4,1",
    GearSet: "Special Striker",
    powers: {
      one: {
        name: "Magic Blast:",
        dis: {
          Default: "Special Damage to an enemy. Apply 4 Int Down (2T).",
          Legendary: "60% Chance to Silence (1T) the target.",
        },
      },
      two: {
        name: "Vitae Flask:",
        dis: {
          Default: "Gain a 70% True Heal.",
          Legendary: "50% Chance to gain Damage Immunity (1T).",
        },
      },
      three: {
        name: "Runes of Destruction:",
        dis: {
          Default: "Special Damage to all enemies. Purge 2 buffs.",
          Legendary: "Also apply 25% Turn Meter Down.",
        },
      },
      four: {
        name: "Necromancy:",
        dis: {
          Default:
            "At the end of her turn revive all dead teammates, with 10% HP and a permanent, unpurgeable Enrage.",
          Legendary:
            "50% chance to also apply Damage Immunity (1T) to revived teammates.",
        },
      },
      five: {
        name: "Charming Aura:",
        dis: {
          Default:
            "All of Circe's attacks have a 30% chance to Stun (1T) the target.",
          Legendary:
            "Use Vitae Flask once when dropping under 20% health for the first time.",
        },
      },
    },
    CombatEffects: [
      "Damage Immunity",
      "Enrage",
      "Intelligence Down",
      "Silence",
      "Stun",
      "Revive",
      "Heal",
      "Turn Meter Down and Purge Buffs",
    ],
    Affiliations: "Greek Gods",
    id: "134",
    affinity: "Mystical",
  },
  {
    tier: "B",
    name: "Deadman",
    subName: "Wandering Spirit",
    SPD: "115",
    HP: "28069",
    STR: "1447",
    INT: "2844",
    AG: "2255",
    STAM: "2227",
    CRC: "35%",
    CRV: "228%",
    LegendaryOrder: "3],2,4,1,5",
    GearSet: "Special Striker",
    powers: {
      one: {
        name: "Possession:",
        dis: {
          Default:
            "Special Damage to an enemy and purge 2 buffs. Also apply 15% Turn Meter Down.",
          Legendary: "20% Chance to Stun the target.",
        },
      },
      two: {
        name: "Incorporeal:",
        dis: {
          Default:
            "Passive Ability: Start battle with permanent unpurgeable Invisibility. 50% Chance to also start battle with Death Immunity (2T).",
          Legendary: "Start battle with 2 permanent Intelligence Up (Always).",
        },
      },
      three: {
        name: "Sorry to Bother:",
        dis: {
          Default:
            "Give 85% Crit Chance (until end of turn) and Call Assist from an ally on a random enemy.",
          Legendary: "70% Chance to call assist again.",
        },
      },
      four: {
        name: "I Know Your Plan:",
        dis: {
          Default:
            "Steal up to 3 buffs from the target and apply them to all allies. If target has no buffs, apply Stun (1T) instead. Also apply 15% Turn Meter Up to all allies.",
          Legendary: "Also gain 3 Intelligence Up (2T).",
        },
      },
      five: {
        name: "Tip the Scales:",
        dis: {
          Default:
            "Passive Ability: When an enemy dies, 70% Chance to gain 4 Intelligence Up (2T).",
          Legendary: "If a teammate dies gain 40% Turn Meter Up.",
        },
      },
    },
    CombatEffects: [
      "Death Immunity",
      "Intelligence Up",
      "Invisibility",
      "Stun",
      "Buff Stealing",
      "Call Assist",
      "Turn Meter Up",
      "Turn Meter Down and Purge Buffs",
    ],
    Affiliations: "Justice League Dark",
    id: "138",
    affinity: "Mystical",
  },
  {
    tier: "B",
    name: "Donna Troy",
    subName: "The First Wonder Girl",
    SPD: "110",
    HP: "40661",
    STR: "2548",
    INT: "1622",
    AG: "1806",
    STAM: "2876",
    CRC: "22%",
    CRV: "228%",
    LegendaryOrder: "5,2,4,1,3",
    GearSet: "Physical Tank",
    powers: {
      one: {
        name: "Roundhouse Kick:",
        dis: {
          Default: "Damage to an enemy. 20% chance to Stun.",
          Legendary: "35% chance to use Roundhouse Kick again",
        },
      },
      two: {
        name: "Amazonian Challenge:",
        dis: {
          Default:
            "Gain Taunt and apply 1 Awareness (Always) to the whole team.",
          Legendary: "Use Amazonian Challenge at the beginning of battle.",
        },
      },
      three: {
        name: "Downwards Strike:",
        dis: {
          Default: "Damage to an enemy. 60% chance to Stun.",
          Legendary: "+30% chance to Stun if all allies have 4+ buffs",
        },
      },
      four: {
        name: "Swift Retribution:",
        dis: {
          Default:
            "Each time an enemy damages an ally, Donna Troy gains 20% Turn Meter.",
          Legendary:
            "40% chance to counter with Roundhouse Kick when Donna Troy gets hit.",
        },
      },
      five: {
        name: "Multiverse Presence:",
        dis: {
          Default:
            "At the end of each teammate's turn, if teammate has 6+ buffs, purge 2 buffs, apply 20% Turn Meter and reduce Cooldown by 1 on all abilities.",
          Legendary: "Also apply 1 Awareness (Always).",
        },
      },
    },
    CombatEffects: [
      "Awareness",
      "Taunt",
      "Stun",
      "Cooldown Effects",
      "Counter Attacks",
      "Turn Meter Up and Start of Battle Ability",
    ],
    Affiliations: "Amazons and Titans",
    id: "43",
    affinity: "Mystical",
  },
  {
    tier: "B",
    name: "Eclipso",
    subName: "Spirit of Wrath",
    SPD: "120",
    HP: "27666",
    STR: "1566",
    INT: "2764",
    AG: "2258",
    STAM: "2187",
    CRC: "35%",
    CRV: "228%",
    LegendaryOrder: "2,3,1,4,5",
    GearSet: "Special Striker",
    powers: {
      one: {
        name: "Fist of Wrath:",
        dis: {
          Default:
            "Special Damage to an enemy. 10% extra damage per Hit Chance Down on target (Max 10).",
          Legendary: "Strike twice if Eclipso has Evasion Up.",
        },
      },
      two: {
        name: "Eclipsed:",
        dis: {
          Default:
            "Gain Taunt and 5 Evasion Up. 30% chance to Enrage each enemy.",
          Legendary:
            "Eclipso uses Eclipsed at the beginning of battle. Increase Cooldown of Eclipsed by 2.",
        },
      },
      three: {
        name: "Heart of Darkness:",
        dis: {
          Default:
            "Heavy Special Damage and apply 4 Hit Chance Down to an enemy.",
          Legendary: "Always apply 2 Hit Chance Down to all enemies.",
        },
      },
      four: {
        name: "Gotcha!:",
        dis: {
          Default:
            "Passive Ability: 75% chance to use Fist of Wrath on enemies when Eclipso evades their attack.",
          Legendary:
            "25% extra chance to use Fist of Wrath on enemies when Eclipso evades their attack.",
        },
      },
      five: {
        name: "Veil of Darkness:",
        dis: {
          Default:
            "Passive Ability: 75% chance to apply 3 Hit Chance Down to enemies that deal damage to a teammate when Eclipso is Taunting.",
          Legendary:
            "When Veil of Darkness activates, reduce Cooldown of Heart of Darkness by 1.",
        },
      },
    },
    CombatEffects: [
      "Evasion Up",
      "Taunt",
      "Enrage",
      "Hit Chance Down",
      "Counter Attacks and Start of Battle Ability",
    ],
    Affiliations: "",
    id: "45",
    affinity: "Mystical",
  },
  {
    tier: "B",
    name: "Enchantress",
    subName: "Possessed Witch",
    SPD: "102",
    HP: "26543",
    STR: "1585",
    INT: "2970",
    AG: "2148",
    STAM: "2074",
    CRC: "35%",
    CRV: "228%",
    LegendaryOrder: "1,3,5,2,4 (2021 rework)",
    GearSet: "Special Striker",
    powers: {
      one: {
        name: "Banishing Blast:",
        dis: {
          Default:
            "Special damage to an enemy. 75% chance to apply Silence (1T).",
          Legendary: "75% chance to use Verse of Vitality.",
        },
      },
      two: {
        name: "Verse of Vitality:",
        dis: {
          Default:
            "Medium Overheal to all allies. 75% Chance to apply Damage Immunity (1T) to all allies.",
          Legendary: "Move up to 2 Debuffs from each ally to random enemies.",
        },
      },
      three: {
        name: "Mystical Maelstrom:",
        dis: {
          Default:
            "Special Damage to all enemies and apply 3 Strength Down (2T) and 3 Int Downs (2T) to all enemies.",
          Legendary:
            "75% chance to use Mystical Maelstrom when Enchantress healed.",
        },
      },
      four: {
        name: "Speak 'Enchantress':",
        dis: {
          Default:
            "Passive: 90% chance to gain a light Overheal whenever ally is healed.",
          Legendary: "Gain 15% Turn Meter.",
        },
      },
      five: {
        name: "Shadowpact Defender:",
        dis: {
          Default:
            "Leader: Everytime a teammate receives damage 75% chance to apply a Medium Overheal on that teammate.",
          Legendary: "Uses Verse of Vitality at the start of battle.",
        },
      },
    },
    CombatEffects: [
      "Damage Immunity",
      "Intelligence Down",
      "Silence",
      "Strength Down",
      "Debuff Transfer",
      "Heal",
      "Turn Meter Up",
      "Start of Battle Ability and Self Heal",
    ],
    Affiliations: "Suicide Squad",
    id: "46",
    affinity: "Mystical",
  },
  {
    tier: "B",
    name: "Freddy Shazam",
    subName: "Earth's Mightiest Boy",
    SPD: "118",
    HP: "31997",
    STR: "2760",
    INT: "1698",
    AG: "2168",
    STAM: "2565",
    CRC: "25%",
    CRV: "228%",
    LegendaryOrder: "3,2,5,1,4",
    GearSet: "Physical Support",
    powers: {
      one: {
        name: "Flip Punch:",
        dis: {
          Default: "Damage and gain 4 Affinity Power Ups (2T).",
          Legendary:
            "50% chance to Apply 4 Affinity Power Downs (1T) to the target.",
        },
      },
      two: {
        name: "Shazam!:",
        dis: {
          Default:
            "Damage and apply 4 Affinity Resistance Downs (2T) to all enemies.",
          Legendary: "Apply 4 affinity resistance ups (2T) to all allies.",
        },
      },
      three: {
        name: "Fury of Hercules:",
        dis: {
          Default:
            "Heavy Damage and apply 4 Affinity Power Downs (2T) to an enemy.",
          Legendary: "Apply 4 Affinity Power Ups (2T) to all allies.",
        },
      },
      four: {
        name: "Retaliation:",
        dis: {
          Default:
            "When an enemy deals a Critical Hit, 50% chance for Freddy Shazam to use Flip Punch.",
          Legendary: "Before using Flip Punch, apply Heal Immunity (1T).",
        },
      },
      five: {
        name: "Equalization:",
        dis: {
          Default:
            "When a Physical enemy deals damage to Freddy Shazam, purge shields from all enemies.",
          Legendary:
            "When an energy enemy deals damage to Freddy, purge all awareness from all enemies.",
        },
      },
    },
    CombatEffects: [
      "Affinity Power Up",
      "Affinity Resist Up",
      "Affinity Resist Down",
      "Heal Immunity",
      "Affinity Power Down",
      "Out of Turn Attacks",
      "Remove Shield and Purge Awareness",
    ],
    Affiliations: "Shazam Family",
    id: "50",
    affinity: "Mystical",
  },
  {
    tier: "B",
    name: "Granny Goodness",
    subName: "The Ruthless Hound",
    SPD: "110",
    HP: "37640",
    STR: "1559",
    INT: "2744",
    AG: "1936",
    STAM: "2699",
    CRC: "15%",
    CRV: "178%",
    LegendaryOrder: "3,5,1],4,2",
    GearSet: "Special Tank",
    powers: {
      one: {
        name: "Picana:",
        dis: {
          Default:
            "Special Damage and 75% chance to apply Silence that ignores immunities (1T) to a single enemy.",
          Legendary: "If the target is already Silenced, apply Stun (1T).",
        },
      },
      two: {
        name: "Pendulum:",
        dis: {
          Default:
            "Special Damage and 75% chance to apply Enrage (1T) to all enemies.",
          Legendary:
            "Apply Bleeds (1T) to all enemies if Granny Goodness' HP is under 50%.",
        },
      },
      three: {
        name: "Finishing Touch:",
        dis: {
          Default:
            "Heavy Special Damage to a single enemy and gain Taunt (2T).",
          Legendary: "If the target is at 100% HP, apply double damage.",
        },
      },
      four: {
        name: "Schandmantel:",
        dis: {
          Default:
            "Passive: 75% chance to apply 5 Strength Downs (1T) to the attacker when Granny Goodness is hit.",
          Legendary: "Also apply 5 Speed Downs (2T).",
        },
      },
      five: {
        name: "Shrew's fiddle:",
        dis: {
          Default:
            "Passive: Apply 5% True Damage on a random enemy and gain 5% True Heal at the end of her turn.",
          Legendary: "Also apply Silence (2T) to the target.",
        },
      },
    },
    CombatEffects: [
      "Taunt",
      "Bleeds",
      "Enrage",
      "Silence",
      "Speed Down",
      "Strength Down",
      "Stun",
      "True Damage",
      "Self Heal and Ignore Immunities",
    ],
    Affiliations: "Apokolips",
    id: "182",
    affinity: "Mystical",
  },
  {
    tier: "B",
    name: "Jericho",
    subName: "Joseph Wilson",
    SPD: "108",
    HP: "25979",
    STR: "1668",
    INT: "2885",
    AG: "2208",
    STAM: "2018",
    CRC: "35%",
    CRV: "228%",
    LegendaryOrder:
      "2,1],3,5,4 (silence based teams you may wish to move his 5 up)",
    GearSet: "Special Striker",
    powers: {
      one: {
        name: "Moral Exception:",
        dis: {
          Default:
            "Special Damage to a single enemy. Also, apply Silence (1T).",
          Legendary: "50% Chance to apply Stun (1T).",
        },
      },
      two: {
        name: "Protector:",
        dis: {
          Default:
            "Apply Silence Immunity (2T) and 25% Shield on all allies and also apply Invisibility (2T) on self.",
          Legendary: "Apply Awareness to all allies.",
        },
      },
      three: {
        name: "Sorry!:",
        dis: {
          Default:
            "Special Damage to a single target and apply Stun (1T). Also, Call Assist from a random teammate on the target.",
          Legendary:
            "100% Additional Special Damage if the target is silenced.",
        },
      },
      four: {
        name: "Time Out:",
        dis: {
          Default: "60% Chance to gain 5 mends (3T) at the end of his turn.",
          Legendary: "Also gain Silence Immunity (2T).",
        },
      },
      five: {
        name: "Hand Signals:",
        dis: {
          Default: "If an ally is attacked, apply Taunt on the attacker (1T).",
          Legendary:
            "Apply Silence (1T) to a random enemy at the start of the battle.",
        },
      },
    },
    CombatEffects: [
      "Awareness",
      "Invisibility",
      "Mends",
      "Silence Immunity",
      "Silence",
      "Stun",
      "Call Assist",
      "Apply Shield",
      "Apply Taunt to enemy and Start of Battle Ability",
    ],
    Affiliations: "Titans",
    id: "158",
    affinity: "Mystical",
  },
  {
    tier: "B",
    name: "John Constantine",
    subName: "Hellblazer",
    SPD: "107",
    HP: "25115",
    STR: "1088",
    INT: "3014",
    AG: "2279",
    STAM: "1932",
    CRC: "35%",
    CRV: "228%",
    LegendaryOrder: "1,2,3,5,4",
    GearSet: "Special Striker",
    powers: {
      one: {
        name: "Sleight of Hand:",
        dis: {
          Default:
            "Always apply 2 Intelligence Down, 3 Bleed and 60% chance to Enrage an enemy.",
          Legendary:
            "Call Assist from random ally if Constantine is Invisible.",
        },
      },
      two: {
        name: "Rakish Charm:",
        dis: {
          Default:
            "Apply Taunt to ally and call their Assist, Constantine gains 1 Awareness.",
          Legendary:
            "40% chance to call second Assist. +40% chance if any enemy is overhealed.",
        },
      },
      three: {
        name: "Hellblazer:",
        dis: {
          Default:
            "Special Damage to an Enemy, +12% Damage per debuff on target (Max 10), Damage +45% to overhealed targets.",
          Legendary:
            "8% chance per debuff on target (Max 10) use again on random target.",
        },
      },
      four: {
        name: "Lurking in Shadows:",
        dis: {
          Default:
            "Passive ability: Start battle with Invisibility, 40% chance to gain Invisibility at the start of each enemy turn.",
          Legendary: "Apply 2 Intelligence Down on enemy.",
        },
      },
      five: {
        name: "Tough Luck, Mate:",
        dis: {
          Default:
            "Team Leader: Whenever an ally dies, Constantine gains Invisibility, and applies 4 Intelligence Down, 2 Speed Down and -30% Turn Meter to enemy team.",
          Legendary:
            "Gain 2 Awareness and reset all of Constantine's cooldowns when an ally dies.",
        },
      },
    },
    CombatEffects: [
      "Invisibility",
      "Awareness",
      "Bleeds",
      "Enrage",
      "Intelligence Down",
      "Speed Down",
      "Call Assist",
      "Cooldown Effects",
      "Apply Taunt to Ally",
      "Start of Battle Ability and Turn Meter Down",
    ],
    Affiliations: "Justice League Dark",
    id: "67",
    affinity: "Mystical",
  },
  {
    tier: "B",
    name: "Mera",
    subName: "Queen of Atlantis",
    SPD: "109",
    HP: "29283",
    STR: "1567",
    INT: "2993",
    AG: "2217",
    STAM: "2348",
    CRC: "35%",
    CRV: "228%",
    LegendaryOrder: "2,1,3,5,4 (updated for rework)",
    GearSet: "Special Striker",
    powers: {
      one: {
        name: "Hydrokinesis :",
        dis: {
          Default: "Special damage to an enemy, gain 5 Mends.",
          Legendary: "Call Assist if there are 10+ Mends in Mera's team.",
        },
      },
      two: {
        name: "Favor of the Sea:",
        dis: {
          Default: "Apply 8 Mends and light heal to target.",
          Legendary: "Apply Damage Immunity.",
        },
      },
      three: {
        name: "Ocean's Fury:",
        dis: {
          Default:
            "Special Damage to an enemy, 3% increased damage per mend on Mera's team (max 60%).",
          Legendary: "Apply Heal Immunity and 20% Turn Meter Down.",
        },
      },
      four: {
        name: "Ebb and Flow:",
        dis: {
          Default:
            "Passive ability: 100% chance to apply 2 Mends to team if 2 or more allies take damage from a single attack. +1 Mend for each extra ally taking damage.",
          Legendary: "+5 mend on random teammates.",
        },
      },
      five: {
        name: "Slipstream:",
        dis: {
          Default:
            "Passive ability: 100% chance to apply 2 Agility Ups and 2 Affinity Resist Ups to teammate when they heal from Mend.",
          Legendary: "Apply 15% turn meter up.",
        },
      },
    },
    CombatEffects: [
      "Affinity Resist Up",
      "Agility Up",
      "Damage Immunity",
      "Mends",
      "Heal Immunity",
      "Call Assist",
      "Heal",
      "Turn Meter Up and Turn Meter Down",
    ],
    Affiliations: "Atlantean",
    id: "83",
    affinity: "Mystical",
  },
  {
    tier: "B",
    name: "Ra's Al Ghul",
    subName: "Head of the Demon",
    SPD: "101",
    HP: "37519",
    STR: "2548",
    INT: "1657",
    AG: "1736",
    STAM: "2562",
    CRC: "22%",
    CRV: "228%",
    LegendaryOrder: "1,5],3,2,4 (Tewtytron likes 2 last as Ra’s expert)",
    GearSet: "Physical Tank",
    powers: {
      one: {
        name: "Demon's Slash:",
        dis: {
          Default:
            "Damage to an enemy, apply 2 Disease (3T) to the target. Apply 2 additional Disease (3T) if the target is Silenced.",
          Legendary: "Gain 15% True Heal.",
        },
      },
      two: {
        name: "Forgotten-Style Jab:",
        dis: {
          Default:
            "Damage to an enemy and apply Silence (2T). Gain 50% Turn Meter Up if the target has Disease.",
          Legendary:
            "50% Turn Meter Up and reset the cooldown on Forgotten-Style Jab if target is killed.",
        },
      },
      three: {
        name: "Al Ghul Legacy:",
        dis: {
          Default:
            "Heavy Damage to an enemy, ignore Shields and apply 25% Turn Meter Down if the target is Silenced.",
          Legendary: "+100% Damage and +60% Crit Chance if target is Silenced.",
        },
      },
      four: {
        name: "Lazarus Pit:",
        dis: {
          Default:
            "Passive Ability: 50% chance to Revive with 50% health. -15% chance each time.",
          Legendary: "Also gain Death Immunity (1T).",
        },
      },
      five: {
        name: "League of Assassins:",
        dis: {
          Default:
            "Team Leader: When an ally deals damage, 75% Chance to use Demon Slash on the target.",
          Legendary: "Also apply Silence (1T) on the target.",
        },
      },
    },
    CombatEffects: [
      "Death Immunity",
      "Disease",
      "Silence",
      "Cooldown Effects",
      "Out of Turn Attacks",
      "Revive",
      "Ignore Shield",
      "Turn Meter Up",
      "Turn Meter Down and Self Heal",
    ],
    Affiliations: "League of Assassins",
    id: "96",
    affinity: "Mystical",
  },
  {
    tier: "B",
    name: "Raven",
    subName: "Daughter of Demons",
    SPD: "89",
    HP: "31001",
    STR: "1292",
    INT: "3184",
    AG: "2134",
    STAM: "2520",
    CRC: "35%",
    CRV: "228%",
    LegendaryOrder: "2,5,4),3,1 (2022 rework)",
    GearSet: "Special Striker",
    powers: {
      one: {
        name: "Shadow Blast:",
        dis: {
          Default:
            "Heavy Special Damage and apply 5 Affinity Power Downs (2T) to an enemy.",
          Legendary:
            "If Raven is debuffed, +25% damage. If not buffed or debuffed, 50% chance Raven gains 1 Awareness",
        },
      },
      two: {
        name: "Empathic Healing:",
        dis: {
          Default: "Overheal on all allies. Raven takes 5% True Damage.",
          Legendary:
            "Purge 6 debuffs from primary target. Overheal increased +15% per debuff purged. Raven acquires 4 random debuffs purged from target.",
        },
      },
      three: {
        name: "Daughter of Trigon:",
        dis: {
          Default:
            "Heavy Special Damage and apply 4 Int Downs (2T) to all enemies.",
          Legendary:
            "Can't Miss. Purge 10 buffs if primary target has Evasion Up.",
        },
      },
      four: {
        name: "Demon's Acumen:",
        dis: {
          Default:
            "Passive: 75% chance to deal Special Damage to enemies that damage Raven.",
          Legendary:
            "Start combat with Death Immunity (2T). If an ally is attacked, 25% chance to gain Death Immunity (1T) at the end of her turn.",
        },
      },
      five: {
        name: "Weaver of Darkness:",
        dis: {
          Default:
            "Passive: 75% chance to call Empathic Healing at the end of the turn.",
          Legendary: "All enemies gain -45% Critical Chance",
        },
      },
    },
    CombatEffects: [
      "Awareness",
      "Death Immunity",
      "Intelligence Down",
      "Affinity Power Down",
      "Can't Miss",
      "Counter Attacks",
      "Heal",
      "Purge Buffs and Purge Debuffs",
    ],
    Affiliations: "Demonic and Titans",
    id: "98",
    affinity: "Mystical",
  },
  {
    tier: "B",
    name: "Red Tornado",
    subName: "The Tornado Champion",
    SPD: "116",
    HP: "29833",
    STR: "2610",
    INT: "1610",
    AG: "2273",
    STAM: "2448",
    CRC: "25%",
    CRV: "228%",
    LegendaryOrder: "5,1,2,3],4 (early testing)",
    GearSet: "Physical Support",
    powers: {
      one: {
        name: "Aerokinesis Strike:",
        dis: {
          Default: "Damage and apply 4 Speed Downs (2T) on target.",
          Legendary: "Apply 2 Speed Ups (2T) to all allies.",
        },
      },
      two: {
        name: "Cyclone Field:",
        dis: {
          Default: "Apply 4 Speed Ups (2T) and 25% Shield to all allies.",
          Legendary: "Call Assist from primary target on a random enemy.",
        },
      },
      three: {
        name: "Tornado Landing:",
        dis: {
          Default:
            "Damage to all enemies and apply 30% additional damage if Red Tornado has 3 or more Speed Ups.",
          Legendary: "Apply 2 Speed Downs (2T) to the targets",
        },
      },
      four: {
        name: "Winds of Change:",
        dis: {
          Default:
            "Passive: At the beginning of each Red Tornado turn if he has 3 or more Speed Ups gain 2 Stamina Ups (2T).",
          Legendary: "Also gain a Medium Overheal",
        },
      },
      five: {
        name: "Tornado Champion:",
        dis: {
          Default:
            "Passive: Each time Red Tornado receives damage 75% Chance to gain 3 Speed Ups (2T).",
          Legendary: "Use Aerokinesis Strike on the attacker.",
        },
      },
    },
    CombatEffects: [
      "Speed Up",
      "Stamina Up",
      "Speed Down",
      "Call Assist",
      "Counter Attacks",
      "Apply Shield and Self Heal",
    ],
    Affiliations: "Justice League",
    id: "146",
    affinity: "Mystical",
  },
  {
    tier: "B",
    name: "Saint Walker",
    subName: "Lantern Of Hope",
    SPD: "107",
    HP: "28877",
    STR: "1416",
    INT: "2825",
    AG: "2223",
    STAM: "2308",
    CRC: "35%",
    CRV: "228%",
    LegendaryOrder: "5,2,3,4,1",
    GearSet: "Special Striker",
    powers: {
      one: {
        name: "Blue Ring:",
        dis: {
          Default:
            "Special Damage to an enemy. If target is Shielded, Steal up to 50% Shield to random allies. Otherwise, Call Assist.",
          Legendary:
            "If Saint Walker is the only hero alive in his team, Damage dealt is multiplied by 4.",
        },
      },
      two: {
        name: "All Will Be Well:",
        dis: {
          Default:
            "Purge all Debuffs from an ally. Apply an Overheal and Call their Assist.",
          Legendary:
            "50% chance to Call a second Assist. +50% chance if ally is Shielded.",
        },
      },
      three: {
        name: "Hope Burns Bright:",
        dis: {
          Default:
            "Purge 5 Buffs from each enemy and apply 20% Shield to all allies.",
          Legendary: "Stun (1T) all Enraged enemies.",
        },
      },
      four: {
        name: "In Fearful Day:",
        dis: {
          Default:
            "Saint Walker is immune to Enrage. At the beginning of his turn, if Saint Walker's HP is below 50%, gain a Light Heal.",
          Legendary:
            "Saint Walker also gains 1 Debuff Immunity (1T) until the beginning of his next turn.",
        },
      },
      five: {
        name: "Beacon of Hope:",
        dis: {
          Default:
            "Team Leader: While Saint Walker is alive, allies gain 20% Strength, Intelligence, Agility and Stamina. Green Lanterns gain an extra 5% of each.",
          Legendary:
            "At the beginning of each of their turns, allies gain 10% Shield. Green Lanterns gain an extra 5% Shield.",
        },
      },
    },
    CombatEffects: [
      "Debuff Immunity",
      "Enrage Immunity",
      "Stun",
      "Call Assist",
      "Heal",
      "Apply Shield",
      "Steal Shield",
      "Purge Buffs",
      "Purge Debuffs and Self Heal",
    ],
    Affiliations: "Lantern",
    id: "105",
    affinity: "Mystical",
  },
  {
    tier: "B",
    name: "Sinestro",
    subName: "White Lantern",
    SPD: "90",
    HP: "28288",
    STR: "1506",
    INT: "2874",
    AG: "2148",
    STAM: "2249",
    CRC: "35%",
    CRV: "228%",
    LegendaryOrder: "5,4,2,3,1 (updated for rework)",
    GearSet: "Special Striker",
    powers: {
      one: {
        name: "White Knight:",
        dis: {
          Default:
            "Special Damage to an enemy. +30% damage per teammate alive.",
          Legendary: "Apply Heal to Sinestro.",
        },
      },
      two: {
        name: "Life Itself:",
        dis: {
          Default:
            "Apply Overheal and 2 Mend to all allies. Apply 1 extra Mend per teammate alive.",
          Legendary:
            "Purge 3 Debuffs from all allies. Purge 1 extra Debuff per teammate alive.",
        },
      },
      three: {
        name: "The Entity of Creation:",
        dis: {
          Default: "Apply Death Immunity and 100% Turn Meter Up to an ally.",
          Legendary: "Also apply Debuff Immunity and a Light Overheal.",
        },
      },
      four: {
        name: "Invigoration:",
        dis: {
          Default: "Each ally gains 15% Shield when Debuffed.",
          Legendary: "Each ally also gains 15% Turn Meter Up when Debuffed.",
        },
      },
      five: {
        name: "Rise:",
        dis: {
          Default:
            "Team Leader: Sinestro Revives each teammate once with 35% HP and 15% Turn Meter Up. 50% chance to Revive each teammate a second time.",
          Legendary:
            "Sinestro Revives himself once with the same amount of HP and Turn Meter Up. 50% chance to Revive a second time.",
        },
      },
    },
    CombatEffects: [
      "Death Immunity",
      "Debuff Immunity",
      "Mends",
      "Revive",
      "Heal",
      "Apply Shield",
      "Turn Meter Up",
      "Purge Debuffs and Self Heal",
    ],
    Affiliations: "Lantern",
    id: "109",
    affinity: "Mystical",
  },
  {
    tier: "B",
    name: "Solomon Grundy",
    subName: "Born On A Monday",
    SPD: "72",
    HP: "40813",
    STR: "2388",
    INT: "1490",
    AG: "1736",
    STAM: "2891",
    CRC: "22%",
    CRV: "228%",
    LegendaryOrder:
      "4,1],3,5 (skipping 2 is preferred build) - updated for rework",
    GearSet: "Physical Tank",
    powers: {
      one: {
        name: "Grave Digger:",
        dis: {
          Default:
            "Damage to an enemy, +115% damage if Solomon Grundy is Enraged.",
          Legendary: "Damage +100% and gain 2 Speed Up (2T) if Enraged.",
        },
      },
      two: {
        name: "The Undying:",
        dis: {
          Default:
            "Gain 3 Taunt (1T), Enrage (1T), 2 Stamina Up (2T) and 30% Turn Meter Up",
          Legendary: "Gain 8 Speed Up (1T)",
        },
      },
      three: {
        name: "The Undertaker:",
        dis: {
          Default:
            "Damage to all enemies, gain Enrage (1T) and 4 Speed Up (2T)",
          Legendary: "Gain 4 Strength Up (2T) before attacking.",
        },
      },
      four: {
        name: "Mindless Brute:",
        dis: {
          Default:
            "Passive Ability: Gain 4 Agility Ups (3T) if Solomon Grundy gets Enraged. 50% chance to use Grave Digger when Solomon Grundy takes damage.",
          Legendary: "Start battle with Taunt (2T) and Crit Immunity (2T).",
        },
      },
      five: {
        name: "Buried on a Sunday:",
        dis: {
          Default:
            "Passive Ability: 43% chance to revive with 50% Health. Guaranteed to Revive at least once.",
          Legendary: "Gain 80% Turn Meter and Enrage (1T) when revived.",
        },
      },
    },
    CombatEffects: [
      "Agility Up",
      "Crit Immunity",
      "Speed Up",
      "Stamina Up",
      "Strength Up",
      "Taunt",
      "Enrage",
      "Counter Attacks",
      "Revive",
      "Turn Meter Up and Start of Battle Ability",
    ],
    Affiliations: "Injustice League",
    id: "112",
    affinity: "Mystical",
  },
  {
    tier: "B",
    name: "Swamp Thing",
    subName: "Champion of The Green",
    SPD: "114",
    HP: "32842",
    STR: "2666",
    INT: "1532",
    AG: "2347",
    STAM: "2649",
    CRC: "25%",
    CRV: "228%",
    LegendaryOrder: "3,1,4,5,2 (updated for rework)",
    GearSet: "Physical Support",
    powers: {
      one: {
        name: "Bog Spores:",
        dis: {
          Default:
            "Damage to an enemy, apply 1 Mend and 3% True Overheal to five random allies.",
          Legendary:
            "Apply 5 Critical Chance Up and purge 5 debuffs on random allies.",
        },
      },
      two: {
        name: "Force of Nature:",
        dis: {
          Default:
            "Light Damage to all enemies. Apply 1 Strength Down, or 2 if an Ally is Mending.",
          Legendary: "Apply Overheal across random allies.",
        },
      },
      three: {
        name: "Verdant Coffin:",
        dis: {
          Default: "Heavy Damage and apply Enrage to enemy.",
          Legendary: "Always apply Heal Immunity and 5 permanent Bleeds.",
        },
      },
      four: {
        name: "Forever Green:",
        dis: {
          Default:
            "Passive Ability: Revive once with 40% Health and apply Overheal to all allies. 85% chance to also Revive all dead allies.",
          Legendary: "Apply 1 Awareness and 5 Mends to all allies.",
        },
      },
      five: {
        name: "Chlorokinesis:",
        dis: {
          Default:
            "Passive Ability: 12% chance to use Bog Spores at end of ally turns. Chance is tripled if Swamp Thing is Overhealed.",
          Legendary: "Also apply 1 permanent Mend to random ally.",
        },
      },
    },
    CombatEffects: [
      "Awareness",
      "Crit Chance Up",
      "Mends",
      "Bleeds",
      "Enrage",
      "Heal Immunity",
      "Strength Down",
      "Out of Turn Attacks",
      "Revive",
      "Heal and Purge Debuffs",
    ],
    Affiliations: "Justice League Dark",
    id: "121",
    affinity: "Mystical",
  },
  {
    tier: "B",
    name: "Vixen",
    subName: "Avatar of the Animal Kingdom",
    SPD: "121",
    HP: "38465",
    STR: "1650",
    INT: "2436",
    AG: "1718",
    STAM: "2782",
    CRC: "15%",
    CRV: "178%",
    LegendaryOrder: "3,2,4,5],1 (rework)",
    GearSet: "Special Tank",
    powers: {
      one: {
        name: "Tiger Claws:",
        dis: {
          Default: "Special damage to an enemy. Reset power cooldowns.",
          Legendary: "Gain 2 speed ups (3T)",
        },
      },
      two: {
        name: "Fury of the Bear:",
        dis: {
          Default:
            "Special damage and remove 3 positive Immunities. Strike twice. Adds 1 cooldown to other powers.",
          Legendary: "50% chance to apply Buff Immunity (1T).",
        },
      },
      three: {
        name: "Flight of the Eagle:",
        dis: {
          Default:
            "Special Damage to an enemy and apply 3 Evasion Downs (2T). Can't Miss. Adds 1 cooldown to other powers.",
          Legendary:
            "25% chance enemy loses their Turn Meter. 75% Chance if target has 3 or more Evasion Downs.",
        },
      },
      four: {
        name: "Might of the Rhino:",
        dis: {
          Default:
            "Special Damage to an enemy. Apply 2 Bleed and gain 6 Stamina Ups (2T). Apply 50% extra damage if the target has 5 or more Bleeds. Adds 1 cooldown to other powers.",
          Legendary: "75% Chance to apply Stun (1T) if the target is bleeding.",
        },
      },
      five: {
        name: "Morphogenetic Field:",
        dis: {
          Default:
            "Team Leader: 75% chance to gain 30% Turn Meter Up and apply 30% Turn Meter Up to a random ally when an enemy gains a Buff on their turn.",
          Legendary: "50% increased stamina",
        },
      },
    },
    CombatEffects: [
      "Speed Up",
      "Stamina Up",
      "Bleeds",
      "Buff Immunity",
      "Evasion Down",
      "Stun",
      "Cooldown Effects",
      "Turn Meter Up",
      "Turn Meter Down",
      "Purge Buffs and Can't Miss",
    ],
    Affiliations: "Justice League",
    id: "126",
    affinity: "Mystical",
  },
  {
    tier: "B",
    name: "Wonder Woman",
    subName: "Princess of Themyscira",
    SPD: "106",
    HP: "38519",
    STR: "2255",
    INT: "2022",
    AG: "1911",
    STAM: "2662",
    CRC: "22%",
    CRV: "228%",
    LegendaryOrder: "(Leadership build, highly recommended) 3,5,2,1,4",
    GearSet: "Physical Tank",
    powers: {
      one: {
        name: "Amazon Strike:",
        dis: {
          Default:
            "Damage to enemy. 100% chance to purge 1 debuff from Wonder Woman.",
          Legendary:
            "Purge 1 debuff on each ally if Wonder Woman has no debuffs.",
        },
      },
      two: {
        name: "Power of Truth:",
        dis: {
          Default:
            "Purge 9 debuffs from self, purge 4 debuffs from allies and apply 10% turn meter up to allies.",
          Legendary: "Apply Debuff Immunity to all allies.",
        },
      },
      three: {
        name: "Fury of Zeus:",
        dis: {
          Default: "Heavy damage and purge 5 buffs from enemy.",
          Legendary: "Apply Buff Immunity to enemy.",
        },
      },
      four: {
        name: "Bracelets of Reflection:",
        dis: {
          Default:
            "Passive ability: When taking damage, transfer debuff on Wonder Woman to a random enemy, 100% chance to transfer additional debuff. If no debuff, also apply Silence.",
          Legendary: "20% chance to use Amazon Strike on attacker.",
        },
      },
      five: {
        name: "Finest of the Amazons:",
        dis: {
          Default:
            "Team Leader: At the end of her turn, 100% chance to  use Fury of Zeus if no allies have a debuff or Power of Truth if all allies have a debuff.",
          Legendary: "Agility +60% and Speed +15%",
        },
      },
    },
    CombatEffects: [
      "Debuff Immunity",
      "Buff Immunity",
      "Silence",
      "Counter Attacks",
      "Debuff Transfer",
      "Turn Meter Up",
      "Purge Buffs and Purge Debuffs",
    ],
    Affiliations: "Amazons and Justice League",
    id: "131",
    affinity: "Mystical",
  },
  {
    tier: "B",
    name: "Batman",
    subName: "The Dark Knight",
    SPD: "106",
    HP: "40661",
    STR: "2600",
    INT: "1605",
    AG: "1771",
    STAM: "2876",
    CRC: "22%",
    CRV: "228%",
    LegendaryOrder: "4,2,3],1,5",
    GearSet: "Physical Tank",
    powers: {
      one: {
        name: "Full-Armor Beatdown:",
        dis: {
          Default:
            "Damage to enemy, plus 80% damage and 30% chance to Stun (1T) if target is Taunting or Enraged.",
          Legendary:
            "Also, gain 25% Shield plus 100% Critical Hit Chance if target is Taunting or Enraged.",
        },
      },
      two: {
        name: "Equalizer:",
        dis: {
          Default:
            "Always Purge all positive Immunities, 4 Buff and then deal Heavy Damage to an enemy.",
          Legendary:
            "Can't miss and Stun (1T) target if target is Taunting or Enraged.",
        },
      },
      three: {
        name: "Powered Armor:",
        dis: {
          Default: "Gain 75% Shield and 5 Strength Up (2T).",
          Legendary: "Gain 6 Stamina Up (2T) and Crit Immunity (2T).",
        },
      },
      four: {
        name: "Contingency Plan:",
        dis: {
          Default: "If enemy Taunts, gain 50% Turn Meter Up and 30% Shield.",
          Legendary: "Use Equilzer on that enemy.",
        },
      },
      five: {
        name: "A League Above:",
        dis: {
          Default:
            'If Shielded, 75% chance to Silence (1T) targets Batman attacks. If not, 75% chance to use "Powered Armor" before the attack.',
          Legendary: "If Shielded, Critical Hit Chance +40%.",
        },
      },
    },
    CombatEffects: [
      "Crit Immunity",
      "Stamina Up",
      "Strength Up",
      "Silence",
      "Stun",
      "Can't Miss",
      "Out of Turn Attacks",
      "Apply Shield",
      "Turn Meter Up and Purge Buffs",
    ],
    Affiliations: "Bat Family",
    id: "13",
    affinity: "Energy",
  },
  {
    tier: "B",
    name: "Batman Beyond",
    subName: "Terry McGinnis",
    SPD: "113",
    HP: "31001",
    STR: "2775",
    INT: "1551",
    AG: "2090",
    STAM: "2340",
    CRC: "47%",
    CRV: "256%",
    LegendaryOrder: "1,2,3,4,5",
    GearSet: "Physical Striker",
    powers: {
      one: {
        name: "Electrified Batarang:",
        dis: {
          Default: "Damage and apply 5 Hit Chance Down to target.",
          Legendary:
            "40% Chance to hit an additional random enemy. +35% chance if Invisible.",
        },
      },
      two: {
        name: "Stealth Mode:",
        dis: {
          Default:
            "Gain Invisibility and 100% chance to gain 5 Crit Chance Ups.",
          Legendary: "Gain 4 Evasion Ups.",
        },
      },
      three: {
        name: "Go Beyond:",
        dis: {
          Default:
            "Heavy Damage to an enemy, +50% Crit Damage if Batman Beyond is Invisible.",
          Legendary: "+10% Damage per Hit Chance Down on Target (Limit 10).",
        },
      },
      four: {
        name: "Flashbang:",
        dis: {
          Default:
            "Passive Ability: 40% Chance to apply 3 Hit Chance Downs to an enemy at the start of their turn.",
          Legendary: "Gain 2 Crit Chance Ups if Batman Beyond Evades.",
        },
      },
      five: {
        name: "Bruce's Guidance:",
        dis: {
          Default:
            "Passive Ability: 70% Chance to Gain Invisibility and 2 Crit Chance Ups if Batman Beyond lands a Critical Hit.",
          Legendary: "70% chance to gain 25% Turn Meter.",
        },
      },
    },
    CombatEffects: [
      "Crit Chance Up",
      "Evasion Up",
      "Invisibility",
      "Hit Chance Down and Turn Meter Up",
    ],
    Affiliations: "Bat Family",
    id: "11",
    affinity: "Energy",
  },
  {
    tier: "B",
    name: "Bizarro",
    subName: "No. 1",
    SPD: "116",
    HP: "37856",
    STR: "2065",
    INT: "1780",
    AG: "1798",
    STAM: "2808",
    CRC: "12%",
    CRV: "210%",
    LegendaryOrder:
      "2,3,4*,5,1 (2021 rework) *some opt not to take his 4 as he can be squishy at lower levels",
    GearSet: "Mixed Tank",
    powers: {
      one: {
        name: "Bizarro Hug:",
        dis: {
          Default:
            "Damage to an enemy, +150% damage if Bizarro is debuffed. Can't miss.",
          Legendary: "10% True Heal for each debuff on Bizarro (Max 6).",
        },
      },
      two: {
        name: "Bizarro Say Hi:",
        dis: {
          Default:
            "Gain Taunt (1T), 5 Stamina Ups (2T) and a Heavy Overheal (250).",
          Legendary: "If Bizarro is taunting, gain 1 awareness.",
        },
      },
      three: {
        name: "Flame Breath:",
        dis: {
          Default: "Special Damage and apply 4 Bleeds (3T) to all enemies.",
          Legendary:
            "Apply 1 extra Bleed (3T) for each Debuff on Bizarro (Max 6).",
        },
      },
      four: {
        name: "Freeze Vision:",
        dis: {
          Default:
            "Special Damage. Purge all immunities from target, then apply Stun (1T) to an enemy. .",
          Legendary: "Begin battle with Taunt (2T).",
        },
      },
      five: {
        name: "Bizarro #1:",
        dis: {
          Default: "Overheal self if Bizarro is dealt a Critical Hit.",
          Legendary:
            "Gain Taunt (2T) and 25% Chance to also gain Death Immunity (1T) at the beginning of his turn.",
        },
      },
    },
    CombatEffects: [
      "Awareness",
      "Death Immunity",
      "Stamina Up",
      "Taunt",
      "Bleeds",
      "Stun",
      "Can't Miss",
      "Purge Buffs",
      "Start of Battle Ability and Self Heal",
    ],
    Affiliations: "Injustice League and Kryptonian",
    id: "18",
    affinity: "Energy",
  },
  {
    tier: "B",
    name: "Blackfire",
    subName: "Queen Of Tamaran",
    SPD: "116",
    HP: "28605",
    STR: "2713",
    INT: "1694",
    AG: "2219",
    STAM: "2226",
    CRC: "25%",
    CRV: "228%",
    LegendaryOrder: "3,1],2,5,4",
    GearSet: "Physical Support",
    powers: {
      one: {
        name: "Blackbolts:",
        dis: {
          Default: "Damage to a single enemy and Ignore Shield.",
          Legendary: "Apply Stun (1T) if the target is Shielded.",
        },
      },
      two: {
        name: "Ultra Violet Healing:",
        dis: {
          Default:
            "Apply Crit Immunity (2T) and Medium Overheal to all allies, Call Assist from a random teammate.",
          Legendary: "Purge all the debuffs on the main target.",
        },
      },
      three: {
        name: "Stellar Rage:",
        dis: {
          Default:
            "Damage to all enemies and remove the Shields from the targets.",
          Legendary: "Apply buff immunity (1T) on a random character.",
        },
      },
      four: {
        name: "Birthright:",
        dis: {
          Default:
            "Blackfire is immune to Critical Damage. If an enemy gain Shield 75% Chance to apply Buff Immunity (1T) on the enemy.",
          Legendary: "Also reset the cooldown of Stellar Rage.",
        },
      },
      five: {
        name: "Royal Decrete:",
        dis: {
          Default:
            "If a buffed enemy attacks Blackfire, gains 4 Empowered Strength Ups (2T).",
          Legendary: "Blackfire gains 15% Shield.",
        },
      },
    },
    CombatEffects: [
      "Empowered Strength Up",
      "Crit Immunity",
      "Buff Immunity",
      "Stun",
      "Call Assist",
      "Cooldown Effects",
      "Heal",
      "Apply Shield",
      "Remove Shield",
      "Ignore Shield and Purge Debuffs",
    ],
    Affiliations: "Titans",
    id: "157",
    affinity: "Energy",
  },
  {
    tier: "B",
    name: "Bloodsport",
    subName: "Robert Dubois",
    SPD: "108",
    HP: "38755",
    STR: "2458",
    INT: "1546",
    AG: "1807",
    STAM: "2686",
    CRC: "22%",
    CRV: "228%",
    LegendaryOrder: "4,3,5,2,1",
    GearSet: "Physical Tank",
    powers: {
      one: {
        name: "Brute Force:",
        dis: {
          Default:
            "Damage and 80% Chance to apply Stun (1T) on a single target.",
          Legendary: "Also, gain Hit Chance Up (2T).",
        },
      },
      two: {
        name: "Sharp Shooter:",
        dis: {
          Default: "Damage to a single enemy and apply up to 8 Bleeds.",
          Legendary: "Apply Heal Immunity (3T) on the target.",
        },
      },
      three: {
        name: "Infinite Ammo:",
        dis: {
          Default:
            "Damage and apply Buff Immunity (1T) to all enemies. Can't miss if Bloodsport is Invisible.",
          Legendary: "50% Chance to Purge all Buffs from the main target.",
        },
      },
      four: {
        name: "Dog Tags:",
        dis: {
          Default:
            "Passive: Apply 3 Hit Chance Ups (2T) on a random ally at the end of his turn.",
          Legendary: "Start the fight with Invisibility (1T).",
        },
      },
      five: {
        name: "Line of Sight:",
        dis: {
          Default:
            "Passive: Gain True Sight (1T) and Invisibility (1T) at the start of his turn.",
          Legendary:
            "50% Chance to also apply Stun (1T) on a random enemy at the end of his turn.",
        },
      },
    },
    CombatEffects: [
      "Hit Chance Up",
      "Invisibility",
      "True Sight",
      "Bleeds",
      "Buff Immunity",
      "Heal Immunity",
      "Stun",
      "Can't Miss",
      "Purge Buffs and Start of Battle Ability",
    ],
    Affiliations: "Suicide Squad",
    id: "161",
    affinity: "Energy",
  },
  {
    tier: "B",
    name: "Captain Cold",
    subName: "Criminal Master of Chill",
    SPD: "115",
    HP: "38884",
    STR: "1484",
    INT: "2400",
    AG: "1887",
    STAM: "2823",
    CRC: "15%",
    CRV: "178%",
    LegendaryOrder: "3,1,2,5],4 (rework Jan/2022)",
    GearSet: "Special Tank",
    powers: {
      one: {
        name: "Cold Shot:",
        dis: {
          Default: "Special Damage to an enemy, -35% enemy Turn Meter.",
          Legendary:
            "15% chance to Stun (1T) the target per Speed Down on the target (Max 6).",
        },
      },
      two: {
        name: "Slip N' Slide:",
        dis: {
          Default: "Apply 3 Speed Downs (2T) and -78% Turn Meter to an enemy.",
          Legendary:
            "Remove 1 Buff from the target per Speed Down on the target.",
        },
      },
      three: {
        name: "Winter is Here:",
        dis: {
          Default:
            "Special Damage to all enemies, Purge 4 Buffs from each enemy.",
          Legendary: "Apply 1 Speed Down (2T) per buff purged.",
        },
      },
      four: {
        name: "Sweeping Blasts:",
        dis: {
          Default:
            "Passive: 100% chance to apply 1 Speed Down (2T) to a random enemy at the end of Captain Cold's turn.",
          Legendary:
            "Also apply +1 extra Cooldown to the Second ability of the random enemy.",
        },
      },
      five: {
        name: "Loyalty Among Rogues:",
        dis: {
          Default:
            "Leader: 75% chance to use Cold Shot on any enemy that damages Captain Cold or an ally.",
          Legendary:
            "Equal Chance that an ally uses their Basic on any enemy that damages Captain Cold.",
        },
      },
    },
    CombatEffects: [
      "Speed Down",
      "Cooldown Effects",
      "Counter Attacks",
      "Turn Meter Down and Purge Buffs",
    ],
    Affiliations: "Rogues Gallery",
    id: "29",
    affinity: "Energy",
  },
  {
    tier: "B",
    name: "Chemo",
    subName: "The Deathless Doom",
    SPD: "105",
    HP: "37687",
    STR: "1637",
    INT: "2527",
    AG: "1722",
    STAM: "2704",
    CRC: "15%",
    CRV: "178%",
    LegendaryOrder:
      "4],5,1,3/2 (order isn’t real important; depends on the comp you want)",
    GearSet: "Special Tank",
    powers: {
      one: {
        name: "Chem Trail:",
        dis: {
          Default:
            "Special Damage to an enemy, gain 3 Mends (3T) if target is Bleeding.",
          Legendary: "Apply Disease if target is Bleeding.",
        },
      },
      two: {
        name: "Toxic Spill:",
        dis: {
          Default: "Special Damage and apply 3 Bleeds (3T) to all enemies.",
          Legendary: "Cannot Miss.",
        },
      },
      three: {
        name: "Fallout:",
        dis: {
          Default:
            "Apply 4 Speed Down (2T) and 30% of Turn Meter Down to all enemies.",
          Legendary:
            "60% chance to apply Doom (4T) to one random enemy if the enemy team has 6 or more Bleeds.",
        },
      },
      four: {
        name: "Corrosive Anatomy:",
        dis: {
          Default:
            "Apply 2 Bleeds (3T) to enemies that damage Chemo and 75% chance to apply Doom (4T) on the attacker.",
          Legendary: "Use Chem Trail on the attacker.",
        },
      },
      five: {
        name: "Sticky Composition:",
        dis: {
          Default:
            "If Chemo receives Critical Damage, 75% chance to gain Taunt (1T).",
          Legendary: "Start the combat with Taunt (1T).",
        },
      },
    },
    CombatEffects: [
      "Taunt",
      "Mends",
      "Bleeds",
      "Doom",
      "Disease",
      "Speed Down",
      "Can't Miss",
      "Counter Attacks",
      "Turn Meter Down and Start of Battle Ability",
    ],
    Affiliations: "Secret Society of Super-Villains",
    id: "33",
    affinity: "Energy",
  },
  {
    tier: "B",
    name: "Clayface",
    subName: "Basil Karlo",
    SPD: "96",
    HP: "38083",
    STR: "2245",
    INT: "1411",
    AG: "1868",
    STAM: "2618",
    CRC: "22%",
    CRV: "228%",
    LegendaryOrder: "2,1,5,4,3",
    GearSet: "Physical Tank",
    powers: {
      one: {
        name: "Slinging Mud:",
        dis: {
          Default: "Apply Damage and Speed Down to target.",
          Legendary: "Steal 1 buff from target.",
        },
      },
      two: {
        name: "Roar of the Monster:",
        dis: {
          Default:
            "Gain 3 Taunts and apply Invisibility to other teammates. Apply10 Agility Up to all allies. Agility up duration +1.",
          Legendary:
            "Use at start of combat (sets cooldown to 3) and use at start of any turn if Clayface has Invisibility but no taunt.",
        },
      },
      three: {
        name: "Mudslide:",
        dis: {
          Default: "Apply Damage and 2 Speed Downs to all enemies.",
          Legendary: "If Clayface is Taunting, gain an Overheal.",
        },
      },
      four: {
        name: "Stick In The Mud:",
        dis: {
          Default:
            "When attacked, 55% chance to Silence attacker if Clayface is Taunting.",
          Legendary: "Also steal 1 Positive Immunity from attacker.",
        },
      },
      five: {
        name: "Re-Formed Criminal:",
        dis: {
          Default:
            "Passive ability: Immune to Critical Hits. When Clayface reaches 0 HP, 30% chance to gain a Heal. +30% chance per Invisible character on either side.",
          Legendary:
            "Purge all Bleeds and Negative Immunities on Clayface at start of his turn.",
        },
      },
    },
    CombatEffects: [
      "Agility Up",
      "Invisibility",
      "Taunt",
      "Silence",
      "Speed Down",
      "Buff Stealing",
      "Purge Debuffs",
      "Start of Battle Ability and Self Heal",
    ],
    Affiliations: "Bat Family",
    id: "34",
    affinity: "Energy",
  },
  {
    tier: "B",
    name: "Eradicator",
    subName: "The Last Son Of Krypton",
    SPD: "120",
    HP: "28034",
    STR: "1641",
    INT: "2940",
    AG: "1977",
    STAM: "2223",
    CRC: "35%",
    CRV: "228%",
    LegendaryOrder: "3,5,1,2,4",
    GearSet: "Special Striker",
    powers: {
      one: {
        name: "Eradication Protocol:",
        dis: {
          Default:
            "Special Damage to a single enemy, attack twice if Eradicator is buffed.",
          Legendary: "Ignore Awareness.",
        },
      },
      two: {
        name: "Destruction Protocol:",
        dis: {
          Default:
            "Special Damage to all enemies, remove all the buffs from the main target.",
          Legendary: "50% Chance to gain Death Immunity (2T).",
        },
      },
      three: {
        name: "Free Fall:",
        dis: {
          Default:
            "Heavy Special Damage to a single enemy that can’t miss. If the target dies gain 2 permanent Int Ups.",
          Legendary: "Remove all positive immunities from the target.",
        },
      },
      four: {
        name: "Protection Protocol:",
        dis: {
          Default:
            "Passive: If a teammate received damage 75% Chance for Eradicator to gain 2 Stamina Ups (2T) and the teammate gain 2 Stamina Ups (2T).",
          Legendary: "Also apply 25% Shields on the teammate",
        },
      },
      five: {
        name: "Attacker Protocol:",
        dis: {
          Default: "Passive: If Eradicator deals damage gain 3 Int Ups (1T).",
          Legendary: "Special Damage +30% on all attacks.",
        },
      },
    },
    CombatEffects: [
      "Death Immunity",
      "Intelligence Up",
      "Stamina Up",
      "Can't Miss",
      "Apply Shield",
      "Ignore Awareness and Purge Buffs",
    ],
    Affiliations: "The Outsiders",
    id: "159",
    affinity: "Energy",
  },
  {
    tier: "B",
    name: "Flash",
    subName: "Fastest Man Alive",
    SPD: "131",
    HP: "28725",
    STR: "2573",
    INT: "1571",
    AG: "2153",
    STAM: "2112",
    CRC: "47%",
    CRV: "256%",
    LegendaryOrder: "4,1,2,3,5 (rework)",
    GearSet: "Physical Striker",
    powers: {
      one: {
        name: "Speed Punch:",
        dis: {
          Default: "Light Damage to an enemy, 50% chance to strike twice.",
          Legendary: "Gain 1 Speed Up.",
        },
      },
      two: {
        name: "Red Streak:",
        dis: {
          Default:
            "Gain 2 Speed Ups (Always), 100% chance to purge 2 debuffs from Flash.",
          Legendary: "Gain Debuff Immunity",
        },
      },
      three: {
        name: "Speed Force Vortex:",
        dis: {
          Default:
            "Damage to an enemy, +10% damage per Speed Up on Flash (Max 100%).",
          Legendary: "Cooldown -1 and 50% chance to gain 30% Turn Meter Up.",
        },
      },
      four: {
        name: "One Speed:",
        dis: {
          Default:
            "Passive Ability: 41% chance to use Speed Punch on random enemy at end of each ally's turn if Flash has 3+ Speed Ups.",
          Legendary: "Extra 25% chance to use Red Streak",
        },
      },
      five: {
        name: "Flashpoint:",
        dis: {
          Default:
            "Passive Ability: Get an additional Speed Up (2T) each time Flash gains a Speed Up on his turn.",
          Legendary:
            "All of Flash attacks ignore Awareness if he has 3+ Speed Ups.",
        },
      },
    },
    CombatEffects: [
      "Debuff Immunity",
      "Speed Up",
      "Out of Turn Attacks",
      "Ignore Awareness",
      "Turn Meter Up and Purge Debuffs",
    ],
    Affiliations: "Justice League and Speedster",
    id: "49",
    affinity: "Energy",
  },
  {
    tier: "B",
    name: "General Zod",
    subName: "Kryptonian Warmonger",
    SPD: "120",
    HP: "28852",
    STR: "1435",
    INT: "2864",
    AG: "2162",
    STAM: "2305",
    CRC: "35%",
    CRV: "228%",
    LegendaryOrder: "4,1,2,3,5 (updated for rework 2021)",
    GearSet: "Special Striker",
    powers: {
      one: {
        name: "Heat Vision Strike:",
        dis: {
          Default: "Special Damage to an enemy.",
          Legendary:
            "If Zod deals with a Critical Hit, apply 1 Heal Immunity (2T) and deal additional 30% True Damage.",
        },
      },
      two: {
        name: "Kneel Before Zod!:",
        dis: {
          Default:
            "Gain 5 Int Ups (2T) and 4 Crit Chance Ups (2T) and 75% Turn Meter Up, also 75% chance to apply 2 Crit Chance Ups (2T) to two random teammates.",
          Legendary: "Gain 25% Shield.",
        },
      },
      three: {
        name: "Freeze Breath:",
        dis: {
          Default:
            "Heavy Special Damage to an enemy. Always apply 5 Int Downs (2T).",
          Legendary:
            "Cooldown -1 for all of Zod's abilities if the enemy is killed.",
        },
      },
      four: {
        name: "Warmonger:",
        dis: {
          Default:
            "Passive: At the start of every Zod`s turn apply 2 Crit Chance Ups (2T) to all allies.",
          Legendary: "Can't Miss on all attacks.",
        },
      },
      five: {
        name: "New Krypton:",
        dis: {
          Default:
            "Leader: If a teammate deals a Critical Hit, 75% chance for Zod to gain Death Immunity (1T).",
          Legendary:
            "50% Chance to Call Assist from a random teammate if Zod deals Critical Damage.",
        },
      },
    },
    CombatEffects: [
      "Crit Chance Up",
      "Death Immunity",
      "Intelligence Up",
      "Heal Immunity",
      "Intelligence Down",
      "Call Assist",
      "Can't Miss",
      "Cooldown Effects",
      "Apply Shield",
      "True Damage and Turn Meter Up",
    ],
    Affiliations: "Kryptonian",
    id: "51",
    affinity: "Energy",
  },
  {
    tier: "B",
    name: "Green Lantern",
    subName: "Hal Jordan",
    SPD: "119",
    HP: "36179",
    STR: "2069",
    INT: "1875",
    AG: "1805",
    STAM: "2703",
    CRC: "12%",
    CRV: "210%",
    LegendaryOrder: "3,1,2,4,5 (rework)",
    GearSet: "Mixed Tank",
    powers: {
      one: {
        name: "Power Gauntlet:",
        dis: {
          Default: "Damage to an enemy. Apply 24% Shield to a random teammate.",
          Legendary: "Call Assist if Green Lantern is Shielded",
        },
      },
      two: {
        name: "Strength of Will:",
        dis: {
          Default:
            "Gain 45% Shield and 25% Turn Meter Up. Apply 10% Shield to all teammates.",
          Legendary:
            "When Strength of Will is used, reduce Cooldown of all abilities by 1.",
        },
      },
      three: {
        name: "Hammer Time:",
        dis: {
          Default:
            "Heavy Special Damage to an enemy. Apply Stun if Green Lantern is Shielded.",
          Legendary: "Hammer time Can't Miss and Purges 10 buffs from target.",
        },
      },
      four: {
        name: "Hard Light:",
        dis: {
          Default:
            "Passive Ability: At the beginning of each enemy's turn, 70% chance to gain 1 Agility Up and 1 Int Up if Green Lantern is not Shielded.",
          Legendary: "Also gain 10% Shield.",
        },
      },
      five: {
        name: "Greatest Green Lantern:",
        dis: {
          Default:
            "Team Leader: Apply 1 Debuff Immunity and 35% Shield to all allies at the start of battle.",
          Legendary: "Apply an extra Debuff Immunity to all allies.",
        },
      },
    },
    CombatEffects: [
      "Agility Up",
      "Debuff Immunity",
      "Intelligence Up",
      "Stun",
      "Call Assist",
      "Can't Miss",
      "Cooldown Effects",
      "Apply Shield",
      "Turn Meter Up",
      "Purge Buffs and Start of Battle Ability",
    ],
    Affiliations: "Green Lantern Corps and Justice League",
    id: "56",
    affinity: "Energy",
  },
  {
    tier: "B",
    name: "Guy Gardner",
    subName: "The Crazy One",
    SPD: "104",
    HP: "29981",
    STR: "2570",
    INT: "1419",
    AG: "2182",
    STAM: "2238",
    CRC: "0%",
    CRV: "0%",
    LegendaryOrder: "5,4,2],1,3",
    GearSet: "Physical Striker",
    powers: {
      one: {
        name: "Spiked Ball:",
        dis: {
          Default: "Damage to an enemy. 100% additional damage if Enraged.",
          Legendary:
            "Apply 2 Agility Down (2T) to the target. 3 additional Agility Down if Enraged.",
        },
      },
      two: {
        name: "Cry Aloud:",
        dis: {
          Default:
            "Gain Crit Immunity (2T), 4 Empowered Strength Up (2T), 20% Turn Meter Up and Enrage (1T).",
          Legendary: "Also gain 25% Shield.",
        },
      },
      three: {
        name: "Home Run:",
        dis: {
          Default: "Damage to an enemy and apply 5 Agility Down (2T).",
          Legendary:
            "Use Home Run again on a random enemy if target is killed.",
        },
      },
      four: {
        name: "Bully's Bane:",
        dis: {
          Default: "75% Chance to counterattack if attacked while enraged.",
          Legendary: "30% Chance to use Cry Aloud if attacked while enraged.",
        },
      },
      five: {
        name: "The Strongest Will:",
        dis: {
          Default: "Prevent death once.",
          Legendary:
            "Give Crit Immunity (1T) to all allies at start of battle. Also give Damage Immunity (1T) if ally is a Green Lantern.",
        },
      },
    },
    CombatEffects: [
      "Crit Immunity",
      "Damage Immunity",
      "Empowered Strength Up",
      "Agility Down",
      "Enrage",
      "Counter Attacks",
      "Apply Shield and Start of Battle Ability",
    ],
    Affiliations: "Green Lantern Corps",
    id: "136",
    affinity: "Energy",
  },
  {
    tier: "B",
    name: "Heat Wave",
    subName: "The Pyromaniac",
    SPD: "113",
    HP: "26663",
    STR: "1618",
    INT: "2924",
    AG: "2141",
    STAM: "2086",
    CRC: "35%",
    CRV: "228%",
    LegendaryOrder:
      "1,2],5,3.4 (pvp build) / 4],1,5,2,3 (pve build - great PVE character)",
    GearSet: "Special Striker",
    powers: {
      one: {
        name: "Incinerate:",
        dis: {
          Default:
            "Special Damage to an enemy and apply 5 Bleeds on target (3T).",
          Legendary: "Apply 20% Turn Meter Down on target.",
        },
      },
      two: {
        name: "Fire Protection:",
        dis: {
          Default: "Apply 20% Shield and purge 4 debuffs on all allies.",
          Legendary: "Apply Crit Immunity (1T) to all allies.",
        },
      },
      three: {
        name: "Rain of Fire:",
        dis: {
          Default:
            "Special Damage to enemy team and 75% chance to apply Heal Immunity (1T).",
          Legendary: "50% Additional damage if an enemy is Bleeding.",
        },
      },
      four: {
        name: "Heating Up:",
        dis: {
          Default: "If an enemy dies, gain 50% Turn Meter Up.",
          Legendary: "Cooldown -1 on Rain of Fire.",
        },
      },
      five: {
        name: "Burned Alive:",
        dis: {
          Default: "If Heat Wave takes damage, apply 3 Bleeds on the attacker.",
          Legendary: "Also apply 10% True Damage on the attacker.",
        },
      },
    },
    CombatEffects: [
      "Crit Immunity",
      "Bleeds",
      "Heal Immunity",
      "Cooldown Effects",
      "Apply Shield",
      "True Damage",
      "Turn Meter Up",
      "Turn Meter Down and Purge Debuffs",
    ],
    Affiliations: "Rogues Gallery",
    id: "62",
    affinity: "Energy",
  },
  {
    tier: "B",
    name: "Jessica Cruz",
    subName: "Green Lantern Co-Defender of Earth",
    SPD: "110",
    HP: "28877",
    STR: "1419",
    INT: "2922",
    AG: "2132",
    STAM: "2308",
    CRC: "35%",
    CRV: "228%",
    LegendaryOrder: "1,4,3,2/5 (updated for rework, early thoughts)",
    GearSet: "Special Striker",
    powers: {
      one: {
        name: "Shield-Powered Blast:",
        dis: {
          Default:
            "Special Damage to an enemy, apply 3 Intelligence Downs (2T), double the amount if Jessica Cruz is shielded.",
          Legendary: "65% Chance to strike twice.",
        },
      },
      two: {
        name: "Construct of Will:",
        dis: {
          Default: "Special Damage to all enemies, gain 30% Shield.",
          Legendary: "Damage +30% per shielded teammate.",
        },
      },
      three: {
        name: "In Brightest Day:",
        dis: {
          Default:
            "Apply 30% Shield to all allies, +15% Shield per dead ally. Gain Taunt (2T).",
          Legendary: "Purge 4 debuffs from all allies.",
        },
      },
      four: {
        name: "Not Afraid:",
        dis: {
          Default:
            "50% Chance to purge 2 debuffs from self at the beginning of every turn.",
          Legendary: "Jessica starts battle with 65% Shield.",
        },
      },
      five: {
        name: "In Blackest Night:",
        dis: {
          Default:
            "When an ally dies, gain 30% Shield. if already shielded, gain 6 Intelligence Ups (2T) and 5 Agility Ups (2T) and 50% Turn Meter instead. Also gain Taunt(2T).",
          Legendary: "Gain Death Immunity (1T) when an ally dies.",
        },
      },
    },
    CombatEffects: [
      "Agility Up",
      "Death Immunity",
      "Intelligence Up",
      "Taunt",
      "Intelligence Down",
      "Apply Shield",
      "Turn Meter Up",
      "Purge Debuffs and Start of Battle Ability",
    ],
    Affiliations: "Green Lantern Corps",
    id: "66",
    affinity: "Energy",
  },
  {
    tier: "B",
    name: "Larfleeze",
    subName: "Agent Orange",
    SPD: "100",
    HP: "26463",
    STR: "1432",
    INT: "2870",
    AG: "2064",
    STAM: "2066",
    CRC: "35%",
    CRV: "228%",
    LegendaryOrder: "3,4,5,2,1",
    GearSet: "Special Striker",
    powers: {
      one: {
        name: "Life-Stealing Blast:",
        dis: {
          Default: "Special Damage to an enemy. Drain 10% health.",
          Legendary:
            "40% chance to double healing received from Life-Stealing Blast",
        },
      },
      two: {
        name: "It's All MINE!:",
        dis: {
          Default:
            "Steal 1 buff from every hero and steal 10% Turn Meter from each enemy. If no buffs are stolen, gain 2 Int Up.",
          Legendary: "Always gain 3 Int Up",
        },
      },
      three: {
        name: "Orange Crops:",
        dis: {
          Default:
            "Heavy Special Damage to an enemy. +10% Damage per buff on Larfleeze (Max 10).",
          Legendary: "Purge all buffs from target",
        },
      },
      four: {
        name: "Power Battery's Avarice Vortex:",
        dis: {
          Default:
            "Each time Larfleeze is debuffed, 65% chance to purge 2 debuffs from himself.",
          Legendary: "Also gain 20% Turn Meter",
        },
      },
      five: {
        name: "Your Soul Is MINE!:",
        dis: {
          Default:
            "Each time an enemy dies, Larfleeze gains 5 permanent Int Ups and 30% Turn Meter.",
          Legendary:
            "Each time an ally dies, gain 5 permanent Crit Chance Up and 100% Turn Meter",
        },
      },
    },
    CombatEffects: [
      "Crit Chance Up",
      "Intelligence Up",
      "Buff Stealing",
      "Turn Meter Up",
      "Purge Buffs and Self Heal",
    ],
    Affiliations: "Lantern",
    id: "74",
    affinity: "Energy",
  },
  {
    tier: "B",
    name: "Medphyll",
    subName: "Green Lantern of Sector 1287",
    SPD: "112",
    HP: "30545",
    STR: "2402",
    INT: "1547",
    AG: "2172",
    STAM: "2294",
    CRC: "47%",
    CRV: "256%",
    LegendaryOrder:
      "3,5,2]1,4 (updated for rework) / (can leave off 2 leader if no intention of lead)",
    GearSet: "Physical Striker",
    powers: {
      one: {
        name: "Seed Construct:",
        dis: {
          Default:
            "Damage to an Enemy, apply 4 Mends (3T) to two random allies.",
          Legendary: "Apply 10% Shield to Mended targets.",
        },
      },
      two: {
        name: "Shield of a Veteran:",
        dis: {
          Default: "Gain 38% Shield, 5 Stamina Ups and (2T) Taunt (1T).",
          Legendary: "Medphyll Gain Crit Immunity (2T).",
        },
      },
      three: {
        name: "Hypnotic Light:",
        dis: {
          Default:
            "Apply 5 Strength Downs (2T) and 50% Turn Meter Down to an enemy. Apply 5 Speed Downs (2T).",
          Legendary: "+5 Strength Downs (2T) and Purge 4 Debuffs on Medphyll.",
        },
      },
      four: {
        name: "The Will to Live:",
        dis: {
          Default: "Apply Damage Immunity (2T) and 38% Shield to an ally.",
          Legendary: "Apply 4 Mends on Target.",
        },
      },
      five: {
        name: "Hero of J586:",
        dis: {
          Default:
            "Medphyll and one random ally gains 15% Shield and +15% Turn Meter Up at the start of every ally turn.",
          Legendary:
            "All teammates have a 50% chance to apply 10% Turn Meter Down when damaging an enemy.",
        },
      },
    },
    CombatEffects: [
      "Crit Immunity",
      "Damage Immunity",
      "Mends",
      "Stamina Up",
      "Taunt",
      "Speed Down",
      "Strength Down",
      "Apply Shield",
      "Turn Meter Up",
      "Turn Meter Down and Purge Debuffs",
    ],
    Affiliations: "Green Lantern Corps",
    id: "82",
    affinity: "Energy",
  },
  {
    tier: "B",
    name: "Miss Martian",
    subName: "M'gann M'orzz",
    SPD: "109",
    HP: "27201",
    STR: "1563",
    INT: "2972",
    AG: "2103",
    STAM: "2140",
    CRC: "35%",
    CRV: "228%",
    LegendaryOrder: "2,4,5,1,3",
    GearSet: "Special Striker",
    powers: {
      one: {
        name: "Phasing Uppercut:",
        dis: {
          Default:
            "Special Damage to an enemy and apply 25% Turn Meter Down if Miss Martian is Shielded.",
          Legendary: "Gain 1 permanent Int Up.",
        },
      },
      two: {
        name: "Mindlink:",
        dis: {
          Default:
            "Apply 30% Shield and Purge 4 Debuffs to all allies. Apply Crit Immunity (1T) to a random ally.",
          Legendary: "Call Assist from a random ally.",
        },
      },
      three: {
        name: "Shifting Limbs:",
        dis: {
          Default:
            "Special Damage to all enemies and 75% Chance to apply 3 Int Ups (2T) and 3 Str Ups (2T) to all allies.",
          Legendary: "Reset Mindlink cooldown if Miss Martian is Shielded.",
        },
      },
      four: {
        name: "Hive Mind:",
        dis: {
          Default:
            "Every time a teammate is buffed 75% Chance for Miss Martian to gain 4 Int Ups (2T).",
          Legendary: "Gain 15% Turn Meter Up.",
        },
      },
      five: {
        name: "Titans Go!:",
        dis: {
          Default:
            "At the start of every ally turn, 75% Chance to apply 10% Shield on that ally, if the ally is a Titan apply 15% additional Shield .",
          Legendary: "Gain 2 Int Ups (2T) at the start of the combat.",
        },
      },
    },
    CombatEffects: [
      "Crit Immunity",
      "Intelligence Up",
      "Strength Up",
      "Call Assist",
      "Cooldown Effects",
      "Apply Shield",
      "Turn Meter Down",
      "Purge Debuffs and Start of Battle Ability",
    ],
    Affiliations: "Titans",
    id: "141",
    affinity: "Energy",
  },
  {
    tier: "B",
    name: "Mister Miracle",
    subName: "Scott Free",
    SPD: "113",
    HP: "39392",
    STR: "2343",
    INT: "1585",
    AG: "1824",
    STAM: "2749",
    CRC: "22%",
    CRV: "228%",
    LegendaryOrder: "2,4,3,5,1 (early thoughts - 2021 rework)",
    GearSet: "Physical Tank",
    powers: {
      one: {
        name: "Aero-Discs Throw:",
        dis: {
          Default:
            "Damage to an enemy. Double damage if Mister Miracle has True Sight.",
          Legendary: "Ignore Shields.",
        },
      },
      two: {
        name: "Mother Box Analysis:",
        dis: {
          Default: "Apply True Sight (2T) and Awareness to all allies.",
          Legendary:
            "Purge up to 5 debuffs on the primary target and gain 1 Evasion Up (2T) per debuff purged (Limit 5).",
        },
      },
      three: {
        name: "Boom Tube Crash:",
        dis: {
          Default:
            "Heavy Damage to an enemy. Transfer 5 Debuffs on Mister Miracle to target.",
          Legendary:
            "Can't Miss and Transfer 2 Debuffs from each teammate to the target.",
        },
      },
      four: {
        name: "Reconnaissance:",
        dis: {
          Default:
            "Passive: If an ally is debuffed at the end of their turn gain True Sight (1T) and 3 Evasion Ups (2T).",
          Legendary:
            "When Reconnaissance activates, Transfer 2 Debuffs from teammates to a random enemy.",
        },
      },
      five: {
        name: "Mister Miracle:",
        dis: {
          Default: "Passive: Revive with full health once per Battle.",
          Legendary: "On Revive, apply Awareness to the whole team.",
        },
      },
    },
    CombatEffects: [
      "Awareness",
      "Evasion Up",
      "True Sight",
      "Can't Miss",
      "Debuff Transfer",
      "Revive",
      "Ignore Shield and Purge Debuffs",
    ],
    Affiliations: "Apokolips",
    id: "86",
    affinity: "Energy",
  },
  {
    tier: "B",
    name: "Mr. Freeze",
    subName: "Heart of Ice",
    SPD: "110",
    HP: "37924",
    STR: "1728",
    INT: "2558",
    AG: "1930",
    STAM: "2727",
    CRC: "15%",
    CRV: "178%",
    LegendaryOrder: "2,1,4,3,5 (updated for rework)",
    GearSet: "Special Tank",
    powers: {
      one: {
        name: "Icy Shot:",
        dis: {
          Default: "Special Damage and apply 4 Speed Downs (2T) to an enemy.",
          Legendary:
            "+100% damage and 25% Turn Meter Down if target is over 50% Turn Meter.",
        },
      },
      two: {
        name: "For Nora:",
        dis: {
          Default:
            "Heal self (135%), increase HP by 35% indefinitely, and gain Taunt (2T).",
          Legendary: "Gain True Sight (2T) and Crit Immunity (2T).",
        },
      },
      three: {
        name: "Freeze Grenade:",
        dis: {
          Default:
            "Light Special Damage and apply 25% Turn Meter Down to all enemies.",
          Legendary:
            "Use Icy Shot on a random enemy if at least one enemy is over 50% Turn Meter.",
        },
      },
      four: {
        name: "Gelid Physiology:",
        dis: {
          Default:
            "When an enemy hits Mr. Freeze, apply 2 Speed Downs (2T) and 2 Agility Downs (2T).",
          Legendary:
            "Apply 4 Speed Downs (2T) to a random enemy at the start of the combat.",
        },
      },
      five: {
        name: "Cool Down:",
        dis: {
          Default:
            "If an enemy is Enraged, apply 2 Speed Downs (2T), 2 Agility Downs (2T), 2 Evasion Downs (2T), and 2 Hit Chance Downs (2T) at the beginning of their turn.",
          Legendary:
            "75% chance to Call Assist at the end of every Enraged enemy's turn.",
        },
      },
    },
    CombatEffects: [
      "True Sight",
      "Crit Immunity",
      "Taunt",
      "Agility Down",
      "Evasion Down",
      "Hit Chance Down",
      "Speed Down",
      "Call Assist",
      "Turn Meter Down",
      "Start of Battle Ability and Self Heal",
    ],
    Affiliations: "Injustice League and Secret Society of Super-Villains",
    id: "87",
    affinity: "Energy",
  },
  {
    tier: "B",
    name: "Parallax",
    subName: "Kyle Rayner",
    SPD: "108",
    HP: "42017",
    STR: "2539",
    INT: "1432",
    AG: "1872",
    STAM: "3012",
    CRC: "22%",
    CRV: "228%",
    LegendaryOrder: "5,1],3,2,4",
    GearSet: "Physical Tank",
    powers: {
      one: {
        name: "Impurity Attack:",
        dis: {
          Default: "Damage an enemy and gain 5 Stamina Ups (1T).",
          Legendary: "Strike twice if the target is Enraged.",
        },
      },
      two: {
        name: "Solid Fear Construct:",
        dis: {
          Default:
            "Damage to an enemy, Purge 4 Buffs and apply 20% Turn Meter Down on target (Purge also procs on miss).",
          Legendary: "Apply Enrage (1T) if Parallax has 4 or more Stamina Ups.",
        },
      },
      three: {
        name: "Your Fear is my Strength:",
        dis: {
          Default:
            "Heavy damage to all enemies and applies 2 Strength Down (1T) to all enemies. Apply 100% additional damage if an enemy is Enraged.",
          Legendary: "50% chance to use Call Assist on the primary target.",
        },
      },
      four: {
        name: "Fear-Induction:",
        dis: {
          Default:
            "Each time Parallax takes damage, gain 4 Stamina Ups (2T) and apply Enrage (1T) to the attacker.",
          Legendary:
            "Also, If Parallax is enraged, apply 1 Empowered Stamina up (2T) on all allies at the end of his turn.",
        },
      },
      five: {
        name: "Parallax Empowerment:",
        dis: {
          Default:
            "At the end of each Parallax turn, Gain Taunt (1T) and Debuff Immunity (1T) if Parallax has 4 or more Stamina Ups.",
          Legendary:
            "Start the battle with Taunt (1T) and Death Immunity (1T).",
        },
      },
    },
    CombatEffects: [
      "Death Immunity",
      "Debuff Immunity",
      "Stamina Up",
      "Taunt",
      "Empowered Stamina Up",
      "Enrage",
      "Strength Down",
      "Call Assist",
      "Turn Meter Down",
      "Purge Buffs and Start of Battle Ability",
    ],
    Affiliations: "Lantern",
    id: "91",
    affinity: "Energy",
  },
  {
    tier: "B",
    name: "Power Girl",
    subName: "Last Daughter of Earth-2",
    SPD: "115",
    HP: "29335",
    STR: "2858",
    INT: "1553",
    AG: "2174",
    STAM: "2174",
    CRC: "47%",
    CRV: "256%",
    LegendaryOrder:
      "(my preferred order: 2,5,1,4,3 / If you do not prefer she taunts, or is too squishy, and plan to run with MJ or another taunter, a popular order is 5,1,4,2,3)",
    GearSet: "Physical Striker",
    powers: {
      one: {
        name: "Power Punch:",
        dis: {
          Default: "Damage to an enemy, gain +2 Strength Ups.",
          Legendary: "40% Chance to strike twice.",
        },
      },
      two: {
        name: "Solar Charge:",
        dis: {
          Default: "Gain Taunt, +5 Str Ups, +20% Turn Meter.",
          Legendary: "Start battle with Taunt and Death Immunity.",
        },
      },
      three: {
        name: "Zor-L-Slam:",
        dis: {
          Default: "Damage all Enemies, Ignore Shields.",
          Legendary: "+30% Damage if Powergirl has 5+ Strength Ups.",
        },
      },
      four: {
        name: "You’re Dealing with Me!:",
        dis: {
          Default:
            "Passive Ability: If Power Girl takes Damage, Gain 25% Turn Meter, +1 Strength Up.",
          Legendary:
            "Also 40% Chance to use Power Punch on Attacker if Power Girl has 4+ Strength Ups.",
        },
      },
      five: {
        name: "Survivor:",
        dis: {
          Default:
            "Passive Ability: At beginning of each enemy turn, 65% chance to gain Death Immunity if Power Girl has 4+ Strength Ups.",
          Legendary: "Equal Chance to Gain 20% overheal.",
        },
      },
    },
    CombatEffects: [
      "Death Immunity",
      "Strength Up",
      "Taunt",
      "Counter Attacks",
      "Ignore Shield",
      "Turn Meter Up",
      "Start of Battle Ability and Self Heal",
    ],
    Affiliations: "Justice Society of America and Kryptonian",
    id: "95",
    affinity: "Energy",
  },
  {
    tier: "B",
    name: "Reverse Flash",
    subName: "Professor Zoom",
    SPD: "132",
    HP: "29423",
    STR: "2683",
    INT: "1534",
    AG: "2359",
    STAM: "2182",
    CRC: "47%",
    CRV: "256%",
    LegendaryOrder: "1,4,5,3,2",
    GearSet: "Physical Striker",
    powers: {
      one: {
        name: "Phase Jab:",
        dis: {
          Default: "Damage to an enemy ignores Shield.",
          Legendary: "25% chance to use Speed Mirage after using Phase Jab",
        },
      },
      two: {
        name: "Speed Mirage:",
        dis: {
          Default: "Light damage to all enemies, gain 3 Speed Up.",
          Legendary: "70% chance to give 3 Speed Down to a random enemy.",
        },
      },
      three: {
        name: "Negative Speed Force:",
        dis: {
          Default:
            "Damage to an enemy, applies -50% Turn Meter, steals 2 Speed Up. If no Speed Ups on target, gain 2 Agility Up.",
          Legendary: "Applies 2 Speed Down.",
        },
      },
      four: {
        name: "Time Paradox:",
        dis: {
          Default:
            "Only usable with 6 Speed Up on Reverse Flash. Gain 100% max health Heal, 7 Strength Up and 6 Agility Up. Purge all Speed Ups on Reverse Flash.",
          Legendary:
            "Use Phase Jab on a random enemy after using Time Paradox.",
        },
      },
      five: {
        name: "Nobody Faster:",
        dis: {
          Default:
            "Passive Ability: 41% Chance for Reverse Flash to gain 1 Speed Up at the beginning of each character's turn.",
          Legendary:
            "50% Chance to gain 1 Awareness at the beginning of his turn.",
        },
      },
    },
    CombatEffects: [
      "Agility Up",
      "Speed Up",
      "Strength Up",
      "Speed Down",
      "Cooldown Effects",
      "Ignore Shield",
      "Turn Meter Down and Self Heal",
    ],
    Affiliations: "Injustice League",
    id: "101",
    affinity: "Energy",
  },
  {
    tier: "B",
    name: "Starfire",
    subName: "Warrior Princess of Tamaran",
    SPD: "105",
    HP: "27859",
    STR: "1502",
    INT: "2912",
    AG: "2152",
    STAM: "2206",
    CRC: "35%",
    CRV: "228%",
    LegendaryOrder: "1,3],2/5),4 (2021 rework)",
    GearSet: "Special Striker",
    powers: {
      one: {
        name: "Starbolts:",
        dis: {
          Default:
            "Special Damage to an enemy. Always gain 1 Speed Up (2T) and 3 Int Ups (2T).",
          Legendary:
            "Can't Miss and 50% Chance to Purge a random buff from the target.",
        },
      },
      two: {
        name: "Blinding Star:",
        dis: {
          Default:
            "Special Damage to an enemy. Always apply 3 Hit Chance Downs (1T) and 3 Evasion Downs (1T).",
          Legendary:
            "50% chance to apply Stun (1T); 25% additional chance if enemy has Evasion Up.",
        },
      },
      three: {
        name: "Tamaran Super Nova:",
        dis: {
          Default:
            "Heavy Special Damage to all enemies. Lose all Int Ups (Max 5). Apply 10% additional special damage per Int purge.",
          Legendary: "Can't miss if Starfire has 5+ Int Ups.",
        },
      },
      four: {
        name: "Do Not Hurt My Friends!:",
        dis: {
          Default:
            "30% chance to gain 3 Int Ups (1T) and 25% Turn Meter when an ally receives damage.",
          Legendary:
            "If an ally dies, she gains 2 Int Ups (2T) and TAMARAN SUPER NOVA Cooldown -1.",
        },
      },
      five: {
        name: "Glad You Are OK!:",
        dis: {
          Default:
            "75% chance to use Starbolts on a random enemy when an ally is healed.",
          Legendary: "Also gain Death Immunity (1T).",
        },
      },
    },
    CombatEffects: [
      "Death Immunity",
      "Intelligence Up",
      "Speed Up",
      "Evasion Down",
      "Hit Chance Down",
      "Stun",
      "Can't Miss",
      "Cooldown Effects",
      "Out of Turn Attacks",
      "Turn Meter Up and Purge Buffs",
    ],
    Affiliations: "Titans",
    id: "115",
    affinity: "Energy",
  },
  {
    tier: "B",
    name: "Steel",
    subName: "John Henry Irons",
    SPD: "99",
    HP: "39225",
    STR: "2434",
    INT: "1677",
    AG: "1662",
    STAM: "2732",
    CRC: "22%",
    CRV: "228%",
    LegendaryOrder: "4,1],3,2,5",
    GearSet: "Physical Tank",
    powers: {
      one: {
        name: "Momentum:",
        dis: {
          Default: "Damage to a single enemy and Gain 40% Shield.",
          Legendary: "Apply 15% Shield on a random ally.",
        },
      },
      two: {
        name: "Hammer Time:",
        dis: {
          Default:
            "Light Damage to all enemies. Also, apply Buff Immunity (1T).",
          Legendary: "75% Chance to apply 3 Crit Chance Up (2T) to all allies.",
        },
      },
      three: {
        name: "True Man of Steel:",
        dis: {
          Default: "Heavy Damage and apply Stun (1T) to a single enemy.",
          Legendary:
            "Also, gain Critical Immunity (3T) and apply it on a random ally.",
        },
      },
      four: {
        name: "Understudy:",
        dis: {
          Default:
            "Passive: At the end of the enemy's turn, if that enemy is stunned, apply Taunt (1T) and Buff Immunity (1T) on them.",
          Legendary:
            "If Steel is attacked while he has no Shields, counter using Momentum.",
        },
      },
      five: {
        name: "Hope:",
        dis: {
          Default: "Passive: At the end of his turn, gain Taunt (1T).",
          Legendary:
            "50% Chance to Stun (1T) a random enemy at the beginning of the battle.",
        },
      },
    },
    CombatEffects: [
      "Crit Chance Up",
      "Crit Immunity",
      "Taunt",
      "Buff Immunity",
      "Stun",
      "Counter Attacks",
      "Apply Shield",
      "Apply Taunt to enemy and Start of Battle Ability",
    ],
    Affiliations: "Justice League",
    id: "160",
    affinity: "Energy",
  },
  {
    tier: "B",
    name: "Steppenwolf",
    subName: "General of Apokolips",
    SPD: "106",
    HP: "40641",
    STR: "2371",
    INT: "1508",
    AG: "1745",
    STAM: "2874",
    CRC: "22%",
    CRV: "228%",
    LegendaryOrder: "4,1,5,2,3 (updated for rework - no change)",
    GearSet: "Physical Tank",
    powers: {
      one: {
        name: "Cleaving Axe:",
        dis: {
          Default:
            "Damage to an enemy. Can't Miss. +30% damage per Hit Chance Up on self (limit 5).",
          Legendary:
            "On Critical Hit, apply 2 Hit Chance Up to teammates and 75% Turn Meter Up to a random ally.",
        },
      },
      two: {
        name: "Boomtube Resupply:",
        dis: {
          Default:
            "Apply 4 Hit Chance Up and 3 Crit Chance Up and 16% Turn Meter Up to all allies. Buffs are doubled if there are Evasion Up in enemy team.",
          Legendary: "Purge 3 Debuffs from all allies.",
        },
      },
      three: {
        name: "Earth-Shattering Strike:",
        dis: {
          Default:
            "Damage to all enemies. Apply 5 Evasion Down that Can't Miss.",
          Legendary:
            "Use Earth-Shattering Strike when an ally misses an attack.",
        },
      },
      four: {
        name: "Might of the New Gods:",
        dis: {
          Default:
            "When teammates deal a Critical Hit on their turn, they gain 21% Turn Meter Up and 1 Hit Chance Up.",
          Legendary: "Steppenwolf gains the same amount of Turn Meter Up.",
        },
      },
      five: {
        name: "March Toward Annihilation:",
        dis: {
          Default:
            "All allies gain Enrage Immunity at the start of battle. At the start of each of your allies' turns, they gain 2 Hit Chance Up.",
          Legendary: "Allies also gain 1 Crit Chance Up.",
        },
      },
    },
    CombatEffects: [
      "Crit Chance Up",
      "Enrage Immunity",
      "Hit Chance Up",
      "Evasion Down",
      "Out of Turn Attacks",
      "Turn Meter Up",
      "Purge Debuffs",
      "Start of Battle Ability and Can't Miss",
    ],
    Affiliations: "Apokolips",
    id: "117",
    affinity: "Energy",
  },
  {
    tier: "C",
    name: "Atrocitus",
    subName: "The First Red Lantern",
    SPD: "110",
    HP: "33342",
    STR: "2383",
    INT: "1581",
    AG: "1825",
    STAM: "2699",
    CRC: "25%",
    CRV: "228%",
    LegendaryOrder: "5,3,2,4,1 (leader) / non leader 3,4,2,5,1",
    GearSet: "Physical Support",
    powers: {
      one: {
        name: "Rage Charge:",
        dis: {
          Default: "Damage to an enemy. Gain 2 Strength Ups.",
          Legendary: "+25% damage per Enraged ally",
        },
      },
      two: {
        name: "Choke On My Rage:",
        dis: {
          Default:
            "Light Damage and apply 4 Crit Chance Downs and 4 Int Downs. 25% chance to call Assist from each Enraged teammate.",
          Legendary: "+65% chance to call Assist from each Enraged teammate",
        },
      },
      three: {
        name: "Collateral Fury:",
        dis: {
          Default:
            "Damage to all enemies. 75% chance to apply Enrage and 2 Strength Ups to each teammate.",
          Legendary: "All Enraged teammates attack random enemies",
        },
      },
      four: {
        name: "Red Power Ring:",
        dis: {
          Default: "30% chance to revive teammates with 40% Health and Enrage.",
          Legendary:
            "Equal chance to revive Atrocitus with 40% Health and 20% Shield",
        },
      },
      five: {
        name: "Berserker:",
        dis: {
          Default:
            "Team Leader: Allies that are Enraged gain +50% Damage and +50% Speed.",
          Legendary:
            "At the beginning of battle, apply Enrage to teammates. Also apply 2 Strength Ups and 15% Shield to all allies.",
        },
      },
    },
    CombatEffects: [
      "Strength Up",
      "Crit Chance Down",
      "Enrage",
      "Intelligence Down",
      "Call Assist",
      "Revive",
      "Apply Shield and Start of Battle Ability",
    ],
    Affiliations: "Lantern",
    id: "8",
    affinity: "Physical",
  },
  {
    tier: "C",
    name: "Bane",
    subName: "Venom Addict",
    SPD: "88",
    HP: "39958",
    STR: "2148",
    INT: "1418",
    AG: "1785",
    STAM: "2806",
    CRC: "22%",
    CRV: "228%",
    LegendaryOrder: "4,1,2,2,3",
    GearSet: "Physical Tank",
    powers: {
      one: {
        name: "Venom Punch:",
        dis: {
          Default: "Damage to an enemy. +105% damage if Bane is mending.",
          Legendary:
            "+20% Critical Hit Chance if Bane is mending. Apply 5 Strength Downs to Target if Bane is overhealed.",
        },
      },
      two: {
        name: "Venom Injection:",
        dis: {
          Default:
            "Gain 4 mends, Light heal to Bane.Legendary 1: Gain Stun Immunity and Critical Immunity.Legendary 2: +2 Strength UpsBackbreaker: Heavy damage to an enemy. 100% chance to stun target if Bane is mending.",
          Legendary:
            "-1 CooldownI Am Bane!(Passive): 45% Chance to use Venom Injection if Bane takes damage.",
        },
      },
      three: {
        name: "",
        dis: { Default: "", Legendary: "" },
      },
      four: {
        name: "",
        dis: { Default: "", Legendary: "" },
      },
      five: {
        name: "",
        dis: { Default: "", Legendary: "" },
      },
    },
    CombatEffects: [
      "Crit Immunity",
      "Mends",
      "Strength Up",
      "Stun Immunity",
      "Strength Down",
      "Stun",
      "Out of Turn Attacks and Self Heal",
    ],
    Affiliations: "Injustice League",
    id: "9",
    affinity: "Physical",
  },
  {
    tier: "C",
    name: "Batman",
    subName: "Caped Crusader",
    SPD: "118",
    HP: "28837",
    STR: "2513",
    INT: "1572",
    AG: "2198",
    STAM: "2124",
    CRC: "47%",
    CRV: "256%",
    LegendaryOrder: "5,3,]1,2,4 (updated for 2021 rework)",
    GearSet: "Physical Striker",
    powers: {
      one: {
        name: "Vigilante Strike:",
        dis: {
          Default: "Damage to an enemy, apply Silence if Batman is Invisible.",
          Legendary: "Gain 40% Turn Meter if Batman is Invisible.",
        },
      },
      two: {
        name: "Smoke Bomb:",
        dis: {
          Default:
            "Gain Invisibility (2T) and remove True Sight from all the enemies. Also 60% chance to gain 5 Evasion Ups (2T).",
          Legendary: "Additional 4 Evasion Ups (2T).",
        },
      },
      three: {
        name: "Grapnel Kick:",
        dis: {
          Default:
            "Heavy Damage to an enemy that cannot miss if Batman is Invisible.",
          Legendary:
            "+50% Crit Damage if Batman is Invisible, +50% chance to gain Invisibility (2T).",
        },
      },
      four: {
        name: "Shadow Trained:",
        dis: {
          Default:
            "Passive: 80% chance to gain Invisibility (1T) if Batman deals damage.",
          Legendary: "Also Purge 2 debuffs from Batman.",
        },
      },
      five: {
        name: "Shadow Cover:",
        dis: {
          Default:
            "Passive: At the beginning of his turn, if Batman is invisible gain a medium Overheal.",
          Legendary: "Batman starts the combat with Invisibility (1T).",
        },
      },
    },
    CombatEffects: [
      "Evasion Up",
      "Invisibility",
      "Silence",
      "Can't Miss",
      "Turn Meter Up",
      "Purge Buffs",
      "Purge Debuffs",
      "Start of Battle Ability and Self Heal",
    ],
    Affiliations: "Bat Family and Justice League",
    id: "12",
    affinity: "Physical",
  },
  {
    tier: "C",
    name: "Batman",
    subName: "Jace Fox",
    SPD: "120",
    HP: "37996",
    STR: "1639",
    INT: "2478",
    AG: "1732",
    STAM: "2735",
    CRC: "15%",
    CRV: "178%",
    LegendaryOrder: "5,4,2,1,3 (early thoughts)",
    GearSet: "Special Tank",
    powers: {
      one: {
        name: "Batarangs Trio:",
        dis: {
          Default:
            "Special Damage to an enemy, 75% Chance to apply a second hit and 50% chance to apply a third hit.",
          Legendary: "Gain 1 Int Up (1T) for every hit.",
        },
      },
      two: {
        name: "Gotham Savior:",
        dis: {
          Default:
            "Gain 50% Shield and 4 Affinity Resist Ups (2T). Gain 50% additional Shield if Jace Fox is Taunting.",
          Legendary: "Gain 1 Awareness",
        },
      },
      three: {
        name: "Gliding Kick:",
        dis: {
          Default:
            "Special Damage to all enemies and apply 3 Strength Downs (2T) to all enemies.",
          Legendary: "If Jace Fox is taunting gain 2 Agility Ups (2T).",
        },
      },
      four: {
        name: "The Next Batman:",
        dis: {
          Default:
            "Passive: If Jace Fox is affected by Turn Meter Down gains 4 Affinity Resist Ups (2T) and 4 Agility Ups (2T).",
          Legendary: "Use Batarangs Trio on the attacker.",
        },
      },
      five: {
        name: "Resilience Stance:",
        dis: {
          Default:
            "Passive: At the start of every Jace Fox turn, 75% Chance to gain Taunt (2T).",
          Legendary: "Start the battle with Taunt (1T).",
        },
      },
    },
    CombatEffects: [
      "Affinity Resist Up",
      "Agility Up",
      "Awareness",
      "Intelligence Up",
      "Taunt",
      "Strength Down",
      "Counter Attacks",
      "Apply Shield and Start of Battle Ability",
    ],
    Affiliations: "Bat Family",
    id: "164",
    affinity: "Physical",
  },
  {
    tier: "C",
    name: "Batman Who Laughs",
    subName: "Twisted Dark Knight",
    SPD: "108",
    HP: "29605",
    STR: "2600",
    INT: "1516",
    AG: "2090",
    STAM: "2200",
    CRC: "47%",
    CRV: "256%",
    LegendaryOrder: "4,3],1,2,5",
    GearSet: "Physical Striker",
    powers: {
      one: {
        name: "The Bat-Smile:",
        dis: {
          Default: "Damage to a single target. Gains 6 Crit Chance Ups (2T).",
          Legendary:
            "If the target has Crit Chance Up, apply 30% Turn Meter Down.",
        },
      },
      two: {
        name: "Dark Treason:",
        dis: {
          Default:
            "Damage to all enemies. Apply 2 Crit Chance Downs (1T) to each target. 120% Additional Damage if an enemy has Crit Chance Up.",
          Legendary:
            "Gain 3 Crit Damage Ups (1T) if an enemy has Crit Chance Up.",
        },
      },
      three: {
        name: "Start with a Bang:",
        dis: {
          Default:
            "Damage to a single target. If the enemy has Speed Ups, Purges them (Max 3).",
          Legendary: "50% Chance to gain Medium Overheal.",
        },
      },
      four: {
        name: "One Bad Day:",
        dis: {
          Default:
            "Every time Batman Who Laughs is attacked, he has a 75% chance to apply 25% Turn Meter Down on the enemy team.",
          Legendary:
            "When an enemy dies, Batman Who Laughs uses The Bat-Smile on another target.",
        },
      },
      five: {
        name: "Crow Crow Crow:",
        dis: {
          Default:
            "75% Chance to apply Enrage (2T) on a random enemy at the end of his turn.",
          Legendary: "If Enrage is in effect, apply 4 Agility Downs (2T).",
        },
      },
    },
    CombatEffects: [
      "Crit Chance Up",
      "Crit Damage Up",
      "Agility Down",
      "Crit Chance Down",
      "Enrage",
      "Out of Turn Attacks",
      "Turn Meter Down",
      "Purge Buffs and Self Heal",
    ],
    Affiliations: "Dark Knights",
    id: "156",
    affinity: "Physical",
  },
  {
    tier: "C",
    name: "Captain Boomerang",
    subName: "Aussie Marksman",
    SPD: "116",
    HP: "29859",
    STR: "2544",
    INT: "1466",
    AG: "2174",
    STAM: "2226",
    CRC: "47%",
    CRV: "256%",
    LegendaryOrder: "3,1],4,2,5",
    GearSet: "Physical Striker",
    powers: {
      one: {
        name: "Leading Edge:",
        dis: {
          Default: "Damage to an enemy. Gain 2 Empowered Strength Up (2T).",
          Legendary: "Steal up to 2 Buffs from target.",
        },
      },
      two: {
        name: "Boom-barrage:",
        dis: {
          Default:
            "Damage to an enemy in 3 hits. Each hit has a 70% chance to apply 2 Speed Down (2T).",
          Legendary: "50% Chance to reduce target Turn Meter by 75%.",
        },
      },
      three: {
        name: "Outback Throw:",
        dis: {
          Default:
            "Damage to all enemies and gain 2 Empowered Strength Up (2T) if any enemy has 1 or more Speed Down.",
          Legendary: "Always apply 15% Turn Meter Down to all enemies.",
        },
      },
      four: {
        name: "Snap Out of It:",
        dis: {
          Default:
            "At the beginning of each of Captain Boomerang's turns, 70% chance to remove all Stun from allies.",
          Legendary: "Also gain 1 Empowered Strength Up (2T).",
        },
      },
      five: {
        name: "What Goes Around, Comes Around:",
        dis: {
          Default:
            "At the end of each enemy turn, apply 4 Speed Down (2T) if that enemy applied a debuff to an ally.",
          Legendary: "Captain Boomerang is immune to Silence.",
        },
      },
    },
    CombatEffects: [
      "Silence Immunity",
      "Empowered Strength Up",
      "Speed Down",
      "Buff Stealing and Turn Meter Down",
    ],
    Affiliations: "Suicide Squad",
    id: "28",
    affinity: "Physical",
  },
  {
    tier: "C",
    name: "Deadshot",
    subName: "Hired Gun",
    SPD: "124",
    HP: "25936",
    STR: "2345",
    INT: "1418",
    AG: "1992",
    STAM: "1834",
    CRC: "47%",
    CRV: "256%",
    LegendaryOrder: "Leadership Build (recommended) 5,4,1,3,2",
    GearSet: "Physical Striker",
    powers: {
      one: {
        name: "Wrist Guns:",
        dis: {
          Default: "Light damage and 9% True Damage to an enemy.",
          Legendary: "Gain 100% turn meter if target killed.",
        },
      },
      two: {
        name: "Aim Down Sights:",
        dis: {
          Default: "Gain 5 Crit Chance Ups, 50% chance to gain 40% turn meter.",
          Legendary: "Cooldown -1",
        },
      },
      three: {
        name: "Bounty Shot:",
        dis: {
          Default:
            "Heavy damage to an enemy. Cooldown -1 for all Deadshot moves if target killed.",
          Legendary: "Gain Invisibility if target killed.",
        },
      },
      four: {
        name: "Perfect Aim:",
        dis: {
          Default: "Passive Ability – Can’t Miss and +40% Crit Damage on self.",
          Legendary: "Gain Invisibility at start of battle.",
        },
      },
      five: {
        name: "Eagle Eye:",
        dis: {
          Default: "Team Leader – All allies gain +12% Crit Chance.",
          Legendary: "All allies gain +100% Crit Chance on their first turn.",
        },
      },
    },
    CombatEffects: [
      "Crit Chance Up",
      "Invisibility",
      "Can't Miss",
      "Cooldown Effects",
      "True Damage",
      "Turn Meter Up and Start of Battle Ability",
    ],
    Affiliations: "Suicide Squad",
    id: "38",
    affinity: "Physical",
  },
  {
    tier: "C",
    name: "Giganta",
    subName: "Colossal Criminal",
    SPD: "92",
    HP: "33819",
    STR: "2179",
    INT: "1494",
    AG: "2116",
    STAM: "2622",
    CRC: "47%",
    CRV: "256%",
    LegendaryOrder: "5,3,2],1,4 (updated for rework)",
    GearSet: "Physical Striker",
    powers: {
      one: {
        name: "Giga-Stomp:",
        dis: {
          Default:
            "Damage to an enemy. Apply 10% True Damage if Giganta has +5 Empowered or regular Stamina Ups.",
          Legendary:
            "50% chance to use Growth Spurt if Giganta's HP is below 30%.",
        },
      },
      two: {
        name: "Growth Spurt:",
        dis: {
          Default:
            "Gain 5 Empowered Agility Ups (2T), 5 Empowered Stamina Ups (2T), and 5 Affinity Resistance Ups (2T).",
          Legendary:
            "If Giganta is Taunting, increase the duration of buffs given by 1 Turn.",
        },
      },
      three: {
        name: "Titanic Smash:",
        dis: {
          Default: "Heavy damage to an enemy. Gain 3 Awareness (Always).",
          Legendary:
            "Gain 4 Taunts (2T). If already taunting, gain Crit Immunity (2T).",
        },
      },
      four: {
        name: "Look At Me!:",
        dis: {
          Default:
            "80% chance to Gain 3 Empowered Stamina Ups (1T) and 1 Taunt (1T) at the beginning of every enemy's turn if a teammate's HP is below 40%.",
          Legendary:
            "Also apply 3 Empowered Agility Ups (1T) to teammates with HP below 40%..",
        },
      },
      five: {
        name: "I'm The Toughest!:",
        dis: {
          Default:
            "Gain 2 Empowered Agility Ups (2T) every time anyone gains a Strength Up.",
          Legendary:
            "Start the battle with 3 Awareness (Always) and Taunt (2T).",
        },
      },
    },
    CombatEffects: [
      "Affinity Resist Up",
      "Awareness",
      "Crit Immunity",
      "Taunt",
      "Empowered Agility Up",
      "Empowered Stamina Up",
      "True Damage",
      "Start of Battle Ability and Self Heal",
    ],
    Affiliations: "Secret Society of Super-Villains and Injustice League",
    id: "52",
    affinity: "Physical",
  },
  {
    tier: "C",
    name: "Harley Quinn",
    subName: "Quite Vexing",
    SPD: "109",
    HP: "26372",
    STR: "2307",
    INT: "1464",
    AG: "1942",
    STAM: "1877",
    CRC: "47%",
    CRV: "256%",
    LegendaryOrder: "3,4,2,2,1",
    GearSet: "Physical Striker",
    powers: {
      one: {
        name: "Weapon of Choice:",
        dis: {
          Default: "Damage to an enemy, gain 2 Crit Chance Ups.",
          Legendary: "Silence enemy on Critical Hit.",
        },
      },
      two: {
        name: "Distract and Destroy:",
        dis: {
          Default:
            "Apply 3 Agility Downs, -23% Turn Meter and Call Assist on an enemy.",
          Legendary:
            "Apply 3 Affinity Resistance Downs.Legendary 2: Call an extra assist if 4 debuffs on target.\nLove/Hate: Damage to an enemy, +150% crit damage.",
        },
      },
      three: {
        name: "",
        dis: { Default: "", Legendary: "" },
      },
      four: {
        name: "",
        dis: { Default: "", Legendary: "" },
      },
      five: {
        name: "",
        dis: { Default: "", Legendary: "" },
      },
    },
    CombatEffects: [
      "Crit Chance Up",
      "Strength Up",
      "Agility Down",
      "Silence",
      "Affinity Resist Down",
      "Call Assist",
      "True Damage",
      "Turn Meter Up and Turn Meter Down",
    ],
    Affiliations: "Suicide Squad",
    id: "58",
    affinity: "Physical",
  },
  {
    tier: "C",
    name: "Hawk",
    subName: "The Avatar Of War",
    SPD: "95",
    HP: "39359",
    STR: "2489",
    INT: "1671",
    AG: "1594",
    STAM: "2746",
    CRC: "22%",
    CRV: "228%",
    LegendaryOrder: "2,1,5],4,3",
    GearSet: "Physical Tank",
    powers: {
      one: {
        name: "Seeing Red:",
        dis: {
          Default: "Damage and apply 4 Agility Downs (2T) to a single target.",
          Legendary:
            "Apply Buff Immunity (1T). If Dove is in the Team, apply 100% additional damage if the enemy is affected by Stun.",
        },
      },
      two: {
        name: "Chaotic Impulse:",
        dis: {
          Default:
            "Damage to a single target. Also, 80% chance to gain 3 Mends (3T). If Dove is in the team, apply 60% bonus Damage.",
          Legendary: "Apply Stun to the primary target.",
        },
      },
      three: {
        name: "Berserker:",
        dis: {
          Default:
            "Damage and 50% Turn Meter Down to all enemies. Apply Buff Immunity (1T) to the primary target.",
          Legendary: "Applies 2 Agility Downs (2T) to the primary target.",
        },
      },
      four: {
        name: "Haggard:",
        dis: {
          Default:
            "As long as Dove is on the team, Hawk gains 1 Critical Immunity (2T) at the start of his turn.",
          Legendary: "Also Hawk gains 1 Empowered Stamina Up (2T).",
        },
      },
      five: {
        name: "Sharp Eye:",
        dis: {
          Default:
            "At the end of his turn, Hawk has a 55% chance to apply Stun on a random enemy.",
          Legendary:
            "5% additional chance to Stun the target for each debuff applied to them (Max 5).",
        },
      },
    },
    CombatEffects: [
      "Crit Immunity",
      "Mends",
      "Empowered Stamina Up",
      "Agility Down",
      "Buff Immunity",
      "Stun and Turn Meter Down",
    ],
    Affiliations: "Titans",
    id: "154",
    affinity: "Physical",
  },
  {
    tier: "C",
    name: "Hush",
    subName: "Thomas Elliot",
    SPD: "115",
    HP: "31430",
    STR: "2788",
    INT: "1483",
    AG: "2104",
    STAM: "2383",
    CRC: "47%",
    CRV: "256%",
    LegendaryOrder: "1,3,2],5,4 (2022 rework)",
    GearSet: "Physical Striker",
    powers: {
      one: {
        name: "Precise Scalpel Incision:",
        dis: {
          Default: "Damage to an enemy. Apply Silence (1T) to the target.",
          Legendary: "Gain 3 Mends and Light Overheal",
        },
      },
      two: {
        name: "King's Gambit:",
        dis: {
          Default:
            "80% Chance to gain 3 Awareness. Hush uses Precise Scalpel Incision on the target, 70% Chance to use Precise Scalpel Incision twice. Then force an enemy to attack Hush.",
          Legendary: "Gain Debuff Immunity (2T) before the enemy attack.",
        },
      },
      three: {
        name: "Hush Little Baby:",
        dis: {
          Default:
            "Heavy damage to an enemy. Apply an extended Silence (2T) to the target.",
          Legendary: "Gain 100% Turn Meter Up if the target is killed.",
        },
      },
      four: {
        name: "Revel in Their Demise:",
        dis: {
          Default:
            "All of Hush's attacks deal 50% additional damage to targets that are Silenced.",
          Legendary: "Gain Invisibility (2T) after using King's Gambit.",
        },
      },
      five: {
        name: "Speedy Counter:",
        dis: {
          Default:
            "If any ally is attacked by a silenced enemy, counterattack with Precise Scalpel Incision.",
          Legendary:
            "Gain permanent Strength Up (Always) each time an enemy dies.",
        },
      },
    },
    CombatEffects: [
      "Awareness",
      "Debuff Immunity",
      "Invisibility",
      "Mends",
      "Strength Up",
      "Silence",
      "Counter Attacks",
      "Turn Meter Up and Self Heal",
    ],
    Affiliations: "",
    id: "139",
    affinity: "Physical",
  },
  {
    tier: "C",
    name: "Joker",
    subName: "The Clown Prince of Crime",
    SPD: "110",
    HP: "27236",
    STR: "1857",
    INT: "3199",
    AG: "1909",
    STAM: "2144",
    CRC: "35%",
    CRV: "228%",
    LegendaryOrder: "2,1,5,3,4 (updated for rework)",
    GearSet: "Special Striker",
    powers: {
      one: {
        name: "BIFF!:",
        dis: {
          Default:
            "Special Damage to an enemy, apply 2 Intelligence Down (2T). Apply 1 extra Intelligence Down (2T) for each Bleed on any hero (maximum 5).",
          Legendary: "+100 Crit Chance if enemy is Bleeding",
        },
      },
      two: {
        name: "Joker Toxin:",
        dis: {
          Default:
            "Light Special Damage to all enemies, apply 3 Bleeds (3T) on enemy the team and Enrage (1T) to one enemy.",
          Legendary: "Gain 40% Turn Meter",
        },
      },
      three: {
        name: "Acid Humor:",
        dis: {
          Default:
            "Heavy special damage to an enemy. +100% critical chance if an enemy is dead, +150% critical damage to a bleeding target.",
          Legendary: "Apply heal immunity",
        },
      },
      four: {
        name: "The Killing Joke:",
        dis: {
          Default: "Passive Ability: Gain a Large Overheal if an enemy dies.",
          Legendary: "When Joker dies, apply 3 Bleeds (3T) on all enemies",
        },
      },
      five: {
        name: "Pushing the Right Buttons:",
        dis: {
          Default:
            "Passive Ability: 60% chance to apply 2 Intelligence Down (1T) and 2 Bleeds (3T) to one of Joker's targets when he attacks.",
          Legendary: "Use BIFF! on bleeding enemies that damage Joker",
        },
      },
    },
    CombatEffects: [
      "Bleeds",
      "Enrage",
      "Heal Immunity",
      "Intelligence Down",
      "Counter Attacks",
      "Turn Meter Up and Self Heal",
    ],
    Affiliations: "Injustice League",
    id: "69",
    affinity: "Physical",
  },
  {
    tier: "C",
    name: "Killer Croc",
    subName: "King of the Sewers",
    SPD: "110",
    HP: "30463",
    STR: "2586",
    INT: "1226",
    AG: "2316",
    STAM: "2286",
    CRC: "47%",
    CRV: "256%",
    LegendaryOrder: "3,1,2,4,5 (updated for rework)",
    GearSet: "Physical Striker",
    powers: {
      one: {
        name: "Wild Lunge:",
        dis: {
          Default: "Damage to an enemy and apply 3 Bleeds.",
          Legendary:
            "Steal all Strength Ups on target and apply 2 additional Bleed if target has Taunt.",
        },
      },
      two: {
        name: "The Hunt Is On:",
        dis: {
          Default:
            "Gain Invisibility and Debuff Immunity. Gain 20% Turn Meter for each Bleed on the enemy team (limit 5).",
          Legendary: "Gain 5 Crit Chance Up.",
        },
      },
      three: {
        name: "Cannibal Claws:",
        dis: {
          Default:
            "Heavy Damage to an enemy. 50% Chance to apply Buff Immunity, 100% if target is Taunting.",
          Legendary: "Purge 5 Buffs on target.",
        },
      },
      four: {
        name: "King Croc:",
        dis: {
          Default:
            "At the end of Killer Croc and each ally's turn, 40% Chance to use Cannibal Claws if an enemy has Taunt.",
          Legendary: "Also apply 3 Bleeds on target.",
        },
      },
      five: {
        name: "Lurking In The Depths:",
        dis: {
          Default:
            "When Killer Croc takes damage, apply Taunt to attacker and gain 20% Turn Meter Up.",
          Legendary:
            "50% Chance to gain a 12% True Heal if Killer Croc is below 50% Health at the end of an enemy's turn.",
        },
      },
    },
    CombatEffects: [
      "Crit Chance Up",
      "Invisibility",
      "Bleeds",
      "Buff Immunity",
      "Buff Stealing",
      "Out of Turn Attacks",
      "Apply Taunt to enemy",
      "Turn Meter Up",
      "Purge Buffs and Self Heal",
    ],
    Affiliations: "Arkham Inmates and Suicide Squad",
    id: "72",
    affinity: "Physical",
  },
  {
    tier: "C",
    name: "Lex Luthor",
    subName: "Assault Warsuit",
    SPD: "93",
    HP: "39776",
    STR: "2330",
    INT: "1493",
    AG: "1541",
    STAM: "2788",
    CRC: "22%",
    CRV: "228%",
    LegendaryOrder: "1,3,5,2,4 (updated for rework)",
    GearSet: "Physical Tank",
    powers: {
      one: {
        name: "A Cut Above:",
        dis: {
          Default:
            "Damage to single enemy, +150% damage if Lex is above 50% Health.",
          Legendary: "+100% Crit Chance if Lex is above 50% Health",
        },
      },
      two: {
        name: "Man Of The Hour:",
        dis: {
          Default: "Gain 40% Shield and 5 Stamina Ups [3 turns].",
          Legendary:
            "Gain Damage Immunity [2 turns] if Lex is above 50% Health",
        },
      },
      three: {
        name: "Anti-Alien Strike:",
        dis: {
          Default:
            "Damage to an enemy, purge 5 buffs and apply 4 Strength Downs [2 turns].",
          Legendary: "+100% Hit Chance and purge 3 buffs",
        },
      },
      four: {
        name: "Nuclear Option:",
        dis: {
          Default:
            "Damage to all enemies, purge 7 debuffs from Lex. Starts on 4 turn Cooldown.",
          Legendary: "Damage +100% if Lex is at full Health",
        },
      },
      five: {
        name: "You Scratch My Back:",
        dis: {
          Default:
            "Apply 4 Affinity Ups [1 turn] and 16% Turn Meter Up to other allies that buff Lex.",
          Legendary: "Apply 8% Shield to other allies that buff Lex",
        },
      },
    },
    CombatEffects: [
      "Affinity Power Up",
      "Damage Immunity",
      "Can't Miss",
      "Apply Shield",
      "Purge Buffs and Self Heal",
    ],
    Affiliations: "Injustice League and Secret Society of Super-Villains",
    id: "75",
    affinity: "Physical",
  },
  {
    tier: "C",
    name: "Metallo",
    subName: "Cybernetic Criminal",
    SPD: "113",
    HP: "32591",
    STR: "2592",
    INT: "1457",
    AG: "2168",
    STAM: "2624",
    CRC: "25%",
    CRV: "228%",
    LegendaryOrder: "5,2,1],3,4",
    GearSet: "Physical Support",
    powers: {
      one: {
        name: "Bionic Punch:",
        dis: {
          Default:
            "Damage to a single enemy. Apply 2 Strength Down (2T) if Metallo is taunting.",
          Legendary: "+10% Additional damage. +30% if Metallo is taunting",
        },
      },
      two: {
        name: "Hard Alloy Strike:",
        dis: {
          Default: "Heavy Damage to an enemy and gain 5 Strength Ups (2T).",
          Legendary:
            "50% Chance to apply Stun (1T) on target. 100% Chance if Metallo is taunting",
        },
      },
      three: {
        name: "Kryptonite Radiation Field:",
        dis: {
          Default:
            "Damage to all enemies and purge 2 Buffs on targets. 75% Chance to gain Taunt.",
          Legendary: "Purge 2 additional Buffs on targets",
        },
      },
      four: {
        name: "Technological Reliability:",
        dis: {
          Default:
            "75% chance to gain 4 Strength Ups (2T) if Metallo takes damage.",
          Legendary: "Gain 1 Permanent Strength Up",
        },
      },
      five: {
        name: "Mechanical Regeneration:",
        dis: {
          Default:
            "If Metallo has 4 or more Strength Ups at the beginning of each of his turns, 75% chance to gain 5 Mends (3T).",
          Legendary: "Start the combat with Taunt (2T) and Crit Immunity (2T)",
        },
      },
    },
    CombatEffects: [
      "Crit Immunity",
      "Mends",
      "Strength Up",
      "Taunt",
      "Strength Down",
      "Stun",
      "Start of Battle Ability and Purge Buffs",
    ],
    Affiliations: "Secret Society of Super-Villains",
    id: "84",
    affinity: "Physical",
  },
  {
    tier: "C",
    name: "Ravager",
    subName: "Rose Wilson",
    SPD: "103",
    HP: "28463",
    STR: "2683",
    INT: "1379",
    AG: "2261",
    STAM: "2086",
    CRC: "47%",
    CRV: "256%",
    LegendaryOrder: "4,3,5,1,2",
    GearSet: "Physical Striker",
    powers: {
      one: {
        name: "Death Barrage:",
        dis: {
          Default:
            "Apply 2 light damage bursts to an enemy. 50% chance to do a 3rd damage burst.",
          Legendary: "Gain a 5% True Heal for each burst.",
        },
      },
      two: {
        name: "Exploding Canister:",
        dis: {
          Default: "Damage to all enemies. 35% chance to gain Damage Immunity.",
          Legendary: "Gain 2 Strength Up per silenced enemy.",
        },
      },
      three: {
        name: "Ravage!:",
        dis: {
          Default:
            "Heavy Damage to an enemy. Ignore Shields and deal additional 150% damage if the target is below 25% health.",
          Legendary: "If the target is killed, use Ravage! on a random enemy.",
        },
      },
      four: {
        name: "Silencing Strikes:",
        dis: {
          Default:
            "Passive Ability: 45% chance to Silence the target each time Ravager deals damage.",
          Legendary: "Start the battle with 4 Strength Up.",
        },
      },
      five: {
        name: "Heritage:",
        dis: {
          Default:
            "Passive Ability: 65% chance to gain Damage Immunity at the beginning of an enemy turn if that enemy is Silenced.",
          Legendary:
            "At the end of each teammate turn, 30% chance to use Death Barrage on a random enemy if any enemy is Silenced.",
        },
      },
    },
    CombatEffects: [
      "Damage Immunity",
      "Strength Up",
      "Silence",
      "Out of Turn Attacks",
      "Ignore Shield",
      "Start of Battle Ability and Self Heal",
    ],
    Affiliations: "Titans",
    id: "97",
    affinity: "Physical",
  },
  {
    tier: "C",
    name: "S.T.R.I.P.E",
    subName: "Pat Dugan",
    SPD: "83",
    HP: "39359",
    STR: "2506",
    INT: "1531",
    AG: "1716",
    STAM: "2746",
    CRC: "22%",
    CRV: "228%",
    LegendaryOrder: "2,1,3,4,5",
    GearSet: "Physical Tank",
    powers: {
      one: {
        name: "Hyper Charged Strike:",
        dis: {
          Default:
            "Damage to an enemy. +60% Crit Chance Up and 100% Crit Damage Up if Overhealed.",
          Legendary:
            "If S.T.R.I.P.E is overhealed, use Hypercharged Strike again and gain 20% Turn Meter Up.",
        },
      },
      two: {
        name: "Repair Routine Activation:",
        dis: {
          Default: "Heavy Damage to an enemy and gain 30% True Heal.",
          Legendary: "Call assist on target.",
        },
      },
      three: {
        name: "Overpower:",
        dis: {
          Default:
            "Damage to all enemies. Use Hypercharged Strike on a random enemy if there is a dead enemy.",
          Legendary: "Gain 15% Turn Meter per alive enemy.",
        },
      },
      four: {
        name: "Tactical Advantage:",
        dis: {
          Default:
            "50% Chance to use Repair Routine Activation and gain Damage Immunity each time an enemy dies.",
          Legendary: "Also gain 5 Strength Up.",
        },
      },
      five: {
        name: "Analysis Complete:",
        dis: {
          Default:
            "50% chance to gain 2 Crit Chance Up and 30% Turn Meter Up if an enemy gets 1+ buff on their turn. 10% chance to use at start of S.T.R.I.P.E.'s turn, if Overhealed.",
          Legendary:
            "At the end of each teammate turn, gain 1 Strength Up if an enemy got 1 or more Debuffs.",
        },
      },
    },
    CombatEffects: [
      "Crit Chance Up",
      "Damage Immunity",
      "Strength Up",
      "Call Assist",
      "Turn Meter Up and Self Heal",
    ],
    Affiliations: "Justice Society of America",
    id: "104",
    affinity: "Physical",
  },
  {
    tier: "C",
    name: "Scarecrow",
    subName: "Master of Fear",
    SPD: "119",
    HP: "28902",
    STR: "2390",
    INT: "1629",
    AG: "2228",
    STAM: "2255",
    CRC: "25%",
    CRV: "228%",
    LegendaryOrder: "4,1,3,5,2 (updated for rework)",
    GearSet: "Physical Support",
    powers: {
      one: {
        name: "Spine Tingler:",
        dis: {
          Default: "Damage and apply 3 Hit Chance Downs to an enemy.",
          Legendary: "Apply 2 additional Hit Chance Downs",
        },
      },
      two: {
        name: "Fear Gas:",
        dis: {
          Default:
            "Apply 2-4 Hit Chance Downs to all enemies and gain 30% Turn Meter Up.",
          Legendary:
            "If Invisible, apply 1 Agility Down for each Hit Chance Down",
        },
      },
      three: {
        name: "Living Nightmare:",
        dis: {
          Default:
            "Damage to an enemy, +10% damage per debuff on target (Max 10).",
          Legendary: "7% chance per debuff on target to apply Stun",
        },
      },
      four: {
        name: "Scare Tactics:",
        dis: {
          Default:
            "Start battle with Invisibility, 40% chance to gain Invisibility and 10% Turn Meter Up at the start of each enemy's turn.",
          Legendary: "Equal chance to apply 3 Hit Chance Downs to enemy",
        },
      },
      five: {
        name: "Dread to Rights:",
        dis: {
          Default:
            "If enemies miss an attack, 50% chance to use Living Nightmare.",
          Legendary:
            "Apply 2 speed downs to target if Dread to Rights is triggered",
        },
      },
    },
    CombatEffects: [
      "Invisibility",
      "Agility Down",
      "Hit Chance Down",
      "Speed Down",
      "Stun",
      "Out of Turn Attacks",
      "Turn Meter Up and Start of Battle Ability",
    ],
    Affiliations: "Arkham Inmates",
    id: "106",
    affinity: "Physical",
  },
  {
    tier: "C",
    name: "Ares",
    subName: "God of War",
    SPD: "103",
    HP: "42017",
    STR: "2265",
    INT: "1553",
    AG: "1676",
    STAM: "3012",
    CRC: "22%",
    CRV: "228%",
    LegendaryOrder:
      "Leadership build (recommended) 2,5,3,1,4 / non-leader - 2,3,1,4,5 (updated for rework)",
    GearSet: "Physical Tank",
    powers: {
      one: {
        name: "Battle Fist:",
        dis: {
          Default:
            "Damage to an enemy. 60% chance to Stun target if Ares or target is Enraged.",
          Legendary: "Additional 30% damage.",
        },
      },
      two: {
        name: "Death or Glory:",
        dis: {
          Default:
            "Apply 6 Strength Up, Enrage and 35% Turn Meter Up to an ally. If ally's HP is below 50%, apply Death Immunity.",
          Legendary: "Apply 6 Stamina Ups [1 turn] to ally",
        },
      },
      three: {
        name: "Energy Warsword:",
        dis: {
          Default:
            "Light Damage to all enemies. Apply Enrage to a random enemy.",
          Legendary:
            "Apply Buff Immunity [2 turns] to enemy that receives Enrage",
        },
      },
      four: {
        name: "Fueled by Conflict:",
        dis: {
          Default:
            "Passive Ability: At the end of every hero's turn, if any hero was Enraged or dealt a Critical Hit, Ares gains 1 permanent Stamina Upand 7% Turn Meter Up.",
          Legendary: "Also gain a Light Heal.",
        },
      },
      five: {
        name: "God of War:",
        dis: {
          Default:
            "Team Leader: Ares' max HP increases by 80%. At the beginning of his turns, gain 3 Strength Up and 15% Turn Meter Up if any hero is Enraged.",
          Legendary:
            "Ares' max HP increases by an extra 40%. At the beginning of his turns, 50% chance to gain Debuff Immunity.",
        },
      },
    },
    CombatEffects: [
      "Death Immunity",
      "Stamina Up",
      "Strength Up",
      "Buff Immunity",
      "Enrage",
      "Stun",
      "Cooldown Effects",
      "Turn Meter Up and Self Heal",
    ],
    Affiliations: "Greek Gods",
    id: "5",
    affinity: "Mystical",
  },
  {
    tier: "C",
    name: "Black Hand",
    subName: "The Embodiment Of Death",
    SPD: "107",
    HP: "27979",
    STR: "1479",
    INT: "2978",
    AG: "2093",
    STAM: "2218",
    CRC: "35%",
    CRV: "228%",
    LegendaryOrder: "3,1],5,4,2",
    GearSet: "Special Striker",
    powers: {
      one: {
        name: "Black Beam:",
        dis: {
          Default:
            "Special Damage to an enemy. +100% Damage if target is Shielded.",
          Legendary: "Gain 3 Crit Chance Up (2T).",
        },
      },
      two: {
        name: "Death Comes:",
        dis: {
          Default:
            "Light Special damage and 80% Chance to apply Doom on the target. 100% Chance if target is a Lantern.",
          Legendary: "Remove 50% Shield from target.",
        },
      },
      three: {
        name: "Necrotic Blast:",
        dis: {
          Default: "Heavy Special Damage to an enemy. Gain 3 Int Up (2T).",
          Legendary: "Purge all immunities before the attack.",
        },
      },
      four: {
        name: "Savor your Demise:",
        dis: {
          Default:
            "Passive: Gain 2 Permanent Int Up (Always) and 30% Turn Meter Up each time any hero dies.",
          Legendary: "Also, gain 1 Permanent Crit Chance Up (Always).",
        },
      },
      five: {
        name: "Black Incarnate:",
        dis: {
          Default:
            "Passive: If any teammate is still alive, 60% Chance to revive with 50% health.",
          Legendary: "Gain a 10% True Heal at the end of his turn.",
        },
      },
    },
    CombatEffects: [
      "Crit Chance Up",
      "Intelligence Up",
      "Doom",
      "Revive",
      "Remove Shield",
      "Turn Meter Up",
      "Purge Buffs and Self Heal",
    ],
    Affiliations: "Black Lanterns",
    id: "144",
    affinity: "Mystical",
  },
  {
    tier: "C",
    name: "Katana",
    subName: "Samurai Warrior",
    SPD: "119",
    HP: "28086",
    STR: "2412",
    INT: "1499",
    AG: "2099",
    STAM: "2049",
    CRC: "47%",
    CRV: "256%",
    LegendaryOrder:
      "[Leadership order, highly recommended]1,5,2,3,4 (Updated for rework)",
    GearSet: "Physical Striker",
    powers: {
      one: {
        name: "Siphoning Strike:",
        dis: {
          Default: "Damage to enemy, Steal 2 Buffs from target.",
          Legendary: "Can't miss",
        },
      },
      two: {
        name: "Commune With The Fallen:",
        dis: {
          Default:
            "Gain 4 Critical Chance Up. Gain 1 Evasion Up for each dead enemy. If there are no dead enemies, gain Crit Immunity. Purge 6 Debuffs from Katana.",
          Legendary: "Gain a 20% True Heal",
        },
      },
      three: {
        name: "Falling Blade:",
        dis: {
          Default: "Damage to enemy, 50% increased Crit Damage.",
          Legendary:
            "40% Chance to use Commune With The Fallen if target is killed",
        },
      },
      four: {
        name: "Soultaker:",
        dis: {
          Default:
            "Passive Ability: Katana's critical hits grant her 35% Turn Meter Up and steal up to 2 Buffs from the target. If target is killed, gain Death Immunity instead.",
          Legendary: "Cooldown of all Super Powers -1 if target is killed",
        },
      },
      five: {
        name: "Outsider:",
        dis: {
          Default:
            "Team Leader: Katana has 110% increased Health and deals 1.5% True Damage for each Debuff on the target (max 15%).",
          Legendary:
            "Katana steals all Immunity Buffs and Awareness from the target when attacking them",
        },
      },
    },
    CombatEffects: [
      "Crit Chance Up",
      "Crit Immunity",
      "Death Immunity",
      "Evasion Up",
      "Buff Stealing",
      "Can't Miss",
      "True Damage",
      "Turn Meter Up and Self Heal",
    ],
    Affiliations: "Suicide Squad and The Outsiders",
    id: "70",
    affinity: "Mystical",
  },
  {
    tier: "C",
    name: "King Shazam",
    subName: "The Infected",
    SPD: "104",
    HP: "38606",
    STR: "2545",
    INT: "1507",
    AG: "1779",
    STAM: "2671",
    CRC: "22%",
    CRV: "228%",
    LegendaryOrder: "5,3],2,4,1",
    GearSet: "Physical Tank",
    powers: {
      one: {
        name: "Corrupted Strength of Hercules:",
        dis: {
          Default:
            "Damage to target, and apply 25% Turn Meter Down if the target has Disease.",
          Legendary:
            "20% Additional damage for each Disease on the target (max 100%).",
        },
      },
      two: {
        name: "Venom Stab:",
        dis: {
          Default: "Damage to a single target and apply Stun (1T).",
          Legendary: "Apply Enrage (2T) if the target has Disease.",
        },
      },
      three: {
        name: "Corrupted Power of Zeus:",
        dis: {
          Default:
            "Damage to all enemies and 75% chance to use the Corrupted Strenght of Hercules on a random enemy.",
          Legendary: "Apply Heal Immunity (1T) on the primary target.",
        },
      },
      four: {
        name: "Turning Mad:",
        dis: {
          Default:
            "At the end of every enemy turn, if that enemy has Disease,, 75% Chance to apply 3 Strength Downs (2T) and 3 Intelligence Downs (2T).",
          Legendary: "Also King Shazam gains a medium Overheal.",
        },
      },
      five: {
        name: "Spreading Infection:",
        dis: {
          Default:
            "Every time King Shazam deals damage apply 2 Disease (3T) on a random enemy.",
          Legendary:
            "Apply Disease (3T) to a random enemy at the start of the combat.",
        },
      },
    },
    CombatEffects: [
      "Disease",
      "Enrage",
      "Heal Immunity",
      "Intelligence Down",
      "Strength Down",
      "Stun",
      "Turn Meter Down",
      "Start of Battle Ability and Self Heal",
    ],
    Affiliations: "Dark Knights",
    id: "155",
    affinity: "Mystical",
  },
  {
    tier: "C",
    name: "Mary Shazam",
    subName: "Earth's Mightiest Girl",
    SPD: "113",
    HP: "36949",
    STR: "1587",
    INT: "2574",
    AG: "1794",
    STAM: "2630",
    CRC: "15%",
    CRV: "178%",
    LegendaryOrder: "4,3,1,5,2",
    GearSet: "Special Tank",
    powers: {
      one: {
        name: "Lightning Punch:",
        dis: {
          Default: "Special damage to an enemy and apply 20% Turn Meter Down.",
          Legendary: "80% Additional Damage if Mary has 2+ Speed Up.",
        },
      },
      two: {
        name: "Wisdom of Solomon:",
        dis: {
          Default: "Gain 3 Intelligence Up and 40% Turn Meter Up.",
          Legendary: "60% Chance to gain Death Immunity.",
        },
      },
      three: {
        name: "Might of Zeus:",
        dis: {
          Default: "Special Damage to all enemies and give 2 Speed Up to team.",
          Legendary: "Also gain 1 Intelligence Up per alive enemy.",
        },
      },
      four: {
        name: "Gift of Mercury:",
        dis: {
          Default:
            "80% Chance to gain 1 Speed Up at the end of each teammate's turn.",
          Legendary:
            "Same chance to apply 10% Turn Meter Down to a random enemy.",
        },
      },
      five: {
        name: "The Wizard's Knowledge:",
        dis: {
          Default:
            "Each time an enemy gains 1+ buff, 90% chance to gain 1 Intelligence Up.",
          Legendary: "Use Might of Zeus each time an ally dies.",
        },
      },
    },
    CombatEffects: [
      "Death Immunity",
      "Intelligence Up",
      "Speed Up",
      "Turn Meter Up and Turn Meter Down",
    ],
    Affiliations: "Shazam Family",
    id: "81",
    affinity: "Mystical",
  },
  {
    tier: "C",
    name: "Nekron",
    subName: "Lord of the Unliving",
    SPD: "120",
    HP: "38298",
    STR: "1532",
    INT: "2571",
    AG: "1722",
    STAM: "2765",
    CRC: "35%",
    CRV: "228%",
    LegendaryOrder: "1,5],23,4",
    GearSet: "Special Tank",
    powers: {
      one: {
        name: "A Taste of Death:",
        dis: {
          Default:
            "Special Damage to a single enemy and transfers 3 Debuffs from Nekron to the target.",
          Legendary: "Apply 50% extra damage if the target has Doom.",
        },
      },
      two: {
        name: "Dark Lightning Protection:",
        dis: {
          Default:
            "Apply a medium overheal to all alies and apply Death Immunity (1T) to primary target.",
          Legendary: "Also Nekron gains 3 Intelligence Ups (2T).",
        },
      },
      three: {
        name: "Fatal Typhoon:",
        dis: {
          Default:
            "Heavy Special Damage to all enemies and 75% chance to apply Doom (4T) to all enemies.",
          Legendary: "Also apply Heal Immunity (1T) on primary target.",
        },
      },
      four: {
        name: "Reanimation:",
        dis: {
          Default:
            "At the start of every teammate's turn, if that teammate is below 50% health, 75% Chance to apply Death Immunity (1T) on the teammate.",
          Legendary: "Also Apply Doom (4T) to a randon enemy.",
        },
      },
      five: {
        name: "Embodiment of Death:",
        dis: {
          Default:
            "Every time an enemy dies Nekron gains 5 Int Ups (2T). Every time an ally dies, Nekron applies 35% Shield to all allies.",
          Legendary:
            "If any character dies, Nekron uses A Taste of Death on a random enemy.",
        },
      },
    },
    CombatEffects: [
      "Death Immunity",
      "Intelligence Up",
      "Doom",
      "Heal Immunity",
      "Debuff Transfer",
      "Out of Turn Attacks",
      "Heal and Apply Shield",
    ],
    Affiliations: "Black Lanterns",
    id: "168",
    affinity: "Mystical",
  },
  {
    tier: "C",
    name: "Ocean Master",
    subName: "King Orm",
    SPD: "120",
    HP: "27885",
    STR: "2065",
    INT: "1719",
    AG: "2139",
    STAM: "2154",
    CRC: "22%",
    CRV: "316%",
    LegendaryOrder:
      "2,1,4,5,3 (silence team build), 2,5,3,1,4 (speed team build)",
    GearSet: "Mixed Support",
    powers: {
      one: {
        name: "Arcane Lightning:",
        dis: {
          Default: "Special Damage to an enemy and Always Purge 2 Buffs.",
          Legendary: "Apply Silence if Ocean Master has 1+ Speed Up.",
        },
      },
      two: {
        name: "Aqueous Blockade:",
        dis: {
          Default: "Purge 4 Debuff and give 20% Shield to each ally.",
          Legendary: "Also give 2 Speed Up",
        },
      },
      three: {
        name: "Orm's Rage:",
        dis: {
          Default: "Damage to an enemy and apply 50% Turn Meter Down.",
          Legendary:
            "Deal damage and 25% Turn Meter Down to an additional random enemy",
        },
      },
      four: {
        name: "Atlantean Stream:",
        dis: {
          Default: "Gain 2 Speed Up each time an enemy gains 1 or more Buff.",
          Legendary:
            "50% Chance to apply Silence to an enemy each time they gain 1 or more Buff",
        },
      },
      five: {
        name: "Arcane Torrent:",
        dis: {
          Default:
            "50% Chance to use Arcane Lightning on a random enemy at the end of ally turn if (any/that) ally is Shielded.",
          Legendary: "Arcane Lightning purges 1 additional Buff",
        },
      },
    },
    CombatEffects: [
      "Speed Up",
      "Silence",
      "Out of Turn Attacks",
      "Apply Shield",
      "Turn Meter Down",
      "Purge Buffs and Purge Debuffs",
    ],
    Affiliations: "Atlantean",
    id: "89",
    affinity: "Mystical",
  },
  {
    tier: "C",
    name: "Parasite",
    subName: "Absorption Freak",
    SPD: "110",
    HP: "37674",
    STR: "1565",
    INT: "2518",
    AG: "1811",
    STAM: "2702",
    CRC: "15%",
    CRV: "178%",
    LegendaryOrder: "3,2,4],1,5",
    GearSet: "Special Tank",
    powers: {
      one: {
        name: "Parasitic Strike:",
        dis: {
          Default:
            "Special Damage to an enemy. +20% Additional damage per buff on target (Max 200%).",
          Legendary: "Transfer up to 3 debuffs from Parasite to the target.",
        },
      },
      two: {
        name: "Leech:",
        dis: {
          Default: "Special Damage to an enemy. Gain a 25% Overheal.",
          Legendary: "Steal Up to 3 buffs from target.",
        },
      },
      three: {
        name: "Osmosis Blast:",
        dis: {
          Default:
            "Special Damage to all enemies. 60% chance to steal up to 3 buffs from each target.",
          Legendary:
            "75% chance to purge up to 6 additional buffs from each target hit.",
        },
      },
      four: {
        name: "Epidermal Absorption:",
        dis: {
          Default:
            "At the end of each enemy turn, gain a 15% True Heal if Parasite was hit.",
          Legendary: "50% Chance to double the healing received.",
        },
      },
      five: {
        name: "Instant Intake:",
        dis: {
          Default: "Each time Parasite hits an enemy gain 1 Int Up (2T).",
          Legendary:
            "If Parasite kills an enemy, gain 2 permanent Int Up (Always).",
        },
      },
    },
    CombatEffects: [
      "Intelligence Up",
      "Buff Stealing",
      "Debuff Transfer",
      "Purge Buffs and Self Heal",
    ],
    Affiliations: "Secret Society of Super-Villains",
    id: "92",
    affinity: "Mystical",
  },
  {
    tier: "C",
    name: "Silver Banshee",
    subName: "Wailing Wretch",
    SPD: "108",
    HP: "28208",
    STR: "1554",
    INT: "3271",
    AG: "2064",
    STAM: "2241",
    CRC: "35%",
    CRV: "228%",
    LegendaryOrder: "2,3,5,4,1 (updated for rework)",
    GearSet: "Special Striker",
    powers: {
      one: {
        name: "Cursed Strike:",
        dis: {
          Default: "Special Damage to an enemy. Apply 4 Bleeds.",
          Legendary: "100% additional damage if target has any immunity.",
        },
      },
      two: {
        name: "Banshee Stare:",
        dis: {
          Default: "Special Damage to an enemy. Apply Heal Immunity.",
          Legendary: "Purge all positive immunities.",
        },
      },
      three: {
        name: "Death Wail:",
        dis: {
          Default:
            "Special Damage to all enemies. 20% Chance to stun a random enemy if any enemy has any immunity.",
          Legendary:
            "30% Chance to use Death Wail when a buff purge move is performed by an ally. +50% Chance if any enemy is bleeding or has disease.",
        },
      },
      four: {
        name: "Eye for an Eye:",
        dis: {
          Default:
            "Apply Death Immunity, True Sight and 3 Int Ups to a random ally when an ally dies.",
          Legendary: "Apply Buff Immunity to all enemies when an ally dies.",
        },
      },
      five: {
        name: "Ghastly Spirit:",
        dis: {
          Default:
            "40% Chance to gain Invisibility and 2 Int Up when an enemy takes Bleed Damage.",
          Legendary:
            "Apply Stun , Silence and Crit Immunities to all allies when an ally is stunned.",
        },
      },
    },
    CombatEffects: [
      "Crit Immunity",
      "Death Immunity",
      "Intelligence Up",
      "Invisibility",
      "Silence Immunity",
      "Stun Immunity",
      "True Sight",
      "Bleeds",
      "Buff Immunity",
      "Heal Immunity",
      "Stun and Purge Buffs",
    ],
    Affiliations: "Secret Society of Super-Villains",
    id: "108",
    affinity: "Mystical",
  },
  {
    tier: "C",
    name: "Siren",
    subName: "Assassin of the Deep Sea",
    SPD: "112",
    HP: "29196",
    STR: "2668",
    INT: "1457",
    AG: "2125",
    STAM: "2160",
    CRC: "47%",
    CRV: "256%",
    LegendaryOrder: "3,1,5],2,4",
    GearSet: "Physical Striker",
    powers: {
      one: {
        name: "Vicious Constructs:",
        dis: {
          Default:
            "Damage to an enemy, apply 4 Bleeds (3T) if target is Bleeding.",
          Legendary:
            "40% chance to use Dagger Deluge on target if target is Bleeding.",
        },
      },
      two: {
        name: "Dagger Deluge:",
        dis: {
          Default: "Damage to an enemy, apply 5 Bleeds to target.",
          Legendary: "Enrage (1T) target and gain 2 Evasion Up (2T).",
        },
      },
      three: {
        name: "Xebel Fury:",
        dis: {
          Default:
            "Light damage to enemy team, 5% increased damage per Bleed on enemy team (max 100%).",
          Legendary: "3 Bleeds (3T) on enemy team.",
        },
      },
      four: {
        name: "Shifter:",
        dis: {
          Default:
            "Gain Evasion Up (2T) when an enemy takes Bleed damage, 45% chance for extra Evasion Up.",
          Legendary: "50% Chance for Evasion Up Duration +1 (3T).",
        },
      },
      five: {
        name: "Vengeful Slash:",
        dis: {
          Default:
            "Each time an enemy misses an attack on Siren, apply 1 Bleed (3T).",
          Legendary: "Also gain 15% Turn Meter Up.",
        },
      },
    },
    CombatEffects: ["Evasion Up", "Bleeds", "Enrage and Turn Meter Up"],
    Affiliations: "Atlantean",
    id: "111",
    affinity: "Mystical",
  },
  {
    tier: "C",
    name: "Wonder Woman",
    subName: "Defender of Justice",
    SPD: "120",
    HP: "27769",
    STR: "2212",
    INT: "1382",
    AG: "1978",
    STAM: "2017",
    CRC: "47%",
    CRV: "256%",
    LegendaryOrder: "2,3,4,1,5",
    GearSet: "Physical Striker",
    powers: {
      one: {
        name: "Fearless Leader:",
        dis: {
          Default: "Damage to an enemy. Copy 2 buffs on self to all allies.",
          Legendary: "Gain 10% shield.",
        },
      },
      two: {
        name: "Defender of the Weak:",
        dis: {
          Default:
            "Passive ability: If Wonder Woman is above 30% health, 35% chance to gain Taunt until end of enemy turn, 6 Agility Ups and 6 Intelligence Ups at the beginning of each enemy turn.",
          Legendary: "Chance +15%",
        },
      },
      three: {
        name: "Lasso of Truth:",
        dis: {
          Default: "Damage to an enemy, Can't Miss.",
          Legendary: "Purge 7 buffs from target.",
        },
      },
      four: {
        name: "Amazonian Strength:",
        dis: {
          Default:
            "Light damage to all enemies, increase duration of all Agility Up and Intelligence Up buffs on Wonder Woman by 1.",
          Legendary:
            "50% chance to Stun a random enemy. Remove all Evasion Ups from Enemy Team.",
        },
      },
      five: {
        name: "Diana Prince:",
        dis: {
          Default:
            "Team Leader: When Wonder Woman gains taunt from Defender of the Weak, gain a Light Heal and other teammates gain Death Immunity until the end of the enemy turn.",
          Legendary:
            "Cooldown -1 on Amazonian Strength when gaining Taunt from Defender of the Weak",
        },
      },
    },
    CombatEffects: [
      "Agility Up",
      "Death Immunity",
      "Intelligence Up",
      "Taunt",
      "Stun",
      "Copy Buffs",
      "Can't Miss",
      "Cooldown Effects and Purge Buffs",
    ],
    Affiliations: "Amazons and Justice League",
    id: "130",
    affinity: "Mystical",
  },
  {
    tier: "C",
    name: "Amazo",
    subName: "The Vengeful Replicator",
    SPD: "110",
    HP: "31081",
    STR: "2596",
    INT: "1379",
    AG: "2086",
    STAM: "2348",
    CRC: "47%",
    CRV: "256%",
    LegendaryOrder:
      "2,5,1,4,3 (per Tewtytron, L3 min, will experiment more at L5)",
    GearSet: "Physical Striker",
    powers: {
      one: {
        name: "Replica:",
        dis: {
          Default: "Damage to a single target and apply 2 Disease (3T).",
          Legendary: "Also apply 2 Disease (3T) to a single target.",
        },
      },
      two: {
        name: "Fast Learner:",
        dis: {
          Default:
            "Damage to a single enemy and apply 4 Strength Downs (2T) and 4 Int Downs (2T).",
          Legendary:
            "If the target is infected with disease, apply Stun (1T) to the target.",
        },
      },
      three: {
        name: "Battlecry:",
        dis: {
          Default: "Damage and Steal 1 Buff from each enemy.",
          Legendary: "Apply Disease (3T) to a primary target.",
        },
      },
      four: {
        name: "Automatic Response:",
        dis: {
          Default:
            "Passive: Every time Amazo receives damage, he has a 75% chance to use Replica on the attack.",
          Legendary: "Also steals 2 Buffs from the attacker.",
        },
      },
      five: {
        name: "Steel-plated:",
        dis: {
          Default:
            "Passive: Every time a teammate is buffed, 75% Chance for Amazo to gain 2 Strength Ups (2T).",
          Legendary: "Also, gain 15% Healing.",
        },
      },
    },
    CombatEffects: [
      "Strength Up",
      "Disease",
      "Intelligence Down",
      "Strength Down",
      "Stun",
      "Buff Stealing",
      "Counter Attacks and Self Heal",
    ],
    Affiliations: "Secret Society of Super-Villains",
    id: "145",
    affinity: "Energy",
  },
  {
    tier: "C",
    name: "Black Lightning",
    subName: "Protector of Suicide Slums",
    SPD: "125",
    HP: "26892",
    STR: "1375",
    INT: "2752",
    AG: "2191",
    STAM: "2109",
    CRC: "35%",
    CRV: "228%",
    LegendaryOrder: "3,2,1,4,5",
    GearSet: "Special Striker",
    powers: {
      one: {
        name: "Electrokinesis:",
        dis: {
          Default: "Special Damage and apply 3 Intelligence Downs to an enemy.",
          Legendary: "Double damage if Black Lightning is Overhealed.",
        },
      },
      two: {
        name: "Supercharge:",
        dis: {
          Default: "Heavy Overheal and purge 2 Debuffs from an ally.",
          Legendary: "Apply an Overheal to the rest of the team",
        },
      },
      three: {
        name: "Electric Blast:",
        dis: {
          Default: "Special Damage and always purge 6 Buffs from an enemy.",
          Legendary:
            "Apply a Light Overheal to all allies for each Buff Purged",
        },
      },
      four: {
        name: "Bio-Electrical Counter:",
        dis: {
          Default:
            "35% chance to apply Stun to an enemy when it deals damage to Black Lightning.",
          Legendary: "Gain 4 Int Ups when Bio-Electrical Counter activates",
        },
      },
      five: {
        name: "Energy Aura:",
        dis: {
          Default:
            "At the beginning of a teammate's turn, apply 25% True Heal if the teammate's HP is below 50%.",
          Legendary:
            "Reduce Cooldown of Supercharge by 1 when Energy Aura activates",
        },
      },
    },
    CombatEffects: [
      "Intelligence Up",
      "Intelligence Down",
      "Stun",
      "Cooldown Effects",
      "Heal and Purge Buffs",
    ],
    Affiliations: "Justice League and The Outsiders",
    id: "21",
    affinity: "Energy",
  },
  {
    tier: "C",
    name: "Bleez",
    subName: "Red Lantern Of Sector 33",
    SPD: "98",
    HP: "40661",
    STR: "2426",
    INT: "1413",
    AG: "1789",
    STAM: "2876",
    CRC: "22%",
    CRV: "228%",
    LegendaryOrder: "5,2,1,4,3",
    GearSet: "Physical Tank",
    powers: {
      one: {
        name: "Burning Blood:",
        dis: {
          Default: "Damage to a single target. Apply Taunt (1T) on Bleez.",
          Legendary: "+50% additional damage if Bleez has Taunt.",
        },
      },
      two: {
        name: "Rejection:",
        dis: {
          Default:
            "Damage to all enemies. Apply Enrage (2T) to the primary target.",
          Legendary: "Apply Heal Immunity (1T) if an enemy is Taunting.",
        },
      },
      three: {
        name: "Kiss of Death:",
        dis: {
          Default:
            "Heavy damage to a single enemy. If the target is Enraged, deal +200% additional damage.",
          Legendary: "Bleez gains True Sight (2T).",
        },
      },
      four: {
        name: "Humiliation:",
        dis: {
          Default:
            "Passive: At the end of every enemy turn, if the enemy is Enraged, Purge 3 Buffs.",
          Legendary: "75% Chance to Stun (1T) a random enemy with Enrage.",
        },
      },
      five: {
        name: "Beauty and Beast:",
        dis: {
          Default:
            "Passive: At the beginning of every Bleez turn, 75% Chance to apply 5 Mends. If she has Taunt, gain Awareness.",
          Legendary:
            "At the beginning of the battle, Bleez starts with Taunt (2T) and Death Immunity (2T).",
        },
      },
    },
    CombatEffects: [
      "Awareness",
      "Death Immunity",
      "Mends",
      "True Sight",
      "Taunt",
      "Enrage",
      "Heal Immunity",
      "Stun",
      "Purge Buffs and Start of Battle Ability",
    ],
    Affiliations: "Lantern",
    id: "149",
    affinity: "Energy",
  },
  {
    tier: "C",
    name: "Cyborg",
    subName: "Vic Stone",
    SPD: "106",
    HP: "26739",
    STR: "2366",
    INT: "1404",
    AG: "1905",
    STAM: "1914",
    CRC: "47%",
    CRV: "256%",
    LegendaryOrder: "1,2,4,3,5",
    GearSet: "Physical Striker",
    powers: {
      one: {
        name: "Triangulating Blast:",
        dis: {
          Default:
            "Damage to an enemy, Gain 3 Strength Ups. Next attack Can't Miss.",
          Legendary: "Gain 5 Crit Ups.",
        },
      },
      two: {
        name: "Charged Cannon:",
        dis: {
          Default: "Heavy damage to an enemy. 30% chance to hit.",
          Legendary: "+100% Crit Damage.",
        },
      },
      three: {
        name: "Overclock:",
        dis: {
          Default: "Gain 4 Speed Ups, 50% chance to gain 3 Strength Ups.",
          Legendary: "Gain 50% Turn Meter.",
        },
      },
      four: {
        name: "Team Sport:",
        dis: {
          Default:
            "Passive ability: 26% chance to gain 1 Strength Up if Cyborg is buffed.",
          Legendary: "Strength Up +1",
        },
      },
      five: {
        name: "Optimized Systems:",
        dis: {
          Default:
            "Team Leader: All allies have a 30% chance to gain 12% Turn Meter if buffed.",
          Legendary: "Chance to gain Turn Meter +20%.",
        },
      },
    },
    CombatEffects: [
      "Speed Up",
      "Crit Chance Up",
      "Strength Up",
      "Can't Miss and Turn Meter Up",
    ],
    Affiliations: "Titans",
    id: "37",
    affinity: "Energy",
  },
  {
    tier: "C",
    name: "Cyborg Superman",
    subName: "Man-Machine of Steel",
    SPD: "110",
    HP: "38961",
    STR: "1401",
    INT: "2510",
    AG: "1848",
    STAM: "2831",
    CRC: "15%",
    CRV: "178%",
    LegendaryOrder: "1,3,2,4,5 (updated for rework)",
    GearSet: "Special Tank",
    powers: {
      one: {
        name: "Techno-Organic Arsenal:",
        dis: {
          Default:
            "Special Damage to an enemy. Gain 5% Shield plus 5% per Buff on the enemy (30% Max).",
          Legendary: "Can't miss and next attack can't miss.",
        },
      },
      two: {
        name: "The Man of Tomorrow:",
        dis: {
          Default:
            "Passive Ability: Start battle with 32% Shield, Immunity to Critical Hits, and Immunity to Heals.",
          Legendary:
            "25% chance to gain 10% Turn Meter Up at the end of each enemy turn.",
        },
      },
      three: {
        name: "Disintegrating Glare:",
        dis: {
          Default:
            "Special Damage to an enemy, applies 10 Critical Chance Downs.",
          Legendary: "Purge all positive Immunities and Awareness from target.",
        },
      },
      four: {
        name: "Annihilation Protocol:",
        dis: {
          Default:
            "High Special damage to an enemy. Cooldown -1 when Cyborg Superman has shields at the end of any hero's turn.",
          Legendary: "Gain 10 Critical Chance Up.",
        },
      },
      five: {
        name: "Treacherous Manipulator:",
        dis: {
          Default:
            "Team Leader: Gain 10% Shield when a teammate does damage on their turn.",
          Legendary:
            "Once per battle, when Cyborg Superman has less than 100% HP, he gains 50% Shield and 50% Turn Meter.",
        },
      },
    },
    CombatEffects: [
      "Crit Chance Up",
      "Crit Chance Down",
      "Can't Miss",
      "Cooldown Effects",
      "Apply Shield",
      "Turn Meter Up",
      "Purge Buffs and Start of Battle Ability",
    ],
    Affiliations: "Superman Revenge Squad",
    id: "36",
    affinity: "Energy",
  },
  {
    tier: "C",
    name: "Doomsday",
    subName: "The Ultimate",
    SPD: "93",
    HP: "38574",
    STR: "2367",
    INT: "1590",
    AG: "1526",
    STAM: "2667",
    CRC: "22%",
    CRV: "228%",
    LegendaryOrder: "1,4,3,2,5 (updated for rework)",
    GearSet: "Physical Tank",
    powers: {
      one: {
        name: "Evolving Strike:",
        dis: {
          Default:
            "Damage to an enemy. Gain 1 Strength Up (Always), Agility Up (Always), and Stamina Up (Always).",
          Legendary: "Gain 1 extra Strength Up, Agility Up, and Stamina Up.",
        },
      },
      two: {
        name: "Adaptive Defense:",
        dis: {
          Default:
            "Gain 5 Affinity Power Up (Always), gain a Medium Overheal if Doomsday has 4+ buffs.",
          Legendary: "Gain 25% Turn Meter Up and 1 Speed Up (Always).",
        },
      },
      three: {
        name: "Devastator:",
        dis: {
          Default:
            "Heavy Damage to an enemy, only usable if Doomsday has 8+ buffs.",
          Legendary: "Cooldown -3 on Devastator if target is killed.",
        },
      },
      four: {
        name: "Energy Feedback:",
        dis: {
          Default:
            "65% Chance to counter with Evolving Strike if Doomsday has 6+ buffs.",
          Legendary:
            "Gain Crit Immunity and 30% Turn Meter Up whenever Doomsday receives a critical hit.",
        },
      },
      five: {
        name: "Indestructible:",
        dis: {
          Default:
            "Doomsday revives with 50% Health and 8 buffs (Always) the first time he's killed in battle.",
          Legendary: "Gain 5 Mends upon revive.",
        },
      },
    },
    CombatEffects: [
      "Affinity Power Up",
      "Agility Up",
      "Crit Immunity",
      "Mends",
      "Speed Up",
      "Stamina Up",
      "Strength Up",
      "Cooldown Effects",
      "Counter Attacks",
      "Revive",
      "Turn Meter Up and Self Heal",
    ],
    Affiliations: "Kryptonian",
    id: "44",
    affinity: "Energy",
  },
  {
    tier: "C",
    name: "Firestorm",
    subName: "The Nuclear Man",
    SPD: "113",
    HP: "27991",
    STR: "1405",
    INT: "2998",
    AG: "2155",
    STAM: "2219",
    CRC: "35%",
    CRV: "228%",
    LegendaryOrder: "1,2,5,4,3",
    GearSet: "Special Striker",
    powers: {
      one: {
        name: "Nuclear Beam:",
        dis: {
          Default:
            "Special Damage to an enemy, +5% damage per Intelligence Up on Firestorm (max 50%).",
          Legendary:
            "+5% Crit Chance per Intelligence Up on Firestorm (max 50%).",
        },
      },
      two: {
        name: "Ask Professor Stein:",
        dis: {
          Default:
            "Gain 1 permanent Intelligence Up and 50% chance to give 15% Shield to all allies. Gain 1 extra Intelligence Up if Firestorm is shielded.",
          Legendary:
            "50% chance to gain 2 extra permanent Intelligence Ups and a Heal on self.",
        },
      },
      three: {
        name: "Fusion Reaction:",
        dis: {
          Default:
            "Purge 10 Buffs from Firestorm and deal (125) Special Damage to all enemies, +10% Special Damage per Buff purged.",
          Legendary:
            "Cooldown -1 and gain 3 permanent Intelligence Ups after Buffs purged.",
        },
      },
      four: {
        name: "Transmute Barrier:",
        dis: {
          Default:
            "50% Chance of getting 20% Shield at the beginning of his turn.",
          Legendary:
            "Equal chance of applying 15% Shield to a random teammate.",
        },
      },
      five: {
        name: "Shared Knowledge:",
        dis: {
          Default:
            "65% chance to gain 1 permanent Intelligence Up if Firestorm is Buffed.",
          Legendary: "Also gain 1 permanent Crit Chance Up.",
        },
      },
    },
    CombatEffects: [
      "Crit Chance Up",
      "Intelligence Up",
      "Apply Shield and Self Heal",
    ],
    Affiliations: "Justice League",
    id: "48",
    affinity: "Energy",
  },
  {
    tier: "C",
    name: "Green Lantern",
    subName: "John Stewart",
    SPD: "105",
    HP: "29388",
    STR: "2582",
    INT: "1531",
    AG: "2118",
    STAM: "2179",
    CRC: "47%",
    CRV: "256%",
    LegendaryOrder: "3,1],2,4,5 (2020 rework)",
    GearSet: "Physical Striker",
    powers: {
      one: {
        name: "Ring Barrage:",
        dis: {
          Default:
            "Damage to an enemy, +100% damage if Green Lantern is below 50% Health.",
          Legendary: "+50% Crit Chance if Green Lantern is below 50% Health.",
        },
      },
      two: {
        name: "Solid Construct:",
        dis: {
          Default:
            "Apply 40% Shield and 3 Empowered Strength Up (2T) to an ally.",
          Legendary:
            "If target is below 50%, +20% Shield and 30% chance to apply Death Immunity (3T).",
        },
      },
      three: {
        name: "Beware My Power:",
        dis: {
          Default: "Damage and apply 16% Turn Meter Down to all enemies.",
          Legendary: "Damage +30% if Green Lantern is Shielded.",
        },
      },
      four: {
        name: "Embodiment of Will:",
        dis: {
          Default:
            "Gain Death Immunity (3T) and 2 Empowered Strength Up (2T) and 50% Shield the first time Green Lantern goes below 50% Health.",
          Legendary:
            "Gain 10% Shield at the end of any turn, if below 50% Health.",
        },
      },
      five: {
        name: "Green Lantern Corps:",
        dis: {
          Default:
            "45% chance for all allies to gain 2 Empowered Strength Up (2T) at the beginning of an ally's turn if John Stewart is below 50% Health.",
          Legendary: "Also gain 1 Critical Chance Up (3T).",
        },
      },
    },
    CombatEffects: [
      "Crit Chance Up",
      "Death Immunity",
      "Empowered Strength Up",
      "Apply Shield and Turn Meter Down",
    ],
    Affiliations: "Green Lantern Corps",
    id: "57",
    affinity: "Energy",
  },
  {
    tier: "C",
    name: "Hawkman",
    subName: "Carter Hall",
    SPD: "113",
    HP: "39788",
    STR: "2531",
    INT: "1587",
    AG: "1597",
    STAM: "2789",
    CRC: "22%",
    CRV: "228%",
    LegendaryOrder: "1,3,5],2,4",
    GearSet: "Physical Tank",
    powers: {
      one: {
        name: "Horus Strike:",
        dis: {
          Default:
            "Heavy Damage to an enemy and apply 3 Strength Downs (2T) on target .",
          Legendary:
            "Apply Stun (1T) if the target has 4 or more Strength Downs.",
        },
      },
      two: {
        name: "Hawk Attack:",
        dis: {
          Default: "Damage to an enemy and gain 5 Strength Ups (2T).",
          Legendary: "Gain Debuff Immunity (1T).",
        },
      },
      three: {
        name: "Ancestral Weaponry:",
        dis: {
          Default:
            "Damage to all enemies and apply Crit Immunity (1T) to all allies.",
          Legendary:
            "Use Horus Strike on a random enemy if Hawkman has 3 or more Strength Ups.",
        },
      },
      four: {
        name: "Horus Blessing:",
        dis: {
          Default:
            "Each time an enemy is stunned, 75% chance for Hawkman to gain 20% Shield.",
          Legendary: "Purge 2 debuffs from Hawkman.",
        },
      },
      five: {
        name: "Reincarnated Strength:",
        dis: {
          Default: "If Hawkman receives Damage, gain 3 Strength Ups (2T).",
          Legendary: "Gain 1 Permanent Strength Up.",
        },
      },
    },
    CombatEffects: [
      "Crit Immunity",
      "Debuff Immunity",
      "Strength Up",
      "Strength Down",
      "Stun",
      "Apply Shield and Purge Debuffs",
    ],
    Affiliations: "Thanagarian",
    id: "61",
    affinity: "Energy",
  },
  {
    tier: "C",
    name: "Indigo-1",
    subName: "The Light of Compassion",
    SPD: "118",
    HP: "32305",
    STR: "2748",
    INT: "1620",
    AG: "2236",
    STAM: "2596",
    CRC: "25%",
    CRV: "228%",
    LegendaryOrder: "4,2],5,3,1 (1 is currently bugged)",
    GearSet: "Physical Support",
    powers: {
      one: {
        name: "Indigo Blast:",
        dis: {
          Default:
            "Damage to an enemy. Apply 2 Strength Downs (2T) and 20% Turn Meter Down to the target.",
          Legendary: "Transfers 2 debuffs from Indigo-1 to the target.",
        },
      },
      two: {
        name: "Light of Compassion:",
        dis: {
          Default:
            "Apply 3 Mends (3T) to all allies, apply 25% Turn Meter Up and Damage Immunity (1T) to a primary Target.",
          Legendary: "Apply 25% Shield to all allies.",
        },
      },
      three: {
        name: "Spectrum Emulation:",
        dis: {
          Default:
            "Damage to all enemies and Purge 4 buffs from targets. Apply Buff Immunity (1T) to primary target if Indigo-1 has 1 or more Debuffs.",
          Legendary: "20% extra damage to debuffed enemies.",
        },
      },
      four: {
        name: "Proselyte:",
        dis: {
          Default:
            "Passive: Every Time Indigo-1 receives damage, 75% Chance to apply 2 Strength Downs (1T) to the attacker and gain 15% Turn Meter Up.",
          Legendary: "Call assist on the attacker",
        },
      },
      five: {
        name: "Leading Light:",
        dis: {
          Default:
            "Passive: At the start of every teammate turn if that teammate has 3 or more debuffs, 75% Chance to purge 3 Debuffs.",
          Legendary: "Teammate gain 15% Turn Meter Up.",
        },
      },
    },
    CombatEffects: [
      "Damage Immunity",
      "Mends",
      "Buff Immunity",
      "Strength Down",
      "Call Assist",
      "Counter Attacks",
      "Debuff Transfer",
      "Apply Shield",
      "Turn Meter Up",
      "Turn Meter Down",
      "Purge Buffs and Purge Debuffs",
    ],
    Affiliations: "Lantern",
    id: "143",
    affinity: "Energy",
  },
  {
    tier: "C",
    name: "Kid Flash",
    subName: "The Fastest Kid Alive",
    SPD: "130",
    HP: "28812",
    STR: "2456",
    INT: "1431",
    AG: "2400",
    STAM: "2121",
    CRC: "47%",
    CRV: "256%",
    LegendaryOrder: "1,4,2],5,3 (2020 rework early testing)",
    GearSet: "Physical Striker",
    powers: {
      one: {
        name: "Flash Flurry:",
        dis: {
          Default: "Damage to an enemy. +50% damage if enemy has Speed Down.",
          Legendary:
            "Always steal a maximum of 25% Turn Meter from the enemy and apply it to a random ally.",
        },
      },
      two: {
        name: "Neutral Speed:",
        dis: {
          Default:
            "Apply 3 Speed Downs (2T) to an enemy and steal 3 Speed Ups (2T). 100% chance to gain 2 Speed Ups (2T).",
          Legendary:
            "Transfer all Speed Downs from team to a random enemy. If there are none, apply 2 Speed Downs (2T) to a random enemy.",
        },
      },
      three: {
        name: "Triple Threat:",
        dis: {
          Default:
            "Damage and apply 30% Turn Meter Down to all enemies; 20% extra Turn Meter Down to enemies with Speed Up.",
          Legendary:
            "25% chance to repeat; 75% chance if there are Speed Ups on enemy team.",
        },
      },
      four: {
        name: "Turn Back Time:",
        dis: {
          Default:
            "Passive: At the end of every Kid Flash Turn 50% chance to apply 50% overheal to a random ally. Apply 20% additional heal if Kid flash has 4+ or more Speed Ups.",
          Legendary: "Also apply 50% Turn Meter Up.",
        },
      },
      five: {
        name: "Eager to Compete:",
        dis: {
          Default:
            "Passive: At the beginning of his turn, 60% chance to gain 2 Speed Ups (2T).",
          Legendary:
            "One additional Speed Up (2T) gained if any teammate also has Speed Up.",
        },
      },
    },
    CombatEffects: [
      "Speed Up",
      "Speed Down",
      "Buff Stealing",
      "Debuff Transfer",
      "Heal",
      "Turn Meter Up and Turn Meter Down",
    ],
    Affiliations: "Speedster and Titans",
    id: "71",
    affinity: "Energy",
  },
  {
    tier: "C",
    name: "Killer Frost",
    subName: "Dr. Caitlin Snow",
    SPD: "103",
    HP: "25782",
    STR: "1601",
    INT: "2774",
    AG: "2059",
    STAM: "1998",
    CRC: "35%",
    CRV: "228%",
    LegendaryOrder: "4,1,2,5,3 (updated for rework)",
    GearSet: "Special Striker",
    powers: {
      one: {
        name: "Ice Spear:",
        dis: {
          Default:
            "Special Damage to an enemy 25% chance to Stun target if target is Stunned.",
          Legendary: "50% damage if target is Stunned.",
        },
      },
      two: {
        name: "Freeze Solid:",
        dis: {
          Default:
            "Stun and apply 2 Speed Downs and -30% Turn Meter to an enemy.",
          Legendary: "Cooldown -1.",
        },
      },
      three: {
        name: "Shatter:",
        dis: {
          Default:
            "Special Damage to target, Apply 3 Speed Downs (2T) and 15% of target’s Max Health as damage if target is Stunned.",
          Legendary: "Remove all Shield from target.",
        },
      },
      four: {
        name: "Heat Absorption:",
        dis: {
          Default:
            "Passive Ability: Killer Frost Heals for 24% Max Health when an enemy is Stunned.",
          Legendary:
            "Freeze Solid Cooldown -1 and 20% Turn Meter Up when enemy is Stunned.",
        },
      },
      five: {
        name: "Cold Reflection:",
        dis: {
          Default:
            "Passive Ability: 65% Chance to use Ice Spear when an enemy is Stunned.",
          Legendary: "Gain 2 Intelligence Ups when an enemy is Stunned.",
        },
      },
    },
    CombatEffects: [
      "Speed Down",
      "Stun",
      "Cooldown Effects",
      "Out of Turn Attacks",
      "Remove Shield",
      "Turn Meter Up",
      "Turn Meter Down and Self Heal",
    ],
    Affiliations: "Justice League and Suicide Squad",
    id: "73",
    affinity: "Energy",
  },
  {
    tier: "C",
    name: "Mirror Master",
    subName: "Roguish Reflection",
    SPD: "87",
    HP: "28156",
    STR: "1523",
    INT: "2877",
    AG: "2146",
    STAM: "2236",
    CRC: "35%",
    CRV: "228%",
    LegendaryOrder: "5,2,1,3],4",
    GearSet: "Special Striker",
    powers: {
      one: {
        name: "Optic Gun:",
        dis: {
          Default: "Special Damage to an enemy and gain Invisibility (2T).",
          Legendary: "Additional Special Damage if Mirror Master is Invisible.",
        },
      },
      two: {
        name: "Refracted Rays:",
        dis: {
          Default: "Apply Invisibility (1T) and 70% Shield to an ally.",
          Legendary: "Also gain Invisibility (2T) and 25% Shield.",
        },
      },
      three: {
        name: "Shattered Glass:",
        dis: {
          Default:
            "Apply 4 Agility Down (2T), 4 Speed Down (2T), 30% Turn Meter Down on an enemy and purge 4 buffs.",
          Legendary: "Also deal Special Damage to the target.",
        },
      },
      four: {
        name: "Mirror Images:",
        dis: {
          Default:
            "87% Chance to apply 1 Speed Down (2T) to a random enemy at end of each ally’s turn.",
          Legendary: "Speed Down +1.",
        },
      },
      five: {
        name: "Speed of Light:",
        dis: {
          Default:
            "65% chance to deal Special Damage to all enemies at end of turn if Speed Down on every enemy.",
          Legendary: "Damage +60%.",
        },
      },
    },
    CombatEffects: [
      "Invisibility",
      "Agility Down",
      "Speed Down",
      "Out of Turn Attacks",
      "Apply Shield and Turn Meter Down",
    ],
    Affiliations: "Rogues Gallery",
    id: "85",
    affinity: "Energy",
  },
  {
    tier: "C",
    name: "Savitar",
    subName: "The Speed Force Cultist",
    SPD: "133",
    HP: "30775",
    STR: "2426",
    INT: "1671",
    AG: "2310",
    STAM: "2442",
    CRC: "25%",
    CRV: "228%",
    LegendaryOrder: "4,5,1]2,3",
    GearSet: "Physical Support",
    powers: {
      one: {
        name: "Kinetic Transference:",
        dis: {
          Default: "Damage to all enemies and gain 5 Crit Chance Ups (2T).",
          Legendary: "Also gain 3 Crit Damage Ups (1T).",
        },
      },
      two: {
        name: "Null Inertia:",
        dis: {
          Default: "Gain 50% Shield and Crit Immunity.",
          Legendary: "Gain 2 Empowered Stamina Ups (1T).",
        },
      },
      three: {
        name: "Delayed Effect:",
        dis: {
          Default: "Heavy damage and 3 Crit Chance Downs (2T) to all enemies.",
          Legendary: "Also apply 3 Crit Damage Downs (1T).",
        },
      },
      four: {
        name: "De-Acceleration:",
        dis: {
          Default:
            "Passive: If an enemy has Speed Ups, Steal it (Max 3) at the end of the turn of each enemy.",
          Legendary: "Gain 1 Strength Up (1T) per Speed Up.",
        },
      },
      five: {
        name: "Direction:",
        dis: {
          Default:
            "Passive: When an enemy gains any positive immunity, Purge it.",
          Legendary: "Also, call Kinetic Transference.",
        },
      },
    },
    CombatEffects: [
      "Crit Chance Up",
      "Crit Damage Up",
      "Crit Immunity",
      "Strength Up",
      "Empowered Stamina Up",
      "Crit Chance Down",
      "Crit Damage Down",
      "Buff Stealing",
      "Out of Turn Attacks",
      "Apply Shield and Purge Buffs",
    ],
    Affiliations: "Speedster",
    id: "171",
    affinity: "Energy",
  },
  {
    tier: "C",
    name: "Sinestro",
    subName: "Yellow Lantern",
    SPD: "94",
    HP: "36682",
    STR: "1513",
    INT: "2673",
    AG: "1791",
    STAM: "2603",
    CRC: "15%",
    CRV: "178%",
    LegendaryOrder: "1,3,2],5,4 (updated for rework)",
    GearSet: "Special Tank",
    powers: {
      one: {
        name: "Sinestro's Might:",
        dis: {
          Default:
            "Special Damage and apply 3 Affinity Resistance Downs(3T) to an enemy.",
          Legendary:
            "Purge 6 buffs from target. Purge 2 more if target is Taunting.",
        },
      },
      two: {
        name: "Bone Saws:",
        dis: {
          Default:
            "Special Damage to all enemies, 50% chance to reduce Cooldown by 2.",
          Legendary:
            "Damage +70% if an enemy has Shield. Gain 4 Intelligence Up (2T) if not.",
        },
      },
      three: {
        name: "Fear Itself:",
        dis: {
          Default: "Apply Enrage(2T) and 50% Turn Meter Down to an enemy.",
          Legendary: "Apply 8 Int Down (2T).",
        },
      },
      four: {
        name: "Feed on Terror:",
        dis: {
          Default:
            "Passive Ability: Overheal and +40% Turn Meter to Sinestro whenever an enemy is Stunned or Enraged.",
          Legendary: "Gain 5 Mends",
        },
      },
      five: {
        name: "Fear Me:",
        dis: {
          Default:
            "All allies have a 90% chance to gain 2 Int Up (2T) whenever an enemy gets Enraged.",
          Legendary: "Also Gain 2 Strength Up",
        },
      },
    },
    CombatEffects: [
      "Intelligence Up",
      "Mends",
      "Strength Up",
      "Affinity Resist Down",
      "Enrage",
      "Intelligence Down",
      "Cooldown Effects",
      "Turn Meter Up",
      "Turn Meter Down",
      "Purge Buffs and Self Heal",
    ],
    Affiliations: "Lantern",
    id: "110",
    affinity: "Energy",
  },
  {
    tier: "T",
    name: "Green Arrow",
    subName: "The Emerald Archer",
    SPD: "125",
    HP: "27058",
    STR: "2237",
    INT: "1418",
    AG: "1986",
    STAM: "1946",
    CRC: "47%",
    CRV: "256%",
    LegendaryOrder: "(Leadership build - recommended) 5,2,1,3 or 4",
    GearSet: "Physical Striker",
    powers: {
      one: {
        name: "Quick Draw:",
        dis: {
          Default: "Damage and apply 3 Agility Downs to an enemy.",
          Legendary: "50% chance to strike twice.",
        },
      },
      two: {
        name: "Storm of Arrows:",
        dis: {
          Default: "Light damage to all enemies, +70% Critical Hit Chance.",
          Legendary:
            "Apply 2 Strength Downs to each enemy that is dealt a critical hit.",
        },
      },
      three: {
        name: "Focus:",
        dis: {
          Default: "Purge 9 debuffs from Green Arrow, gain 7 Affinity Ups.",
          Legendary: "Gain Death Immunity.",
        },
      },
      four: {
        name: "Peak Physical Form:",
        dis: {
          Default:
            "Passive Ability: Gain 25% turn meter if Green Arrow deals damage without any debuffs on himself.",
          Legendary: "Extra 50% chance to gain invisibility.",
        },
      },
      five: {
        name: "Strategy Over Power:",
        dis: {
          Default:
            "Team Leader: All allies apply 3 Agility Downs and 13% turn meter down if they deal a critical hit to an enemy.",
          Legendary:
            "Apply an equal number of Strength Downs on Critical Hits.",
        },
      },
    },
    CombatEffects: [
      "Affinity Power Up",
      "Death Immunity",
      "Invisibility",
      "Agility Down",
      "Strength Down",
      "Turn Meter Up and Purge Debuffs",
    ],
    Affiliations: "Justice League",
    id: "55",
    affinity: "Physical",
  },
  {
    tier: "T",
    name: "Joker",
    subName: "Damaged Goods",
    SPD: "104",
    HP: "25354",
    STR: "1943",
    INT: "1738",
    AG: "2011",
    STAM: "1900",
    CRC: "22%",
    CRV: "316%",
    LegendaryOrder: "1,4,5,2,3",
    GearSet: "Mixed Support",
    powers: {
      one: {
        name: "HAhaHAHAhaha!!:",
        dis: {
          Default:
            "Damage to an enemy, 50% chance to deal additional light damage to random enemies.",
          Legendary: "Apply 3 bleeds to enemies hit by the additional damage.",
        },
      },
      two: {
        name: "I'm Not Gonna Kill Ya:",
        dis: {
          Default: "Special damage to an enemy, 100% chance to stun.",
          Legendary: "Massive damage to targets below 10% health.",
        },
      },
      three: {
        name: "Roulette:",
        dis: {
          Default: "Highly variable damage to an enemy.",
          Legendary: "Cooldown reset if Critical Hit or if Target is killed.",
        },
      },
      four: {
        name: "Gangsta:",
        dis: {
          Default:
            "Passive ability: Apply 3 Affinity Resistance Downs and 25% Turn Meter Down to a random enemy at the beginning of Joker's turn.",
          Legendary: "Purge 3 buffs from the target.",
        },
      },
      five: {
        name: "Infectious Insanity:",
        dis: {
          Default:
            "Team Leader: All allies have a 36% chance to gain 1 Crit Chance Up and/or 1 Affinity Power Up if they deal a Critical Hit.",
          Legendary: "+1 Additional Crit Chance Up and/or Affinity Power Up",
        },
      },
    },
    CombatEffects: [
      "Affinity Power Up",
      "Crit Chance Up",
      "Affinity Resist Down",
      "Bleeds",
      "Stun",
      "Cooldown Effects",
      "Turn Meter Down and Purge Buffs",
    ],
    Affiliations: "",
    id: "68",
    affinity: "Physical",
  },
  {
    tier: "T",
    name: "Aquaman",
    subName: "Rider of the King Tide",
    SPD: "122",
    HP: "32537",
    STR: "2203",
    INT: "1519",
    AG: "1568",
    STAM: "2339",
    CRC: "12%",
    CRV: "210%",
    LegendaryOrder: "1,2,5,4.3",
    GearSet: "Mixed Tank",
    powers: {
      one: {
        name: "Hang Ten:",
        dis: {
          Default: "Damage enemy, gain crit chance up [2 turns].",
          Legendary: "On critical hit, call assist from random ally",
        },
      },
      two: {
        name: "Trident Toss:",
        dis: {
          Default:
            "Damage enemy, deal +6% damage per buff on Aquaman (up to 15).",
          Legendary: "Crit Damage +70%",
        },
      },
      three: {
        name: "Splash Zone:",
        dis: {
          Default:
            "Damage enemy, reduce cooldown for Splash Zone each time an ally gains a buff on their turn, except buffs gain from kills.",
          Legendary:
            "If Aquaman defeats an enemy with Spash Zone, reduce cooldown of next use by 3",
        },
      },
      four: {
        name: "Roar of the Ocean:",
        dis: {
          Default:
            "Passive Ability: Turn meter +10% for each ally that takes damage.",
          Legendary:
            "Apply 2 agility ups to the first ally that takes damage on enemy turn.",
        },
      },
      five: {
        name: "Stronger United:",
        dis: {
          Default:
            "Passive Ability: 65% chance for Aquaman to gain 1 crit chance up each time an ally gains a buff on their turn, except from buffs gained from kills.",
          Legendary: "Crit chance up +1",
        },
      },
    },
    CombatEffects: [
      "Agility Up",
      "Crit Chance Up",
      "Call Assist",
      "Cooldown Effects and Turn Meter Up",
    ],
    Affiliations: "Atlantean and Justice League",
    id: "4",
    affinity: "Mystical",
  },
  {
    tier: "T",
    name: "Blue Beetle",
    subName: "Jaime Reyes",
    SPD: "120",
    HP: "27656",
    STR: "2243",
    INT: "1801",
    AG: "2237",
    STAM: "2131",
    CRC: "22%",
    CRV: "316%",
    LegendaryOrder: "3,1,4,2,5",
    GearSet: "Mixed Support",
    powers: {
      one: {
        name: "Scarab Slash:",
        dis: {
          Default:
            "Damage to an enemy. Deals 80% Additional Damage if the target has a Mystical Affinity.",
          Legendary: "Attack twice if Blue Beetle is shielded.",
        },
      },
      two: {
        name: "Scarab's Might:",
        dis: {
          Default: "Gain 5 Strength Ups (2T). Also, gain 15% Turn Meter.",
          Legendary: "Gain 5 Agility Ups (2T).",
        },
      },
      three: {
        name: "Beetle Blast:",
        dis: {
          Default:
            "Damage to all enemies. Purge 3 Buffs to the main target if they have a mystical affinity.",
          Legendary: "Purge all immunities and awareness from all enemies.",
        },
      },
      four: {
        name: "Shield Breaker:",
        dis: {
          Default:
            "Whenever an enemy gains any Speed Ups, Blue Beetle has a 75% Chance to gain +15% Turn Meter Up and 15% shield.",
          Legendary:
            "75% Chance to use Scarab's Might when Shield Breaker is Triggered.",
        },
      },
      five: {
        name: "Carapace:",
        dis: {
          Default: "If an ally is killed, gain 75% Shield",
          Legendary: "+5 Speed Ups (2T).",
        },
      },
    },
    CombatEffects: [
      "Agility Up",
      "Speed Up",
      "Strength Up",
      "Apply Shield",
      "Turn Meter Up and Purge Buffs",
    ],
    Affiliations: "Titans",
    id: "24",
    affinity: "Mystical",
  },
  {
    tier: "T",
    name: "Doctor Fate",
    subName: "Sorcerer of Nabu",
    SPD: "85",
    HP: "25784",
    STR: "1439",
    INT: "2627",
    AG: "1897",
    STAM: "1998",
    CRC: "35%",
    CRV: "228%",
    LegendaryOrder:
      "3,1,4,2,5 non-leader build -or- Leader Build (3,5,1,2,4) Leadership is turning out to be better with all the overhealers now.",
    GearSet: "Special Striker",
    powers: {
      one: {
        name: "Order of Ra:",
        dis: {
          Default:
            "Special Damage to an enemy, 60% Chance to apply Heal Immunity.",
          Legendary: "Damage +100% against targets with Immunity Debuffs",
        },
      },
      two: {
        name: "Nabu's Protection:",
        dis: {
          Default: "Apply 40% Shield and 3 Hit Chance Ups to team.",
          Legendary: "Apply 3 Intelligence Ups to team",
        },
      },
      three: {
        name: "Wrath of Osiris:",
        dis: {
          Default: "Special Damage to an enemy. Always apply Heal Immunity.",
          Legendary: "Purge 7 Buffs from Target",
        },
      },
      four: {
        name: "Twist of Fate:",
        dis: {
          Default:
            "Passive Ability: 30% chance to deal Light Special Damage to an enemy at the start of their turn if they have Immunity Debuffs.",
          Legendary: "Damage +50%",
        },
      },
      five: {
        name: "Lord of Order:",
        dis: {
          Default:
            "Team Leader: Silence and apply 20% Turn Meter Down to any enemy that is healed.",
          Legendary:
            "Gain 1 Awareness and apply 1 Awareness to a random ally when Lord of Order is triggered",
        },
      },
    },
    CombatEffects: [
      "Awareness",
      "Hit Chance Up",
      "Intelligence Up",
      "Heal Immunity",
      "Silence",
      "Out of Turn Attacks",
      "Apply Shield",
      "Turn Meter Down and Purge Buffs",
    ],
    Affiliations: "Magician",
    id: "41",
    affinity: "Mystical",
  },
  {
    tier: "T",
    name: "Garth",
    subName: "Tempest",
    SPD: "112",
    HP: "26543",
    STR: "1498",
    INT: "2953",
    AG: "2252",
    STAM: "2074",
    CRC: "35%",
    CRV: "228%",
    LegendaryOrder: "5,4,3,2,1",
    GearSet: "Special Striker",
    powers: {
      one: {
        name: "Frostbite:",
        dis: {
          Default:
            "Heavy special damage and 50% Chance to apply Stun (1T) on a single enemy.",
          Legendary: "Also, apply 3 Evasion Downs (1T) to the target.",
        },
      },
      two: {
        name: "Fresh Start:",
        dis: {
          Default:
            "Apply a Medium Overheal to all allies. 60% Chance to also apply 1 Awareness to all allies.",
          Legendary: "50% Chance for Garth to gain 1 additional Awareness.",
        },
      },
      three: {
        name: "Pressure Chamber:",
        dis: {
          Default:
            "Heavy special damage and apply Silence (1T) and 5 Strength Downs (2T) on a single target.",
          Legendary: "For each Strength Down, apply 1 Intelligence Down (2T).",
        },
      },
      four: {
        name: "Lifeguard:",
        dis: {
          Default:
            "Passive: Apply 5 Mends (3T) on a random teammate at the end of each turn.",
          Legendary: "Also, apply 3 Crit Chance Ups (2T).",
        },
      },
      five: {
        name: "Muddy Waters:",
        dis: {
          Default:
            "Passive: Apply 3 Speed Downs (1T) on a random enemy at the end of each turn.",
          Legendary: "Also, apply 3 Agility Downs (1T).",
        },
      },
    },
    CombatEffects: [
      "Awareness",
      "Crit Chance Up",
      "Mends",
      "Agility Down",
      "Evasion Down",
      "Intelligence Down",
      "Silence",
      "Speed Down",
      "Strength Down",
      "Stun and Heal",
    ],
    Affiliations: "Atlantean",
    id: "170",
    affinity: "Mystical",
  },
  {
    tier: "T",
    name: "Vandal Savage",
    subName: "Vandal Adg",
    SPD: "108",
    HP: "26488",
    STR: "1649",
    INT: "2928",
    AG: "2124",
    STAM: "2069",
    CRC: "35%",
    CRV: "228%",
    LegendaryOrder: "2,1],3,5,4 (early testing from Tewtytron)",
    GearSet: "Special Striker",
    powers: {
      one: {
        name: "Fast Cut:",
        dis: {
          Default:
            "Special Damage to an enemy and gain 4 Crit Chance Ups (2T).",
          Legendary:
            "Apply 70% Extra Damage if Vandal Savage is under 50% health.",
        },
      },
      two: {
        name: "Blood Sacrifice:",
        dis: {
          Default:
            "Gain 3 Mends (3T) and 4 Int Ups (2T). Apply Special Damage to a single enemy.",
          Legendary: "Gain 4 Crit Chance Ups (2T).",
        },
      },
      three: {
        name: "Tactical Expertise:",
        dis: {
          Default:
            "Special Damage to all enemies and apply Buff Immunity (1T) to primary target.",
          Legendary: "Reset Blood Sacrifice cooldown if an enemy is killed.",
        },
      },
      four: {
        name: "Cannibal:",
        dis: {
          Default:
            "Passive Ability: Every time Vandal Savage deals damage, purge 4 Debuffs on him and if the damage is critical purge 4 Buffs on the target.",
          Legendary: "Gain 2 permanent Crit Chance Up when an enemy dies.",
        },
      },
      five: {
        name: "The Mark of Cain:",
        dis: {
          Default:
            "Passive Ability: 75% chance to gain Death Immunity (1T) at the end of every Vandal Savage turn if he is under 50% health .",
          Legendary: "Start the battle with Damage Immunity (1T).",
        },
      },
    },
    CombatEffects: [
      "Crit Chance Up",
      "Death Immunity",
      "Intelligence Up",
      "Mends",
      "Buff Immunity",
      "Cooldown Effects",
      "Purge Buffs and Purge Debuffs",
    ],
    Affiliations: "Secret Society of Super-Villains",
    id: "137",
    affinity: "Mystical",
  },
  {
    tier: "T",
    name: "Zatanna",
    subName: "Mistress of Magic",
    SPD: "93",
    HP: "25295",
    STR: "1460",
    INT: "2630",
    AG: "1921",
    STAM: "1950",
    CRC: "35%",
    CRV: "228%",
    LegendaryOrder: "1,2,3,4,5 (lol for real)",
    GearSet: "Special Striker",
    powers: {
      one: {
        name: "Abracadabra:",
        dis: {
          Default: "Special Damage and apply 3 Intelligence Downs to an enemy.",
          Legendary: "Always purge 2 Buffs from Target",
        },
      },
      two: {
        name: "Stacked Deck:",
        dis: {
          Default: "Heavy Heal and purge 2 debuffs from all allies.",
          Legendary: "15% True Heal to all allies",
        },
      },
      three: {
        name: "Hat Trick:",
        dis: {
          Default: "Special Damage and always purge 6 buffs from an enemy.",
          Legendary: "Apply 4 Intelligence Downs",
        },
      },
      four: {
        name: "Hocus Pocus:",
        dis: {
          Default:
            "Passive Ability: 43% chance to apply 1 Intelligence Down [2 turns] on enemies that damage Zatanna.",
          Legendary:
            "Apply 1 extra Intelligence Down on enemies that damage Zatanna",
        },
      },
      five: {
        name: "Mistress of Magic:",
        dis: {
          Default:
            "Team Leader: All allies have a 46% chance to gain +15% turn meter if debuffing an enemy.",
          Legendary: "Equal chance to purge 1 debuff from themselves",
        },
      },
    },
    CombatEffects: [
      "Intelligence Down",
      "Heal",
      "Turn Meter Up",
      "Purge Buffs and Purge Debuffs",
    ],
    Affiliations: "Justice League Dark and Magician",
    id: "132",
    affinity: "Mystical",
  },
  {
    tier: "T",
    name: "Livewire",
    subName: "Shock Jock",
    SPD: "129",
    HP: "27124",
    STR: "1400",
    INT: "2734",
    AG: "2152",
    STAM: "2132",
    CRC: "35%",
    CRV: "228%",
    LegendaryOrder: "3,1,4,2,5 more (updated for rework)",
    GearSet: "Special Striker",
    powers: {
      one: {
        name: "Gigawatt:",
        dis: {
          Default:
            "Deal Special Damage to an enemy. +15% Damage for each Intelligence Up on Livewire (Max 10).",
          Legendary: "40% Chance to hit an additional random enemy",
        },
      },
      two: {
        name: "Quick Charge:",
        dis: {
          Default: "Gain between 4-7 Intelligence Ups. Gain 15% True Heal.",
          Legendary: "Purge 2 Debuffs from Livewire",
        },
      },
      three: {
        name: "Lightning Storm:",
        dis: {
          Default:
            "Special Damage to an enemy and Purge all Int Ups on self. 12% chance to strike a second enemy and 8% chance to strike a third enemy per Int Up purged.",
          Legendary:
            "For every 2 Intelligence Up Purged from Livewire, Gain 1 Evasion Up",
        },
      },
      four: {
        name: "Static Shock:",
        dis: {
          Default:
            "Passive Ability: If two or more allies take damage from a single attack, 80% Chance to use Gigawatt and apply 3 Speed Downs to Attacker. Can't miss.",
          Legendary: "If Static Shock is triggered gain +3 Intelligence Ups",
        },
      },
      five: {
        name: "Living Lightning:",
        dis: {
          Default:
            "Passive Ability: Start Each Battle with 5 Evasion Ups, 1 Evasion Up purged each time Livewire has a turn. Gain 25%-45% Turn Meter Up if Livewire Evades.",
          Legendary:
            "If Livewire evades, 50% Chance to Reduce the cooldown of Livewire's abilities by 1",
        },
      },
    },
    CombatEffects: [
      "Evasion Up",
      "Intelligence Up",
      "Can't Miss",
      "Cooldown Effects",
      "Out of Turn Attacks",
      "Purge Debuffs",
      "Start of Battle Ability and Self Heal",
    ],
    Affiliations: "Superman Revenge Squad",
    id: "77",
    affinity: "Energy",
  },
  {
    tier: "?",
    name: "Penguin",
    subName: "The Gentleman of Crime",
    SPD: "133",
    HP: "40019",
    STR: "2205",
    INT: "1641",
    AG: "1868",
    STAM: "3087",
    CRC: "12%",
    CRV: "210%",
    LegendaryOrder: "Reworked - TBD",
    GearSet: "Mixed Tank",
    powers: {
      one: {
        name: "Napalm Umbrella:",
        dis: {
          Default: "Damage an enemy, apply 8 Crit Damage Downs (2T).",
          Legendary: "Always steal 5 buffs from Target. Gain Taunt (1T).",
        },
      },
      two: {
        name: "Umbrella Shield:",
        dis: {
          Default:
            "Apply 30% Shield to self and 15% Shield to allies, Gain 2 Stamina Ups (1T).",
          Legendary: "Apply 5 Affinity power downs (2T) to the enemy team.",
        },
      },
      three: {
        name: "Henchy, Attack!:",
        dis: {
          Default:
            "Damage all enemies, if Penguin has Shield apply 8 Crit Damage Down (2T) to all enemies.",
          Legendary: "Apply 30% Turn Meter Down.",
        },
      },
      four: {
        name: "Roost:",
        dis: {
          Default:
            "40% chance to use Umbrella Shield if Penguin takes damage. Automatically trigger if Penguin is damaged by a critical hit.",
          Legendary: "Also, 50% chance to steal 4 buffs from the attacker.",
        },
      },
      five: {
        name: "Henchy's Revenge:",
        dis: {
          Default:
            "The first time Penguin takes lethal damage, use Henchy, Attack!.",
          Legendary:
            "50% Chance to Taunt at the beginning of each enemy turn if Penguin is shielded until the end of that turn.",
        },
      },
    },
    CombatEffects: [
      "Taunt",
      "Stamina Up",
      "Crit Damage Down",
      "Affinity Power Down",
      "Buff Stealing",
      "Counter Attacks",
      "Apply Shield and Turn Meter Down",
    ],
    Affiliations: "Injustice League",
    id: "93",
    affinity: "Physical",
  },
  {
    tier: "?",
    name: "Poison Ivy",
    subName: "Mistress of Plants",
    SPD: "115",
    HP: "30076",
    STR: "2688",
    INT: "1688",
    AG: "2450",
    STAM: "2373",
    CRC: "25%",
    CRV: "228%",
    LegendaryOrder: "Reworked - TBD",
    GearSet: "Physical Support",
    powers: {
      one: {
        name: "Snap Trap:",
        dis: {
          Default:
            "Damage to a single enemy and apply 3 Disease (3T) and 2 Bleed (3T).",
          Legendary: "Gain 5 Stamina Ups (1T).",
        },
      },
      two: {
        name: "Pheromone Kiss:",
        dis: {
          Default: "Apply 4 Taunt (2T) and 6 Stamina Up (2T) to a teammate.",
          Legendary:
            "Apply Critical Immunity (2T), Debuff Immunity (2T) and Call Assist.",
        },
      },
      three: {
        name: "Cross-Pollinate:",
        dis: {
          Default:
            "Apply 5 Stamina Up (2T) to ally and 4 to random ally, copy up to 3 random Buffs from the target to the rest of the team.",
          Legendary:
            "Up to 3 Debuffs are moved from the target onto another random enemy. If no debuffs on target, apply 3 Stamina Up (2T).",
        },
      },
      four: {
        name: "Toxic Transfer:",
        dis: {
          Default:
            "At the start of her turn, 65% chance to apply a (295) Heavy Overheal on a random ally and to move up to 5 debuffs from the target onto random enemies.",
          Legendary: 'Also, reduce "Cross-Pollinate" cooldown by 2.',
        },
      },
      five: {
        name: "Natural Selection:",
        dis: {
          Default:
            "Whenever an ally is healed, apply 3 Disease (3T) to a random enemy.",
          Legendary:
            'At the end of an ally\'s turn, if they have 5 or more Debuffs, use "Toxic Transfer" on them.',
        },
      },
    },
    CombatEffects: [
      "Crit Immunity",
      "Debuff Immunity",
      "Stamina Up",
      "Bleeds",
      "Disease",
      "Call Assist",
      "Cooldown Effects",
      "Debuff Transfer",
      "Heal and Apply Taunt to Ally",
    ],
    Affiliations: "Injustice League",
    id: "94",
    affinity: "Physical",
  },
  {
    tier: "?",
    name: "The Question",
    subName: "Renee Montoya",
    SPD: "121",
    HP: "31015",
    STR: "2658",
    INT: "1700",
    AG: "2368",
    STAM: "2466",
    CRC: "25%",
    CRV: "228%",
    LegendaryOrder: "TBD",
    GearSet: "Physical Support",
    powers: {
      one: {
        name: "Answer The Question:",
        dis: {
          Default:
            "Damage to a single enemy and 40% chance to apply Silence (2T). Apply 3 Crit Chance Up (1T) to a random teammate.",
          Legendary:
            "Convert 3 Buffs on the enemy target into a Strength Down (1T) and an Agility Down (1T) per converted Buff.",
        },
      },
      two: {
        name: "Tracked You Down:",
        dis: {
          Default:
            "Remove Immunity Buffs on all enemies. Apply 4 Evasion Down (2T) to all enemies and 2 Crit Chance Up (2T) to all allies.",
          Legendary:
            "Call Assist from 2 random teammates targeting 2 random enemies.",
        },
      },
      three: {
        name: "Full Clip:",
        dis: {
          Default:
            "Damage to a single enemy and apply Taunt (2T). Apply 4 Crit Chance Up (1T) and 2 Crit Damage Up (1T) to all teammates.",
          Legendary:
            "Also, apply Silence (2T) to the enemy target and 30% Turn Meter Up to all teammates.",
        },
      },
      four: {
        name: "No Patience For Punks:",
        dis: {
          Default:
            "At the end of her turn, transfer 2 Debuffs from a random ally to a random enemy. If the teammate is a Hero, transfer all their remaining Debuffs to another random enemy.",
          Legendary:
            'Also, apply 30% Turn Meter Up to all allies and Call Assist from a random "Hero" teammate targeting a random enemy.',
        },
      },
      five: {
        name: "Who I Will Become?:",
        dis: {
          Default:
            'At the end of an enemy\'s turn, if a teammate was killed, use "Tracked You Down" and gain 70% Turn Meter Up.',
          Legendary:
            'Also, gain 2 Crit Damage Up (0T) and use "Answer The Question" on the attacker with a guaranteed critical hit.',
        },
      },
    },
    CombatEffects: [
      "Crit Chance Up",
      "Crit Damage Up",
      "Agility Down",
      "Evasion Down",
      "Silence",
      "Strength Down",
      "Call Assist",
      "Counter Attacks",
      "Buff to Debuff conversion",
      "Debuff Transfer",
      "Apply Taunt to enemy",
      "Turn Meter Up and Purge Buffs",
    ],
    Affiliations: "Outlaws",
    id: "188",
    affinity: "Physical",
  },
  {
    tier: "?",
    name: "Flatline",
    subName: "Princess of Pain",
    SPD: "129",
    HP: "29859",
    STR: "2701",
    INT: "1553",
    AG: "2278",
    STAM: "2226",
    CRC: "47%",
    CRV: "256%",
    LegendaryOrder: "TBD",
    GearSet: "Physical Striker",
    powers: {
      one: {
        name: "Death Man's Chattels:",
        dis: {
          Default: "Heavy Damage to a single enemy and gain Invisibility (1T).",
          Legendary:
            "Also, gain 2 Crit Chance Ups (2T) and 2 Crit Damage Ups (2T).",
        },
      },
      two: {
        name: "Grandfather's Keepsake:",
        dis: {
          Default: "Damage to all enemies and gain 4 Crit Damage Ups (2T).",
          Legendary: "Apply 2 Stamina Ups (2T) on all allies.",
        },
      },
      three: {
        name: "Lazarus' Bequest:",
        dis: {
          Default: "Heavy Damage and 5 Bleeds(3T) on a single enemy.",
          Legendary: "Gain 3 Crit Damage Ups (2T) and 3 Crit Chance Ups (2T).",
        },
      },
      four: {
        name: "On Thin Ice:",
        dis: {
          Default:
            "Apply 6 Stamina Ups (1T) on all allies at the end of her turn.",
          Legendary: "If Flatline kills an enemy, she gains 50% turn meter up.",
        },
      },
      five: {
        name: "Rigor Mortis:",
        dis: {
          Default:
            "50% chance to apply 4 Crit Damage Downs (1T) and 4 Crit Chance Downs (1T) on all enemies at the end of her turn.",
          Legendary:
            "50% chance to double Bleeds on all Bleeding enemies at the end of her turn (Max 10).",
        },
      },
    },
    CombatEffects: [
      "Crit Chance Up",
      "Crit Damage Up",
      "Invisibility",
      "Stamina Up",
      "Bleeds",
      "Crit Chance Down",
      "Crit Damage Down and Turn Meter Up",
    ],
    Affiliations: "Leviathan",
    id: "187",
    affinity: "Energy",
  },
];

export { characters };
