class Path {
    constructor(root) {
        this.root = root
    }

    GetPath(name) {
        return `${this.root}/${name}.png`
    }
}

export default Path