import { Dispatch } from 'redux';
import { RootState } from 'reducers/rootReducer';

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
export const CREATE_TODO = 'CREATE_TODO' as const;

// interface CreateTodoAction {
//   type: typeof CREATE_TODO;
//   payload: ProjectElement;
// }

const todoReducer = (state = initTodo, action: any) =>{
  switch(action.type) {
    default:
      return state;
  }
};

export default todoReducer;
