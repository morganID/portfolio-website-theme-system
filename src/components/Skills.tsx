import { Code2, Database, Globe, Server, Palette, Wrench } from 'lucide-react';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const skillCategories = [
    {
      category: 'Frontend',
      icon: <Globe className="w-6 h-6" />,
      color: 'from-blue-500 to-blue-600',
      skills: [
        { name: 'React', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'Next.js', level: 88 },
        { name: 'Tailwind CSS', level: 92 },
        { name: 'Redux', level: 85 }
      ]
    },
    {
      category: 'Backend',
      icon: <Server className="w-6 h-6" />,
      color: 'from-green-500 to-green-600',
      skills: [
        { name: 'Node.js', level: 90 },
        { name: 'Express', level: 88 },
        { name: 'Python', level: 85 },
        { name: 'Django', level: 80 },
        { name: 'REST APIs', level: 92 }
      ]
    },
    {
      category: 'Database',
      icon: <Database className="w-6 h-6" />,
      color: 'from-purple-500 to-purple-600',
      skills: [
        { name: 'PostgreSQL', level: 88 },
        { name: 'MongoDB', level: 85 },
        { name: 'MySQL', level: 82 },
        { name: 'Redis', level: 78 },
        { name: 'Supabase', level: 85 }
      ]
    },
    {
      category: 'Design',
      icon: <Palette className="w-6 h-6" />,
      color: 'from-pink-500 to-pink-600',
      skills: [
        { name: 'UI/UX Design', level: 85 },
        { name: 'Figma', level: 88 },
        { name: 'Responsive Design', level: 95 },
        { name: 'Animation', level: 82 },
        { name: 'Prototyping', level: 80 }
      ]
    },
    {
      category: 'DevOps & Tools',
      icon: <Wrench className="w-6 h-6" />,
      color: 'from-orange-500 to-orange-600',
      skills: [
        { name: 'Git & GitHub', level: 92 },
        { name: 'Docker', level: 80 },
        { name: 'AWS', level: 75 },
        { name: 'CI/CD', level: 78 },
        { name: 'Jest', level: 85 }
      ]
    },
    {
      category: 'Programming',
      icon: <Code2 className="w-6 h-6" />,
      color: 'from-yellow-500 to-yellow-600',
      skills: [
        { name: 'JavaScript', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'Python', level: 85 },
        { name: 'HTML/CSS', level: 98 },
        { name: 'SQL', level: 88 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 bg-gray-50" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: [0.6, 0.01, 0.05, 0.95] }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-gray-900 mb-6">Skills & Expertise</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            A comprehensive overview of my technical skills and proficiency levels across various technologies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div 
              key={category.category}
              initial={{ opacity: 0, y: 80, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 80, scale: 0.9 }}
              transition={{ 
                duration: 0.7, 
                delay: categoryIndex * 0.1,
                ease: [0.6, 0.01, 0.05, 0.95]
              }}
              className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-lg transition-shadow border border-gray-200"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-3 bg-gradient-to-br ${category.color} text-white rounded-2xl shadow-md`}>
                  {category.icon}
                </div>
                <h3 className="text-2xl text-gray-900">{category.category}</h3>
              </div>

              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-700">{skill.name}</span>
                      <span className="text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ 
                          duration: 1, 
                          delay: categoryIndex * 0.1 + skillIndex * 0.05,
                          ease: [0.6, 0.01, 0.05, 0.95]
                        }}
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full shadow-sm`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}