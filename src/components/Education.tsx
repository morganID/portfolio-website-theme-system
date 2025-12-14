import { GraduationCap, Award, BookOpen, Calendar } from 'lucide-react';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

export function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const educations = [
    {
      degree: 'Bachelor of Computer Science',
      institution: 'University of Indonesia',
      location: 'Jakarta, Indonesia',
      period: '2015 - 2019',
      gpa: '3.8/4.0',
      description: 'Focused on software engineering, data structures, algorithms, and web development.',
      achievements: [
        'Dean\'s List for 6 consecutive semesters',
        'Led university programming club',
        'Won 1st place in National Hackathon 2018'
      ]
    },
    {
      degree: 'High School Diploma',
      institution: 'SMA Negeri 1 Jakarta',
      location: 'Jakarta, Indonesia',
      period: '2012 - 2015',
      gpa: '3.9/4.0',
      description: 'Science major with focus on mathematics and computer science.',
      achievements: [
        'Top 5% of graduating class',
        'National Science Olympiad participant',
        'Computer club president'
      ]
    }
  ];

  const certifications = [
    {
      title: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      date: '2023',
      icon: <Award className="w-5 h-5" />
    },
    {
      title: 'Professional Scrum Master I',
      issuer: 'Scrum.org',
      date: '2022',
      icon: <Award className="w-5 h-5" />
    },
    {
      title: 'Meta Front-End Developer',
      issuer: 'Meta (Coursera)',
      date: '2022',
      icon: <Award className="w-5 h-5" />
    },
    {
      title: 'MongoDB Certified Developer',
      issuer: 'MongoDB University',
      date: '2021',
      icon: <Award className="w-5 h-5" />
    },
    {
      title: 'Google UX Design Certificate',
      issuer: 'Google (Coursera)',
      date: '2021',
      icon: <Award className="w-5 h-5" />
    },
    {
      title: 'React - The Complete Guide',
      issuer: 'Udemy',
      date: '2020',
      icon: <Award className="w-5 h-5" />
    }
  ];

  return (
    <section id="education" className="py-24 bg-gray-50" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: [0.6, 0.01, 0.05, 0.95] }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-gray-900 mb-6">Education & Certifications</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            My academic background and professional certifications that shaped my expertise.
          </p>
        </motion.div>

        {/* Education */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, ease: [0.6, 0.01, 0.05, 0.95] }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="p-3 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-2xl shadow-md">
              <GraduationCap className="w-6 h-6" />
            </div>
            <h3 className="text-3xl text-gray-900">Academic Background</h3>
          </motion.div>

          <div className="space-y-6">
            {educations.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 80, scale: 0.9 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 80, scale: 0.9 }}
                transition={{ 
                  duration: 0.8, 
                  delay: 0.2 + index * 0.15,
                  ease: [0.6, 0.01, 0.05, 0.95]
                }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-white border border-gray-200 p-8 rounded-3xl shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h4 className="text-2xl text-gray-900 mb-1">{edu.degree}</h4>
                    <p className="text-blue-600 mb-1">{edu.institution}</p>
                    <p className="text-gray-500 text-sm">{edu.location}</p>
                  </div>
                  <div className="mt-2 md:mt-0 text-left md:text-right">
                    <div className="flex items-center gap-2 text-gray-500 text-sm mb-1 bg-gray-50 px-3 py-1.5 rounded-full inline-flex">
                      <Calendar className="w-4 h-4" />
                      {edu.period}
                    </div>
                    <p className="text-blue-600 mt-1">GPA: {edu.gpa}</p>
                  </div>
                </div>

                <p className="text-gray-600 mb-4 leading-relaxed">{edu.description}</p>

                <div>
                  <h5 className="text-gray-900 mb-2">Notable Achievements:</h5>
                  <ul className="space-y-1.5">
                    {edu.achievements.map((achievement, i) => (
                      <li key={i} className="text-gray-600 text-sm leading-relaxed">
                        • {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.6, 0.01, 0.05, 0.95] }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="p-3 bg-gradient-to-br from-green-500 to-green-600 text-white rounded-2xl shadow-md">
              <BookOpen className="w-6 h-6" />
            </div>
            <h3 className="text-3xl text-gray-900">Professional Certifications</h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 80, scale: 0.9 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 80, scale: 0.9 }}
                transition={{ 
                  duration: 0.7, 
                  delay: 0.6 + index * 0.1,
                  ease: [0.6, 0.01, 0.05, 0.95]
                }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white border border-gray-200 p-6 rounded-3xl shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className="p-2.5 bg-green-50 text-green-600 rounded-xl">
                    {cert.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-gray-900 mb-1 leading-snug">{cert.title}</h4>
                    <p className="text-gray-600 text-sm mb-1">{cert.issuer}</p>
                    <p className="text-gray-500 text-xs">{cert.date}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}