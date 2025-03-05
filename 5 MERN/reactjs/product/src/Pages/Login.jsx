import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { getAuth, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { app } from '../FirebaseConfig';
import { toast } from 'react-toastify';
import { Context } from '../Context/MainContext';
import { GoogleAuthProvider } from "firebase/auth";

export default function Login() {

    const { user, setUser } = useContext(Context);
    const navigate = useNavigate();

    const loginUser = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;

        const auth = getAuth(app);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                toast.success("User Login Successfully");
                setUser(user.accessToken);
                navigate('/')
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(error);
                toast.error("Something went wrong");
            });


    }

    const loginWithGoogle = () => {
        const provider = new GoogleAuthProvider();

        const auth = getAuth(app);
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                // IdP data available using getAdditionalUserInfo(result)
                setUser(user.accessToken);
                navigate('/')
                // ...
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            });
    }



    return (
        <div className="bg-gray-100 flex items-center justify-center py-16">
            <div className="bg-white p-8 rounded-lg shadow-lg w-96">
                <h2 className="text-3xl font-semibold text-center text-gray-700 mb-6">
                    Login
                </h2>
                <form onSubmit={loginUser}>
                    <div className="mb-4">
                        <label
                            className="block text-gray-600 font-semibold mb-2"
                            htmlFor="email"
                        >
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            placeholder="Enter your email"
                            required=""
                        />
                    </div>
                    <div className="mb-6">
                        <label
                            className="block text-gray-600 font-semibold mb-2"
                            htmlFor="password"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            placeholder="Enter your password"
                            required=""
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200"
                    >
                        Login
                    </button>
                    <button
                        onClick={loginWithGoogle}
                        type="button"
                        className="w-full mt-3 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200"
                    >
                        Login with Google
                    </button>
                </form>
                <div className="text-center mt-4">
                    <p className="text-gray-600">
                        Don't have an account?{" "}
                        <Link to={"/register"} className="text-indigo-600 hover:underline">
                            Register here
                        </Link>
                    </p>
                </div>
            </div>
        </div>

    )
}
