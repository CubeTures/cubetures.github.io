import { tailwindColors } from "./colors";
import { getHSL, hslFunction } from "./compute";

function generateSingle(color: string): string {
	const _950 = getHSL(color, 950);
	const _900 = getHSL(color, 900);
	const _700 = getHSL(color, 700);
	const _500 = getHSL(color, 500);
	const _200 = getHSL(color, 200);
	const _50 = getHSL(color, 50);

	const highlight = `.tilter:hover.${color} {
		--background: ${_950};
		--card: ${_950};
		--border: ${_700};
		--middleground: ${_900};
		--foreground: ${_50};
		--muted-foreground: ${_200};

		box-shadow: 0px 0px 100px 0px ${hslFunction(_950)};
	}`;

	const primary = `body:has(.tilter:hover.${color}) {
		--primary: ${_500}
	}`;

	return `${highlight}\n\n${primary}`;
}

export function generateAll(): string {
	let result: string[] = [];

	for (const color of Object.keys(tailwindColors)) {
		result.push(generateSingle(color));
	}

	return result.join("\n\n");
}
