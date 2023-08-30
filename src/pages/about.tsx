// import React from 'react';
import BannerShort from '../components/banner-short';
import '../styles/about.scss'

function  About() {
  return (
    <div className='about'>
      <BannerShort title='Apropos de nous'/>
      
      <div className='sommary'>
        <h4>CE QU'IL  FAUT SAVOIR</h4>
        
        <p>Nous sommes plus qu'une entreprise, nous sommes une équipe passionnée qui aspire à changer la vie des gens grâce à l'énergie. 
        Chez Jems Energy, nous croyons en la puissance de l'Ubuntu,cette philosophie africaine qui nous rappelle que nous existons parce que nous sommes tous interconnectés.</p>

        <p>Notre ambition est claire : apporter l'énergie à ceux qui en ont le plus besoin,en transformant les foyers congolais et africains en véritables sources de progrès et d'épanouissement. 
        Nous nous engageons à fournir une énergie fiable, durable et abordable à tous, car nous croyons que chaque individu mérite de vivre dans un environnement éclairé et énergisé. </p>

        <p>En tant que spécialistes de la production, du transport et de la commercialisation de l'énergie, 
          nous mettons à profit notre expertise pour créer des solutions adaptées aux besoins spécifiques de chaque foyer. 
          Que ce soit à travers l'électrification rurale, les systèmes solaires domestiques ou les réseaux de distribution intelligents, 
          nous innovons pour offrir des alternatives énergétiques qui améliorent la qualité de vie de nos concitoyens.</p>

        <p>
        Mais notre mission ne s'arrête pas là. Nous sommes conscients de l'urgence climatique qui affecte notre planète et nous nous engageons à développer des solutions respectueuses de l'environnement. 
        Notre objectif est de concilier progrès énergétique et préservation de notre belle nature africaine, 
        en favorisant les énergies renouvelables et les pratiques durables.
        </p>

        <p>Rejoignez-nous dans cette aventure énergétique, où chaque geste compte. Ensemble, nous pouvons créer un avenir éclairé et énergétique 
          pour tous les ménages congolais et africains. Parce que nous existons grâce à notre communauté, 
          nous sommes déterminés à faire la différence et à laisser un héritage positif pour les générations futures.
        </p>
        
        <h5>Faites confiance à Jems Energy pour votre avenir énergétique ! </h5>

      </div>

    </div>
  );
}

export default About;
