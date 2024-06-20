import React from 'react';
import '@/assets/styles/globals.css';
import Navbar from '@/components/Navbar';

export const metadata={
title:'Alpha Wellness',
keywords:'fitness,spor salonu,yüzme havuzu,sauna,mert akay'

} 

const layout = ({ children }) => {
    return (
        <html lang='en'>
            <body>
            <div className='bg-black w-screen h-full  max-h-full flex flex-col'>
            <Navbar />
                <div>{children}</div>
            </div>
            </body>
        </html>
    )
}

export default layout