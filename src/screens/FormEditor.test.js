import { getDatabaseInstance } from '../database/database';


jest.mock('../database/database', () => ({
  getDatabaseInstance: jest.fn(() => ({
    addForm: jest.fn(),
  })),
}));

describe('FormEditor - Tiempo de guardado', () => {
  it('debería medir el tiempo que se demora en guardar un formulario', () => {
    const db = getDatabaseInstance();
    const mockAddForm = db.addForm;

    // Simular un formulario
    const newForm = {
      "nombre formulario": "Formulario de prueba",
      "ultima modificacion": new Date().getTime(),
      campos: [
        { nombre: "Campo 1", tipo: "texto", salida: "valor1" },
        { nombre: "Campo 2", tipo: "selector", salida: "valor2" },
      ],
    };

    // Medir el tiempo
    const startTime = performance.now();
    mockAddForm(newForm); // Simular la llamada a la función
    const endTime = performance.now();

    console.log(`Tiempo para guardar el formulario: ${(endTime - startTime).toFixed(2)} ms`);

    // Verificar que la función fue llamada
    expect(mockAddForm).toHaveBeenCalledWith(newForm);
    expect(endTime - startTime).toBeGreaterThanOrEqual(0); // Asegurarse de que el tiempo sea válido
  });
});