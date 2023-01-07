import React, {useState} from 'react'

function HomePage() {

    const [ searchInventValue, setSearchInventValue] = useState("");



    function handleInventVal(e) {
        setSearchInventValue(e.target.value)
    }

  return (
    <div>

        <header>
            <h1>
                Dark Cloud 2 Crafting Data
            </h1>
        </header>

        {/* Main Section Box */}
        <div className='main-section'>

            {/* Ideas */}
                {/* <div>
                    <h2 className='title'>Ideas Section</h2>
                    <div>
                        
                    </div>
                </div> */}

            {/* Scoops */}
                {/* <div>
                    <h2 className='title'>Scoops Section</h2>
                    <div>
                        
                    </div>
                </div> */}

            {/* Inventions */}
                <div>
                    <h2 className='title'>Inventions Section</h2>
                    <div id='main-invent-container'>
                        <form>
                            <label>Name Search:</label>
                            <input type='text' id='invent-name-search' onChange={handleInventVal}></input>

                        </form>

                    </div>
                </div>

        </div>

        {/* <footer>

        </footer> */}

    </div>
  )
}

export default HomePage