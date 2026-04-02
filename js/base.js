(function (w) {
  "use strict";
  var base = "";
  if (/\.github\.io$/i.test(w.location.hostname || "")) {
    var segs = w.location.pathname.split("/").filter(Boolean);
    if (segs.length) {
      var first = segs[0];
      if (first !== "en" && first !== "ru" && first !== "admin") {
        base = "/" + first;
      }
    }
  }
  w.__OROM_BASE__ = base;
  w.__OROM_API__ = function (path) {
    if (!path) return base;
    if (path.charAt(0) !== "/") path = "/" + path;
    return base + path;
  };
})(typeof window !== "undefined" ? window : this);
