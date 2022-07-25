import {newTextCheck} from "./new-text-check";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST = 'UPDATE-NEW-POST';

export let initialState = {
    posts: [{id: 2, post: 'Дуров, верни стену!'}, {id: 1, post: 'Я зарегался!'}],
    newPostText: 'Текст нового поста',
};

const postsReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            const lastId = state.posts.map(item => item.id).shift();

            let newPost = {
                id: lastId + 1,
                post: state.newPostText,
            }

            return {
                ...state,
                posts: [newPost, ...state.posts],
                newPostText: '',
            }
        case UPDATE_NEW_POST:
            return newTextCheck({...state}, 'newPostText', action.newText );
        default: return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostActionCreator = (text) => ({type: UPDATE_NEW_POST, newText: text });

export default postsReducer;