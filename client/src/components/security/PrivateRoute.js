import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {Route, Redirect} from 'react-router-dom'

export class PrivateRoute extends Component {
    static propTypes = {
        prop: PropTypes
    }

    

    render() {
        const{auth} = this.props 
        return (
            <div>
                
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    auth : state.auth
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoute)
