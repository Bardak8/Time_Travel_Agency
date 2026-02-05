import { motion } from 'framer-motion';

const About = () => {
  const features = [
    {
      icon: '🔒',
      title: 'Sécurité Maximale',
      description: 'Protocoles de sécurité temporelle certifiés par l\'Agence Internationale du Temps'
    },
    {
      icon: '⭐',
      title: 'Luxe & Confort',
      description: 'Hébergements 5 étoiles et services premium à chaque époque'
    },
    {
      icon: '👨‍🏫',
      title: 'Guides Experts',
      description: 'Historiens et experts certifiés vous accompagnent durant tout le voyage'
    },
    {
      icon: '🛡️',
      title: 'Assurance Complète',
      description: 'Couverture tous risques incluant les paradoxes temporels'
    }
  ];

  return (
    <section id="about" className="py-24 px-6 bg-zinc-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-gold-600/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            <span className="text-gradient">À propos de TimeTravel Agency</span>
          </h2>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed">
            Depuis 2145, nous sommes les pionniers du voyage temporel de luxe. Notre expertise et notre engagement 
            pour l'excellence nous ont permis de devenir la première agence certifiée pour les voyages à travers le temps.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-zinc-950/50 backdrop-blur-sm border border-gold-500/20 rounded-xl p-6 hover:border-gold-500/50 transition-all"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-display font-bold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-zinc-400 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-gold-500/10 to-gold-600/10 border border-gold-500/30 rounded-2xl p-8 md:p-12"
        >
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", duration: 0.8, delay: 0.2 }}
                className="text-5xl md:text-6xl font-display font-bold text-gradient mb-2"
              >
                10,000+
              </motion.div>
              <p className="text-zinc-400 text-lg">Voyageurs satisfaits</p>
            </div>
            <div>
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", duration: 0.8, delay: 0.4 }}
                className="text-5xl md:text-6xl font-display font-bold text-gradient mb-2"
              >
                50+
              </motion.div>
              <p className="text-zinc-400 text-lg">Destinations temporelles</p>
            </div>
            <div>
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", duration: 0.8, delay: 0.6 }}
                className="text-5xl md:text-6xl font-display font-bold text-gradient mb-2"
              >
                100%
              </motion.div>
              <p className="text-zinc-400 text-lg">Taux de retour garanti</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
