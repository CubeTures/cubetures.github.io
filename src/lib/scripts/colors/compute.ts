import { tailwindColors, type ColorData, type ColorTuple } from "./colors";

function getColor(color: string): ColorData[] {
	const data = tailwindColors[color];

	if (data === undefined) {
		throw new Error(`Color ${color} does not exist.`);
	}

	return data;
}

function findValue(color: string, value: string): ColorData {
	const v = getColor(color).find((h) => h.value === value.toString());

	if (v === undefined) {
		throw new Error(`Value ${value} does not exist for ${color}`);
	}

	return v;
}

function generateHex(color: string, value: string) {
	return "#" + findValue(color, value).hex.slice(1);
}

function parseHex(color: string, value: string): RegExpExecArray {
	const h = generateHex(color, value);
	const o = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(h);

	if (o === null) {
		throw new Error("Regex failed to compile");
	}

	return o;
}

function generateRGB(color: string, value: string): ColorTuple {
	const o = parseHex(color, value);

	let l = parseInt(o[1], 16),
		i = parseInt(o[2], 16),
		e = parseInt(o[3], 16);

	return [l, i, e];
}

function generateHSL(color: string, value: string): ColorTuple {
	const o = parseHex(color, value);

	let l = parseInt(o[1], 16),
		i = parseInt(o[2], 16),
		e = parseInt(o[3], 16);

	(l /= 255), (i /= 255), (e /= 255);

	let s = Math.max(l, i, e),
		c = Math.min(l, i, e),
		u = 0,
		f,
		k = (s + c) / 2;

	if (s === c) u = f = 0;
	else {
		let t = s - c;
		switch (((f = k > 0.5 ? t / (2 - s - c) : t / (s + c)), s)) {
			case l:
				u = (i - e) / t + (i < e ? 6 : 0);
				break;
			case i:
				u = (e - l) / t + 2;
				break;
			case e:
				u = (l - i) / t + 4;
				break;
		}

		u /= 6;
	}
	return (
		(u = Math.round(u * 360)),
		(f = Math.round(f * 100)),
		(k = Math.round(k * 100)),
		[u, f, k]
	);
}

function formatHSL(hsl: ColorTuple): string {
	return `${Math.round(hsl[0])} ${Math.round(hsl[1])}% ${Math.round(
		hsl[2]
	)}%`;
}

export function getHSL(
	color: string,
	value: number,
	updateHSL?: (hsl: ColorTuple) => ColorTuple
): string {
	const v = Math.trunc(value).toString();
	let hsl = generateHSL(color, v);

	if (updateHSL !== undefined) {
		hsl = updateHSL(hsl);
	}

	return formatHSL(hsl);
}

export function hslFunction(hsl: string) {
	return `hsl(${hsl.split(" ").join(", ")})`;
}
