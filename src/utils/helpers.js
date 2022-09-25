export const formatImage = (url) => {
  if (url.includes("ipfs://")) {
    return "https://ipfs.io/ipfs/" + url.substring(7);
  }
};

export const parseDate = (tdate) => {
  var systemDate = new Date(Date.parse(tdate));
  var userDate = new Date();
  var diff = Math.floor((userDate - systemDate) / 1000);
  if (diff <= 1) {
    return "now";
  }
  if (diff < 20) {
    return diff + "s";
  }
  if (diff <= 3540) {
    return Math.round(diff / 60) + "m";
  }
  if (diff <= 5400) {
    return "1h";
  }
  if (diff <= 86400) {
    return Math.round(diff / 3600) + "h";
  }
  var options = { year: "numeric", month: "short", day: "numeric" };

  return systemDate.toLocaleDateString("en-US", options);
};
