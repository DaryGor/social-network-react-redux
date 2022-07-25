import {newTextCheck} from "./new-text-check";

const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';

export let initialState = {
    contacts: [{id: 1, name: 'Даша'}, {id: 2, name: 'Светлана'}, {id: 3, name: 'Петрович'}],
    messages: [{id: 1, name: 'Даша', message:"Привет! Я Даша!"}, {id: 2, name: 'Светлана', message:"Я Света, давно тут?"}],
    newMessageText: 'Текст нового сообщения',
};

const messagesReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGE:
            const lastId = state.messages.map(item => item.id).pop();

            let newMessage = {
                id: lastId + 1,
                name: 'Даша',
                message: state.newMessageText,
            }

            return {
                ...state,
                newMessageText: '',
                messages: [...state.messages, newMessage],
            }
        case UPDATE_NEW_MESSAGE:
            return newTextCheck({...state}, 'newMessageText', action.newText );
        default: return state;
    }
}

export const addMessageActionCreator = () => ({type: ADD_MESSAGE});
export const updateNewMessageActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE, newText: text });

export default messagesReducer;
