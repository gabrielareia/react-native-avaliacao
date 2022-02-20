export const toScreenCoordinates = (pos, dimension) => {
  const x = pos.x + (dimension.width / 2);
  const y = (dimension.height / 2) - pos.y;

  return { x, y };
};

export const toWorldPosition = (pos, dimension) => {
  const x = pos.x - (dimension.width / 2);
  const y = (dimension.height / 2) - pos.y;

  return { x, y };
};
