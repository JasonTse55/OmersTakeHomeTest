import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { DragDropContext } from 'react-beautiful-dnd';
import DraggableListProduct from './DraggableListProduct';
import { Product } from '../interfaces';

export default {
    title: 'Draggable List Product',
    component: DraggableListProduct,
} as ComponentMeta<typeof DraggableListProduct>;

const Template: ComponentStory<typeof DraggableListProduct> = (args) => (
    <DragDropContext onDragEnd={() => {}}>
        <DraggableListProduct {...args} />
    </DragDropContext>
);

const getArgs = (ProductStatus: string) => ({
    ID: '12345',
    listTitle: 'Test List',
    removeProduct: (product: Product) => {},
    items: [
        {
            ProductID: 1234,
            ProductName: 'Hat',
            ProductPhotoURL: 'https://i.etsystatic.com/34911642/r/il/cad00b/4318930100/il_fullxfull.4318930100_7y54.jpg',
            ProductStatus
        },
        {
            ProductID: 1235,
            ProductName: 'Shoes',
            ProductPhotoURL: 'https://www.brownsshoes.com/dw/image/v2/BFTX_PRD/on/demandware.static/-/Sites-brownsshoes-master-catalog/default/dw0c1cee2a/256066_1.jpg',
            ProductStatus
        },
        {
            ProductID: 1236,
            ProductName: 'Pants',
            ProductPhotoURL: 'https://img1.shopcider.com/product/1655982336000-PHYCSs.jpg',
            ProductStatus
        },
        {
            ProductID: 1237,
            ProductName: 'Shirt',
            ProductPhotoURL: 'https://i.ebayimg.com/images/g/9o4AAOSwV2hjiCR1/s-l1600.jpg',
            ProductStatus
        },
        {
            ProductID: 1238,
            ProductName: 'Coat',
            ProductPhotoURL: 'https://cdn.shopify.com/s/files/1/0073/6585/3297/products/d63061a1467ee58bab4af482b94ba931.jpg',
            ProductStatus
        }
    ],
});

export const Active = Template.bind({});
Active.args = getArgs('Active');

export const InActive = Template.bind({});
InActive.args = getArgs('InActive');