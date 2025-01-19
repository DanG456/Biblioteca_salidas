<template>
  <div>
    <h1>Iniciar sesión</h1>
    <div class="mb-3">
      <label for="exampleFormControlInput1" class="form-label"
        >Correo: </label
      >
      <input
        type="email"
        class="form-control"
        id="login-email"
        v-model="user_email"
      />
    </div>
    <div class="mb-3">
      <label for="inputPassword5" class="form-label"
        >Contraseña: </label
      >
      <input
        type="password"
        class="form-control"
        id="inputPassword5"
        v-model="user_password"
      />
      <div id="passwordHelpBlock" class="form-text">
        La contraseña debe tener de 8 a 20 caracteres de longitud. No puede contener espacios o emojis. Se recomienda el uso de caracteres especiales
      </div>
    </div>
    <button type="button" class="btn btn-dark" id="submit-button" @click="sendLoginInfo(user_email,user_password)">Iniciar sesion</button>
    <br>
    <div><nuxt-link to="/create_account"><p id="create_account_link">¿No tienes cuenta? Crea una</p></nuxt-link></div>
  </div>
</template>

<script>
definePageMeta({
  layout: "authentication",
});
export default {
  data(){
    return {
      user_email: '',
      user_password: ''
    }
  },
  methods:{
    async sendLoginInfo(user_email,user_password){
      try{
        const response = await $fetch(`${config.public.BACKEND_URL}/login`, {
        method: 'POST',
        body: {
          user_email: user_email,
          user_password: user_password
        }
      })
      console.log('response: ',response)
      }catch(error){
        console.log('Error con la solicitud: ',error)
      }
    }
  }
}
</script>

<style scoped>
.create_account_link{
  margin-top: 10px;
}
</style>