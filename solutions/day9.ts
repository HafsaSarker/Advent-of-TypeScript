/*
 * Had to cheat on this one :p
 * Used recursive template literal type
 */
type Reverse<T extends string> = T extends `${infer First}${infer Rest}`
  ? `${Reverse<Rest>}${First}`
  : "";

// Test
type test_0 = Reverse<"temoC">;
type test_1 = Reverse<"123">;
