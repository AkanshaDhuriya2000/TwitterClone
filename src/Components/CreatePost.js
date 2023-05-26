
import React, { useEffect, useState } from 'react'
import { GoFileMedia } from 'react-icons/go'
import { AiOutlineFileGif, AiOutlineSchedule } from 'react-icons/ai'
import { BiPoll } from 'react-icons/bi'
import { BsEmojiSmile } from 'react-icons/bs'
import { addDoc, collection, doc, serverTimestamp, setDoc } from 'firebase/firestore'
import db, { auth, storage } from '../firebase'
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'


function CreatePost () {
    const currentUserId = auth.currentUser.uid



    const [ postText, setpostText ] = useState( '' )
    const [ picture, setpicture ] = useState( null )
    const handleGetFile = ( e ) => {
        e.preventDefault();
        setpicture( null )
        if ( e.target.files[ 0 ] )
        {
            setpicture( e.target.files[ 0 ] )
        }
    }



    const [ progressStat, setprogressStat ] = useState( 0 )

    const [ randomKey, setrandomKey ] = useState( '' )
    useEffect( () => {
        var a = Array.from( Array( 20 ), () => Math.floor( Math.random() * 36 ).toString( 36 ) ).join( '' );
        setrandomKey( a )

    }, [] )


    const handleCreatePost = ( e ) => {
        e.preventDefault();


        if ( picture )
        {
            const storageRef = ref( storage, `${ randomKey }.jpg` );
            const uploadTask = uploadBytesResumable( storageRef, picture );
            uploadTask.on( 'state_changed',

                ( snapshot ) => {
                    const progress = Math.round( ( snapshot.bytesTransferred / snapshot.totalBytes ) * 100 );
                    console.log( 'Upload is ' + progress + '% done' );
                    setprogressStat( progress )

                },
                ( error ) => {
                    console.log( error );
                },
                () => {
                    getDownloadURL( uploadTask.snapshot.ref )
                        .then( ( downloadURL ) => {
                            console.log( 'File available at', downloadURL );
                            addDoc( collection( db, "POSTS" ), {
                                POST_TEXT: postText,
                                POST_IMAGE: downloadURL,
                                POST_TIMESTAMP: serverTimestamp(),
                                POST_BY: currentUserId,
                            } ).then( () => {
                                setpicture( null )
                                setprogressStat( 0 )
                                setpostText( '' )
                            } )
                        } ).catch( ( error ) => {
                            console.log( error );
                        } );
                }
            );
        } else
        {
            addDoc( collection( db, "POSTS" ), {
                POST_TEXT: postText,
                POST_IMAGE: '',
                POST_TIMESTAMP: serverTimestamp(),
                POST_BY: currentUserId,

            } ).then( () => {
                setpicture( null )
                setprogressStat( 0 )
                setpostText( '' )
            } )
        }
    }
    return (
        <div className='border-b'>
            <div className='flex flex-row items-center p-3'>
                <div className='w-12 h-12  rounded-full bg-slate-400'></div>
                {/* <div className='ml-3 font-normal text-xl text-gray-500'>
                    What is happening?!
                </div> */}

                <input value={ postText } onChange={ ( e ) => setpostText( e.target.value ) } type='text' placeholder='Whats Happening?' />
            </div>
            <div className='flex flex-row justify-around'>
                <div className='flex flex-col text-xl text-blue-400 mb-3 '>
                    {/* <div className='ml-3  p-2 h-9 w-9  cursor-pointer rounded-full  hover:bg-slate-200'><GoFileMedia /></div>
                    <div className='ml-3  p-2 h-9 w-9  cursor-pointer rounded-full  hover:bg-slate-200'>  <AiOutlineFileGif /></div>
                    <div className='ml-3  p-2 h-9 w-9 cursor-pointer rounded-full  hover:bg-slate-200'><BiPoll /></div>
                    <div className='ml-3  p-2 h-9 w-9 cursor-pointer rounded-full  hover:bg-slate-200'> <BsEmojiSmile /></div>
                    <div className='ml-3  p-2 h-9 w-9 cursor-pointer rounded-full  hover:bg-slate-200'><AiOutlineSchedule /></div> */}
                    <input type='file' onChange={ handleGetFile } />
                    <progress value={ progressStat } max={ "100" } />{ progressStat }%
                </div>

                <button
                    onClick={ handleCreatePost }
                    className='w-[100px] py-1 mb-2 ml-10 rounded-full
                        hover: bg-blue-500  text-white text-lg  hover:bg-blue-600 transition duration-150' >
                    Tweet
                </button>
            </div>

        </div>


    )
}

export default CreatePost




