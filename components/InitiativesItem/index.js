const InitiativesItem = (props) => {
 
    const {details} = props;
    const {title,organisation,websiteUrl,description} = details;


    return(
        <div className="border-2 border-yellow-400 p-4 w-screen md:w-[800px] rounded-xl mb-4">
            <div className="flex justify-between flex-col md:flex-row">
                <h1 className="text-white font-bold text-[25px]">{title} | {organisation}</h1>
                <a href={websiteUrl} target="_blank" className="text-blue-700 font-bold text-[20px]">visit &#8599;</a>
            </div>
            <p className="text-white font-normal md:font-medium text-[15px]">{description}</p>
        </div>
    )
}

export default InitiativesItem