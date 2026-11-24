import {foods,FoodSchema} from '../src/lib/content';
for(const food of foods) FoodSchema.parse(food);
if(new Set(foods.map(f=>f.slug)).size!==foods.length) throw new Error('Duplicate food slug');
console.log(`Validated ${foods.length} food records`);
