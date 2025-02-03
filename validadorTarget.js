function validateTarget(lat, lon) {
  let permitir = false;

  if (typeof lat === "string" || typeof lon === "string") {
    return permitir;
  } else if (lat >= 17 && lat <= 53 && lon >= 73 && lon <= 135) {
    permitir = true;
  }

  return permitir;
}

module.exports = { validateTarget };
