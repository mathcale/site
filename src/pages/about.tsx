import { Fragment } from 'react';
import Head from 'next/head';

import { Layout } from '../components';

interface Experience {
  company: string;
  from: string;
  to: string;
  description: string;
  role: string;
  stack?: string[];
}

enum SkillType {
  SOFT = 'SOFT',
  HARD = 'HARD',
}

interface SkillItem {
  name: string;
  type?: SkillType;
}

interface Skill {
  title: string;
  items: SkillItem[];
}

interface SkillsMap {
  [key: string]: Skill;
}

export default function AboutPage() {
  const experiences: Experience[] = [
    {
      company: 'Mercado Libre',
      from: 'May/2023',
      to: 'now',
      description:
        "Full-stack engineering and development of an internal data enrichment microsservice for Mercado Envios' fullfilment centers (Full)",
      role: 'Semi-Sr. Software Engineer',
      stack: ['Go', 'Node.js', 'React'],
    },
    {
      company: 'Gupy',
      from: 'Mar/2022',
      to: 'Feb/2023',
      description:
        'Worked on "Admissão", an admission management SaaS focused on reducing companies\' "time to admit" by automating processes like document collecting and validation, contract signing and overall organization, and also improving their pre-employees\' experience.',
      role: 'Sr. Software Engineer',
      stack: ['Node.js', 'React', 'AWS'],
    },
    {
      company: 'Ame Digital',
      from: 'Mar/2019',
      to: 'Feb/2022',
      description:
        'Built "Ame Pro", a mobile POS solution with React Native, Node.js, Typescript, Go and AWS (mostly serverless) until early 2021. Then joined a team to help build a payment gateway from scratch with Java and Spring WebFlux.',
      role: 'Software Engineer',
      stack: ['Node.js', 'React Native', 'Go', 'Java', 'Kotlin', 'AWS', 'DynamoDB', 'AuroraDB'],
    },
    {
      company: 'B2W Digital',
      from: 'Nov/2018',
      to: 'Mar/2019',
      description:
        'Development and maintenance of highly available, fault-tolerant applications with Java/Groovy (Spring, Grails), Go and Node.js (Electron), always following the best practices for both code and tests. Was an active member of the Hydra project, a POS solution built exclusively for Lojas Americanas ($LAME4, one of the biggest retailers in Brazil with 1600+ stores all over the country).',
      role: 'Software Engineer',
      stack: ['Java', 'Go', 'Node.js', 'AWS', 'Spring Boot', 'Grails', 'MongoDB', 'AuroraDB'],
    },
    {
      company: 'Convés Web',
      from: 'Nov/2015',
      to: 'Oct/2018',
      description:
        'Development of web apps and websites, such as institutional pages, information systems with specific requirements, apps with web-services integration and e-commerce.',
      role: 'Full-stack developer',
      stack: ['PHP', 'Laravel', 'Angular.js', 'Javascript', 'MySQL', 'Magento', 'Wordpress'],
    },
    {
      company: 'Secretaria Municipal de Saúde de Mendes',
      from: 'Mar/2013',
      to: 'Oct/2015',
      description:
        'Provided hardware, software and networks support for end users (aka. "the IT guy").',
      role: 'Intern',
    },
  ];

  const skills: SkillsMap = {
    engineering: {
      title: 'Software engineering',
      items: [
        { name: 'Design patterns' },
        { name: 'Solutions architecturing' },
        { name: 'Clean code' },
        { name: 'Clean architecture' },
        { name: 'Testing' },
      ],
    },
    languages: {
      title: 'Languages',
      items: [
        { name: 'Javascript/Typescript', type: SkillType.HARD },
        { name: 'Golang', type: SkillType.HARD },
        { name: 'Java', type: SkillType.HARD },
        { name: 'SQL', type: SkillType.HARD },
        { name: 'HTML', type: SkillType.HARD },
        { name: 'CSS', type: SkillType.HARD },
      ],
    },
    backend: {
      title: 'Back-end',
      items: [
        { name: 'Node.js', type: SkillType.HARD },
        { name: 'Nest.js', type: SkillType.HARD },
        { name: 'Spring Boot', type: SkillType.HARD },
        { name: 'Spring WebFlux', type: SkillType.HARD },
      ],
    },
    frontend: {
      title: 'Front-end',
      items: [
        { name: 'React', type: SkillType.HARD },
        { name: 'React Native', type: SkillType.HARD },
        { name: 'Next.js', type: SkillType.HARD },
        { name: 'Gatsby', type: SkillType.HARD },
        { name: 'Vue.js', type: SkillType.HARD },
        { name: 'Tailwind', type: SkillType.HARD },
        { name: 'Bootstrap', type: SkillType.HARD },
        { name: 'Chakra UI', type: SkillType.HARD },
        { name: 'Styled Components', type: SkillType.HARD },
      ],
    },
    databases: {
      title: 'Databases',
      items: [
        { name: 'MongoDB', type: SkillType.HARD },
        { name: 'DynamoDB', type: SkillType.HARD },
        { name: 'MySQL', type: SkillType.HARD },
        { name: 'PostgreSQL', type: SkillType.HARD },
        { name: 'Redis', type: SkillType.HARD },
        { name: 'Elasticsearch', type: SkillType.HARD },
      ],
    },
    messaging: {
      title: 'Messaging/asynchronism',
      items: [
        { name: 'SQS' },
        { name: 'SNS' },
        { name: 'Kinesis' },
        { name: 'AWS IoT Core' },
        { name: 'RabbitMQ' },
      ],
    },
    devops: {
      title: 'DevOps',
      items: [
        { name: 'Docker', type: SkillType.HARD },
        { name: 'CloudFormation', type: SkillType.HARD },
        { name: 'CodePipeline', type: SkillType.HARD },
        { name: 'Github Actions', type: SkillType.HARD },
      ],
    },
    cloud: {
      title: 'Cloud providers/services',
      items: [
        { name: 'AWS' },
        { name: 'Digital Ocean' },
        { name: 'Linode' },
        { name: 'Heroku' },
        { name: 'Firebase' },
        { name: 'Supabase' },
      ],
    },
    soft: {
      title: 'Non-technical',
      items: [
        { name: 'Collaboration', type: SkillType.SOFT },
        { name: 'Comunication', type: SkillType.SOFT },
        { name: 'Leadership', type: SkillType.SOFT },
        { name: 'Ownership', type: SkillType.SOFT },
        { name: 'Emotional intelligence', type: SkillType.SOFT },
      ],
    },
  };

  return (
    <>
      <Head>
        <title>About - Matheus Calegaro</title>
      </Head>

      <Layout>
        <>
          <h1 className="my-12 text-5xl md:text-6xl text-white font-extrabold">About me</h1>

          <div className="row">
            <div className="md:col-6">
              <h2 className="text-2xl text-white font-bold mb-7">Experiences</h2>

              {experiences.map((exp, i) => (
                <div className="mb-9" key={i}>
                  <h3 className="text-lg text-white font-medium align-middle">
                    {exp.company}

                    <span className="ml-2 text-gray-500 text-sm font-regular">
                      {exp.from} - {exp.to}
                    </span>
                  </h3>

                  <h4 className="text-md text-gray-400 font-medium mb-3">{exp.role}</h4>

                  <p className="text-white mt-3">{exp.description}</p>

                  {exp.stack && (
                    <div className="flex flex-row flex-wrap mt-3">
                      <p className="font-small font-bold text-gray-500">
                        Stack: <span className="font-normal">{exp.stack.join(', ')}</span>
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="md:col-6">
              <h2 className="text-2xl text-white font-bold mb-7">Skills</h2>

              {Object.keys(skills).map((key, i) => (
                <Fragment key={i}>
                  <h3 className="text-md text-gray-100 mb-3">{skills[key].title}</h3>

                  <div className="flex flex-row flex-wrap mb-3">
                    {skills[key].items.map((item, j) => (
                      <div
                        className="bg-zinc-100 mr-3 mb-3 px-4 py-1 rounded-full font-small"
                        key={j}
                      >
                        {item.name}
                      </div>
                    ))}
                  </div>
                </Fragment>
              ))}
            </div>
          </div>
        </>
      </Layout>
    </>
  );
}
