const Input = ({ type, error, value, onChange, ...props }) => {
    return (
        <div>
            <input type={type} className="input" onChange={onChange} {...props} />
            {error ? <div className="input-error">{error}</div> : null}
        </div>
    );
}

export default Input;