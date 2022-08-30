export interface NodeDataArray {
  key: string;
  text: string;
  onRecieve: any[];
  onEnter: any[];
  transition: any[];
  location: string;
}

export interface LinkDataArray {
  from: string;
  to: string;
  fromPort: string;
  toPort: string;
  points: number[];
}

export interface Object {
  class: string;
  linkFromPortIdProperty: string;
  linkToPortIdProperty: string;
  nodeDataArray: NodeDataArray[];
  linkDataArray: LinkDataArray[];
}

export interface DataObject {
  _id: string;
  name: string;
  object: Object;
  BotID: string;
}
