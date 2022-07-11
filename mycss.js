const myCSS = {
    toggleAnimation: (element, className) => {
        element.classList.remove(className)
        setTimeout(() => {
            element.classList.add(className)
        }, 100);
        return true
    },
    classIncludes: (element, classNames) => {
        if (Array.isArray(classNames) == false) return { matches: 0, test: false }
        const regex = new RegExp(`(?<!\\w|-)${classNames.join('|')}(?!\\w|-)`, "g")
        const match = element.classList.toString().match(regex)
        return { matches: match, test: match != null }
    },
    classRemove: (element, className) => element.classList.remove(className),
    classRemoveInArray: (elements, className) => elements.forEach(element =>
        element.classList.remove(className))

};
export { myCSS }