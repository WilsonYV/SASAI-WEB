<template>
  <div>
    <div class="EncabezadoPJ">
      <h2>&nbsp; Alta de Contrato Persona Fisica</h2>
      <hr />
    </div>

    <div class="ClienteGeneral">
      <h5>&nbsp; Cliente</h5>
      <label>Nombre(s) </label>
      <input />
      &nbsp;
      <label>Apellido Paterno </label>
      <input />
      &nbsp;
      <label>Apellido Materno </label>
      <input />
      <br />
      <label>Genero </label>
      <select name="Genero">
        <option value="Masculino">Masculino</option>
        <option value="Femenino" selected>Femenino</option>
        <option value="Otro">Otro</option>
        <option value="Otros">Otros</option>
      </select>
      &nbsp;
      <label>Estado Civil </label>
      <select name="Estado Civil">
        <option value="Soltero">Soltero</option>
        <option value="Casado" selected>Casado</option>
        <option value="Divorciado">Divorciado</option>
      </select>
      &nbsp;
      <label>Fecha de Nacimiento</label>
      <input type="date" />
    </div>

    <progress max="100" value="50">10%</progress>

    <div id="SubMenuPF">
      <ul>
        <li><a href="AltaPF">D.Generales</a></li>
        <li><a>Domiclio</a></li>
        <li><a>Empleo</a></li>
        <li><a>Cuentas Bancarias</a></li>
        <li><a>Cotitulares</a></li>
        <li><a>Beneficiarios</a></li>
        <li><a>Perfil Operacional</a></li>
        <li><a>Perfil de Inversion</a></li>
        <li><a>Aceptacion D.</a></li>
        <li><a>Otros</a></li>
      </ul>
    </div>
    <div class="ClienteGeneralDatos">
      <h5>&nbsp; Cliente</h5>
      <hr />
      <label for="input1">RFC</label>
      <br />
      <input />
      <br />
      <label for="input1">FIEL</label>
      <br />
      <input />
      <br />
      <label for="input1">CURP</label>
      <br />
      <input />
      <br />
      <label for="input1">Pais de Nacimiento</label>
      <br />
      <input />
      <br />
      <label for="input1">Nacionalidad</label>
      <br />
      <input />
      <br />
      <label for="input1">Actividad</label>
      <br />
      <input />
      <br />
      <label for="input1">Ocupacion</label>
      <br />
      <input />
      <br />
      <label for="input1">Tipo de Identificacion</label>
      <br />
      <input />
      <br />
      <hr />
      <p>&nbsp; Oficina</p>
      <hr />

      <label for="input1">Oficina</label>
      <br />
      <input />
      <br />
      <label for="input1">No de Contrato</label>
      <br />
      <input />
      <br />
      <label for="input1">Nombre del Asesor</label>
      <br />
      <input />
      <br />
      <label for="input1">Comision</label>
      <br />
      <input />
      <br />
      <label for="input1">Clave</label>
      <br />
      <input />
      <br />
      <label for="input1">Es persona fisica con actividad empresarial?</label>
      <br />
      <input type="radio" name="SINO" value="Si" id="radiob" />Si<br />
      <input type="radio" name="SINO" value="No" id="radiob" />No<br />

      <br />
      <label for="input1">Regimen de la cuenta</label>
      <br />
      <select name="Regimen">
        <option value="Solidaria">Solidaria</option>
        <option value="Indiviudal" selected>Indiviudal</option>
        <option value="Mancomaunada">Indiviudal</option>
      </select>
      <br />
      <div class="botones">
        <button name="button">Salvar</button>
        <button name="button">Continuar</button>
      </div>
      <hr />
      <label for="input1"> &nbsp; Documentos</label>
      <br />
      <div id="CajaDocumentos">
        <div id="left">
          <p>
            &nbsp; Arrastra el documento para cargar
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-cloud-download"
              viewBox="0 0 16 16"
            >
              <path
                d="M4.406 1.342A5.53 5.53 0 0 1 8 0c2.69 0 4.923 2 5.166 4.579C14.758 4.804 16 6.137 16 7.773 16 9.569 14.502 11 12.687 11H10a.5.5 0 0 1 0-1h2.688C13.979 10 15 8.988 15 7.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 2.825 10.328 1 8 1a4.53 4.53 0 0 0-2.941 1.1c-.757.652-1.153 1.438-1.153 2.055v.448l-.445.049C2.064 4.805 1 5.952 1 7.318 1 8.785 2.23 10 3.781 10H6a.5.5 0 0 1 0 1H3.781C1.708 11 0 9.366 0 7.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383z"
              />
              <path
                d="M7.646 15.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 14.293V5.5a.5.5 0 0 0-1 0v8.793l-2.146-2.147a.5.5 0 0 0-.708.708l3 3z"
              />
            </svg>
          </p>
        </div>

        <div id="right">
          <p>&nbsp; O abre la ventana para cargar el documento</p>
          <button name="button">Cargar</button>
        </div>
      </div>
    </div>
  </div>
</template>
