const ProjectItem = () => {
    return(
        <div className="w-[200px] rounded-lg bg-yellow-400 mr-6 flex-wrap mt-4">
            <img className="w-[200px] rounded-t-lg" src="https://img.freepik.com/free-photo/selective-closeup-cute-kitten-floor_181624-58552.jpg?w=996&t=st=1710941066~exp=1710941666~hmac=cce23089806350d4bb7f6c8d574f80213fff80e27c9e930782100c5444f3fc10" alt="projectImage"/>
            <div className="flex justify-between p-3">
                <a href="" className="text-[12px] underline-offset-1 font-semibold">CODE &#8599;</a>
                <a href="" className="text-[12px]  font-semibold">WEBSITE &#8599;</a>
            </div>
        </div>
    )
}

export default ProjectItem