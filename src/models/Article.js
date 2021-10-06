export default class Article{
    constructor(id,title,body,category,categoryName=""){
        this.body = body
        this.category = category
        this.categoryName = categoryName
        this.id = id;
        this.title =title;
    }

}
export function wpToArticle(obj) {
    let firstSplit = obj.content.rendered.split('<p>')[1];
    let body = firstSplit.split('</p>')[0];
     

    return new Article(obj.id, obj.title.rendered, body, obj.categories[0],obj.categoryName);
}