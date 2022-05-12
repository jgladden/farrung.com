import { translationEn } from './translationEn'
import { translationZh } from './translationZh'

enum Languages {
    EN = 'en',
    ZH = 'zh',
  }
  
  export const translationInit = {
    resources: {
      en: translationEn,
      zh: translationZh,
    },
    fallbackLng: Languages.EN
  }