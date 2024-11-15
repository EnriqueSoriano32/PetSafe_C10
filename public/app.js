if('serviceWorker' in navigator)
{
    navigator.serviceWorker.register('/sw.js')
        .then(registrado => console.log("Service worker registrado", registrado))
        .catch(error => console.log("Falló la instalación", error));
} else {
    console.log("Service workers no soportados")
}