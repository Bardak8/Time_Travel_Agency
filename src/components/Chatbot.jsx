import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      text: 'Bonjour ! Je suis Chronos, votre assistant voyage temporel chez TimeTravel Agency. Passionné d\'histoire et expert en voyages temporels, je suis là pour vous guider vers l\'époque de vos rêves. Comment puis-je vous aider aujourd\'hui ?'
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const quickReplies = [
    '🗼 Destinations disponibles',
    '💰 Voir les tarifs',
    '🎯 Quelle époque choisir ?',
    '❓ Questions fréquentes'
  ];

  // Base de connaissances du chatbot
  const destinations = {
    paris: {
      name: 'Paris 1889',
      price: '15 000€',
      duration: '7 jours',
      highlights: 'Belle Époque, Tour Eiffel, Exposition Universelle',
      description: 'Plongez dans l\'effervescence de la Belle Époque ! Assistez à l\'inauguration de la Tour Eiffel, flânez dans les allées de l\'Exposition Universelle, et vivez la magie du Paris artistique et culturel de la fin du XIXe siècle.'
    },
    cretace: {
      name: 'Crétacé -65M',
      price: '25 000€',
      duration: '5 jours',
      highlights: 'Dinosaures, T-Rex, nature préhistorique',
      description: 'Une aventure exceptionnelle au temps des dinosaures ! Observez les majestueux T-Rex dans leur habitat naturel, explorez des forêts préhistoriques luxuriantes, et vivez des moments uniques en toute sécurité dans notre capsule blindée.'
    },
    florence: {
      name: 'Florence 1504',
      price: '18 000€',
      duration: '10 jours',
      highlights: 'Renaissance, Léonard de Vinci, Michel-Ange',
      description: 'Découvrez le berceau de la Renaissance ! Visitez l\'atelier de Léonard de Vinci, admirez le David de Michel-Ange, dînez avec les Médicis, et imprégnez-vous de l\'art et de la culture de cette période extraordinaire.'
    }
  };

  const getBotResponse = (userMessage) => {
    const msg = userMessage.toLowerCase();

    // Salutations
    if (msg.match(/bonjour|salut|hello|hi|hey/)) {
      return "Ravi de vous rencontrer ! 🌟 Je suis Chronos, spécialiste des voyages temporels. Que diriez-vous d'explorer une époque fascinante ? Je peux vous parler de nos destinations phares : Paris 1889, le Crétacé ou la Florence de la Renaissance !";
    }

    // Destinations
    if (msg.match(/destination|voyage|où|aller|proposez/)) {
      return "Excellent ! Nous proposons 3 destinations extraordinaires :\n\n🗼 **Paris 1889** (15 000€) - Belle Époque et Tour Eiffel\n🦕 **Crétacé -65M** (25 000€) - L'ère des dinosaures\n🎨 **Florence 1504** (18 000€) - Renaissance italienne\n\nQuelle époque vous attire le plus ?";
    }

    // Prix généraux
    if (msg.match(/prix|tarif|coût|combien|budget/) && !msg.match(/paris|crétacé|dinosaure|florence|renaissance/)) {
      return "Nos voyages temporels de luxe démarrent à partir de 15 000€ par personne. 💎\n\n• Paris 1889 : 15 000€ (7 jours)\n• Florence 1504 : 18 000€ (10 jours)\n• Crétacé -65M : 25 000€ (5 jours)\n\nTous nos forfaits incluent le transport temporel aller-retour, l'hébergement 5 étoiles, un guide expert, et l'assurance voyage temporel complète !";
    }

    // Paris 1889
    if (msg.match(/paris|1889|belle époque|tour eiffel|exposition/)) {
      return `🗼 **${destinations.paris.name}** - Un voyage inoubliable !\n\n${destinations.paris.description}\n\n💰 Prix : ${destinations.paris.price}/personne\n⏱️ Durée : ${destinations.paris.duration}\n✨ Points forts : ${destinations.paris.highlights}\n\nCe voyage vous intéresse ? Je peux vous donner plus de détails !`;
    }

    // Crétacé
    if (msg.match(/crétacé|dinosaure|préhistoire|t-rex|jurassique/)) {
      return `🦕 **${destinations.cretace.name}** - L'aventure ultime !\n\n${destinations.cretace.description}\n\n💰 Prix : ${destinations.cretace.price}/personne\n⏱️ Durée : ${destinations.cretace.duration}\n✨ Points forts : ${destinations.cretace.highlights}\n\nC'est notre destination la plus spectaculaire ! Des questions sur la sécurité ?`;
    }

    // Florence
    if (msg.match(/florence|1504|renaissance|vinci|michel-ange|art/)) {
      return `🎨 **${destinations.florence.name}** - Le joyau culturel !\n\n${destinations.florence.description}\n\n💰 Prix : ${destinations.florence.price}/personne\n⏱️ Durée : ${destinations.florence.duration}\n✨ Points forts : ${destinations.florence.highlights}\n\nPour les amateurs d'art et de culture, c'est un incontournable !`;
    }

    // Conseils pour choisir
    if (msg.match(/choisir|recommand|conseil|hésit|quel|lequel/)) {
      return "Excellente question ! Voici mes recommandations selon vos intérêts :\n\n🎨 **Passionné d'art et culture** → Florence 1504\n🏙️ **Amoureux de Paris** → Paris 1889\n🦕 **Aventurier** → Crétacé -65M\n\nDites-moi ce qui vous passionne et je vous guiderai vers l'époque parfaite pour vous !";
    }

    // Sécurité
    if (msg.match(/sécurité|sûr|danger|risque|protec/)) {
      return "🛡️ Votre sécurité est notre priorité absolue !\n\nNos protocoles incluent :\n• Certification de l'Agence Internationale du Temps\n• Capsules temporelles de dernière génération\n• Guides experts formés aux situations d'urgence\n• Assurance tous risques (paradoxes temporels inclus)\n• Taux de retour : 100% garanti !\n\nVous pouvez voyager l'esprit tranquille. 😊";
    }

    // Réservation
    if (msg.match(/réserv|book|commander|acheter/)) {
      return "Fantastique ! Je vais vous mettre en relation avec notre équipe de réservation. 🎉\n\nPour finaliser votre voyage temporel, nous aurons besoin de :\n• Destination choisie\n• Dates souhaitées\n• Nombre de voyageurs\n• Préférences particulières\n\nSouhaitez-vous que je vous envoie un formulaire de réservation ?";
    }

    // Durée
    if (msg.match(/durée|combien de temps|long|jours/)) {
      return "⏱️ Nos voyages varient en durée selon la destination :\n\n• Paris 1889 : 7 jours\n• Florence 1504 : 10 jours\n• Crétacé -65M : 5 jours\n\nChaque séjour est optimisé pour profiter pleinement de l'époque ! Des questions sur le programme ?";
    }

    // Inclus
    if (msg.match(/inclus|compris|inclut|forfait/)) {
      return "📦 Tous nos forfaits premium incluent :\n\n✅ Transport temporel aller-retour\n✅ Hébergement 5 étoiles d'époque\n✅ Costumes authentiques\n✅ Guide historien personnel\n✅ Assurance voyage temporel complète\n✅ Traducteur universel\n✅ Kit de survie temporelle\n\nTout est pensé pour votre confort et votre immersion totale !";
    }

    // FAQ
    if (msg.match(/faq|question|info|renseign/)) {
      return "❓ Questions fréquentes :\n\n• Sécurité : Protocoles certifiés, 100% de retour\n• Prix : À partir de 15 000€, tout inclus\n• Durée : 5 à 10 jours selon destination\n• Langues : Traducteur universel fourni\n• Santé : Vaccins temporels inclus\n\nUne question spécifique ?";
    }

    // Merci
    if (msg.match(/merci|thanks|thank/)) {
      return "C'est un plaisir de vous aider ! 🌟 N'hésitez pas si vous avez d'autres questions sur nos voyages temporels. Je suis là pour vous guider vers l'époque de vos rêves !";
    }

    // Au revoir
    if (msg.match(/au revoir|bye|adieu|ciao/)) {
      return "Au revoir et à bientôt ! 👋 N'hésitez pas à revenir si vous avez des questions. Que votre voyage temporel soit extraordinaire ! ⏳✨";
    }

    // Réponse par défaut
    return "C'est une excellente question ! 🤔 Je suis spécialisé dans nos trois destinations principales : Paris 1889, le Crétacé et Florence 1504. Je peux vous renseigner sur les prix, les programmes, la sécurité et vous aider à choisir l'époque idéale pour vous. Que souhaitez-vous savoir ?";
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = input.trim();
    setMessages(prev => [...prev, { type: 'user', text: userMessage }]);
    setInput('');
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const botResponse = getBotResponse(userMessage);
      setMessages(prev => [...prev, { type: 'bot', text: botResponse }]);
      setIsTyping(false);
    }, 800 + Math.random() * 400);
  };

  const handleQuickReply = (reply) => {
    setInput('');
    setMessages(prev => [...prev, { type: 'user', text: reply }]);
    setIsTyping(true);

    setTimeout(() => {
      const botResponse = getBotResponse(reply);
      setMessages(prev => [...prev, { type: 'bot', text: botResponse }]);
      setIsTyping(false);
    }, 800 + Math.random() * 400);
  };

  return (
    <>
      {/* Chat button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", duration: 0.5, delay: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-40 w-16 h-16 bg-gradient-to-r from-gold-500 to-gold-600 rounded-full shadow-2xl shadow-gold-500/50 flex items-center justify-center text-2xl hover:shadow-gold-500/70 transition-shadow"
        aria-label="Ouvrir le chatbot"
      >
        {isOpen ? '✕' : '💬'}
      </motion.button>

      {/* Chat window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed bottom-24 right-6 z-40 w-96 max-w-[calc(100vw-3rem)] bg-zinc-900 rounded-2xl shadow-2xl border border-gold-500/30 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-gold-500 to-gold-600 p-4 flex items-center gap-3">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-2xl">
                ⏳
              </div>
              <div>
                <h3 className="font-display font-bold text-zinc-950">Chronos</h3>
                <p className="text-xs text-zinc-800">Assistant Voyage Temporel</p>
              </div>
            </div>

            {/* Messages */}
            <div className="h-96 overflow-y-auto p-4 space-y-4 bg-zinc-950/50">
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] p-3 rounded-2xl whitespace-pre-line ${
                      message.type === 'user'
                        ? 'bg-gradient-to-r from-gold-500 to-gold-600 text-zinc-950 font-medium'
                        : 'bg-zinc-800 text-zinc-100'
                    }`}
                  >
                    {message.text}
                  </div>
                </motion.div>
              ))}

              {/* Typing indicator */}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div className="bg-zinc-800 text-zinc-100 p-3 rounded-2xl flex gap-1">
                    <motion.span
                      animate={{ opacity: [0.4, 1, 0.4] }}
                      transition={{ duration: 1, repeat: Infinity, delay: 0 }}
                    >●</motion.span>
                    <motion.span
                      animate={{ opacity: [0.4, 1, 0.4] }}
                      transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
                    >●</motion.span>
                    <motion.span
                      animate={{ opacity: [0.4, 1, 0.4] }}
                      transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
                    >●</motion.span>
                  </div>
                </motion.div>
              )}

              {/* Quick replies */}
              {messages.length === 1 && !isTyping && (
                <div className="space-y-2">
                  <p className="text-xs text-zinc-500 text-center">Suggestions :</p>
                  {quickReplies.map((reply, index) => (
                    <motion.button
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 + 0.3 }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleQuickReply(reply)}
                      className="w-full p-2 text-sm bg-zinc-800 hover:bg-zinc-700 text-zinc-300 rounded-lg border border-gold-500/20 hover:border-gold-500/50 transition-all text-left"
                    >
                      {reply}
                    </motion.button>
                  ))}
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 bg-zinc-900 border-t border-gold-500/20">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Posez-moi vos questions sur les voyages temporels..."
                  className="flex-1 px-4 py-2 bg-zinc-950 border border-gold-500/30 rounded-lg text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-gold-500/50 transition-colors text-sm"
                  disabled={isTyping}
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleSend}
                  disabled={isTyping}
                  className="px-4 py-2 bg-gradient-to-r from-gold-500 to-gold-600 text-zinc-950 font-semibold rounded-lg hover:shadow-lg transition-all disabled:opacity-50"
                >
                  ➤
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;
