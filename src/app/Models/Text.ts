export interface Text {
  _id: string;
  Message: string;
  CreatedAt: Date;
  ModifiedAt: Date;
  Type: string;
}

export interface Image {
  _id: string;
  Titre: string;
  Url: string;
  CreatedAt: Date;
  ModifiedAt: Date;
  Type: string;
}

export interface Video {
  _id: string;
  Titre: string;
  Url: string;
  CreatedAt: Date;
  ModifiedAt: Date;
  Type: string;
}

export interface Audio {
  _id: string;
  Titre: string;
  Url: string;
  CreatedAt: Date;
  ModifiedAt: Date;
  Type: string;
}

export interface File {
  _id: string;
  Titre: string;
  Url: string;
  CreatedAt: Date;
  ModifiedAt: Date;
  Type: string;
}

export interface AllType {
  text: Text[];
  file: File[];
  image: Image[];
  location: Location[];
  audio: Audio[];
  video: Video[];
}
