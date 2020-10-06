const Handlebars = require('handlebars')
import { Schema, AppInfo } from '../types';

export function highestComponentsImports (appInfo: AppInfo) {
  const {inputs} = appInfo

  if (!inputs || !inputs['highestComponents']) return
  const componentList = inputs['highestComponents']

  let highestComponentSection = ''
  componentList.map(componentName => {
    const unitInfo = appInfo.units[componentName]
    const {slug} = unitInfo
    highestComponentSection +=  `
import ${slug} from './components/${slug}/${slug}';`
  })

  return new Handlebars.SafeString(highestComponentSection)
}
