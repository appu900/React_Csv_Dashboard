import React from 'react'

import CSVUploader from '../components/CSV_uploader'

export default function Upload() {
  return (
    <div className='py-12 px-20 h-auto'>
       <div>
        <p className='text-[#605BFF] text-2xl font-semibold'>Upload CSV</p>
       </div>
       <div className='w-full   mt-10 p-5 '>
            <div className='max-w-5xl m-auto'>
                <CSVUploader/>
            </div>
       </div>
    </div>
  )
}

