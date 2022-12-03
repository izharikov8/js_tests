export default function defineHealth(char) {
  const { health } = char;
  let status = 0;
  if (health < 15) {
    status = 'critical';
  }
  if (health <= 50 && health >= 15) {
    status = 'wounded';
  }
  if (health > 50) {
    status = 'healthy';
  }
  return status;
}
