/*
 * use a mapped type to replace   the values of each property with the type **Address**
 */

type Address = { address: string; city: string };
type PresentDeliveryList<T> = {
  [K in keyof T]: Address;
};

// example use case
type RecipientInfo = {
  john: { behavior: "good" };
};

const deliveryList: PresentDeliveryList<RecipientInfo> = {
  john: { address: "456 Candy Ln", city: "North Pole" },
};

console.log(deliveryList["john"].city);
