import { domaines } from '../data/data'

/*
Action types
*/

const GET_DOMAINS = 'GET_DOMAINS'
const SWITCH_LANGUAGE = 'SWITCH_LANGUAGE'
const TEST = 'TEST'

/*
Action creators 
*/

const getDomains = () => ({ type: GET_DOMAINS, payload: domaines })
const switchLanguage = language => ({ type: SWITCH_LANGUAGE, action: language })
const test = element => ({ type: TEST, action: element })


export { 
    GET_DOMAINS, SWITCH_LANGUAGE, TEST,
    getDomains, switchLanguage, test 
} 