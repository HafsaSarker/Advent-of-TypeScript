type SantasList<badList extends readonly any[], goodlist extends readonly any[]> = [...badList, ...goodlist];

// usage example 
const bads = ['tommy', 'trash'] as const;
const goods = ['bash', 'tru'] as const;

type CombinedList = SantasList<typeof bads, typeof goods>;

const santaDeliveryList: CombinedList = [...bads, ...goods];

console.log(santaDeliveryList)
