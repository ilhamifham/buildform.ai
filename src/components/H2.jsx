function H2({image, title}) {
    return (
        <h2 className="flex items-center font-medium text-black gap-1">
            <span>
                <img src={image} alt="" />
            </span>
            <span>{title}</span>
        </h2>
    )
}

export default H2