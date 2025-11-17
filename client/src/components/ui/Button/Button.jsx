<<<<<<< HEAD
const Button = ({ children, variant = 'primary', ...props }) => {
  return (
    <button className={`btn btn-${variant}`} {...props}>
      {children}
    </button>
  );
=======
const Button =({children, variant ='primary', ...props}) => {
    return(
        <button className={`btn btn-${variant}`} {...props}>
            {children}
        </button>
    );
>>>>>>> c138261b37ef54e096ee66faddfe205d491943d5
};

export default Button;