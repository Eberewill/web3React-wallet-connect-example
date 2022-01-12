import React, { useState } from 'react'
import Web3ConnectionModal from '../components/Web3ConnectionModal'

const Home = () => {

    const [showModal, setShowModal] = useState(false)


    return (
        <>
            <div className='flex items-center justify-center min-h-screen'>
                <section className="text-center mx-6 lg:w-2/3">
                    <img alt='img' className="m-auto w-24 lg:w-48" src="https://github.com/pharmawala/pharmawala.com/raw/main/logo.png" />
                    <h1 className="mt-2 mb-1 text-2xl lg:text-3xl">We'll be back soon!</h1>
                    <div>
                        <p>
                            Sorry for the inconvenience. We&rsquo;re performing some maintenance
                            at the moment. You can always follow us on
                            <a className="text-blue-700 font-semibold hover:underline hover:decoration-wavy" href="https://twitter.com/_pharmawala">Twitter</a> for more updates.
                        </p>

                    </div>
                    <button type="button" className="transition rounded-md px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-bold" onClick={() => { setShowModal(true) }}>
                        Launch toast
                    </button>
                </section>

            </div>
            {showModal && <Web3ConnectionModal />}
        </>
    )
}

export default Home
