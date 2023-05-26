import React, { useEffect, useState } from 'react'
import { FaRegComment } from 'react-icons/fa'
import { AiOutlineHeart } from 'react-icons/ai'
import { CgPoll } from 'react-icons/cg'
import { FaRetweet } from 'react-icons/fa'
import { FiMoreHorizontal, FiUpload } from 'react-icons/fi'
import { doc, onSnapshot } from 'firebase/firestore'
import db from '../firebase'

function Post ( props ) {
    const { postId, postImage, postText, postTimestamp, postBy } = props
    const [ userName, setuserName, ] = useState( '' )
    useEffect( () => {
        if ( postBy )
        {
            onSnapshot( doc( db, "USERS", postBy ), ( doc ) => {
                console.log( doc.data() );
                if ( doc.exists )
                {
                    setuserName( doc.data()?.USER_NAME )
                }
            } )
        }
    }, [ postBy ] )
    return (
        <div className='flex flex-row p-2 bg-slate-100 border-b'>

            {/* Avatar */ }
            <div className='w-12 h-12 rounded-full bg-slate-400 mr-2'></div>
            {/* Post Data */ }
            <div className='w-[430px]'>
                <div className='flex flex-row items-center justify-between'>
                    <div className='flex flex-row items-center'>
                        <div className='text-md text-black/75 font-bold cursor-pointer hover:underline'>{ userName }</div>
                        <div className='text-lg font-medium text-slate-500 ml-1'>@akanshadhuriya0002</div>
                        <div className='text-md text-black/75 font-semibold ml-1 cursor-pointer 
                        hover:underline'
                        >

                            { postTimestamp?.toDate().toDateString() }
                        </div>
                    </div>
                    <div>
                        <FiMoreHorizontal />
                    </div>
                </div>

                {
                    postImage && (
                        <img
                            src={ postImage }
                            alt={ postImage }
                            className='w-full rounded-lg'
                        />
                    )
                }
                {
                    postText && (
                        <div className='text-sm  mb-1'>
                            { postText }
                        </div>
                    )
                }
                {/* <div >
                    Flowers are important for many reasons. They can brighten up someone’s day, add beauty to a room or garden, and even convey sympathy in times of loss. For centuries, people have been giving flowers to those they care about, and the tradition continues today.
                </div> */}
                {/* <div>
                    <img src='https://images.pexels.com/photos/1697912/pexels-photo-1697912.jpeg?cs=srgb&dl=pexels-javon-swaby-1697912.jpg&fm=jpg&_gl=1*1oao0jy*_ga*MTk5OTg5MjEwMC4xNjc0Mjc0OTg2*_ga_8JE65Q40S6*MTY4NDQ2OTUzMy4yLjEuMTY4NDQ2OTU2Ni4wLjAuMA..'
                        alt=''

                    />

                </div> */}
                <div className='flex flex-row items-center justify-around py-2'>
                    <div className=' group cursor-pointer flex flex-row items-center '>
                        <div className='text-md mr-1 group-hover:text-blue-400 hover:bg-slate-200 p-2 rounded-full'><FaRegComment /></div>
                        <div className='text-md group-hover:text-blue-400'>608</div>
                    </div>

                    <div className='flex flex-row items-center justify-around'>
                        <div className='text-md mr-1 group-hover:text-green-400 hover:bg-slate-200 p-2 rounded-full'><FaRetweet /></div>
                        <div className='text-md group-hover:text-green-400'>867</div>
                    </div>
                    <div className='flex flex-row items-center justify-center'>

                        <div className='text-lg mr-1 hover:bg-slate-200 p-2 rounded-full'><AiOutlineHeart /></div>
                        <div className='text-md'>24.7k</div>
                    </div>
                    <div className='flex flex-row items-center justify-center'>

                        <div className='text-md mr-1 hover:bg-slate-200 p-2 rounded-full'><CgPoll /></div>
                        <div className='text-md'>708.k</div>
                    </div>
                    <div className='flex flex-row items-center justify-center'>

                        <div className='text-md mr-1'><FiUpload /></div>
                        <div></div>
                    </div>

                </div>
            </div>
        </div>



    )
}

export default Post