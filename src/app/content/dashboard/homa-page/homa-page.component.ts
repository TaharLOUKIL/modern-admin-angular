import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as go from 'gojs';
import { DataObject, NodeDataArray, Object } from 'src/app/Models/Data';
import { AllType } from 'src/app/Models/Text';
import { environment } from 'src/environments/environment';
import { AllTypeService } from '../services/Alltype.service';
import { DashbooardService } from '../services/dashbooard.service';

@Component({
  selector: 'app-homa-page',
  templateUrl: './homa-page.component.html',
  styleUrls: ['./homa-page.component.css'],
})
export class HomaPageComponent implements OnInit {
  constructor(
    public httpclient: HttpClient,
    private modalService: NgbModal,
    public dashboardservice: DashbooardService,
    public botpressservice: AllTypeService,
    private route: ActivatedRoute
  ) {}

  copyToClipboard: any;
  c: any;
  public diagram: go.Diagram;
  taggingSupportArray = [
    { id: 1, Type: 'Text' },
    { id: 2, Type: 'Image' },
    { id: 3, Type: 'Location' },
    { id: 4, Type: 'Audio' },
    { id: 5, Type: 'Video' },
    { id: 6, Type: 'File' },
  ];
  type = '';
  selectedTag = 0;
  selectedobject: any;
  selectedcontent = 0;
  listcontent = [];
  AllType: AllType;
  botid = '';
  listGraphs: DataObject[] = [];
  active: DataObject = {
    _id: '0',
    name: '0',
    object: {
      class: 'GraphLinksModel',
      linkFromPortIdProperty: 'fromPort',
      linkToPortIdProperty: 'toPort',
      nodeDataArray: [],
      linkDataArray: [],
    },
    BotID: '',
  };

  isSuccessClosed = false;
  isSuccessUpdate = false;
  isSelected = false;
  selectedNode: any;

  AddGraphFrom = new FormGroup({
    name: new FormControl('', Validators.required),
  });
  ngOnInit(): void {
    this.botid = this.route.snapshot.params.id;
    // load list of flows
    this.dashboardservice.getData(this.botid).subscribe((res: DataObject[]) => {
      console.log(res);
      this.listGraphs = res;
    });

    // load list of contents
    this.botpressservice.getData().subscribe((res: AllType) => {
      console.log(res);
      this.AllType = res;
    });
  }

  //generate random number
  entierAleatoire() {
    return Math.floor(Math.random() * (200 - 800 + 1)) + 200;
  }

