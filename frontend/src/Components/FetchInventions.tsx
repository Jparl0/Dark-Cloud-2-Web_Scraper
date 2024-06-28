import React, {useState} from 'react'
import { connect } from 'react-redux'

import { invention } from './Inventions'

export function FetchInventions<TData, TParams extends object = object>(
  endpoint: string,
  params?: TParams
): Promise<TData> {
  return new Promise ((resolve, reject) => {
    
    const [intentionData, setInventionData] = useState([])
    
    try{
        fetch(endpoint)
        .then(r => resolve(r.json<TData>()))
        .then(inventionObject => setInventionData(inventionObject<invention>))
    } catch(error) {
      if (error instanceof Error) {
        inventionLog({
          message: error.message,
          data: {endpoint, params},
          type: "error",
        })
        reject(error.message)
      }}    
 })
}


const mapStateToProps = () => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(FetchInventions)