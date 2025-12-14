#  Cálculo del grado de vértices en un grafo dirigido

Este proyecto resuelve un ejercicio clásico de **grafos dirigidos**: dado un conjunto de grafos descritos en texto, el programa calcula el **grado total** de cada vértice.

El **grado total** de un vértice es la suma de:

* **Grado de salida**: cuántas aristas salen del vértice
* **Grado de entrada**: cuántas aristas llegan al vértice

---

##  Descripción del problema

* Se reciben varios **casos de prueba**.
* Cada caso representa un **grafo dirigido**.
* Los grafos se describen con el formato:

```
A:BCD;B:;C:D;D:BC
```

Esto significa:

* `A:BCD` → A apunta a B, C y D
* `B:` → B no apunta a nadie
* `C:D` → C apunta a D
* `D:BC` → D apunta a B y C

---

##  Formato de entrada (`input.txt`)

La entrada debe colocarse en un archivo llamado **`input.txt`**.

Ejemplo:

```
2
A:BCD;B:;C:D;D:BC
A:B;B:C;C:AB
```

### Explicación:

* `2` → número de grafos
* Cada línea siguiente representa **un grafo distinto**

---

##  Formato de salida

El programa imprime una línea por cada grafo, mostrando el grado total de cada vértice, ordenado alfabéticamente.

Ejemplo de salida:

```
A=3, B=2, C=3, D=4
A=2, B=3, C=3
```

---


##  Cómo ejecutar el programa

### Requisitos

* Tener **Node.js** instalado

### Estructura del proyecto

```
/proyecto
│
├─ index.js
└─ input.txt
```

### Ejecutar

Desde la carpeta del proyecto:

```bash
node index.js
```

---
## Ramas del repositorio

Este repositorio contiene más de una rama:

main: contiene la solución principal correspondiente al ejercicio descrito en este README (cálculo del grado de vértices en grafos dirigidos).

Otra rama adicional: incluye un segundo caso de estudio, usado como ejemplo alternativo para practicar o analizar un escenario distinto.

Cada rama es independiente y sirve para estudiar el mismo concepto aplicado a diferentes ejemplos.
---
##  Lenguaje

* JavaScript (Node.js)


