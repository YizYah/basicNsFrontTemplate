const Handlebars = require('handlebars')
import { Schema, AppInfo } from '../types';

export function highestComponents (appInfo: AppInfo) {
  const {userClass} = appInfo
  const {inputs} = appInfo

  if (!inputs || !inputs['highestUnits']) return
  const componentList = inputs['highestUnits']

  let highestComponentSection = ''
  componentList.map(componentName => {
    const unitInfo = appInfo.units[componentName]
    const {highestComponent} = unitInfo
    highestComponentSection += `
          < ${highestComponent} ${userClass}Id={ currentUser.id } />`
  })

  return new Handlebars.SafeString(highestComponentSection)
}
