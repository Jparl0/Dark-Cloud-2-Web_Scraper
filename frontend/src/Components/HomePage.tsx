import React, { useEffect } from 'react'
import Inventions from './Inventions';
import Header from './Header';


type Invention = Array<object>

interface HomePageProps {
    inventionsFetched: Invention;
};
//     setInventionsFetched: React.Dispatch<React.SetStateAction<Array<object>>>;

interface ChangeValues {
    inventChangeVal: string;
    ideaChangeVal: string;
};
function HomePage() {

    // creating state to search by invention and idea name
    const [ searchValue, setSearchValue] = React.useState<ChangeValues>({
        inventChangeVal: "",
        ideaChangeVal: ""
    });

    const [inventionsStateVal, setInventionsStateVal] = React.useState<HomePageProps>({
        inventionsFetched: [{}]
    });
    
    const handleChange = (fieldName: keyof ChangeValues) => (
        e: React.ChangeEvent<
           HTMLInputElement | HTMLTextAreaElement
        >
    ) => {
        setSearchValue({...searchValue, [fieldName]: e.currentTarget.value });
    }
    
    useEffect(() => {
        async function () {
    
        }
        fetch("/inventions")
        .then(r => r.json())
        .then(inventionsData => {
            console.log(inventionsData)
            // setInventionsStateVal(inventionsData)
        }
    )}, [])

  return (
    <div>
        <header>
            <Header />
        </header>
        {/* Main Section Box */}
        <body id='main-section'>
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
                <div id='inventions-container'>
                    <Inventions />
                {
                    // (inventionsStateVal.filter(filteredInventions => filteredInventions.name === (inventChangeVal || ideaChangeVal))).map((mappedInvention) => {
                    //     return (<Inventions mappedInventionProp={mappedInvention} />)
                    // })
                }
                </div>
            </div>
        </body>
        {/* <footer>
        </footer> */}
    </div>
  )
}

export default HomePage