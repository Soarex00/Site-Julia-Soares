import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { Linkedin, Twitter } from "lucide-react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-purple-900 text-gray-200 py-10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo / Nome */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold"> Júlia Madeira Soares</h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.2 }}
          >
            <p className="mt-2 text-gray-400">
              Cuidando da sua saúde e bem-estar com atendimento online e
              presencial.
            </p>
          </motion.div>
        </div>

        {/* Links */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-3">Navegação</h3>
          </motion.div>
          <ul className="space-y-2 text-gray-400">
            <li>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: 0.2 }}
              >
                <a href="#about" className="hover:text-white">
                  Sobre
                </a>
              </motion.div>
            </li>
            <li>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: 0.2 }}
              >
                <a href="#services" className="hover:text-white">
                  Serviços
                </a>
              </motion.div>
            </li>
            <li>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: 0.2 }}
              >
                <a href="#feedbacks" className="hover:text-white">
                  Feedbacks
                </a>
              </motion.div>
            </li>
            <li>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: 0.2 }}
              >
                <a href="#contact" className="hover:text-white">
                  Contato
                </a>
              </motion.div>
            </li>
          </ul>
        </div>

        {/* Redes sociais */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-3">Conecte-se</h3>
          </motion.div>
          <div className="flex space-x-2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.2 }}
            >
              <a
                href="https://wa.me/5553991347198"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-400"
              >
                <FaWhatsapp size={24} />
              </a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.2 }}
            >
              <a
                href="https://instagram.com/nutri.juliamsoares"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-400"
              >
                <FaInstagram size={24} />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
      {/* Direitos autorais */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ delay: 0.2 }}
      >
        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} Julia Madeira Soares. Todos os direitos
          reservados.
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ delay: 0.2 }}
      >
        <div className="flex justify-center mt-5">
          Desenvolvido por
          <a
            href="https://instagram.com/conrado_soaresss"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-500 hover:underline ml-1"
          >
            Conrado Soares
          </a>
        </div>
      </motion.div>
    </footer>
  );
}
