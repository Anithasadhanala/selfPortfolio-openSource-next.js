const SkillItem = (props) => {

    const {details} = props
    const {name,image} = details

return(
    <div className="border-2 border-yellow-400 rounded-xl flex justify-around p-3 mr-3 mb-3">
        <img className="w-[20px] h-[20px] mr-2" src={image} alt="skillImage"/>
        <p className="text-white">{name}</p>
    </div>
)
}

    export default SkillItem