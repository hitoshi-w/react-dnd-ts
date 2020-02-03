import { Dispatch } from 'redux';
import { RootState } from 'reducers/rootReducer';

let cardID = 3;
export interface CardElement {
  id: number;
  text: string;
}

export interface TodoElement {
  title: string;
  id: number;
  cards: CardElement[];
}

export interface TodoState {
  todo: TodoElement[]
}

export const initTodo: TodoElement[] = [
  {
    title: 'Last',
    id: 0,
    cards: [
      { id: 0,
        text: 'hello world'
      },
      { id: 1,
        text: 'hello world2'
      },
    ]
  },
  {
    title: 'First',
    id: 1,
    cards: [
      { id: 0,
        text: 'hello world'
      },
      { id: 1,
        text: 'hello world2'
      },
    ]
  }
]
//actions
export const CREATE_CARD = 'CREATE_CARD' as const;


interface CreateCardAction {
  type: typeof CREATE_CARD;
  payload: {listID: number; text: string;};
}

export type TodoActionTypes =  CreateCardAction

export const createCard = (listID: number, text: string) => ({
  type: CREATE_CARD,
  payload: {listID, text}
})

const todoReducer = (state = initTodo, action: TodoActionTypes): TodoElement[] =>{
  switch(action.type) {
    case CREATE_CARD:
      const newCard = {
        id: cardID,
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
    default:
      return state;
  }
};

export default todoReducer;
