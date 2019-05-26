module.exports = function() {
  const faker = require('faker/locale/pt_BR');
  // faker.locale = "pt_BR";
  var _ = require('lodash');
  return {
    people: _.times(100, function(n) {
      return faker.helpers.createCard();
    })
  };
};
