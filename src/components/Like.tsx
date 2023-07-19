import {AiOutlineLike, AiTwotoneLike} from 'react-icons/ai'
import { useState } from 'react'

interface Props{
    onClick : () => void;
}

const Like = ({onClick}: Props) => {
    const [status,setStatus] = useState(false);

    const toggle = () => {
        setStatus(!status);
        onClick;
    }

    if (status)
        return (
            <AiOutlineLike size={32} onClick={toggle} />
        )
    else
    return(
        <AiTwotoneLike size={32} onClick={toggle} />
    )
}

export default Like