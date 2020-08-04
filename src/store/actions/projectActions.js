export const createProject = (project) =>{
    console.log(project);
    return (dispatch,getState,{getFirebase,getFirestore})=>{
        const firestore=getFirestore();
        const profile=getState().firebase.profile;
        const authId=getState().firebase.auth.uid;
        
        firestore.collection('projects').add({
            ...project,
            author: profile.firstName+" "+profile.lastName,
            authorId: authId,
            createdAt:new Date()
        }).then((project)=>{
            dispatch({type:'CREATE_PROJECT',project});
        }).catch((error)=>{
            dispatch({type:'CREATE_PROJECT_ERROR',error});
        })
    }
};