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
      type: "info",
    })
    try{
        fetch(endpoint)
        .then(r => resolve(r.json<TData>()))
        .then(inventionObject => setInventionData(inventionObject))
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

function inventionLog({
  data,
  message,
  type
}: {
  message?: string
  data: object
  type?: "success" | "error" | "info"
}) {

}

const mapStateToProps = () => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(FetchInventions)