import React from 'react';
import Head from 'next/head';
import { useQuery } from '@apollo/react-hooks';
import { POSTS } from '../../graphql/about.queries';
import { PageDetailLayout } from '../../components/pageLayout'

const About = () => {
  // Create a query hook
  const { data, loading, error } = useQuery(POSTS);
  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error: {JSON.stringify(error)}</p>;
  }
  return (
    <PageDetailLayout title="About">
        about us detail
        {data.posts.edges.map(post => {
          return (
            <div key={`post__${post.node.id}`}>
              <h2>{post.node.title}</h2>
              <div dangerouslySetInnerHTML={{ __html: post.node.content }}/>
            </div>
          );
        })}
    </PageDetailLayout>
  );
};

export default About;
