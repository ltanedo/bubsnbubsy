import Person from './Person'
import Bubsnbubsy from "../images/Cherry Blossoms 2.png"
import Carlo from "../images/Wall St Bubs.jpg"
import Marin from "../images/macaronbubsy.jpg"
import '../App.css';


export default function(props) {
    return (
      <div class="container my-3 py-5 text-center"> 

       <div className='container my-3 py-5 text-center '>
              <h1 className='header'>Meet Our Team</h1>
              <p>Our team works hard to come up with the cutest couple cartoons around!</p>
       </div>

            <div class="row justify-content-center" id='team'>
            <Person image={Bubsnbubsy}
                    name={"BubsnBubsy"}
                    role={"BubsnBubsy"}
                    description={"Bubs and Bubsy have been dating since their college years. They are currently residing in Maryland USA. Together they enjoy playing games, traveling, eating, gyming, and taking care of their dog Rupert. "}/>
            <Person image={Carlo}
                    name={"Jose Carlo Escober"}
                    role={"Bubs"}
                    description={"Born in the Philippines, lived in Ireland and currently living in the United States. He has many hobbies including making videos, playing the guitar, programming, cooking and running."}/>
             <Person image={Marin}
                    name={"Marin Fialla"}
                    role={"Bubsy"}
                    description={"Born in China, grew up in Florida and New York. She enjoys playing pickle ball, trying new foods, going to festivals, and watching netflix."}/>

            

   
        </div>



        </div>
    )
}