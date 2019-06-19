// ------------------------------------------------------
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { DragDropContext } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
// ------------------------------------------------------
import DnDTarget from './DnDTarget'
import DnDSource from './DnDSource'
// ------------------------------------------------------

class DnDContainer extends Component {
    constructor () {
        super()
        this.state = {
            droppedItem: {}
        }
    }
    onDrop = (item) => {
        this.setState({
            droppedItem: item
        })
    }
    render () {
        return (
            <div style={{ display: 'flex' }}>
                <div className='source'>
                    <DnDSource name='Block A' id='a' />
                    <DnDSource name='Block B' id='b' />
                </div>
                <div className='destination'>
                    <DnDTarget 
                        droppedItem={this.state.droppedItem}
                        onDrop={this.onDrop}
                    />
                </div>
            </div>
        )
    }
}

// ------------------------------------------------------
const mapStateToProps = state => state
DnDContainer = DragDropContext(HTML5Backend)(DnDContainer)
DnDContainer = connect(mapStateToProps)(DnDContainer)
// ------------------------------------------------------
export default DnDContainer
// ------------------------------------------------------

