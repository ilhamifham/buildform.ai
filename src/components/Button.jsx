function Button({ className, title, onClick, children, type }) {
    return (
        <button className={`${className} text-sm font-medium rounded-md`} onClick={onClick} type={type}>
            {children}
            {title}
        </button>
    )
}

export default Button