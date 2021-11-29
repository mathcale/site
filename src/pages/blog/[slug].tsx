import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';

import { Layout } from '../../components';

const POSTS_PATH = join(process.cwd(), 'posts');

export default function BlogPostPage(props) {
  return (
    <Layout>
      <article>
        <h1>{props.frontmatter.title}</h1>

        <div>
          <ReactMarkdown children={props.markdownBody} />
        </div>
      </article>
    </Layout>
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
