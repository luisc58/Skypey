import { combineReducers } from 'redux';
import user from './user';
import contacts from './contacts';
import activeUserId from './activeUserId';

// this file will export the combination of all reducers

export default combineReducers({
	user,
	contacts,
	activeUserId
});
