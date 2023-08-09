import React from 'react'
import Card from './Card'

const Event = () => {
    return (
        <>
            <div className='py-20 bg-black'>
                <div className="relative text-[6vh] text-white text-center font-bold">
                    Featured Events
                    <div className="absolute h-[2px] bg-white left-[45%] w-[10%]"></div>
                </div>
                <div className="flex justify-around items-center mx-auto">
                <Card />
                <Card />
                <Card />

                </div>

            </div>

        </>
    )
}

export default Event