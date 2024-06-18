import React from 'react'

function Header() {
  return (
    <div className="jumbotron">
        <h1 id='title' className="display-4">Dark Cloud 2 Crafting Data</h1>
        <p className="lead">
            This web application utilizes React.js, TypeScript, Python & Flask to query over large bodies of text to extract key information. This will allow users to better conceptualize the data needed for specific classes
        </p>
        <hr className="my-4"/>
        <p>
            Below are multiple classes of items in the game that required multiple complimentary components in the game. Use Each search box below to find any specific item. 
        </p>
    </div>
  )
}

export default Header