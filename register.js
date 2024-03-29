import {html} from '../../node_modules/lit-html/lit-html.js';
import { login, register } from '../api/auth.js';

const registerTemplate = (onRegister) => html`
<section id="registerPage">
            <form class="registerForm" @submit=${onRegister}>
                <img src="./images/logo.png" alt="logo" />
                <h2>Register</h2>
                <div class="on-dark">
                    <label for="email">Email:</label>
                    <input id="email" name="email" type="text" placeholder="steven@abv.bg" value="">
                </div>

                <div class="on-dark">
                    <label for="password">Password:</label>
                    <input id="password" name="password" type="password" placeholder="********" value="">
                </div>

                <div class="on-dark">
                    <label for="repeatPassword">Repeat Password:</label>
                    <input id="repeatPassword" name="repeatPassword" type="password" placeholder="********" value="">
                </div>

                <button class="btn" type="submit">Register</button>

                <p class="field">
                    <span>If you have profile click <a href="/login">here</a></span>
                </p>
            </form>
        </section>
`


export async function showRegister(ctx) {

   ctx.render(registerTemplate(onRegister))

    
async function onRegister(e){
   e.preventDefault()


   const formData = new FormData(e.target)
   const data = Object.fromEntries(formData)

   if(!data.email|| !data.password){
      alert('Please enter a password')
      return
   }


   try{
      await register(data.email, data.password)

      ctx.page.redirect('/')
   }catch(err){
      alert(err.message)
      return
   }
}
}