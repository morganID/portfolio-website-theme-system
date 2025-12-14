import { Briefcase, Calendar } from 'lucide-react';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const experiences = [
    {
      title: 'Senior Full Stack Developer',
      company: 'Tech Innovations Inc.',
      location: 'Jakarta, Indonesia',
      period: '2023 - Present',
      description: 'Leading development of enterprise-level web applications using React, Node.js, and PostgreSQL. Mentoring junior developers and implementing best practices for code quality and performance.',
      achievements: [
        'Architected and deployed 5+ production applications serving 100K+ users',
        'Improved application performance by 40% through optimization techniques',
        'Led a team of 4 developers in agile environment'
      ],
      technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'Docker']
    },
    {
      title: 'Full Stack Developer',
      company: 'Digital Solutions Co.',
      location: 'Bandung, Indonesia',
      period: '2021 - 2023',
      description: 'Developed and maintained multiple client projects including e-commerce platforms, CMS systems, and custom web applications.',
      achievements: [
        'Built 10+ client projects from scratch to deployment',
        'Reduced bug reports by 60% through comprehensive testing',
        'Implemented CI/CD pipelines reducing deployment time by 70%'
      ],
      technologies: ['Next.js', 'Express', 'MongoDB', 'Redux', 'Jest']
    },
    {
      title: 'Junior Web Developer',
      company: 'StartUp Labs',
      location: 'Surabaya, Indonesia',
      period: '2019 - 2021',
      description: 'Assisted in building responsive web applications and learned full-stack development practices under senior developers.',
      achievements: [
        'Contributed to 15+ projects across various industries',
        'Developed reusable component library used across projects',
        'Participated in code reviews and team collaboration'
      ],
      technologies: ['React', 'JavaScript', 'HTML/CSS', 'Git', 'REST APIs']
    },
    {
      title: 'Freelance Web Developer',
      company: 'Self-Employed',
      location: 'Remote',
      period: '2018 - 2019',
      description: 'Provided web development services to local businesses and startups, building websites and web applications.',
      achievements: [
        'Completed 20+ freelance projects for satisfied clients',
        'Built portfolio of diverse projects across industries',
        'Gained experience in client communication and project management'
      ],
      technologies: ['WordPress', 'PHP', 'MySQL', 'JavaScript', 'Bootstrap']
    }
  ];

  return (
    <section id="experience" className="py-24 bg-white" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: [0.6, 0.01, 0.05, 0.95] }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-gray-900 mb-6">Work Experience</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            My professional journey in software development and the impact I've made.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-200 via-purple-200 to-blue-200" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 80, scale: 0.9 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 80, scale: 0.9 }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.2,
                  ease: [0.6, 0.01, 0.05, 0.95]
                }}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Content */}
                <div className="flex-1">
                  <div className="bg-white border border-gray-200 p-8 rounded-3xl hover:shadow-lg transition-shadow shadow-sm">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl text-gray-900 mb-1">{exp.title}</h3>
                        <p className="text-blue-600 mb-1">{exp.company}</p>
                        <p className="text-gray-500 text-sm">{exp.location}</p>
                      </div>
                      <div className="flex items-center gap-2 text-gray-500 text-sm bg-gray-50 px-3 py-1.5 rounded-full">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </div>
                    </div>

                    <p className="text-gray-600 mb-4 leading-relaxed">{exp.description}</p>

                    <div className="mb-4">
                      <h4 className="text-gray-900 mb-2">Key Achievements:</h4>
                      <ul className="space-y-1.5">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="text-gray-600 text-sm leading-relaxed">
                            • {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span 
                          key={tech}
                          className="px-3 py-1.5 bg-blue-50 text-blue-600 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="hidden md:flex items-center justify-center">
                  <div className="w-5 h-5 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full border-4 border-white shadow-lg" />
                </div>

                {/* Spacer */}
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}