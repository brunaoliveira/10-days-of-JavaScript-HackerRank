
function sides(literals, ...expressions) {
    let s1, s2;
    const [area, perimeter] = expressions;

    s1 = (perimeter + Math.sqrt(perimeter**2 - 16 * area))/ 4;
    s2 = (perimeter - Math.sqrt(perimeter**2 - 16 * area))/ 4;

    return [s1, s2].sort((a, b) => a - b);
}

