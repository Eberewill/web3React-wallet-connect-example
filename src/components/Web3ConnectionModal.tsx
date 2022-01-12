import React from 'react'

const Web3ConnectionModal = () => {
    return (

        <div className="flex flex-col space-y-4 min-w-screen h-screen animated fadeIn faster  fixed  left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-gray-900">
            <div className="flex flex-col p-8 bg-white shadow-md hover:shodow-lg rounded-2xl">
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <img height={"50px"} width={"50px"} alt="img" src='data:image/jpeg;base64,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' />
                        <div className="flex flex-col ml-3">
                            <div className="font-medium leading-none">Wallet Connect</div>
                            <p className="text-sm text-gray-600 leading-none mt-1">Connection with wallet connect
                            </p>
                        </div>
                    </div>
                    <button className="flex-no-shrink bg-red-500 px-5 ml-4 py-2 text-sm shadow-sm hover:shadow-lg font-medium tracking-wider border-2 border-red-500 text-white rounded-full">Connect</button>
                </div>
            </div>
            <div className="flex flex-col p-8 bg-gray-800 shadow-md hover:shodow-lg rounded-2xl">
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <img height={"50px"} width={"50px"} alt="img" src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/MetaMask_Fox.svg/640px-MetaMask_Fox.svg.png' />
                        <div className="flex flex-col ml-3">
                            <div className="font-medium leading-none text-gray-100">Injected Connector</div>
                            <p className="text-sm text-gray-500 leading-none mt-1">Connnect using Injected connector
                            </p>
                        </div>
                    </div>
                    <button className="flex-no-shrink bg-red-500 px-5 ml-4 py-2 text-sm shadow-sm hover:shadow-lg font-medium tracking-wider border-2 border-red-500 text-white rounded-full">Connect</button>

                </div>
            </div>
        </div>
    )
}

export default Web3ConnectionModal
