<template>
  <div class="modal-body">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <b-alert show data-cy="loginError" variant="danger" v-if="authenticationError">
          <strong>¡Error al iniciar sesión!</strong> Verifique sus credenciales y vuelva a intentarlo.
        </b-alert>
      </div>
      <div class="col-md-8">
        <b-form role="form" v-on:submit.prevent="doLogin()">
          <b-form-group label="Nombre de usuario" label-for="username">
            <b-form-input id="username" type="text" name="username" autofocus placeholder="Tu usuario" v-model="login" data-cy="username">
            </b-form-input>
          </b-form-group>
          <b-form-group label="Contraseña" label-for="password">
            <b-form-input
              id="password"
              type="password"
              name="password"
              v-model.trim="name"
              placeholder="Tu contraseña"
              v-model="password"
              data-cy="password"
            >
            </b-form-input>
          </b-form-group>
          <b-form-checkbox id="rememberMe" name="rememberMe" v-model="rememberMe" checked>
            <span>Recordarme</span>
          </b-form-checkbox>
          <div>
            <b-button data-cy="submit" type="submit" variant="primary">Entrar</b-button>
          </div>
        </b-form>
        <p></p>
        <div>
          <b-alert show variant="warning">
            <b-link :to="'/account/reset/request'" class="alert-link" data-cy="forgetYourPasswordSelector"
              >¿Olvidaste tu contraseña?</b-link
            >
          </b-alert>
        </div>
        <div>
          <b-alert show variant="warning">
            <span>¿Todavía no tienes una cuenta?</span>
            <b-link :to="'/register'" class="alert-link">Registre una nueva cuenta</b-link>
          </b-alert>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./login-form.component.ts"></script>
