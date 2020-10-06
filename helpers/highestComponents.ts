const Handlebars = require('handlebars')
import { Schema, AppInfo } from '../types';

export function highestComponents (appInfo: AppInfo) {
  const {userClass} = appInfo
  const {inputs} = appInfo

  if (!inputs || !inputs['highestComponents']) return
  const componentList = inputs['highestComponents']

  let highestComponentSection = ''
  componentList.map(componentName => {
    const unitInfo = appInfo.units[componentName]
    const {slug} = unitInfo
    highestComponentSection += `
          < ${slug} ${userClass}Id={ currentUser.id } />`
  })

  return new Handlebars.SafeString(highestComponentSection)
}
