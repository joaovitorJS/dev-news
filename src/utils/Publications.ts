import publicationsArray from "./publicationsArray";

export interface Publication {
  id: number;
  author: string,
  occupation: string,
  title: string,
  image: string,
  article: string
  dataCompleted: {
    href: string,
    owner: string,
  },
}

class Publications {
  publications: Publication[];

  constructor() {
    this.publications = publicationsArray;

  }

  get(): Publication[] {
    return this?.publications;
  }

  getSize(): number {
    return this?.publications.length;
  }

  getPublicationById(id: number): Publication | undefined {
    const publication = this?.publications.find((publication) => publication.id === id);
    return publication;
  }
}



export default new Publications();