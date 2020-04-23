class Circle {
    constructor(radius) {
        this.radius = radius
    }

    get diameter() {
        return this.radius * 2;
    }

    set diameter(newDiameter) {
        this.radius = newDiameter / 2;
    }

    get circumference() {
        return Math.PI * (this.radius * 2);
    }

    set circumference(newCircle) {
        this.radius = (newCircle / Math.PI) / 2
    }

    get area() {
        return Math.PI * (this.radius**2);
    }
}