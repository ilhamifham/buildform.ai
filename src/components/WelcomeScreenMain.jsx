import Button from "./Button"

function WelcomeScreenMain({ welcomeDetails, image, placement }) {
    return (
        <div className="px-4 pb-4 pt-3 flex flex-col gap-8 justify-center items-center h-full lg:flex-row">
            <form className={`${placement ? "order-2" : "order-none"} font-mono lg:w-1/2 lg:flex lg:items-center lg:justify-center`}>
                <div>
                    <h1 className="text-2xl text-black font-semibold lg:text-4xl">{welcomeDetails.title}</h1>
                    <p className="text-neutral-600 mt-4 mb-5">{welcomeDetails.description}</p>
                    <Button title={welcomeDetails.button} className="bg-blue-500 px-6 py-2 text-white duration-500 hover:opacity-80" />
                </div>
            </form>
            <div className="w-full h-60 rounded-md lg:w-1/2 overflow-hidden flex items-center justify-center">
                <img src={image} alt="" className="rounded-md h-full" />
            </div>
        </div>
    )
}

export default WelcomeScreenMain