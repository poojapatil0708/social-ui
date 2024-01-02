const Button = ({label,...props}) => {
    return(
        <div>
            <button className="button" type="submit" {...props}>{label}</button>
        </div>
    );
}

export default Button;