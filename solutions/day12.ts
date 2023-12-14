/*
* topics:
    - object mapping shits
    - string -> number
    - returning a union of numbers
* basic idea:
    - iterates over the array T
    - checks if the value at each index is type santa
        - if so, we can't just return T[K], need to return the index
        as a number, so convert index from string --> number
        - if not, santa not here
    - return union of all numeric values       
*/

type Santa = "🎅🏼";
type FindSanta<T extends string[]> = {
    [K in keyof T]:
    // is property of type santa?
    T[K] extends Santa ?
    (K extends `${infer U extends number}` ? U : never)
    // property is tree or santa aint here
    : never
}[number];


type Forest0 = ["🎅🏼", "🎄", "🎄", "🎄"];
type Forest0_expected = 0;
type Forest0_actual = FindSanta<Forest0>;

// TWO SANTAS?
type Forest1 = ["🎄", "🎅🏼", "🎄", "🎄", "🎄", "🎅🏼", "🎄"];
type Forest1_expected = 1 | 5;
type Forest1_actual = FindSanta<Forest1>;

type Forest3 = ["🎄", "🎄", "🎄", "🎄"];
type Forest3_expected = never;
type Forest3_actual = FindSanta<Forest3>;