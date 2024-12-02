// Función para cambiar el color de fondo cuando se presiona el botón
document.getElementById('cambiaColorBtn').addEventListener('click', function () {
    // Colores posibles para el fondo
    const colores = ['#2c3e50', '#34495e', '#16a085', '#e74c3c', '#8e44ad'];
    // Seleccionar un color aleatorio
    const colorAleatorio = colores[Math.floor(Math.random() * colores.length)];

    // Cambiar el color de fondo del body
    document.body.style.backgroundColor = colorAleatorio;
});