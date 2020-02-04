import { Dispatch } from 'redux';
import { RootState } from 'reducers/rootReducer';

function assertIsDefined<T>(val: T): asserts val is NonNullable<T> {
  if (val === undefined || val === null) {
    throw new Error(
      `Expected 'val' to be defined, but received ${val}`
    );
  }
}

let cardID = 4;
export interface CardElement {
  id: string;
  text: string;
}

export interface TodoElement {
  title: string;
  id: string;
  cards: CardElement[];
}

export interface TodoState {
  todo: TodoElement[]
}

export const initTodo: TodoElement[] = [
  {
    title: 'Last',
    id: `list-${0}`,
    cards: [
      { id: `card-${0}`,
        text: 'hello world'
      },
      { id: `card-${1}`,
        text: 'hello world2'
      },
    ]
  },
  {
    title: 'First',
    id: `list-${1}`,
    cards: [
      { id: `card-${2}`,
        text: 'hello world'
      },
      { id: `card-${3}`,
        text: 'hello world2'
      },
    ]
  }
]
export interface DragIds {
  droppableIdStart: string;
  droppableIdEnd: string;
  droppableIndexStart: number;
  droppableIndexEnd: number;
  draggableId: string
}
//actions
export const CREATE_CARD = 'CREATE_CARD' as const;
export const DRAG_CARD = 'DRAG_CARD' as const;

interface CreateCardAction {
  type: typeof CREATE_CARD;
  payload: {listID: string; text: string;};
}

interface DragCardAction {
  type: typeof DRAG_CARD;
  payload: DragIds;
}

export type TodoActionTypes =  CreateCardAction | DragCardAction

export const createCard = (listID: string, text: string) => ({
  type: CREATE_CARD,
  payload: {listID, text}
})

export const dragCard = (dragIds: DragIds) => ({
  type: DRAG_CARD,
  payload: dragIds
})

const todoReducer = (state = initTodo, action: TodoActionTypes): TodoElement[] =>{
  switch(action.type) {
    case CREATE_CARD:
      const newCard = {
        id: `card-${cardID}`,
        text: action.payload.text,
      };
      cardID += 1;
      const newState = state.map(ele => {
        if(ele.id === action.payload.listID) {
          return {
            ...ele,
            cards: [...ele.cards, newCard]
          }
        }else{
          return ele;
        }
      })
      return newState;
    case DRAG_CARD:
      const {
        droppableIdStart,
        droppableIdEnd,
        droppableIndexEnd,
        droppableIndexStart,
        draggableId
      } = action.payload;
      //same list
      if(droppableIdStart === droppableIdEnd) {
        const list = state.find(list => droppableIdStart === list.id)
        assertIsDefined(list)

        const card = list.cards.splice(droppableIndexStart, 1);
        list.cards.splice(droppableIndexEnd, 0, ...card)
      }
      return [...state];
    default:
      return state;
  }
};

export default todoReducer;
