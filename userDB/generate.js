module.exports = function() {
  const faker = require('faker');
  faker.locale = "pt_BR";
  var _ = require('lodash');
  return {
    people: _.times(100, function(n) {
      return {
        id: n,
        name: faker.name.findName(),
        avatar: faker.internet.avatar(),
        email: faker.internet.email(),
        senha:faker.internet.password(),
      };
    })
  };
};
