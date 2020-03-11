import React, { FunctionComponent } from 'react'
import { default as MaterialGrid} from '@material-ui/core/Grid'

interface IProps {}

const GridContainer: FunctionComponent<IProps> = ({ children }) => {
    const devStyles = {
        maxWidth: '100%',
        justifyContent: 'center',
        padding: 20
    };
    return (
        <MaterialGrid style={devStyles} container>
            {children}
        </MaterialGrid>
    )
};

const GridItem: FunctionComponent<IProps> = ({ children }) => {
    return (
      <MaterialGrid item xs={12} sm={6} lg={4} xl={3}>
          {children}
      </MaterialGrid>
    )
};

const Grid = {
    Container: GridContainer,
    Item: GridItem
};

export default Grid;
