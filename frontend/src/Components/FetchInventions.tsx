import React, {useState} from 'react'
import { connect } from 'react-redux'

export function FetchInventions<TData, TParams extends object = object>(
  endpoint: string,
  params?: TParams
): Promise<TData> {
  return new Promise ((resolve, reject) => {
    
    const [intentionData, setInventionData] = useState([])
    
    inventionLog({
      message: "Loading",
      data: {endpoint, params},
      type: "inventions",
    })
    try{
        
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