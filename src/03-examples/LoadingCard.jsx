import React from 'react'

export const LoadingCard = () => {
    return (
        <>
            <div className='card p-4 fixed'>

                <div className='card-body mx-auto'>
                    <script src="https://cdn.lordicon.com/ritcuqlt.js"></script>
                    <lord-icon
                        src="https://cdn.lordicon.com/gwxsygdo.json"
                        trigger="loop"
                        style={{ width: '250px', height: '250px' }}>
                    </lord-icon>
                </div>
            </div>
        </>
    )
}
