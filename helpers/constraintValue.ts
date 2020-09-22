const Handlebars = require('handlebars')
import { Schema } from '../types';

export function constraintValue (stackInfo: Schema, unit: string, type: string) {
  const sourcesInfo = stackInfo.sources
  const unitInfo = sourcesInfo[unit]
  const constraintsInfo = unitInfo.constraints
  const typesInfo = stackInfo.types
  const typeUnitInfo = typesInfo[type].sources[unit]
  const {parentType} = typeUnitInfo
  // constraintValue is is set to 'ignoredParameter' except in specific cases.
  let constraintValue = 'ignoredParameter'
  Object.keys(constraintsInfo).map(key => {
    if (constraintsInfo[key].constraintType === 'ID') {
      if (constraintsInfo[key].typeName === parentType || unitInfo.selectionRoot) {
        constraintValue = constraintsInfo[key].constraintValue
      }
    }
  })
  return new Handlebars.SafeString(constraintValue)
}
