import React from 'react';
import '../styles/middle-banner.scss'
import ChifferList from './chiffer-list';

export default function MiddleBanner() {
  return (
    <section className='middle-banner'>
      <div className='cover'>
        <ChifferList />
        <h3>votre partenaire de confiance pour une transformation énergétique responsable et inclusive !</h3>
      </div>
    </section>
  );
}


