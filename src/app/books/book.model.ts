export class Book {
  public title: string;
  public name: string;
  public genre: string;
  public description: string;
  public imagePath: string;

  // not available outside model
  constructor(title: string, name: string, genre: string, description: string, imagePath: string) {
    this.title = title;
    this.name = name;
    this.genre = genre;
    this.description = description;
    this.imagePath = imagePath;
  }
}
