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

export const LOAD_CATEGORY = 'boilerplate/Home/LOAD_CATEGORY';
export const LOAD_CATEGORY_SUCCESS = 'boilerplate/Home/LOAD_CATEGORY_SUCCESS';
export const LOAD_CATEGORY_FAILURE = 'boilerplate/Home/LOAD_CATEGORY_FAILURE';

export const IS_VIEW_ALL_ITEMS = 'boilerplate/Home/IS_VIEW_ALL_ITEMS';

export const LOAD_CATEGORY_DETAILS = 'boilerplate/Home/LOAD_CATEGORY_DETAILS';
export const LOAD_CATEGORY_DETAILS_SUCCESS = 'boilerplate/Home/LOAD_CATEGORY_DETAILS_SUCCESS';
export const LOAD_CATEGORY_DETAILS_FAILURE = 'boilerplate/Home/LOAD_CATEGORY_DETAILS_FAILURE';
