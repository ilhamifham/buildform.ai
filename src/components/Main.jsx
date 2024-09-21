function Main({ children }) {
    return (
        <main className="p-2 h-screen w-full">
            <div className="border border-neutral-300 rounded-md sm:h-full shadow-md">
                {children}
            </div>
        </main>
    )
}

export default Main