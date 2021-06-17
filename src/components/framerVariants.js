export const fadeinLeft = {
	active: {
		x: 0,
		opacity: 1,
		transition: { type: 'spring', duration: 1 }
	},
	inactive: {
		x: -150,
		opacity: 0
	}
};

export const fadeinRight = {
	active: {
		x: 0,
		opacity: 1,
		transition: { type: 'spring', duration: 0.8 }
	},
	inactive: {
		x: 100,
		opacity: 0
	}
};

export const fadeinTop = {
	active: {
		y: 0,
		opacity: 1,
		transition: { type: 'spring', duration: 0.8 }
	},
	inactive: {
		y: -150,
		opacity: 0
	}
};

export const fadeinBottom = {
	active: {
		y: 0,
		opacity: 1,
		transition: { type: 'spring', duration: 0.8 }
	},
	inactive: {
		y: 150,
		opacity: 0
	}
};
