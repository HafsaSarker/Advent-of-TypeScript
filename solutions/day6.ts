/*
 * Using ts Exclude Type: Exclude<UnionType, ExcludedMembers>
 */

type FilterChildrenBy<T, K> = Exclude<T | K, K>;

// get the naughty kids (-.-)
type Naughty = FilterChildrenBy<"nice" | "naughty" | "naughty", "nice">;

const naughtyKid: Naughty = "naughty";

console.log(naughtyKid);
