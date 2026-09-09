// Seed of Yggdrasil — character generation logic

function rollStat() {
    return Math.floor(Math.random() * 12) + 8; // 8 - 19
}

function randomChoice(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function generateCharacter(characterName) {
    const raceNames = Object.keys(races);
    const selectedRace = randomChoice(raceNames);

    const availableClasses = races[selectedRace].classes;
    const selectedClass = randomChoice(availableClasses);
    const classData = classes[selectedClass];

    const stats = {
        strength: rollStat(),
        dexterity: rollStat(),
        constitution: rollStat(),
        intelligence: rollStat(),
        wisdom: rollStat(),
        charisma: rollStat()
    };

    const racialBonus = races[selectedRace].bonus;
    for (const stat in racialBonus) {
        stats[stat] += racialBonus[stat];
    }

    return {
        name: characterName,
        level: Math.floor(Math.random() * 20) + 1,
        race: selectedRace,
        class: selectedClass,
        weapon: randomChoice(classData.weapons),
        skill: randomChoice(classData.skills),
        stats: stats,
        saga: randomChoice(sagaFragments)
    };
}
