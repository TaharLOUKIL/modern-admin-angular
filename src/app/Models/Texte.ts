export interface Texte {
  _id: string;
  message: string;
  createdAt: Date;
  modifiedAt: Date;
  type: string;
}

export interface Image {
  _id: string;
  Titre: string;
  url: string;
  createdAt: Date;
  modifiedAt: Date;
  type: string;
}

export interface Video {
  _id: string;
  Titre: string;
  url: string;
  createdAt: Date;
  modifiedAt: Date;
  type: string;
}

export interface Audio {
  _id: string;
  Titre: string;
  url: string;
  createdAt: Date;
  modifiedAt: Date;
  type: string;
}

export interface Fichier {
  _id: string;
  Titre: string;
  url: string;
  createdAt: Date;
  modifiedAt: Date;
}

export interface AllType {
  text: Text[];
  file: File[];
  image: Image[];
  location: Location[];
  audio: Audio[];
  video: Video[];
}
