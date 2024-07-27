type diceRoll = `${number}d${number}`;

function splitDice(roll: diceRoll) {
	const [amount, dice] = roll.split("d").map(Number);
	return { amount, dice };
}

function splitRolls(rolls: string) {
	const dices: diceRoll[] = [];
	const mods: number[] = [];

	for (const roll of rolls.split("+").map((t) => t.trim())) {
		if (roll.includes("d")) dices.push(roll as diceRoll);
		else mods.push(Number(roll));
	}

	return { dices, mods };
}

function averageDiceRoll(roll: diceRoll) {
	const { amount, dice } = splitDice(roll);

	return amount * Math.floor(dice / 2) + 1;
}

export function averageDiceRolls(rolls: string) {
	const { dices, mods } = splitRolls(rolls);

	const averageRolls = dices.map(averageDiceRoll).reduce((a, n) => a + n, 0);
	const sumMods = mods.reduce((a, n) => a + n, 0);

	return averageRolls + sumMods;
}

function minMaxDiceRoll(roll: diceRoll) {
	const { amount, dice } = splitDice(roll);

	const min = amount;
	const max = amount * dice;

	return { min, max };
}

export function minMaxDiceRolls(rolls: string) {
	const { dices, mods } = splitRolls(rolls);

	const sumMods = mods.reduce((a, n) => a + n, 0);

	const { min, max } = dices.map(minMaxDiceRoll).reduce((a, n) => {
		return {
			min: a.min + n.min,
			max: a.max + n.max,
		};
	});

	return { min: min + sumMods, max: max + sumMods };
}

function compare(a: number, b: number) {
	return [Math.round((a * 100) / b), Math.round((b * 100) / a)];
}

export function compareDiceRolls(firstRoll: string, secondRoll: string) {
	const firstAvg = averageDiceRolls(firstRoll);
	const secondAvg = averageDiceRolls(secondRoll);

	const { min: firstMin, max: firstMax } = minMaxDiceRolls(firstRoll);
	const { min: secondMin, max: secondMax } = minMaxDiceRolls(secondRoll);

	const min = compare(firstMin, secondMin);
	const avg = compare(firstAvg, secondAvg);
	const max = compare(firstMax, secondMax);

	return { min, avg, max };
}
