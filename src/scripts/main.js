'use strict';

const list = document.querySelector('ul');

const formatToSum = (node) => {
  if (typeof node !== 'string') {
    return NaN;
  }

  return node.replace(/[^\d.]/g, '');
};

const sortList = (ul) => {
  const listItems = [...ul.children];

  listItems.sort((person1, person2) => {
    const salary1 = person1.dataset.salary;
    const salary2 = person2.dataset.salary;

    return formatToSum(salary2) - formatToSum(salary1);
  });

  listItems.forEach((item) => list.append(item));
};

const getEmployees = (person) => {
  return {
    name: person.textContent,
    position: person.dataset.position,
    salary: person.dataset.salary,
    age: person.dataset.age,
  };
};

sortList(list);
getEmployees(list);
