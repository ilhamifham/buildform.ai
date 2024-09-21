function Input({ title, value, onChange, placeholder, type }) {
    return (
        <div>
            <label htmlFor={title.toLowerCase()} className="block mb-1 font-medium text-sm">{title}</label>
            <input name={title.toLowerCase()} type={type} id={title.toLowerCase()} className="px-4 py-[0.313rem] border border-neutral-300 rounded-md w-full duration-500 hover:border-black" value={value} onChange={onChange} placeholder={placeholder} />
        </div>
    )
}

export default Input