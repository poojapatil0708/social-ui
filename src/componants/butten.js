const Button = ({label,...props}) => {
    return(
        <div>
            <button className={props.small ? 'button-sm': 'button'} type="submit" {...props}>{label}</button>
        </div>
    );
}

export default Button;