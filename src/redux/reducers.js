
import { SWITCH_LANGUAGE, TEST }  from './actions' // Actions types
import { switchLanguage, test }  from './actions' // Actions (function)

const availableLanguage = ['fr', 'ar']
const reducer = (state = [], action) => {
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