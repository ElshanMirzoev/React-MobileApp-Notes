const formatLeadingZero = (num) => String(num).padStart(2, "0");

export const formatDate = (ts) => {
  if (!ts) return "";
  const d = new Date(ts);
  if (isNaN(d.getTime())) return "";

  const day = formatLeadingZero(d.getDate());
  const month = formatLeadingZero(d.getMonth() + 1);
  const year = String(d.getFullYear()).slice(-2);
  const hours = formatLeadingZero(d.getHours());
  const minutes = formatLeadingZero(d.getMinutes());

  return `${day}.${month}.${year} ${hours}:${minutes}`;
};
