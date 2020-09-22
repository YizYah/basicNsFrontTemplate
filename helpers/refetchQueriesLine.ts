const Handlebars = require('handlebars')
import { Schema } from '../types';
import { associationTypes} from '../constants'

export function refetchQueriesLine (
  stackInfo: Schema,
  unit: string,
  type: string,
) {
  // console.log(`in refectchQueriesLine helper...unit: ${unit}, type: ${type} `)
  const sourcesInfo = stackInfo.sources
  const unitInfo = sourcesInfo[unit]
  const typesInfo = stackInfo.types
  const children = unitInfo.selectedTree[type]
  // console.log('after consts')


  // updateOnAddLine is 'refetchQueries' unless the current typeName is a property.
  let refetchQueriesLine = 'refetchQueries,'

  children.map(
    child => {
      const childInfo = typesInfo[child]
      const assnInfo = childInfo.sources[unit]
      if (assnInfo.assnType === associationTypes.SINGLE_REQUIRED) {
        refetchQueriesLine = ''
      }
    },
  )

  return new Handlebars.SafeString(refetchQueriesLine)
}
