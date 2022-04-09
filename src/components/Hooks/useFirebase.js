import { useEffect, useState } from "react";
import app from "../../firebase.init";
import { getAuth, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const useFirebase = () => {
    const [user , setUser] = useState({});

    const signWithGoogle = () => {
   
        signInWithPopup(auth,provider)
        .then(result => {
            const user = result.user;
            console.log(result)
            setUser(user)
        });
   
    
    };
    const hendleLogOut =()=>{
        signOut(auth)
        .then(()=>{})
    }
    useEffect ( ()=> {
        onAuthStateChanged(auth , user =>{
            setUser(user)

        })
    },[])
    return {
        user,
        signWithGoogle,
        hendleLogOut
    };
};

export default useFirebase;