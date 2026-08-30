# Bases de Angular 2026

Este proyecto recopila las bases fundamentales del desarrollo en **Angular (v19+)** utilizando el paradigma moderno de reactividad sin zona (*Zoneless*), señales (*Signals*) y componentes autónomos (*Standalone Components*).

El desarrollo de esta aplicación fue realizado por **Francisco Santiago** como parte de su capacitación práctica en el framework Angular, tomando el curso de Udemy **"Angular: De cero a experto"** impartido por Fernando Herrera.

---

## Contenido Académico Implementado

El código de este repositorio abarca de forma práctica los temas y conceptos cubiertos en las secciones 4 y 5 del curso:

### Sección 4: Angular (Bases)
*   **Estructura del Proyecto**: Comprensión y manejo de archivos generados por Angular CLI (`angular.json`, `package.json`, etc.).
*   **Componentes Standalone**: Creación y organización de componentes autónomos sin depender de módulos tradicionales (ej. `CounterComponent`, `HeroComponent`).
*   **Reactividad con Signals**: Implementación de señales (`signal`) para el manejo eficiente y directo de estados locales, reduciendo la necesidad del mecanismo tradicional de detección de cambios.
*   **Señales Computadas**: Uso de `computed` para derivar estados reactivos que se recalculan de forma inteligente únicamente cuando sus dependencias cambian.
*   **Uso de Pipes**: Aplicación de transformaciones básicas en las vistas utilizando pipes incorporados de Angular (ej. `UpperCasePipe`).
*   **Enrutador Básico**: Definición inicial y configuración de rutas de la aplicación.

### Sección 5: Expandir Bases
*   **Navegación e Interfaz**: Creación de una barra de navegación integrada mediante el uso de `RouterLink` y resaltado dinámico de la ruta activa con `RouterLinkActive`.
*   **Control Flow Moderno**: Reemplazo de las antiguas directivas estructurales (`*ngIf`, `*ngFor`) por la sintaxis nativa de flujo de control:
    *   `@for` para iteraciones dinámicas sobre listas.
    *   `@if` para el renderizado condicional de elementos en el DOM.
*   **Directivas y Clases Dinámicas**: Enlace de clases condicionales utilizando `NgClass` y expresiones evaluadas mediante `computed`.
*   **Comunicación entre Componentes (Signals-based)**:
    *   Uso de `input()` para recibir datos desde componentes padres.
    *   Uso de `output()` para emitir eventos personalizados y comunicar cambios hacia componentes padres.
*   **Modularización de Lógica**: Separación del maquetado y comportamiento mediante componentes especializados (ej. `character-list` y `character-add`).
*   **Servicios e Inyección de Dependencias**: Centralización y desacoplamiento del estado global a través de un servicio (`DragonballService`) inyectado dinámicamente con la función `inject()`.
*   **Persistencia con Effects**: Sincronización automática del estado del servicio con el almacenamiento del navegador (`localStorage`) mediante el uso de reactividad por efectos laterales (`effect()`).
*   **Estrategias de Despliegue**: Preparación de la aplicación para alojamiento estático, configurando estrategias de enrutamiento basadas en Hash (`HashRouter`) y reglas de redirección en el servidor (`_redirects`).

---

## Instrucciones para Ejecución Local

Para ejecutar y probar este proyecto en tu entorno local, sigue los siguientes pasos:

### 1. Clonar el repositorio e instalar dependencias
Asegúrate de contar con Node.js y npm instalados, luego ejecuta:
```bash
npm install
```

### 2. Levantar el servidor de desarrollo
Para iniciar un servidor local en `http://localhost:4200/`:
```bash
npm run start
```
o también:
```bash
ng serve
```

### 3. Ejecutar pruebas unitarias
Las pruebas están configuradas para ejecutarse con **Vitest**:
```bash
npm run test
```

### 4. Compilar para producción
Para compilar la aplicación y optimizar los recursos finales en la carpeta `/dist`:
```bash
npm run build
```
