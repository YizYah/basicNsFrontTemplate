const Handlebars = require('handlebars')
import { Schema, AppInfo } from '../types';

export function highestComponentsImports (appInfo: AppInfo) {
  const {inputs} = appInfo

  if (!inputs || !inputs['highestUnits']) {
    throw new Error(`no inputs/highestUnits found in app.yml.  This template requires one.`)
  }
  const componentList = inputs['highestUnits']

  let highestComponentSection = ''
  componentList.map(componentName => {
    const unitInfo = appInfo.units[componentName]
    const {slug, highestComponent} = unitInfo
    if (!slug) {
      throw new Error(`no slug in the app.yml file for unit ${componentName}`)
    }
    if (!highestComponent) {
      throw new Error(`no highestComponent in the app.yml file for unit ${componentName}`)
    }

    highestComponentSection +=  `
import ${highestComponent} from './components/${slug}/${highestComponent}';`
  })

  return new Handlebars.SafeString(highestComponentSection)
}
