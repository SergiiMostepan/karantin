const pad = (value) => {
  return String(value).padStart(2, "0");
};

export const currentDate = (userDate) => {
  let date = new Date(userDate);
  let y = pad(date.getFullYear());
  let mon = pad(date.getMonth() + 1);
  let d = pad(date.getDate());
  let h = pad(date.getHours());
  let m = pad(date.getMinutes());
  let s = pad(date.getSeconds());
  return `${y}-${mon}-${d} ${h}:${m}:${s}`;
};
