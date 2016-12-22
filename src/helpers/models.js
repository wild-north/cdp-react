export class Task {
    constructor(id, name, catId, desc = '') {
        this.id = id;
        this.name = name;
        this.categoryId = catId;
        this.description = desc;
        this.isActive = false;
    }
}
export class Category {
    constructor(id, name, parentId, kids = []) {
        this.id = id;
        this.name = name;
        this.parentId = parentId;
        this.opened = false;
    }
}