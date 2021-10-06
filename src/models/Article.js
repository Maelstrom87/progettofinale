export default class Article{
    constructor(id,title,body,category,categoryName="",preview,image=""){
        this.body = body;
        this.category = category;
        this.categoryName = categoryName;
        this.id = id;
        this.image=image;
        this.preview =preview;
        this.title =title;
    }

}
export function wpToArticle(obj) {
    let body = obj.content.rendered.split('<p>')[1].split('</p>')[0];
    let preview = obj.excerpt.rendered.split('<p>')[1].split('<a')[0].substring(0, 200)+'...';

    return new Article(obj.id, obj.title.rendered, body, obj.categories[0],obj.categoryName,preview,obj.better_featured_image.source_url);
}