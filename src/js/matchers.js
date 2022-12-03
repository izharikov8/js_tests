export default function healthSort(chars) {
  chars.sort((a, b) => b.health - a.health);
  return chars;
}
