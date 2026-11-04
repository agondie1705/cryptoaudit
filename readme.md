# Nébula — Paisajes de ciencia ficción

## 1. Descripción del proyecto

Nébula es una landing page de un artista digital ficticio especializado en paisajes de ciencia ficción y escenarios espaciales.

El objetivo de la página es presentar su universo visual mediante imágenes, un vídeo de presentación, audio ambiental y una galería de recursos gráficos.

## 2. Estructura del proyecto

```text
nebula/
├── index.html
├── styles.css
├── README.md
└── assets/
    ├── img/
    │   ├── hero.webp
    │   ├── logo.svg
    │   ├── poster.webp
    │   ├── imágenes de galería y botones
    │   └── cta-animation.gif
    ├── video/
    │   └── nebula-intro.mp4
    ├── audio/
    │   └── ambient.mp3
```

## 3. Recursos multimedia y créditos

### Imagen principal (Hero)

- **Recurso:** Aurora boreal.
- **Fuente:** Unsplash.
- **Autor indicado:** Scott Rock.
- **Edición:** optimizada y convertida con Squoosh.
- **Uso:** imagen de fondo de la cabecera principal.

### Logotipo

- **Creación:** diseño realizado a mano.
- **Herramientas:** Affinity y remove.bg.
- **Uso:** identidad visual de Nébula.

### Galería de imágenes

| Imagen | Recurso | Autor |
|---|---|---|
| Imagen 1 | Nebulosa roja y naranja brillante en el espacio profundo | wikiImages |
| Imagen 2 | Nebulosa de Orión en el espacio profundo | wikiImages |
| Imagen 3 | Nebulosa de la Laguna en el espacio profundo | wikiImages |

convertidas y optimizadas con Squoosh.

### Imágenes de los botones y animación

- Las imágenes utilizadas para la animación han sido creadas con inteligencia artificial.
- montado a mano
- con gimp
  
### formatos
<img width="640" height="360" alt="image" src="https://github.com/user-attachments/assets/354cba6b-7cf9-4df3-8330-179dc2217a53" />

### tamaño gift
<img width="640" height="360" alt="image" src="https://github.com/user-attachments/assets/0c0cde1c-ad9a-4e3d-8340-4509d5f86a60" />

### tamaño hero
<img width="640" height="360" alt="image" src="https://github.com/user-attachments/assets/9880d1f8-be48-4a0d-9206-97cb8956c831" />
https://unsplash.com/es/fotos/aurora-boreal-mfSY12Au5o4

### tamaño img1
<img width="640" height="360" alt="image" src="https://github.com/user-attachments/assets/947a6261-0c7a-4b81-9a8b-089c3f6d9a61" />
https://pixabay.com/es/photos/estrellas-galaxia-espacio-67616/

### tamaño img2
<img width="640" height="360" alt="image" src="https://github.com/user-attachments/assets/77d7bb75-3ecc-46a5-a148-b4d9e75dd2fe" />
https://pixabay.com/es/photos/fondo-de-navidad-nebula-de-ori%C3%B3n-11107/

### tamaño img3
<img width="640" height="360" alt="image" src="https://github.com/user-attachments/assets/5bb4b0a4-f437-4329-b58a-82cbc2497a42" />
https://pixabay.com/es/photos/nebulosa-laguna-messier-8-ngc-6523-11143/

### Vídeo de presentación

- **Recurso:** vídeo de exoplanetas y nave extraterrestre.
- **Autor:** UniverseUnique.
- **Fuente:** [Pixabay — Vídeo 161334](https://pixabay.com/es/videos/exoplanetas-nave-extraterrestre-ovni-161334/).
- **Edición y conversión:** Video Converter.
- **Uso:** presentación audiovisual del universo de Nébula.
- **codec:** H.264
formato
<img width="155" height="112" alt="image" src="https://github.com/user-attachments/assets/f2a89b24-178e-4e75-bb19-298cd58a0178" />
peso
<img width="310" height="145" alt="image" src="https://github.com/user-attachments/assets/86e18356-380b-4167-a374-0eb9097d9b73" />

### Audio ambiental

- **Recurso:** Space.
- **Fuente:** [Pixabay — Space 627616](https://pixabay.com/es/music/ambiente-space-627616/).
- **Edición:** se ha reducido el tamaño del archivo, recortado y comprimido.
- **Herramientas utilizadas:**
  - [Online Audio Converter](https://online-audio-converter.com/sp/)
  - [Brisk Audio](https://briskaudio.com/es/trimmanual.html)
  - [FreeConvert MP3 Compressor](https://www.freeconvert.com/es/mp3-compressor/download)
formato
<img width="162" height="40" alt="image" src="https://github.com/user-attachments/assets/6eb8b328-ce90-4008-95fc-728301b683f3" />
tamaño
<img width="465" height="537" alt="image" src="https://github.com/user-attachments/assets/8d958310-2f24-4605-8a7f-6a2acc813b12" />

El audio se integra mediante el reproductor HTML5 y está configurado para repetirse al terminar.

## 4. Herramientas utilizadas

- **HTML5:** estructura y contenido de la página.
- **CSS3:** diseño, distribución y adaptación a diferentes pantallas.
- **Affinity:** creación del logotipo.
- **remove.bg:** eliminación del fondo de imágenes.
- **Squoosh:** optimización y conversión de imágenes.
- **Video Converter:** conversión del vídeo.
- **Online Audio Converter:** conversión y reducción del audio.
- **Brisk Audio:** recorte del audio.
- **FreeConvert:** compresión del archivo MP3.
- **Inteligencia artificial:** creación de imágenes para la animación.

## 5. Diseño y decisiones

Se ha elegido una estética minimalista en blanco y negro, combinada con imágenes espaciales de diferentes colores.

secciones:

- Cabecera con imagen de fondo, logotipo y presentación.
- Sección de presentación con vídeo y contacto.
- Galería con tres imágenes de nebulosas.
- Reproductor de audio ambiental.
- Pie de página.

## 6. Accesibilidad y optimización
Se han aplicado medidas para mejorar la experiencia de navegación:

- Textos alternativos ("alt") en las imágenes.
- Dimensiones en las imágenes mediante "width" y "height".
- Carga diferida ("loading="lazy"") en imágenes secundarias.
- Precarga de metadatos del vídeo.
- Precarga desactivada del audio hasta que el visitante lo reproduzca.
- Diseño adaptable a pantallas de ordenador y dispositivos móviles.
- Controles nativos para reproducir vídeo y audio.

## 7. Licencias y atribuciones

Unsplash: la fotografía principal se utiliza bajo la licencia gratuita de Unsplash. No exige atribución, aunque se reconoce al autor, Scott Rock.

Pixabay: las imágenes de las nebulosas, el vídeo y la música se utilizan bajo la licencia de contenido de Pixabay. Se permite su uso y modificación, respetando sus usos prohibidos.

Affinity: el logotipo es una creación propia realizada con esta herramienta.

remove.bg, Squoosh y herramientas de edición: se han utilizado para modificar y optimizar los recursos, no como fuentes de las imágenes.



Los elementos creados para el proyecto, como el logotipo y las imágenes generadas con inteligencia artificial, se identifican como creaciones propias o generadas para esta página.

## 8. Objetivo final

El resultado es una landing page multimedia que presenta la identidad visual de Nébula y combina diseño web, imágenes, vídeo y sonido ambiental en una experiencia de temática espacial.
