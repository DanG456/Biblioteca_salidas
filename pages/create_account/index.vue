<template>
    <div>
        <h1>Crear cuenta</h1>
    <div class="mb-3">
      <label for="user_name_input">Elije tu nombre de usuario: </label>
      <input 
        type="text" 
        class="form-control"
        id="user_name_input"
        v-model="user_name"
        />
      <label for="email_input" class="form-label"
        >Ingresa tu correo electronico: </label
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
    <button type="button" class="btn btn-dark" id="submit-button" @click="sendAccountInfo(user_name,user_email,user_password)">Crear cuenta</button>
    <div><nuxt-link to="/login"><p id="login_link">¿Ya tienes cuenta? Inicia sesión</p></nuxt-link></div>
    </div>
</template>

<script>
definePageMeta({
  layout: "authentication",
});
export default {
    data(){
        return {
            user_name: '',
            user_email: '',
            user_password: ''
        }
    },
    methods: {
        async sendAccountInfo(user_name,user_email,user_password){
          const config = useRuntimeConfig();
            try{
                const response = await $fetch(`${config.public.BACKEND_URL}/create_account`,{
                    method: 'POST',
                    body: {
                        user_name: user_name,
                        email: user_email,
                        password: user_password
                    }
                })
            }catch(err){
                console.log('Error con la solicitud: ',err)
            }
        }
    }
}
</script>