import React, {useState, useEffect, ReactEventHandler} from 'react'
import Inventions from './Inventions';

interface ChangeValues {
    inventChangeVal: string;
    ideaChangeVal: string;
};

type Invention = object

interface HomePageProps {
    inventionsFetched: Invention;
    setInventionsFetched: React.Dispatch<React.SetStateAction<object>>;
  };

function HomePage({inventionsFetched, setInventionsFetched}: HomePageProps) {

    // creating state to search by invention and idea name
    const [ searchValue, setSearchValue] = React.useState<ChangeValues>({
        inventChangeVal: "",
        ideaChangeVal: ""
    });
    
    const handleChange = (fieldName: keyof ChangeValues) => (
        e: React.ChangeEvent<
           HTMLInputElement | HTMLTextAreaElement
        >
    ) => {
        setSearchValue({...searchValue, [fieldName]: e.currentTarget.value });
    }

    // useEffect(() => {
    //     fetch("/inventions")
    //     .then(r => r.json())
    //     .then(inventionsData => {
    //         console.log(inventionsData)
    //         // setInventionsFetched(inventionsData)
    //     }
    // )}, [])

  return (
    <div>
        <header>
            <div className="jumbotron">
                <h1 id='title' className="display-4">Dark Cloud 2 Crafting Data</h1>
                <p className="lead">
                    This web application utilizes React.js & Go to query over large bodies of text to extract key information. This will allow users to better conceptualize the data needed for specific classes
                </p>
                <hr className="my-4"/>
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
            </div>
            <div id='inventions-container'>
            {
                // (inventionsFetched.filter(filteredInventions => filteredInventions.name === (searchInventValue || searchIdeaValue))).map((mappedInvention) => {
                //     return (<Inventions key={mappedInvention.id} mappedInventionProp={mappedInvention} />)
                // })
            }
            </div>
        </section>
        {/* <footer>
        </footer> */}
    </div>
  )
}

export default HomePage