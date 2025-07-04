import sanityClient from '@sanity/client';

export const client = sanityClient({
  projectId: '1cwx1hlj',
  dataset: 'production',
  apiVersion: '2022-03-10',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
});
