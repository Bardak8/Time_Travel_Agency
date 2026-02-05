import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';

const DestinationModal = ({ destination, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="bg-zinc-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-gold-500/30 shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className={`relative p-8 bg-gradient-to-br ${destination.color} border-b border-gold-500/30`}>
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center bg-zinc-950/50 hover:bg-zinc-950/80 rounded-full transition-colors"
            >
              <svg className="w-6 h-6 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="flex items-center gap-6">
              <div className="text-7xl">{destination.image}</div>
              <div>
                <h2 className="text-4xl font-display font-bold text-white mb-2">
                  {destination.title}
                </h2>
                <p className="text-xl text-gold-400 font-semibold mb-1">{destination.subtitle}</p>
                <p className="text-zinc-400">{destination.period}</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-8">
            <p className="text-lg text-zinc-300 mb-8 leading-relaxed">
              {destination.description}
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {/* Highlights */}
              <div>
                <h3 className="text-2xl font-display font-bold text-gradient mb-4">
                  Points forts
                </h3>
                <ul className="space-y-3">
                  {destination.details.highlights.map((highlight, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <span className="text-gold-400 mt-1">✦</span>
                      <span className="text-zinc-300">{highlight}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Included */}
              <div>
                <h3 className="text-2xl font-display font-bold text-gradient mb-4">
                  Inclus dans le forfait
                </h3>
                <ul className="space-y-3">
                  {destination.details.included.map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <span className="text-gold-400 mt-1">✓</span>
                      <span className="text-zinc-300">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Details */}
            <div className="bg-zinc-950/50 rounded-xl p-6 mb-8 border border-gold-500/20">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <p className="text-zinc-500 text-sm mb-1">Durée</p>
                  <p className="text-white font-semibold text-lg">{destination.details.duration}</p>
                </div>
                <div>
                  <p className="text-zinc-500 text-sm mb-1">Prix par personne</p>
                  <p className="text-gold-400 font-bold text-2xl">{destination.details.price}</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="flex gap-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex-1 px-8 py-4 bg-gradient-to-r from-gold-500 to-gold-600 text-zinc-950 font-bold rounded-lg text-lg shadow-lg shadow-gold-500/50 hover:shadow-gold-500/70 transition-all"
              >
                Réserver maintenant
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 border-2 border-gold-500 text-gold-400 font-bold rounded-lg text-lg hover:bg-gold-500/10 transition-all"
              >
                Demander un devis
              </motion.button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default DestinationModal;
