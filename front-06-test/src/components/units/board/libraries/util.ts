export const getDate = (date) => {
  const newDate = new Date(date);
  const yyyy = newDate.getFullYear();
  const mm = String(newDate.getMonth() + 1).padStart(2, "0");
  const dd = String(newDate.getDate()).padStart(2, "0");
  const hh = String(newDate.getHours()).padStart(2, "0");
  const mn = String(newDate.getMinutes()).padStart(2, "0");
  return `${yyyy}.${mm}.${dd} ${hh}:${mn}`;
};
