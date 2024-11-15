<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Confirmación de Contacto</title>
    <link rel="stylesheet" href="/email.css">
</head>
<body class="w-full h-full flex justify-center items-center bg-gray-100 p-6">
    <div class="bg-white max-w-md w-full p-6 rounded-lg shadow-lg">
        <h1 class="text-2xl font-bold text-blue-600 mb-4">¡Hola, {{ $name }}!</h1>
        <p class="text-gray-700 mb-2">Una persona está interesada en adoptar tu mascota.</p>
        <p class="text-gray-700 mb-4">Revisa tu bandeja de mensajes para ponerte en contacto.</p>
        <p class="text-gray-700 mb-6">Gracias por usar nuestra aplicación.</p>
        <p class="text-gray-700 font-semibold">Saludos,</p>
        <p class="text-gray-700 font-semibold">El Equipo de PetSafe</p>
        <div class="mt-6">
            <a href="https://tuweb.com" class="inline-block text-center w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600">
                Ir a PetSafe
            </a>
        </div>
    </div>
</body>
</html>