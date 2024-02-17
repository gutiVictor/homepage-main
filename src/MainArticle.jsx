import imagenMovile from"./assets/images/image-web-3-mobile.jpg"
import imagenDesktop from"./assets/images/image-web-3-desktop.jpg"

export const MainArticle = () => {
  return (
    <section>

      <picture>


        <source media="(max-width:640px)" srcSet={imagenMovile} />
        <source media="(min-width:641px)" srcSet={imagenDesktop} />

        <img src={imagenMovile} alt="Articulo principal" />
      </picture>


    </section>
  )
}

