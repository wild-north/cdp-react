export class Task {
    constructor(id, name, catId, desc = '') {
        this.id = id;
        this.name = name;
        this.categoryId = catId;
        this.description = desc;
        this.done = false;
    }
}
export class Category {
    constructor(id, name, parentId) {
        this.id = id;
        this.name = name;
        this.parentId = parentId;
        this.opened = false;
    }
}