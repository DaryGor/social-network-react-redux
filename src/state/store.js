import postsReducer from "./posts-reducer";
import messagesReducer from "./messages-reducer";
// import newTextReducer from "./new-text-reducer";

let store = {
    _state: {
        postsPage: {
            posts: [{id: 1, post: 'Я зарегался!'}, {id: 2, post: 'Дуров, верни стену!'}],
            newPostText: 'Текст нового поста',
        },
        messagesPage: {
            contacts: [{id: 1, name: 'Даша'}, {id: 2, name: 'Светлана'}, {id: 3, name: 'Петрович'}],
            messages: [{id: 1, name: 'Даша', message:"Привет! Я Даша!"}, {id: 2, name: 'Светлана', message:"Я Света, давно тут?"}],
            newMessageText: 'Текст нового сообщения',
        },
    },
    _callSubscriber() {
        console.log('Change')
    },
    subscribe(observer){
        this._callSubscriber = observer;
    },
    getState() {
        return this._state;
    },
    dispatch(action) {
        // this._state = newTextReducer(this._state, action);
        this._state.postsPage = postsReducer(this._state.postsPage, action);
        this._state.messagesPage = messagesReducer(this._state.messagesPage, action)
        this._callSubscriber(this._state);
    },
}

export default store;

window.store = store;