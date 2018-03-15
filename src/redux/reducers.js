
import { GET_DOMAINS, SWITCH_LANGUAGE, TEST }  from './actions' // Actions types
import { getDomains, switchLanguage, test }  from './actions' // Actions (function)
import { domaines } from '../data/data'

const initialState = {
  langue: 'fr',
  fr: {
      application: {
          title: "Site des Services",
          search: "Recherche"
      }
  },
  ar: {
      application: {
          title: "موقع الخدمات",
          search: "بحث"
      }
  },
  domaines: domaines
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SWITCH_LANGUAGE':
        
        return [
          ...state,
          {
            language: action.language
          }
        ]
      case 'TEST':
        return state.map(todo =>
          (todo.id === action.id)
            ? {...todo, completed: !todo.completed}
            : todo
        )
      default:
        return state
    }
  }
export default reducer;