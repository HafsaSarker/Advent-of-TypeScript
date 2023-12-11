type StreetSuffixTester<T extends string, K extends string> = T extends `${string}${K}` ? true : false;

// true
type isShawnAddr = StreetSuffixTester<'Candy Cane Way', 'Way'>;

// false
type isRedAddr = StreetSuffixTester<'Sugar Lane', 'Drive'>