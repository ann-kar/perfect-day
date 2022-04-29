import { faker } from '@faker-js/faker';
import fs from 'fs';

function generateHabits() {

  const habits = []

  for (let id=1; id <= 8; id++) {
    habits.push( {
      id: id,
      name: faker.lorem.lines(1),
      description:faker.lorem.paragraph(),
      history: [faker.datatype.number({
          max: 1,
          min: 0,
          precision: 1
        }),faker.datatype.number({
          max: 1,
          min: 0,
          precision: 1
        }),faker.datatype.number({
          max: 1,
          min: 0,
          precision: 1
        })],
      created_at: faker.date.past(),
      notes: [faker.lorem.paragraph(), faker.lorem.paragraph(), faker.lorem.paragraph()],
      priority: faker.datatype.number({
          max: 5,
          min: 1,
          precision: 1
        }),
      labels:[faker.lorem.word(), faker.lorem.word()],
  });
  }
  return { "data": habits }
}

const habits = generateHabits();

fs.writeFileSync('data.json', JSON.stringify(habits, null, '\t'));
