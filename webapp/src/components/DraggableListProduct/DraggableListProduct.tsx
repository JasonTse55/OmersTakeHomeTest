import React from 'react';
import { DraggableProvided, Droppable, Draggable } from 'react-beautiful-dnd';
import DraggableItem from '../DraggableItemProduct/DraggableItemProduct';
import { DraggableListPropsProduct } from '../interfaces';

const DraggableListProduct = (props: DraggableListPropsProduct) => (
    <Droppable droppableId={props.ID}>
        {(provided) => (
            <div
                ref={provided.innerRef}
                className='bg-neutral-500 p-4 w-full'
                data-testid={`droppable-container-${props.ID}`}
            >
                <h5
                    className='font-bold text-white'
                    data-testid={`droppable-title-${props.ID}`}
                >
                    {props.listTitle}
                </h5>
                {
                    props.items.length > 0 && props.items.map((item, index) => (
                        <Draggable
                            key={item.ProductID}
                            draggableId={`${item.ProductID}`}
                            index={index}
                        >
                            {(provided: DraggableProvided) => (
                                <DraggableItem
                                    ProductID={item.ProductID}
                                    ProductName={item.ProductName}
                                    ProductPhotoURL={item.ProductPhotoURL}
                                    ProductStatus={item.ProductStatus}
                                    draggableProvided={provided}
                                    removeProduct={props.removeProduct}
                                />
                            )}
                        </Draggable>
                    ))
                }
                {provided.placeholder}
            </div>
        )}
    </Droppable>
);

export default DraggableListProduct;