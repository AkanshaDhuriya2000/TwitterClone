import React from 'react'

function RightSidebar () {
    return (
        <div className='fixed ml-[755px] p-3'>
            <div>Who to follow</div>
            <div>
                <div className='flex flex-row items-center p-2'>
                    {/* avatar */ }
                    <div className='w-12 h-12 rounded-full bg-slate-400'></div>

                    <div className='ml-2'>
                        {/* user name */ }
                        <div className='text-md font-bold'>Ankisha Pipare</div>

                        {/* handle name */ }
                        <div className='text-md'>@ankisha143</div>
                    </div>

                    {/* follow button */ }
                    <button className='bg-black/75 px-4 py-2 rounded-full text-white hover:bg-black cursor-pointer ml-2'>
                        Follow
                    </button>
                </div>
                <div className='flex flex-row items-center p-2'>
                    {/* avatar */ }
                    <div className='w-12 h-12 rounded-full bg-slate-400'></div>

                    <div className='ml-2'>
                        {/* user name */ }
                        <div className='text-md font-bold'>Nikhil Shakya</div>

                        {/* handle name */ }
                        <div className='text-md'>@iAmNikhilShakya</div>
                    </div>

                    {/* follow button */ }
                    <button className='bg-black/75 px-4 py-2 rounded-full text-white hover:bg-black cursor-pointer ml-2'>
                        Follow
                    </button>
                </div>
                <div className='flex flex-row items-center p-2'>
                    {/* avatar */ }
                    <div className='w-12 h-12 rounded-full bg-slate-400'></div>

                    <div className='ml-2'>
                        {/* user name */ }
                        <div className='text-md font-bold'>Reshma Rakhade</div>

                        {/* handle name */ }
                        <div className='text-md'>@reshmarakhade</div>
                    </div>

                    {/* follow button */ }
                    <button className='bg-black/75 px-4 py-2 rounded-full text-white hover:bg-black cursor-pointer ml-2'>
                        Follow
                    </button>
                </div>
            </div>
        </div>
    )
}

export default RightSidebar