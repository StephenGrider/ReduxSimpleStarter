import * as firebase from 'firebase';
import firebaseConnfig from '../../server/firebase_config';

export const FETCH_POSTS = 'FETCH_POSTS';
export const CREATE_POST = 'CREATE_POST';
export const FETCH_POST = "FETCH_POST";
export const DELETE_POST = "DELETE_POST";

/*This firebaseConnfig Object is provide by firebase
var config = {
    apiKey: "<API_KEY>",
    authDomain: "<PROJECT_ID>.firebaseapp.com",
    databaseURL: "https://<DATABASE_NAME>.firebaseio.com",
    projectId: "<PROJECT_ID>",
    storageBucket: "<BUCKET>.appspot.com",
    messagingSenderId: "<SENDER_ID>",
  };*/
  
firebase.initializeApp(firebaseConnfig);

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