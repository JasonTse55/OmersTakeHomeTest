import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import type { DraggableProvided } from 'react-beautiful-dnd';
import { Product } from '../interfaces';
import DraggableItemProduct from './DraggableItemProduct';

export default {
    title: 'Draggable Item Product',
    component: DraggableItemProduct,
} as ComponentMeta<typeof DraggableItemProduct>;

const Template: ComponentStory<typeof DraggableItemProduct> = (args) => <DraggableItemProduct {...args} />;

const draggableProvided: DraggableProvided = ({
    innerRef: () => {},
    draggableProps: {
        'data-rbd-draggable-context-id': '1',
        'data-rbd-draggable-id': '1',
    },
    dragHandleProps: null,
}); 

const getArgs = (ProductStatus: string) => ({
    ProductID: 2345,
    ProductName: 'Hat',
    ProductPhotoURL: 'https://i.etsystatic.com/34911642/r/il/cad00b/4318930100/il_fullxfull.4318930100_7y54.jpg',
    ProductStatus,
    draggableProvided,
    removeProduct: (product: Product) => {},
});

export const Active = Template.bind({});
Active.args = getArgs('Active');

export const InActive = Template.bind({});
InActive.args = getArgs('InActive');