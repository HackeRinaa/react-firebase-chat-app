import { useState } from "react";
import "./login.css";
import { toast } from "react-toastify";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../lib/firebase";
import { collection, doc, setDoc, query, where, getDocs } from "firebase/firestore";

const Login = () => {
    const [loading, setLoading] = useState(false);

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
    
        const formData = new FormData(e.target);
        const { email, password } = Object.fromEntries(formData);
    
        try {
          await signInWithEmailAndPassword(auth, email, password);
        } catch (err) {
          console.log(err);
          toast.error(err.message);
        } finally {
          setLoading(false);
        }
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        setLoading(true);
        const formData = new FormData(e.target);

        const {username, email, password} = Object.fromEntries(formData);
        
        // VALIDATE INPUTS
        if (!username || !email || !password)
            return toast.warn("Please enter all required fields!");

        //VALIDATE UNIQUE USERNAME
        // const usersRef = collection(db, "users");
        // const q = query(usersRef, where("username", "==", username));
        // const querySnapshot = await getDocs(q);
        // if (querySnapshot.docs.length > 0) {
        //     setLoading(false);
        //     return toast.error("Username already exists!");
        // }

        try {
            const response = await createUserWithEmailAndPassword(auth, email, password);
        
            // Save user details without avatar
            await setDoc(doc(db, "users", response.user.uid), {
                username,
                email,
                avatar: "", // Empty avatar or set to a default placeholder URL
                id: response.user.uid,
                blocked: [],
            });

            await setDoc(doc(db, "userchats", response.user.uid), {
                chats: [],
            });

            toast.success("Account created successfully");
        } catch (err) {
            console.log(err);
            toast.error(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="login">
            <div className="item">
                <h2>Welcome back,</h2>
                <form onSubmit={handleLogin}>
                    <input type="text" placeholder="Email" name="email" />
                    <input type="password" placeholder="Password" name="password" />
                    <button disabled={loading}>{loading ? "Loading" : "Sign In"}</button>
                </form>
            </div>
            <div className="seperator"></div>
            <div className="item">
                <h2>Create an Account</h2>
                <form onSubmit={handleRegister}>
                    <input type="text" placeholder="Username" name="username" />
                    <input type="text" placeholder="Email" name="email" />
                    <input type="password" placeholder="Password" name="password" />
                    <button disabled={loading}>{loading ? "Loading" : "Sign Up"}</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
