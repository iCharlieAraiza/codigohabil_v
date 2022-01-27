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
      subtitle {
        subtitle
      }
      featuredImage {
        node {
          sourceUrl
        }
      }
    }
  }
`;  


//Get all categories

export const GET_ALL_CATEGORIES = `
query MyQuery {
  categories {
    edges {
      node {
        parent {
          node {
            slug
            name
          }
        }
      }
    }
  }
}

`;

export const GET_CATEGORY_BY_SLUG = `
query MyQuery($id: ID!, $idType: CategoryIdType!) {
  category(id: $id, idType: $idType) {
    id
    name
    posts {
      nodes {
        title
        id
      }
    }
    children {
      nodes {
        name
        slug
        id
      }
    }
  }
}
`;
