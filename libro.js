class Libro {
    constructor(titulo, autor, genero) {
      this.titulo = titulo;
      this.autor = autor;
      this.genero = genero;
      this.leido = false;
    }
  
    marcarComoLeido() {
      this.leido = true;
    }
  
    marcarComoNoLeido() {
      this.leido = false;
    }
  
    informacion() {
      const leidoStatus = this.leido ? "Sí" : "No";
      console.log(`Título: ${this.titulo}, Autor: ${this.autor}, Género: ${this.genero}, Leído: ${leidoStatus}`);
    }
  }
  
  // Crear instancias de la clase Libro
  const libro1 = new Libro("El Señor de los Anillos", "J.R.R. Tolkien", "Fantasía");
  const libro2 = new Libro("1984", "George Orwell", "Ciencia ficción");
  
  // Marcar uno de los libros como leído
  libro1.marcarComoLeido();
  
  // Mostrar la información de ambos libros
  console.log("Información del Libro 1:");
  libro1.informacion();
  
  console.log("Información del Libro 2:");
  libro2.informacion();
  