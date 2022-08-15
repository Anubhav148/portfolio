function Navbar() {
    return (
        <nav className="container mx-auto sticky top-0 z-10 bg-slate-900 pt-4 pb-4 px-2 md:px-4 flex items-center justify-between shadow-blue-700">
            <div className="flex justify-between items-center space-x-10">
                <h1 className="text-xl md:text-5xl">A<span className='blur-[0.5px]'>K</span><span className="blur-[1px]">S...</span></h1>
            </div>
        </nav>
    );
}

export default Navbar;