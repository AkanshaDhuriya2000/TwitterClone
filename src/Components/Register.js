import React, { useState } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import dB, { auth } from '../firebase';
import { addDoc, collection, deleteDoc, doc, serverTimestamp, setDoc, updateDoc } from 'firebase/firestore';

function Register () {

    const [ userData, setuserData ] = useState( {
        userEmail: '', userPassword: '', userName: '', handleId: '',
    } )
    const handleCollectData = ( e ) => {
        e.preventDefault();
        setuserData( prev => {
            return {
                ...prev,
                [ e.target.name ]: e.target.value
            }
        } )
    }

    const handleRegisterUser = ( e ) => {
        e.preventDefault();

        createUserWithEmailAndPassword( auth, userData.userEmail, userData.userPassword )
            .then( ( userCredential ) => {
                // Signed in 
                const user = userCredential.user;
                console.log( user );
                console.log( user.uid );

                setDoc( doc( dB, "USERS", user.uid ), {
                    USER_EMAIL: userData.userEmail,
                    USER_NAME: userData.userName,
                    USER_HANDLE_ID: userData.handleId,
                    USER_PWD: userData.userPassword,
                    TIMESTAMP: serverTimestamp()
                } ).then( () => {
                    setuserData( { userEmail: '', userPassword: '', userName: '', handleId: '', } )
                } ).catch( err => console.log( err ) )

                // const coll = collection(dB, "USERS")
                // addDoc(coll, {
                //     USER_EMAIL: userData.userEmail,
                //     USER_NAME: userData.userName,
                //     USER_HANDLE_ID: userData.handleId,
                //     USER_PWD: userData.userPassword,
                //     TIMESTAMP: serverTimestamp()
                // })
            } )
            .catch( ( error ) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log( error );
                // ..
            } );

    }

    return (
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                {/* <img className="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" /> */ }
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Create a new account</h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" action="#" method="POST">
                    <div>
                        <label htmlFor="userName" className="block text-sm font-medium leading-6 text-gray-900">User Name</label>
                        <div className="mt-2">
                            <input
                                value={ userData.userName }
                                onChange={ handleCollectData }
                                id="userName" name="userName" type="text" autoComplete="text" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="handleId" className="block text-sm font-medium leading-6 text-gray-900">Handle Id</label>
                        <div className="mt-2">
                            <input
                                value={ userData.handleId }
                                onChange={ handleCollectData }
                                id="handleId" name="handleId" type="text" autoComplete="text" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>


                    <div>
                        <label htmlFor="userEmail" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                        <div className="mt-2">
                            <input
                                value={ userData.userEmail }
                                onChange={ handleCollectData }
                                id="userEmail" name="userEmail" type="email" autoComplete="email" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="userPassword" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
                        </div>
                        <div className="mt-2">
                            <input
                                value={ userData.userPassword }
                                onChange={ handleCollectData }
                                id="userPassword" name="userPassword" type="password" autoComplete="current-password" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>

                    <div>
                        <button onClick={ handleRegisterUser } type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Create Account</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register
