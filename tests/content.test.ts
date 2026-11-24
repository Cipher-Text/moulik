import {it,expect} from 'vitest';import {foods,FoodSchema} from '../src/lib/content';
it('validates all seed foods and unique stable slugs',()=>{for(const food of foods)expect(FoodSchema.safeParse(food).success).toBe(true);expect(new Set(foods.map(f=>f.slug)).size).toBe(foods.length);expect(foods.length).toBeGreaterThanOrEqual(30)});
