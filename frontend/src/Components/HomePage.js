import React, {useState} from 'react'

function HomePage() {

    const [ searchInventValue, setSearchInventValue] = useState("");

    function handleInventVal(e) {
        setSearchInventValue(e.target.value)
    }
    // console.log(searchInventValue)

  return (
    <div>

        <header>
            <h1 id='title'>
                Dark Cloud 2 Crafting Data
            </h1>

            {/* description */}
            <div id='header-description'>
                <p>
                    This web application utilizes Go to query over a large body of text to extract key information. This will allow users to better conceptualize the data needed for specific classes
                </p>
            </div>
        </header>

        {/* Main Section Box */}
        <section id='main-section'>

            {/* Ideas */}
                <div>
                    <h2 className='title'>Ideas Section</h2>
                    <div>
                        
                    </div>
                </div>

            {/* Scoops */}
                <div>
                    <h2 className='title'>Scoops Section</h2>
                    <div>
                        
                    </div>
                </div>

            {/* Inventions */}
                <div>
                    <h2 className='title'>Inventions Section</h2>
                    <p> Use the search bar below to find the requirements for any Invention*</p>
                    <div id='main-invent-container'>
                        <form>
                            <label>Name:</label>
                            <input type='text' id='invent-name-search' onChange={handleInventVal}></input>
                        </form>
                    </div>
                </div>
        </section>
        {/* <footer>
        </footer> */}
    </div>
  )
}

export default HomePage