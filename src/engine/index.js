import {
  addVectors,
  newVector,
  normalizeVector,
  scaleVector,
  vectorMagnitude
} from "./models/engine/vector";
import { clamp } from "./utils/mathUtils";
import { shouldBounce } from "./utils/physicsUtils";
import { toScreenCoordinates, toWorldPosition } from "./utils/screenUtils";

export const applyAcceleration = (force, acceleration, deltaTime) => {
  return addVectors(force, scaleVector(acceleration, deltaTime));
};

export const gravityForce = (force, deltaTime) => {
  const acceleration = newVector(0, -9.81);
  const newForce = applyAcceleration(force, acceleration, deltaTime);

  return newForce;
};

export const applyForce = (pos, force) => {
  return addVectors(pos, force);
};

export const slowAcceleration = (acceleration, deltaTime) => {
  const friction = 1 * deltaTime;
  const x = acceleration.x >= 0 ? Math.max(acceleration.x - friction, 0.0) : Math.min(acceleration.x + friction, 0.0);
  const y = acceleration.y >= 0 ? Math.max(acceleration.y - friction, 0.0) : Math.min(acceleration.y + friction, 0.0);
  return newVector(x, y);
}

export const checkBounds = (pos, force, acceleration, size, dimension) => {
  const halfSize = (size || 0) / 2.0;
  const screenPosition = toScreenCoordinates(pos, dimension);
  const x = clamp(screenPosition.x, 0 + halfSize, dimension.width - halfSize);
  const y = clamp(screenPosition.y, 0 + halfSize, dimension.height - halfSize);
  const worldPosition = toWorldPosition(newVector(x, y), dimension);

  const [outOfX, outOfY] = shouldBounce(screenPosition, force, newVector(halfSize, halfSize),
    newVector(dimension.width - halfSize, dimension.height - halfSize));

  const newAcceleration = newVector(outOfX ? -acceleration.x : acceleration.x, outOfY ? -acceleration.y : acceleration.y);

  const finalForce = newVector(outOfX ? -force.x : force.x, outOfY ? -force.y : force.y);

  const hit = !!(outOfX || outOfY);

  return [worldPosition, finalForce, newAcceleration, hit];
};

export const handleCircleCollisions = (circles) => (position, force, acceleration, size, id) => {
  const isThisCircle = (id) => {
    for (let i = 0; i < circles.length; i++) {
      if (circles[i].id === id) {
        return true;
      }
    }
    return false;
  };

  const filterCircles = (id) => {
    const validCircles = [];

    for (let i = 0; i < circles.length; i++) {
      if (circles[i].id !== id) {
        validCircles.push(circles[i]);
      }
    }

    return validCircles;
  };

  if (circles && !isThisCircle(id)) {
    return [position, force, acceleration];
  }
  const radius = size / 2.0;

  const validCircles = filterCircles(id);

  for (let i = 0; i < validCircles.length; i++) {
    const c = circles[i];
    const cRadius = c.size / 2.0;
    const dx = position.x - c.position.current.x;
    const dy = position.y - c.position.current.y;
    const difference = newVector(dx, dy);
    const distance = vectorMagnitude(difference);

    if (distance <= radius + cRadius) {
      const normalVector = normalizeVector(difference, distance);
      const scaledVector = scaleVector(normalVector, cRadius + radius);

      const newPosition = addVectors(c.position.current, scaledVector);

      const forceMagnitude = vectorMagnitude(force);
      const accelerationMagnitude = vectorMagnitude(acceleration);

      const newForce = scaleVector(normalVector, forceMagnitude);
      const newAcceleration = scaleVector(normalVector, accelerationMagnitude);

      return [newPosition, newForce, newAcceleration];
    }
  };

  return [position, force, acceleration];
};
