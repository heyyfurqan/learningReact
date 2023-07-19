import { ReactNode } from 'react';
import styles from './Button.module.css'

interface Props{
    children: ReactNode;
    onClick: () => void;
    color?: 'primary' | 'secondary' |  'danger'; // optional prop
}

const Button = ({children, onClick, color = 'primary'}: Props) => {
  return (
    <button className={[styles.button, styles['button-' + color ]].join(' ')} onClick={onClick}>{children}</button>
  )
}

export default Button
