import { useMemo } from "react";

export default function useData() {
    const data = useMemo(
        () => [
            {
                Machine: "Molder-A04",
                ip: "10.209.69.12"
            }, {
                Machine: "Molder-A10",
                ip: "10.209.69.37"
            }
        ],
        []
    );

    return data;
}