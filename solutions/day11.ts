// DeepReadonly

type notNested = (number | string | boolean | bigint | symbol | Function)

type SantaListProtector<T> = {
  readonly [K in keyof T]:
  // is property not of nested type ? 
  T[K] extends notNested ? T[K]
  // property is of type arr or obj
  : SantaListProtector<T[K]>
};
