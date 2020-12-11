import { useMemo } from "react";

export default function useColumns() {
    const columns = useMemo(
        () => [
            {
                Header: 'Sparks',
                columns: [
                    {
                        Header: "Machine",
                        accessor: "Machine"
                    },
                    {
                        Header: "ip",
                        accessor: "ip"
                    }
                ],
            }
        ],
        []
    );

    return columns;
}