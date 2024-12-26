const InputComponent = ({
    label,
    type,
    idName,
    onChange,
    value,
}) => {
    return (
        <div className="flex flex-col">
            <label htmlFor={idName} className="text-sm font-medium mb-1">
                {label}
            </label>
            <input
                type={type}
                id={idName}
                className="rounded-lg border border-gray-300 p-2.5 w-full"
                value={value}
                onChange={onChange}
            />
        </div>
    );
}

export default InputComponent;