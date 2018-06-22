export default [
  {
    name: 'sauce',
    action: sauce => {
      switch (sauce) {
        case 'redsauce':
          return 'Red Sauce';
        case 'whitesauce':
          return 'White Sauce';
        case 'none':
          return 'No Sauce';
      }
    }
  },
  {
    name: 'size',
    action: size => `${size}"`
  }
];
