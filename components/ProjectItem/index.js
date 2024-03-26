import ImageWithHoverText from "../ImageWithHoverText";

const ProjectItem = (props) => {
    
    const {details} = props;
    const {imageUrl,gitCodeLink,hostedUrl,name} = details
    return(
        <div className="w-[200px] rounded-lg bg-yellow-400 mr-0 md:mr-6 flex-wrap mt-4">
             <ImageWithHoverText
        src={imageUrl}
        alt="Image Alt Text"
        text={name}
        />
            <div className="flex justify-between p-3">
                <a href={gitCodeLink}target="_blank"  className="text-[12px] underline-offset-1 font-semibold">CODE &#8599;</a>
                <a href={hostedUrl} target="_blank" className="text-[12px]  font-semibold">WEBSITE &#8599;</a>
            </div>
        </div>
    )
}

export default ProjectItem