/* global CMS */
import { text } from '../../fields/text.js'
import { url } from '../../fields/url.js'
import { blank } from '../../fields/blank.js'

CMS.registerEditorComponent({
    id: 'button',
    label: 'Bouton',
    fields: [
        text,
        url,
        blank
    ],
    pattern: /{{< button text="(.*)" url="(.*)" blank="(.*)" >}}/,
    fromBlock: function (match) {
        return {
            text: match[1],
            url: match[2],
            blank: match[3]
        };
    },
    toBlock: function (obj) {
        return `{{< button text="${obj.text}" url="${obj.url}" blank="${obj.blank}" >}}`;
    },
    toPreview: function (obj) {
        return `<a class="btn" href="${obj.url}">${obj.text}</a>`;
    }
});
