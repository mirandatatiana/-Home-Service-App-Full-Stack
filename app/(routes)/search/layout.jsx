import React from 'react'
import CategorySideBar from './_components/CategorySideBar'

function layout({children}) {
  return (
    <div>
        <div className='grid grid-cols-1 md:grid-cols-4 mt-8'>
            <div className='hiddien md:block'>
                {/* Side Category Nav Bar */}
                <CategorySideBar/>

            </div>
            <div className='col-span-3'>
 {children}
            </div>

        </div>
       </div>
  )
}

export default layout