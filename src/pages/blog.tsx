import Head from 'next/head';
import Link from 'next/link';
import matter from 'gray-matter';

import { Layout } from '../components';

export default function BlogIndexPage(props) {
  return (
    <>
      <Head>
        <title>Blog posts - Matheus Calegaro</title>
      </Head>

      <Layout>
        <>
          <h1 className="my-12 text-5xl md:text-6xl text-white font-extrabold">Blog</h1>

          <ul>
            {props.allPosts.map((post, i) => (
              <li key={i}>
                <Link href={{ pathname: `/blog/${post.slug}` }}>
                  <a className="text-white mt-3">{post.frontmatter.title}</a>
                </Link>
              </li>
            ))}
          </ul>
        </>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const posts = ((context) => {
    const keys = context.keys();
    const values = keys.map(context);

    const data = keys.map((key, index) => {
      const slug = key
        .replace(/^.*[\\\/]/, '')
        .split('.')
        .slice(0, -1)
        .join('.');

      const value = values[index];

      // @ts-ignore
      const document = matter(value.default);

      return {
        frontmatter: document.data,
        markdownBody: document.content,
        slug,
      };
    });

    return data;
  })(require.context('../../posts', true, /\.md$/));

  return {
    props: {
      allPosts: posts,
    },
  };
}
