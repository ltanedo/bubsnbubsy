import Person from './Person'

import Carlo from "../images/Carlo.png"
import Marin from "../images/Marin.png"
import Osman from "../images/Osman.png"
import Mikee from "../images/Mikee.png"


export default function(props) {
    return (
      <div class="container my-3 py-5 text-center"> 

       <div className='container my-3 py-5 text-center'>
              <h1>Our Team</h1>
              <p>Our team works hard to come up with the cutest couple cartoons around!</p>
       </div>

        {/* <div class="row mb-5"> */}
      
            <div class="row" id='team'>
            <Person image={Carlo}
                    name={"Carlo Escobar"}
                    role={"The Finisher"}
                    description={"A YT creator who is an expert sandwitch packer.  This guy can help ya get your taxes done or buy a forklift."}/>
             <Person image={Marin}
                    name={"Marin Fialla"}
                    role={"The Spirit"}
                    description={"The heart of the team, generates inspiration and keeps all of our boys on track!"}/>
             <Person image={Osman}
                    name={"Osman"}
                    role={"The Chad"}
                    description={"Not only is this guy a Tech Lead, people say he's a chad (even though that's not his real name"}/>
             <Person image={Mikee}
                    name={"Michael V."}
                    role={"Himself..."}
                    description={"While he may not be there all the time, his support really keeps the team going!"}/>
            

        {/* </div> */}
        </div>
        </div>
    )
}