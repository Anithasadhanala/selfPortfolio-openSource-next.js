import InitiativesItem from "../InitiativesItem"

const Blog = () =>{
    return(
        <div className="bg-black min-h-screen w-screen flex flex-col justify-center items-center pt-[100px] pb-[100px]">
            <h1 className="text-yellow-400 font-bold   text-[40px] mb-4"><span className="text-white">MY</span>  BLOGS</h1>

            <ul className="">
                <InitiativesItem/>
            </ul>
        </div>
    )
}

export default Blog