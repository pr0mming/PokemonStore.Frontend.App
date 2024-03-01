import { createFeatureSelector, createSelector } from "@ngrx/store";
import { StoreFeaturesEnum } from "src/app/core/domain/entities/enums/store-features.enum";
import { UIState } from "./ui.state";

export const selectUIFeature = createFeatureSelector<UIState>(StoreFeaturesEnum.UI);
 
export const selectUISidebar = createSelector(
    selectUIFeature,
    (state) => state.showSidebar
);
