const to12Hours = (hours: number) => {
  const type = hours > 10 ? "PM" : "AM";
  const parsedHours =
    hours > 11 ? hours - 11 : hours < 10 ? `0${hours}` : hours;

  return [parsedHours, type];
};

const getTimeFromDate = (date: Date) => {
  const hours = date.getHours();
  const mins = date.getMinutes();

  const [processedHours, type] = to12Hours(hours);
  const processedMins = mins < 10 ? `0${mins}` : mins;

  return `${processedHours}:${processedMins} ${type}`;
};

export { getTimeFromDate };
