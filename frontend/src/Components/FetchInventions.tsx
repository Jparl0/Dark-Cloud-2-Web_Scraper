import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux'

export function FetchInventions<TData, TParams extends object = object>(
  endpoint: string,
  params?: TParams
): Promise<TData> {
  return new Promise (() => {

    const [intentionData, setInventionData] = useState([])

    useEffect(() => {
      fetch(`/inventions`)
      .then(r => r.json())
      .then(inventionsObject => {
        setInventionData(inventionsObject)
      })
    }, [])
 })
}

const mapStateToProps = () => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(FetchInventions)