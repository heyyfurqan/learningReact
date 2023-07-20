import React from 'react'
import { useState } from 'react';


interface Props{
    children: string;
    maxChars?: number;
}

const ExpandableText = ({children, maxChars = 69}: Props) => {

    const [isExpanded, setExpanded] = useState(false);

    if (children.length <= maxChars) return <div>{children}</div>
  
    const text = isExpanded ? children : children.substring(0,maxChars)

    return <p>{text}...<button onClick={() => setExpanded(!isExpanded)}>{isExpanded ? 'Less' : 'More'}</button></p>
}

export default ExpandableText