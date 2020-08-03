export const createProject = (project) =>{
    console.log(project)

    return (dispatch,getState,{getFirebase,getFirestore})=>{
        const firestore=getFirestore();
        firestore.collection('projects').add({
            ...project,
            author:"joshe",
            createdAt:new Date()
        }).then((project)=>{
            dispatch({type:'CREATE_PROJECT',project});
        }).catch((error)=>{
            dispatch({type:'CREATE_PROJECT_ERROR',error});
        })
    }
};