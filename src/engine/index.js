import { clamp } from "../utils/mathUtils";
import { maxForce, shouldBounce } from "../utils/physicsUtils";
import { toScreenCoordinates, toWorldPosition } from "../utils/screenUtils";
import config from "./config";

export const gravityForce = (force, deltaTime) => {
  const acceleration = { x: 0, y: -9.81 };
  const newForce = { x: force.x + (acceleration.x * deltaTime), y: force.y + (acceleration.y * deltaTime) };

  return maxForce(newForce, 50.0);
};

export const applyAcceleration = (force, acceleration, deltaTime) => {
  return { x: force.x + acceleration.x * deltaTime, y: force.y + acceleration.y * deltaTime };
};

export const applyForce = (pos, force) => {
  return { x: pos.x + force.x, y: pos.y + force.y };
};

export const slowAcceleration = (acceleration, deltaTime) => {
  const friction = 1 * deltaTime;
  const x = acceleration.x >= 0 ? Math.max(acceleration.x - friction, 0.0) : Math.min(acceleration.x + friction, 0.0);
  const y = acceleration.y >= 0 ? Math.max(acceleration.y - friction, 0.0) : Math.min(acceleration.y + friction, 0.0);
  return { x, y };
}

export const checkBounds = (pos, force, acceleration, size, dimension) => {
  const halfSize = (size || 0) / 2.0;
  const screenPosition = toScreenCoordinates(pos, dimension);
  const x = clamp(screenPosition.x, 0 + halfSize, dimension.width - halfSize);
  const y = clamp(screenPosition.y, 0 + halfSize, dimension.height - halfSize);
  const worldPosition = toWorldPosition({ x, y }, dimension);

  const [outOfX, outOfY] = shouldBounce(screenPosition, force, { x: halfSize, y: halfSize },
    { x: dimension.width - halfSize, y: dimension.height - halfSize });

  const newAcceleration = {
    x: outOfX ? -acceleration.x : acceleration.x,
    y: outOfY ? -acceleration.y : acceleration.y,
  }

  const finalForce = {
    x: outOfX ? -force.x : force.x,
    y: outOfY ? -force.y : force.y,
  };

  return [worldPosition, finalForce, newAcceleration];
};
