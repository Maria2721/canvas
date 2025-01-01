// Circle with random position, velocity, color
class Circle {
	constructor(x, y, dx, dy, radius, color) {
		this.x = x;
		this.y = y;
		this.dx = dx;
		this.dy = dy;
		this.radius = radius;
		this.color = color;
	}

	draw(ctx) {
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
		ctx.fillStyle = this.color;
		ctx.fill();
	}

	update(ctx, width, height) {
		if (this.x + this.radius > width || this.x - this.radius < 0) {
			this.dx = -this.dx;
		}

		if (this.y + this.radius > height || this.y - this.radius < 0) {
			this.dy = -this.dy;
		}

		this.x += this.dx;
		this.y += this.dy;

		this.draw(ctx);
	}
}

const setupCanvas = (canvas) => {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
};

const createCircles = (count, width, height) => {
	const circles = [];

	for (let i = 0; i < count; i++) {
		const radius = 30;
		const x = Math.random() * (width - radius * 2) + radius;
		const y = Math.random() * (height - radius * 2) + radius;
		const dx = (Math.random() - 0.5) * 10;
		const dy = (Math.random() - 0.5) * 10;
		const randomRed = Math.floor(Math.random() * 256);
		const randomGreen = Math.floor(Math.random() * 256);
		const randomBlue = Math.floor(Math.random() * 256);
		const color = `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`;

		circles.push(new Circle(x, y, dx, dy, radius, color));
	}
	return circles;
};

const draw = () => {
	const canvas = document.getElementById("canvas");

	if (canvas.getContext) {
		const ctx = canvas.getContext("2d");
		setupCanvas(canvas);

		let circles = createCircles(50, canvas.width, canvas.height);

		// Animate every circle in array
		const animate = () => {
			requestAnimationFrame(animate);
			ctx.clearRect(0, 0, canvas.width, canvas.height);

			circles.forEach((circle) =>
				circle.update(ctx, canvas.width, canvas.height)
			);
		};

		animate();

		// Update canvas when window is resize
		window.addEventListener("resize", () => {
			setupCanvas(canvas);
			circles = createCircles(50, canvas.width, canvas.height);
		});
	}
};

window.addEventListener("load", draw);
