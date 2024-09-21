function EmailMain({ emailDetails, required }) {
    return (
        <form className="font-mono h-full flex items-center justify-center px-4 pb-4 pt-3">
            <div>
                <h1 className="text-2xl text-black font-semibold lg:text-4xl">{emailDetails.title}</h1>
                <p className="text-neutral-600 mt-4 mb-5">{emailDetails.description}</p>
                <input type="email" name="email" className="border-b-2 border-black w-full px-4 py-2 focus:outline-none" placeholder="Type here" required={required} />
            </div>
        </form>
    )
}

export default EmailMain