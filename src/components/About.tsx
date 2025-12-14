import { Code2, Rocket, Heart, Lightbulb } from 'lucide-react';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const values = [
    {
      icon: <Code2 className="w-6 h-6" />,
      title: 'Clean Code',
      description: 'I write maintainable, scalable code that follows best practices and industry standards.'
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: 'Performance',
      description: 'Optimizing applications for speed and efficiency is always a top priority.'
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: 'User Experience',
      description: 'Creating intuitive and delightful experiences that users love to interact with.'
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: 'Innovation',
      description: 'Always learning new technologies and finding creative solutions to problems.'
    }
  ];

  return (
    <section id="about" className="py-24 bg-white" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: [0.6, 0.01, 0.05, 0.95] }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-gray-900 mb-6">About Me</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            I'm a passionate full-stack developer with expertise in building scalable web applications 
            from concept to deployment. With a strong foundation in both frontend and backend technologies, 
            I create seamless digital experiences that solve real-world problems.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {values.map((value, index) => (
            <motion.div 
              key={value.title}
              initial={{ opacity: 0, y: 80, scale: 0.8 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 80, scale: 0.8 }}
              transition={{ 
                duration: 0.7, 
                delay: index * 0.15,
                ease: [0.6, 0.01, 0.05, 0.95]
              }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="p-6 bg-white border border-gray-200 rounded-3xl text-center shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="inline-flex p-4 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-2xl mb-4 shadow-md">
                {value.icon}
              </div>
              <h3 className="text-xl text-gray-900 mb-2">{value.title}</h3>
              <p className="text-gray-600 leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.8, y: 50 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.6, 0.01, 0.05, 0.95] }}
          className="p-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl text-white text-center shadow-lg"
        >
          <h3 className="text-2xl mb-4">My Mission</h3>
          <p className="text-lg opacity-95 max-w-3xl mx-auto leading-relaxed">
            To craft exceptional digital products that not only meet business objectives but also 
            create meaningful impact for users. I believe in continuous learning, collaboration, 
            and pushing the boundaries of what's possible with technology.
          </p>
        </motion.div>
      </div>
    </section>
  );
}