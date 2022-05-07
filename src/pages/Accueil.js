import React, {Fragment} from 'react'
import loadable from '@loadable/component'
import './styles/Accueil.scss'

const ContenuSponsorise = loadable( () => import('../composants/ContenuSponsorise'))
const Header = loadable( () => import('../composants/Header'))
const Footer = loadable( () => import('../composants/Footer'))

function Accueil() {
  return (
    <Fragment>
        <ContenuSponsorise />
        <Header />
        <div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A magnam debitis, pariatur accusamus mollitia ratione maxime repellat! Sequi, placeat nobis porro id vero laboriosam magnam modi expedita exercitationem aliquid recusandae?
          Dolorum, dignissimos. Odit natus qui accusamus facilis aut adipisci? Non beatae quis aut debitis vel quibusdam sequi, repudiandae illo aperiam quas quidem libero possimus repellat quo! Tempora dolores harum tenetur.
          Molestias sit deleniti quibusdam minima laboriosam magnam corporis illo illum provident quas cumque, tempore aperiam. Sapiente, perspiciatis et placeat vel inventore expedita velit, omnis temporibus qui harum deserunt, saepe nobis?
          Molestiae error, neque sequi debitis illo recusandae deserunt, reprehenderit eos repellendus quod, accusamus adipisci culpa. Ullam maiores, corrupti ab fugit accusantium inventore aliquam nesciunt soluta ratione id veniam mollitia eligendi!
          Vero ullam aspernatur sit molestiae amet dolores facilis, aliquam quis inventore accusamus voluptatem repellat delectus. Expedita voluptates velit ratione voluptatum et accusamus impedit quisquam molestiae minus quidem. Voluptates, iure sint!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A magnam debitis, pariatur accusamus mollitia ratione maxime repellat! Sequi, placeat nobis porro id vero laboriosam magnam modi expedita exercitationem aliquid recusandae?
          Dolorum, dignissimos. Odit natus qui accusamus facilis aut adipisci? Non beatae quis aut debitis vel quibusdam sequi, repudiandae illo aperiam quas quidem libero possimus repellat quo! Tempora dolores harum tenetur.
          Molestias sit deleniti quibusdam minima laboriosam magnam corporis illo illum provident quas cumque, tempore aperiam. Sapiente, perspiciatis et placeat vel inventore expedita velit, omnis temporibus qui harum deserunt, saepe nobis?
          Molestiae error, neque sequi debitis illo recusandae deserunt, reprehenderit eos repellendus quod, accusamus adipisci culpa. Ullam maiores, corrupti ab fugit accusantium inventore aliquam nesciunt soluta ratione id veniam mollitia eligendi!
          Vero ullam aspernatur sit molestiae amet dolores facilis, aliquam quis inventore accusamus voluptatem repellat delectus. Expedita voluptates velit ratione voluptatum et accusamus impedit quisquam molestiae minus quidem. Voluptates, iure sint!</p>
        </div>
        <Footer />
    </Fragment>
  )
}

export default Accueil