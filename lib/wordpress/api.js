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
      modified
      date
      seo {
        metaDesc
        metaKeywords
        title
        twitterDescription
        opengraphDescription
        twitterTitle
      }
      categories {
        nodes {
          name
          id
          slug
          categoryInfo {
            emoji
          }
        }
      }
      subtitle {
        subtitle
      }
      author {
        node {
          name
          nicename
          lastName
          firstName
        }
      }
      typeOfPost {
        typeOfPost
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
  categories(first: 30) {
    edges {
      node {
        parent {
          node {
            id
            slug
            name
            count
            categoryInfo {
              logo
            }
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
    categoryInfo {
      logo
    }
    posts {
      nodes {
        title
        id
        slug
        categories {
          nodes {
            name
          }
        }
      }
    }
    children {
      nodes {
        name
        slug
        id
        categoryId
        categoryInfo {
          icon
          logo
        }
      }
    }
  }
}
`;

export const GET_ALL_PROBLEM_LIST = `
query MyQuery {
  problems {
    nodes {
      id
      slug
      title
      customProblem {
        difficulty
      }
    }
  }
}
`;

export const GET_PROBLEM_BY_SLUG = `
query PriblemBySlug($id: ID!, $idType: ProblemIdType!) {
  problem(id: $id, idType: $idType) {
    id
    title
    content
    seo {
      opengraphTitle
      opengraphDescription
    }
  }
}
`;