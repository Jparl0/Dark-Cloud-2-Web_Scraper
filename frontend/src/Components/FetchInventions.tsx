import React, {useState} from 'react'
import { connect } from 'react-redux'

import { invention } from './Inventions'

interface InventionsFetched {
  name: string;
  idea1: string;
  idea2: string;
  idea3: string;
  description: string;
}

export function FetchInventions<TData, TParams extends object = object>(
  endpoint: string,
  params?: TParams
): Promise<TData> {
  return new Promise ((resolve) => {
    
    const [intentionData, setInventionData] = useState([])
    
    try{
        fetch(endpoint)
        .then(r => resolve(r.json()))
        .then(fetchedInventionObject => {
            if (fetchedInventionObject == null) {
              throw new Error {"Fetched invention cannot be null"}
            }
            else {
              setInventionData(fetchedInventionObject)
            }
        }
        )
    } catch(error) {
      if (error instanceof Error) {
        throw new Error ("error: fetch failed")
      }}    
 })
}


const mapStateToProps = () => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(FetchInventions)