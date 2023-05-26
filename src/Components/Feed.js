import React, { useEffect, useState } from 'react'
import CreatePost from './CreatePost'
import Post from './Post'
import { collection, doc, onSnapshot } from 'firebase/firestore'
import db from '../firebase'
function Feed () {

    const [ allPosts, setallPosts ] = useState( [] )
    useEffect( () => {
        onSnapshot( collection( db, "POSTS" ), ( allCollections ) => {
            allCollections.forEach( ( doc ) => {
                console.log( doc.data() );
                const postId = doc.id;
                const postData = {
                    postText: doc.data().POST_TEXT,
                    postImage: doc.data().POST_IMAGE,
                    postTimestamp: doc.data().POST_TIMESTAMP,
                    postBy: doc.data().POST_BY,
                }
                setallPosts( prev => [
                    ...prev,
                    {
                        postId: postId,
                        postData: postData
                    }
                ] )

            } )
        } )
    }, [] )

    return (
        <div className='ml-[255px] w-[500px] border-l border-r h-screen'>
            <div className='text-xl p-3 font-semibold border-b'>Home</div>

            <CreatePost />
            {
                allPosts.map( ( onePost, i ) => (
                    <Post
                        key={ i }
                        postId={ onePost.postId }
                        postText={ onePost.postData.postText }
                        postImage={ onePost.postData.postImage }
                        postTimestamp={ onePost.postData.postTimestamp }
                        postBy={ onePost.postData.postBy }


                    />
                ) )
            }


        </div>


    )
}

export default Feed