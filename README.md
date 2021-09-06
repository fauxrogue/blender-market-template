This repository should help you when setting up you Blender Market product page.
It has been created to match the editable area of the product page and will
give a good representation of what your final product page will look like.  
This was created using VSCode but should work in other text editors as well.

---

## Getting Started

-   Run the `index.html` page located in the `src` directory.
-   Ensure that whatever page you're working on is uncommented in the `index.html`
    file.
-   By default `_page1.html` is active uncommented. (Pages are in `src/pages`)
-   Test by commenting out `_page1.html` and uncommenting `_page2.html`.
-   Edit the contents of `_page1.html` or `_page2.html` and save to view changes.
    -   Or make your own page
        and make ensure that it's referenced in the `index.html` file.

---

## IMPORTANT

Blender Market does not allow certain HTML tags/attributes for security reasons.  
One of these forbiddne tags is the `<style>` tag, therefore you do have to use
inline styles.

### Allowed HTML tags:

```html
h1 h2 h3 h4 h5 h6 del dd address big sub tt a ul h4 cite dfn small kbd code b ins img sup pre strong blockquote acronym
dt br p div samp li ol var em i abbr span hr iframe table thead tbody tfoot tr th td caption colgroup video source font
```

### Allowed HTML attributes:

```html
name href cite class title src xml:lang height datetime alt abbr width style target allowfullscreen frameborder
contenteditable draggable align colspan scope autoplay loop muted type controls poster color
```
