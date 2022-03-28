
function Ship(props) {
  return (
    <div>
      <div className="title">
        <p>{props.name}</p>
      </div>
      <div className="detailbox">
        <p className="details">crew: {props.crew}</p>
        <p className="details">speed: {props.speed}</p>
        <p className="details">class: {props.class}</p>
      </div>

    </div>
  )
}

export default Ship