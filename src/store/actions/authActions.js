
export const signIn = (credentials) => {
    // console.log(credentials)
    return (dispatch,getState,{getFirebase})=>{
        const firebase=getFirebase();

        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then(()=>{
            console.log("aqui")
            dispatch({type: 'LOGIN_SUCCESS'});
        }).catch((error)=>{
            console.log("error",error)
            dispatch({type: 'LOGIN_ERROR',error});
        })
    }
}

export const signOut = () => {
    return (dispatch, getState,{getFirebase})=>{
        const firebase=getFirebase();
        firebase.auth().signOut().then(()=>{
            dispatch({ type: 'SIGNOUT_SUCCESS'});
        });
    }
}