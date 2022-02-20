export const newVector = (x, y) => ({ x, y });

export const setVector = (vec) => ({ x: vec.x, y: vec.y });

export const addVectors = (vec1, vec2) => ({ x: vec1.x + vec2.x, y: vec1.y + vec2.y });

export const scaleVector = (vec, scalar) => ({x: vec.x * scalar, y: vec.y * scalar});
