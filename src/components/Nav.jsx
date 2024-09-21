import Button from "./Button"
import H2 from "./H2"
import Steps from "../assets/steps.svg"
import Pin from "../assets/pin.svg"
import Move from "../assets/move.svg"

function Nav({showWelcome, showWelcomeHandle, showEmail, showEmailHandle}) {
    return (
        <nav className={showWelcome ? "hidden" : "" || showEmail ? "hidden" : ""}>
            <H2 title="Steps" image={Steps} />
            <p className="text-neutral-600 text-xs">The steps users will take to complete the form</p>
            <div className="flex flex-col mt-4 gap-2">
                <Button title="Welcome Screen" className="bg-neutral-100 px-4 py-2 text-neutral-800 relative duration-500 hover:bg-neutral-200" onClick={showWelcomeHandle}>
                    <img src={Pin} alt="" className="absolute top-[50%] left-4 -translate-x-[50%] -translate-y-[50%] w-3" />
                </Button>
                <Button title="Email" className="bg-neutral-100 px-4 py-2 text-neutral-800 relative duration-500 hover:bg-neutral-200" onClick={showEmailHandle}>
                    <img src={Move} alt="" className="absolute top-[50%] left-4 -translate-x-[50%] -translate-y-[50%] w-2" />
                </Button>
            </div>
        </nav>
    )
}

export default Nav