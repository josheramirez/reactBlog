import {auth, db, storage} from '../../config/fbConfig'
import JWT from 'jsonwebtoken';
import {toast} from 'react-toastify'

export const saveUser=(user,data,dispatch)=>{

    console.log(user,data);
    db.collection("users")
    .doc()
    .set({
        email:data.email,
        name:"joshe",
        // profileImage:img,
        userId:user.user.uid,
        create_at:new Date().toDateString()
    });
    // const profileImage=data.photo[0];
    // const metadata={
    //     contentType:"image/jpge"
    // };
    // const responce=storage
    //     .ref('/users/${user.user.uid}/profile.jpg')
    //     .put(profileImage,metadata);
    // responce
    //     .then(uploadTask=>{
    //         return uploadTask.ref.getDownloadURL();
    //     })
    //     .then(img=>{
    //         // save user in firebase
    //         db.collection("users")
    //             .doc(user.user.uid)
    //             .set({
    //                 email:data.email,
    //                 name:data.name,
    //                 profileImage:img,
    //                 userId:user.user.uid,
    //                 create_at:new Date().toDateString()
    //             });
    //         return user.user.updateProfile({
    //             displayName:data.username,
    //             photoURL:img
    //         });
    //     })
    //     .then(()=>{
    //         return user.user.getIdToken();
    //     })
    //     .then(token=>{
    //         const secretToken=JWT.sign({user:user.user},token);
    //         localStorage.setItem('token',secretToken);
    //     })
    //     .then(()=>{
    //         dispatch({type:"STOP_LOADING"});
    //         toast.success("Signed up succesfully");
    //     })
    //     .catch(error=>{
    //         console.log(error);
    //     });
};

export const signUpUser = (data) => {
    console.log(data);
    return dispatch=>{
        const response=auth.createUserWithEmailAndPassword(
            data.email,
            data.password
        ).then(user=>{
            saveUser(user,data,dispatch);
        }).catch(error=>{
            dispatch({type:"STOP_LOADING"});
            dispatch({type:"AUTHERROR", payload:error.message});
            toast.error(error.message);
        }); 
    }
}
