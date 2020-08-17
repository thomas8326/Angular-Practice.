//  path = `{space}/projects/{id}?status={aaa}&bbb = {ccc}`;
//   spaceMap = {
//       ['market']: 'market',
//       ['workspace']: 'workspace/showroom'
//     };

//   replace = {
//     ['id']: '123',
//     ['ownerId']: '321',
//     ['space']: 'workspace',
//     // ['aaa']: 'apple'
//   };

const stringFormat = (str: string, args: { [key: string]: string }) => {
    return Object.keys(args).reduce(
      (accumulator, currentValue) => accumulator.replace(new RegExp(`\\{${currentValue}\\}`, 'gm'), args[currentValue]||''),
      str
    )
  } 