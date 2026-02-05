import { motion } from 'framer-motion';
import { useState } from 'react';
import DestinationModal from './DestinationModal';
import parisImage from '../assets/paris_1889_hero.jpg';
import florenceImage from '../assets/florence_renaissance_hero.jpg';
import cretaceousImage from '../assets/cretaceous_hero.jpg';

const destinations = [
  {
    id: 1,
    title: 'Paris 1889',
    subtitle: 'Belle Époque',
    period: '1889',
    description: 'Découvrez la splendeur de l\'Exposition Universelle et l\'inauguration de la Tour Eiffel',
    image: '🗼',
    backgroundImage: parisImage,
    color: 'from-amber-500/20 to-orange-600/20',
    borderColor: 'border-amber-500/50',
    details: {
      duration: '7 jours',
      price: '15 000€',
      highlights: [
        'Inauguration de la Tour Eiffel',
        'Exposition Universelle de Paris',
        'Dîner au Moulin Rouge',
        'Visite guidée des Champs-Élysées',
        'Rencontre avec Gustave Eiffel'
      ],
      included: [
        'Transport temporel aller-retour',
        'Hébergement 5 étoiles',
        'Costume d\'époque',
        'Guide historien personnel',
        'Assurance voyage temporel'
      ]
    }
  },
  {
    id: 2,
    title: 'Crétacé -65M',
    subtitle: 'Ère des Dinosaures',
    period: '-65 millions d\'années',
    description: 'Observez les derniers jours des dinosaures dans leur habitat naturel',
    image: '🦕',
    backgroundImage: cretaceousImage,
    color: 'from-emerald-500/20 to-green-600/20',
    borderColor: 'border-emerald-500/50',
    details: {
      duration: '5 jours',
      price: '25 000€',
      highlights: [
        'Observation du T-Rex en chasse',
        'Safari Tricératops',
        'Forêts préhistoriques',
        'Volcans actifs',
        'Capsule d\'observation sécurisée'
      ],
      included: [
        'Transport temporel aller-retour',
        'Capsule blindée tout confort',
        'Équipement de protection',
        'Paléontologue expert',
        'Assurance tous risques'
      ]
    }
  },
  {
    id: 3,
    title: 'Florence 1504',
    subtitle: 'Renaissance Italienne',
    period: '1504',
    description: 'Assistez à la création des plus grands chefs-d\'œuvre de la Renaissance',
    image: '🎨',
    backgroundImage: florenceImage,
    color: 'from-purple-500/20 to-pink-600/20',
    borderColor: 'border-purple-500/50',
    details: {
      duration: '10 jours',
      price: '18 000€',
      highlights: [
        'Atelier de Léonard de Vinci',
        'Visite du David de Michel-Ange',
        'Dîner avec les Médicis',
        'Galerie des Offices',
        'Cours de peinture Renaissance'
      ],
      included: [
        'Transport temporel aller-retour',
        'Palazzo de luxe',
        'Garde-robe Renaissance',
        'Historien de l\'art privé',
        'Cours d\'italien ancien'
      ]
    }
  }
];

const Destinations = () => {
  const [selectedDestination, setSelectedDestination] = useState(null);

  return (
    <section id="destinations" className="py-24 px-6 bg-zinc-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-gold-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-gold-600/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="text-gradient">Nos Destinations</span>
          </h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Choisissez parmi nos voyages temporels soigneusement sélectionnés
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <motion.div
              key={destination.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
              onClick={() => setSelectedDestination(destination)}
            >
              <div className={`relative h-full backdrop-blur-sm border ${destination.borderColor} rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-gold-500/20`}>
                {/* Image de fond */}
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ 
                    backgroundImage: `url(${destination.backgroundImage})`,
                  }}
                />
                
                {/* Overlay sombre pour la lisibilité */}
                <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/80 via-zinc-950/70 to-zinc-950/90"></div>
                
                {/* Overlay coloré au hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${destination.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                
                {/* Content */}
                <div className="relative z-10 p-8 h-full flex flex-col">
                  <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform duration-300 drop-shadow-lg">
                    {destination.image}
                  </div>
                  
                  <div className="mb-2">
                    <h3 className="text-2xl font-display font-bold text-white mb-1 drop-shadow-lg">
                      {destination.title}
                    </h3>
                    <p className="text-gold-400 font-semibold drop-shadow-lg">{destination.subtitle}</p>
                  </div>
                  
                  <p className="text-sm text-zinc-300 mb-2 drop-shadow-lg">{destination.period}</p>
                  
                  <p className="text-zinc-200 mb-6 leading-relaxed flex-grow drop-shadow-lg">
                    {destination.description}
                  </p>
                  
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-gold-400 font-bold text-lg drop-shadow-lg">
                      {destination.details.price}
                    </span>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-4 py-2 bg-gold-500 text-zinc-950 font-semibold rounded-lg hover:bg-gold-400 transition-colors shadow-lg"
                    >
                      En savoir plus
                    </motion.button>
                  </div>
                </div>

                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-gold-400/20 to-transparent rounded-bl-full"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {selectedDestination && (
        <DestinationModal
          destination={selectedDestination}
          onClose={() => setSelectedDestination(null)}
        />
      )}
    </section>
  );
};

export default Destinations;
