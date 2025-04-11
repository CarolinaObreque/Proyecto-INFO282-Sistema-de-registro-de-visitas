# Mejora de documentación - Formulapp

## 1. Requerimientos vs Especificaciones

### Requerimientos (Qué necesita el sistema para funcionar)
- **Sistema operativo:** Android 5.0 o superior, o iOS 11.0 o superior.
- **Cámara:** El dispositivo debe tener una cámara funcional.
- **Almacenamiento:** Al menos 250 MB de espacio libre.
- **Permisos necesarios:**
  - Acceso a la cámara.
  - Acceso a archivos del dispositivo.

### Especificaciones (Cómo se comporta el sistema)
- Creación de formularios personalizados con campos tipo texto, fecha, hora, selectores e imágenes.
- Soporte para validaciones como "solo letras", "solo números", "email", etc.
- Posibilidad de rellenar campos automáticamente usando QR (`rellenarQR: true`).
- Exportación e importación de formularios y respuestas en formato JSON.

---

## 2. Requisitos funcionales y no funcionales

### Requisitos funcionales
- Seleccionar, rellenar y guardar formularios.
- Crear, editar, eliminar, importar y compartir plantillas.
- Compartir y eliminar respuestas.
- Cambiar el identificador del dispositivo dentro de la aplicación.

### Requisitos no funcionales
- La aplicación funciona completamente sin conexión a internet.
- Interfaz amigable para usuarios con poca experiencia tecnológica.
- Los datos se exportan en formato JSON compatible con otras plataformas.
- Funciona correctamente en dispositivos móviles con recursos limitados.

---

## 3. Modelo arquitectónico

- **Orientada a datos locales:** Utiliza almacenamiento interno y exportación/importación de archivos JSON para compartir información.
- **Offline:** Toda la funcionalidad principal está disponible sin necesidad de conexión a internet.

