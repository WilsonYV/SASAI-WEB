<template>
  <div id="app">
    <ribbon></ribbon>
    <div id="app-header">
      <jhi-navbar></jhi-navbar>
    </div>
    <b-colapse></b-colapse>
    <aside v-if="authenticated">
      <h2></h2>
      <form>
        <ul class="ListaGeneral">
          <li>
            <a>
              <b-link :to="'Dashboard'">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-house-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"
                  />
                </svg>
                &nbsp; Dashboard</b-link
              >
            </a>
          </li>
          <li>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-currency-dollar"
                viewBox="0 0 16 16"
              >
                <path
                  d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718H4zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73l.348.086z"
                />
              </svg>
              &nbsp; Operaciones
            </a>
          </li>
          <li>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-people-fill"
                viewBox="0 0 16 16"
              >
                <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                <path
                  fill-rule="evenodd"
                  d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z"
                />
                <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
              </svg>
              &nbsp; Clientes
            </a>
          </li>
          <li>
            <a>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-graph-up" viewBox="0 0 16 16">
                <path
                  fill-rule="evenodd"
                  d="M0 0h1v15h15v1H0V0Zm14.817 3.113a.5.5 0 0 1 .07.704l-4.5 5.5a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61 4.15-5.073a.5.5 0 0 1 .704-.07Z"
                />
              </svg>
              &nbsp; Reportes
            </a>
          </li>
          <li>
            <a href="Inicio">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-file-earmark-spreadsheet-fill"
                viewBox="0 0 16 16"
              >
                <path d="M6 12v-2h3v2H6z" />
                <path
                  d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0zM9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1zM3 9h10v1h-3v2h3v1h-3v2H9v-2H6v2H5v-2H3v-1h2v-2H3V9z"
                />
              </svg>
              &nbsp; Contratos
            </a>
            <ul>
              <li>
                <a>
                  <p>PLD</p>
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#"> </a>
          </li>
          <li>
            <a href="#"> </a>
          </li>
          <li>
            <a href="#"> </a>
          </li>
          <li>
            <a href="#"> </a>
          </li>
          <li>
            <a href="#"> </a>
          </li>
          <li>
            <a href="#"> </a>
          </li>
          &nbsp; &nbsp;
          <li>
            <a>
              Favoritos &nbsp &nbsp
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-plus-circle"
                viewBox="0 0 16 16"
              >
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
              </svg>
              <hr />
            </a>

            <a>Reporte de Operaciones</a><br />
            <a>Cliente Importante</a><br />
            <a>Operacion Importante</a><br />
          </li>
          &nbsp; &nbsp; &nbsp; &nbsp;
          <li>
            <hr />
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-person-circle"
                viewBox="0 0 16 16"
              >
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                <path
                  fill-rule="evenodd"
                  d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                />
              </svg>
              &nbsp; Usuario
            </a>
          </li>
        </ul>
      </form>
    </aside>
    <div class="container-fluid" v-if="authenticated">
      <div class="card jh-card">
        <router-view></router-view>
      </div>
      <b-modal id="login-page" hide-footer lazy>
        <span data-cy="loginTitle" slot="modal-title" id="login-title">Iniciar sesión</span>
        <login-form></login-form>
      </b-modal>

      <jhi-footer></jhi-footer>
    </div>
    <div class="container-fluid" v-else="authenticated">
      <div class="home row">
        <span class="hipster img-fluid2 rounded"></span>
      </div>
      <b-modal id="login-page" hide-footer lazy>
        <span data-cy="loginTitle" slot="modal-title" id="login-title">Iniciar sesión</span>
        <login-form></login-form>
      </b-modal>
    </div>
  </div>
</template>

<script lang="ts" src="./app.component.ts"></script>
