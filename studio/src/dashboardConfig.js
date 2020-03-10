export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e67ce671843bc10e2fa0d1b',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-7ukje6u7',
                  apiId: '21a6a5c0-f7da-48c5-b71d-37b97f65707f'
                },
                {
                  buildHookId: '5e67ce675bad52536c7f3b7c',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-zb6vy9ns',
                  apiId: '72ad1579-1201-4a49-9113-13d3687095d6'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/chipev/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-zb6vy9ns.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
