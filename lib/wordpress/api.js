//All posts
export const ALL_POSTS = `
    query AllPosts {
        posts(first: 20, where: {orderby: {field: DATE, order: DESC}}) {
        nodes {
            id
            slug
            title
            excerpt
        }
        }
    }
`;


//Get a post by slug
export const GET_POST_BY_SLUG = `
query PostBySlug($id: ID!, $idType: PostIdType!) {
    post(id: $id, idType: $idType) {
      title
      slug
      content
      date
      featuredImage {
        node {
          sourceUrl
        }
      }
    }
  }
`;  