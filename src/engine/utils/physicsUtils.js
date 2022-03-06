import { newVector } from "../models/engine/vector";

export const maxForce = (force, max) => {
  return newVector(Math.min(force.x, max), Math.min(force.y, max));
};

export const shouldBounce = (pos, force, minSize, maxSize) => {  
  const outOfX = (pos.x <= minSize.x && force.x < 0)
    || (pos.x >= maxSize.x && force.x > 0);

  const outOfY = (pos.y <= minSize.y && force.y > 0)
    || (pos.y >= maxSize.y && force.y < 0);

    return [outOfX, outOfY];
};