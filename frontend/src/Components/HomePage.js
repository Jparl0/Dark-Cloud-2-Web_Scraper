import React, {useState} from 'react'
import Inventions from './Inventions';

function HomePage({inventionsFetched, setInventionsFetched}) {

    const [ searchInventValue, setSearchInventValue] = useState("");

    function handleInventVal(e) {
        setSearchInventValue(e.target.value)
    }
    // console.log(searchInventValue)
    useEffect(() => {
        fetch("/getInventions")
        .then(r => r.json())
        .then(inventionsData => {
            setInventionsFetched(inventionsData)
        }
    )})

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
                    <p> Use the search bar below to find the requirements for any Invention*</p>
                    <div id='main-invent-container'>
                        {/* form to search inventions by name */}
                        <form>
                            <label>Name:</label>
                            <input type='text' id='invent-name-search' onChange={handleInventVal}></input>
                        </form>
                        {/* form to search inventions by idea name */}
                        <form>
                            <label>Idea name:</label>
                            <input type='text' id='idea-name-search'></input>
                        </form>
                    </div>
                    <div>
                        <Inventions />
                    </div>
                </div>
        </section>
        {/* <footer>
        </footer> */}
    </div>
  )
}

export default HomePage