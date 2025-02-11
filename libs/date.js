const MONTHS = {
  0: "January",
  1: "February",
  2: "March",
  3: "April",
  4: "May",
  5: "June",
  6: "July",
  7: "August",
  8: "September",
  9: "October",
  10: "November",
  11: "December",
};

export const longDate = (str) => {
  const date = new Date(str);

  return `${date.getDate()} ${MONTHS[date.getMonth()]} ${date.getFullYear()}`;
};

export const splitDate = (str) => {
  const parts = str.split("-");

  return {
    year: parts[0],
    month: parts[1],
    day: parts[2],
  };
};
