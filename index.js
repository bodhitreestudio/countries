import locales from './resources/locales.json';

const localesMap = (function () {
  let map = {};
  /** Copied from npm pkg: validor/lib/isMobilePhone */
  locales.forEach((l) => {
    let iso2 = l.substr(3);
    map[iso2] = l;
  });

  return map;

})();

module.exports = {
  getLocale(iso2) {
    return localesMap[iso2.toUpperCase()] || 'en-US';
  }
};

