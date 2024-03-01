import { createReducer, on } from '@ngrx/store';
import { setUISidebarAction } from './ui.actions';
import { shoppingCartInitialState } from './ui.state';

export const uiReducer = createReducer(
    shoppingCartInitialState,
    on(setUISidebarAction, (state, { showSidebar }) => {

        return {
            ...state,
            showSidebar
        };

    })
);