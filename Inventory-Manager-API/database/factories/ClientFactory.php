<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Client;
/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Client>
 */
class ClientFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'first_name' => $this->faker->sentence(5),
            'last_name' => $this->faker->sentence(5),
            'email' => fake()->unique()->safeEmail(),
            'phone' => $this->faker->numberBetween(1, 10)
        ];
    }
}
