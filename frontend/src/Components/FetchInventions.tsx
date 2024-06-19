import React from 'react'
import { connect } from 'react-redux'

export const FetchInventions = () => {

    function getInventions() {
        fetch(`/inventions`)
        .then(r => r.json())
        .then(inventionsObject => {
            console.log(inventionsObject)
        })
    }

  return (
    <></>
  )
}

const mapStateToProps = () => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(FetchInventions)