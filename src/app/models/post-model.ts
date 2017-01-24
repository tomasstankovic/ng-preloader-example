export class PostModel {
  id: number;
  userId: number;
  title: string;
  body: string;

  constructor(data) {
    this.id = data.id;
    this.userId = data.userId;
    this.title = data.title;
    this.body = data.body;
  }
}
