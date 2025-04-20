# PFB_Proveedor_Perfecto

Proyecto final de Bootcamp

## Pendiente de redactar:

- Instalar

## Instalación del proyecto

1. Instalar las dependencias necesarias con el comando `npm install` o `npm i`.

2. Instalar los siguientes paquetes:

- nodemon, morgan, express, sharp
  Mediante el comando npm i "nombre_del_paquete"
  Por ejemplo npm i express

3. Crear una base de datos para el proyecto.

4. Renombrar el fichero `.env.example` a `.env` y cubrir los campos. Es importante utilizar como nombre de la base de datos el mismo que ha sido utilizado en el paso 2.

5. Ejecutar el comando `npm run dev`.

### Configuración Eslint

1. Comprobar que tenemos instalada la extensión.

2. Instalar la dependencia en el proyecto correspondiente.

3. Crear un fichero de configuración `.eslint.config.js` en el proyecto mediante el comando `npx eslint --init`.

4. Durante el proceso de instalación aceptamos cualquier nueva dependencia que nos sugiera tecleando `y` y pulsando enter.

5. A continuación respondemos a las preguntas de la siguiente manera:

   - How would you like to use ESLint? To check syntax and find problems.
   - What type of modules does your project use? None of these.

   - Which framework does your project use? None of these.

   - Does your project use TypeScript? No.

   - Where does your code run? Node.

   - Would you like to install them now? Yes.

   - Which package manager do you want to use? npm.

### Configuración Prettier

1. Comprobar que tenemos instalada la extensión.

2. Instalar la dependencia en el proyecto correspondiente.

3. Crear manualmente un fichero de configuración `.prettierrc.json` con el siguiente contenido:

   ```json
   {
     "useTabs": false,
     "tabWidth": 2,
     "semi": true,
     "singleQuote": true
   }
   ```

4. Si es la primera vez que ejecutamos Prettier en nuestro Visual Studio Code tendremos que realizar una configuración a mayores:

   - Abrir la paleta de comandos.

   - Entrar en `Preferences: Open Settings (UI)`.

   - Buscar `Editor: Format On Save` y marcar.

   - Buscar `Editor: Tab Size` y establecer el valor 4.

   - Buscar `Prettier: Semi` y marcar.

   - Buscar `Prettier: Single Quote` y marcar.

   - Buscar `Prettier: Use Tabs` y desmarcar.

5. Del mismo, modo, si es la primera vez que preparamos Prettier, debemos seleccionarlo como formateador por defecto. Entramos en cualquier fichero con extensión `.js`, hacemos click en `Format Document With...` > `Configure Default Formatter...` y seleccionamos `Prettier`.
