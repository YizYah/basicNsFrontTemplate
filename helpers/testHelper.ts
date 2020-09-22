const Handlebars = require('handlebars')

export function testHelper (unit: string) {
  return new Handlebars.SafeString(unit)
}
