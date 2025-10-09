// Milliseconds per a day is a global variable for no reason because it is not used anywhere.
// It is not a real constant and could be changed anytime so it is best to define it inside the function. 

const millisPerDay = 24 * 60 * 60 * 1000;

// Getting the current time makes testing impossible because we cannot control it without changing system settings

export function daysUntilChristmas() {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const christmasDay = new Date(now.getFullYear(), 12 - 1, 25);
  if (today.getTime() > christmasDay.getTime()) {
    christmasDay.setFullYear(new Date().getFullYear() + 1);
  }
  const diffMillis = christmasDay.getTime() - today.getTime();
  return Math.floor(diffMillis / millisPerDay);
}
