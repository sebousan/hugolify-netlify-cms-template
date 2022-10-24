import { cta } from './cta.js'
import { editorial } from './editorial.js'
import { latestposts } from './latest-posts.js'
import { latestprojects } from './latest-projects.js'

export const blocks = {
    name: 'blocks',
    label: 'Blocs de contenu',
    label_singular: 'Bloc de contenu',
    widget: 'list',
    types: [
        cta,
        editorial,
        latestposts,
        latestprojects
    ]
}