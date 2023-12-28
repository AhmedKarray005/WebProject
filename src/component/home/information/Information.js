import "./information.css"
import InformationData from"./InformationData"
import image3 from "../../images/shhh.jpg"
import image1 from "../../images/pricing.jpg"
import image2 from "../../images/services.jpg"

function information(){
    return(
        <div className="information">
            <h1>
            Our Mission         
               </h1>
            <p>
            Our mission is to empower and uplift the lives of people in Tunisia. Through our unwavering commitment to positive change, we strive to provide essential support, resources, and hope to those in need. Together, we aim to create a brighter and more equitable future for our community, one step at a time.            </p>
            <div className="informationCard">
                <InformationData
                image={image1}
                heading="Save The Children"
                text="Saving children ensures a better tomorrow. 
                Your contribution can provide them with a chance to grow , enabling a brighter future for all."
                />
                 <InformationData
                image={image2}
                heading="Shelter The Homeless"
                text="Sheltering the homeless offers hope and dignity.
                Your help provides a safe place and a fresh start for those in need."
                />
                 <InformationData
                image={image3}
                heading="raise awarness"
                text="Raising awareness sparks change. Your support can inspire action and make a real difference in our communities."
                />
            </div>
        </div>
    )
}
export default information;