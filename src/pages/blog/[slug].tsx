import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
import Head from 'next/head';

import { Layout } from '../../components';

const POSTS_PATH = join(process.cwd(), 'posts');

export default function BlogPostPage(props) {
  return (
    <>
      <Head>
        <title>{props.frontmatter.title} - Blog - Matheus Calegaro</title>
      </Head>

      <Layout>
        <article className="mt-7">
          <h1 className="my-12 text-5xl md:text-6xl text-white font-extrabold">
            {props.frontmatter.title}
          </h1>

          <div>
            <ReactMarkdown
              children={props.markdownBody}
              components={{
                p({ children, ...props }) {
                  return <p className="text-white">{children}</p>;
                },
              }}
            />
          </div>
        </article>
      </Layout>
    </>
  );
}

export async function getStaticProps({ ...ctx }) {
  const { slug } = ctx.params;
  const content = await import(`../../../posts/${slug}.md`);
  const data = matter(content.default);

  return {
    props: {
      frontmatter: data.data,
      markdownBody: data.content,
    },
  };
}

export async function getStaticPaths() {
  const paths = fs
    .readdirSync(POSTS_PATH)
    .map((path) => path.replace(/\.md?$/, ''))
    .map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
}
