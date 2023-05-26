import React from 'react'

import { BsTwitter, BsHash, BsBell, IoBookmarkSharp, BsCardList, BsBookmark } from 'react-icons/bs'
import { AiOutlineHome, AiOutlineMail, AiOutlineUserAdd } from 'react-icons/ai'
import { CiCircleMore } from 'react-icons/ci'
import { FiMoreHorizontal } from 'react-icons/fi'
import { signOut } from 'firebase/auth'
import { auth } from '../firebase'
import { BiHash } from 'react-icons/bi'

const NAV_ICONS = [
    {
        title: 'Home',
        icon: AiOutlineHome
    },
    {
        title: 'Explore',
        icon: BsHash
    },
    {
        title: 'Notifications',
        icon: BsBell
    },
    {
        title: 'Messgaes',
        icon: AiOutlineMail
    },
    {
        title: 'List',
        icon: BsCardList
    },
    {
        title: 'Bookmarks',
        icon: BsBookmark
    },
    {
        title: 'Profile',
        icon: AiOutlineUserAdd
    },
    {
        title: 'More',
        icon: CiCircleMore
    },

]

function LeftSidebar () {

    const handleSignOut = ( e ) => {
        e.preventDefault();

        signOut( auth )
            .then( () => {
                //signout succesfull
                console.log( "user signed out" );
            } ).catch( ( error ) => {
                //an error happened
                console.log( error );
            } )
    }
    return (
        <div className=" h-full flex justify-center items-center  fixed w-[255px]">
            <div className='max-w-screen-lg w-full h-full flex relative '>

                {/* left sidebar */ }
                <div className=' flex flex-col h-screen  justify-between  '>
                    <div className='p-4'>
                        <div className='text-xl text-blue-500 cursor-pointer p-2 h-9 w-9 rounded-full hover:bg-slate-200'>
                            <BsTwitter />
                        </div>
                        <div className='=pt-2'>
                            {
                                NAV_ICONS.map( ( ico, i ) => (
                                    <div className='flex flex-row items-center py-3 px-5
                                         rounded-full w-fit hover:bg-slate-200 transition duration-200'>
                                        <div className='text-xl mr-3'><ico.icon /></div >
                                        <div className='text-xl'>{ ico.title }</div >
                                    </div >
                                ) )
                            }
                            <div
                                onClick={ handleSignOut }
                                className='flex flex-row items-center py-3 px-5
                                         rounded-full w-fit hover:bg-slate-200 transition duration-200'>
                                <div className='text-xl mr-3'><BiHash /></div >
                                <div className='text-xl'>SignOut</div >
                            </div >
                        </div>


                        <button className=' w-[200px] py-2 rounded-full bg-blue-500 hover:bg-blue-700
           text-white text-lg mt-3 transition duration-200'>
                            Tweet
                        </button>
                    </div>
                    <div className='flex flex-row items-center hover:bg-slate-200 cursor-pointer p-3 rounded-full'>

                        {/* Avatar */ }
                        <div className='w-12 h-12 rounded-full bg-slate-400'></div>

                        {/* username &handleid */ }
                        <div className='flex flex-col ml-2'>
                            <div className='text-md font-bold'>Akansha Dhuriya</div>
                            <div className='text-sm'>@akanshadhuriya0002</div>
                        </div>

                        {/* more icon */ }
                        <div className='text-md ml-3'>
                            <FiMoreHorizontal />
                        </div>
                    </div>
                </div>

            </div >
        </div>

    );
}




export default LeftSidebar