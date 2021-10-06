export default class Page{
    constructor(id,title,body){
        this.body = body
        this.id = id;
        this.title =title;
    }

}
export function wpToPage(obj) {
    let body = obj.content.rendered.split('<p>')[1].split('</p>')[0];

    return new Page(obj.id, obj.title.rendered, body);
}