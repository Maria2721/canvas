const draw = () => {
	const canvas = document.getElementById("canvas");
	if (canvas.getContext) {
		const ctx = canvas.getContext("2d");

		ctx.fillStyle = "rgb(200 0 0)";
		ctx.fillRect(10, 150, 50, 50);

		ctx.fillStyle = "rgb(0 0 200 / 50%)";
		ctx.fillRect(30, 180, 50, 50);

		ctx.fillStyle = "rgb(200 0 0)";
		ctx.beginPath();
		ctx.moveTo(200, 50);
		ctx.lineTo(250, 50);
		ctx.lineTo(250, 100);
		ctx.fill();

		ctx.beginPath();
		ctx.arc(75, 75, 50, 0, Math.PI * 2, true); // Outer circle
		ctx.moveTo(110, 75);
		ctx.arc(75, 75, 35, 0, Math.PI, false); // Mouth (clockwise)
		ctx.moveTo(65, 65);
		ctx.arc(60, 65, 5, 0, Math.PI * 2, true); // Left eye
		ctx.moveTo(95, 65);
		ctx.arc(90, 65, 5, 0, Math.PI * 2, true); // Right eye
		ctx.stroke();

		// Filled triangle
		ctx.beginPath();
		ctx.moveTo(125, 125);
		ctx.lineTo(225, 125);
		ctx.lineTo(125, 205);
		ctx.fill();

		// Stroked triangle
		ctx.beginPath();
		ctx.moveTo(225, 225);
		ctx.lineTo(225, 145);
		ctx.lineTo(145, 225);
		ctx.closePath();
		ctx.stroke();
	}
};

const drawArc = () => {
	const canvas = document.getElementById("canvasArc");
	if (canvas.getContext) {
		const ctx = canvas.getContext("2d");

		for (let i = 0; i < 4; i++) {
			for (let j = 0; j < 3; j++) {
				ctx.beginPath();
				const x = 25 + j * 50; // x coordinate
				const y = 25 + i * 50; // y coordinate
				const radius = 20; // Arc radius
				const startAngle = 0; // Starting point on circle
				const endAngle = Math.PI + (Math.PI * j) / 2; // End point on circle
				const counterclockwise = i % 2 !== 0; // clockwise or counterclockwise

				ctx.arc(x, y, radius, startAngle, endAngle, counterclockwise);

				if (i > 1) {
					ctx.fill();
				} else {
					ctx.stroke();
				}
			}
		}
	}
};

const drawCurves = () => {
	const canvas = document.getElementById("canvasCurves");
	if (canvas.getContext) {
		const ctx = canvas.getContext("2d");

		// Quadratic curves example
		ctx.beginPath();
		ctx.moveTo(75, 25);
		ctx.quadraticCurveTo(25, 25, 25, 62.5);
		ctx.quadraticCurveTo(25, 100, 50, 100);
		ctx.quadraticCurveTo(50, 120, 30, 125);
		ctx.quadraticCurveTo(60, 120, 65, 100);
		ctx.quadraticCurveTo(125, 100, 125, 62.5);
		ctx.quadraticCurveTo(125, 25, 75, 25);
		ctx.stroke();

		ctx.beginPath();
		ctx.fillStyle = "rgb(200 0 0)";
		ctx.moveTo(75, 50);
		ctx.bezierCurveTo(75, 40, 70, 34, 57, 32);
		ctx.bezierCurveTo(35, 40, 40, 52, 40, 60);
		ctx.bezierCurveTo(40, 65, 45, 70, 75, 90);
		ctx.fill();
	}
};

const drawCombinations = () => {
	const canvas = document.getElementById("canvasCombinations");
	if (canvas.getContext) {
		const ctx = canvas.getContext("2d");

		roundedRect(ctx, 12, 12, 184, 168, 15);
		roundedRect(ctx, 19, 19, 170, 154, 9);
		roundedRect(ctx, 53, 53, 49, 33, 10);
		roundedRect(ctx, 53, 119, 49, 16, 6);
		roundedRect(ctx, 135, 53, 49, 33, 10);
		roundedRect(ctx, 135, 119, 25, 49, 10);

		ctx.beginPath();
		ctx.arc(37, 37, 13, Math.PI / 7, -Math.PI / 7, false);
		ctx.lineTo(31, 37);
		ctx.fill();

		for (let i = 0; i < 8; i++) {
			ctx.fillRect(51 + i * 16, 35, 4, 4);
		}

		for (let i = 0; i < 6; i++) {
			ctx.fillRect(115, 51 + i * 16, 4, 4);
		}

		for (let i = 0; i < 8; i++) {
			ctx.fillRect(51 + i * 16, 99, 4, 4);
		}

		ctx.beginPath();
		ctx.moveTo(83, 116);
		ctx.lineTo(83, 102);
		ctx.bezierCurveTo(83, 94, 89, 88, 97, 88);
		ctx.bezierCurveTo(105, 88, 111, 94, 111, 102);
		ctx.lineTo(111, 116);
		ctx.lineTo(106.333, 111.333);
		ctx.lineTo(101.666, 116);
		ctx.lineTo(97, 111.333);
		ctx.lineTo(92.333, 116);
		ctx.lineTo(87.666, 111.333);
		ctx.lineTo(83, 116);
		ctx.fill();

		ctx.fillStyle = "white";
		ctx.beginPath();
		ctx.moveTo(91, 96);
		ctx.bezierCurveTo(88, 96, 87, 99, 87, 101);
		ctx.bezierCurveTo(87, 103, 88, 106, 91, 106);
		ctx.bezierCurveTo(94, 106, 95, 103, 95, 101);
		ctx.bezierCurveTo(95, 99, 94, 96, 91, 96);
		ctx.moveTo(103, 96);
		ctx.bezierCurveTo(100, 96, 99, 99, 99, 101);
		ctx.bezierCurveTo(99, 103, 100, 106, 103, 106);
		ctx.bezierCurveTo(106, 106, 107, 103, 107, 101);
		ctx.bezierCurveTo(107, 99, 106, 96, 103, 96);
		ctx.fill();

		ctx.fillStyle = "black";
		ctx.beginPath();
		ctx.arc(101, 102, 2, 0, Math.PI * 2, true);
		ctx.fill();

		ctx.beginPath();
		ctx.arc(89, 102, 2, 0, Math.PI * 2, true);
		ctx.fill();
	}
};

function roundedRect(ctx, x, y, width, height, radius) {
	ctx.beginPath();
	ctx.moveTo(x, y + radius);
	ctx.arcTo(x, y + height, x + radius, y + height, radius);
	ctx.arcTo(x + width, y + height, x + width, y + height - radius, radius);
	ctx.arcTo(x + width, y, x + width - radius, y, radius);
	ctx.arcTo(x, y, x, y + radius, radius);
	ctx.stroke();
}

const drawPath = () => {
	const canvas = document.getElementById("canvasPath");
	if (canvas.getContext) {
		const ctx = canvas.getContext("2d");

		const rectangle = new Path2D();
		rectangle.rect(10, 10, 50, 50);
		rectangle.rect(70, 70, 50, 50);

		const circle = new Path2D();
		circle.arc(100, 35, 25, 0, 2 * Math.PI);

		ctx.stroke(rectangle);
		ctx.fill(circle);
	}
};

window.addEventListener("load", draw);
window.addEventListener("load", drawArc);
window.addEventListener("load", drawCurves);
window.addEventListener("load", drawCombinations);
window.addEventListener("load", drawPath);
