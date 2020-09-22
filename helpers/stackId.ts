const Handlebars = require('handlebars')
import { Schema } from '../types';

export function stackId (stackInfo: Schema) {
  // console.log(`in stackId, stackInfo.backend=${JSON.stringify(stackInfo.backend)}`)
  if (!stackInfo.backend || !stackInfo.backend.ids || !stackInfo.backend.ids.stack ) {
    throw new Error('the backend for the \'App.yml\' file is not properly configured.')
  }
  const stackId = stackInfo.backend.ids.stack
  return new Handlebars.SafeString(stackId)
}
