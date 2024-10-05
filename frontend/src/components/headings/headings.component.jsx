import React from 'react'

const Headings = ({ headline, headlineTag }) => {
  return (
    <div className='mt-5'>
        <h1 className="headline mt-6 mb-5"><pre>{headline}</pre></h1>
        <h2 className="headline-tag">{headlineTag}</h2>
    </div>
  )
}

export default Headings;