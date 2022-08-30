// Default menu settings configurations

export interface MenuItem {
  title: string;
  icon: string;
  page: string;
  isExternalLink?: boolean;
  issupportExternalLink?: boolean;
  isStarterkitExternalLink?: boolean;
  badge: { type: string; value: string };
  submenu: {
    items: Partial<MenuItem>[];
  };
  section: string;
}

export interface MenuConfig {
  horizontal_menu: {
    items: Partial<MenuItem>[];
  };
  vertical_menu: {
    items: Partial<MenuItem>[];
  };
}

export const MenuSettingsConfig: MenuConfig = {
  horizontal_menu: { items: [] },
  vertical_menu: {
    items: [
      {
        title: 'Bots',
        icon: 'la-code-fork',
        page: '',
      },
      {
        title: 'contents',
        icon: 'la-home',
        page: 'null',
        badge: { type: 'badge-info', value: '6' },
        submenu: {
          items: [
            {
              title: 'Text',
              page: '/content/Text',
            },
            {
              title: 'Location',
              page: '/content/Location',
            },
            {
              title: 'Image',
              page: '/content/Image',
            },
            {
              title: 'Video',
              page: '/content/Video',
            },
            {
              title: 'File',
              page: '/content/File',
            },
            {
              title: 'Audio',
              page: '/content/Audio',
            },
          ],
        },
      },
    ],
  },
};
