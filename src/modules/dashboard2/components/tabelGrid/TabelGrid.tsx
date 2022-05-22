import React from 'react';
import {Paper} from '@mui/material';
import {GridColDef} from '@mui/x-data-grid';
import {getDaysFields, getEmplDays} from '@src/helpers/date';
import {ITabelRow} from '@src/types';
import ReactDataSheet from 'react-datasheet';
import 'react-datasheet/lib/react-datasheet.css';
import {columns, grid} from '@src/modules/dashboard2/components/tabelGrid/grid';

const month = 5;
const year = 2022;

const daysFields = getDaysFields(month, year);

const SheetRenderer = (props: any) => {
    const {className, columns} = props;
    return (
        <table className={ className }>
            <thead>
            <tr>
                { columns.map((col: any, index: any) => (
                    <th
                        className={ `cell ${ className }` }
                        style={ {
                            width: col.width,
                            background: '#f9f9f9',
                            padding: '10px 0px',
                            textAlign: 'center',
                        } }
                    >
                        { col.label }
                    </th>
                )) }
            </tr>
            </thead>
            <tbody>{ props.children }</tbody>
        </table>
    );
};


export interface GridElement extends ReactDataSheet.Cell<GridElement, number> {
    value: any | null;
}

class MyReactDataSheet extends ReactDataSheet<GridElement, number> {
}

interface AppState {
    grid: GridElement[][];
}

const cellRenderer: ReactDataSheet.CellRenderer<GridElement, number> = (props) => {
    const backgroundStyle = props.cell.value && props.cell.value < 0 ? {color: 'red'} : undefined;
    return (
        <td style={ backgroundStyle } onMouseDown={ props.onMouseDown } onMouseOver={ props.onMouseOver }
            onDoubleClick={ props.onDoubleClick } className="cell">
            { props.children }
        </td>
    );
};

const options = [
    {label: 'врач', value: 'врач'},
    {label: 'мед сестра', value: 'мед сестра'},
    {label: 'санитарка', value: 'санитарка'},
    {label: 'вахтер', value: 'вахтер'},
];

const CellRenderer = (props: any) => {
    const {children} = props;
    return (
        <td className="cell" style={ {textAlign: 'center'} }>
            { children }
        </td>
    );
};

const RowRenderer = (props: any) => {
    const { children } = props;
    return <tr>
            { children }
        </tr>
}


const TabelGrid = () => {
    const onCellsChanged = (changes: any) => changes.forEach(({cell, row, col, value}: any) =>
        console.log('New expression :' + value));
    
    const onContextMenu = (e: any, cell: any, i: any, j: any) =>
        cell.readOnly ? e.preventDefault() : null;
    
    const renderRow = (props: any) => {
        const {row, cells, ...rest} = props;
        return <RowRenderer rowIndex={row} {...rest} />
    };
    
    const renderSheet = (props: any) => {
        return <SheetRenderer columns={ columns } {...props}/>;
    };
    
    return (
        <div>
            <Paper sx={ {height: '70vh', width: '100%'} }>
                <MyReactDataSheet
                    data={ grid }
                    valueRenderer={ (cell) => cell.value }
                    onCellsChanged={ onCellsChanged }
                    sheetRenderer={ renderSheet }
                    rowRenderer={ renderRow }
                    // cellRenderer={ cellRenderer }
                    onContextMenu={ onContextMenu }
                />
                {/*<CustomDatagrid*/ }
                {/*    header={ header }*/ }
                {/*    rows={ rows }*/ }
                {/*    className="tabel__grid"*/ }
                {/*    rowClassName="tabel__grid__row"*/ }
                {/*    cellClassName="tabel__grid__cell"*/ }
                {/*    needToolbar*/ }
                {/*    ariaLabel="tabel"*/ }
                {/*    isLoading={ false }*/ }
                {/*/>*/ }
            </Paper>
        </div>
    );
};

export default TabelGrid;
