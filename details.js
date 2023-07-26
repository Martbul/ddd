import {html} from '../../node_modules/lit-html/lit-html.js';
import { deletePetById, getPetById } from '../api/data.js';

const detailsTemplate = (pet, user, onDelete) => {
   console.log(user)

   let isCreator = pet._ownerId === user?._id
   console.log(isCreator)

return html`
  <section id="detailsPage">
            <div class="details">
                <div class="animalPic">
                    <img src="${pet.image}">
                </div>
                <div>
                    <div class="animalInfo">
                        <h1>Name: ${pet.name}</h1>
                        <h3>Breed: ${pet.breed}</h3>
                        <h4>Age: ${pet.age}</h4>
                        <h4>Weight: ${pet.weight}</h4>
                        <h4 class="donation">Donation: 0$</h4>
                    </div>

                     <div class="actionBtn">
                    ${user 
                     
                     ?html`<!-- if there is no registered user, do not display div-->
                   
                   
                        ${isCreator 
                           
                           ?html` <!-- Only for registered user and creator of the pets-->
                        <a href="/edit/${pet._id}" class="edit">Edit</a>
                        <a href="#" class="remove" @click=${onDelete}>Delete</a>`
                        
                        :html`
                         <!--(Bonus Part) Only for no creator and user-->
                        <a href="#" class="donate">Donate</a>`}
                       
                        
                    </div>`
                    
                    :''}
                   
                    
                    
                    
                </div>
            </div>
        </section>
`}

export async function showDetails(ctx) {

   const id = ctx.params.id
   const pet = await getPetById(id)


   ctx.render(detailsTemplate(pet, ctx.user, onDelete))


   async function onDelete(){
      try{
         await deletePetById(id)
         ctx.page.redirect('/')
      }catch(err){
         alert(err.message)
      }
   }
}