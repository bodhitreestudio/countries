
const localesMap = (function () {
  const locales = require('./resources/locales.json');
  let map = {};
  /** Copied from: validor/lib/isMobilePhone */
  locales.forEach((l) => {
    let iso2 = l.substr(3);
    map[iso2] = l;
  });

  return map;

})();

const iso2List = (function () {
  const countries = require('./resources/countries.json');
  let ret = [];
  countries.forEach(function (co) {
    ret.push(co.iso2.toUpperCase());
  });

  return ret;
})();

module.exports = {
  getLocale(iso2) {
    return localesMap[iso2.toUpperCase()] || 'en-US';
  },
  getAllIso2 () {
    return iso2List;
  }
};

