
import location from '../assets/location.png'
import data from '../Components/data'

const travel = data.map(travel => console.log(travel))

export default function Travel(props){
    return (

        <div className="travel flex">
            <div className="travel-image">
                    <img src={props.img} alt="" />
            </div>
            <div className="travel-discription flex">
                <div className="location flex">

                    <img src= {location} alt="" />
                    <p>{props.state}</p>
                    </div>  
                  <h1>{props.city}</h1>

            <p className="date bold">{props.startDate} - {props.endDate}</p>
                <p className="disc">
                   { props.description}
                </p>
            </div>
            {/* <div className="travel-image">
                    <img src={photo1} alt="" />
            </div>
            <div className="travel-discription flex">
                <div className="location flex">

                    <img src= {location} alt="" />
                    <p>{props.state}</p>
                    </div>  
                  <h1>{props.city}</h1>

            <p className="date bold">{props.startDate} - {props.endDate}</p>
                <p className="disc">
                   { props.discription}
                </p>
            </div> */}
        </div>
    )
}


