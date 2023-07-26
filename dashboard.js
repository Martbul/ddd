import {html} from '../../node_modules/lit-html/lit-html.js';
import { getAllPets } from '../api/data.js';

const dashboardTemplate = (pets) => html`
  <section id="dashboard">
            <h2 class="dashboard-title">Services for every animal</h2>
            <div class="animals-dashboard">
               <div class="animals-board">
               ${pets.length !== 0 

               
                  
                  ?html`
                     ${pets.map(p=>html` <article class="service-img">
                        <img class="animal-image-cover" src="${p.image}">
                    </article>
                    <h2 class="name">${p.name}</h2>
                    <h3 class="breed">${p.breed}</h3>
                    <div class="action">
                        <a class="btn" href="/details/${p._id}">Details</a>
                    </div>
                </div>`)}`
                   
                
                :html` <!--If there is no pets in dashboard-->
                <div>
                    <p class="no-pets">No pets in dashboard</p>
                </div>`}
                
               
            </div>
        </section>
`

export async function showDashboard(ctx) {

   const pets = await getAllPets()

   ctx.render(dashboardTemplate(pets))
}