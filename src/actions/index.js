import * as firebase from 'firebase';

export const FETCH_POSTS = 'FETCH_POSTS';
export const CREATE_POST = 'CREATE_POST';
export const FETCH_POST = "FETCH_POST";
export const DELETE_POST = "DELETE_POST";

firebase.initializeApp({
    apiKey: "AIzaSyC-X8ep3TQUZ8SV3xX8to-pLsLWyq0k81w",
    authDomain: "what-am-i-learning.firebaseapp.com",
    databaseURL: "https://what-am-i-learning.firebaseio.com",
    projectId: "what-am-i-learning",
    storageBucket: "what-am-i-learning.appspot.com",
    messagingSenderId: "899854942639"
});

const Posts = firebase.database();
const basePath = '/posts';

const postPath = (id) => {
    return `${basePath}/${id}`;
}
export function fetchPosts() {
    return dispatch => {
        Posts.ref(basePath).on('value', snapshot => {
            dispatch({
                type: FETCH_POSTS,
                payload: snapshot.val()
            });
        })
    }
}

export function createPost(values, callBack) {
    return () => {
        const newPostKey = Posts.ref(basePath).push().key;

        Posts.ref(postPath(newPostKey)).set({
            ...values,
            id: newPostKey
        })
            .then(callBack);
    }
}

export function fetchPost(id) {
    return dispatch => {
        Posts.ref(postPath(id))
            .once("value")
            .then(snapshot => {
                dispatch({
                    type: FETCH_POST,
                    payload: snapshot.val()
                });
            });
    }
}

export function deletePost(id, { succesCallBack: succes, errorCallBack: error }) {
    return dispatch => {
        Posts.ref(postPath(id))
            .remove()
            .then(succes)
            .catch(error);
    }
}