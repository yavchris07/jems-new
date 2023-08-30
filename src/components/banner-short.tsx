import React from 'react';
import '../styles/banner1.scss'

interface titleProps{
  title:string
}

function BannerShort({title}:titleProps) {
  return (
    <section className='banner1'>
       <div className='cover-short'>
        <h1>{title}</h1>
        <p>SOCIETE JEMS ENERGY SARL</p>
        <p>
        votre partenaire de confiance pour une transformation énergétique responsable et inclusive !
        </p>
       </div>
    </section>
  );
}

export default BannerShort;
