import React, { ReactElement } from 'react';

import { TDoneItemProps } from './done-item.types';
import { StyledListItem } from './done-item.styled';

export const DoneItem = ({ title }: TDoneItemProps): ReactElement => (
    <StyledListItem>{title}</StyledListItem>
);
