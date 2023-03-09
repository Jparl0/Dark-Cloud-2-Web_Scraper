import React, {useState, useEffect} from 'react'
import Inventions from './Inventions';
import {  } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function HomePage({inventionsFetched, setInventionsFetched}) {

    const [ searchInventValue, setSearchInventValue] = useState("");
    const [ searchIdeaValue, setSearchIdeaValue] = useState("");


    function handleInventVal(e) {
        setSearchInventValue(e.target.value)
    }

    function handleIdeaVal(e) {
        setSearchIdeaValue(e.target.value)
    }
    // console.log(searchInventValue)
    useEffect(() => {
        fetch("/inventions")
        .then(r => r.json())
        .then(inventionsData => {
            console.log(inventionsData)
            // setInventionsFetched(inventionsData)
        }
    )}, [])

  return (
    <div>

        <header>
            <div class="jumbotron">
                <h1 id='title' class="display-4">Dark Cloud 2 Crafting Data</h1>
                <p class="lead">
                    This web application utilizes React.js & Go to query over large bodies of text to extract key information. This will allow users to better conceptualize the data needed for specific classes
                </p>
                <hr class="my-4"/>
                <p>
                    Below are multiple classes of items in the game that required multiple complimentary components in the game. Use Each search box below to find any specific item. 
                </p>
            </div>
        </header>

        {/* Main Section Box */}
        <section id='main-section'>
            {/* Ideas */}

            {/* Scoops */}
            

            {/* Inventions */}
            <div>
                <h2 className='title'>Inventions Section</h2>
                <p> Use the search bar below to find the requirements for any Invention*</p>
                
                <div id='invent-search-container'>
                    <form>
                        {/* form to search inventions by name */}
                        <div class="mb-3">
                            <label for="invent-name-search" class="form-label">Name:</label>
                            <input onChange={handleInventVal} type="email" class="form-control" id="invent-name-search" aria-describedby="emailHelp"/>
                        </div>

                        {/* form to search inventions by idea name */}
                        <div class="mb-3">
                            <label for="idea-name-search" class="form-label">Idea Name:</label>
                            <input onChange={handleIdeaVal} type="password" class="form-control" id="idea-name-search"/>
                            <div id="form-help" class="form-text">The data will automatically render below.</div>
                        </div>
                    </form>
                </div>
            </div>

            <div id='inventions-container'>
            {
                (inventionsFetched.filter(filteredInventions => filteredInventions.name === (searchInventValue || searchIdeaValue))).map((mappedInvention) => {
                    return (<Inventions key={mappedInvention.id} mappedInvention={mappedInvention} />)
                })
            }
            </div>

        </section>
        {/* <footer>
        </footer> */}
    </div>
  )
}

export default HomePage