// Seed of Yggdrasil — UI wiring

const STAT_LABELS = {
    strength: "Strength",
    dexterity: "Dexterity",
    constitution: "Constitution",
    intelligence: "Intelligence",
    wisdom: "Wisdom",
    charisma: "Charisma"
};

const STAT_MAX = 24; // highest realistic rolled value, used for the bar scale

function buildAttributeRow(label, value) {
    const row = document.createElement("div");
    row.className = "stat-row";

    const percent = Math.min(100, Math.round((value / STAT_MAX) * 100));

    row.innerHTML = `
        <div class="stat-row-top">
            <span class="stat-label">${label}</span>
            <span class="stat-value">${value}</span>
        </div>
        <div class="stat-bar"><div class="stat-bar-fill" style="width:${percent}%"></div></div>
    `;

    return row;
}

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("summonForm");
    const nameInput = document.getElementById("characterName");
    const result = document.getElementById("result");
    const attributesEl = document.getElementById("attributes");

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const playerName = nameInput.value.trim();

        if (!playerName) {
            nameInput.focus();
            nameInput.classList.add("input-error");
            setTimeout(() => nameInput.classList.remove("input-error"), 600);
            return;
        }

        const character = generateCharacter(playerName);

        document.getElementById("charName").textContent = character.name;
        document.getElementById("charMeta").textContent =
            `Level ${character.level} ${character.race} ${character.class}`;

        document.getElementById("charWeapon").textContent = character.weapon;
        document.getElementById("charSkill").textContent = character.skill;

        attributesEl.innerHTML = "";
        Object.entries(character.stats).forEach(([key, value]) => {
            attributesEl.appendChild(buildAttributeRow(STAT_LABELS[key], value));
        });

        document.getElementById("charStory").textContent =
            `${character.name} ${character.saga}`;

        result.hidden = false;
        // restart the reveal animation on every generation
        result.classList.remove("reveal");
        void result.offsetWidth;
        result.classList.add("reveal");

        result.scrollIntoView({ behavior: "smooth", block: "nearest" });
    });
});
