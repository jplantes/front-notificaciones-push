# Como utilizar la app

Esta es una aplicación demo para recibir notificaciones push en el navegador web desde un [servidor](https://github.com/jplantes/server-notificaciones-push).


### Descarga del proyecto

> Es importante que el servidor este corriendo anteriormente

clonamos el proyecto y seguimos los siguientes pasos:

1. Creamos en el archivo enviroment.ts las siguientes variables

```
  apiRoot: <base_URL del servidor>,
  publicNotiKey: <misma clave publica que se coloca en el servidor>
```

2. Instalamos las dependencias

```
npm install
```

3.- Lo echamos a andar

```
ng serve
```
