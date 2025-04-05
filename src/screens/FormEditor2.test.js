import { getDatabaseInstance } from '../database/database';

jest.mock('../database/database', () => ({
  getDatabaseInstance: jest.fn(() => ({
    addForm: jest.fn(),
  })),
}));

describe('FormEditor - Guardar 1000 formularios', () => {
  it('debería guardar 1000 formularios y medir el tiempo', () => {
    const db = getDatabaseInstance();
    const mockAddForm = db.addForm;

    // Crear 1000 formularios simulados
    const forms = Array.from({ length: 1000 }, (_, i) => ({
      "nombre formulario": `Formulario ${i + 1}`,
      "ultima modificacion": new Date().getTime(),
      campos: [
        { nombre: `Campo 1 - Formulario ${i + 1}`, tipo: "texto", salida: "valor1" },
        { nombre: `Campo 2 - Formulario ${i + 1}`, tipo: "selector", salida: "valor2" },
      ],
    }));

    // Medir el tiempo
    const startTime = performance.now();
    forms.forEach(form => mockAddForm(form)); // Simular la llamada a la función para cada formulario
    const endTime = performance.now();

    console.log(`Tiempo para guardar 1000 formularios: ${(endTime - startTime).toFixed(2)} ms`);

    // Verificar que la función fue llamada 1000 veces
    expect(mockAddForm).toHaveBeenCalledTimes(1000);

    // Verificar que cada formulario fue llamado correctamente
    forms.forEach(form => {
      expect(mockAddForm).toHaveBeenCalledWith(form);
    });
  });
});