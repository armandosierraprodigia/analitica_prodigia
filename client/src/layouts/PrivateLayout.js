import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

export class DefaultLayout extends Component {
    
    static propTypes = {
        prop: PropTypes
    }

    

    render() {
        return (
            <div>
                {/* Body del layout, aqui se representa todo lo que este dentro de las etiquetas <DefaultLaypout> </DefaultLaypout>*/}
                {this.props.children}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = dispatch =>{
    
}

export default connect(mapStateToProps, mapDispatchToProps)(DefaultLayout)
