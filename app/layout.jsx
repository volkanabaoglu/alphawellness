import React from 'react';
import '@/assets/styles/globals.css';

export const metadata={
title:'Alpha Wellness',
keywords:'fitness,spor salonu,yüzme havuzu,sauna,mert akay'

} 

const layout = ({ children }) => {
    return (
        <html lang='en'>
            <body>
                <div>{children}</div>
            </body>
        </html>
    )
}

export default layout