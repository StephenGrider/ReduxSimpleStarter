export const FETCH_POSTS = 'FETCH_POSTS';
export const CREATE_POST = 'CREATE_POST';
export const FETCH_POST = "FETCH_POST";
export const DELETE_POST = "DELETE_POST";

export function fetchPosts() {
    return {
        type: FETCH_POSTS,
        payload: request
    };
}

export function createPost(values, callBack) {
    return {
        type: CREATE_POST,
        payload: request
    }
}

export function fetchPost(id) {
    return {
        type: FETCH_POST,
        payload: request
    }
}

export function deletePost(id) {
    return {
        type: DELETE_POST,
        payload: id
    }
}