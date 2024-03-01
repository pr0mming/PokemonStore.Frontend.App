import { createAction, props } from "@ngrx/store";

export const setUISidebarAction = createAction(
    '[UI] Set Sidebar Status',
    props<{ showSidebar: boolean }>()
);
