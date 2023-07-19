import { ReactNode } from "react";

interface Props{
  children: ReactNode; // allows passing everything to props
  onClose : () => void;
}

const Alert = ({children, onClose}: Props) => {
  return (
    <div className="alert alert-primary alert-dismissable fade show" role="alert">
    {children}
    <button onClick={onClose} type="button" className="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
    </div>
  )
}

export default Alert