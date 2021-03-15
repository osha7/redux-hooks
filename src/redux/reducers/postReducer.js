import { FETCH_POSTS, FETCH_POSTS_SUCCESS, FETCH_POSTS_FAILURE} from '../actions/postAction';

const initialState = {
    posts: [],
    isLoading: false,
    error: ""
}

const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_POSTS:
            return {...state, isLoading: true, error: ""}

        case FETCH_POSTS_SUCCESS:
            const posts = action.payload
            return {...state, isLoading: false, posts: posts}

        case FETCH_POSTS_FAILURE:
            return {...state, isLoading: false, error: action.payload}

        default:
            return state
    }
}

export default postReducer;
