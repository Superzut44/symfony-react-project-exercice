<?php

namespace App\DataFixtures;

use App\Entity\Client;
use App\Entity\Possession;
use Doctrine\Persistence\ObjectManager;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;

class PossessionFixtures extends Fixture
{
    public const POSSESSIONS = [
        [
            'name' => 'Olususi',
            'value' => 51.24,
            'type' => 'lorem@ipsum',
        ],
        [
            'name' => 'Olususi2',
            'value' => 52.24,
            'type' => 'lorem@ipsum2',
        ],
        [
            'name' => 'Olususi3',
            'value' => 53.24,
            'type' => 'lorem@ipsum3',
        ],
        [
            'name' => 'Olususi4',
            'value' => 54.24,
            'type' => 'lorem@ipsum4',
        ],
        [
            'name' => 'Olususi5',
            'value' => 55.24,
            'type' => 'lorem@ipsum5',
        ],
        [
            'name' => 'Olususi6',
            'value' => 56.24,
            'type' => 'lorem@ipsum6',
        ],
        [
            'name' => 'Olususi7',
            'value' => 57.24,
            'type' => 'lorem@ipsum7',
        ],
        [
            'name' => 'Olususi8',
            'value' => 58.24,
            'type' => 'lorem@ipsum8',
        ],
        [
            'name' => 'Olususi9',
            'value' => 59.24,
            'type' => 'lorem@ipsum9',
        ],
        [
            'name' => 'Olususi10',
            'value' => 60.24,
            'type' => 'lorem@ipsum10',
        ],
    ];

    public function load(ObjectManager $manager): void
    {
        for($x=0; $x<10; $x++) {
            foreach (self::POSSESSIONS as $key => $possessionData) {
                $possession = new Possession();
                $possession->setName($possessionData['name']);
                $possession->setValue($possessionData['value']);
                $possession->setType($possessionData['type']);
                $possession->setClient($this->getReference('client_' . $x));

                $manager->persist($possession);
            }
        }
        $manager->flush();
    }

    public function getDependencies()
    {
        return [
            ClientFixtures::class,
        ];
    }
}
