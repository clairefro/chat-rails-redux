const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export default (fetchedTimestamp) => {
  const date = new Date(Date.parse(fetchedTimestamp));
  // return formatted timestamp: 11 Feb 11:40
  const day = date.getDate();
  const month = monthNames[date.getMonth()];
  const hours = date.getHours();
  let mins = date.getMinutes().toString();
  // add leading zero to single digit mins
  if (mins.length < 2) {
    mins = `0${mins}`;
  }
  return `${month} ${day} at ${hours}:${mins}`;
};
