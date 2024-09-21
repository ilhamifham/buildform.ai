import H2 from "./H2"
import Input from "./Input"
import Button from "./Button";

import Setting from "../assets/setting.svg"
import Upload from "../assets/upload.svg"
import Left from "../assets/left.svg"
import Right from "../assets/right.svg"
import Close from "../assets/close.svg"

function WelcomeScreen({ showWelcomeHandle, welcomeDetails, handleWelcomeDetails, image, handleImageChange, removeImage, handlePlacement, handleSubmit }) {
    return (
        <div>
            <H2 image={Setting} title="Welcome Screen" />
            <form className="flex flex-col gap-3 mt-4" onSubmit={handleSubmit}>
                <Input title="Title" type="text" value={welcomeDetails.title} name={welcomeDetails.title} onChange={handleWelcomeDetails} />
                <Input title="Description" type="text" value={welcomeDetails.description} name={welcomeDetails.description} onChange={handleWelcomeDetails} />
                <Input title="Button" type="text" value={welcomeDetails.button} name={welcomeDetails.button} onChange={handleWelcomeDetails} />
                <div className="mb-4">
                    <label htmlFor="image" className="block mb-1 font-medium text-sm">Upload Image</label>
                    <label htmlFor="image" className="cursor-pointer flex flex-row gap-2 items-center justify-center px-4 py-[0.438rem] text-sm font-medium text-neutral-800 border border-neutral-300 rounded-md w-full duration-500 hover:border-black" role="button" tabIndex="0" onChange={handleImageChange}>
                        <input type="file" id="image" className="hidden" accept="image/*" />
                        <img src={Upload} alt="" />
                        Upload Image
                    </label>
                    <div className="mt-3">
                        <p className="mb-1 font-medium text-sm">Image Placement</p>
                        <div className="flex flex-row gap-2 mb-3">
                            <Button className="flex flex-row border border-neutral-300 rounded-md px-4 py-[0.438rem] w-full duration-500 hover:border-black" onClick={handlePlacement}>
                                <img src={Left} alt="" className="mx-auto" />
                                <img src={Right} alt="" className="mx-auto" />
                            </Button>
                        </div>
                        <img src={image} alt="" className="border border-neutral-300 rounded-md h-40 w-full" />
                        <Button title="Remove Image" className="bg-neutral-900 px-4 py-2 text-white block mx-auto mt-3 duration-500 hover:opacity-80" onClick={removeImage} />
                    </div>
                </div>
                <div className="flex gap-4">
                    <Button className="px-4 py-2 w-full bg-black text-white duration-500 hover:opacity-80" title="Save" type="submit" />
                    <Button className="px-4 py-2 w-full text-red-500 duration-500 hover:bg-red-100" title="Discard" onClick={showWelcomeHandle} />
                </div>
            </form>
            <Button className="border border-neutral-300 p-[0.563rem] rounded-md absolute top-3 right-4 duration-500 hover:border-black" onClick={showWelcomeHandle}>
                <img src={Close} alt="" />
            </Button>
        </div>
    )
}

export default WelcomeScreen