import 'bootstrap/dist/css/bootstrap.min.css';
import "../style.css"


export default function(props) {
    return (
        <div class="col-lg-3 col-md-6 pt-5">
        <div class="card">
          <div class="card-body">
          <img src={props.image} alt="" class="img-fluid rounded-circle w-50 mb-3"/>
          <h3>{props.name}</h3>
          <h5>{props.role}</h5>
          <p>{props.description}</p>
          <div class="d-flex flex-row justify-content-center">
            <div class="p-4"><a href="https://www.instagram.com/mengcomedia/"> <i class="fa fa-twitter"></i></a> </div>
            <div class="p-4"><a href="https://www.instagram.com/mengcomedia/"> <i class="fa fa-instagram"></i></a></div>
          </div></div>
        </div>
      </div>
    )
}