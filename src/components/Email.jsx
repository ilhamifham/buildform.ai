import H2 from "./H2";
import Input from "./Input";
import Button from "./Button";

import Setting from "../assets/setting.svg"
import Close from "../assets/close.svg"

function Email({showEmailHandle, emailDetails, handleEmailDetails, required, handleRequired, handleSubmit}) {
    return (
        <div>
            <H2 image={Setting} title="Email" />
            <form className="flex flex-col gap-3 mt-4" onSubmit={handleSubmit}>
                <Input title="Title" type="text" value={emailDetails.title} name={emailDetails.title} onChange={handleEmailDetails} />
                <Input title="Description" type="text" value={emailDetails.description} name={emailDetails.description} onChange={handleEmailDetails} />
                <div className="flex flex-row items-center justify-between">
                    <label htmlFor="checkbox" className="block font-medium text-sm">Required</label>
                    <label htmlFor="checkbox" className={`w-10 h-5 rounded-full flex flex-row items-center cursor-pointer duration-250 ${required ? "bg-blue-500" : "bg-neutral-300"}`} role="checkbox" onChange={handleRequired}>
                        <input type="checkbox" id="checkbox" className="hidden" />
                        <div className={`w-4 h-4 bg-white rounded-full mx-[0.1rem] duration-500 ${required ? "translate-x-[125%]" : ""}`}></div>
                    </label>
                </div>
                <div className="flex gap-4 mt-3">
                <Button className="px-4 py-2 w-full bg-black text-white duration-500 hover:opacity-80" title="Save" type="submit" />
                <Button className="px-4 py-2 w-full text-red-500 duration-500 hover:bg-red-100" title="Discard" onClick={showEmailHandle} />
            </div>
            </form>
            <Button className="border border-neutral-300 p-[0.563rem] rounded-md absolute top-3 right-4 duration-500 hover:border-black" onClick={showEmailHandle}>
                <img src={Close} alt="" />
            </Button>
        </div>
    )
}

export default Email