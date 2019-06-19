// ------------------------------------------------------
import React, { Component } from 'react'
import { DropTarget } from 'react-dnd'
// ------------------------------------------------------

class DnDTarget extends Component {
    render () {
        const { 
            isOver, canDrop, connectDropTarget, droppedItem
        } = this.props
        let className = ''
        if (isOver && canDrop) {
            className = 'green'
        } else if (!isOver && canDrop) {
            className = 'yellow'
        } else if (isOver && !canDrop) {
            className = 'red'
        }
        return (
            connectDropTarget(
                <div className={`target ${className}`}>
                    <div className='card'>
                        { droppedItem && droppedItem.id }
                    </div>
                </div>
            )
        )
    }
}

// ------------------------------------------------------
const spec = {
    drop(props, monitor, component) {
        const item = monitor.getItem()
        props.onDrop(item)
    }
}
function collect (connect, monitor) {
    return {
        connectDropTarget: connect.dropTarget(),
        isOver: monitor.isOver(),
        isOverCurrent: monitor.isOver({ shallow: true }),
        canDrop: monitor.canDrop()
    }
}
// ------------------------------------------------------
export default DropTarget('SOURCE', spec, collect)(DnDTarget)
// ------------------------------------------------------