

// each Contact Icon calls this component 
const ContactIcon = (props) => {
   
    const {details} = props
    const {websiteLink,icon} =details

    return(
        <a className="mb-6 h-[35px] w-[35px] mr-6" target="_blank" href={websiteLink}>
            {icon}
        </a>
    )
}

export default ContactIcon