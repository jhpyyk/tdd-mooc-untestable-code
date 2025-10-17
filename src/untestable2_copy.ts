// Hard to test because diceRoll returns a random value

interface RandomFunction { (): number }

export function diceRoll(rand: RandomFunction) {
	const min = 1;
	const max = 6;
	return Math.floor(rand() * (max + 1 - min) + min);
}

export function diceHandValue(die1: number, die2: number) {
	if (die1 === die2) {
		// one pair
		return 100 + die1;
	} else {
		// high die
		return Math.max(die1, die2);
	}
}
