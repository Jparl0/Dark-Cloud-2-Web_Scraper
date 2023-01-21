import React from 'react'
import { connect } from 'react-redux'

export const FetchInventions = (props) => {

    function getInventions() {
        fetch(`/inventions`)
        .then(r => r.json())
        .then(inventionsObject => {
            console.log(inventionsObject)
        })
    }


  return (
    <div></div>
  )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(FetchInventions)