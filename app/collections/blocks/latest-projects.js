import { title } from '../fields/title.js'

export const block_latestprojects = {
    name: 'latest-projects',
    label: 'Derniers projets',
    widget: 'object',
    required: false,
    i18n: true,
    collapsed: true,
    fields: [
        title
    ]
}