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
                  buildHookId: '5e566846a94f8d01ed4875e8',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog22-studio',
                  apiId: '4cf47d15-744d-426f-a5d7-1308b55effa4'
                },
                {
                  buildHookId: '5e56684698a1b4141dafd20f',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog22',
                  apiId: '9d827ba7-711c-4a75-a2a8-b40deedd36ec'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/nicholasklem/sanity-gatsby-blog22',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog22.netlify.com', category: 'apps' }
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
