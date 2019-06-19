// ------------------------------------------------------
import React, { Component } from 'react'
import { DragSource } from 'react-dnd'
// ------------------------------------------------------

class DnDSource extends Component {
    render () { 
        const { name, connectDragSource } = this.props
        return connectDragSource(
            <div className='square'>
                {name}
            </div>
        )
    }
}

// ------------------------------------------------------
const cardSource = {
    beginDrag(props, monitor, component) {
        const item = { id: props.id }
        return item
    }
}
function collect (connect, monitor) {
    return {
        connectDragSource: connect.dragSource()
    }
}
// ------------------------------------------------------
export default DragSource(
    'SOURCE', cardSource, collect
)(DnDSource)
// ------------------------------------------------------