/*
 * HomeConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const CHANGE_USERNAME = 'boilerplate/Home/CHANGE_USERNAME';
export const ADD_COUNTER = 'boilerplate/Home/ADD_COUNTER';
export const RES_COUNTER = 'boilerplate/Home/RES_COUNTER';
export const DEL_ARTCLES = 'boilerplate/Home/DEL_ARTCLES';
export const CHANGE_DATE_RANGE = 'boilerplate/Home/CHANGE_DATE_RANGE';
export const CHANGE_SELECTION = 'boilerplate/Home/CHANGE_SELECTION';
export const ADD_COMMENT = 'boilerplate/Home/ADD_COMMENT'; 
export const ADD_COMMENT_RANDOM_ID = 'boilerplate/Home/ADD_COMMENT_RANDOM_ID'; 
export const TAKE_ALL_ARTICLES = 'boilerplate/Home/TAKE_ALL_ARTICLES';
export const TAKE_ALL_COMMENTS = 'boilerplate/Home/TAKE_ALL_COMMENTS';