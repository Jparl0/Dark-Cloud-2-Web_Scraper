import React from 'react'

function BodySection() {
  return (
    <div>
        <h2 className='title'>Inventions Section</h2>
        <p> Use the search bar below to find the requirements for any Invention*</p>
        <div id='invent-search-container'>
            <form>
                {/* form to search inventions by name */}
                <div className="mb-3">
                    <label htmlFor="invent-name-search" className="form-label">Name:</label>
                    <input onChange={handleChange("inventChangeVal")} value={searchValue.inventChangeVal} type="email" className="form-control" id="invent-name-search" aria-describedby="emailHelp"/>
                </div>
                {/* form to search inventions by idea name */}
                <div className="mb-3">
                    <label htmlFor="idea-name-search" className="form-label">Idea Name:</label>
                    <input onChange={handleChange("ideaChangeVal")} value={searchValue.ideaChangeVal} type="password" className="form-control" id="idea-name-search"/>
                    <div id="form-help" className="form-text">The data will automatically render below.</div>
                </div>
            </form>
        </div>
        <div id='inventions-container'>
        {
            // (inventionsStateVal.filter(filteredInventions => filteredInventions.name === (inventChangeVal || ideaChangeVal))).map((mappedInvention) => {
            //     return (<Inventions mappedInventionProp={mappedInvention} />)
            // })
        }
        </div>
    </div>
  )
}

export default BodySection