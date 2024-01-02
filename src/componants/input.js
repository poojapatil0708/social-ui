const Input = ({ onChange, ...props }) => {
    return (
        <div>
            <input type="text" className="input" onChange={onChange} {...props} />
        </div>
    );
}

export default Input;