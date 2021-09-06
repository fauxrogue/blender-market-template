(function includeHTML() {
    let element, file, xhr;
    const allElements = document.getElementsByTagName('*');

    for (element of allElements) {
        file = element.getAttribute('bm-replace-content');

        if (!file) continue;

        xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (this.readyState !== 4) {
                return;
            } else if (this.status === 200) {
                element.innerHTML = this.responseText;
            } else if (this.status === 404) {
                element.innerHTML = 'Page not found.';
            }

            // On the second recursive call this attribute won't be present.
            element.removeAttribute('bm-replace-content');
            includeHTML();
        };

        xhr.open('GET', file, true);
        xhr.send();
        return;
    }
})();
