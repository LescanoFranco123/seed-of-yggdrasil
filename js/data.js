// Seed of Yggdrasil — race and class data
// Each race grants a stat bonus reflecting its nature; each class carries
// the weapons and signature skills available to characters of that path.

const races = {
    Human: {
        classes: ["Fighter", "Paladin", "Rogue", "Wizard", "Skald"],
        bonus: { strength: 1, dexterity: 1, constitution: 1, intelligence: 1, wisdom: 1, charisma: 1 }
    },
    Elf: {
        classes: ["Wizard", "Ranger", "Druid", "Skald"],
        bonus: { dexterity: 2, intelligence: 1 }
    },
    Dwarf: {
        classes: ["Fighter", "Paladin"],
        bonus: { constitution: 2, strength: 1 }
    },
    Orc: {
        classes: ["Barbarian", "Fighter"],
        bonus: { strength: 3 }
    },
    Jotun: {
        classes: ["Barbarian", "Druid"],
        bonus: { strength: 2, constitution: 2 }
    },
    Volsung: {
        classes: ["Paladin", "Ranger", "Volva"],
        bonus: { wisdom: 2, charisma: 1 }
    }
};

const classes = {
    Fighter: {
        weapons: ["Longsword", "Battle Axe", "Warhammer"],
        skills: ["Second Wind", "Action Surge"]
    },
    Barbarian: {
        weapons: ["Greataxe", "Greatsword", "Maul"],
        skills: ["Rage", "Reckless Attack"]
    },
    Wizard: {
        weapons: ["Quarterstaff", "Arcane Focus", "Spellbook"],
        skills: ["Fireball", "Magic Missile"]
    },
    Paladin: {
        weapons: ["Holy Sword", "Warhammer"],
        skills: ["Divine Smite", "Lay on Hands"]
    },
    Ranger: {
        weapons: ["Longbow", "Shortbow", "Dual Daggers"],
        skills: ["Hunter's Mark", "Volley"]
    },
    Rogue: {
        weapons: ["Dagger", "Rapier", "Crossbow"],
        skills: ["Sneak Attack", "Stealth"]
    },
    Druid: {
        weapons: ["Nature Staff", "Oak Staff"],
        skills: ["Wild Shape", "Moonbeam"]
    },
    Skald: {
        weapons: ["Carved Lute", "Rune Horn"],
        skills: ["Battle Hymn", "Saga of Old"]
    },
    Volva: {
        weapons: ["Seidr Staff", "Bone Wand"],
        skills: ["Sight Beyond Sight", "Weave of Fate"]
    }
};

// Saga fragments — one is chosen at random to close out each character's story.
const sagaFragments = [
    "wanders the nine realms in search of a fate worth singing about.",
    "was born under a red moon, marked by the roots of Yggdrasil itself.",
    "carries an old debt to the Norns, and pays it in small acts of glory.",
    "left home the day the ravens stopped returning, and never looked back.",
    "is remembered in three villages — twice as a hero, once as a warning.",
    "swore an oath at the World Tree's roots that still shapes every choice made since."
];
