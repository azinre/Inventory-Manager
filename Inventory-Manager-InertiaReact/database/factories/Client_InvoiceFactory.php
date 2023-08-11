<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Client_Invoice;
/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Client_Invoice>
 */
class Client_InvoiceFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'item_id' => function () {
                // Assuming you have an 'items' table and you want to assign a random item_id from it
                return \App\Models\Item::all()->random()->id;
            },
            'user_id' => function () {
                // Assuming you have a 'users' table and you want to assign a random user_id from it
                return \App\Models\User::all()->random()->id;
            },
            'client_id' => function () {
                // Assuming you have a 'providers' table and you want to assign a random provider_id from it
                return \App\Models\Client::all()->random()->id;
            },
            'amount' => $this->faker->randomNumber(),
            'total_price' => $this->faker->randomFloat(2, 0, 1000), // Adjust the range according to your needs
        ];
    }
}
