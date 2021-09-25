import React from 'react'
import "./Tooltip.css";
export default function Tooltip(props) {
    const {price} = props;
    return (
        <div className="tooltip">
            {price} $
        </div>
    )
}
