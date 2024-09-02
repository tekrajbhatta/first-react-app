function Tailwindlearn() {
    // const ladyImage = "./pretty-smiling-lady.jpg";
    // import ladyImage from 
    return (
        <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800 my-10">
            <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto object-cover" src="https://img.freepik.com/free-photo/pretty-smiling-joyfully-female-with-fair-hair-dressed-casually-looking-with-satisfaction_176420-15187.jpg" alt="" width="384" height="512" />
            <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
            <blockquote>
                <p className="text-lg font-medium">
                “Tailwind CSS is the only framework that I've seen scale
                on large teams. It’s easy to customize, adapts to any design,
                and the build size is tiny.”
                </p>
            </blockquote>
            <figcaption className="font-medium">
                <div className="text-sky-500 dark:text-sky-400">
                Sarah Dayan
                </div>
                <div className="text-slate-700 dark:text-slate-500">
                Staff Engineer, Algolia
                </div>
            </figcaption>
            </div>
        </figure>
    )
}

export default Tailwindlearn;