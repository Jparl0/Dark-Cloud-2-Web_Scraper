import React from 'react'
import { connect } from 'react-redux'

export function FetchInventions<TData, TParams extends object = object>(
  endpoint: string,
  params?: TParams
): Promise<TData> {
  return new Promise (() => {

    fetch(`/inventions`)
    .then(r => r.json())
    .then(inventionsObject => {
        console.log(inventionsObject)
    })
    
 })
}

const mapStateToProps = () => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(FetchInventions)