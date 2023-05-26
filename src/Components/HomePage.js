import React from 'react'
import LeftSidebar from './LeftSidebar'
import Feed from './Feed'
import RightSidebar from './RightSidebar'

function HomePage () {
    return (
        <div><div className="w-full h-full flex justify-center items-center relative">
            <div className='max-w-screen-lg w-full h-full flex relative '>

                {/* left sidebar */ }
                <LeftSidebar />

                {/* Feed */ }
                <Feed />

                {/* Rightsidebar */ }
                <RightSidebar />

            </div >
        </div>
        </div>
    )
}

export default HomePage