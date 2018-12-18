// Find the quantity of the "names" whose "value" is not "null"

const filterQuery = {
  name: 'and-group',
  value: ['1998'], //*
  children: [
    {
      name: 'vehicle.make',
      value: ['Chevrolet'], //*
    },
    {
      name: 'vehicle.model',
      value: null
    },
    {
      name: 'vehicle.vin',
      value: 'value', //*
    },
    {
      name: 'or-group',
      children: [
        {
          name: 'vehicle.year',
          value: ['2000'] //*
        },
        {
          name: 'vehicle.year',
          value: ['2004'] //*
        },
        {
          name: 'vehicle.countryOfSale',
          value: 'value' //*
        }
      ]
    }
  ]
};

function countValues(tree) {
  let count = 0;
  if (tree.value) {
    count++;
  }
  
  if (tree.children) {
    tree.children.forEach(each => {
      count += countValues(each);
    });
  }
  
  return count;
}

console.log(countValues(filterQuery)); //6
