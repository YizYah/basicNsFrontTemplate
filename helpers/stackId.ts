const Handlebars = require('handlebars')
import { Schema } from '../types';

export function stackId (stackInfo: Schema) {
  // console.log(`in stackId, stackInfo.backend=${JSON.stringify(stackInfo.backend)}`)
  if (!stackInfo.backend || !stackInfo.backend.ids || !stackInfo.backend.ids.stack ) {
    throw new Error('the backend for the `app.yml` file is not properly configured.' +
    ' To use this template, you need to have in your app.yml a `backend` section' +
    ' with an \'ids\' key, and within ids you need a `stack` section.')
  }
  const stackId = stackInfo.backend.ids.stack
  return new Handlebars.SafeString(stackId)
}
