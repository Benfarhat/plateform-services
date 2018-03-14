/*
Action types
*/

const SWITCH_LANGUAGE = 'SWITCH_LANGUAGE'
const TEST = 'TEST'

/*
Action creators 
*/

const switchLanguage = language => ({ type: SWITCH_LANGUAGE, action: language })
const test = element => ({ type: TEST, action: element })


export { 
    SWITCH_LANGUAGE, TEST,
    switchLanguage, test 
} 