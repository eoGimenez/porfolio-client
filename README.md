# Portfolio - client side ( REFACTORIZANDO HTML & CSS)

(Dentro de la carpeta "AAoldcomponents" en la branch "dev" podras ver los viejos componentes)
Tambien hay muchos updates en el back-end

Aquí pueden encontrar el Front End para generar un portfolio, tener en cuenta que es necesario crear la API.

- repositorio del server: [Aquí](https://github.com/eoGimenez/portfolio-server)

## About

Es una página simple para gestionar Portfolios, la idea de no tener un Login es para agilizar a los que quieran mirar tu trabajo.

## Deployment

[Aquí](https://portfolio-eogimenez.netlify.app/) podras encontrar el deploy del portfolio

## Guia de instalación

- Haz un fork del repositorio
- Clone

```bash
$ cd portfolio-client
$ npm install
$ npm run dev
```

## Routes

|    Ruta     | Privacidad |    Renders    |
| :---------: | :--------: | :-----------: |
|      /      |  Publica   |      App      |
|  /aboutme   |  Publica   |  AboutMePage  |
| /:projectId |  Publica   | ProgectIdPage |

# Componentes

- Navbar
- Footer
- EditProject
- NewProject
- ProjectCard
- ProjectDetail

---
