import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';


export default function(props) {
    return (
        <div class="col-lg-3 col-md-6 pt-5 ">
        <div class="card ">
          <div class="card-body">
          <img src={props.image} alt="" class="img-fluid rounded w-80 mb-3"/>
          <h3>{props.name}</h3>
          <h5>{props.role}</h5>
          <p>{props.description}</p>

          </div>
        </div>
      </div>
    )
}