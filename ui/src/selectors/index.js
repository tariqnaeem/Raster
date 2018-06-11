import { denormalize } from 'normalizr';
import { createSelector } from 'reselect';
import keys from 'lodash/keys';
import omitBy from 'lodash/omitBy';
import isBoolean from 'lodash/isBoolean';
import * as schema from '../schema';

export const getModal = (state) => state.ui.modal;
export const getNotifications = (state) => state.ui.notification;
export const getEntities = (state) => state.entities;


export const fetchDiscrepancies = (state) => {

    return denormalize(
        state.entities.discrepancies,
        schema.discrepanciesListSchema,
        state.entities
    )
};



export const fetchFiles = (state) => {
    
    return denormalize(
            state.entities.fileList,
            schema.fileListSchema,
            state.entities
    )
};
