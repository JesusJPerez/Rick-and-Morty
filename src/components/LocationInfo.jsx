import "./styles/LocationInfo.css"

const LocationInfo = ({location}) => {


  return (
    <article className="info">
        <h2 className="info__title" >{location?.name}</h2>
        <ul className="container-lis">
            <li className="lis"><span className="lis-int">Type: </span><span>{location?.type}</span></li>
            <li className="lis"><span className="lis-int">Dimension: </span><span>{location?.dimension}</span></li>
            <li className="lis"><span className="lis-int">Population: </span><span>{location?.residents.length}</span></li>
        </ul>
    </article>
  )
}

export default LocationInfo