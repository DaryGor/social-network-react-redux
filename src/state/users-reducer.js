const FOLLOW_USER = 'FOLLOW-USER';
const UNFOLLOW_USER = 'UNFOLLOW-USER';
const SHOW_MORE = 'SHOW-MORE';
const SET_USERS = 'SET-USERS';
const SET_TOTAL_USERS_PAGE = 'SET-TOTAL-USERS-PAGE';
const SENT_CURRENT_PAGE = 'SENT-CURRENT-PAGE';

export let initialState = {
    users: [],
    pageSize: 100,
    totalCount: 0,
    currentPage: 1,
};

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW_USER:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: true}
                    }
                    return user
                })
            }

        case UNFOLLOW_USER:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: false}
                    }
                    return user
                })
            }
        case SET_USERS: {
            return {
                ...state,
                users: [...action.users],
            }
        }
        case SET_TOTAL_USERS_PAGE: {
            return {
                ...state,
                totalCount: action.totalCount,
            }
        }
        case SENT_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.page,
            }
        }
        default: return state;
    }
}

export const followUserAC = (userId) => ({type: FOLLOW_USER, userId});
export const unfollowUserAC = (userId) => ({type: UNFOLLOW_USER, userId});
export const setUsersAC = (users) => ({type: SET_USERS, users});
export const setTotalUsersPageAC = (totalCount) => ({type: SET_TOTAL_USERS_PAGE, totalCount});
export const setCurrentPageAC = (page) => ({type: SENT_CURRENT_PAGE, page});
export const showMoreUserAC = () => ({type: SHOW_MORE });

export default usersReducer;