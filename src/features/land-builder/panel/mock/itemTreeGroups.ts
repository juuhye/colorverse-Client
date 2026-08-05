import { LandTreeGroup } from '../model/type'

export const itemTreeGroups: LandTreeGroup[] = [
  {
    id: 'land',
    label: '랜드 아이템',
    open: true,
    items: [
      {
        id: 'sky',
        label: 'Sky Item Instance',
        visible: true,
        locked: true,
        selected: false,
      },
      {
        id: 'nature',
        label: 'Nature Item Instance',
        visible: false,
        locked: true,
        selected: false,
        children: [
          {
            id: 'building',
            label: 'Building Item Instance',
            visible: false,
            locked: true,
            selected: false,
            children: [
              {
                id: 'furniture-item',
                label: 'Furniture Item',
                visible: true,
                locked: true,
                selected: false,
              },
              {
                id: 'furniture',
                label: 'Furniture',
                visible: false,
                locked: true,
                selected: false,
              },
            ],
          },
        ],
      },
      {
        id: 'base-parts',
        label: 'Base Parts Item Instance',
        visible: true,
        locked: true,
        selected: true,
        children: [
          {
            id: 'building',
            label: 'Building Item Instance',
            visible: false,
            locked: true,
            selected: false,
            children: [
              {
                id: 'furniture-item',
                label: 'Furniture Item',
                visible: true,
                locked: true,
                selected: false,
              },
              {
                id: 'furniture',
                label: 'Furniture',
                visible: false,
                locked: true,
                selected: false,
              },
            ],
          },
        ],
      },
      {
        id: 'item-instance-1',
        label: 'Item Instance (Use Only)',
        visible: false,
        locked: true,
        selected: false,
      },
      {
        id: 'item-instance-2',
        label: 'Item Instance (Use Only)',
        visible: false,
        locked: true,
        selected: false,
      },
      {
        id: 'item-instance-3',
        label: 'Item Instance (Use Only)',
        visible: false,
        locked: true,
        selected: false,
      },
    ],
  },
  { id: 'avatar', label: '아바타 아이템', open: false, items: [] },
  { id: 'prop', label: '프랍 아이템', open: false, items: [] },
  { id: 'asset', label: '애셋 아이템', open: false, items: [] },
]