  // prepare go js model
  public ngAfterViewInit(): void {
    var $ = go.GraphObject.make;
    this.diagram = $(go.Diagram, 'myDiagramDiv', {
      click: this.gojsclick.bind(this),
    });
    this.diagram.nodeTemplate = $(
      go.Node,
      { resizable: true },
      'Auto',
      //
      new go.Binding('location', 'location', go.Point.parse).makeTwoWay(
        go.Point.stringify
      ),
      $(go.Shape, 'RoundedRectangle', {
        click: this.nodeclick.bind(this),
        figure: 'RoundedRectangle',
        fill: 'white',
        stroke: '#f5f5f5',
        alignment: go.Spot.Left,
        minSize: new go.Size(200, 0),
      }),
      $(
        go.Panel,
        'Table',

        $(
          go.TextBlock,
          { row: 0 },
          'TEXT',
          new go.Binding('text', 'text').makeTwoWay(),
          {
            click: this.nodeclick.bind(this),
            font: 'bold 12pt serif',
            margin: 5,
            editable: true,
            isMultiline: false,
            textAlign: 'center',
          }
        ),
        $(
          go.TextBlock,
          { row: 1 },
          'TEXT',
          new go.Binding('text', '', () => {
            return 'On Enter';
          }).makeTwoWay(),
          {
            click: this.nodeclick.bind(this),
            font: 'bold 12pt serif',
            margin: 5,
            stroke: '#FF0000',
            editable: true,
            isMultiline: false,
            textAlign: 'center',
          }
        ),
        $(
          go.Panel,
          { row: 2 },
          'Vertical',
          new go.Binding('itemArray', 'onEnter').makeTwoWay(),
          {
            itemTemplate: $(
              go.Panel,
              'Auto',
              { margin: 3 },
              $(go.Shape, 'RoundedRectangle', {
                click: this.nodeclick.bind(this),
                fill: 'white',
                stroke: '#e8e8e8',
                minSize: new go.Size(180, 0),
              }),
              $(
                go.TextBlock,
                new go.Binding('text', '', function (data) {
                  if (data.Type == 'Text') {
                    return data.Type + ' : ' + data.Message;
                  } else {
                    return data.Type + ' : ' + data.Titre;
                  }
                })
              )
            ),
          }
        ),
        $(
          go.TextBlock,
          { row: 3 },
          'TEXT',
          new go.Binding('text', '', () => {
            return 'On Recieve';
          }).makeTwoWay(),
          {
            click: this.nodeclick.bind(this),
            font: 'bold 12pt serif',
            margin: 5,
            editable: true,
            stroke: '#FF0000',
            isMultiline: false,
            textAlign: 'center',
          }
        ),
        $(
          go.Panel,
          { row: 4 },
          'Vertical',
          new go.Binding('itemArray', 'onRecieve'),
          {
            itemTemplate: $(
              go.Panel,
              'Auto',
              { margin: 3 },
              $(go.Shape, 'RoundedRectangle', {
                click: this.nodeclick.bind(this),
                fill: 'white',
                stroke: '#e8e8e8',
                minSize: new go.Size(180, 0),
              }),
              $(
                go.TextBlock,
                new go.Binding('text', '', function (data) {
                  if (data.Type == 'Text') {
                    return data.Type + ' : ' + data.Message;
                  } else {
                    return data.Type + ' : ' + data.Titre;
                  }
                })
              )
            ),
          }
        ),
        $(
          go.TextBlock,
          { row: 5 },
          'TEXT',
          new go.Binding('text', '', () => {
            return 'Transition';
          }).makeTwoWay(),
          {
            click: this.nodeclick.bind(this),
            font: 'bold 12pt serif',
            margin: 5,
            editable: true,
            isMultiline: false,
            stroke: '#FF0000',
            textAlign: 'center',
          }
        ),
        $(
          go.Panel,
          { row: 6 },
          'Vertical',
          new go.Binding('itemArray', 'transition'),
          {
            itemTemplate: $(
              go.Panel,
              'Auto',
              { margin: 3 },
              $(go.Shape, 'RoundedRectangle', {
                click: this.nodeclick.bind(this),
                fill: 'white',
                stroke: '#e8e8e8',
                minSize: new go.Size(180, 0),
              }),
              $(
                go.TextBlock,
                new go.Binding('text', '', function (data) {
                  if (data.Type == 'Text') {
                    return data.Type + ' : ' + data.Message;
                  } else {
                    return data.Type + ' : ' + data.Titre;
                  }
                })
              )
            ),
          }
        )
      ),
      $(go.Shape, 'Ellipse', {
        fill: 'black',
        desiredSize: new go.Size(5, 5),
        alignment: go.Spot.Left,
        portId: 'out',
        fromSpot: go.Spot.Left,
        toSpot: go.Spot.Left,
        fromLinkable: true,
        toLinkable: true,
        cursor: 'pointer',
      }),
      $(go.Shape, 'Ellipse', {
        fill: 'black',
        desiredSize: new go.Size(5, 5),
        alignment: go.Spot.Right,
        portId: 'out0',
        fromSpot: go.Spot.Right,
        toSpot: go.Spot.Right,
        fromLinkable: true,
        toLinkable: true,
        cursor: 'pointer',
      })
    );

    this.diagram.linkTemplate = $(
      go.Link,
      { routing: go.Link.Orthogonal, curve: go.Link.Bezier },
      new go.Binding('points', 'points', go.Point.parse).makeTwoWay(),
      $(go.Shape, { stroke: '#898282', strokeWidth: 2 })
    );
  }
  // save action onenter onrecive transition
  saveAction() {
    if (this.type == 'OnEnter') {
      this.diagram.model.nodeDataArray.forEach((element) => {
        if (element.key == this.selectedNode.key) {
          element.onEnter.push(this.selectedobject);
        }
      });
    } else if (this.type == 'Transition') {
      this.diagram.model.nodeDataArray.forEach((element) => {
        if (element.key == this.selectedNode.key) {
          element.transition.push(this.selectedobject);
        }
      });
    } else if (this.type == 'OnRecieve') {
      this.diagram.model.nodeDataArray.forEach((element) => {
        if (element.key == this.selectedNode.key) {
          element.onRecieve.push(this.selectedobject);
        }
      });
    }

    let data = this.diagram.model.nodeDataArray;
    let obj: Object = JSON.parse(this.diagram.model.toJson());
    obj.nodeDataArray = data as NodeDataArray[];

    this.dashboardservice
      .PutData({
        _id: this.active._id,
        name: this.active.name,
        object: obj,
        BotID: this.botid,
      })
      .subscribe((res: any) => {
        document.getElementById('closeBotPress').click();
        this.listGraphs = res;
        this.isSuccessUpdate = true;
        setTimeout(() => {
          this.isSuccessUpdate = false;
        }, environment.duration);
      });
  }
  //  set the selected content
  onChangeContent(item) {
    this.selectedobject = JSON.stringify(item);
    this.selectedobject = JSON.parse(this.selectedobject);
  }
  // set the selected type
  onChange() {
    this.selectedcontent = 0;
    if (this.selectedTag == 1) {
      this.listcontent = this.AllType.text;
    } else if (this.selectedTag == 2) {
      this.listcontent = this.AllType.image;
    } else if (this.selectedTag == 3) {
      this.listcontent = this.AllType.location;
    } else if (this.selectedTag == 4) {
      this.listcontent = this.AllType.audio;
    } else if (this.selectedTag == 5) {
      this.listcontent = this.AllType.video;
    } else if (this.selectedTag == 6) {
      this.listcontent = this.AllType.file;
    }
  }
  // update diagram when change flow
  SetDiagram(todo) {
    this.active = todo;
    this.diagram.model = go.Model.fromJson(todo.object);
  }
  // open  add flow model
  BorderModel(BorderModelContent) {
    this.modalService.open(BorderModelContent, {
      windowClass: 'animated fadeInDown',
      backdrop: 'static',
      keyboard: false,
    });
  }
  // open action flow
  BorderModelBotPress(BorderModelContent, type) {
    this.type = type;
    this.modalService.open(BorderModelContent, {
      windowClass: 'animated fadeInDown',
      backdrop: 'static',
      keyboard: false,
    });
  }
  // change the selected node  when click on node
  nodeclick(e, obj) {
    this.isSelected = true;

    this.selectedNode = obj.part.data;
  }
  // unselect node when click out
  gojsclick() {
    this.isSelected = false;
  }
  // add flow
  onSubmit() {
    let name = this.AddGraphFrom.value.name;

    this.dashboardservice
      .PostData({
        _id: '',
        name: name,
        object: {
          class: 'GraphLinksModel',
          linkFromPortIdProperty: 'fromPort',
          linkToPortIdProperty: 'toPort',
          nodeDataArray: [],
          linkDataArray: [],
        },
        BotID: this.botid,
      })
      .subscribe((res: any) => {
        this.listGraphs = res;
        this.AddGraphFrom.reset();
        document.getElementById('closemodel').click();
        this.isSuccessClosed = true;
        setTimeout(() => {
          this.isSuccessClosed = false;
        }, environment.duration);
      });
  }
  // generate node id
  generate() {
    let id = () => {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    };
    return 'node-' + id();
  }
  // copy botpress model
  CopyDetails() {
    this.c = {
      class: this.active.object.class,
      linkDataArray: this.active.object.linkDataArray,
      nodeDataArray: this.active.object.nodeDataArray,
      linkFromPortIdProperty: this.active.object.linkFromPortIdProperty,
      linkToPortIdProperty: this.active.object.linkToPortIdProperty,
    };
    this.copyToClipboard = JSON.stringify(this.c) as string;
  }
  // Delete action
  Delete(e, action) {
    if (confirm('Are you sure to delete ')) {
      if (action == 'onEnter') {
        this.diagram.model.nodeDataArray.forEach((element) => {
          if (element.key == this.selectedNode.key) {
            element.onEnter.splice(element.onEnter.indexOf(e), 1);
          }
        });
      } else if (action == 'transition') {
        this.diagram.model.nodeDataArray.forEach((element) => {
          if (element.key == this.selectedNode.key) {
            element.transition.splice(element.transition.indexOf(e), 1);
          }
        });
      } else if (action == 'onRecieve') {
        this.diagram.model.nodeDataArray.forEach((element) => {
          if (element.key == this.selectedNode.key) {
            element.onRecieve.splice(element.onRecieve.indexOf(e), 1);
          }
        });
      }
      let data = this.diagram.model.nodeDataArray;
      let obj: Object = JSON.parse(this.diagram.model.toJson());
      obj.nodeDataArray = data as NodeDataArray[];

      this.dashboardservice
        .PutData({
          _id: this.active._id,
          name: this.active.name,
          object: obj,
          BotID: this.botid,
        })
        .subscribe((res: any) => {
          this.listGraphs = res.Value;

          this.isSuccessUpdate = true;
          setTimeout(() => {
            this.isSuccessUpdate = false;
          }, environment.duration);
        });
    }
    // this.diagram.undoManager.clear();
  }
  // clear the node
  ClearNode() {
    this.diagram.model.clear();
    this.diagram.model = go.Model.fromJson(this.diagram.model);
  }
  // add new node
  addnode() {
    if (this.active._id != '0') {
      var myPoint =
        (go.Point, { x: this.entierAleatoire(), y: -this.entierAleatoire() });
      let txt = this.generate();
      this.diagram.model.addNodeData({
        key: txt,
        text: txt,
        onEnter: [],
        onRecieve: [],
        transition: [],
        location: myPoint.x + ' ' + myPoint.y,
      });
    }
  }
  // save model
  Savegojs() {
    let data = this.diagram.model.nodeDataArray;
    let obj: Object = JSON.parse(this.diagram.model.toJson());
    obj.nodeDataArray = data as NodeDataArray[];
    console.log(this.active._id);

    this.dashboardservice
      .PutData({
        _id: this.active._id,
        name: this.active.name,
        object: obj,
        BotID: this.botid,
      })
      .subscribe((res: any) => {
        this.listGraphs = res;
        console.log(res);
        this.isSuccessUpdate = true;
        setTimeout(() => {
          this.isSuccessUpdate = false;
        }, environment.duration);
      });
  }
}
