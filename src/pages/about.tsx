import Head from 'next/head';
import { Layout } from '../components';

interface Experience {
  company: string;
  from: string;
  to: string;
  description: string;
}

enum SkillType {
  SOFT = 'SOFT',
  HARD = 'HARD',
}

export default function AboutPage() {
  const experiences: Experience[] = [
    {
      company: 'Ame Digital',
      from: 'Mar/2019',
      to: 'now',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt in ut quis adipiscing. Laoreet ipsum egestas tortor risus in integer congue. Amet lectus in eget platea feugiat pharetra. Arcu est dictum lorem a odio varius cras.',
    },
    {
      company: 'B2w Digital',
      from: 'Nov/2018',
      to: 'Mar/2019',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt in ut quis adipiscing. Laoreet ipsum egestas tortor risus in integer congue. Amet lectus in eget platea feugiat pharetra. Arcu est dictum lorem a odio varius cras.',
    },
    {
      company: 'Convés Web',
      from: 'Nov/2015',
      to: 'Oct/2018',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt in ut quis adipiscing. Laoreet ipsum egestas tortor risus in integer congue. Amet lectus in eget platea feugiat pharetra. Arcu est dictum lorem a odio varius cras.',
    },
    {
      company: 'Secretaria Municipal de Saúde de Mendes',
      from: 'Mar/2013',
      to: 'Oct/2015',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt in ut quis adipiscing. Laoreet ipsum egestas tortor risus in integer congue. Amet lectus in eget platea feugiat pharetra. Arcu est dictum lorem a odio varius cras.',
    },
  ];

  const skills = [
    { name: 'Javascript', type: SkillType.HARD },
    { name: 'Node.js', type: SkillType.HARD },
    { name: 'Golang', type: SkillType.HARD },
    { name: 'Nest.js', type: SkillType.HARD },
    { name: 'Java', type: SkillType.HARD },
    { name: 'React', type: SkillType.HARD },
    { name: 'Next.js', type: SkillType.HARD },
    { name: 'SQL', type: SkillType.HARD },
    { name: 'MongoDB', type: SkillType.HARD },
    { name: 'DynamoDB', type: SkillType.HARD },
    { name: 'MySQL', type: SkillType.HARD },
    { name: 'AWS', type: SkillType.HARD },
    { name: 'Collaboration', type: SkillType.SOFT },
    { name: 'Comunication', type: SkillType.SOFT },
    { name: 'Leadership', type: SkillType.SOFT },
    { name: 'Ownership', type: SkillType.SOFT },
    { name: 'Emotional intelligence', type: SkillType.SOFT },
  ];

  return (
    <>
      <Head>
        <title>About - Matheus Calegaro</title>
      </Head>

      <Layout>
        <>
          <h1 className="my-12 text-6xl text-white font-extrabold">About me</h1>

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

                  <p className="text-white mt-3">{exp.description}</p>
                </div>
              ))}
            </div>

            <div className="md:col-6">
              <h2 className="text-2xl text-white font-bold mb-7">Skills</h2>

              <div className="flex flex-row flex-wrap mb-9">
                {skills.map((skill, i) => (
                  <div
                    className={[
                      'bg-white',
                      'mr-3',
                      'mb-3',
                      'px-4',
                      'py-1',
                      'rounded-full',
                      'font-small',
                    ].join(' ')}
                    key={i}
                  >
                    {skill.name}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      </Layout>
    </>
  );
}
