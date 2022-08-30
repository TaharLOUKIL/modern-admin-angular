// Default theme settings configurations

export class NavigationConfig {
  public config: any = {};

  constructor() {
  this.config = {
      items: [
        {
          title: 'Dashboard',
          root: true,
          icon: 'la-home',
          page: '/home',
          badge: {type: 'badge-info', value: '2'}
        },
        {
          title: 'Changelog',
          root: true,
          icon: 'la-file',
          page: 'null',
          submenu: {
            items : [
              {

              }
            ]
          }
        },
        {
          title: 'Changelog',
          root: true,
          icon: 'la-file',
          page: 'null',
          badge: {type: 'badge-danger', value: '1.0'}
        },
        {
          title: 'Support',
          root: true,
          icon: 'la-ellipsis-h feather ft-minus',
          page: 'null'
        },
        {
          title: 'Raise Support',
          root: true,
          icon: 'la-support',
          page: 'null'
        },
        {
          title: 'Documentation',
          root: true,
          icon: 'la-folder',
          page: 'null'
        }
      ]
    };
  }
}
