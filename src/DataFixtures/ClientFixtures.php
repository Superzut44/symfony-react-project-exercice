<?php

namespace App\DataFixtures;

use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use App\Entity\Client;

class ClientFixtures extends Fixture
{
    public const CLIENTS = [
        [
            'name' => 'Olususi',
            'firstname' => 'Lorem',
            'email' => 'lorem@ipsum.com',
            'adress' => '11 lorem impsum 51100 Reims',
            'phone' => '01-01-01-01-01'
        ],
        [
            'name' => 'Olususi2',
            'firstname' => 'Lorem2',
            'email' => 'lorem@ipsum.com2',
            'adress' => '12 lorem impsum 51100 Reims',
            'phone' => '02-02-02-02-02'
        ],
        [
            'name' => 'Olususi3',
            'firstname' => 'Lorem3',
            'email' => 'lorem@ipsum.com3',
            'adress' => '13 lorem impsum 51100 Reims',
            'phone' => '03-03-03-03-03'
        ],
        [
            'name' => 'Olususi4',
            'firstname' => 'Lorem4',
            'email' => 'lorem@ipsum.com4',
            'adress' => '14 lorem impsum 51100 Reims',
            'phone' => '04-04-04-04-04'
        ],
        [
            'name' => 'Olususi5',
            'firstname' => 'Lorem5',
            'email' => 'lorem@ipsum.com5',
            'adress' => '15 lorem impsum 51100 Reims',
            'phone' => '05-05-05-05-05'
        ]
    ];

    public function load(ObjectManager $manager): void
    {
        foreach (self::CLIENTS as $key => $clientData) {
            $client = new Client();
            $client->setName($clientData['name']);
            $client->setFirstname($clientData['firstname']);
            $client->setEmail($clientData['email']);
            $client->setAdress($clientData['adress']);
            $client->setPhone($clientData['phone']);

            $manager->persist($client);
        };
        $manager->flush();
    }
}