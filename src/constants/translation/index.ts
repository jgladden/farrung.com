import { translationEn } from './translationEn'
import { translationZh } from './translationZh'

enum Languages {
    EN = 'en',
    ZH = 'zh',
  }
  
  export type TranslationInit = {
    resources: {
      [key in Languages]: {
        translation: typeof translationEn
      }
    }
    lng: Languages
  }
  
  export const translationInit = {
    resources: {
      en: translationEn,
      zh: translationZh,
    },
    fallbackLng: Languages.EN
  }