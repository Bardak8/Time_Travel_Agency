import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const links = {
    company: [
      { name: 'À propos', href: '#about' },
      { name: 'Destinations', href: '#destinations' },
      { name: 'Nos valeurs', href: '#' },
      { name: 'Carrières', href: '#' },
    ],
    support: [
      { name: 'Centre d\'aide', href: '#' },
      { name: 'Sécurité temporelle', href: '#' },
      { name: 'FAQ', href: '#' },
      { name: 'Contact', href: '#' },
    ],
    legal: [
      { name: 'Conditions générales', href: '#' },
      { name: 'Politique de confidentialité', href: '#' },
      { name: 'Cookies', href: '#' },
      { name: 'Mentions légales', href: '#' },
    ],
  };

  const socials = [
    { icon: '📘', name: 'Facebook', href: '#' },
    { icon: '📸', name: 'Instagram', href: '#' },
    { icon: '🐦', name: 'Twitter', href: '#' },
    { icon: '💼', name: 'LinkedIn', href: '#' },
  ];

  return (
    <footer className="bg-zinc-950 border-t border-gold-500/20 pt-16 pb-8 px-6">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center space-x-2 mb-4"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-gold-400 to-gold-600 rounded-lg flex items-center justify-center">
                <span className="text-2xl">⏳</span>
              </div>
              <div>
                <h3 className="text-xl font-display font-bold text-gradient">TimeTravel</h3>
                <p className="text-xs text-gold-500">AGENCY</p>
              </div>
            </motion.div>
            <p className="text-zinc-400 mb-6 leading-relaxed">
              L'agence de voyage temporel de luxe qui vous emmène aux quatre coins de l'Histoire. 
              Depuis 2145, nous créons des souvenirs intemporels.
            </p>
            <div className="flex gap-3">
              {socials.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-zinc-900 hover:bg-gradient-to-br hover:from-gold-500 hover:to-gold-600 border border-gold-500/30 rounded-lg flex items-center justify-center transition-all"
                  aria-label={social.name}
                >
                  <span className="text-xl">{social.icon}</span>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-display font-bold text-white mb-4">Entreprise</h4>
            <ul className="space-y-2">
              {links.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-zinc-400 hover:text-gold-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Support */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-display font-bold text-white mb-4">Support</h4>
            <ul className="space-y-2">
              {links.support.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-zinc-400 hover:text-gold-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Legal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="font-display font-bold text-white mb-4">Légal</h4>
            <ul className="space-y-2">
              {links.legal.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-zinc-400 hover:text-gold-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-gold-500/10 to-gold-600/10 border border-gold-500/30 rounded-xl p-8 mb-12"
        >
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-display font-bold text-white mb-2">
              Restez informé des nouvelles destinations
            </h3>
            <p className="text-zinc-400 mb-6">
              Recevez nos offres exclusives et découvrez en avant-première nos nouvelles époques
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Votre email"
                className="flex-1 px-4 py-3 bg-zinc-950 border border-gold-500/30 rounded-lg text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-gold-500/50 transition-colors"
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-3 bg-gradient-to-r from-gold-500 to-gold-600 text-zinc-950 font-bold rounded-lg hover:shadow-lg hover:shadow-gold-500/50 transition-all whitespace-nowrap"
              >
                S'abonner
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Bottom */}
        <div className="border-t border-gold-500/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-zinc-500 text-sm">
            <p>
              © {currentYear} TimeTravel Agency. Tous droits réservés à travers toutes les époques.
            </p>
            <p className="flex items-center gap-2">
              Fait avec <span className="text-gold-500">⏳</span> dans le futur
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
