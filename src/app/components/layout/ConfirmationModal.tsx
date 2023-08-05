import React from 'react'

const ConfirmationModal = ({ items, onClose }: any) => {
    return (
        <div className=''>

            <div className='fixed flex justify-center flex-col items-center mx-auto bg-black bg-opacity-90 p-10 text-white'>
                <h2 className='text-white text-center'>Than you for Your Purchase!</h2>
                <p className='text-white text-center'>You have purchase following items:</p>
                <div>
                    {items.map((item: any) => {
                        return (
                            <div>
                                {item.title} && {item.price}
                            </div>
                        )
                    })}
                    <button onClick={onClose} className='bg-orange-500 px-4 rounded-sm'>Close</button>
                </div>
            </div>
        </div>
    )
}

export default ConfirmationModal