const setQuery = (table, machine) => {
    return `SELECT A.Time, A.Variable, A.Value, C.Measure, C.Machine, C.Max, C.Min, C.NotSat
    FROM (SELECT Time, Variable, Machine, Value
            FROM ${table}            
            WHERE Machine='${machine}' ) AS A,
        (SELECT Variable, Max(Time) AS Time
            FROM ${table}             
            WHERE Variable in('Cycle','Good','PeakPrs','Mcushion','InjTime','Recovtime')
            GROUP BY Variable) AS B, ${table}_Catalog AS C
    WHERE A.Variable = B.Variable and A.Time = B.Time AND A.Variable = C.Variable AND A.Machine = C.Machine
    ORDER BY Variable`
}

const calcTicks = (max) => {
    if (max > 0 && max < 1.5) {
        let arr = Array.from({ length: (max * 10) + 1 }, (_, i) => i * .1);
        arr = arr.map(function (each_element) {
            return Number(each_element.toFixed(2));
        });
        return arr
    }
    if (max >= 1.5 && max < 5) {
        return Array.from({ length: (max / .5) + 1 }, (_, i) => i * .5)
    }
    if (max >= 5 && max < 10) {
        return Array.from({ length: (max) + 1 }, (_, i) => i * 1)
    }
    if (max >= 10 && max < 30) {
        return Array.from({ length: (max / 5) + 1 }, (_, i) => i * 5)
    }
    if (max >= 30 && max < 150) {
        return Array.from({ length: (max / 10) + 1 }, (_, i) => i * 10)
    }
    if (max >= 150) {
        return Array.from({ length: (max / 100) + 1 }, (_, i) => i * 100)
    }
}

const calcPercent = (value, max) => {
    return Math.floor((value / max) * 100)
}

exports.calcPercent = calcPercent
exports.setQuery = setQuery
exports.calcTicks = calcTicks