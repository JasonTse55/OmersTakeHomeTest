import React from 'react';
import { render, screen } from '@testing-library/react'
import { DragDropContext } from 'react-beautiful-dnd';
import DraggableListProduct from './DraggableListProduct';
import { Product } from '../interfaces';

describe('DraggableListProduct', () => {
    it('rendersDraggableList', async () => {
        const ID = '1234';
        const props = {
            ID,
            listTitle: 'Test List',
            removeProduct: (product: Product) => {},
            items: [
                {
                    ProductID: 1234,
                    ProductName: 'Hat',
                    ProductPhotoURL: 'https://i.etsystatic.com/34911642/r/il/cad00b/4318930100/il_fullxfull.4318930100_7y54.jpg',
                    ProductStatus: 'Active'
                },
                {
                    ProductID: 1235,
                    ProductName: 'Shoes',
                    ProductPhotoURL: 'https://www.brownsshoes.com/dw/image/v2/BFTX_PRD/on/demandware.static/-/Sites-brownsshoes-master-catalog/default/dw0c1cee2a/256066_1.jpg',
                    ProductStatus: 'Active'
                },
                {
                    ProductID: 1236,
                    ProductName: 'Pants',
                    ProductPhotoURL: 'https://img1.shopcider.com/product/1655982336000-PHYCSs.jpg',
                    ProductStatus: 'Active'
                },
            ],
        };
        render(
            <DragDropContext onDragEnd={() => {}}>
                <DraggableListProduct {...props} />
            </DragDropContext>
        );
        expect(screen.getByTestId(`droppable-container-${ID}`)).toBeInTheDocument();
        expect(screen.getByTestId(`droppable-title-${ID}`)).toBeInTheDocument();
        expect(screen.getByText(`1234`)).toBeInTheDocument();
        expect(screen.getByText(`1235`)).toBeInTheDocument();
        expect(screen.getByText(`1236`)).toBeInTheDocument();
    });
  });