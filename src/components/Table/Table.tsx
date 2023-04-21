import { useEffect, useMemo } from "react";
import { useTable } from "react-table";
import { EventItemProps } from "../EventItem/EventItem";
import "./Table.scss";

export default function Table({ events: data }: { events: EventItemProps[] }) {
    const columns = useMemo(
        () => [
            {
                Header: "Event",
                accessor: "event_name",
            },
            {
                Header: "Room",
                accessor: "location",
            },
            {
                Header: "Time",
                accessor: "start",
            },
        ],
        []
    );

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
        // @ts-ignore
        useTable({ columns, data });

    return (
        <table {...getTableProps()}>
            <thead>
                {headerGroups.map((headerGroup) => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map((column) => (
                            <th {...column.getHeaderProps()}>
                                {column.render("Header")}
                            </th>
                        ))}
                    </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {rows.map((row) => {
                    prepareRow(row);
                    return (
                        <tr {...row.getRowProps()}>
                            {row.cells.map((cell) => {
                                return (
                                    <td {...cell.getCellProps()}>
                                        {cell.render("Cell")}
                                    </td>
                                );
                            })}
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}
